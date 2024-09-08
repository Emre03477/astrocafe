const HookToken = '';
const HookID = '';

module.exports = [{
    name: "p-sil",
    code: `
    $userDisplayName[$mentioned[1]] isimli kullanıcının **$message[1]** verisi temizlendi.
    $setGlobalUserVar[$message[1];notset;$mentioned[1]]
	$sendWebhookMessage[${HookID};${HookToken};{newEmbed:{author:Profil Log | $userDisplayName[$clientID]}{description:**$userDisplayName[$mentioned[1]]** isimli kullanıcının **$message[1]** verisi temizlendi.}{footer:$userDisplayName[$authorID] tarafından kullanıldı.}{color:FFFFFF}{thumbnail:$userAvatar[$authorID]}};false]
    $argsCheck[2;Hata]
    $onlyForIDs[1138630972854763611;1081254040446439554;]
    `
}]