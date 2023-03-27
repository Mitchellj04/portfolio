import { CardMedia, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { projectFetch } from '../redux/Project/ProjectSlice'
import ProjectList from './ProjectList'
import AdventureBlog from '../Images/adventureblog.png'

const ProjectMain = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(projectFetch())
    }, [])

    const projects = useSelector((state) => state.project.projects)
    console.log(projects)
    
    const displayProjects = projects.map((project) => <ProjectList project={project} key={project.id}/>)
  return (
        <Grid container style={{alignContent: 'center'}}>
            {displayProjects}
        </Grid>
  )
}

export default ProjectMain