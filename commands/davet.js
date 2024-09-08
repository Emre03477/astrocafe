module.exports = [{
    name: "davet",
    aliases: ["invite","link"],
    code: `
    $author[Beni Davet Et!]
    $description[Beni davet etmek için aşağıda bulunan butona basabilirsin. Ayrıca harika bir astroloji topluluğumuz var. Ona da katılabilirsin :star:]
    $color[FFFFFF]
    $addButton[1;Davet Et!;link;https://discord.com/oauth2/authorize?client_id=1278805953575256169;false;<:58689lightpinkstar:1279367844769038390>]
    $addButton[1;Destek Sunucusu!;link;https://discord.gg/wVq8uEtkhy;false;<:60682orangestar:1279367836824764498>]
$onlyIf[$getGlobalUserVar[kl]==false;Karalisteye alınmışsınız, komutları kullanamazsınız.]
    `
}]