import React from 'react'

const Header=(props)=>{

	/*state={
		key:'hello world'
	}
	inputValue=(event)=>{
		this.setState({
			key:event.target.value 
		});
	}*/
	return(
		<header>
			<div>Logo</div>
	    	<input type="text" onChange={props.keyword}/>
	    </header>
		)
}
		
export default Header;