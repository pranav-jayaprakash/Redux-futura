import { createSlice } from '@reduxjs/toolkit'

const user=createSlice({
    name:'datas',
    initialState:{info:[]},
    reducers:{
        datainfo:(state,action)=>{
            state.info.push(action.payload)
        }
    }
})

export const {datainfo}=user.actions
export default user.reducer