import { useState } from 'react'
import './App.css'
import SignInSide from './components/signInForm/SingIn'
import EditNews from './components/editNews/EditNews'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <SignInSide />
    </>
  )
}

export default App
