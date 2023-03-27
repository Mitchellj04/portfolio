import { Typography } from '@mui/material'
import React from 'react'
import NavBar from './NavBar'
import ProjectMain from './Projects/ProjectMain'

const Home = () => {
  return (<>
    <div style={{marginTop: 100}}>
      <Typography>Hi I'm Justin Mitchell, Welcome to my Website!</Typography>  
      <ProjectMain />
       </div>
        </>
  )
}

export default Home