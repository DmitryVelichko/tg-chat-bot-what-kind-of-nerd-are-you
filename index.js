
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
