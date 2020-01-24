import React from 'react';
import './styles.css'

class Option extends React.Component { //Se suele utilizar "props" como estandar 

    constructor(props){
        super(props);
    }
    
    handleClick = () => {
        if(this.state.alreadyClicked == true)
            return;
        if(this.props.isCorrect){
            this.setState( {alreadyClicked : true} );
        }
    }

    render(){
        return ( <li className={} onClick={ () =>this.props.handleOptionClick}> {this.props.text} </li> );
    }

};

export default Option;