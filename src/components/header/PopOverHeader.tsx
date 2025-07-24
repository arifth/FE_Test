import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

export default function BasicPopover({children,handleLogOut}:{children:React.ReactNode,handleLogOut:any}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button sx={{bgcolor:'transparent'}} onClick={handleClick}>
        {children}
      </Button>
      <Popover
    //   sx={{"& .MuiPopover-paper":{bgcolor:'blueviolet'}}}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Button onClick={handleLogOut}>Log out</Button>
      </Popover>
    </div>
  );
}
