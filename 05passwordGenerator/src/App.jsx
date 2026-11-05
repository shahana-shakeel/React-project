
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasChar, setHasChar] = useState(false);
  const [ password, setPassword ] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(hasNumber){
      str += '0123456789';
    }
    if(hasChar){
      str += '~!@#$%^&*';
    }
    for(let i = 0; i < length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      
    }
    setPassword(pass)

  },
[ length, hasNumber, hasChar, setPassword ])

 const copyToClipBoard = () => {
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password)
 }
useEffect(()=>{
  passwordGenerator()
},[length, hasNumber, hasChar,passwordGenerator])

  return (
    <>
    <div style={{width: 700, borderRadius: 10, margin: 200, color: 'white', backgroundColor: 'grey', fontWeight: 'bold', fontSize: 26}}>
      Password Generator
      <div style={{margin: 20 }}>
        <input type='text' placeholder='Get Password' value={password} ref= {passwordRef} readOnly style={{width: 600, height:40, borderRadius: 10}}/>
        <button style={{ height:40, borderRadius: 10, backgroundColor:'greenyellow'}} onClick={copyToClipBoard}>Copy</button>
      </div>
      <div style={{display: 'flex', gap: 4,color: 'orange',fontSize: 16}}>
      <div>
        <input type='range' min={8} max={50} value={length} onChange={(e)=>setLength(e.target.value)}/>
        <label>Length: {length}</label>
      </div>
      <div >
        <input type='checkbox'
        onChange={()=>{setHasNumber(prev=> !prev)}}/>
           <label>Number</label>
      </div>
      <div >
        <input type='checkbox'
        onChange={()=>{setHasChar(prev=> !prev)}}/>
           <label>Special Characters</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
