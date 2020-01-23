import React from 'react';
import './App.css';
import Home from './Home'
import Countries from './Countries'

const PAGES = {
  HOME: "home",
  COUNTRIES: "countries",
  FREESTYLERS: "freestylers"
}


class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { page: PAGES.HOME};
  }

  changePage = (newPage) => {
    this.setState( {page: newPage})
  } 

  render(){

    let content;
    switch(this.state.page){
      case PAGES.HOME: content = <Home PAGES={PAGES} onPageChange={this.changePage} />;break;
      case PAGES.COUNTRIES: content = <Countries PAGES={PAGES} onPageChange={this.changePage} />;break;
      case PAGES.FREESTYLERS: content = <Home PAGES={PAGES} onPageChange={this.changePage} />;break;
      default: content = <Home PAGES={PAGES} onPageChange={this.changePage} />;
    }
      
    return( 
      <div className="App">
        <header className="App-header">
          {content}
        </header>
      </div> );

  }
}

export default App;
