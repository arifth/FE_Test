import { Box, SxProps } from '@mui/material'
import React from 'react'

const index = ({sx}:{sx:SxProps}) => {
  return (
    <Box sx={{...sx}}>index</Box>
  )
}

export default index