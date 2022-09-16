
const telegramApi = require('node-telegram-bot-api');

const token = '';

const bot = new telegramApi(token, { polling: true });

const types = [
    {id: 1, name: 'name', photo: './9.png', desc: 'desc'},
]

const button = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Узнай свою масть", callback_data: 'undefined'}]
        ]
    })
}

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Узнать!'},
    ])
    
    bot.on('message', async (msg) => {
      const text = msg.text;
      const chatId = msg.chat.id;
    
      if (text === '/start') {
        await bot.sendSticker(chatId, './img1.webp')
        await bot.sendMessage(chatId, `Привет, . Готов ?`);
        return bot.sendMessage(chatId, '👇👇 Жми,  ! Рискни  👇👇', button)
      }
