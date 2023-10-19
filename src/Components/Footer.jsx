import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';



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
        <BottomNavigationAction label="GitHub" icon={<i class="fa-brands fa-github"></i>} href="https://github.com/LindseyHsiao" target="_blank" rel="noopener noreferrer"></BottomNavigationAction>
        <BottomNavigationAction label="LinkedIn" icon={<i class="fa-brands fa-linkedin"></i>} />
      </BottomNavigation>
    </Box>
    
  );
}