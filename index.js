
const telegramApi = require('node-telegram-bot-api');


const bot = new telegramApi(token, { polling: true });

const ITarr = [
    {id: 0, name: 'не включающий камеру в Zoom-e айтишник', photo: './0.png', desc: 'desc'},
    {id: 1, name: 'слегка огорченный айтишник', photo: './1.png', desc: 'desc'},
    {id: 2, name: 'айтишник-фанат Линукса', photo: './2.png', desc: 'desc'},
    {id: 3, name: 'удивленный айтишник', photo: './3.png', desc: 'desc'},
    {id: 4, name: 'увлеченный айтишник', photo: './4.png', desc: 'desc'},
    {id: 5, name: 'усердно работающий айтишник', photo: './5.png', desc: 'desc'},
    {id: 6, name: 'пишущий код айтишник', photo: './6.png', desc: 'desc'},
    {id: 7, name: 'junior-айтишник', photo: './7.png', desc: 'desc'},
    {id: 8, name: 'заряженный на работу айтишник', photo: './8.png', desc: 'desc'},
    {id: 9, name: 'очень умный айтишник', photo: './9.png', desc: 'desc'},
    {id: 10, name: 'айтишник, чей код скомпилировался', photo: './10.png', desc: 'desc'},
    {id: 11, name: 'рисковый айтишник, не извлекающий безопасно флэшку', photo: './11.png', desc: 'desc'},
    {id: 12, name: 'голодный айтишник', photo: './12.png', desc: 'desc'},
    {id: 13, name: 'получивший корпоративный ноутбук айтишник', photo: './13.png', desc: 'desc'},
    {id: 14, name: 'сверх-продуктивный айтишник', photo: './14.png', desc: 'desc'},
    {id: 15, name: 'слегка выгоревший айтишник', photo: './15.png', desc: 'desc'},
    {id: 16, name: 'айтишник, у которого есть друзья', photo: './16.png', desc: 'desc'},
    {id: 17, name: 'проводящий код-ревью айтишник', photo: './17.png', desc: 'desc'},
    {id: 18, name: 'позитивный айтишник', photo: './18.png', desc: 'desc'},
    {id: 19, name: 'получивший похвалу от начальника айтишник', photo: './19.png', desc: 'desc'},
    {id: 20, name: 'продуктивный айтишник', photo: './20.png', desc: 'desc'},
    {id: 21, name: 'айтишник, проходящий стажировку', photo: './21.png', desc: 'desc'},
    {id: 22, name: 'айтишник, работающий с железом', photo: './22.png', desc: 'desc'},
    {id: 23, name: 'айтишник со здоровой осанкой', photo: './23.png', desc: 'desc'},
    {id: 24, name: 'айтишник, устроивший на работу друга', photo: './24.png', desc: 'desc'},
    {id: 25, name: 'РАБОТАЮЩИЙ ИЗ ДОМА айтишник', photo: './25.png', desc: 'desc'},
    {id: 26, name: 'айтишник-супергерой', photo: './26.png', desc: 'desc'},
    {id: 27, name: 'айтишник на пороге дедлайна', photo: './27.png', desc: 'desc'},
    {id: 28, name: 'senior айтишник', photo: './28.png', desc: 'desc'},
    {id: 29, name: 'айтишник, работающий из отпуска', photo: './29.png', desc: 'desc'},
    {id: 30, name: 'айтишник на стиле', photo: './30.png', desc: 'desc'},
    {id: 31, name: 'айтишник, которому комфортно работать с привычными технологиями', photo: './31.png', desc: 'desc'},
    {id: 32, name: 'чиллящий айтишник', photo: './32.png', desc: 'desc'},
    {id: 33, name: 'решил попробовать парное программирование', photo: './33.png', desc: 'desc'},
    {id: 34, name: 'действуешь по зову сердца', photo: './34.png', desc: 'desc'},
    {id: 35, name: 'написал не в тот чат', photo: './35.png', desc: 'desc'},
    {id: 36, name: 'айтишник, любящий собак', photo: './36.png', desc: 'desc'},
    {id: 37, name: 'человек-многорук', photo: './37.png', desc: 'desc'},
    {id: 38, name: 'айтишник, любящий кошаков', photo: './38.png', desc: 'desc'},
    {id: 39, name: 'backend-разработчик', photo: './39.png', desc: 'desc'},
    {id: 40, name: 'успешный айтишник, вышедший на рынок труда', photo: './40.png', desc: 'desc'},
    {id: 41, name: 'работаешь не покладая рук', photo: './41.png', desc: 'desc'},
    {id: 42, name: 'общаешься с заказчиком', photo: './42.png', desc: 'desc'},
    {id: 43, name: 'пришёл в офис в понедельник утром', photo: './43.png', desc: 'desc'},
    {id: 44, name: 'любящий своё дело айтишник', photo: './44.png', desc: 'desc'},
    {id: 45, name: 'проводишь очередное код-ревью у джунов', photo: './45.png', desc: 'desc'},
    {id: 46, name: 'типичный айтишник', photo: './46.png', desc: 'desc'},
    {id: 47, name: 'получивший премию айтишник', photo: './47.png', desc: 'desc'},
    {id: 48, name: 'проводишь совещание с коллегами', photo: './48.png', desc: 'desc'},
    {id: 49, name: 'читающий айтишник', photo: './49.png', desc: 'desc'},
    {id: 50, name: 'обсуждаешь правки с заказчиком', photo: './50.png', desc: 'desc'},
    {id: 51, name: 'айтишник с отличным настроением', photo: './51.png', desc: 'desc'},
    {id: 52, name: 'внезапно стал максимально продуктивным', photo: './52.png', desc: 'desc'},
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
        await bot.sendMessage(chatId, `Ну что ж, ${msg.from.first_name}... Сегодня ты ${ITarr[randomNumber].name} 😂😅 `);
        return bot.sendMessage(chatId, '👇👇 Попробовать еще раз 👇👇', button2)
    })
}

start()
