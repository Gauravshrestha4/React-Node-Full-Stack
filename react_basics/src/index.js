import React,{Component} from 'react'
import ReactDom from 'react-dom'
import Header from './component/header.js'
import NewsList from './component/news_list.js'
import JSON from './db.json'
class App extends Component{
	state={
		news:JSON,
		filtered:[]
	}

	getKeyword=(event)=>{

	let filtered=this.state.news.filter((item)=>{
		return(item.title.indexOf(event.target.value)>-1)
	})
	this.setState({
		filtered
	})
	}
	render(){
		const wholeNews=this.state.news;
		let filteredNews=this.state.filtered;
		return(
			<div>
				<Header keyword={this.getKeyword}/>
				<NewsList news={filteredNews.length>0?filteredNews:wholeNews} />
			</div>
			)	
	}
}

ReactDom.render(<App/>,document.querySelector('#root'))
