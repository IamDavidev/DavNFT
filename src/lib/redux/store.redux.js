import { configureStore } from "@reduxjs/toolkit";
import { userReducerSlice, userSlice } from './states/user.state'


export default configureStore({
    reducer: {
        user: userReducerSlice
    }
})