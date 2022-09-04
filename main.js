const API_KEY = ``

const loadTempareture = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = data => {
    const tempareture = document.getElementById('temperature')
    tempareture.innerText = data.main.temp

    const conditon = document.getElementById('condition')
    conditon.innerText = data.weather[0].main
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field')
    const searchFieldValue = searchField.value;
    loadTempareture(searchFieldValue)

    const cityName = document.getElementById('city-name')
    cityName.innerText = searchFieldValue;
})
