import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
// import App from './adapter/Api'


 function formatName(user) {
     return user.firstName + ' '+user.lastName;
 }

 const user = {
    firstName: 'Helper',
    lastName: 'PErez'
 }


ReactDOM.render(
    <h1>Hello , {formatName(user)}</h1>,
    document.getElementById('root')
)

// ReactDOM.render(<App/>,document.getElementById('root'));