import { useState } from 'react'
import SignInSide from './components/registerForm/SingIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <SignInSide />
    </>
  )
}

export default App
