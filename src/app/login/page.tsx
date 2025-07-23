'use client'

import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import LoginForm from '@/components/form/loginForm'
import { collectionApi } from '@/services/baseApi'
import { useRouter } from 'next/navigation'


const Login = () => {
  const [login,{isLoading}] = collectionApi.endpoints.login.useMutation({})
    const router = useRouter()
  const handleLogin = async () => {
    const res = await login({username:"Super Admin",password:"password12345"}).unwrap()
    console.log("\n",res)
    res?.code === 200 && router.push('/dashboard')
  }

    const [UserName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  return (
         <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{width:"50%",height:"100vh"}}>
            <LoginForm handleLogin={handleLogin} isLoading={isLoading} />
          </Box>
          <Box sx={{bgcolor:"aquamatic",width:"50%",height:"100vh"}}></Box>
         </Box>
  )
}

export default Login