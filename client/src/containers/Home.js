import React from 'react';
import logo from '../img/freelogo.png';
import Button from '../components/Button';
import './App.css';


class Home extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
            <Button text="Comenzar Quiz" onClick={ () => this.props.onPageChange(this.props.PAGES.COUNTRIES) }/>
            </div>
          </div>
        );
    }
}

export default Home;