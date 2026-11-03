import Tabs from './components/tabs'
import './App.css'
import { useState } from 'react'

function App() {
  const [ color, setColor ] = useState('olive');

  const getColor = (colorFromChild) => {
    setColor(colorFromChild)
  }
  return (
  <>
  <h2 style={{backgroundColor: color, height:800, border: '2px solid black'}}>Click to change the background</h2>
  <div style={{ border: '2px solid black'}}>
    <Tabs getColor={getColor}/>
  </div>
  </>
  )
}

export default App
