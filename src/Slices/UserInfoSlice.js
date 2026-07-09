import { createSlice } from '@reduxjs/toolkit'

export const UserInfoSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    activeuser: (state,actions) => {
        state.value=actions.payload
        
        
      
      
    },
   
  },
})


export const { activeuser } = UserInfoSlice.actions

export default UserInfoSlice.reducer