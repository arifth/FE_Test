import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const index = ({onChange}:{onChange:any}) => {
  return (
          <DatePicker onChange={onChange} value={dayjs(new Date())}/>
  )
}

export default index