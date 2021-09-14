import {configureStore} from '@reduxjs/toolkit';
import authSlice from './Auth-slice';

const store = configureStore({
    reducer: {
        authSlice:authSlice.reducer,
    }
});

export const authActions = authSlice.actions

export default store