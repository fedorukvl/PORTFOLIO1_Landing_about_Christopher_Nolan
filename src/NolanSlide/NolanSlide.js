import React from 'react'
import './NolanSlide.css'


class NolanSlide extends React.Component{

	componentDidMount() {
		let container=document.querySelector('.NolanSlide');
		container.style.height=document.documentElement.clientHeight+'px';
		let nolanName=document.querySelector('h1');
		nolanName.style.marginTop=Math.round(container.clientHeight/2-nolanName.offsetHeight/2)+'px';
    }

	render(){
		return(
			<div className='NolanSlide'>
				<h1>КРИСТОФЕР НОЛАН </h1>
			</div>
		)
	}
}

export default NolanSlide;