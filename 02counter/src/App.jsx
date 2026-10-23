import { useState  } from "react"


function App() {
  const [counter, setCounter] = useState(0)

  function addValue(){
    if(counter >= 20){
      alert("Counter cannot be more than 20")
      return
    }
   setCounter(counter + 1)
  }

  function decreaseValue(){
    if(counter <= 0){
      alert("Counter cannot be less than 0")
      return
    }
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Counter</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}
    >Increase Value: {counter}</button>
    <button onClick = {decreaseValue}>Decrease Value: {counter}</button>
    </>
  )
}

export default App
