import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'

const NavBar = () => {

    const appBarStyle = {
        backgroundColor: "#e7d07d"
    }
    return (
        <>
            <AppBar style={appBarStyle}>
                <Toolbar>
                    <Typography variant='h4'>Justin's Portfolio</Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        style={{ align: "right" }}
                        color="inherit"><AccountCircleIcon /></IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar