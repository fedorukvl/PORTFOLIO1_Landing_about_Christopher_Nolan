import React from 'react'
import './ThirdIntroSlide.css'

class ThirdIntroSlide extends React.Component{

	componentDidMount(){
		let mainContainer=document.querySelector('.thirdIntroDiv');
		mainContainer.style.height=document.documentElement.clientHeight+'px';
		let info=document.querySelector('.thirdInfoDiv');
		info.style.marginTop=Math.round(mainContainer.clientHeight/2-info.offsetHeight/2)+'px';
	}

	render(){
		return(
			<div className='thirdIntroDiv'>
				<div className='introDiv'>
					<div className='thirdInfoDiv'>
						<h1>3</h1>
						<hr/>
						<strong>ПОСЛЕДНИЕ РАБОТЫ</strong>
					</div>
				</div>
				<div className='thirdPicDiv'>
				
				</div>
			</div>
		)
	}
}

export default ThirdIntroSlide;