'use client'

import { Box, Stack } from '@mui/material'
import React from 'react'
import LoginForm from '@/components/form/loginForm'

const Login = () => {
  return (
         <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{width:"50%",height:"100vh"}}>
            <LoginForm />
          </Box>
          <Box sx={{bgcolor:"aquamatic",width:"50%",height:"100vh"}}></Box>
         </Box>
  )
}

export default Login