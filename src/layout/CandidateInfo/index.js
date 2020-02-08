import React from 'react';

const data = 
{ 
    firstname: 'Justin',
    lastname: 'Igugu',
    state: 'Delta',
    country: 'Nigeria',
    city: 'Warri',
    residential: '15 omo avenue',
    gender: 'male',
    date: '152645',
};
const arr = Object.keys(data);
const Show = arr.map((value) => <li className='list-group-item' key={value}>{`${value}: ${data[value]}`}</li>);

export default Show;
