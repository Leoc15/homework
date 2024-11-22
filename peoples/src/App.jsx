import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Address, {Address1} from './Address'

function App() {
  

  return (
    <>
      <Address streetAddress ='3 cabinfield' city='lakeood' state= 'nj' zip='08701'/>
      <Address1 streetAddress ='3 cabinfield' city='lakeood' state= 'nj' zip='08701'/>
    </>
  )
}

export default App
