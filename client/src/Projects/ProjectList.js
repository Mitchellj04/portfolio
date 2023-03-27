import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import adventureblog from '../Images/adventureblog.png'
import freelancer from '../Images/freelancer.png'
import skibuddy from '../Images/skibuddy.png'
import watercooler from '../Images/watercooler.png'


const ProjectList = ({project}) => {

  return (
 
      <Grid item xs={5} style={{margin: 10}}>
        <Card>
          <CardHeader title={project.title}/>
          <CardMedia component="img" image={project.image}/>
          <CardContent>
            <Typography>{project.description}</Typography>
            <Typography></Typography>
          </CardContent>
        </Card>
      </Grid>
    

  )
}

export default ProjectList