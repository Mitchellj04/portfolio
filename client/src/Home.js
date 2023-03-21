import { Typography } from '@mui/material'
import React from 'react'
import NavBar from './NavBar'

const Home = () => {
  return (<>
    <NavBar />
    <div style={{marginTop: 100}}>
      <Typography>Hi I'm Justin Mitchell, Welcome to my Website!</Typography>  
       </div>
        </>
  )
}

export default Home