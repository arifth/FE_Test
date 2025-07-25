'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import BasicPopover from './PopOverHeader';
import { useRouter } from 'next/navigation';
import deleteAllCookies from '@/utils/deleteAllCookies';

const ButtonAppBar = () =>  {
  const router = useRouter()

  const handleLogOut = () => {
    deleteAllCookies()
    router.push("/login")

  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JasaMarga Dashboard
          </Typography>
          <BasicPopover handleLogOut={handleLogOut}>
            <Avatar  />
          </BasicPopover>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar