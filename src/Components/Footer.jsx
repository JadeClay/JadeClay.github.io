import { FavoriteOutlined } from '@mui/icons-material'
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Container, Typography, Stack, Box } from '@mui/material'
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <Box sx={{backgroundColor: '#0f0f0f'}}>
        <Container sx={{ padding: 2 }}>
          <Stack direction="row" alignItems="center" gap={0.5} justifyContent="center" display={{ xs:'inline-flex', md:'none' }}>
            <CopyrightIcon fontSize='small' />
            <Typography variant="subtitle1">2022. All rights reserved. </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={0.5} justifyContent="center" display={{ xs:'none', md:'inline-flex' }}>
            <CopyrightIcon fontSize='small' />
            <Typography variant="subtitle1">2022. Done with </Typography>
            <FavoriteOutlined fontSize='small' htmlColor='#93000a' />
            <Typography variant="subtitle1">by Oscar Piña, using Material UI and React.js</Typography>
          </Stack>
        </Container>
      </Box>

    )
  }
}
