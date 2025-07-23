"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLogin,setLogin] = useState(false)
  const router = useRouter()
  useEffect(() => {
    // Simulate a login check
    const timer = setTimeout(() => {
      setLogin(true); // Set login state to true after 2 seconds
    }, 2000);
  }, []);
  useEffect(() => {
    if (isLogin) {
      router.push('/dashboard'); // Redirect to dashboard if logged in
    } else {
      router.push('/login'); // Redirect to login if not logged in
  }}, [isLogin, router]);
  return (
    <></>
  );
}
