module.exports = [
    {
      type: "guildJoin",
      channel: "1279758538755018852",
      code: `
      $author[Sunucu Giriş Çıkış Sistemi | Bir Sunucu Eklendi!]
      $description[> **$userDisplayName[$clientID]** bir sunucuya eklendi.]
      $addField[Sunucunun Shard Numarası;$guildShardID;true]
      $addField[Sunucu Sahibi Kimliği;$guildOwnerID[$guildID];true]
      $addField[Sunucu Sahibi;$userDisplayName[$guildOwnerID[$guildID]];true]
      $addField[Sunucu Üyesi;$membersCount[$guildID];true]
      $addField[Sunucu Kimliği;$guildID;true]
      $addField[Sunucu Adı;$guildName[$guildID];true]
      $color[44B37F]
      `,
    },
    {
      type: "guildLeave",
      channel: "1279758538755018852",
      code: `
      $author[Sunucu Giriş Çıkış Sistemi | Bir Sunucu Silindi!]
      $description[> **$userDisplayName[$clientID]** bir sunucudan atıldı.]
      $addField[Sunucunun Shard Numarası;$guildShardID;true]
      $addField[Sunucu Sahibi Kimliği;$guildOwnerID[$guildID];true]
      $addField[Sunucu Sahibi;$userDisplayName[$guildOwnerID[$guildID]];true]
      $addField[Sunucu Üyesi;$membersCount[$guildID];true]
      $addField[Sunucu Kimliği;$guildID;true]
      $addField[Sunucu Adı;$guildName[$guildID];true]
      $color[DA4545]
          `,
    },
  ];
  