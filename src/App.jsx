import React from 'react'
import ButtonGradient from "./assets/svg/ButtonGradient"
import Button from './components/Button'


const App = () => {
  return (

    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          Anything inside the opening/closing component are its CHILDREN, and can be passed via the children prop
          <p>sup</p>
        </Button>
      </div>

      <ButtonGradient />
    </>
    
  )
}

export default App
