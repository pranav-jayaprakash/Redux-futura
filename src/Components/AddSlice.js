import {createSlice} from '@reduxjs/toolkit'

const initialState={num1:100,num2:50,num3:0}
export const AddSlice=createSlice({
    name:"add",
    initialState,
    reducers:{
        addnums: (state) => {
            state.num3 = state.num1 + state.num2 
        }
    }
})


export const {addnums} = AddSlice.actions

export default AddSlice.reducer