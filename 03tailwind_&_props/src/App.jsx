
import './App.css';
import Card from './components/Card'

function App() {
  const myObj = {
    username: "Kevin"
  }

  return (
    <>
  <h1 className='bg-red-400 text-white border-4 p-4 rounded-xl mb-4'>Tailwind test</h1>
   <Card obj={myObj}/>
   <Card />
  </>
  )
}

export default App
