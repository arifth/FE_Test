'use client'

import { Box, Snackbar, SnackbarContent } from '@mui/material'
import React, { useState } from 'react'
import LoginForm from '@/components/form/loginForm'
import { collectionApi } from '@/services/baseApi'
import { useRouter } from 'next/navigation'


const SnackbarImpl = ({open,handleClose}:{open:boolean,handleClose:any}) => {
  return (
    <Snackbar
  anchorOrigin={{ vertical:'top', horizontal:'center' }}
  open={open}
  onClose={handleClose}
  key={Date.now()}
>
    <SnackbarContent style={{
      backgroundColor:'red',
    }}
    message={<span id="client-snackbar">Incorrect username or password</span>}
  />
  </Snackbar>
  )
}



const Login = () => {
  const [login,{isLoading}] = collectionApi.endpoints.login.useMutation({})
    const router = useRouter()
    const [userName,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [openSnack,setOpen] = useState(false)
  const handleLogin = async () => {
    try {
      const res = await login({username:userName,password:password}).unwrap()
      if(res?.code === 200) {
        console.log(res)
        document.cookie = `token=${res.token}`
        router.push('/dashboard')
      }
    } catch (error) {
      setOpen(true)
    } 
  }

  return (
         <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{width:"50%",height:"100vh"}}>
            <LoginForm handleLogin={handleLogin} isLoading={isLoading} setUsername={setUsername} setPassword={setPassword}/>
            <SnackbarImpl open={openSnack} handleClose={()=> setOpen(false)} />
          </Box>
          <Box sx={{bgcolor:"aquamatic",width:"50%",height:"100vh"}}></Box>
         </Box>
  )
}

export default Login