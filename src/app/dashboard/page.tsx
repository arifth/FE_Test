'use client'

import * as React from 'react';
import Table from '@/components/table'
import { useLoginToDashboardQuery } from '@/services/baseApi';

export default function Dashboard() {
   const { data, error, isLoading } = useLoginToDashboardQuery("what");
  return (
    <Table />
  );
}