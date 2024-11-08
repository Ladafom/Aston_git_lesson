function fetchURL(url, repeat){
	let response

	fetch(url)
	.then(res => {
		response = res // получаем содержимое страницы внутри fetchUrl
	})
	.catch(e => {
		if(repeat > 0){
			console.log('attempts left: ',repeat)
			return fetchURL(url, repeat - 1)
		}
		console.log('catch: ', e)
	})

	return response
}

fetchURL('https://google/com&#39',5)
