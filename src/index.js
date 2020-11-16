import 'regenerator-runtime/runtime';
import { API_URL, URL_COMICS, URL_CHARACTERS } from './js/constans/api';
import { getDataApi } from './js/utils/GetDataApi';

(async function () {
	const data = await getDataApi.getData(API_URL + URL_COMICS);
	console.log("Рузультат", data);
})();