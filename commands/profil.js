module.exports = [{
    name: "profil",
  aliases: ["profil-görüntüle", "kullanıcı-profil", "profil-bilgi", "hesap-bilgi", "profil-detay"],
    code: `
    $author[Burç Profili | $userDisplayName[$mentioned[1]]]
    $description[**$userDisplayName[$mentioned[1]]** isimli kişinin burç profilini görüntülüyorsunuz.]
    $thumbnail[$userAvatar[$mentioned[1]]]
    $color[FFFFFF]
    $addField[✍🏻 Kullanıcı Hakkında;$if[$getGlobalUserVar[hakkinda;$mentioned[1]]==notset;Hakkında bilgisi kullanıcı tarafından henüz belirlenmemiştir.;$getGlobalUserVar[hakkinda;$mentioned[1]]];true]
    $addField[🎈 Kullanıcının Yaşı;$if[$getGlobalUserVar[yas;$mentioned[1]]==notset;Yaş bilgisi kullanıcı tarafından henüz belirlenmemiştir.;$getGlobalUserVar[yas;$mentioned[1]]];true]
    $addField[💫 Kullanıcının Burcu;$if[$getGlobalUserVar[burc;$mentioned[1]]==notset;Burç bilgisi kullanıcı tarafından henüz belirlenmemiştir.;$getGlobalUserVar[burc;$mentioned[1]]];true]
    $addField[👨🏻 Kullanıcının İsmi;$if[$getGlobalUserVar[isim;$mentioned[1]]==notset;İsim bilgisi kullanıcı tarafından henüz belirlenmemiştir.;$getGlobalUserVar[isim;$mentioned[1]]];true]
    $footer[Profilini düzenlemek için .profil-özelleştir komutunu kullanabilirsin.;https://media.discordapp.net/attachments/1112377437658026034/1121809379457511515/189664.png?ex=66d1d766&is=66d085e6&hm=2c5ffc6ca744933d81aa65bec623c360fbd39576996069a90df4c694794e48e5&]
    `
}]