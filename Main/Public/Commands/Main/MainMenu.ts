import { SlashCommandBuilder, EmbedBuilder, } from 'discord.js';


module.exports = {
    data: new SlashCommandBuilder()
        .setName("menu")
        .setDescription('Command Main !'),

    async execute(interaction: any) {
        const Menu = new EmbedBuilder()
     .setColor(0x0099FF)
    .setTitle('Some title')
    .setURL('https://discord.js.org/')
    .setAuthor({ name: `Bem-Vindo ${interaction.user.globalName}`, iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
    .setDescription('Some description here')
    .setThumbnail(interaction.user.avatarURL({
        extension: 'webp',
        forceStatic: false,
        size: 1024, })
    )
    .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
    .setImage('https://i.imgur.com/AfFp7pu.png')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        await interaction.reply({ embeds: [Menu] });
    },
};