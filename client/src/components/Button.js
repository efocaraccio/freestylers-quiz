import React from 'react';
import './styles.css'

const Button = ({dir , text, onClick}) => { //Se suele utilizar "props" como estandar 

    return (<a href={dir}><button className="btn" onClick={ () => onClick()} >{text}</button></a>);
};

export default Button;