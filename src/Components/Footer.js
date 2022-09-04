import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { positions } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} href="https://github.com/LindseyHsiao" target="_blank" rel="noopener noreferrer"></BottomNavigationAction>
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
    
  );
}