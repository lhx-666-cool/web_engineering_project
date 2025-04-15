import { agentType } from "@/ts/type";
import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import DeleteIcon from '@mui/icons-material/Delete';

interface AgentCardProps {
  agent: agentType,
  admin: boolean,
}
export default function AgentCard({ agent, admin }: AgentCardProps) {
  return (
    <>
      <div className="w-full h-full bg-stone-200 dark:bg-stone-700 p-4 shadow-md shadow-stone-400 dark:shadow-stone-900 flex flex-col rounded-xl border-1 border-gray-400/40">
        <div className="w-full flex justify-between gap-4">
          <div className="img w-8 h-8 dark:bg-stone-300 p-1 rounded-md">
            <div className="w-full h-full relative">
              <Image src={agent.icon} alt="icon" layout="fill" />
            </div>
          </div>
          <div className="right flex-1">
            <div className="name">
              {agent.name}
            </div>
            <div className="desc mt-2 text-sm text-gray-600 dark:text-gray-300">
              {agent.desc}
            </div>
          </div>
        </div>
        <div className="flex justify-around mt-4 text-white">
          {!admin &&
            <div className="star w-20 bg-yellow-600 h-6 rounded-md flex justify-center items-center gap-2 shadow-md shadow-yellow-800 cursor-pointer">
              <div className="icon h-4 w-4 flex justify-center items-center">
                <StarIcon style={{ width: '100%', height: '100%', color: 'white' }} />
              </div>
              <div className="text-sm">
                收藏
              </div>
            </div>}
          {admin &&
            <div className="w-20 bg-red-700 h-6 rounded-md flex justify-center items-center gap-2 shadow-md shadow-red-900 cursor-pointer">
              <div className="icon h-4 w-4 flex justify-center items-center">
                <DeleteIcon style={{ width: '100%', height: '100%', color: 'white' }} />
              </div>
              <div className="text-sm">
                删除
              </div>
            </div>}
          <div className="chat w-20 bg-green-600 h-6 rounded-md flex justify-center items-center gap-2 shadow-md shadow-green-900 cursor-pointer">
            <div className="icon h-4 w-4 flex justify-center items-center">
              <ChatBubbleIcon style={{ width: '100%', height: '100%', color: 'white' }} />
            </div>
            <div className="text-sm">
              聊天
            </div>
          </div>
        </div>
      </div>
    </>
  )
}