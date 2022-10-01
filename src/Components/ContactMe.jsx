import {  Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { Component } from 'react'

export default class ContactMe extends Component {
  render() {
    return (
      <Container sx={{padding: 5}}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h3" component="h2" sx={{ textAlign: "center"}} id="Contact Me">
              Contact Me
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Container maxWidth='sm'>
              <form action="https://forms.un-static.com/forms/f1ab4dae17a4f68bcf823bb1b32836ff1eccce83" method="post">
                <Card sx={{ maxWidth: '100%'}}>
                  <CardContent>
                    <TextField id="FirstName" label="First Name" name='First_Name' variant="outlined" sx={{minWidth: {xs: '100%', md: '45%'}}} margin='dense' required/>
                    <TextField id="LastName" label="Last Name" name='Last_Name' variant="outlined" sx={{minWidth: {xs: '100%', md: '50%'}, marginLeft: {xs: 0, md: 3}}} margin='dense' required/>
                    <TextField id="Email" label="Email Address" name='Email' variant="outlined" type="email" fullWidth  margin='dense' required/>
                    <TextField id="PhoneNumber" label="Phone number" name='Phone_Number' variant="outlined" type="number" fullWidth margin='dense' required/>
                    <TextField id="Company" label="Company" name='Company' variant="outlined" fullWidth margin='dense'/>
                    <TextField id="Message" label="Message" name='Message' variant="outlined" fullWidth margin='dense' required multiline rows={10}/>
                  </CardContent>
                  <CardActions>
                    <Button size="large" type='submit' variant='contained'>Send message</Button>
                  </CardActions>
                </Card>
              </form>
            </Container>   
          </Grid>

            
        </Grid>
      </Container>
    )
  }
}
