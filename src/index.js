import 'regenerator-runtime/runtime';

import axios from 'axios'

const API_KEY = 'a5837db97d72016c81a7a776f4240db9';

const url = "https://gateway.marvel.com/v1/public/comics";

class GetDataApi {
	async getData(url) {
		const response = await axios.get(url, {
			params: {
				apikey: API_KEY,
				limit: 100
			}
		});

		return response.data.data.response;
	}
}

const getApi = new GetDataApi();

(async () => {
	const data = await getApi.getData(url);
	console.log(data);
})();