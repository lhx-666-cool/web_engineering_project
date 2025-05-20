import Link from "next/link";
import LoginForm from "@/components/LoginForm"; // Import the new client component

export default function Login() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-stone-100 dark:bg-stone-800">
        <div
          className="w-4/5 max-w-120 h-80 flex flex-col items-center rounded-md shadow-2xl bg-stone-50 dark:bg-stone-700">
          <div className="desc mt-8 font-extrabold text-2xl">
            登录 ChatAI
          </div>
          {/* Render the client-side LoginForm component */}
          <LoginForm/>
          <div className="mt-2 text-sm">
            没有账号？<Link href={'/register'}><span className="text-blue-500 cursor-pointer">去注册</span></Link>
          </div>
        </div>
      </div>
    </>
  );
}