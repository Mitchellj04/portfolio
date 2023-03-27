import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "../redux/Project/ProjectSlice";
import UserSlice from "../redux/User/UserSlice";



const store = configureStore({
    reducer: {
        user: UserSlice,
        project: ProjectSlice
    }
})


export default store