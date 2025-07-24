'use client'
import { Box, SxProps, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import SettingsIcon from '@mui/icons-material/Settings';
import AreaChartIcon from '@mui/icons-material/AreaChart';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

const index = ({sx}:{sx:SxProps}) => {
  const routesSidebar:any = [
    {
      name: "Dashboard",
      route:"/",
      icon: <SpaceDashboardIcon />
    }, 
    {
      name: "Laporan Lalin",
      route:"/laporan-lalin",
      icon: <AreaChartIcon />
    }, 
    {
      name: "Master Gerbang",
      route:"/master-gerbang",
      icon: <SettingsIcon />
    },
    
  ]
  return (
    <Box sx={{...sx}}>
      <Box sx={{width:'100%',height:'100%',mt:'3rem',display:'flex',flexDirection:'column',gap:'.8rem'}}>
        {routesSidebar.map((val:any,idx:number) => {
          return(
            <Link href={`/dashboard${val.route}`} key={idx}>
            <Box sx={{ width: '100%', paddingLeft:'1rem' }}>
            <Typography sx={{display:'flex',alignItems:'flex-start',gap:'.4rem'}}>{val.icon}{val.name}</Typography> 
            </Box>
          </Link>
          )
        })}
      </Box>
      </Box>
  )
}

export default index