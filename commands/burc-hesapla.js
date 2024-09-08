module.exports = [{
    name: "burç-hesapla",
    code: `
    $if[$get[cikti]==error;Bir hata ile karşılaşıldı.;$channelSendMessage[$channelID;{newEmbed:{author:Burç Hesaplama | $userDisplayName[$authorID]}{color:FFFFFF}{description:Burcunuz **$get[cikti]** olarak hesaplandı.}}]]
    $let[cikti;$jsonRequest[https://api.meemre.xyz/burc?ay=$message[1]&gun=$message[2];burc;error]]   
$onlyIf[$message[2]<32;Geçerli bir gün formatı sağlayın.]
$onlyIf[$message[1]<13;Geçerli bir ay formatı sağlayın.]
    $argsCheck[2;Hatalı kullanım]
$onlyIf[$getGlobalUserVar[kl]==false;Karalisteye alınmışsınız, komutları kullanamazsınız.]
    `
}]