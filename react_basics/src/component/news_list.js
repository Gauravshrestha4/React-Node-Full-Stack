import React from 'react'
import NewsItem from './news_list_item.js'

const NewsList=(props)=>{
	
	const items=props.news.map((item)=>
	{
		return(<NewsItem key={item.key} item={item}/>	)
	})
		

	return(
		<div>{items}</div>
		)
}

export default NewsList;