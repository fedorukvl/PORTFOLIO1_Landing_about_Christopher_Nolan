import React from 'react'
import './MovieColumn.css'

class MovieColumn extends React.Component{
	render(){
		return(
			<div className='movieColumn'>
				<h1>{this.props.movieTitle}</h1>
				<p>{this.props.moviePlot}</p>
				<a href={this.props.movieUrl}>больше о фильме</a>
			</div>
		)
	}
}

export default MovieColumn