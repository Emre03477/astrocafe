const { AoiClient } = require("aoi.js");

const client = new AoiClient({
    token: "", 
    prefix: "$getGuildVar[prefix]", 
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildBans","GuildEmojisAndStickers","GuildInvites"],
    events: ["onMessage", "onInteractionCreate","onGuildJoin","onGuildLeave","onBanAdd","onBanRemove","onEmojiCreate","onEmojiDelete","onEmojiUpdate","onInviteCreate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

client.loadCommands("./commands/");

client.variables({
    prefix: ".",
    burc: "notset",
    isim: "notset",
    hakkinda: "notset",
    yas: "notset",
    kl:"false",
})

client.status({
    name: "✨ Dünyanın En İyi Astroloji Botu! | .yardım",
    type: "idle",
    status: "playing"
})
