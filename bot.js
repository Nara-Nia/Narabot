require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });

client.once('ready', () => {
    console.log('Bot do Discord está online!');
});

// COMANDOS
client.on('messageCreate', async message => {
    // Evitar que o bot responda a si mesmo
    if (message.author.bot) return;
});

client.login(process.env.DISCORD_TOKEN);