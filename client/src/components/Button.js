import React from 'react';
import './styles.css'

const Button = ({dir , text}) => { //Se suele utilizar "props" como estandar 
return (<a href={dir}><button className="btn">{text}</button></a>);
};

export default Button;