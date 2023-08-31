import axios from 'axios'
import { datainfo } from './Datas'

export const DataValues=async(dispatch)=>{
    try{
        const data= await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch(datainfo(data.data))
    }catch(err){
        console.log('Error')
    }
}