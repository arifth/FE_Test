'use client'

import * as React from 'react';
import Bar from '@/components/chart/Bar'
import Pie from '@/components/chart/Pie'
import { Box, SxProps } from '@mui/material';

export default function Dashboard() {
  const chartStyle : SxProps = {
    // outline:'1px solid red',
    display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'2rem',
    '& canvas': {
      height:'300px',
      maxWidth:'500px',
      minWidth:'500px'
    }
  }
  return (
    <Box sx={chartStyle}>
      <Box>
      <Bar />
      <Bar />
      </Box>
      <Box sx={{}}>
        <Pie />
      </Box>
    </Box>
    
  );
}