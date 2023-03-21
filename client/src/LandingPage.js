import React from 'react'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()

  return (<>
    <Typography>Welcome to my portfolio!</Typography>
    <Button onClick={() => navigate('/home')}>Continue</Button>
    </>
  )
}

export default LandingPage