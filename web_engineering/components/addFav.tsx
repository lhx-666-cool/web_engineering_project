'use client'
import {useRouter} from "next/navigation";
import {useSnackbar} from "notistack";
import StarIcon from "@mui/icons-material/Star";

export default function AddFavorite({id}: { id: string }) {
  const router = useRouter();
  const {enqueueSnackbar} = useSnackbar();
  function handleClick() {
    fetch('/api/protected/favorite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agentId: id
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.code === 200) {
          enqueueSnackbar("收藏成功", {variant: 'success'});
          router.refresh();
        }
      })
      .catch(e => {
        if (e instanceof Error) {
          enqueueSnackbar(e.message, {variant: 'error'});
        }
      })
  }
  return (
    <button
      className="star w-20 bg-yellow-600 h-6 rounded-md flex justify-center items-center gap-2 shadow-md shadow-yellow-800 cursor-pointer" onClick={handleClick}>
      <div className="icon h-4 w-4 flex justify-center items-center">
        <StarIcon style={{width: '100%', height: '100%', color: 'white'}}/>
      </div>
      <div className="text-sm">
        收藏
      </div>
    </button>
  )
}