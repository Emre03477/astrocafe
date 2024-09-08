module.exports = {
name:"gunluk-burc",
 aliases: ["günlük-yorum", "günlük-burç-yorum", "burç-günlük", "burç-yorum","günlük-burç","gb", "yorum", "gby", "günlük-burç-yorumu", "günlük-burç-yorum"],
code:`
$thumbnail[$userAvatar[$authorID]]
$addField[🔮 Günlük Burç Yorumu:;$filterMessage[$get[a];"];true]
$addField[💫 Burç:;$getGlobalUserVar[burc];true]
$let[a;$jsonRequest[https://api.meemre.xyz/chat?m=$getGlobalUserVar[burc;$authorID]%20burcu%20i%C3%A7in%20g%C3%BCnl%C3%BCk%20bur%C3%A7%20yorumlar%C4%B1%20nelerdir%20ve%20sadece%20bur%C3%A7%20yorumunu%20yaz;;Something went wrong.]]
$reply[$messageID;false]
$clientTyping
$onlyIf[$getGlobalUserVar[burc;$authorID]!=notset;Bu komutu kullanabilmek için burcunuzu ayarlamanız gerekmektedir.]
$color[Green]
  $footer[Burcunuzu düzenlemek için '.profil-özelleştir' komutunu kullanabilirsiniz.;https://media.discordapp.net/attachments/1112377437658026034/1121809379457511515/189664.png?ex=66d1d766&is=66d085e6&hm=2c5ffc6ca744933d81aa65bec623c360fbd39576996069a90df4c694794e48e5&]
$onlyIf[$getGlobalUserVar[kl]==false;Karalisteye alınmışsınız, komutları kullanamazsınız.]
`
}