import Logo from '@/assets/logo.png'
import Image from 'next/image'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
export default function Navbar() {
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
            <div className='w-12 h-12'>
              <AccountCircleIcon style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}