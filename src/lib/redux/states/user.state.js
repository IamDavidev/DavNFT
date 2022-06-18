import { createSlice } from '@reduxjs/toolkit'
import { INITIAL_EMPTY_USER_STATE } from '../../../constants/user.const'


export const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_EMPTY_USER_STATE,
    reducers: {
        createUser: (_, action) => action.payload,
        updaateUser: (state, action) => {
            return {
                ...state,
                ...action.agrs
            }
        },
        updatedAddress: (state, action) => {
            // const { address } = action.payload
            return {
                ...state,
                ...action.payload
            }
        },
        resetUser: () => INITIAL_EMPTY_USER_STATE
    }
})


export const { createUser, resetUser, updaateUser, updatedAddress } = userSlice.actions

export default userSlice.reducer