const TelegramBot = require('node-telegram-bot-api')
const weather = require('./weather.js')
const formatter_weather_data = require('./formatter-weather-data.js')

const token = '5343486699:AAGeSKoSmjoVKhyJZO0fj-22vq2QEspF5H8'

const bot = new TelegramBot(token, {polling: true})

const start = ()=>{
    bot.on('message', async msg =>{
        let chatId = msg.chat.id
        let text = msg.text
        let weather_data = await weather.get_request(text)
        let format_data = formatter_weather_data.formatter(weather_data)
        //console.log(weather_data)
        await bot.sendMessage(chatId, format_data)
        await bot.sendPhoto(chatId, weather_data.icon)
    })
}

start()