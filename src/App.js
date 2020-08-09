import React,{Component} from 'react';
import './App.css';
import html from "./quiz/html.js";
import cpp from "./quiz/cpp.js";
import Question from "./Question.js";
import Welcome from "./Welcome.js";
import Result from "./Result.js";

class App extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
      start:false,
      quiz:null,
      index:0,
      option:[null,null,null,null],
      next:false,
      submit:false,
      score:0,
      finish:false
    };
  }

  startquiz = (quizname)=>{
    if(quizname==="html")
      this.setState({start:true,quiz:html});
    else
      this.setState({start:true,quiz:cpp});
  }

  checkAnswer = (answer,ind)=>{
    const myoption=[null,null,null,null];
    if(answer===ind)
    {
        myoption[ind]="green";
        this.setState({score:this.state.score+1});
    }
    else
    {
      for(var i=0;i<4;i++)
      {
        if(i===answer)
        {
          myoption[i]="green";
        }
        else
          myoption[i]="red";
      }
    }
    if(this.state.index===4)
    {
        this.setState({
          option:myoption,
          submit:true
        });      
    }
    else
    {
        this.setState({
          option:myoption,
          next:true
        });            
    }
  }

  nextQuestion = ()=>{
    this.setState({
      next:false,
      index:this.state.index+1,
      option:[null,null,null,null]
    });
  }

  showresult = ()=>{
      this.setState({
      quiz:null,
      index:0,
      option:[null,null,null,null],
      next:false,
      submit:false,
      finish:true
    });

  }

  reset = ()=>{
    this.setState({
      finish:false,
      start:false,
      score:0
    });
  }
  render()
  {
    const quiz = this.state.quiz;
    const index = this.state.index;
    return (
      <>
        <center>
            <h1 id="heading">Quiz App</h1>
            {this.state.start ? null : <Welcome startquiz={this.startquiz} /> }
            {this.state.quiz ? <Question item={quiz[index]} option={this.state.option} checkAnswer={this.checkAnswer} /> : null}
            {this.state.next ? <button className="nextbtn btn btn-primary" onClick={this.nextQuestion}>Next</button> : null}
            {this.state.submit ? <button className="submitbtn btn btn-danger" onClick={this.showresult} >Submit</button> : null}
            {this.state.finish ? <Result score={this.state.score} reset={this.reset} /> : null}    
        </center>
      </>
    );    
  }

}

export default App;
