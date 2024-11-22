import React from 'react'
import User from '../User';
import './index.css';

function UserList(props) {
    const {users} = props;
    
    
  return (
    <div className='wrapper'>
     {
        users.length > 0 && users.map((user,index)=>{
            return (
                <User key={index} user = {user}/>
        );
        } ) 
     }
    </div>
  )
}

export default UserList 