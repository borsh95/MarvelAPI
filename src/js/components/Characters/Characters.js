import classes from './../../../css/Characters.css';
import { getDataApi } from '../../utils/GetDataApi';
import { STANDART_XLARGE } from '../../constans/api';
import { ROOT_MODAL } from '../../constans/root';
import Notification from './../Notification/Notification';

class Characters {
	async render(uri) {
		const data = await getDataApi.getData(uri);
		data.length ? this.renderContent(data) : Notification.render();
	}

	renderContent(data) {
		let html = "";

		data.forEach(function ({ name, thumbnail: { path, extension } }) {
			const imgSrc = path + "/" + STANDART_XLARGE + '.' + extension;
			html = `
				<li class="${classes.characters__item}">
					<img class="${classes.characters__img}" src="${imgSrc}">
					<span class="${classes.characters__name}">${name}</span>
				</li>	
			`;

			const htmlWrapp = `
				<div class="${classes.wrapper}">
					<ul class="${classes.characters__container}">
						${html}
					</ul>
					<button class="${classes.characters__btn}" onclick="document.querySelector('.modal').innerHTML = ''">
					<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 409.806 409.806" style="enable-background:new 0 0 409.806 409.806;" xml:space="preserve">
					   <path d="M228.929,205.01L404.596,29.343c6.78-6.548,6.968-17.352,0.42-24.132c-6.548-6.78-17.352-6.968-24.132-0.42
						   c-0.142,0.137-0.282,0.277-0.42,0.42L204.796,180.878L29.129,5.21c-6.78-6.548-17.584-6.36-24.132,0.42
						   c-6.388,6.614-6.388,17.099,0,23.713L180.664,205.01L4.997,380.677c-6.663,6.664-6.663,17.468,0,24.132
						   c6.664,6.662,17.468,6.662,24.132,0l175.667-175.667l175.667,175.667c6.78,6.548,17.584,6.36,24.132-0.42
						   c6.387-6.614,6.387-17.099,0-23.712L228.929,205.01z"/>
			   		</svg>
					</button>
				</div >
				`;

			ROOT_MODAL.innerHTML = htmlWrapp;
		});
	}
}

export default new Characters();