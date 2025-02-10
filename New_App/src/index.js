import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  App  from './App';
import reportWebVitals from './reportWebVitals';
import MyClass from './MyClass';
import ClassPro from './ClassPro'
import Employee from './Employee';
import Customer from './Customer';
import ClickFunction from './ClickFunction';
import BindingEvent from './BindingEvent';
import Mounting1 from './Mounting1';
import Updating1 from './Updating1';
import Person1 from './Person1';
import ParentClass from './ParentClass';
import ParentComponent from './ParentComponent';
import Students from './Students';
import StyleComponent from './StyleComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div className='App'>
    <App/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
