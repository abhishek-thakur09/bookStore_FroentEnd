import React, { useState } from 'react'
import Body from './components/Body'
import { UserProvider } from './components/UserContext'


const App = () => {

  return (
    <>
    <UserProvider>
      <Body/>
    </UserProvider>
    </>
  )
}

export default App