import { Box, Button, FormGroup, TextField,Typography} from '@mui/material'
import React, { useState } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const loginForm = ({handleLogin,isLoading,setUsername,setPassword}:any) => {

  return (
    <Box sx={{outline:'1px solid hsl(0, 0%, 83%)',height:"80vh",borderRadius:'.5rem'}}>
      <Button>{<EditOutlinedIcon />}</Button>
      <Typography sx={{fontSize:'3rem',fontWeight:700,color:'grey'}}>Login Page</Typography>
    </Box>
  )
}

export default loginForm