import { Paper, Typography, Button, ButtonGroup, IconButton, Stack } from '@mui/material'
import { Container } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react'
import Image from '../img/background.jpg';

function onClickAlert() {
  /* Redirect this button to Contact Me */
  alert("Work in progress");
}

export default class HeroPage extends React.Component {
  render() {
    return (
      <Paper sx={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
      }}>
        <Container>
          <Typography variant="h4" component="h1" color={'primary'}
          sx={{
            paddingTop: {xs:14, md:25},
          }}>
            Software Developer
          </Typography>
          <Typography variant="h3" component="h2" color={'white'} 
          sx={{
            paddingBottom: 5,
            mb: {xs:5, md: 0},
          }}>
              Hello! My name is Oscar Piña and I'm a Telematic Engineering student at PUCMM :)
          </Typography>

          <Stack direction={{xs: 'column', md:'row'}} justifyItems={{xs: 'center'}} alignItems={{xs: 'center'}} spacing={2} sx={{
              mb: {xs:26, md:26.4}
            }}>
            <Button variant='contained' size={'large'} color={'secondary'} onClick={onClickAlert}>
              Hire me!
            </Button>

            <ButtonGroup variant="iconbutton" aria-label="outlined primary button group">
              <IconButton aria-label="github" href='https://github.com/JadeClay' target='_blank'>
                <GitHubIcon />
              </IconButton>
              <IconButton aria-label='linkedin' href='https://www.linkedin.com/in/callmebertie/' target='_blank'>
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label='email' href='mailto:oscaralbertopinap@gmail.com'>
                <EmailIcon />
              </IconButton>
            </ButtonGroup>
          </Stack>
          
        </Container>
      </Paper>
    )
  }
}
