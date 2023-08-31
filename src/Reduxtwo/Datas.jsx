import { createSlice } from '@reduxjs/toolkit'

const user=createSlice({
    name:'datas',
    initialState:{info:[]},
    reducers:{
        datainfo:(state,action)=>{
            state.info.push(action.payload)
            console.log(action.payload,'Red')
        }
    }
})

export const {datainfo}=user.actions
export default user.reducer