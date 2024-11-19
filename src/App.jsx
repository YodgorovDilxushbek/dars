import React, { useState } from 'react'

// function App() {
// function handleClick() {
//   alert(`hello`)
// }
// function handleMouseEnter() {
//   console.log(`Tugma ikki marta bosildi `);
  
// }



//   return (
//     <div>
//       <button onClick={handleClick} onMouseEnter={handleMouseEnter} onDoubleClick={handleDbClick} >click</button>
//     </div>
//   )
// }



function App() {
  const [counter, setCounter] =useState(0);
  function handleIncrement(e) {
    e.preventDefault()
    setCounter(counter +500);
  }
 
  
  
    return (
      <div>
        <h3>{counter}</h3>
        <button onClick= {handleIncrement} >click</button>
      </div>
    )
  }
export default App

