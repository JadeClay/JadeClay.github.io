import { Box, Card, CardActions, Button, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { Component } from 'react'

import Image from '../img/background-1.jpg';

import DemoModal from './DemoModal.jsx';

export default class Projects extends Component {
  render() {
    return (
        <Box sx={{
            backgroundImage: {xs: 'none', md: `url(${Image})`},
            backgroundSize: "cover",
            backgroundColor: 'secondary.dark'
        }}>
            <Container sx={{padding: 5}}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="h3" component="h2" sx={{ textAlign: "center"}} id="Projects">
                            Projects
                        </Typography>     
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="https://i.imgur.com/1sgx5Rg.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Source Code</Button>
                                <DemoModal name={"TBA"}/>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="https://i.imgur.com/1sgx5Rg.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Source Code</Button>
                                <DemoModal name={"TBA"}/>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="https://i.imgur.com/1sgx5Rg.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Source Code</Button>
                                <DemoModal name={"TBA"}/>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="https://i.imgur.com/1sgx5Rg.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Source Code</Button>
                                <DemoModal name={"TBA"}/>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="https://i.imgur.com/1sgx5Rg.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Source Code</Button>
                                <DemoModal name={"TBA"}/>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="https://i.imgur.com/1sgx5Rg.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Source Code</Button>
                                <DemoModal name={"TBA"}/>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        
    )
  }
}
