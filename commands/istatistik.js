module.exports = {
name:"i",
aliases: ["istatistik", "bot-veri", "performans", "bot-rapor", "kullanım-istatistikleri","bot-istatistik"],
code:`
$thumbnail[$userAvatar[$clientID]]
$addField[🌐 Gecikme:;$ping;true]
$addField[🧩 RAM Kullanımı: [%$random[5;10]];$round[$ram] MB | 8 GB]
$addField[👤 Bot Sahibi;[HamsterMert](https://discord.com/users/1138630972854763611);true]
$addField[🖥️ CPU:;%$cpu[os];true]
$addField[⏳ Çalışma Süresi:;<t:$truncate[$divide[$readyTimestamp;1000]]:R>;true]
$addField[🔢 Sunucu Sayısı:;[$guildCount]($getClientInvite[administrator]);true]
$color[Green]
$addField[📆 Piyasaya Sunuş Tarihi;<t:1725304680:F>;true]
$onlyIf[$getGlobalUserVar[kl]==false;Karalisteye alınmışsınız, komutları kullanamazsınız.]


`}