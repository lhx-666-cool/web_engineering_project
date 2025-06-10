import Search from "@/components/search";
import {agentType} from "@/ts/type";
import AgentCard from "@/components/agentCard";
import {getAgents} from "@/app/api/protected/agent/agent";

export const dynamic = 'force-dynamic'

export default async function Home() {
  const agents: agentType[] = await getAgents();
  return (
    <>
      <div className="w-full h-full">
        <div className="box w-full h-ull flex flex-col">
          <div className="search mt-10 flex justify-center items-center">
            <div className="w-4/5 max-w-100">
              <Search/>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-10 gap-4">
            {agents.map((item) => {
              return (
                <div key={item.id}>
                  <AgentCard agent={item} admin={false}/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}
