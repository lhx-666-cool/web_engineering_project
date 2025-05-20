'use client'
import DeleteIcon from "@mui/icons-material/Delete";
import {useRouter} from "next/navigation";
import {useSnackbar} from "notistack";

export default function DelAgentBtn({id}: { id: string }) {
  const {enqueueSnackbar} = useSnackbar();
  const router = useRouter();

  function deleteAgent() {
    fetch('/api/protected/agent', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id
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
      <div
        className="w-20 bg-red-700 h-6 rounded-md flex justify-center items-center gap-2 shadow-md shadow-red-900 cursor-pointer"
        onClick={deleteAgent}>
        <div className="icon h-4 w-4 flex justify-center items-center">
          <DeleteIcon style={{width: '100%', height: '100%', color: 'white'}}/>
        </div>
        <div className="text-sm">
          删除
        </div>
      </div>
    </>
  )
}