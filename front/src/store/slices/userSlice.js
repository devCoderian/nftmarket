import { createReducer, createSlice } from "@reduxjs/toolkit";

const userSlice =  createSlice({
    name: 'user',
    initialState: {},
    reducers:{
        // 비동기 분기 처리
        singup: state => {
            // state.value += 1;
        },
        signin: state => {
            
        }
    }
});

export const {singup, signin} = userSlice.actions;
export default userSlice.reducer;