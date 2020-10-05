import React from "react";
import NolanSlide from "./NolanSlide/NolanSlide.js";
import FirstIntroSlide from "./FirstIntroSlide/FirstIntroSlide.js";
import AboutNolanSlide from "./AboutNolanSlide/AboutNolanSlide.js";
import SecondIntroSlide from "./SecondIntroSlide/SecondIntroSlide.js";
import InterviewSlide from "./InterviewSlide/InterviewSlide.js";
import ThirdIntroSlide from "./ThirdIntroSlide/ThirdIntroSlide.js";
import LastMovies from "./LastMovies/LastMovies.js";

class App extends React.Component {
	render() {
		return (
			<div className="main">
				<NolanSlide />
				<FirstIntroSlide />
				<AboutNolanSlide />
				<SecondIntroSlide />
				<InterviewSlide />
				<ThirdIntroSlide />
				<LastMovies />
			</div>
		);
	}
}

export default App;
