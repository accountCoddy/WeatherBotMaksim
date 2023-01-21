const weather = require('./weather.js')

const TelegramBot = require("node-telegram-bot-api")
const token = process.env.TOKEN

const bot = new TelegramBot(token, {polling: true})

async function get_data(city_name){
    let data = await weather.get_request(city_name)
    return data
}

const start = () =>{


    bot.on('message', async msg =>{
        let chatId = msg.chat.id
        let first_name = msg.chat.first_name
        let text = msg.text
        if(text == "/start"){
            //bot.sendMessage(chatId, `Привет, ${first_name}`)
            //bot.sendPhoto(chatId, 'https://picsum.photos/200')
        }
        let weather_data = await get_data(text)
        await bot.sendMessage(chatId, `
Температура: ${weather_data.temp}°\n
Ощущается как: ${weather_data.feels_like}°\n
Описание: ${weather_data.description}
        `)
        await bot.sendPhoto(chatId, weather_data.icon)

    })
}

start()