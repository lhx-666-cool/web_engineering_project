import AgentCard from "@/components/agentCard"
import { agentType, userDataType } from "@/ts/type"
import AddIcon from '@mui/icons-material/Add';
import ModelDonutChart from "@/components/chart";
import {getAgents} from "@/app/api/protected/agent/route";
export default async function AdminPage() {
  const agents: agentType[] = await getAgents();

  const userData: userDataType[] = [
    {
      name: "hxzzz",
      count: 100,
    },
    {
      name: 'xkm',
      count: 98,
    },
    {
      name: "guangtouqiang",
      count: 87,
    }
  ]
  return (
    <>
      <div className="p-4 flex flex-col w-full h-full overflow-y-scroll md:flex-row">
        <div className="w-full md:w-3/4">
          <div className="bg-stone-200/40 w-full rounded-md border-1 border-gray-400/40 shadow-md p-8 dark:bg-stone-900">
            <div className="title text-xl font-semibold">
              模型使用次数占比
            </div>
            <ModelDonutChart />
          </div>
          <div className="bg-stone-200/40 w-full rounded-md border-1 border-gray-400/40 shadow-md p-8 dark:bg-stone-900 mt-8">
            <div className="title text-xl font-semibold">
              Agent列表
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl-grid-cols-4 gap-4 mt-8">
              {agents.map((item) => (
                <div key={item.id}>
                  <AgentCard agent={item} admin={true} />
                </div>
              ))}
              <div className="w-full h-full bg-stone-200 border-2 border-gray-400/40 border-dashed shadow-md shadow-stone-400 rounded-md flex flex-col justify-center items-center dark:bg-stone-700 dark:shadow-stone-900">
                <div className="w-16 h-16">
                  <AddIcon style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="font-semibold">
                  添加Agent
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 md:pl-4 mt-4 md:mt-0">
          <div className="bg-stone-200/40 w-full rounded-md border-1 border-gray-400/40 shadow-md p-8 dark:bg-stone-900">
            <div className="text-xl font-semibold">
              用户列表
            </div>
            <ul className="mt-4">
              <li>
                <div className="flex">
                  <div className="text-yellow-600 text-lg font-semibold opacity-0">
                    0
                  </div>
                  <div className="name ml-2 min-w-0 line-clamp-1 text-ellipsis wrap-anywhere">
                    用户名
                  </div>
                  <div className="flex-1"></div>
                  <div className="">
                    调用次数
                  </div>
                </div>
              </li>
              {userData.map((item, idx) => (
                <li key={item.name} className="mt-2 mb-2">
                  <div className="flex">
                    <div className="text-yellow-600 text-lg font-semibold">
                      {idx + 1}
                    </div>
                    <div className="name ml-2 min-w-0 line-clamp-1 text-ellipsis wrap-anywhere">
                      {item.name}
                    </div>
                    <div className="flex-1"></div>
                    <div className="">
                      {item.count}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}