let weather = {
	apiKey: '67a8fd0fdc473447449ee7349e542b4d',
	fetchWeather: function (city) {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=' +
				city +
				'&units=imperial&appid=' +
				this.apiKey
		)
			.then((response) => response.json())
			.then((data) => this.displayWeather(data))
	},
	displayWeather: function (data) {
		const { name } = data
		const { icon, description } = data.weather[0]
		const { temp, humidity } = data.main
		const { speed } = data.wind
		document.querySelector('.city').innerText = 'Weather in ' + name
		document.querySelector('.icon').src =
			'https://openweathermap.org/img/wn/' + icon + '.png'
		document.querySelector('.description').innerText = description
		document.querySelector('.temp').innerText = temp + '°F'
		document.querySelector('.humidity').innerText =
			'Humidity: ' + humidity + '%'
		document.querySelector('.wind').innerText = 'Wind Speed: ' + speed + ' km/h'
		document.querySelector('.weather').classList.remove('loading')
		document.body.style.backgroundImage =
			"url('https://source.unsplash.com/1920x1080/?" + name + "')"
	},
	search: function () {
		this.fetchWeather(document.querySelector('.search-bar').value)
	},
}

export default weather
