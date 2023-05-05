import React, { useState } from 'react'
import { Avatar, Button, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/system'
import landingBackground from './Images/landingbackground.jpg'

const LandingPage = ({setLoading}) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const handleLoading = (e) => {
     setLoading(false)
     navigate('/home')
    }

    console.log(isLoading)


  return (<>
    <div className='landing'>
    <Box style={{margin: 100}}> 
    <Avatar sx={{ height: '200px', width: '200px', textAlign: 'center'}} src={'/portfoliophoto.jpg'} />
    <Typography variant='h2' className='landing-hello'>Hello!</Typography>
    <Typography variant='h4' className='landing-info' >My name is Justin Mitchell, I am a Full-Stack Software Developer specializing in front end developing.</Typography>
    <Button onClick={handleLoading} className='landing-button'>Continue</Button>
    </Box>
    </div>
    </>
  )
}

export default LandingPage