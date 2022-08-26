import {configureStore} from '@reduxjs/toolkit';
import userSlice from '../store/slices/userSlice';

const store = configureStore({
    reducer: userSlice
});

export default store;
