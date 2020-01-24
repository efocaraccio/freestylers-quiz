import React from 'react';
import './App.css';
import Card from '../components/Card';

class QuestionsContainer extends React.Component {

    constructor(props){

        super(props);
        this.state = { questionsData: null ,
             questionsAnswered : 0 , 
             lastQuestionAnswered: 0,
             optSelected: null
            };
    }
    
    componentDidMount(){
        this.loadQuestions(this.props.country);
    }

    loadQuestions = (country) => {
        fetch(process.env.REACT_APP_BACKEND_URL + "/questions?country=" + country)
            .then(response => response.json())
            .then(data => this.setState( { questionsData : data.questions.map( el => {
                el["answered"] = false ;
                el["answeredCorrectly"] = false;
                return el;
            }) } ));
    }    

    checkAnswer = (correct, questionIndex, optIndex) => {
        this.setState( { questionsAnswered: this.state.questionsAnswered+1,
                        lastQuestionAnswered: questionIndex
                    } );
        this.state.questionsData[questionIndex].optSelected = optIndex;
        this.state.questionsData[questionIndex].answered = true;
        this.state.questionsData[questionIndex].answeredCorrectly = correct;
    }

    render(){
        if(!this.state.questionsData)
            return null;

        let content = [];

        for( var i = 0; i< this.state.questionsData.length ; i++ ){
            content.push(<Card 
                    isQuestionCard={true}
                    img={this.state.questionsData[i].img}
                    title={this.state.questionsData[i].title}
                    options={this.state.questionsData[i].options}
                    onClick={ this.checkAnswer } 
                    index={i}
                    isAnswered = {this.state.questionsData[i].answered}
                    answeredCorrectly = {this.state.questionsData[i].answeredCorrectly}
                    optSelected = {this.state.questionsData[i].optSelected}
                    />);    
        }


        return(<div className="App">
                    <header className="App-header">
                        <div className="row">
                            {content}
                        </div>
                    </header>
                </div>);

    }

}

export default QuestionsContainer;