'use client'
import {useRouter} from "next/navigation";
import {useSnackbar} from "notistack";

export function DeleteFavorite({id}: { id: string }) {
  const router = useRouter();
  const {enqueueSnackbar} = useSnackbar();

  function handleClick() {
    fetch('/api/protected/favorite', {
      method: 'DELETE',
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
          enqueueSnackbar("删除成功", {variant: 'success'});
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
    <>
      <button className="text-sm bg-red-700/70 p-1 px-2 text-white rounded-xl cursor-pointer" onClick={handleClick}>
        取消收藏
      </button>
    </>)
}

export function DeleteHistoryBtn({id}: { id: string }) {
  const router = useRouter();
  const {enqueueSnackbar} = useSnackbar();

  function handleDelete() {
    fetch('/api/protected/history', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId: id,
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.code === 200) {
          enqueueSnackbar("删除成功", {variant: 'success'});
          router.refresh()
        }
      })
      .catch(e => {
        if (e instanceof Error) {
          enqueueSnackbar(e.message, {variant: 'error'});
        }
      })
  }

  return (
    <button className="text-sm bg-red-700/70 p-1 px-2 text-white rounded-xl cursor-pointer" onClick={() => {
      handleDelete()
    }}>
      删除
    </button>
  )
}