import React from 'react'
import './index.css';


function Car(props) {
  const{car}=props
  return (
    
      <div className='car'>
     <h3> {car}</h3>
      
    </div>
   
  )
}

export default Car

