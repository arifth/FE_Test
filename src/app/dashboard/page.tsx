'use client'

import * as React from 'react';
import Bar from '@/components/chart/Bar'
import Pie from '@/components/chart/Pie'
import { Box, SxProps, Typography } from '@mui/material';
import BoxDatePicker from '@/components/BoxDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useGetAllLalinQuery } from '@/services/baseApi';

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
  const [date,setDate] = React.useState("")

  const changeDatePicker = (val:any)=> {
   setDate(()=> {
    const tanggal =  dayjs(new Date(val?.$d)).format('YYYY-MM-DD')
    return tanggal
   })
  }

  const {data}= useGetAllLalinQuery({date:date})
  

  return (
     <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <Typography sx={{fontWeight:700,fontSize:'2rem'}}>Dashboard</Typography>
      </Box>
      <Box my="2rem">
              <BoxDatePicker onChange={changeDatePicker} />
      </Box>
      <Box sx={chartStyle}>
      <Box>
      <Bar />
      <Bar />
      </Box>
      <Box sx={{}}>
        <Pie />
      </Box>
    </Box>
    </LocalizationProvider >
  );
}