---
title: Harjoitustyö
layout: default
nav_order: 9
parent: Arkisto
---

# Harjoitustyö
{: .no_toc }

Kurssin viimeisillä viikoilla vahvistatte aikaisempina viikkoina opittuja taitoja toteuttaessanne yksilötyönä oman tietokantapohjaisen web-sovelluksen. Harjoitustyö arvostellaan asteikolla 0-5 ja sen painoarvo on 50 % kurssin loppuarvosanasta.
{: .fs-6 }


{: .highlight }
Vaikka harjoitustyö tehdään itsenäisesti, saatte keskustella siitä esimerkiksi Teamsissa kuten aikaisemmilla tehtäväkierroksilla. Kriteerinä on, että *jokainen kirjoittaa itse oman koodinsa*.

---
## Tällä sivulla:
{: .no_toc .text-delta }

* Sisällysluettelo
{:toc}

## Video 1: [Harjoitustyön tehtävänanto](https://web.microsoftstream.com/video/d2c07537-4300-493a-957b-61b5153b4a16) <small>22:44</small>

{% include msstream.html id="d2c07537-4300-493a-957b-61b5153b4a16" %}

Tällä videolla käymme läpi tällä sivulla esitetyn harjoitustyön tehtävänannon ja arviontikriteeristön.

&nbsp;


## Harjoitustyön opppimistavoitteet

Harjoitustyön tarkoituksena on oppia ja syventää osaamista seuraavissa aiheissa:

1. **HTTP-pyyntöjen käsittely Javalla (Servletit)**

    * käyttäjältä saadun datan käsittely (HTTP parametrit, lomakkeet)
    * datan välittäminen servletiltä käyttöliittymälle<br />&nbsp;

1. **Tietokantojen käyttö Javassa (JDBC)**

    * tietokantakerroksen eriyttäminen muusta logiikasta (DAO, data access object)
    * kyselyiden kokoaminen turvallisesti (prepared statements)<br />&nbsp;

1. **Dynaamisten HTML-sivujen toteutus JSP:llä (JavaServer Pages)**

    * sivujen muodostaminen dynaamisesti JSP-teknologialla
    * datan käsittely JSP-sivuilla JSTL-kirjaston avulla (JavaServer Pages Standard Tag Library)<br />&nbsp;

Lisäksi voit hyödyntää seuraavia kurssilla esiintyneitä menetelmiä ja teknologioita:

* versionhallinta (Git)
* yksikkötestaus (JUnit)
* Ajax-pyynnöt, JSON ja JavaScript


## Harjoitustyön aihe ja rajaus

Harjoitustyön aiheena on tietokantapohjainen verkkosivusto artistien ja albumien selaamiseksi ja hallinnoimiseksi. Halutessasi voit soveltaa tehtävänanota toteuttaaksesi teknisesti samankaltaisen palvelun itse valitsemastasi aiheesta. Vahvista tällöin aiheesi soveltuvuus lähettämällä viesti opettajalle Teamsissa tai sähköpostitse.

Harjoitustyön teknisen toteutuksen tavoitteet ovat seuraavat:

* palvelu hyödyntää SQL-tietokantaa
* tietokantaoperaatiot toteutetaan Javalla hyödyntäen JDBC-teknologiaa
* palvelun HTTP-pyyntöjen käsittely toteutetaan servletteillä
* palvelun käyttöliittymäkerros toteutetaan JSP-sivuina JSTL-kirjaston avulla
* palvelun lähdekoodi on asiallisesti muotoiltu ja kommentoitu, eikä se sisällä kriittisiä käännösvirheitä tai -varoituksia.

Jotta harjoitustyö ei olisi tarpeettoman laaja ja jotta se vastaisi kurssin oppimistavoitteita, siinä minimoidaan ja rajataan seuraavia ominaisuuksia:

* ei tyylien koodausta (CSS)
* mahdollisimman yksinkertaiset HTML-rakenteet
* vain yksinkertaista SQL:ää.

