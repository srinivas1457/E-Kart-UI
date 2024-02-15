import React from 'react'
import Header from './component/Util/Header'
import { Outlet } from 'react-router-dom'
import Register from './component/Public/Register'

const App = ({isAuthenticated}) => {
  return (
    <div>
      <Header isAuthenticated={isAuthenticated}/>
      <Outlet/>
      
    </div>
  )
}

export default App

