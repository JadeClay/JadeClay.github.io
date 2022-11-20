import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';
import PhpIcon from '@mui/icons-material/Php';
import ReactIcon from "./icons/ReactIcon";
import LinuxIcon from "./icons/LinuxIcon";
import MongoIcon from "./icons/MongoIcon";
import NodeJsIcon from "./icons/NodeJsIcon";

import React, { Component } from 'react'

import RatingSkills from "./RatingSkils";
import { blue, green, purple, yellow } from "@mui/material/colors";


export default class Skills extends Component {
  render() {
    return (
        <Container sx={{padding: 5}}>
            <Grid container spacing={4} justifyContent="center">
                
                <Grid item xs={12}>
                    <Typography variant="h3" component="h2" sx={{ textAlign: "center"}} id="Skills">
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
                                <RatingSkills exactValue={3} />
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
                                <RatingSkills exactValue={4} />
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
                                <RatingSkills exactValue={3} />
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
                                <RatingSkills exactValue={3} />
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
                                <RatingSkills exactValue={2} />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <NodeJsIcon sx={{ fontSize: 50, margin: 1.2, color: green[300]}}/>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Node.js (Express)
                            </Typography>
                            <Typography variant="h5" component="div">

                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <RatingSkills exactValue={2} />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <MongoIcon sx={{ fontSize: 50, margin: 1.2, color: green[300]}}/>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                MongoDB
                            </Typography>
                            <Typography variant="h5" component="div">

                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <RatingSkills exactValue={1} />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>    
    )
  }
}