Voit halutessasi tehdä hienot sivut ja tyylitellä ne, mutta **kurssin oppimistavoitteissa ja tehtävän arvioinnissa tyyleillä ei ole painoarvoa**. Saat palveluusi yksinkertaiset tyylit helposti käyttämällä [jotain näistä valmiista CSS-kirjastoista, jotka eivät edellytä lainkaan attribuuttien lisäämistä HTML-koodiisi](https://github.com/dbohdan/classless-css).

Kurssin esimerkeissä olemme hyödyntäneet Sakura-nimistä CSS-kirjastoa:

```html
<!-- katso lisätiedot: https://github.com/oxalorg/sakura -->
<link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura.css" type="text/css">
```


## Harjoitustyön projektipohja

Hyödynnä harjoitustyössä [samaa projektipohjaa](https://github.com/ohjelmointi2/embedded-tomcat-template), jota olemme käyttäneet kurssin aikaisemmilla viikoilla. Kloonaa GitHubista toinen kopio projektipohjasta tai kopioi projekti Eclipsessä.

Jos kloonaat projektipohjan toiseen kertaan, [nimeä nykyinen projektisi Eclipsessä uudelleen ennen kloonausta](https://help.eclipse.org/2021-03/index.jsp?topic=%2Forg.eclipse.cdt.doc.user%2Ftasks%2Fcdt_t_proj_rename.htm). Eclipse ei hyväksy kahta samannimistä projektia yhdessä työtilassa. Muista myös lisätä SQLite-ajuri tähän uuteen projektiin [viikon 7 ohjeiden mukaisesti](/07_mvc/servlet_dao_jstl#versionumeroiden-m%C3%A4%C3%A4ritteleminen), tai törmäät myöhemmin *"java.sql.SQLException: No suitable driver found for jdbc:sqlite:..."*-virheeseen.

Poista myös projektipohjasta omaan harjoitustyöhönsi kuulumattomat tiedostot, kuten mahdolliset aikaisemmat viikkoharjoitukset, esimerkkiservletti ja jsp-sivut. Korvaa readme-tiedoston sisältö oman projektisi lyhyellä kuvauksella.


## Valmis musiikkitietokanta

Käytämme harjoitustyössä valmista musiikkitietokantaa nimeltä [**Chinook**](https://github.com/lerocha/chinook-database):

> *"Chinook is a sample database available for SQL Server, Oracle, MySQL, etc."*
>
> *"The Chinook data model represents a digital media store, including tables for artists, albums, media tracks, invoices and customers."*
>
> [Luis Rocha, Chinook Database](https://github.com/lerocha/chinook-database)

Lataa itsellesi valmis tietokanta [SQLite-muodossa tästä](https://github.com/lerocha/chinook-database/raw/master/ChinookDatabase/DataSources/Chinook_Sqlite.sqlite).

Chinook-tietokanta sisältää lukuisia tietokantatauluja ja paljon valmista dataa, mutta **tässä harjoitustyössä ainoastaan `Artist`-taulu on luonteeltaan pakollinen**.

Taulut `Album` ja `Track` tulevat tarpeellisiksi tähdätessäsi korkeampiin arvosanoihin. Kaikki muut taulut voit jättää harjoitustyössäsi huomioimatta.


### Tietokannan muut aineistot

* UML-kaavio: [Chinook-tietokannan Wiki](https://github.com/lerocha/chinook-database/wiki/Chinook-Schema)
* Valmis tietokanta: [Chinook_Sqlite.sqlite](https://github.com/lerocha/chinook-database/raw/master/ChinookDatabase/DataSources/Chinook_Sqlite.sqlite)
* Dokumentaatio: https://github.com/lerocha/chinook-database
* SQL-luontikäskyt: [Chinook_Sqlite.sql](https://raw.githubusercontent.com/lerocha/chinook-database/master/ChinookDatabase/DataSources/Chinook_Sqlite.sql)
* Tietokannan lisenssi: [MIT](https://github.com/lerocha/chinook-database/blob/master/LICENSE.md)

* [SQLite tools -video](https://video.haaga-helia.fi/media/SQLite+tools/0_pez4r54j)

    Samaa Chinook-tietokantaa käytetään tässä [SQLite tools -videossa](https://video.haaga-helia.fi/media/SQLite+tools/0_pez4r54j). Tästä videosta voi olla sinulle hyötyä myös tämän tehtävän tekemisessä.

* [SQLite tools -komentorivityökalut](https://sqlite.org/download.html)

    Tietokannan käyttäminen komentoriviltä ei ole välttämättä tarpeellista harjoitustyön tekemiseksi, mutta voit halutessasi ladata SQLite tools -ohjelman Windows-, Linux- tai macOS -version yllä olevasta linkistä.


## Video 2: [Harjoitustyön pohja ja Chinook-tietokanta](https://web.microsoftstream.com/video/d24cfa32-754d-44da-b74f-52d768f8a4d7) <small>38:18</small>

{% include msstream.html id="d24cfa32-754d-44da-b74f-52d768f8a4d7" %}

Tällä videolla teemme pohjatyön harjoitustyöprojektin luomiseksi. Samalla kertaamme kurssin aikana opeteltuja asioita harjoitustyön näkökulmasta.

Projektipohja löytyy osoitteesta [https://github.com/ohjelmointi2/embedded-tomcat-template](https://github.com/ohjelmointi2/embedded-tomcat-template).

&nbsp;


## Harjoitustyön toiminnalliset vaatimukset

Harjoitustyön arviointi perustuu sekä toteutettuihin toiminnallisuuksiin että saavutettuun laatuun. Seuraavissa kappaleissa esitetyt eri toiminnallisuuksien arvosanat edellyttävät projektin perusasioiden olevan kunnossa mm. sisennysten, kääntäjän antamien varoitusten ja koodin muotoilun osalta.

Voit toteuttaa palveluun alla esitettyjen ominaisuuksien lisäksi vapaavalintaisia lisäominaisuuksia, jotka huomioidaan arvioinnissa tapauskohtaisesti. Voit halutessasi tiedustella etukäteen eri lisäominaisuuksien pisteytyksestä Teamsissa.


### Tavoitearvosana 1

Toteutat verkkosovelluksen, jossa on etusivu, jolla näytetään lista tietokannassa olevien artistien nimistä. Tietokantalogiikka on toteutettu DAO-luokkaan ja HTML-koodi on toteutettuna JSP-sivun avulla. Koodin laatu noudattaa kurssilla käsiteltyjä hyviä käytäntöjä välttävästi.

**Huom!** Hyväksyttyyn arvosanaan käytännössä riittää, että ymmärrät ja saat toistettua yllä olevilla videoilla esitetyt esimerkit.


### Tavoitearvosana 3

Kuten edellä, eli toteutat etusivun, jolla näytetään tietokannassa olevien artistien nimet. Lisäksi toteutat lomakkeen ja `doPost`-metodin artistien lisäämiseksi tietokantaan. Lomake artistin lisäämiseksi voidaan toteuttaa samalle sivulle kuin lista artisteista tai omalle sivulleen. Lisätyn artistin tulee tulla näkyville artistilistaan.

Sovelluksen tulee hyödyntää kurssin sisällön mukaisesti DAO-mallia, hyviä koodauskäytäntöjä, JSP-sivuja sekä JSTL-kirjastoa.


### Tavoitearvosana 4

Toteutat edellisten ominaisuuksien lisäksi sivun, joka näyttää yksittäisen valitun artistin kaikki albumit. Etusivulla listattujen artistien nimien tulee toimia linkkeinä tälle uudelle sivulle. Tarvitset sivua varten uuden servletin, jolle välitetään artistin id parametrina, esimerkiksi näin: `http://localhost:8080/albums?ArtistId=50`.

Albumeita varten tarvitset tietokannan valmista `Album`-taulua sekä uutta `Album`-luokkaa. Tietokantakyselyn voit toteuttaa esimerkiksi seuraavasti:

```sql
SELECT AlbumId, Title, ArtistId FROM Album WHERE ArtistId = ?;
```

Artistin id voidään välittää etusivulta seuraavalle sivulle esimerkiksi `GET`-parametrina seuraavasti:

```html
<a href="/albums?ArtistId=50">Metallica</a>
```

Toteutuksessa tietokantaoperaatiot suositellaan jaettavaksi kahteen erilliseen DAO-luokkaan:

* **ArtistDao**

    `Artist`-tauluun liittyvät operaatiot

* **AlbumDao**

    `Album`-tauluun liittyvät operaatiot

Lisäksi tietokantayhteyden muodostaminen ja yhteyksien sulkeminen suositellaan tehtävän omassa luokassaan.


### Tavoitearvosana 5

Toteuta edellisten ominaisuuksien lisäksi ominaisuus, jolla käyttäjä pystyy hakemaan artisteja ja/tai albumeita niiden nimien perusteella.

Hakutulokset tulee esittää JSP-sivulla, jossa hakusanaa vastaavien artistien tai albumien nimien tulee toimia linkkeinä harjoitustyöohjeen edellisessä kohdassa kuvatulle sivulle, esimerkiksi. `/albums?ArtistId=50`.

Toteuta hakuominaisuutta varten myös lomake, joka saa olla vapaasti valitsemallasi sivulla, esimerkiksi etusivulla tai vaikka palvelusi jokaisella sivulla.

Esimerkkikyselyitä hakujen tekemiseksi:

```sql
-- artistien hakeminen osittaisen nimen perusteella:
SELECT ArtistId, Name FROM Artist
    WHERE Name LIKE ?
    ORDER BY Name ASC;

-- albumien hakeminen osittaisen title:n perusteella:
SELECT AlbumId, ArtistId, Title FROM Album
    WHERE Title LIKE ? ORDER BY Title ASC;
```

**Huom!** Muista lisätä `LIKE`-kyselyyn hakusanan alkuun ja loppuun prosenttimerkit, jotta löydät myös osittaiset osumat:

```java
preparedStatement.setString(1, "%" + searchTerm + "%");
```

Lisätietoa `LIKE`-operaatiosta löydät tarvittaessa esimerkiksi [SQLite tutoriaalista](https://www.sqlitetutorial.net/sqlite-like/).


## Versionhallinta, yksikkötestaus ja Ajax

Versionhallinnan, yksikkötestauksen ja Ajax-kutsujen soveltaminen katsotaan eduksi, mutta ne eivät ole ehdottomina vaatimuksina millekään tavoitearvosanalle.


## Harjoitustyön laatuvaatimukset

Vaikka edellä esitetyt tavoitearvosanat liittyvät palvelun toiminnallisuuteen, harjoitustyön arvioinnissa huomioidaan myös toteutuksen laatu. Laadukas ja toimiva toteutus katsotaan arvosanaa nostavaksi, kun taas laatuongelmat heikentävät arvosanaa.

Vähimmäisvaatimus laadun suhteen on asianmukaisesti muotoillut lähdekooditiedostot, sisältäen mm. Javan käytäntöjen mukaiset sisennykset ja nimeämisen. Projektista ei tule löytyä siihen kuulumattomia Java-luokkia ja muita tiedostoja, kuten aikaisempien viikkojen viikkoharjoituksia.


### Kääntäjän virheet ja varoitukset

**Java-kääntäjän antamia virheitä (error), jotka estävät projektin kääntämisen ja suorittamisen ei sallita.** Tällaisissa tapauksissa pyydä apua Teamsissa, jotta ongelma saadaan korjattua ennen työn palautusta. Java-kääntäjän varoitukset (warning) katsotaan pääasiassa arvosanaa laskeviksi. Varoitus `"A serializable class can declare its own serialVersionUID explicitly by declaring a field named "serialVersionUID"` ei haittaa, mutta esimerkiksi `"ArrayList is a raw type. References to generic type ArrayList<E> should be parameterized"` tulee korjata.


### Ajonaikaiset virheet (poikkeukset)

Palvelun tulee selvitä normaaleista käyttötapauksista ilman poikkeuksia. Normaalit käyttötapaukset tarkoittavat mm. linkkien klikkaamista ja lomakkeiden lähettämistä **millä tahansa syötteillä**. Normaaliin käyttöön ei lasketa sitä, jos käyttäjä syöttää esimerkiksi suoraan selaimen osoiteriville virheellisen id:n.


### Suorituskyky ja ulkoasu

Suorituskyvyllä tai tietokantakyselyiden optimoinnilla ei ole painoarvoa. Käyttöliittymän visuaalisuutta ei arvioida, kunhan tarvittavat elementit löytyvät (tekstit, linkit, lomakkeet).


## Tietoturva

**Palveluun ei toteuteta kirjautumista tai käyttäjienhallintaa**. Mahdolliset datan lisäykset, muuttamiset ja poistot eivät edellytä käyttäjän tunnistamista. Palvelun tulee kuitenkin olla teknisesti turvallinen, eli ei altis esim. SQL- tai XSS-injektioille.

Muista siis hyödyntää aikaisemmilta viikoilta tuttuja `PreparedStatement`-luokkaa ja `c:out`-tagia!

<!--
## Harjoitustyön referenssitoteutus

Harjoitustyöstä on tehty referenssitoteutus nimeltä "Music catalog". Referenssitoteutus on **laajuudeltaan suurempi, kuin mitä edellytetään tällä kurssilla**. Emme ole käsitelleet mm. istuntoja, joita tarvittaisiin käyttäjäkohtaisen hakuhistorian tai suosikkilistan toteuttamiseksi.

Voit katsoa harjoitustyön referenssitoteutuksen esittelyn tästä videosta:

**[Harjoitustyön esittely (ohjelmointi 2)](https://video.haaga-helia.fi/media/t/0_x0ojb3pq)**

[![https://video.haaga-helia.fi/media/t/0_x0ojb3pq](https://api.kaltura.nordu.net/p/288/sp/28800/thumbnail/entry_id/0_x0ojb3pq/version/100022/width/435/height/260)](https://video.haaga-helia.fi/media/t/0_x0ojb3pq)
-->

## Esimerkkikyselyjä

Harjoitustyössäsi saatat tarvita esimerkiksi seuraavia kyselyjä:

```sql
-- kaikkien artistien hakeminen aakkosjärjestyksessä:
SELECT ArtistId, Name FROM Artist ORDER BY Name ASC;

-- yksittäisen artistin kaikkien albumien hakeminen:
SELECT AlbumId, Title FROM Album WHERE ArtistId = ?;

-- yksittäisen albumin kaikkien kappaleiden hakeminen (bonus):
SELECT TrackId, Name FROM Track WHERE AlbumId = ?;

-- artistin lisääminen:
INSERT INTO Artist (Name) VALUES (?);

-- albumin lisääminen tietylle artistille (bonus):
INSERT INTO Album (Title, ArtistId) VALUES (?, ?);

-- kaikkien artistien hakeminen yhdistettynä tietoon albumien määrästä (bonus):
SELECT Artist.ArtistId, Name, COUNT(AlbumId) AS AlbumCount
    FROM Artist
    LEFT JOIN Album ON Album.ArtistId = Artist.ArtistId
    GROUP BY Artist.ArtistId
    ORDER BY Name ASC;
```

## Harjoitustyön dokumentointi

Lisää projektiisi vielä erillinen tekstitiedosto `readme.txt` tai `readme.md`, jossa listaat toteuttamasi web-sovelluksen servletit, dao-luokat ja JSP-sivut. Kerro jokaisen Java-luokan tai sivun yhteydessä, mikä on sen rooli toteuttamassasi ratkaisussa. Mikäli noudatit kurssin tehtävänantoa tarkasti, yhden lauseen kuvaus riittää. Jos sovelsit tehtävänantoa, kerro tässä miten ratkaisu poikkeaa tehtävänannosta.


## Versionhallinnan dokumentointi

Jos käytit harjoitustyössäsi versionhallintaa (Git), aja komentorivillä projektisi juurihakemistossa komento:

    git log --oneline --decorate > git-log.txt

Edellä mainittu komento luo projektiisi tiedoston `git-log.txt`, joka sisältää listan tehdyistä commiteista. Voit halutessasi lukea komennon selityksen [Atlassianin artikkelista](https://www.atlassian.com/git/tutorials/git-log#formatting-log-output).

Jos käytit työssäsi komentorivin sijasta jotain muuta työkalua, voit `git-log.txt`-tiedoston sijasta liittää projektiisi kuvankaappauksen työkalusi näkymästä. Jos koodisi on GitHubissa tai vastaavassa versionhallintapalvelussa, riittää, että mainitset sen osoitteineen `git-log.txt`-tiedostossasi.

Gitin käyttö huomioidaan positiivisesti harjoitustyön arvostelussa, mutta se ei ole vaatimuksena erinomaiseen arvosanaan. **Varmista myös seuraavassa vaiheessa, että myös tiedosto git-log.txt tai kuvankaappaus tulee mukaan tekemääsi zip-pakettiin.**


## Projektin lähettäminen Teamsiin

> 💡 *Ennen projektin paketointia sinun kannattaa päivittää Eclipsen tiedostonäkymä valitsemalla projektisi ja painamalla `F5`-painiketta. Tämä auttaa välttämään mahdollisen ["resource is out of sync with the filesystem"](https://www.viralpatel.net/eclipse-resource-is-out-of-sync-with-the-filesystem/)-virheen.*

Harjoitustyön lähdekoodit ja edellä mainitut tekstitiedostot palautetaan Teamsiin yhtenä zip-pakettina seuraavasti:

[Tee projektistasi zip-tiedosto](https://stackoverflow.com/a/5386448) valitsemalla Eclipsessä harjoitustyöprojektin nimen päällä *Export – Export.. – General – Archive file*. Tallenna tiedosto .zip-muotossa säilyttäen hakemistorakenne. Varmista, että zip-paketti sisältää dokumentaation ja kaikki ratkaisusi *.java*- ja *.jsp*-tiedostot. Palauta zip-paketti Teamsin palautuskansioon.

Muistathan jättää lopuksi kurssista [opintojaksopalautetta MyNetissä](https://mynet.haaga-helia.fi/group/pakki/opintopalaute)!

## Tietokannan lisenssi

Chinook-tietokannan on luonut [Luis Rocha](https://github.com/lerocha) ja se on lisensoitu avoimena lähdekoodina [MIT-lisenssillä](https://github.com/lerocha/chinook-database/blob/master/LICENSE.md).


