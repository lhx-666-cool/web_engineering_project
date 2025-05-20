import {agentType, chatHistoryType} from "@/ts/type";

export default function ProfilePage() {
  // 代理数据
  const agentData: agentType[] = [
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
  ];

  // 聊天历史数据
  const chatHistoryData: chatHistoryType[] = [
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
  ];

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
                      <button className="text-sm bg-red-700/70 p-1 px-2 text-white rounded-xl">
                        取消收藏
                      </button>
                      <button className="text-sm bg-green-800 p-1 px-2 text-white rounded-xl ml-4">
                        聊天
                      </button>
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
                  <div key={item.id} className="flex border-t-1 border-gray-400/40 first:border-t-0 p-2 items-center">
                    <div className="min-w-0 truncate">
                      {item.title}
                    </div>
                    <div className="flex-1"></div>
                    <div className="btns flex shrink-0">
                      <button className="text-sm bg-red-700/70 p-1 px-2 text-white rounded-xl">
                        删除
                      </button>
                      <button className="text-sm bg-green-800 p-1 px-2 text-white rounded-xl ml-4">
                        聊天
                      </button>
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