import 'regenerator-runtime/runtime';
import App from './js/components/App/App';
import Comics from './js/components/Comics/Comics';

import './css/App.css';
import './css/main.css';

(async function () {
	await App.render();

	Comics.eventListener();
})();