'use client'

import * as React from 'react';
import Table from '@/components/table'
import Header from '@/components/header'
import { useLoginToDashboardQuery } from '@/services/baseApi';

export default function Dashboard() {
   const { data, error, isLoading } = useLoginToDashboardQuery("what");
    console.log("adakah",data)
  return (
    <>
    <Header />
    <Table />
    </>
  );
}