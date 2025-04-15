'use client'
import SearchIcon from '@mui/icons-material/Search';
export default function Search() {
  return (
    <>
      <div className="search border-stone-600 border-2 w-full h-12 p-2 pl-4 pr-4 rounded-xl flex justify-center items-center"> 
        <input type="text" className="outline-none flex-1 w-full" placeholder="Search"/>
        <div className="icon w-4 ml-4 h-12 flex justify-center items-center">
          <SearchIcon />
        </div>
      </div>
    </>
  )
}