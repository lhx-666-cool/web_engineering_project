'use client'
import AddIcon from "@mui/icons-material/Add";
import {useSnackbar} from "notistack";
import {useRouter} from "next/navigation";
import {
  Avatar,
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@mui/material";
import React from "react";

export default function AddAgent() {
  const {enqueueSnackbar} = useSnackbar();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  }
  const [avatarSrc, setAvatarSrc] = React.useState<string | undefined>(undefined);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Read the file as a data URL
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  function AddAgent(name: string, desc: string, content: string, icon: string) {
    fetch('/api/protected/agent', {
      method: 'POST',
      body: JSON.stringify({
        name, desc, content, icon
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.code === 200) {
          enqueueSnackbar('添加成功', {variant: 'success'});
          router.refresh();
        }
      })
      .catch(err => {
        if (err instanceof Error) {
          enqueueSnackbar('添加失败:' + err.message, {variant: 'error'});
        }
      })
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const name = formData.get("name") as string;
              const desc = formData.get("desc") as string;
              const content = formData.get("content") as string;
              if (avatarSrc === undefined) {
                enqueueSnackbar("请上传头像", {variant: 'error'});
                return;
              }
              AddAgent(name, desc, content, avatarSrc);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>添加Agent</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Agent Name"
            type="text"
            fullWidth
            variant="outlined"
          />
          <br/>
          <TextField
            autoFocus
            required
            margin="dense"
            id="desc"
            name="desc"
            label="Agent Description"
            type="text"
            fullWidth
            variant="outlined"
          />
          <br/>
          <TextField
            autoFocus
            required
            margin="dense"
            id="content"
            name="content"
            label="Agent Content"
            type="text"
            fullWidth
            variant="outlined"
          />
          <div className="flex items-center mt-2">
            <div className="mr-2 text-[#c4c4c4]">Avatar:</div>
            <ButtonBase
              component="label"
              role={undefined}
              tabIndex={-1} // prevent label from tab focus
              aria-label="Avatar image"
              sx={{
                borderRadius: '40px',
                '&:has(:focus-visible)': {
                  outline: '2px solid',
                  outlineOffset: '2px',
                },
              }}
            >
              <Avatar alt="Upload new avatar" src={avatarSrc}/>
              <input
                type="file"
                accept="image/*"
                style={{
                  border: 0,
                  clip: 'rect(0 0 0 0)',
                  height: '1px',
                  margin: '-1px',
                  overflow: 'hidden',
                  padding: 0,
                  position: 'absolute',
                  whiteSpace: 'nowrap',
                  width: '1px',
                }}
                onChange={handleAvatarChange}
              />
            </ButtonBase>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button type="submit">添加</Button>
        </DialogActions>
      </Dialog>
      <div onClick={() => {
        setOpen(true)
      }} className="cursor-pointer flex flex-col justify-center items-center">
        <div className="w-16 h-16">
          <AddIcon style={{width: '100%', height: '100%'}}/>
        </div>
        <div className="font-semibold">
          添加Agent
        </div>
      </div>
    </>
  )
}