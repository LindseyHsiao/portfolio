import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import runbuddy from '../images/runbuddy.png'
import janjennings from '../images/janjennings.png'

// const preventDefault = (event) => event.preventDefault();

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#4D575D',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function ActionAreaCard() {
  return (
    <Box sx={{ width: '95%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Item>
          <Card sx={{ maxWidth: 345 }} variant="outlined">
          <CardActionArea href="https://lindseyhsiao.github.io/run-buddy/" target="_blank" rel="noopener noreferrer">
            <CardMedia
              component="img"
              //height="200"
              src={runbuddy}
              alt="runbuddy screenshot"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Run Buddy
              </Typography>
              <Typography variant="body2" color="text.secondary">
                An interactive application for initiating realtionships with trainers at a local business.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <Card sx={{ maxWidth: 345 }} variant="outlined">
          <CardActionArea href="https://janjennings.vercel.app/" target="_blank" rel="noopener noreferrer">
            <CardMedia
              component="img"
              //height="200"
              src={janjennings}
              alt="runbuddy screenshot"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Jan Jennings- Harpist
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Application for sharing information, and booking clients.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>5</Item>
        </Grid>
      </Grid>
    </Box>
     
      // <Grid xs={6}>
        
      // </Grid>
    

      // <Grid>
      //   <Card sx={{ maxWidth: 345 }} variant="outlined">
      //     <CardActionArea>
      //       <CardMedia
      //         component="img"
      //         height="200"
      //         src={runbuddy}
      //         alt="runbuddy screenshot"
      //       />
      //       <CardContent>
      //         <Typography gutterBottom variant="h5" component="div">
      //           Run Buddy
      //         </Typography>
      //         <Typography variant="body2" color="text.secondary">
      //           An interactive application for initiating realtionships with trainers at a local business.
      //         </Typography>
      //       </CardContent>
      //     </CardActionArea>
      //   </Card>
      // </Grid>
      // </Grid>

      );
}
