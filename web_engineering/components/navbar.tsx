'use client';

import React, {useState, useEffect} from 'react';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
import {Box, IconButton, Menu, MenuItem, Tooltip, Typography} from '@mui/material';
import {useRouter} from "next/navigation";

export default function Navbar() {
  const [username, setUsername] = useState<string | null>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const [settings, setSettings] = useState(
    [{
      name: '主页',
      src: "/"
    }, {
      name: '我的',
      src: "/profile"
    }, {
      name: "聊天",
      src: "/chat"
    }, {
      name: "退出登录",
      src: "/logout"
    }]
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (src?: string) => {

    setAnchorElUser(null);
    if (src !== undefined) {
      router.push(src);
    }
  };
  const fetchUsername = async (): Promise<void> => {
    try {
      const res = await fetch('/api/user');
      if (res.ok) {
        const data = await res.json();
        setUsername(data.username);
        setIsLogin(true);
        if (data.role === '1') {
          console.log("admin");
          setSettings([{
            name: '主页',
            src: "/"
          }, {
            name: '我的',
            src: "/profile"
          }, {
            name: "聊天",
            src: "/chat"
          }, {
            name: "管理员面板",
            src: "/admin"
          }, {
            name: "退出登录",
            src: "/logout"
          }]);
        }
      } else {
        // Handle cases where user is not authenticated or API returns error
        setUsername("未登录"); // Or set to a default like 'Guest'
        setIsLogin(false);
      }
    } catch (error) {
      console.log('Failed to fetch username:', error);
      setUsername("未登录"); // Or set to a default like 'Guest'
      setIsLogin(false)
    }
  };

  useEffect(() => {
    fetchUsername();
    // Add event listener for auth state changes
    window.addEventListener('auth-state-changed', fetchUsername);
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('auth-state-changed', fetchUsername);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      <div className="navbar bg-stone-200 h-full w-full dark:bg-stone-900">
        <div className="w-full h-full flex">
          <Link href={'/'}>
            <div className="logo h-full flex items-center ml-4">
              <div className="image relative w-14 h-14 rounded-2xl overflow-hidden">
                <Image src={Logo} alt='logo' layout='fill'/>
              </div>
            </div>
          </Link>

          <div className='text-2xl font-extrabold leading-18 ml-5'>
            Chat AI
          </div>
          <div className='flex-1'>
          </div>
          <div className='h-full flex items-center mr-4'>
            {!isLogin && <Link href={'/login'}><span className="mr-2 text-lg font-semibold">登录</span></Link>}
            {isLogin && <span className="mr-2 text-lg font-semibold">{username}</span>}
            <Box sx={{flexGrow: 0}}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                  <div className="w-12 h-12">
                    <AccountCircleIcon sx={{width: "100%", height: "100%"}}/>
                  </div>
                </IconButton>
              </Tooltip>
              {<Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={() => {
                  handleCloseUserMenu()
                }}
              >
                {isLogin && settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={() => {
                    handleCloseUserMenu(setting.src)
                  }}>
                    <Typography sx={{textAlign: 'center'}}>{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>}
            </Box>
          </div>
        </div>
      </div>
    </>
  )
}