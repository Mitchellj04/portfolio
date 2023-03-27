import React from 'react'
import { Button, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/system'

const LandingPage = ({setLoading}) => {
    const navigate = useNavigate()

    const handleLoading = (e) => {
     if(e.target.isClick === true){
      console.log('true')
     }
     else{ console.log(e)}
    }

  return (<>
    <div style={{marginTop: 100}}>
    <Box>
      <Paper>
    <Typography>Welcome to my portfolio!</Typography>
    <Button onClick={() => setLoading(false)}>Continue</Button></Paper></Box>
    </div>
    </>
  )
}

export default LandingPage