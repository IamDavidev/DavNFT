import { configureStore } from "@reduxjs/toolkit";
import { userReducerSlice } from './states/user.state'


export default configureStore({
    reducer: {
        user: userReducerSlice
    }
})