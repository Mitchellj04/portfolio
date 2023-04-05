import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material'
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
                <Toolbar>
                    <IconButton
                        size="large"
                        aria-label="home button"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        style={{ align: "left" }}
                        color="inherit"
                        onClick={() => navigate('/home')}><HomeIcon /></IconButton>
                    <Typography variant='h4' component="div" >Justin's Portfolio</Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        style={{ align: "right" }}
                        color="inherit"
                        onClick={() => navigate('/profile')}><Avatar src={'/avatar.png'}/></IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar