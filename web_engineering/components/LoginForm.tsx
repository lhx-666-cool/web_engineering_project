'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    setError(''); // Clear previous errors
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Login successful
      const redirectUrl = new URLSearchParams(window.location.search).get('redirect') || '/';
      router.push(redirectUrl);
    } else {
      // Login failed, show error message
      setError(data.message || '登录失败');
    }
  };

  return (
    <>
      <div className="row mt-8 flex items-center w-full pl-10 pr-10">
        <div className="label text-lg font-semibold w-20 text-right">
          用户名:
        </div>
        <input
          type="text"
          className="outline-none border-stone-400 bg-stone-200 border-2 rounded-md ml-4 h-10 flex-1 p-2 min-w-0 dark:bg-stone-600 dark:border-stone-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="row mt-8 flex items-center w-full pl-10 pr-10">
        <div className="label text-lg font-semibold w-20 text-right">
          密码:
        </div>
        <input
          type="password" // Use type="password" for password input
          className="outline-none border-stone-400 bg-stone-200 border-2 rounded-md ml-4 h-10 flex-1 p-2 min-w-0 dark:bg-stone-600 dark:border-stone-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div className="text-red-500 mt-4">{error}</div>} {/* Display error message */}
      <div className="btns mt-8">
        <button
          className="bg-green-700 p-2 px-8 rounded-xl text-white font-semibold dark:bg-green-800 cursor-pointer"
          onClick={handleLogin}
        >
          登录
        </button>
      </div>
    </>
  );
}