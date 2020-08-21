import React from 'react'
import LinkDiv from './LinkDiv/LinkDiv.js'
import './AboutNolanSlide.css'
import mementoPic from './img/memento.jpg'

class AboutNolanSlide extends React.Component{

	componentDidMount(){
		let container=document.querySelector('.aboutNolanDiv');
		container.style.height=document.documentElement.clientHeight+'px';
		let info=document.querySelector('.mementoPicDiv');
		info.style.marginTop=Math.round(container.clientHeight/4-info.offsetHeight/2)+'px';
	}

	render(){
		return(
			<div className='aboutNolanDiv'>
					<div className='mementoDiv'>
						<div className='mementoPicDiv'>
							<img src={mementoPic} alt='memento'/>
						</div>
					</div>
					<div className='LinkDiv'>
						<LinkDiv/>
					</div>
			</div>
		)
	}
}

export default AboutNolanSlide