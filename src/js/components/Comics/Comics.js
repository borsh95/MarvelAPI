import { API_URL, URL_COMICS, URL_CHARACTERS, STANDART_XLARGE } from '../../constans/api';
import { ROOT_INDEX } from './../../constans/root';
import { IMG_NOT_AVAILABLE } from './../../constans/api';
import { getDataApi } from '../../utils/GetDataApi';
import Characters from './../Characters/Characters';
import Error from './../Error/Error';

import classes from './../../../css/Comics.css';

class Comics {

	renderComics(data) {
		let html = '';

		data.forEach(({ id, title, thumbnail: { path, extension } }, index) => {

			if (path.lastIndexOf(IMG_NOT_AVAILABLE) !== -1) return;

			const uri = `${API_URL + URL_COMICS}/${id}/${URL_CHARACTERS}`;

			const imgSrc = path + "/" + STANDART_XLARGE + '.' + extension;

			html += `
				<li class="${classes.comics__item}" data-uri="${uri}">
					<span class="${classes.comics__title}">${title}</span>
					<img class="${classes.comics__img}" src="${imgSrc}">
				</li>
			`;
		});

		ROOT_INDEX.innerHTML = `<ul class="${classes.comics__container}">${html}</ul>`;
	}

	async render() {
		const data = await getDataApi.getData(API_URL + URL_COMICS);

		data ? this.renderComics(data) : Error.render();
	}

	eventListener() {
		document.querySelectorAll(`.${classes.comics__item}`).forEach(function (elem) {
			const uri = elem.dataset.uri;

			elem.addEventListener('click', function () {
				Characters.render(uri);
			})
		});

	}
}

export default new Comics();