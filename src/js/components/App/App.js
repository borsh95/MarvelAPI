import Comics from './../Comics/Comics';

import './../../../css/App.css';

class App {
	async render() {
		const data = await Comics.render();
	}
}

export default new App();