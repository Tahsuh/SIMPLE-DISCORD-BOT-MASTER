const Discord = require('discord.js')
const client = new Discord.Client();

const command = require('./command')
const config = require('./config.json')

client.on('async', ready => {
    console.log(`${user.id} is online`)

    command(client, 'ping', (message) => {
        message.reply('pong')
    })
})

client.login('config.TOKEN')