'use client'

import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import LoginForm from '@/components/form/loginForm'
import { collectionApi } from '@/services/baseApi'
import { useRouter } from 'next/navigation'


const Login = () => {
  const [login] = collectionApi.endpoints.login.useMutation({})
    const router = useRouter()
  const handleLogin = () => {
    const data = login({username:"Super Admin",password:"password12345"})
    console.log(data)
    router.push("/dashboard")
  }

    const [UserName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  return (
         <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{width:"50%",height:"100vh"}}>
            <LoginForm handleLogin={handleLogin}  />
          </Box>
          <Box sx={{bgcolor:"aquamatic",width:"50%",height:"100vh"}}></Box>
         </Box>
  )
}

export default Login