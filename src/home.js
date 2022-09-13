import footer from './footer'

let home = () => {
	let content = document.getElementById('content')
	// Header DOM
	// Main DOM
	let card = document.createElement('div')
	card.classList = 'card'
	content.appendChild(card)
	let search = document.createElement('div')
	search.classList = 'search'
	card.appendChild(search)
	let searchInput = document.createElement('input')
	searchInput.type = 'text'
	searchInput.placeholder = 'City, State, Country'
	searchInput.classList = 'search-bar'
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
	let weatherImage = document.createElement('img')
	weatherImage.classList = 'icon'
	weatherImage.src = ''
	weatherImage.alt = ''
	weather.appendChild(weatherImage)
	let weatherDescription = document.createElement('div')
	weatherDescription.classList = 'description'
	weatherDescription.innerText = 'Cloudy'
	weather.appendChild(weatherDescription)
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
