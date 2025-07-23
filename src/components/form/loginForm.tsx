import { Box, Button, FormGroup, TextField,Typography} from '@mui/material'
import React, { useState } from 'react'

const loginForm = ({handleLogin,isLoading}:any) => {

  return (
    <Box sx={{margin:"3rem",padding:'2rem',outline:'1px solid hsl(0, 0%, 83%)',height:"80vh",borderRadius:'.5rem'}}>
      
      <FormGroup sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:".4rem"}}>
      <Typography sx={{fontSize:'3rem',fontWeight:700,color:'grey'}}>Login Page</Typography>
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
          {isLoading ? "Logging ..." : "Save"}
        </Button>
      </FormGroup>
    </Box>
  )
}

export default loginForm