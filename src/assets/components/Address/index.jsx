import React from 'react'
import './index.css';

function Adress(props) {
  const {region,zip}= props.address
  return (
    <div className='add'>
     <h4>{region}</h4>
     <h4>{zip}</h4>
    </div>
  )
}

export default Adress
