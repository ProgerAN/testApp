const TelegramBot = require('node-telegram-bot-api')

const TOEKN = '678609158:AAEx7rtw_FXLDFwfSS1L6RDsGe-2Fu-nBoM'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hello drom HEROKU, bot sasy "${msg.from.first_name}"`)
})