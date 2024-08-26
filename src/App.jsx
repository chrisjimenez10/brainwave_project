import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ButtonGradient from './assets/svg/ButtonGradient';


const App = () => {
  return (

    <>
  
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>

      <ButtonGradient />
    </>
    
  )
}

export default App;
