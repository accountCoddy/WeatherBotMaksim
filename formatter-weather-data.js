
function formatter({temp,feels_like,wind,desc}){
    let format_string = `Температура 🌡 ${temp}° \n Ощущается как 🌡 ${feels_like}° \n Ветер 🪁 ${wind}м/c \n Описание ☂ - ${desc}`
    return format_string
}

module.exports = {
    formatter
}