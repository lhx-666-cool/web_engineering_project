import AgentCard from "@/components/agentCard"
import { agentType, userDataType } from "@/ts/type"
import AddIcon from '@mui/icons-material/Add';
import ModelDonutChart from "@/components/chart";
export default function AdminPage() {
  const data: agentType[] = [
    {
      name: "小红书文案助手",
      desc: "专业的小红书文案助手",
      id: "40539356-1273-407d-84bc-373aca9ed52b",
      content: "小红书",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKUlEQVR4nO1Zv2sUYRAd8Fd5uu99We1SBBQrRbAwgj8L8V/QP8BaBC20somNICoo6s0swSZgozZaxEJtFSSCELTURmzSRcLJLIcs5yV3udx5d8k8GFhud+e9N7Oz+3GfSCAQCIw1DHhv5IqSvwz4YeQXJeeVLBS4qcAFTenQnMjOfnPfmZraVZCHSw7nck5y3jW4llITuWLAu85GyEY3oeRvBT4Yec+JH01M5OsVrintNeCikvcN+Og5u+Xvm5FV4rOSM0WWnW3XsTmRbUYeMeCqV7Wsbo9cMmAj1Y79VPJBQZ7w8GP/rV/5ZZWZ+HuiX0SDDqnq9Zlpe2IMQlr0hhGLjjAeLYsZ4cYfg3pKxzSl6bF/a8l/yithhFusI5rSdJHS8bE3YgMKCSMcfhcsOsLhV96iIxx+tS06wviONDo9BrH65Yi9tTbNolE2ixGN1S9HqyODCtk6RlD+3d8Y5VDgbUcjjociO57Wans0zyefZNlBTemcApeMvGXkMwW+DUwo8LXkIGec07lLDXk+6ZpcW1Xrmka6gdZquw04peQNI18rsNRDZZeUfGXkdQVOes716vjHSEss+36dV17JBQNeKnm3IC/XyfO+Zdaa0CulwBkFbiuwuIb4Rb+mDpxura5jltznHM7lnE3uhaYW30Ncbjszvc6EAt+NfG7AFcuyo29EtksFChxQ4JoBnzz8+DGwv3qN3+P3eg4FXjRzbmhmAoFAQMYCfwADzz6JfvVDzAAAAABJRU5ErkJggg=="
    },
    {
      name: "小红书文案助手",
      desc: "专业的小红书文案助手",
      id: "805a101d-72fd-4536-a012-7bb8c4c28821",
      content: "小红书",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKUlEQVR4nO1Zv2sUYRAd8Fd5uu99We1SBBQrRbAwgj8L8V/QP8BaBC20somNICoo6s0swSZgozZaxEJtFSSCELTURmzSRcLJLIcs5yV3udx5d8k8GFhud+e9N7Oz+3GfSCAQCIw1DHhv5IqSvwz4YeQXJeeVLBS4qcAFTenQnMjOfnPfmZraVZCHSw7nck5y3jW4llITuWLAu85GyEY3oeRvBT4Yec+JH01M5OsVrintNeCikvcN+Og5u+Xvm5FV4rOSM0WWnW3XsTmRbUYeMeCqV7Wsbo9cMmAj1Y79VPJBQZ7w8GP/rV/5ZZWZ+HuiX0SDDqnq9Zlpe2IMQlr0hhGLjjAeLYsZ4cYfg3pKxzSl6bF/a8l/yithhFusI5rSdJHS8bE3YgMKCSMcfhcsOsLhV96iIxx+tS06wviONDo9BrH65Yi9tTbNolE2ixGN1S9HqyODCtk6RlD+3d8Y5VDgbUcjjociO57Wans0zyefZNlBTemcApeMvGXkMwW+DUwo8LXkIGec07lLDXk+6ZpcW1Xrmka6gdZquw04peQNI18rsNRDZZeUfGXkdQVOes716vjHSEss+36dV17JBQNeKnm3IC/XyfO+Zdaa0CulwBkFbiuwuIb4Rb+mDpxura5jltznHM7lnE3uhaYW30Ncbjszvc6EAt+NfG7AFcuyo29EtksFChxQ4JoBnzz8+DGwv3qN3+P3eg4FXjRzbmhmAoFAQMYCfwADzz6JfvVDzAAAAABJRU5ErkJggg=="
    },
    {
      name: "小红书文案助手",
      desc: "专业的小红书文案助手",
      id: "2054fe95-b28d-4bd8-b6ff-21b1c87b3ef5",
      content: "小红书",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKUlEQVR4nO1Zv2sUYRAd8Fd5uu99We1SBBQrRbAwgj8L8V/QP8BaBC20somNICoo6s0swSZgozZaxEJtFSSCELTURmzSRcLJLIcs5yV3udx5d8k8GFhud+e9N7Oz+3GfSCAQCIw1DHhv5IqSvwz4YeQXJeeVLBS4qcAFTenQnMjOfnPfmZraVZCHSw7nck5y3jW4llITuWLAu85GyEY3oeRvBT4Yec+JH01M5OsVrintNeCikvcN+Og5u+Xvm5FV4rOSM0WWnW3XsTmRbUYeMeCqV7Wsbo9cMmAj1Y79VPJBQZ7w8GP/rV/5ZZWZ+HuiX0SDDqnq9Zlpe2IMQlr0hhGLjjAeLYsZ4cYfg3pKxzSl6bF/a8l/yithhFusI5rSdJHS8bE3YgMKCSMcfhcsOsLhV96iIxx+tS06wviONDo9BrH65Yi9tTbNolE2ixGN1S9HqyODCtk6RlD+3d8Y5VDgbUcjjociO57Wans0zyefZNlBTemcApeMvGXkMwW+DUwo8LXkIGec07lLDXk+6ZpcW1Xrmka6gdZquw04peQNI18rsNRDZZeUfGXkdQVOes716vjHSEss+36dV17JBQNeKnm3IC/XyfO+Zdaa0CulwBkFbiuwuIb4Rb+mDpxura5jltznHM7lnE3uhaYW30Ncbjszvc6EAt+NfG7AFcuyo29EtksFChxQ4JoBnzz8+DGwv3qN3+P3eg4FXjRzbmhmAoFAQMYCfwADzz6JfvVDzAAAAABJRU5ErkJggg=="
    },
    {
      name: "小红书文案助手",
      desc: "专业的小红书文案助手",
      id: "353e8326-7a7a-42f5-afa4-fa2bc0a40f19",
      content: "小红书",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKUlEQVR4nO1Zv2sUYRAd8Fd5uu99We1SBBQrRbAwgj8L8V/QP8BaBC20somNICoo6s0swSZgozZaxEJtFSSCELTURmzSRcLJLIcs5yV3udx5d8k8GFhud+e9N7Oz+3GfSCAQCIw1DHhv5IqSvwz4YeQXJeeVLBS4qcAFTenQnMjOfnPfmZraVZCHSw7nck5y3jW4llITuWLAu85GyEY3oeRvBT4Yec+JH01M5OsVrintNeCikvcN+Og5u+Xvm5FV4rOSM0WWnW3XsTmRbUYeMeCqV7Wsbo9cMmAj1Y79VPJBQZ7w8GP/rV/5ZZWZ+HuiX0SDDqnq9Zlpe2IMQlr0hhGLjjAeLYsZ4cYfg3pKxzSl6bF/a8l/yithhFusI5rSdJHS8bE3YgMKCSMcfhcsOsLhV96iIxx+tS06wviONDo9BrH65Yi9tTbNolE2ixGN1S9HqyODCtk6RlD+3d8Y5VDgbUcjjociO57Wans0zyefZNlBTemcApeMvGXkMwW+DUwo8LXkIGec07lLDXk+6ZpcW1Xrmka6gdZquw04peQNI18rsNRDZZeUfGXkdQVOes716vjHSEss+36dV17JBQNeKnm3IC/XyfO+Zdaa0CulwBkFbiuwuIb4Rb+mDpxura5jltznHM7lnE3uhaYW30Ncbjszvc6EAt+NfG7AFcuyo29EtksFChxQ4JoBnzz8+DGwv3qN3+P3eg4FXjRzbmhmAoFAQMYCfwADzz6JfvVDzAAAAABJRU5ErkJggg=="
    },
    {
      name: "小红书文案助手",
      desc: "专业的小红书文案助手",
      id: "5fcecac7-a545-4bf3-baf2-3ed88acde2aa",
      content: "小红书",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKUlEQVR4nO1Zv2sUYRAd8Fd5uu99We1SBBQrRbAwgj8L8V/QP8BaBC20somNICoo6s0swSZgozZaxEJtFSSCELTURmzSRcLJLIcs5yV3udx5d8k8GFhud+e9N7Oz+3GfSCAQCIw1DHhv5IqSvwz4YeQXJeeVLBS4qcAFTenQnMjOfnPfmZraVZCHSw7nck5y3jW4llITuWLAu85GyEY3oeRvBT4Yec+JH01M5OsVrintNeCikvcN+Og5u+Xvm5FV4rOSM0WWnW3XsTmRbUYeMeCqV7Wsbo9cMmAj1Y79VPJBQZ7w8GP/rV/5ZZWZ+HuiX0SDDqnq9Zlpe2IMQlr0hhGLjjAeLYsZ4cYfg3pKxzSl6bF/a8l/yithhFusI5rSdJHS8bE3YgMKCSMcfhcsOsLhV96iIxx+tS06wviONDo9BrH65Yi9tTbNolE2ixGN1S9HqyODCtk6RlD+3d8Y5VDgbUcjjociO57Wans0zyefZNlBTemcApeMvGXkMwW+DUwo8LXkIGec07lLDXk+6ZpcW1Xrmka6gdZquw04peQNI18rsNRDZZeUfGXkdQVOes716vjHSEss+36dV17JBQNeKnm3IC/XyfO+Zdaa0CulwBkFbiuwuIb4Rb+mDpxura5jltznHM7lnE3uhaYW30Ncbjszvc6EAt+NfG7AFcuyo29EtksFChxQ4JoBnzz8+DGwv3qN3+P3eg4FXjRzbmhmAoFAQMYCfwADzz6JfvVDzAAAAABJRU5ErkJggg=="
    },
    {
      name: "小红书文案助手",
      desc: "专业的小红书文案助手",
      id: "83f4da80-cab8-4b76-afb2-96da20529369",
      content: "小红书",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKUlEQVR4nO1Zv2sUYRAd8Fd5uu99We1SBBQrRbAwgj8L8V/QP8BaBC20somNICoo6s0swSZgozZaxEJtFSSCELTURmzSRcLJLIcs5yV3udx5d8k8GFhud+e9N7Oz+3GfSCAQCIw1DHhv5IqSvwz4YeQXJeeVLBS4qcAFTenQnMjOfnPfmZraVZCHSw7nck5y3jW4llITuWLAu85GyEY3oeRvBT4Yec+JH01M5OsVrintNeCikvcN+Og5u+Xvm5FV4rOSM0WWnW3XsTmRbUYeMeCqV7Wsbo9cMmAj1Y79VPJBQZ7w8GP/rV/5ZZWZ+HuiX0SDDqnq9Zlpe2IMQlr0hhGLjjAeLYsZ4cYfg3pKxzSl6bF/a8l/yithhFusI5rSdJHS8bE3YgMKCSMcfhcsOsLhV96iIxx+tS06wviONDo9BrH65Yi9tTbNolE2ixGN1S9HqyODCtk6RlD+3d8Y5VDgbUcjjociO57Wans0zyefZNlBTemcApeMvGXkMwW+DUwo8LXkIGec07lLDXk+6ZpcW1Xrmka6gdZquw04peQNI18rsNRDZZeUfGXkdQVOes716vjHSEss+36dV17JBQNeKnm3IC/XyfO+Zdaa0CulwBkFbiuwuIb4Rb+mDpxura5jltznHM7lnE3uhaYW30Ncbjszvc6EAt+NfG7AFcuyo29EtksFChxQ4JoBnzz8+DGwv3qN3+P3eg4FXjRzbmhmAoFAQMYCfwADzz6JfvVDzAAAAABJRU5ErkJggg=="
    }, {
      name: "小红书文案助手",
      desc: "专业的小红书文案助手",
      id: "a1f2f85d-42f7-4e90-b3c9-3e64983e8d2d",
      content: "小红书",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKUlEQVR4nO1Zv2sUYRAd8Fd5uu99We1SBBQrRbAwgj8L8V/QP8BaBC20somNICoo6s0swSZgozZaxEJtFSSCELTURmzSRcLJLIcs5yV3udx5d8k8GFhud+e9N7Oz+3GfSCAQCIw1DHhv5IqSvwz4YeQXJeeVLBS4qcAFTenQnMjOfnPfmZraVZCHSw7nck5y3jW4llITuWLAu85GyEY3oeRvBT4Yec+JH01M5OsVrintNeCikvcN+Og5u+Xvm5FV4rOSM0WWnW3XsTmRbUYeMeCqV7Wsbo9cMmAj1Y79VPJBQZ7w8GP/rV/5ZZWZ+HuiX0SDDqnq9Zlpe2IMQlr0hhGLjjAeLYsZ4cYfg3pKxzSl6bF/a8l/yithhFusI5rSdJHS8bE3YgMKCSMcfhcsOsLhV96iIxx+tS06wviONDo9BrH65Yi9tTbNolE2ixGN1S9HqyODCtk6RlD+3d8Y5VDgbUcjjociO57Wans0zyefZNlBTemcApeMvGXkMwW+DUwo8LXkIGec07lLDXk+6ZpcW1Xrmka6gdZquw04peQNI18rsNRDZZeUfGXkdQVOes716vjHSEss+36dV17JBQNeKnm3IC/XyfO+Zdaa0CulwBkFbiuwuIb4Rb+mDpxura5jltznHM7lnE3uhaYW30Ncbjszvc6EAt+NfG7AFcuyo29EtksFChxQ4JoBnzz8+DGwv3qN3+P3eg4FXjRzbmhmAoFAQMYCfwADzz6JfvVDzAAAAABJRU5ErkJggg=="
    }
  ]
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
              {data.map((item) => (
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