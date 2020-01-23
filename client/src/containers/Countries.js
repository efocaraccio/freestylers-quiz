import React from 'react';
import './App.css';
import Card from '../components/Card';


class Home extends React.Component{
    
    constructor(props){
        super(props);  
        
        this.state = { countries: null };

        this.getCountries();
    }
    
    getCountries () {
        let countries;
        fetch(process.env.REACT_APP_BACKEND_URL + "/countries")
            .then( response => response.json())
            .then( data => {
                this.setState( { countries: data } );
            });
    };

    render(){
        if(!this.state.countries)
            return null
            
        let content = [];
        
        for( var i = 0; i< this.state.countries.countries.length ; i++ ){
            content.push(<Card img={`${this.state.countries.countries[i].flag}`} title={`${this.state.countries.countries[i].name}`} onClick={ () => this.props.onPageChange(this.props.PAGES.FREESTYLERS) } />);
        }

        return(
            <div className="App">
                <header className="App-header">
                <div className="row">
                    {content}
                </div>
                </header>
            </div>);
    }
}

export default Home;