import { Card, CardContent, Grid, SvgIcon, Typography } from "@mui/material";
import { Container } from "@mui/system";
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';
import PhpIcon from '@mui/icons-material/Php';
import JavaIcon from "./icons/JavaIcon";
import ReactIcon from "./icons/ReactIcon";
import LinuxIcon from "./icons/LinuxIcon";
import MongoIcon from "./icons/MongoIcon";

import React, { Component } from 'react'

import LinearProgressWithLabel from "./LinearProgressWithLabel";
import { blue, purple, yellow } from "@mui/material/colors";
import NextJsIcon from "./icons/NextJsIcon";


export default class Skills extends Component {
  render() {
    return (
        <Container sx={{padding: 5}}>
            <Grid container spacing={4} justifyContent="center">
                
                <Grid item xs={12}>
                    <Typography variant="h3" component="h2" sx={{ textAlign: "center"}}>
                        Skills
                    </Typography>     
                </Grid>

                <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <JavascriptIcon sx={{fontSize: 70, color: yellow[700]}}/>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                JavaScript
                            </Typography>
                            <Typography variant="h5" component="div">

                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <LinearProgressWithLabel value={30} />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <StorageIcon sx={{ fontSize: 50, margin: 1.2}}/>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                SQL Databases
                            </Typography>
                            <Typography variant="h5" component="div">

                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <LinearProgressWithLabel value={70} />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <PhpIcon sx={{ fontSize: 50, margin: 1.2, color: purple[200]}} />
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                PHP
                            </Typography>
                            <Typography variant="h5" component="div">

                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <LinearProgressWithLabel value={50} />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <JavaIcon sx={{ fontSize: 50, margin: 1.2 }} />
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Java
                            </Typography>
                            <Typography variant="h5" component="div">

                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <LinearProgressWithLabel value={45} />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <ReactIcon sx={{ fontSize: 50, margin: 1.2, color: blue[500]}}/>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                React.js
                            </Typography>
                            <Typography variant="h5" component="div">

                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <LinearProgressWithLabel value={64} />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <LinuxIcon sx={{ fontSize: 50, margin: 1.2}}/>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Linux CLI
                            </Typography>
                            <Typography variant="h5" component="div">

                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <LinearProgressWithLabel value={70} />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <NextJsIcon sx={{ fontSize: 50, margin: 1.2}}/>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Next.js
                            </Typography>
                            <Typography variant="h5" component="div">

                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <LinearProgressWithLabel value={0} />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <MongoIcon sx={{ fontSize: 50, margin: 1.2}}/>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                MongoDB
                            </Typography>
                            <Typography variant="h5" component="div">

                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <LinearProgressWithLabel value={0} />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>    
    )
  }
}
