import { configureStore } from '@reduxjs/toolkit'
import  UserInfoSlice  from './Slices/UserInfoSlice'

export default configureStore({
  reducer: {
    activeuser: UserInfoSlice
  },
})