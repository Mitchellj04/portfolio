import { Box, Button, Card, CardContent, CardHeader, Grid, IconButton, Link, Paper, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userFetch } from '../redux/User/UserSlice'
import resume from '../Resume.pdf'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { TabPanelUnstyled } from '@mui/base'
import background from '../Images/background.png'
import shadows from '@mui/material/styles/shadows'

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

    const cardStyle = {
        backgroundColor: "inherit",
        color: 'whitesmoke',
        padding: '5px',
        shadows: 'none'
    }



    const userInfo = user.map((user) => {
        return <>
            <div>
                <Typography variant='h4' style={{ textAlign: 'center', color: 'whitesmoke' }}>Profile</Typography>
            </div>
            <Box style={{ margin: 20 }}>
                <Card style={cardStyle}>
                    <CardHeader title="About Me"></CardHeader>
                    <CardContent></CardContent>
                </Card>
                <div>
                    <Button variant='outlined' href={resume} startIcon={<FileDownloadIcon />} style={{ marginTop: 10, color: "whitesmoke" }} >Resume</Button>
                    <IconButton href={user.github_link} target="_blank" rel='noopener noreferrer'><GitHubIcon sx={{ fontSize: 40, color: 'whitesmoke' }} /></IconButton>
                    <IconButton href={user.linkedin} target="_blank" rel='noopener noreferrer'><LinkedInIcon sx={{ fontSize: 40, color: 'whitesmoke' }} /></IconButton>
                </div>
            </Box>
        </>
    })

    const userEducation = user.map((user) => {
        return user.educations.map((school) => {
            return <>
                <Grid item xs={3.5} style={{ margin: 10 }}>
                    <Card style={{ padding: 5 }} style={cardStyle}>
                        <Typography variant='h6' style={{ marginBottom: 5, marginTop: 5 }}>{school.name}</Typography>
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
            return <><Grid item xs={3.5} style={{ margin: 10 }}>
                <Card style={cardStyle}>
                    <Typography variant='h6'>{experience.company}</Typography>
                    <Typography>Position: {experience.title}</Typography>
                    <Typography>Description: {experience.description}</Typography>
                    <Typography>Start: {experience.start_year}</Typography>
                    <Typography>End: {experience.ending_year}</Typography>
                </Card>
            </Grid></>
        })
    })

    const userContact = user.map((user) => {
        return <>
            <Card style={cardStyle}>
                <Box><EmailIcon /> <Typography>{user.email}</Typography></Box>
                <LocalPhoneIcon /><Typography> {user.phone}</Typography>
                <LinkedInIcon /><Typography> {user.linkedin}</Typography>
            </Card>
        </>
    })

    function TabPannel(props) {
        const { children, value, index } = props
        return (<div>
            {value === index && (
                <Typography>{children}</Typography>)
            }
        </div>
        )
    }

    return (
        <div style={{ marginTop: 100, paddingLeft: 10 }}>
            {userInfo}
            <Box>
                <Tabs value={value} onChange={handleTabs} >
                    <Tab label="Education" style={{ color: 'whitesmoke' }}></Tab>
                    <Tab label="Experience" style={{ color: 'whitesmoke' }}></Tab>
                    <Tab label="Contact" style={{ color: 'whitesmoke' }}></Tab>
                </Tabs>
                <TabPannel value={value} index={0}><Typography style={{ color: 'whitesmoke' }} variant='h4'>Education</Typography>{userEducation}</TabPannel>
                <TabPannel value={value} index={1}><Typography style={{ color: 'whitesmoke' }} variant='h4'>Experience</Typography>{userExperience}</TabPannel>
                <TabPannel value={value} index={2}><Typography style={{ color: 'whitesmoke' }} variant='h4'>Contact {userContact}</Typography></TabPannel>
            </Box>
        </div>
    )
}

export default Profile