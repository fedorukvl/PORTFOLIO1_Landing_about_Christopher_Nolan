import React from 'react'
import './FirstIntroSlide.css'

class FirstIntroSlide extends React.Component{

	componentDidMount(){
		let container=document.querySelector('.FirstIntroDiv');
		container.style.height=document.documentElement.clientHeight+'px';
		let info=document.querySelector('.infoDiv');
		info.style.marginTop=Math.round(container.clientHeight/2-info.offsetHeight/2)+'px';
	}

	render(){
		return(
			<div className='FirstIntroDiv'>
				<div className='introDiv'>
					<div className='infoDiv'>
						<h1>1</h1>
						<hr/>
						<strong>НАЧАЛО КАРЬЕРЫ</strong>
					</div>
				</div>
				<div className='picDiv'>
				
				</div>
			</div>
		)
	}
}

export default FirstIntroSlide;