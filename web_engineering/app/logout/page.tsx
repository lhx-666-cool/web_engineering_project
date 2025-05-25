'use client'
import {useRouter} from "next/navigation";

export default function Logout() {
  const router = useRouter();
  fetch('/api/logout', {
    method: 'GET',
  })
    .then(res => res.json())
    .then(res => {
      if (res.code === 200) {
        window.dispatchEvent(new Event('auth-state-changed'));
        router.push("/");
      }
    })
    .catch(e => {
      console.log(e);
    })
}