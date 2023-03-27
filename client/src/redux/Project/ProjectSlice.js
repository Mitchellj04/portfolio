import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const projectFetch = createAsyncThunk('project/projectFetch',() => {
    return fetch('/projects')
    .then((resp) => resp.json())
    .then((data) => data)
})


const initialState = {
    projects: [],
    errors: []
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers: (builders) => {
        builders
        .addCase(projectFetch.fulfilled, (state, action) => {
            state.projects = action.payload
        })
    }
})

export default projectSlice.reducer