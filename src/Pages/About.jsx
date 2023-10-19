import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import me from '../images/me.jpg';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function About() {
    return (
        <Box sx={{ flexGrow: 1 }} mt={3}>
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <Box
                        component="img"
                        sx={{
                            height: 250,
                            width: 200,
                            // maxHeight: { xs:300, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                            borderRadius: '400px',
                            pl: 6
                            
                        }}
                        alt="Photo of Lindsey ready to code"
                        src={me}
                    />
                 
                </Grid>
                <Grid xs={8} sx={{pr:6}}>
                    <Item>
                        <h1>About Me</h1>

                        <p>I'm a fun loving web designer, content writer and yoga insturctor. When I'm not spending my time studying for coding I'm reading about coding. </p>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default About;