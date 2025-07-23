import { Box, Button, FormGroup, TextField } from '@mui/material'
import React, { useState } from 'react'

const loginForm = ({handleLogin}:any) => {

  return (
    <Box sx={{margin:"3rem",padding:'2rem',outline:'1px dotted green',height:"600px"}}>
      
      <FormGroup sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:"1rem"}}>
      <h1>Login Page</h1>
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="UserName"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Password"
          variant="outlined"
        />
        <Button variant="contained" color="primary" sx={{width:"300px",mt:'2rem'}} onClick={()=> handleLogin()}>
          save
        </Button>
      </FormGroup>
    </Box>
  )
}

export default loginForm