import {agentType, chatHistoryType} from "@/ts/type";
import {getAllFavorites} from "@/app/api/protected/favorite/favorite";
import {headers} from "next/headers";
import {DeleteFavorite} from "@/app/profile/btns";
import {getTitleList} from "@/app/api/protected/history/history";
import {DeleteHistoryBtn} from "@/app/profile/btns";
import Link from "next/link";

export const dynamic = 'force-dynamic'

export default async function ProfilePage() {
  // 代理数据
  const reqHeaders = await headers();
  const userId = reqHeaders.get('X-Authenticated-UserId');
  const agentData: agentType[] = await getAllFavorites(userId || '');
  const chatHistoryData: chatHistoryType[] = await getTitleList(userId || '');
  // 聊天历史数据
  return (
    <>
      <div className="h-full w-full flex justify-center  overflow-y-scroll">
        <div className="w-full h-full max-w-250 p-2">
          <div className="title mt-10 text-xl font-bold">
            个人主页
          </div>
          <div
            className="star mt-4 bg-stone-200 p-4 rounded-xl shadow-lg border-1 border-gray-400/40 dark:bg-stone-700 dark:shadow-black">
            <div className="title text-lg font-semibold">
              我的收藏
            </div>
            <div>
              <ul>
                {agentData.map((item) => (
                  <div key={item.id} className="flex border-t-1 border-gray-400/40 first:border-t-0 p-2 items-center">
                    <div className="min-w-0 truncate">
                      {item.name}
                    </div>
                    <div className="flex-1"></div>
                    <div className="btns flex shrink-0">
                      <DeleteFavorite id={item.id}/>
                      <Link href={'/chat?prompt=' + item.content}>
                        <div className="text-sm bg-green-800 p-1 px-2 text-white rounded-xl ml-4">
                          聊天
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="star mt-4 bg-stone-200 p-4 rounded-xl shadow-lg border-1 border-gray-400/40 dark:bg-stone-700 dark:shadow-black">
            <div className="title text-lg font-semibold">
              我的历史记录
            </div>
            <div>
              <ul>
                {chatHistoryData.map((item) => (
                  <div key={item.sessionId}
                       className="flex border-t-1 border-gray-400/40 first:border-t-0 p-2 items-center">
                    <div className="min-w-0 truncate">
                      {item.title}
                    </div>
                    <div className="flex-1"></div>
                    <div className="btns flex shrink-0">
                      <DeleteHistoryBtn id={item.sessionId}/>
                      <Link href={"/chat?id=" + item.sessionId}>
                        <div className="text-sm bg-green-800 p-1 px-2 text-white rounded-xl ml-4">
                          聊天
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer h-10"></div>
        </div>
      </div>
    </>
  );
}