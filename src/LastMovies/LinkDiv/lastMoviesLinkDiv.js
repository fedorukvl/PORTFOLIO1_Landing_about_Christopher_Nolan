import React from "react";
import LinkList from "./LinkList/LinkList.js";
import "./lastMoviesLinkDiv.css";

class LastMoviesLinkDiv extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movieLink: [
				{
					id: 1,
					movieName: "«Темный рыцарь 3»",
					url: "https://www.kinopoisk.ru/film/437410/",
				},
				{
					id: 2,
					movieName: "«Интерстеллар»",
					url: "https://www.kinopoisk.ru/film/258687/",
				},
				{
					id: 3,
					movieName: "«Дюнкерк»",
					url: "https://www.kinopoisk.ru/film/931677/",
				},
			],
		};
	}
	render() {
		let resultLink = this.state.movieLink.map((obj, index) => (
			<LinkList key={obj.id} linkName={obj.movieName} linkUrl={obj.url} />
		));

		return (
			<div className="lastMovielinkDiv">
				<p>
					Другая работа 2014 года – научно-фантастический фильм
					«Интерстеллар» – получила награду Киноакадемии. Снимая эту
					ленту, Нолан вновь обратился к сотрудничеству с композитором
					Хансом Циммером, который создавал музыкальное оформление
					блокбастеров «Темный рыцарь» и «Начало». Режиссер не
					предоставил ему возможность изучить сценарий и познакомиться
					с отснятыми кадрами. Циммер писал музыку «вслепую»,
					основываясь только на литературном отрывке, который не имел
					отношения к сюжету киноленты.
					<br />
					13 июля 2017 года состоялся релиз военной драмы «Дюнкерк» с
					Финном Уайтхедом, Томом Харди, Киллианом Мерфи, Марком
					Райлэнсом в главных ролях. Это первая работа Нолана,
					основанная на реальных событиях. Кинокритики мирового уровня
					назвали фильм лучшим за всю карьеру режиссера.
					<br />
					Бюджет картины в течение месяца окупился в 4 раза, в
					дальнейшем кассовые сборы превысили $ 500 млн.
				</p>

				<div className="linksDiv">{resultLink}</div>
			</div>
		);
	}
}

export default LastMoviesLinkDiv;
