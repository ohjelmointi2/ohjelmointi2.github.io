<link href="/styles.css" rel="stylesheet">

# SQLite-komentorivityökalun käyttö

Seuraavassa videossa sekä siihen liittyvässä komentoriviesimerkissä hyödynnetään SQLite-komentorivityökalua sekä valmista Chinook-tietokantaa.

Komentorivityökalun avulla voit antaa kahdenlaisia komentoja:

1. SQL-kyselyitä 

    * normaali SQL-kysely, joka päättyy puolipisteeseen
    * esimerkiksi `SELECT * FROM Artist LIMIT 3;`

2. Komentorivityökalun omia komentoja 

    * rivi aloitetaan pisteellä, loppuun ei puolipistettä
    * esimerkiksi `.open Chinook_Sqlite.sqlite`, `.tables` tai `.help`


## SQLite tools ja Chinook

Voit ladata esimerkissä käytettävän tietokantatiedoston tästä: [Chinook_Sqlite.sqlite](https://github.com/lerocha/chinook-database/raw/master/ChinookDatabase/DataSources/Chinook_Sqlite.sqlite).

Esimerkissä käytetään `sqlite3.exe`-komentorivityökalua. Voit ladata itsellesi `sqlite3.exe`-komentorivityökalun osoitteesta: [https://sqlite.org/download.html](https://sqlite.org/download.html). Työkalut löytyvät esimerkiksi Windowsille otsikon "Precompiled Binaries for Windows" alta nimellä *sqlite-tools-win32-x86-VERSIO.zip*. Pura `sqlite3.exe`-tiedosto zip-paketista esimerkiksi samaan kansioon tietokantasi kanssa. Jos käytät eri käyttöjärjestelmää, sovella ohjeita oman käyttöjärjestelmäsi työkaluversion mukaisesti.


## Videotutoriaali

<iframe src="https://d38ynedpfya4s8.cloudfront.net/p/288/sp/28800/embedIframeJs/uiconf_id/23448708/partner_id/288?iframeembed=true&playerId=kaltura_player&entry_id=0_pez4r54j&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=0_wgn4poyh" width="608" height="402" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0"></iframe>

Video on katsottavissa myös [video.haaga-helia.fi-palvelussa](https://video.haaga-helia.fi/media/SQLite+tools/0_pez4r54j).



## Komentoriviesimerkki

Seuraavassa komentorivi-istunnossa lyhyt esimerkki [Chinook-tietokannan](https://github.com/lerocha/chinook-database/raw/master/ChinookDatabase/DataSources/Chinook_Sqlite.sqlite) avaamisesta (`.open Chinook_Sqlite.sqlite`), tulosteiden muotoilusta (`.headers on` ja `.mode column`), rakenteen tutkimisesta (`.tables`, `.schema Artist`) sekä kyselyiden tekemisestä (`SELECT * FROM Artist LIMIT 3;`). 


```
SQLite version 3.20.1 2017-08-24 16:21:36
Enter ".help" for usage hints.

sqlite> .open Chinook_Sqlite.sqlite
sqlite> .tables

Album          Employee       InvoiceLine    PlaylistTrack
Artist         Genre          MediaType      Track
Customer       Invoice        Playlist

sqlite> SELECT * FROM Artist LIMIT 3;

1|AC/DC
2|Accept
3|Aerosmith

sqlite> .headers on
sqlite> .mode column
sqlite> SELECT * FROM Artist LIMIT 3;

ArtistId    Name
----------  ----------
1           AC/DC
2           Accept
3           Aerosmith

sqlite> .schema Artist

CREATE TABLE [Artist]
(
    [ArtistId] INTEGER  NOT NULL,
    [Name] NVARCHAR(120),
    CONSTRAINT [PK_Artist] PRIMARY KEY  ([ArtistId])
);
CREATE UNIQUE INDEX [IPK_Artist] ON [Artist]([ArtistId]);

sqlite> .schema Album

CREATE TABLE [Album]
(
    [AlbumId] INTEGER  NOT NULL,
    [Title] NVARCHAR(160)  NOT NULL,
    [ArtistId] INTEGER  NOT NULL,
    CONSTRAINT [PK_Album] PRIMARY KEY  ([AlbumId]),
    FOREIGN KEY ([ArtistId]) REFERENCES [Artist] ([ArtistId])
                ON DELETE NO ACTION ON UPDATE NO ACTION
);
CREATE UNIQUE INDEX [IPK_Album] ON [Album]([AlbumId]);
CREATE INDEX [IFK_AlbumArtistId] ON [Album] ([ArtistId]);
```


---

Chinook-tietokannan on luonut [Luis Rocha](https://github.com/lerocha) ja se on lisensoitu avoimena lähdekoodina [MIT-lisenssillä](https://github.com/lerocha/chinook-database/blob/master/LICENSE.md).


Tämän oppimateriaalin on kehittänyt Teemu Havulinna ja se on lisensoitu [Creative Commons BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/) -lisenssillä.