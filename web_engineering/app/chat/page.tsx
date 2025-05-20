import {chatHistoryType} from "@/ts/type"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SmartToyIcon from '@mui/icons-material/SmartToy';

export default function ChatPage() {
  const data: chatHistoryType[] = [
    {
      title: "114514",
      id: "114514",
    },
    {
      title: "114515",
      id: "114515",
    },
    {
      title: "114516",
      id: "114516",
    },
    {
      title: "114517",
      id: "114517",
    },
    {
      title: "114518",
      id: "114518",
    },
    {
      title: "abitbtbitiutiitititdsdsddddddd",
      id: "1145110",
    },
    {
      title: "abitbtbitiutiitititdsdsddddddd",
      id: "114511",
    },
    {
      title: "abitbtbitiutiitititdsdsddddddd",
      id: "114512",
    },
    {
      title: "abitbtbitiutiitititdsdsddddddd",
      id: "114513",
    },
  ]

  return (
    <>
      <div className="w-full h-full flex">
        <div className="sidebar w-70 h-full max-w-1/2 bg-stone-200 dark:bg-stone-700 hidden sm:block">
          <div className="w-full h-full overflow-y-auto">
            <hr className="text-gray-300 dark:hidden"/>
            <div className="list flex flex-col gap-3 mt-4">
              {data.map((item) => {
                return (
                  <div key={item.id} className="p-1 pt-3 pb-3 flex border-1 border-stone-500 ml-2 mr-2 rounded-md">
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
          <div className="chat w-4/5 mt-4">
            <div className="w-full justify-end flex">
              <div className="row flex justify-end w-3/4">
                <div className="bg-green-600/60 p-4 py-2 rounded-lg dark:bg-green-800 min-w-0">
                  你好
                  <br/>
                  你好
                </div>
                <div className="w-10 h-10 ml-5">
                  <AccountCircleIcon style={{width: '100%', height: '100%'}}/>
                </div>
              </div>
            </div>
            <div className="w-full justify-start">
              <div className="row w-3/4 flex mt-4">
                <div className="w-10 h-10 mr-5 shrink-0">
                  <SmartToyIcon style={{width: '100%', height: '100%'}}/>
                </div>
                <div className="bg-green-600/60 p-4 py-2 rounded-lg dark:bg-green-800 min-w-0">
                  你好，我是AI，请问有什么可以帮助你的？
                </div>
              </div>
            </div>
          </div>
          <div className="input absolute bottom-0 w-full h-22 flex justify-center">
            <div
              className="w-4/5 flex h-10 border-1 border-green-700 rounded-sm bg-stone-200 dark:bg-stone-700 dark:border-green-800">
              <div>
                <div className="w-10 h-full bg-green-600 rounded-xs flex justify-center items-center dark:bg-green-800">
                  <div className="w-6 h-6">
                    <AttachFileIcon style={{color: 'white', height: '100%', width: '100%'}}/>
                  </div>
                </div>
              </div>
              <input type="text" className="outline-none flex-1 p-2 min-w-0"/>
              <div>
                <div className="w-10 h-full bg-green-600 rounded-xs flex justify-center items-center dark:bg-green-800">
                  <div className="w-6 h-6">
                    <SendIcon style={{color: 'white', height: '100%', width: '100%'}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}