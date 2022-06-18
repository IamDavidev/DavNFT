import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from './states/user.state'


export default configureStore({
    reducer: {
        user: userSlice.reducer
    }
})