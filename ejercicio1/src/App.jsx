import { useState } from 'react'
import Card from './components/Card'
import Menu from './components/Menu'
import './main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Menu/>
      <div className='div'>
        <Card/>
        <Card/>
        <Card/>
        <Card/> 
      </div>
      <div className='div'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default App
