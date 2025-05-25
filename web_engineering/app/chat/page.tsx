'use client'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Session from "@/ts/session";
import React, {useEffect, useState} from "react";
import {Dialog, DialogTitle, List, ListItem, ListItemButton, ListItemAvatar, Avatar, ListItemText} from '@mui/material';
import {blue} from "@mui/material/colors";
import Image from "next/image";
import ChatgptSvg from "@/assets/chatgpt.svg";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import {useRef} from "react";
import {useSearchParams} from "next/navigation";

export default function ChatPage() {
  // const tests = new Session();
  // const tests2 = new Session([{role: 'assistant', content: 'test2'}], undefined, "测试");
  const [Sessions, SetSessions] = useState<Session[]>([]);
  const [session, setSession] = useState(new Session());
  const [model, setModel] = useState('deepseek-ai/DeepSeek-V3');
  const [modelDialog, setModelDialog] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const divRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const tempSessions: Session[] = []
    fetch('/api/protected/history', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        if (res.code === 200) {
          res.data.forEach((item: { sessionId: string, title: string, message: string }) => {
            const session = new Session(JSON.parse(item.message), item.sessionId, item.title);
            tempSessions.push(session);
          })
          if (searchParams.get('prompt') != null) {
            const newSession = new Session([{
              role: 'system',
              content: searchParams.get('prompt') as string
            }], undefined, '新的聊天')
            SetSessions([newSession, ...tempSessions]);
            setSession(newSession);
          } else if (searchParams.get('id') != null) {
            SetSessions([...tempSessions]);
            setSession(tempSessions.filter(item => item.id === searchParams.get('id'))[0] ?? tempSessions[0]);
          } else {
            SetSessions([...tempSessions]);
            setSession(tempSessions[0]);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }, [searchParams]);

  function handleChangeSession(id: string) {
    setSession(Sessions.filter(item => item.id === id)[0]);
  }

  function handleChangeModel(model: string) {
    setModel(model);
    setModelDialog(false);
  }

  function handleOpenModelDialog() {
    setModelDialog(true);
  }

  function handleCloseModelDialog() {
    setModelDialog(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  const models = ['gpt-4o', 'gemini-2.5-flash-preview-04-17-nothinking', 'deepseek-ai/DeepSeek-V3'];

  async function chat(): Promise<void> {
    if (loading) return;
    setLoading(true);
    session.addMessage({
      role: 'user',
      content: inputValue
    });
    if (session.message.length == 2) {
      session.title = session.message[1].content;
    }
    setInputValue("");
    setSession(session);

    try {
      const response = await fetch('/api/protected/chat', { // 调用你的 API 路由
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: session.message,
          model: model
        }),
      });
      const reader = response.body?.getReader();
      session.addMessage({
        role: 'assistant',
        content: '',
      });
      setSession(new Session(session.message, session.id, session.title)); // 更新 UI 以显示助手的空消息

      const decoder = new TextDecoder();
      while (true) {
        if (!reader) break;
        const {done, value} = await reader.read();
        if (done) {
          setLoading(false);
          fetch('/api/protected/history', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sessionId: session.id,
              title: session.title,
              message: JSON.stringify(session.message)
            }),
          })
          break;
        }
        const chunk = decoder.decode(value, {stream: true});
        session.changeLastMessage(chunk); // 将收到的内容片段添加到最后一个消息
        setSession(new Session(session.message, session.id, session.title));
        SetSessions([session, ...Sessions.filter((item) => item.id !== session.id)]);
      }
    } catch (error) {
      console.error('Error calling proxy API:', error);
    }
  }

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight - divRef.current.clientHeight;
    }
  }, [session])

  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      chat();
    }
  }

  return (
    <>
      <div className="w-full h-full flex">
        <div className="sidebar w-70 h-full max-w-1/2 bg-stone-200 dark:bg-stone-700 hidden sm:block">
          <div className="w-full h-full overflow-y-auto">
            <hr className="text-gray-300 dark:hidden"/>
            <div className="list flex flex-col gap-3 mt-4">
              {Sessions && session && Sessions.map((item) => {
                return (
                  <div key={item.id}
                       className={`p-1 pt-3 pb-3 flex border-1 border-stone-500 ml-2 mr-2 rounded-md cursor-pointer ${item.id === session.id ? 'bg-stone-300 dark:bg-stone-600' : ''}`}
                       onClick={() => {
                         handleChangeSession(item.id);
                       }}>
                    <div>
                      <ChatBubbleOutlineIcon/>
                    </div>
                    <div className="ml-2 flex-1 min-w-0 overflow-hidden text-ellipsis">
                      {item.title}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="relative h-full flex-1 min-w-0 flex justify-center">
          <div className="chat w-4/5 mt-4 overflow-y-auto mb-30" ref={divRef}>
            {session && session.message.map((item, index) => (
              <div key={index}>
                {(item.role === 'assistant' || item.role === 'system') && (
                  <div className="w-full justify-start">
                    <div className="row w-3/4 flex mt-4">
                      <div className="w-10 h-10 mr-5 shrink-0">
                        <SmartToyIcon style={{width: '100%', height: '100%'}}/>
                      </div>
                      <div className="bg-stone-300 p-4 py-2 rounded-lg dark:bg-stone-600/60 min-w-0 break-all">
                        <ReactMarkdown remarkPlugins={[gfm]}>
                          {item.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                )}
                {item.role === 'user' && (
                  <div className="w-full justify-end flex">
                    <div className="row flex justify-end w-3/4 mt-4">
                      <div className="bg-green-600/60 p-4 py-2 rounded-lg dark:bg-green-800 min-w-0 break-all">
                        <ReactMarkdown remarkPlugins={[gfm]}>
                          {item.content}
                        </ReactMarkdown>
                      </div>
                      <div className="w-10 h-10 ml-5 shrink-0">
                        <AccountCircleIcon style={{width: '100%', height: '100%'}}/>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
            }
          </div>
          <div className="input absolute bottom-0 w-full h-22 flex justify-center">
            <div
              className="w-4/5 flex h-10 border-1 border-green-700 rounded-sm bg-stone-200 dark:bg-stone-700 dark:border-green-800">
              <div>
                <div className="w-10 h-full bg-green-600 rounded-xs flex justify-center items-center dark:bg-green-800">
                  <div className="w-6 h-6" onClick={handleOpenModelDialog}>
                    <SmartToyIcon style={{color: 'white', height: '100%', width: '100%'}}/>
                  </div>
                </div>
              </div>
              <input type="text" className="outline-none flex-1 p-2 min-w-0" value={inputValue}
                     onChange={handleInputChange} onKeyUp={handleEnter}/>
              <div>
                <button
                  className="w-10 h-full bg-green-600 rounded-xs flex justify-center items-center dark:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-400 transform duration-300 ease-in-out"
                  disabled={loading}>
                  <div className="w-6 h-6" onClick={chat}>
                    <SendIcon style={{color: 'white', height: '100%', width: '100%'}}/>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog onClose={handleCloseModelDialog} open={modelDialog}>
        <DialogTitle>Set backup account</DialogTitle>
        <List sx={{pt: 0}}>
          {models.map((model) => (
            <ListItem disablePadding key={model}>
              <ListItemButton onClick={() => handleChangeModel(model)}>
                <ListItemAvatar>
                  <Avatar sx={{bgcolor: blue[100], color: blue[600]}}>
                    <Image src={ChatgptSvg} width={30} height={30} alt={'chatgpt'}/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={model}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  )
}