import {createSlice} from '@reduxjs/toolkit'

const initialState={num1:100,num2:50,num3:0}
export const AddSlice=createSlice({
    name:"add",
    initialState,
    reducers:{
        addnums: (state) => {
            state.num3 = state.num1 + state.num2 
        },
        subnums: (state)=>{
            state.num3 = state.num1 - state.num2
        },
        divnums: (state)=>{
            state.num3 = state.num1 / state.num2
        },
        multinums: (state)=>{
            state.num3 = state.num1 * state.num2
        }
    }
})


export const {addnums,subnums,divnums,multinums} = AddSlice.actions

export default AddSlice.reducer