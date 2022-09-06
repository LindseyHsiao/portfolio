import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { positions } from '@mui/system';

import Link from '@mui/material/Link';

const preventDefault = (event) => event.preventDefault();

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box class='footer' sx={{ alignItems: 'flex-end'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="GitHub"  href="https://github.com/LindseyHsiao" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></BottomNavigationAction>
        <BottomNavigationAction label="LinkedIn"  ><i class="fa-brands fa-linkedin"></i></BottomNavigationAction>
      </BottomNavigation>
    </Box>
    
  );
}