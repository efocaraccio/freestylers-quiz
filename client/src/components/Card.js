import React from 'react';
import './styles.css';
//import argflag from '../img/argflag.svg';

class Card extends React.Component{

    constructor(props){
        super(props);
        this.state = { optionClicked : false}
    }

    buildQuestionCard = () => {
        return this.props.options.map( (el,index) =>{ 
            let func = () => {};
            let classes = "option";
            
            if(this.props.isAnswered){
                if(el.correct == true && this.props.answeredCorrectly)
                    classes += " green-background"
                else if( index == this.props.optSelected)
                        classes += " red-background"
            } else {
                func = () => this.props.onClick(el.correct,this.props.index, index);
                classes += " highlight";
            }

            return( <li onClick={func}  
            className={classes}> {el.text}</li> ) 
        });
    }


    render(){
        let optionsDiv = [];
        let classes = "card";


        if(this.props.isQuestionCard){
            optionsDiv = this.buildQuestionCard();
            if(this.props.isAnswered) 
                if (this.props.answeredCorrectly)
                    classes += " green-highlight"
                else
                    classes += " red-highlight"
        } else{
            classes += " highlight";
        }
            

        return(
        <div className="col-md-3 col-sm-6">
            <div className={classes}  onClick={ !this.props.isQuestionCard ? () => this.props.onClick() : null}>
                <img src={require(`../img/${this.props.img}`)} alt="Avatar" className="card-image"/>
                <div className="container">
                    <h4 className="title"><b>{this.props.title}</b></h4> 
                    {this.props.isQuestionCard &&
                        <ul>
                            {optionsDiv}
                        </ul>
                    }
                </div>
            </div>
        </div>
        );
    }
}

export default Card;