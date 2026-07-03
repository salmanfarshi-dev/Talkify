import React from 'react'
import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Message from './Pages/Message';
import Notification from './Pages/Notification';
import Setting from './Pages/Setting';
import Logout from './Pages/Logout';
import Home from './Pages/Home';
import RootLayout from './Component/RootLayout';
import Friends from './Pages/Friends';
import Groups from './Pages/Groups';
import Users from './Pages/Users';
import Request from './Pages/Request';
import MyGroup from './Pages/MyGroup';
import Block from './Pages/Block';







const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
    <Route path='/' element={ <Registration/> }/>
    <Route path='login' element={ <Login/> }/>
     
  <Route path='/' element={<RootLayout/>}>
     
     <Route path='home' element={ <Home/> } />
    <Route path='message' element={ <Message/>} />
    <Route path='notification' element={<Notification/>}/>
    <Route path='setting' element={<Setting/>}/>
    <Route path='logout' element={<Logout/>}/>
    <Route path='friends' element={<Friends/>}/>
    <Route path='group' element={<Groups/>} />
    <Route path='users' element={<Users/>} />
    <Route path='request' element={<Request/>} />
    <Route path='mygroup' element={<MyGroup/>} />
    <Route path='block' element={<Block/>} />
   


  </Route>

    

   </Route>
  )
);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App