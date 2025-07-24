'use client'

import * as React from 'react';
import Table from '@/components/table'
import { useGetAllLalinQuery } from '@/services/baseApi';

export default function Dashboard() {
  const {data,isLoading} = useGetAllLalinQuery({})

  return (
    <div>
      <Table  isLoading={isLoading} data={data?.data?.rows?.rows} columnType="columnLalin" />
    </div>
  );
}