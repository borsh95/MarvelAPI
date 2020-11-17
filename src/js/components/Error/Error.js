import { INDEX_ROOT, ROOT_INDEX } from './../../constans/root';

import classes from './../../../css/Error.css';

class Error {
	render() {
		const htmlWrapper = `
			<div class="${classes.error__container}">
				<p class="${classes.error__alert}">
					Произошла ошибка
				</p>	
				<p class="${classes.error__alert}">
					Попробуйте зайти позже(
				</p>		
			</div>
		`;

		ROOT_INDEX.innerHTML = htmlWrapper;
	}
}

export default new Error();