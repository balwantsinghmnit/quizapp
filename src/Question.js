import React from 'react';

const Question = (props)=>{
	return(
			<div className="card card-width mt-5">
			  <div className="card-header bg-primary text-white">
			    <h3>{props.item.question}</h3>
			  </div>
			  <div className="card-body">
		        <button onClick={()=>props.checkAnswer(props.item.answer,0)}  className={props.option[0]}>{props.item.option1}</button>
		        <button onClick={()=>props.checkAnswer(props.item.answer,1)}  className={props.option[1]}>{props.item.option2}</button>
		        <button onClick={()=>props.checkAnswer(props.item.answer,2)}  className={props.option[2]}>{props.item.option3}</button>
		        <button onClick={()=>props.checkAnswer(props.item.answer,3)}  className={props.option[3]}>{props.item.option4}</button>
			  </div>
			</div>
		);
}

export default Question;