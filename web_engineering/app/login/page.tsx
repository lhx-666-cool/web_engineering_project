import Link from "next/link"
export default function Login() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-stone-100 dark:bg-stone-800">
        <div className="w-4/5 max-w-120 h-80 flex flex-col items-center rounded-md shadow-2xl bg-stone-50 dark:bg-stone-700">
          <div className="desc mt-8 font-extrabold text-2xl">
            登录 ChatAI
          </div>
          <div className="row mt-8 flex items-center w-full pl-10 pr-10">
            <div className="label text-lg font-semibold w-20 text-right">
              用户名: 
            </div>
            <input type="text" className="outline-none border-stone-400 bg-stone-200 border-2 rounded-md ml-4 h-10 flex-1 p-2 min-w-0 dark:bg-stone-600 dark:border-stone-500"/>
          </div>
          <div className="row mt-8 flex items-center w-full pl-10 pr-10">
            <div className="label text-lg font-semibold w-20 text-right">
              密码: 
            </div>
            <input type="text" className="outline-none border-stone-400 bg-stone-200 border-2 rounded-md ml-4 h-10 flex-1 p-2 min-w-0 dark:bg-stone-600 dark:border-stone-500"/>
          </div>
          <div className="btns mt-8">
            <button className="bg-green-700 p-2 px-8 rounded-xl text-white font-semibold dark:bg-green-800 cursor-pointer">
              登录
            </button>
          </div>
          <div className="mt-2 text-sm">
            没有账号？<Link href={'/register'}><span className="text-blue-500 cursor-pointer">去注册</span></Link>
          </div>
        </div>
      </div>
    </>
  )
}