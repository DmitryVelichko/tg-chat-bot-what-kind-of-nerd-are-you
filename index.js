
const telegramApi = require('node-telegram-bot-api');

const token = '';

const bot = new telegramApi(token, { polling: true });

const ITarr = [
    {id: 0, name: 'ТАИНСТВЕННЫЙ айтишник', photo: './0.png', desc: 'desc'},
    {id: 1, name: 'СЛЕГКА ОГОРЧЕННЫЙ айтишник', photo: './1.png', desc: 'desc'},
    {id: 2, name: 'ОДИНОКИЙ айтишник', photo: './2.png', desc: 'desc'},
    {id: 3, name: 'УДИВЛЕННЫЙ айтишник', photo: './3.png', desc: 'desc'},
    {id: 4, name: 'УВЛЕЧЕННЫЙ айтишник', photo: './4.png', desc: 'desc'},
    {id: 5, name: 'УСЕРДНО РАБОТАЮЩИЙ айтишник', photo: './5.png', desc: 'desc'},
    {id: 6, name: 'ПИШУЩИЙ КОД айтишник', photo: './6.png', desc: 'desc'},
    {id: 7, name: 'JUNIOR айтишник', photo: './7.png', desc: 'desc'},
    {id: 8, name: 'ЗАРЯЖЕННЫЙ НА РАбОТУ айтишник', photo: './8.png', desc: 'desc'},
    {id: 9, name: 'ОЧЕНЬ УМНЫЙ айтишник', photo: './9.png', desc: 'desc'},
    {id: 10, name: 'ЗАСТАВИЛ СВОЙ КОД РАБОТАТЬ', photo: './10.png', desc: 'desc'},
    {id: 11, name: 'НЕ ВКЛЮЧАЮЩИЙ КАМЕРУ В ZOOM-e айтишник', photo: './11.png', desc: 'desc'},
    {id: 12, name: 'ЭФФЕКТИВНЫЙ айтишник', photo: './12.png', desc: 'desc'},
    {id: 13, name: 'УДИВЛЕН, ЧТО ТВОЯ ПРОГРАММА РАБОТАЕТ', photo: './13.png', desc: 'desc'},
    {id: 14, name: 'СВЕРХ-ПРОДУКТИВНЫЙ айтишник', photo: './14.png', desc: 'desc'},
    {id: 15, name: 'СЛЕГКА ВЫГОРЕВШИЙ айтишник', photo: './15.png', desc: 'desc'},
    {id: 16, name: 'ХВАСТАЕШЬСЯ СВОИМ КОРПОРАТИВНЫМ НОУТБУКОМ', photo: './16.png', desc: 'desc'},
    {id: 17, name: 'ПРОВОДЯЩИЙ КОД-РЕВЬЮ айтишник', photo: './17.png', desc: 'desc'},
    {id: 18, name: 'ПОЗИТИВНЫЙ айтишник', photo: './18.png', desc: 'desc'},
    {id: 19, name: 'name', photo: './19.png', desc: 'desc'},
    {id: 20, name: 'name', photo: './20.png', desc: 'desc'},
    {id: 21, name: 'name', photo: './21.png', desc: 'desc'},
    {id: 22, name: 'name', photo: './22.png', desc: 'desc'},
    {id: 23, name: 'name', photo: './23.png', desc: 'desc'},
    {id: 24, name: 'name', photo: './24.png', desc: 'desc'},
    {id: 25, name: 'name', photo: './25.png', desc: 'desc'},
    {id: 26, name: 'name', photo: './26.png', desc: 'desc'},
    {id: 27, name: 'name', photo: './27.png', desc: 'desc'},
    {id: 28, name: 'name', photo: './28.png', desc: 'desc'},
    {id: 29, name: 'name', photo: './29.png', desc: 'desc'},
    {id: 30, name: 'name', photo: './30.png', desc: 'desc'},
    {id: 31, name: 'name', photo: './31.png', desc: 'desc'},
    {id: 32, name: 'name', photo: './32.png', desc: 'desc'},
    {id: 33, name: 'name', photo: './33.png', desc: 'desc'},
    {id: 34, name: 'name', photo: './34.png', desc: 'desc'},
    {id: 35, name: 'name', photo: './35.png', desc: 'desc'},
    {id: 36, name: 'name', photo: './36.png', desc: 'desc'},
    {id: 37, name: 'name', photo: './37.png', desc: 'desc'},
    {id: 38, name: 'name', photo: './38.png', desc: 'desc'},
    {id: 39, name: 'name', photo: './39.png', desc: 'desc'},
    {id: 40, name: 'name', photo: './40.png', desc: 'desc'},
    {id: 41, name: 'name', photo: './41.png', desc: 'desc'},
    {id: 42, name: 'name', photo: './42.png', desc: 'desc'},
    {id: 43, name: 'name', photo: './43.png', desc: 'desc'},
    {id: 44, name: 'name', photo: './44.png', desc: 'desc'},
    {id: 45, name: 'name', photo: './45.png', desc: 'desc'},
    {id: 46, name: 'name', photo: './46.png', desc: 'desc'},
    {id: 47, name: 'name', photo: './47.png', desc: 'desc'},
    {id: 48, name: 'name', photo: './48.png', desc: 'desc'},
    {id: 49, name: 'name', photo: './49.png', desc: 'desc'},
    {id: 50, name: 'name', photo: './50.png', desc: 'desc'},
    {id: 51, name: 'name', photo: './51.png', desc: 'desc'},
    {id: 52, name: 'name', photo: './52.png', desc: 'desc'},
]

const button = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Узнать!", callback_data: 'undefined'}]
        ]
    })
}

const button2 = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Узнать мой оттенок", callback_data: 'undefined'}]
        ]
    })
}

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Узнать свой оттенок!'},
    ])
    
    bot.on('message', async (msg) => {
      const text = msg.text;
      const chatId = msg.chat.id;
    
      if (text === '/start') {
        await bot.sendSticker(chatId, './img1.webp')
        await bot.sendMessage(chatId, `Привет, ${msg.from.first_name}. Какой ты сегодня айтишник? 🤔`);
        return bot.sendMessage(chatId, '👇👇 Дави на кнопку 👇👇', button)
      }
      
      return bot.sendMessage(chatId, 'Моя твоя не понимает, человече.')
    });

    bot.on('callback_query', async (msg) => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
          }
          
          const randomNumber = randomIntFromInterval(0, 52)

        await bot.sendSticker(chatId, `${ITarr[randomNumber].photo}`)
        await bot.sendMessage(chatId, `Ну что ж, ${msg.from.first_name}... Сегодня ты: ${ITarr[randomNumber].name} 😂😅 `);
        return bot.sendMessage(chatId, '👇👇 Попробовать еще раз 👇👇', button2)
    })
}

start()
