import footer from './footer'

let home = () => {
	let content = document.getElementById('content')
	// Main DOM
	let card = document.createElement('div')
	card.classList = 'card'
	content.appendChild(card)
	let search = document.createElement('div')
	search.classList = 'search'
	card.appendChild(search)
	let searchInput = document.createElement('input')
	searchInput.type = 'text'
	searchInput.placeholder = 'Search'
	searchInput.classList = 'search-bar'
	searchInput.autofocus = true
	search.appendChild(searchInput)
	let searchButton = document.createElement('button')
	searchButton.id = 'searchButton'
	search.appendChild(searchButton)
	let searchIcon = document.createElement('i')
	searchIcon.id = 'searchIcon'
	searchIcon.classList = 'fa-solid fa-magnifying-glass'
	searchButton.appendChild(searchIcon)
	let weather = document.createElement('div')
	weather.classList = 'weather'
	card.appendChild(weather)
	let city = document.createElement('h2')
	city.classList = 'city'
	city.innerText = 'Weather in Denver'
	weather.appendChild(city)
	let temp = document.createElement('h1')
	temp.classList = 'temp'
	temp.innerText = '51°F'
	weather.appendChild(temp)
	let weatherContainer = document.createElement('div')
	weatherContainer.classList = 'flex'
	weather.appendChild(weatherContainer)
	let weatherImage = document.createElement('img')
	weatherImage.classList = 'icon'
	weatherImage.src = 'https://openweathermap.org/img/wn/04n.png'
	weatherImage.alt = 'Cloud'
	weatherContainer.appendChild(weatherImage)
	let weatherDescription = document.createElement('div')
	weatherDescription.classList = 'description'
	weatherDescription.innerText = 'Cloudy'
	weatherContainer.appendChild(weatherDescription)
	let weatherHumidity = document.createElement('div')
	weatherHumidity.classList = 'humidity'
	weatherHumidity.innerText = 'Humidity: 60%'
	weather.appendChild(weatherHumidity)
	let weatherWind = document.createElement('div')
	weatherWind.classList = 'wind'
	weatherWind.innerText = 'Wind Speed: 6.2 km/h'
	weather.appendChild(weatherWind)

	// Footer DOM
	if (!document.querySelector('footer')) {
		footer()
	}
}

export default home
