import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg);
  };
  return (
    <button className="CreateTodoButton" 
    ionClick={() => onClickButton('Aqui deberá abrir el modal')}
    >+</button>)  
};


export { CreateTodoButton };