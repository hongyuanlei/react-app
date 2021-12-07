import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Context } from '../index';

const GroupList = () => {
  const value = useContext(Context);
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItemButton>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItemButton>
    </List>
  );
};

export default GroupList;
