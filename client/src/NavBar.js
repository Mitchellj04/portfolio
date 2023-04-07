import { AppBar, Avatar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { textAlign } from '@mui/system';
import background from './Images/landingbanner.jpg'



const NavBar = () => {
    const navigate = useNavigate()

    const appBarStyle = {
        backgroundColor: "#515151",
        backgroundImage: `url(${background})`
    }
    return (
        <Box>
            <AppBar style={appBarStyle} position='static'>
                <Container>
                <Toolbar>
                    <Box>
                        <IconButton
                            size="large"
                            aria-label="home button"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            edge="start"
                            sx={{mr: 8}}
                            color="inherit"
                            onClick={() => navigate('/home')}><HomeIcon style={{fontSize: 35}}/></IconButton></Box>
                    <Box sx={{ml: 8}}>
                        <Typography variant='h3' component="div" >Justin's Portfolio</Typography>
                    </Box>
                    <Box sx={{flexGrow: 2, display: { xs: 'flex' }}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            style={{marginLeft: 'auto'}}
                            color="inherit"
                            onClick={() => navigate('/profile')}><Avatar src={'/avatar.png'} style={{fontSize: 50}}/></IconButton>
                    </Box>
                </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default NavBar