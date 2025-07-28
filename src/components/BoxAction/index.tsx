import Box from '@mui/material/Box'
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

import Button from '@mui/material/Button';
import DeleteModal from '../modal/delete';
import UpdateModal from '../modal/update';

const index = (params:any) => {
  const[openDel,setDel] = useState(false)
  const[openUpd,setUpd] = useState(false)
  const handleEdit =() => {
    setUpd(true)
  }
  const handleDelete = () => {
     setDel(true)
  }
  return (
    <Box>
        <DeleteModal open={openDel} handleClose={()=> setDel(false)} data={params}/>
        <UpdateModal open={openUpd} handleClose={()=> setUpd(false)} data={params}/>
        <Button variant="outlined" onClick={handleEdit}>
            <EditIcon  />
        </Button>
        <Button variant="outlined" >
            <VisibilityIcon />
        </Button>
        <Button variant="outlined" onClick={handleDelete}>
            <DeleteIcon />
        </Button>
      
    </Box>
  )
}

export default index