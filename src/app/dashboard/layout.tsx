'use client'

import React, { Children } from 'react'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import { Box, SxProps } from '@mui/material'

const layout = ({children}:{children:React.ReactNode}) => {
    const sideBarStyle : SxProps = {
        minHeight:'100vh',
        // maxHeight:'100vh',
        width:"15%",
        borderRight:'.5px solid hsl(36, 2%, 50%)',
        // boxShadow: "7px -1px 0px -6px rgba(0,0,0,0.75)"

    }
    const contentStyle : SxProps = {
        padding:'3rem',
        display:'flex',
        alignItems:'top',
        width:'85%',
        paddingTop:'5rem',
        minHeight:'100vh',
        maxHeight:'100vh'

    }
  return (
    <>
    <Header />
    <Box sx={{ display: 'flex', alignItems: 'center',width:'100%',height:'100vh ' }}>
          <Sidebar sx={sideBarStyle} />
          <Box sx={contentStyle}>
              <Box>{children}</Box>
          </Box>
      </Box></>
  )
}

export default layout