let weather = () => {
	const apiKey = '67a8fd0fdc473447449ee7349e542b4d'
	window.addEventListener('load', () => {
		let fetchWeather = function (city, state, country) {
			fetch(
				'https://api.openweathermap.org/data/2.5/weather?q=' +
					city +
					',' +
					state +
					',' +
					country +
					'&units=' +
					units +
					'&appid=' +
					apiKey
			)
				.then((response) => response.json())
				.then((data) => console.log(data))
		}
		let displayWeather = function (data) {
			const { name } = data
			const { icon, description } = data.weather[0]
			const { temp, humidity } = data.main
			const { speed } = data.wind
			console.log(name, icon, description, temp, humidity, speed)
			document.querySelector('.city').innerText = 'Weather in ' + name
			document.querySelector('.icon').src =
				'https://openweathermap.org/img/wn/' + icon + '.png'
			document.querySelector('.description').innerText = description
			document.querySelector('.temp').innerText = temp + '°' // + C or F
			document.querySelector('.humidity').innerText =
				'Humidity: ' + humidity + '%'
			document.querySelector('.wind').innerText =
				'Wind Speed: ' + speed + 'km/h'
		}
		let search = function () {
			this.fetchWeather(document.querySelector('.search-bar').value)
		}
		document
			.querySelector('.search button')
			.addEventListener('click', function () {
				weather.search()
			})
	})
}

export default weather
