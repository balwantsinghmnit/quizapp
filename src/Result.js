import React from 'react';

const Result = (props)=>{
	return(
				<div>
                  <h1>You got {props.score} out of 5</h1>
                  <button className="nextbtn btn btn-primary" onClick={props.reset}>Menu</button>
              </div>		);
}

export default Result;