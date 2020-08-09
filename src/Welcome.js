import React from 'react';

const Welcome = (props)=>{
	return(
		<div>
              <button className="btnquiz btn btn-success" onClick={()=>props.startquiz("cpp")}>C++ Quiz</button>
              <button className="btnquiz btn btn-success" onClick={()=>props.startquiz("html")}>HTML Quiz</button>
              <a href="https://www.geeksforgeeks.org/c-plus-plus-gq/class-and-object-gq/" className="btn btn-warning mt-5 d-block w-50" target="_blank">Questions From GeeksForGeeks</a>        
        </div>
		);
}

export default Welcome;