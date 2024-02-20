import React from 'react'
import Header from './component/Util/Header'
import { Outlet } from 'react-router-dom'
import Register from './component/Public/Register'

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      
    </div>
  )
}

export default App

