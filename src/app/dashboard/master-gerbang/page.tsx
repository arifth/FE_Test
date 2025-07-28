'use client'

import * as React from 'react';
import Table from '@/components/table'
import { useGetAllGerbangsQuery } from '@/services/baseApi';
import BoxAction from '@/components/BoxAction'
import { Box, Typography } from '@mui/material';

export default function Dashboard() {
  const {data,isLoading} = useGetAllGerbangsQuery({})
 
  const [filteredData,setData] = React.useState()
  React.useEffect(()=>{
    const modData = data?.data?.rows?.rows
    setData(() => modData)
  },[data])


  return (
    <div>
      <Box my="1rem">
        <Typography sx={{fontWeight:700,fontSize:'2rem'}}>Master Data Gerbang</Typography>
      </Box>
      <Table key={data}  isLoading={isLoading} data={filteredData}/>
    </div>
  );
}