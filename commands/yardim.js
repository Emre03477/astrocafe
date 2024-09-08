module.exports = {
name:"help",
      aliases: ["yardım", "komutlar", "yardim", "destek", "kılavuz"],

code:`
$color[White]
$author[Yardım Menüsü | $userDisplayName[$authorID]]
$addField[.davet 🔗;Botun davet linkini alırsınız.;true]
$addField[.profil-özelleştir 🔧;Burç bilgilerinizi butonlarla ayarlamanıza olanak tanır.;true]
$addField[.profil 👤;Kullanıcı profilinizi görüntüler ve burç bilgilerinizi gösterir.;true]
$addField[.bot-istatistik 📊;Botun kullanım istatistiklerini ve performans bilgilerini gösterir.;true]
$addField[.günlük-burç 📈;Profilinizde ayarlanan burcun günlük yorumunu gösterir.;true]
$addField[.burç-hesapla [ay] [gün] 📅;Belirtilen gün ve ay için doğum tarihinize göre burcunuzu hesaplar ve gösterir. (Örneğin: .burç-hesapla 9 15);true]
$onlyIf[$getGlobalUserVar[kl]==false;Karalisteye alınmışsınız, komutları kullanamazsınız.]

`}