import React from 'react'
import MovieColumn from './MovieColumn/MovieColumn.js'
import './InterviewSlide.css'

class InterviewSlide extends React.Component{
	constructor(props){
		super(props);
		this.state={
			movie:[
			{movieName:'Бэтмен: Начало',url:'https://www.kinopoisk.ru/film/47237/',plot:'В детстве юный наследник огромного состояния Брюс Уэйн оказался свидетелем убийства своих родителей, и тогда он решил бороться с преступностью. Спустя годы он отправляется в путешествие по миру, чтобы найти способ восстановить справедливость. Обучение у мудрого наставника боевым искусствам дает ему силу и смелость. Вернувшись в родной город, Уэйн становится Бэтменом и ведет борьбу со злом.'},
			{movieName:'Престиж',url:'https://www.kinopoisk.ru/film/195334/',plot:'Роберт и Альфред — фокусники-иллюзионисты, которые на рубеже XIX и XX веков соперничали друг с другом в Лондоне. С годами их дружеская конкуренция на профессиональной почве перерастает в настоящую войну. Они готовы на все, чтобы выведать друг у друга секреты фантастических трюков и сорвать их исполнение. Непримиримая вражда, вспыхнувшая между ними, начинает угрожать жизни окружающих их людей…'},
			{movieName:'Темный рыцарь',url:'https://www.kinopoisk.ru/film/111543/',plot:'Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы от преступности, отравляющей город. Сотрудничество оказывается эффективным, но скоро они обнаружат себя посреди хаоса, развязанного восходящим криминальным гением, известным испуганным горожанам под именем Джокер.'},
			{movieName:'Начало',url:'https://www.kinopoisk.ru/film/447301/',plot:'Кобб — талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим. Редкие способности Кобба сделали его ценным игроком в привычном к предательству мире промышленного шпионажа, но они же превратили его в извечного беглеца и лишили всего, что он когда-либо любил. И вот у Кобба появляется шанс исправить ошибки. Его последнее дело может вернуть все назад, но для этого ему нужно совершить невозможное — инициацию. Вместо идеальной кражи Кобб и его команда спецов должны будут провернуть обратное. Теперь их задача — не украсть идею, а внедрить ее. Если у них получится, это и станет идеальным преступлением'}
			],
			currentIndex: 1,
			cycleMode: false,
		}
	}


	componentDidMount(){
		let container=document.querySelector('.interviewSlide');
		container.style.height=document.documentElement.clientHeight+'px';
		let childContainer=document.querySelector('.interviewContainer');
		childContainer.style.marginTop=Math.round(container.clientHeight/2-childContainer.offsetHeight/2)+'px';
	}


	showNextMovie(event){
		let target=event.target;
		if(target.className==='nextMovie'){
			if(this.state.currentIndex<this.state.movie.length-1){
				this.setState((prevState)=>{
				return{
					currentIndex: prevState.currentIndex+1
				}
				})
			}
		}else{
			if(this.state.currentIndex>0){
				this.setState((prevState)=>{
					return{
						currentIndex: prevState.currentIndex-1
					}
				})
			}
		}
	}




	render(){
		return(
			<div className='interviewSlide'>
				<div className='interviewContainer'>

					<h1 className='prevMovie' onClick={this.showNextMovie.bind(this)}>&lt;</h1>

					<div className='textContainer'>
						
						<MovieColumn
							movieTitle={this.state.movie[this.state.currentIndex].movieName}
							moviePlot={this.state.movie[this.state.currentIndex].plot}
							movieUrl={this.state.movie[this.state.currentIndex].url}
						/>
					</div>

					<h1 className='nextMovie' onClick={this.showNextMovie.bind(this)}>&gt;</h1>

				</div>

			</div>
		)
	}
}

export default InterviewSlide