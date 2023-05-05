import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import crypto from '../Images/cryptonite.png'
import skibuddy from '../Images/skibuddy.jpg'
import watercooler2 from '../Images/watercooler2.jpg'

const ProjectList = ({project}) => {

  const cardStyle ={
    backgroundColor: 'inherit',
    color: 'whitesmoke'
  }


  return (

      <Grid item xs={12} sm={6} className='grid-item'>
        <CardActionArea href={project.url} target="_blank" rel='noopener noreferrer'>
        <Card style={cardStyle}>
          <CardHeader title={project.title} style={{textAlign: 'center'}}/>
          <CardMedia component="img" image={project.image}/>
          <CardContent className='project-text'>
            <Typography >{project.description}</Typography>
          </CardContent>
        </Card>
        </CardActionArea>
      </Grid>
    

  )
}

export default ProjectList