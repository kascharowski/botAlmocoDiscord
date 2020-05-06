require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logado como: ${client.user.tag}!`);
});
  
client.on('message', msg => {

    let mensagemTratada = msg.content.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    if(msg.author.bot) return;

    if ( (mensagemTratada.search("almoco") != -1) || (mensagemTratada.search("almocar")!= -1) || (mensagemTratada.search("comer")!= -1) ) {
        msg.channel.send(`Bom almoço, ${msg.author}!`);
    }
});

client.login(process.env.TKN_DISC);