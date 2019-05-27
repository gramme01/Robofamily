import React from "react";
import "./css/Card.css";

const Card = ({ id, name, email }) => {
	return (
		<div className='card-container'>
			<div className='image'>
				<img alt='' src={`https://www.robohash.org/${id}?400x400`} />
			</div>
			<div className='details'>
				<div />
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
