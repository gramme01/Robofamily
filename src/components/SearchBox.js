import React from "react";
import "./css/SearchBox.css";

const SearchBox = ({ searchChange }) => {
	return (
		<div className='box'>
			<input
				className='type-field'
				type='search'
				placeholder='Enter Search Details'
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
