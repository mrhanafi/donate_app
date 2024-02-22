import { createSlice } from "@reduxjs/toolkit";

const initializeState = {
    firstName: 'Hanafi',
    lastName: 'Rahman',
    userId: 1,
    profileImage: 'https://static.wikia.nocookie.net/onepiece-fairytail/images/6/66/Tony_Tony_Chopper.png/revision/latest?cb=20160806203744',

}

export const User = createSlice({
    name: 'user',
    initialState: initializeState,
    reducers:{
        updateFirstName:(state,action) => {
            state.firstName = action.payload.firstName;
        },
        resetToInitialState: () => {
            return initializeState;
        }
    },
});

export const {updateFirstName,resetToInitialState} = User.actions;

export default User.reducer;