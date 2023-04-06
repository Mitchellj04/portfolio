import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import crypto from '../Images/cryptonite.png'
import skibuddy from '../Images/skibuddy.jpg'
import watercooler from '../Images/watercooler.png'

const ProjectList = ({project}) => {

  const cardStyle ={
    backgroundColor: 'inherit',
    color: 'whitesmoke'
  }


  return (

      <Grid item xs={5} style={{margin: 20}}>
        <CardActionArea href={project.url} target="_blank" rel='noopener noreferrer'>
        <Card style={cardStyle}>
          <CardHeader title={project.title} style={{textAlign: 'center'}}/>
          <CardMedia component="img" image={project.image}/>
          <CardContent>
            <Typography>{project.description}</Typography>
            <Typography></Typography>
          </CardContent>
        </Card>
        </CardActionArea>
      </Grid>
    

  )
}

export default ProjectList