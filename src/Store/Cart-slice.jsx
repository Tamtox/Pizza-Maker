import {createSlice} from '@reduxjs/toolkit';

const initialCartState = {
    pizza:[],
    salad:[],
    drinks:[]
} 
const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        login(state,action) {
            state.token = action.payload.idToken;
            state.userId = action.payload.userId
        },
    }
})

export default cartSlice