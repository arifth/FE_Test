'use client'

import * as React from 'react';
import Table from '@/components/table'
import { useGetAllLalinQuery } from '@/services/baseApi';
import { Box, Typography } from '@mui/material';

export default function Dashboard() {
  const {data,isLoading} = useGetAllLalinQuery({})

  return (
    <div>
      <Box my="2rem">
        <Typography sx={{fontWeight:700,fontSize:'2rem'}}>Laporan Lalin</Typography>
      </Box>
      <Table  isLoading={isLoading} data={data?.data?.rows?.rows} columnType="columnLalin" />
    </div>
  );
}