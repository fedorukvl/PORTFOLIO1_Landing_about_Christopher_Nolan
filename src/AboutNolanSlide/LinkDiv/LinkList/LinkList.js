import React from 'react'
import './LinkList.css'

class LinkList extends React.Component{
	render(){
		return(
			<div className='link'>
				<h3>{this.props.linkName}</h3>
				<a href={this.props.linkUrl}> перейти</a>
			</div>
		)
	}
}

export default LinkList