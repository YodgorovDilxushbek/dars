import React from 'react';
import './index.css';
import Address from '../Address';
import Car from '../Car';

function User(props) {
  const { firstName, lastName, phone, email, address, image, cars } = props.user;

  return (
    <div className='container'>
      <div className="block">
        <img src={image} alt={`${firstName} ${lastName}`} />
        <h3>{firstName} {lastName}</h3>
        <div className='title'>
          <p>{email}</p>
          <span>{phone}</span>
        </div>
        <Address className="address" address={address}></Address>

        {cars.length > 0 && cars.map((car, index) => (
          <Car car={car} key={index}></Car>
        ))}
      </div>
    </div>
  );
}

export default User;
