 const HookToken = '';
const HookID = '';

module.exports = [{
    name: "profil-özelleştir",
    code: `
    $author[Profil Özelleştirme | $userDisplayName[$authorID]]
    $description[Butonları kullanarak profilini **özelleştirebilirsin.** Profilini görüntülemek için ise **.profil** komutunu kullanabilirsin.]
    $addButton[1;Açıklamanı Düzenle;primary;aciklama;false;✍🏻]
    $addButton[1;Yaşını Düzenle;primary;yas;false;🎈]
    $addButton[1;Burcunu Düzenle;primary;burc;false;💫]
    $addButton[1;İsmini Düzenle;primary;rename;false;👨🏻]
    $thumbnail[$userAvatar[$authorID]]
    $color[FFFFFF]
$onlyIf[$getGlobalUserVar[kl]==false;Karalisteye alınmışsınız, komutları kullanamazsınız.]
    `
},{
    name: "rename",
    type: "interaction",
    prototype: "button",
    code: `
    $interactionReply[{newEmbed:
    {author:İsim Özelleştirme | $userDisplayName[$authorID]}
    {description:Şuanda isim değiştirme ekranındasınız. Aşağıdaki butona tıklayarak isminizi değiştirebilirsiniz. Yaptığınız tüm değişiklikler güvenlik amacıyla **kayıt altındadır.**}
    {color:FFFFFF}}
    {actionRow:
    {button:İsmimi Düzenle:primary:rename2:false:👨🏻}};everyone;true;false]
$onlyIf[$getGlobalUserVar[kl]==false;Karalisteye alınmışsınız, komutları kullanamazsınız. {interaction} {ephemeral}]
    `
},{
    name: "burc",
    type: "interaction",
    prototype: "button",
    code: `
    $interactionReply[{newEmbed:
    {author:Burç Özelleştirme | $userDisplayName[$authorID]}
    {description:Şuanda burç değiştirme ekranındasınız. Aşağıdaki butona tıklayarak burcunuzu değiştirebilirsiniz. Yaptığınız tüm değişiklikler güvenlik amacıyla **kayıt altındadır.**}
    {color:FFFFFF}}
    {actionRow:
    {button:Burcumu Düzenle:primary:burc2:false:💫}};everyone;true;false]
$onlyIf[$getGlobalUserVar[kl]==false;Karalisteye alınmışsınız, komutları kullanamazsınız. {interaction} {ephemeral}]
    `
},{
    name: "aciklama",
    type: "interaction",
    prototype: "button",
    code: `
    $interactionReply[{newEmbed:
    {author:Açıklama Özelleştirme | $userDisplayName[$authorID]}
    {description:Şuanda açıklama değiştirme ekranındasınız. Aşağıdaki butona tıklayarak açıklamanızı değiştirebilirsiniz. Yaptığınız tüm değişiklikler güvenlik amacıyla **kayıt altındadır.**}
    {color:FFFFFF}}
    {actionRow:
    {button:Açıklamamı Düzenle:primary:aciklama2:false:✍🏻}};everyone;true;false]
$onlyIf[$getGlobalUserVar[kl]==false;Karalisteye alınmışsınız, komutları kullanamazsınız. {interaction} {ephemeral}]
    `
},{
    name: "rename2",
    type: "interaction",
    prototype: "button",
    code: `
    $interactionModal[İsim Özelleştirme!;rename3;
  {actionRow:
    {textInput:İsminiz Nedir?:1:nameInput:true:$userDisplayName[$authorID]:2:15}
$onlyIf[$getGlobalUserVar[kl]==false;Karalisteye alınmışsınız, komutları kullanamazsınız. {interaction} {ephemeral}]
    `
},{
    name: "burc2",
    type: "interaction",
    prototype: "button",
    code: `
    $interactionModal[Burç Özelleştirme!;burc3;
  {actionRow:
    {textInput:Burcunuz Nedir?:1:burcInput:true:Kova:2:7}
$onlyIf[$getGlobalUserVar[kl]==false;Karalisteye alınmışsınız, komutları kullanamazsınız. {interaction} {ephemeral}]
    `
},{
    name: "aciklama2",
    type: "interaction",
    prototype: "button",
    code: `
    $interactionModal[Açıklama Özelleştirme!;aciklama3;
  {actionRow:
    {textInput:Açıklamanız Nedir?:2:aciklamaInput:true::2:75}
$onlyIf[$getGlobalUserVar[kl]==false;Karalisteye alınmışsınız, komutları kullanamazsınız. {interaction} {ephemeral}]
    `
},{
    name: "rename3",
    type: "interaction",
    prototype: "modal",
    code: `
    $interactionReply[{newEmbed:
    {author:İsim Başarıyla Düzenlendi | $userDisplayName[$authorID]}
    {description:İsminiz **$textInputValue[nameInput]** olarak ayarlandı.}
    {footer:Profilini görüntülemek için .profil komutunu kullanabilirsin.:https://media.discordapp.net/attachments/1112377437658026034/1121809379457511515/189664.png?ex=66d1d766&is=66d085e6&hm=2c5ffc6ca744933d81aa65bec623c360fbd39576996069a90df4c694794e48e5&}
    {color:FFFFFF}};everyone;true;false]
    $sendWebhookMessage[${HookID};${HookToken};{newEmbed:{author:Profil Log | $userDisplayName[$clientID]}{description:**$userDisplayName[$authorID] ($authorID)** isimli kullanıcı, ismini **$textInputValue[nameInput]** olarak değiştirdi.}{color:FFFFFF}{thumbnail:$userAvatar[$authorID]}};false]
    $setGlobalUserVar[isim;$textInputValue[nameInput];$authorID]   $onlyIf[$checkContains[$textInputValue[nameInput];http;://;.gg;https;:/;www;gg;discord.gg;discord]==false;Kullanıcı ismin reklam içeremez! {interaction} {ephemeral}]`
},{
    name: "aciklama3",
    type: "interaction",
    prototype: "modal",
    code: `
    $interactionReply[{newEmbed:
    {author:Açıklama Başarıyla Düzenlendi | $userDisplayName[$authorID]}
    {description:Açıklamanız **$textInputValue[aciklamaInput]** olarak ayarlandı.}
    {footer:Profilini görüntülemek için .profil komutunu kullanabilirsin.:https://media.discordapp.net/attachments/1112377437658026034/1121809379457511515/189664.png?ex=66d1d766&is=66d085e6&hm=2c5ffc6ca744933d81aa65bec623c360fbd39576996069a90df4c694794e48e5&}
    {color:FFFFFF}};everyone;true;false]
    $sendWebhookMessage[${HookID};${HookToken};{newEmbed:{author:Profil Log | $userDisplayName[$clientID]}{description:**$userDisplayName[$authorID] ($authorID)** isimli kullanıcı, açıklamasını değiştirdi. \n \`\`\`$textInputValue[aciklamaInput]\`\`\`}{color:FFFFFF}{thumbnail:$userAvatar[$authorID]}};false]
    $setGlobalUserVar[hakkinda;$textInputValue[aciklamaInput];$authorID]

    `
},{
    name: "burc3",
    type: "interaction",
    prototype: "modal",
    code: `
    $interactionReply[{newEmbed:
    {author:Burç Başarıyla Düzenlendi | $userDisplayName[$authorID]}
    {description:Burcunuz **$textInputValue[burcInput]** olarak ayarlandı.}
    {footer:Profilini görüntülemek için .profil komutunu kullanabilirsin.:https://media.discordapp.net/attachments/1112377437658026034/1121809379457511515/189664.png?ex=66d1d766&is=66d085e6&hm=2c5ffc6ca744933d81aa65bec623c360fbd39576996069a90df4c694794e48e5&}
    {color:FFFFFF}};everyone;true;false]
    $sendWebhookMessage[${HookID};${HookToken};{newEmbed:{author:Profil Log | $userDisplayName[$clientID]}{description:**$userDisplayName[$authorID] ($authorID)** isimli kullanıcı, burcunu **$textInputValue[burcInput]** olarak değiştirdi.}{color:FFFFFF}{thumbnail:$userAvatar[$authorID]}};false]
    $setGlobalUserVar[burc;$textInputValue[burcInput];$authorID]
    $onlyIf[$checkContains[$textInputValue[burcInput];koç;KOÇ;Boğa;BOĞA;İkizler;İKİZLER;Yengeç;YENGEÇ;Aslan;ASLAN;Başak;BAŞAK;Terazi;TERAZİ;Akrep;AKREP;Yay;YAY;Oğlak;OĞLAK;Kova;KOVA;Balık;BALIK;Koç;KOÇ;boğa;BOĞA;ikizler;İKİZLER;yengeç;YENGEÇ;aslan;ASLAN;başak;BAŞAK;terazi;TERAZİ;akrep;AKREP;yay;YAY;oğlak;OĞLAK;kova;KOVA;balık;BALIK]==true;Bir burç ismi girilmelidir. Lütfen geçerli bir burç ismi girin.{interaction}{ephemeral}]
$onlyIf[$checkContains[$textInputValue[burcInput];http;://;.gg;https;:/;www;gg;discord.gg;discord]==false;Burcun reklam içeremez! {interaction} {ephemeral}]  

    `
},{
    name: "yas",
    type: "interaction",
    prototype: "button",
    code: `
    $interactionReply[{newEmbed:
    {author:Yaş Özelleştirme | $userDisplayName[$authorID]}
    {description:Şuanda yaş değiştirme ekranındasınız. Aşağıdaki butona tıklayarak yaşınızı değiştirebilirsiniz. Yaptığınız tüm değişiklikler güvenlik amacıyla **kayıt altındadır.**}
    {color:FFFFFF}}
    {actionRow:
    {button:Yaşımı Düzenle:primary:yas2:false:🎈}};everyone;true;false]
$onlyIf[$getGlobalUserVar[kl]==false;Karalisteye alınmışsınız, komutları kullanamazsınız. {interaction} {ephemeral}]
    `
},{
    name: "yas2",
    type: "interaction",
    prototype: "button",
    code: `
    $interactionModal[Yaş Özelleştirme!;yas3;
  {actionRow:
    {textInput:Yaşınız Nedir?:1:yasInput:true::2:2}
$onlyIf[$getGlobalUserVar[kl]==false;Karalisteye alınmışsınız, komutları kullanamazsınız. {interaction} {ephemeral}]

    `
},{
    name: "yas3",
    type: "interaction",
    prototype: "modal",
    code: `
    $interactionReply[{newEmbed:
    {author:Yaş Başarıyla Düzenlendi | $userDisplayName[$authorID]}
    {description:Yaşınız **$textInputValue[yasInput]** olarak ayarlandı.}
    {footer:Profilini görüntülemek için .profil komutunu kullanabilirsin.:https://media.discordapp.net/attachments/1112377437658026034/1121809379457511515/189664.png?ex=66d1d766&is=66d085e6&hm=2c5ffc6ca744933d81aa65bec623c360fbd39576996069a90df4c694794e48e5&}
    {color:FFFFFF}};everyone;true;false]
    $sendWebhookMessage[${HookID};${HookToken};{newEmbed:{author:Profil Log | $userDisplayName[$clientID]}{description:**$userDisplayName[$authorID] ($authorID)** isimli kullanıcı, yaşını **$textInputValue[yasInput]** olarak değiştirdi.}{color:FFFFFF}{thumbnail:$userAvatar[$authorID]}};false]
    $setGlobalUserVar[yas;$textInputValue[yasInput];$authorID]
$onlyIf[$isNumber[$textInputValue[yasInput]]==true;Bir sayı girmeniz gerekiyor. {interaction}{ephemeral}]
$onlyIf[$checkContains[$textInputValue[yasInput];http;://;.gg;https;:/;www;gg;discord.gg;discord]==false;Yaşın reklam içeremez! {interaction} {ephemeral}]  $onlyIf[$textInputValue[yasInput]<31;Geçerli bir yaş formatı sağlayın. {interaction}{ephemeral}]



    `
}]