const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} Success!`);
});

client.on('message', msg => {
  if (msg.content === '!iknowinotaloneisisisisisissssnotnow') {
    msg.channel.send('[:heart:ENDSTATUS:heart:] ร้านเปิดแล้วเข้ามาซื้อกันได้น๊าา!! @everyone');
  }

  if (msg.content === '!endstatus.open') {
    const embed = new Discord.RichEmbed()
      .setTitle(':heart:ร้านเปิดแล้ว:heart:')
      .setDescription('ซื้อได้ตามปกติแล้วนะครับ!!:heart:')
      .setColor('#f50057')
    msg.channel.send(embed);
  }

  if (msg.content === '!endstatus.closed') {
    const embed = new Discord.RichEmbed()
      .setTitle(':heavy_multiplication_x:ร้านปิดแล้ว:heavy_multiplication_x:')
      .setDescription('ร้านปิดไม่ควรจะทักนะครับ!!:heart:')
      .setColor('#f50057')
    msg.channel.send(embed);
  }

  if (msg.content === '!endstatus.stocks') {
    const embed = new Discord.RichEmbed()
      .setTitle(':heavy_check_mark:จำนวนเบลีที่มี:heavy_check_mark:')
      .setDescription('Stocks : 90ล้าน Beli !!:heart:')
      .setColor('#f50057')
    msg.channel.send(embed);
  }
});

client.login(process.env.TOKEN);
