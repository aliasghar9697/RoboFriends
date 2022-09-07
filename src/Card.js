
import React from 'react';


const Card = (props) => {
	return (

		<div className = 'bg-light-green dib tc br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt ='robat' src = {`https://robohash.org/${props.id}?200*200`} />
		    <div>
			<h2>{props.name}</h2>
			<p>{props.email}</p>
		    </div>
		</div>

	);
}


export default Card;