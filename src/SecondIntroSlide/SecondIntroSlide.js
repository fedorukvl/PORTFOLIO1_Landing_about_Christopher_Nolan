import React from 'react'
import './SecondIntroSlide.css'

class SecondIntroSlide extends React.Component{

	componentDidMount(){
		let mainContainer=document.querySelector('.secondIntroDiv');
		mainContainer.style.height=document.documentElement.clientHeight+'px';
		let info=document.querySelector('.secondInfoDiv');
		info.style.marginTop=Math.round(mainContainer.clientHeight/2-info.offsetHeight/2)+'px';
	}

	render(){
		return(
			<div className='secondIntroDiv'>
				<div className='introDiv'>
					<div className='secondInfoDiv'>
						<h1>2</h1>
						<hr/>
						<strong>СЕРЕДИНА КАРЬЕРЫ</strong>
					</div>
				</div>
				<div className='secondPicDiv'>
				
				</div>
			</div>
		)
	}
}

export default SecondIntroSlide;