'use client'

import React, { Children } from 'react'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import { Box, SxProps } from '@mui/material'

const layout = ({children}:{children:React.ReactNode}) => {
    const sideBarStyle : SxProps = {
        height:'100vh',
        width:"20%",
        bgcolor:'InactiveCaptionText'
    }
    const contentStyle : SxProps = {
        padding:'.5rem',
        display:'flex',
        alignItems:'top',
        width:'80%',
        marginTop:0,
        paddingTop:0,
        bgcolor:'red',
    }
  return (
    <>
    <Header />
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Sidebar sx={sideBarStyle} />
          <Box sx={contentStyle}>
              <Box>{children}</Box>
          </Box>
      </Box></>
  )
}

export default layout