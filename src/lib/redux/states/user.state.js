import { createSlice } from '@reduxjs/toolkit'
import { INITIAL_EMPTY_USER_STATE } from '../../../constants/user.const'


export const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_EMPTY_USER_STATE,
    reducers: {
        // createUser: (_, action) => action.payload,
        updateUser: (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                ...action.payload
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


export const { resetUser, updateUser, updatedAddress } = userSlice.actions

export const userReducerSlice = userSlice.reducer