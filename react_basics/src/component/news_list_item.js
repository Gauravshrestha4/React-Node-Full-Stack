import React from 'react'

const NewsItem=(props)=>{
		return(
			<div>
				<h1>{props.item.title}</h1>
				<div>{props.item.feed}</div>
			</div>
		)
	}

export default NewsItem;