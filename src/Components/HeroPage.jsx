import { Paper, Typography, Button } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import Image from '../img/background.jpg';

const styles = {
  boxcontainer: {

  }
}

export default class HeroPage extends React.Component {
  render() {
    return (
      <Paper sx={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundColor: 'rgba(0,0,0,1)',
      }}>
        <Container>
          <Typography variant="h3" component="h1" color={'white'} 
          sx={{
            paddingBottom: 3,
            paddingTop: {xs:14.3, md:28},
          }}>
              Hello! My name is Oscar Piña and I'm a Telematic Engineering student at PUCMM :)
          </Typography>
          <Button variant='contained' sx={{
            mb: {xs:30, md:31}
          }}>Hire me!</Button>
        </Container>
      </Paper>
    )
  }
}
