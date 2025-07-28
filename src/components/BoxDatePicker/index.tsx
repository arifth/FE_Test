import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const index = ({onChange}:{onChange:any}) => {
  return (
          <DatePicker onChange={onChange}/>
  )
}

export default index