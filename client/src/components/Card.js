import React from 'react';
import './styles.css';
//import argflag from '../img/argflag.svg';

class Card extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="col-md-3 col-sm-6">
            <div className="card" onClick={ () => this.props.onClick()}>
                <img src={require(`../img/${this.props.img}`)} alt="Avatar" className="card-image"/>
                <div className="container">
                    <h4 className="title"><b>{this.props.title}</b></h4> 
                </div>
            </div>
        </div>
        );
    }
}

export default Card;