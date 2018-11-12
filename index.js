const TelegarmBot = require('node-telegram-bot-api')

const TOKEN = '678609158:AAEx7rtw_FXLDFwfSS1L6RDsGe-2Fu-nBoM'

cont bot = new TelegarmBot(TOKEN, {polling: true})

bot.on(massage, msg => {
  bot.sendMessage(msg.chat.id, `Привет, БОТ сказал: "${msg.from.first_name}"`)
})


