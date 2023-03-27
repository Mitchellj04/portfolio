import { Box, Button, Card, CardContent, CardHeader, Grid, IconButton, Link, Paper, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userFetch } from '../redux/User/UserSlice'
import resume from '../Resume.pdf'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { TabPanelUnstyled } from '@mui/base'

const Profile = () => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.users)

    const [value, setValue] = useState(0)

    useEffect(() => {
        dispatch(userFetch())
    }, [])

    console.log(user)

    const handleTabs = (e, val) => {
        setValue(val)
    }

    const userInfo = user.map((user) => {
        return <><Typography variant='h4' style={{ textAlign: 'center' }}>{user.name} Profile</Typography>
            <Box style={{ margin: 20 }}>
                <Paper>
                    <Card variant="outlined">
                        <CardHeader title="About Me"></CardHeader>
                        <CardContent></CardContent>
                    </Card>
                </Paper>
                <Button variant='outlined' href={resume} startIcon={<FileDownloadIcon />} style={{marginTop: 10}}>Resume</Button>
                <div>
                <IconButton href={user.github_link}><GitHubIcon /></IconButton>
                <IconButton href={user.linkedin}><LinkedInIcon /></IconButton>
                </div>
            </Box>

        </>
    })

    const userEducation = user.map((user) => {
        return user.educations.map((school) => {
            return <>
                <Grid item xs={3.5} style={{margin: 10}}>
                    <Card style={{padding: 5}}>
                        <Typography variant='h6'>{school.name}</Typography>
                        <Typography>Degree: {school.degree}</Typography>
                        <Typography>GPA: {school.gpa}</Typography>
                        <Typography>Graduation: {school.graduate_year}</Typography>
                    </Card>
                </Grid>
            </>
        })
    })

    const userExperience = user.map((user) => {
        return user.experiences.map((experience) => {
          return <><Grid item xs={3.5} style={{margin: 10}}>
            <Card style={{padding: 5}}>
                <Typography variant='h6'>{experience.company}</Typography>
                <Typography>Position: {experience.title}</Typography>
                <Typography>Description: {experience.description}</Typography>
                <Typography>Start: {experience.start_year}</Typography>
                <Typography>End: {experience.ending_year}</Typography>
            </Card>
        </Grid></> 
        })
    })

    function TabPannel(props){
        const {children, value, index} = props
        return ( <div>
            { value === index && (
                <Typography>{children}</Typography>)
            }
            </div>
        )
    }

    return (
        <div style={{ marginTop: 100, paddingLeft: 10 }}>
            {userInfo}
            <Box>
                <Tabs value={value} onChange={handleTabs}>
                    <Tab label="Education" ></Tab>
                    <Tab label="Experience"></Tab>
                    <Tab label="Contact"></Tab>
                    <Tab label="Links"></Tab>
                </Tabs>
                <TabPannel value={value} index={0}><Typography variant='h4'>Education</Typography>{userEducation}</TabPannel>
                <TabPannel value={value} index={1}><Typography variant='h4'>Experience</Typography>{userExperience}</TabPannel>
                <TabPannel value={value} index={2}>Contact</TabPannel>
                <TabPannel value={value} index={3}>Links</TabPannel>
            </Box>
        </div>
    )
}

export default Profile