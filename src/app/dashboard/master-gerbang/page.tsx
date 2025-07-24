'use client'

import * as React from 'react';
import Table from '@/components/table'
import { useGetAllGerbangsQuery } from '@/services/baseApi';

export default function Dashboard() {
  const {data,isLoading} = useGetAllGerbangsQuery({})
  return (
    <div>
      <Table  isLoading={isLoading} data={data?.data?.rows?.rows}/>
    </div>
  );
}