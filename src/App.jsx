import React from 'react';
import data from './assets/data.json'; 
import UserList from './assets/components/UserList';
import './index.css';
function App() {
  return (
    <div className='main'>
      <UserList users={data}/>
    </div>
  );
}

export default App;
