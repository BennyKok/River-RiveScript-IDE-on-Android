var bot = new RiveScript({utf8: true});

function getRsReply(code,user,input) {
  bot.stream(code);
  bot.sortReplies();
  river.reply(bot.reply(user,input));
}