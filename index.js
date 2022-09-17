
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
    {id: 25, name: 'работающий из дома айтишник', photo: './25.png', desc: 'desc'},
    {id: 26, name: 'айтишник-супергерой', photo: './26.png', desc: 'desc'},
    {id: 27, name: 'айтишник на пороге дедлайна', photo: './27.png', desc: 'desc'},
    {id: 28, name: 'senior айтишник', photo: './28.png', desc: 'desc'},
    {id: 29, name: 'айтишник, работающий из отпуска', photo: './29.png', desc: 'desc'},
    {id: 30, name: 'айтишник на стиле', photo: './30.png', desc: 'desc'},
    {id: 31, name: 'айтишник, которому комфортно работать с привычными технологиями', photo: './31.png', desc: 'desc'},
    {id: 32, name: 'айтишник, не любящий Windows', photo: './32.png', desc: 'desc'},
    {id: 33, name: 'айтишник, решивший попробовать парное программирование', photo: './33.png', desc: 'desc'},
    {id: 34, name: 'айтишник, умеющий найти подход к коллегам', photo: './34.png', desc: 'desc'},
    {id: 35, name: 'айтишник, забывший удалить историю браузера', photo: './35.png', desc: 'desc'},
    {id: 36, name: 'айтишник с синдромом самозванца', photo: './36.png', desc: 'desc'},
    {id: 37, name: 'айтишник, пробившийся в IT после 30', photo: './37.png', desc: 'desc'},
    {id: 38, name: 'айтишник, работающий на Internet Explorer', photo: './38.png', desc: 'desc'},
    {id: 39, name: 'backend-разработчик', photo: './39.png', desc: 'desc'},
    {id: 40, name: 'айтишник, снова вышедший на рынок труда', photo: './40.png', desc: 'desc'},
    {id: 41, name: 'айтишник-трудоголик', photo: './41.png', desc: 'desc'},
    {id: 42, name: 'айтишник, работающий удалённо', photo: './42.png', desc: 'desc'},
    {id: 43, name: 'айтишник после 8-часового планирования спринта', photo: './43.png', desc: 'desc'},
    {id: 44, name: 'айтишник, получивший срочную задачу за 5 минут до конца рабочего дня', photo: './44.png', desc: 'desc'},
    {id: 45, name: 'айтишник, проводящий очередное код-ревью у джунов', photo: './45.png', desc: 'desc'},
    {id: 46, name: 'типичный айтишник', photo: './46.png', desc: 'desc'},
    {id: 47, name: 'айтишник, получивший аванс', photo: './47.png', desc: 'desc'},
    {id: 48, name: 'айтишник, мотивирующий коллег на трудовые подвиги', photo: './48.png', desc: 'desc'},
    {id: 49, name: 'читающий айтишник', photo: './49.png', desc: 'desc'},
    {id: 50, name: 'айтишник, обсуждающий правки с заказчиком', photo: './50.png', desc: 'desc'},
    {id: 51, name: 'айтишник с отличным настроением', photo: './51.png', desc: 'desc'},
    {id: 52, name: 'максимально замотивированный айтишник', photo: './52.png', desc: 'desc'},
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

function Myrand(max,min){
    arr=[];
    for (let j = 0; j < max; j++) {
        let x = Math.floor( Math.random() * max) + min;
        if(arr.includes(x) == true){
            j=j-1;
        }else{
            if(x > max==false){
                arr.push(x);
            }
        }
    }
    return arr;
}
const randomArr = Myrand(53,1);

let i = 0;

let randomNumber;



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
        randomNumber= randomArr[i];

        if(randomNumber === undefined) {
            function randomIntFromInterval(min, max) { // min and max included 
                   return Math.floor(Math.random() * (max - min + 1) + min)
                 }
                 
                  randomNumber = randomIntFromInterval(0, 52)
       }
        
        
        await bot.sendSticker(chatId, `${ITarr[randomNumber].photo}`)
        await bot.sendMessage(chatId, `Ну что ж, ${msg.from.first_name}... Сегодня ты ${ITarr[randomNumber].name} 😂`).then(i++);
        return bot.sendMessage(chatId, '👇👇 Попробовать еще раз 👇👇', button2);
        
    })
}

start()
