import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { SxProps } from '@mui/material';
import BoxAction from '@/components/BoxAction'

const columnGerbang: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'IdCabang', headerName: 'ID Cabang', width: 100 },
  { field: 'NamaGerbang', headerName: 'Nama Gerbang', width: 300 },
  { field: 'NamaCabang', headerName: 'Nama Cabang', width: 200 },
  {
        field: 'actions',
        headerName: 'Actions',
        width: 300,
        renderCell: (params) => (
          <BoxAction {...params} />
        ),
  },
];

const columnLalin : GridColDef[] = [
    { field: 'id', headerName: 'ID Cabang', width: 40 },
    { field: 'idGerbang', headerName: 'ID Gerbang', width: 40 },
    { field: 'Tanggal', headerName: 'Tanggal', width: 150 },
    { field: 'Shift', headerName: 'Shift', width: 40 },
    { field: 'IdGardu', headerName: 'Id Gardu', width: 40 },
    { field: 'Golongan', headerName: 'Golongan', width: 40 },
    { field: 'IdAsalGerbang', headerName: 'Id Asal Gerbang', width: 40 },
    { field: 'Tunai', headerName: 'Tunai', width: 40 },
    { field: 'DinasOpr', headerName: 'Dinas Operational', width: 40 },
    { field: 'idGerbang', headerName: 'ID Gerbang', width: 40 },
    { field: 'idGerbang', headerName: 'ID Gerbang', width: 40 },
    { field: 'idGerbang', headerName: 'ID Gerbang', width: 40 },
    { field: 'idGerbang', headerName: 'ID Gerbang', width: 40 },
    { field: 'idGerbang', headerName: 'ID Gerbang', width: 40 },
]

const data = {
    "id": 1,
    "IdCabang": 16,
    "IdGerbang": 1,
    "Tanggal": "2023-11-01T00:00:00.000Z",
    "Shift": 1,
    "IdGardu": 10,
    "Golongan": 1,
    "IdAsalGerbang": 6,
    "Tunai": 0,
    "DinasOpr": 0,
    "DinasMitra": 0,
    "DinasKary": 0,
    "eMandiri": 889,
    "eBri": 551,
    "eBni": 148,
    "eBca": 218,
    "eNobu": 0,
    "eDKI": 0,
    "eMega": 0,
    "eFlo": 0
}

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({data,isLoading,columnType}:any) {
    const styleTable : SxProps = {
        '& .MuiDataGrid-topContainer':{
        }
    }
  return (
      <DataGrid
        key={Date.now()}
        rows={data}
        columns={columnType === 'columnLalin' ? columnLalin : columnGerbang}
        sx={styleTable}
        loading={isLoading}
        disableColumnResize
      />
  );
}
