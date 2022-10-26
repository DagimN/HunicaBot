import {Context, Telegraf} from 'telegraf'
const config = require('./config.ts');

const BOT_TOKEN = config.BOT_TOKEN
const bot = new Telegraf<Context>(BOT_TOKEN);

//TODO: Edit the text content for each reply
bot.start((ctx) => ctx.reply("Welcome"));
//bot.help((ctx) => ctx.reply("Send me a sticker"));

bot.command("order", (ctx) => ctx.reply("What do you want"));
bot.hears("/order", (ctx) => ctx.reply("What do you want"));

bot.command("gallery", (ctx) => ctx.reply("t.me/DagimN"));
bot.hears("/gallery", (ctx) => ctx.reply("t.me/DagimN"));

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
