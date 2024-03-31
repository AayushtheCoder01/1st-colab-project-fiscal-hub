import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from './Shadcncomponents/ui/button'
import Header from './Components/Header.jsx'
import ClientDetails from './Components/ClientsDetailCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className={`flex w-full justify-center items-center mt-20`}>
        <ClientDetails />
      </div>
    </>
  )
}

export default App
