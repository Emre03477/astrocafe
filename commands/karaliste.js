module.exports = [{
name:"kl-al",
aliases:["karaliste-al","karaliste al","kl al","kl-ekle","kl ekle","karaliste-ekle","karaliste ekle","karaliste +"],
code:`
$title[Başarılı!]
$description[$username[$message[1]] Kullanıcısı karalisteye eklendi]
$setGlobalUserVar[kl;true;$message[1]]
$onlyForIDs[1138630972854763611;1081254040446439554;]
`
},{
name:"kl-cikar",
aliases:["karaliste-cikar","karaliste çıkar","kl cıkar","kl-cikar","kl cikar","karaliste-cikar","karaliste cikar","kl sil","kl-sil","karaliste sil","karaliste-sil","karaliste -"],
code:`
$title[Başarılı!]
$description[$username[$message[1]] Kullanıcısı karalisteden çıkarıldı]
$setGlobalUserVar[kl;false;$message[1]]
$onlyForIDs[1138630972854763611;1081254040446439554;]
`
}]