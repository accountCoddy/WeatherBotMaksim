const axios = require('axios')

const url_weather = 'https://api.openweathermap.org/data/2.5/weather'
const api_key = 'a32183a7174bdb59dc61d9ab8a7874b8'
let city_name = 'Сочи'

async function get_request(){
    const response = await axios.get(url_weather, {params: {q: city_name, appid: api_key, units: 'metric', lang: 'ru'}})
    console.log(response.data.main.temp)
    return await response.data
}

get_request()