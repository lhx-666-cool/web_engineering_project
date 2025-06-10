'use client'
import Link from "next/link"
import {useRouter} from "next/navigation";
import {useSnackbar} from "notistack";
import {useState} from "react";

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const {enqueueSnackbar} = useSnackbar();
    const handleSubmit = async () => {
        const resp = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password}),
        })
        const data = await resp.json();
        if (resp.ok) {
            enqueueSnackbar("注册成功", {variant: 'success'});
            router.replace('/login');
        } else {
            enqueueSnackbar(data.message, {variant: 'error'});
        }
    }
    return (
        <>
            <div className="w-full h-full flex justify-center items-center bg-stone-100 dark:bg-stone-800">
                <div
                    className="w-4/5 max-w-120 h-80 flex flex-col items-center rounded-md shadow-2xl bg-stone-50 dark:bg-stone-700">
                    <div className="desc mt-8 font-extrabold text-2xl">
                        注册 ChatAI
                    </div>
                    <div className="row mt-8 flex items-center w-full pl-10 pr-10">
                        <div className="label text-lg font-semibold w-20 text-right">
                            用户名:
                        </div>
                        <input type="text"
                               className="outline-none border-stone-400 bg-stone-200 border-2 rounded-md ml-4 h-10 flex-1 p-2 min-w-0 dark:bg-stone-600 dark:border-stone-500"
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="row mt-8 flex items-center w-full pl-10 pr-10">
                        <div className="label text-lg font-semibold w-20 text-right">
                            密码:
                        </div>
                        <input type="text"
                               className="outline-none border-stone-400 bg-stone-200 border-2 rounded-md ml-4 h-10 flex-1 p-2 min-w-0 dark:bg-stone-600 dark:border-stone-500"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="btns mt-8">
                        <button
                            className="bg-green-700 p-2 px-8 rounded-xl text-white font-semibold dark:bg-green-800 cursor-pointer"
                            onClick={handleSubmit}>
                            注册
                        </button>
                    </div>
                    <div className="mt-2 text-sm">
                        已有账号？<Link href={'/login'}><span
                        className="text-blue-500 cursor-pointer">去登录</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}