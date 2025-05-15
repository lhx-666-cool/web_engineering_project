'use client';

import { useState, useEffect } from 'react';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';

export default function Navbar() {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const res = await fetch('/api/user');
        if (res.ok) {
          const data = await res.json();
          setUsername(data.username);
        } else {
          // Handle cases where user is not authenticated or API returns error
          setUsername(null); // Or set to a default like 'Guest'
        }
      } catch (error) {
        console.error('Failed to fetch username:', error);
        setUsername(null); // Handle fetch errors
      }
    };

    fetchUsername();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      <div className="navbar bg-stone-200 h-full w-full dark:bg-stone-900">
        <div className="w-full h-full flex">
          <Link href={'/'}>
            <div className="logo h-full flex items-center ml-4">
              <div className="image relative w-14 h-14 rounded-2xl overflow-hidden">
                <Image src={Logo} alt='logo' layout='fill' />
              </div>
            </div>
          </Link>

          <div className='text-2xl font-extrabold leading-18 ml-5'>
            Chat AI
          </div>
          <div className='flex-1'>
          </div>
          <div className='h-full flex items-center mr-4'>
            {username && <span className="mr-2 text-lg font-semibold">{username}</span>}
            <div className='w-12 h-12'>
              <AccountCircleIcon style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}