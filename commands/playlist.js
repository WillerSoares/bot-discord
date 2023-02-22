const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist")
    .setDescription("Playlist para Estudos!"),
  
  async execute(interaction){
    await interaction.reply("https://deezer.page.link/QzS45KqciQesYptc6")
  }  
}