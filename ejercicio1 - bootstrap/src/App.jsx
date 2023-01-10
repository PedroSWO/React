import { useState } from 'react'
import Card from './components/Card'
import Menu from './components/Menu'


function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Menu/>
<div class="container w-100">
  <div class="row">
    <div class="col-3">
      <Card/>
    </div>
    <div class="col-3">
      <Card/>
    </div>
    <div class="col-3">
      <Card/>
    </div>
    <div class="col-3">
      <Card/>
    </div>
  </div>
  <div class="row">
    <div class="col-3">
      <Card/>
    </div>
    <div class="col-3">
      <Card/>
    </div>
    <div class="col-3">
      <Card/>
    </div>
    <div class="col-3">
      <Card/>
    </div>
  </div>
</div>
</>    

  )
}

export default App
