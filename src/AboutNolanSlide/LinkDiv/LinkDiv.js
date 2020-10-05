import React from "react";
import LinkList from "./LinkList/LinkList.js";
import "./LinkDiv.css";

class LinkDiv extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movieLink: [
				{
					id: 1,
					movieName: "«Преследование»",
					url: "https://www.kinopoisk.ru/film/8350/",
				},
				{
					id: 2,
					movieName: "«Помни»",
					url: "https://www.kinopoisk.ru/film/335/",
				},
				{
					id: 3,
					movieName: "«Бессоница»",
					url: "https://www.kinopoisk.ru/film/712/",
				},
			],
		};
	}
	render() {
		let resultLink = this.state.movieLink.map((obj, index) => (
			<LinkList key={obj.id} linkName={obj.movieName} linkUrl={obj.url} />
		));

		return (
			<div className="linkDiv">
				<p>
					Как серьезный режиссер Кристофер дебютировал в 1998 году. Он
					снял полнометражный фильм «Преследование» с бюджетом в $ 6
					тыс. Чтобы приступить к работе над картиной, кинорежиссер
					готовился несколько лет. Нолан создал собственную киностудию
					Syncopy Films со штаб-квартирой в Бербанке, штат Калифорния.
					На базе собственного кинопроизводства в содружестве с
					другими компаниями Кристофер позднее снял еще более 10
					блокбастеров.
					<br />
					В 2000 году Кристофер Нолан снял еще один малобюджетный
					фильм «Помни» с Гаем Пирсом в главной роли.
					<br />В 2002 году Кристофер Нолан закончил картину
					«Бессонница». Действие развивается в небольшом городке на
					Аляске, где при загадочных обстоятельствах погибает девушка.
					Расследование поручают двум опытным сыщикам с Большой земли.
					Главные роли в детективе исполнили звезды Голливуда Аль
					Пачино, Мартин Донован, Робин Уильямс.
				</p>

				<div className="linksDiv">{resultLink}</div>
			</div>
		);
	}
}

export default LinkDiv;
