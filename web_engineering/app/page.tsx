import Search from "@/components/search";
import {agentType} from "@/ts/type";
import AgentCard from "@/components/agentCard";

export default function Home() {
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
            {data.map((item) => {
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
