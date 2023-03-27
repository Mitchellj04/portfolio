import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userFetch= createAsyncThunk('user/userFetch', () => {
    return fetch('/users')
    .then((resp) => resp.json())
    .then((data) => data)
})

const initialState = {
    users: [],
    errors: []
}

const userSlice = createSlice({
    name: 'user',
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder 
        .addCase(userFetch.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }
})


export default userSlice.reducer