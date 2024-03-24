---
title: 📓 Kertaus
layout: default
nav_order: 1
permalink: /kertaus/
---

# Kertaus Ohjelmointi 1 -kurssin asioista

## Esitietovaatimukset
Ohjelmointi 2 -kurssi jatkaa siitä, mihin Ohjelmointi 1 päättyi. Tällä kurssilla oletetaan, että Ohjelmointi 1 -kurssin asiat ovat hallussa. Toki kaikkia asioita kerrataan ja vahvistetaan vielä tämän kurssin aikana, sekä käsitellään syvällisemmin kuin edellisellä kurssilla.

## Muistilista Ohjelmointi 1 -kurssin aiheista

### Muuttujat
* muuttujien tyypit ja arvoalueet
* primitiivityypit, niiden wrapper-luokat (kääreluokat)
* oliot (esim. String tai LocalDate)
* muuttujien nimeäminen

### kontrollirakenteet
* if/else-lause
* switch/case-rakenne
* ? : -operaattori (ternary operator)
* while ja for-silmukat, kumpaa kannattaa käyttää missäkin tilanteessa
* foreach-silmukka, käytetään varmasti tällä kurssilla

### poikkeuskäsittely
* try/catch -rakenne
* poikkeuksiin varautuminen
* poikkeuksen käsittely

### metodit ja parametrit
* metodin määritys ja käyttö
* parametrit
* paluuarvo

### taulukot ja listat
* taulukon käyttäminen
* mitä eroa on taulukolla ja kokoelmaluokilla 
* List<> ja ArrayList<>, dynaamiset kokoelmat

### tiedostokäsittely
* tekstitiedoston lukeminen (java.nio-paketti)
* tekstitiedoston kirjoittaminen

### olio-ohjelmoinnin perusteet
* luokka
* luokan jäsenet (kentät ja metodit)
* konstruktorit ja luokan alustaminen 
* getter/setter-metodit ja kapselointi, luokan datan hallittu käyttäminen

Osaat siis olio-ohjelmoinnin osalta osaat tehdä luokkia, niihin konstruktorit sekä setter/getter-metodit kenttien käsittelyyn. Tällä kurssilla otetaan mukaan olio-ohjelmoinnista lisää käsitteitä kuten periytyminen ja rajapinnat. Molemmat ovat tärkeitä ymmärtää ja aivan varmasti joudut myös hyödyntämään ja soveltamaan käytännön ohjelmointityössä.

List<T> on yleisesti käytetty tietorakenne, jos et saanut siitä tarpeeksi harjoitusta Ohjelmointi 1-kurssilla, tämä kurssi korjaa asiaa tältäkin osalta. Hyvin monessa harjoituksessa on List<> käytössä. Ja kurssilla myös selviää myös mikä oikeastaan on <>-notaatio List-luokan yhteydessä (generics). Esimerkiksi tiedostokäsittelyssä tiedoston sisältö luetaan usein listaan ja käsitellään sitten rivi kerrallaan.

Muuttujat, kontrollirakenteet, metodit parametreineen ja paluuarvoineen oletetaan tutuiksi, niitä sovelletaan koko kurssin ajan tehtävissä ja jos tuntuu, että niissä on vielä kertaamista, kannattaa mainita asiasta opettajalle.

Tämän kurssin aikana ei juuri käytetä Scanner-luokkaa. Koodia testataan yksikkötestauksen avulla. Se helpottaa koodin testaamista huomattavasti, kun ei joka kerta erikseen tarvitse kirjoittaa syötteitä uudelleen, vaan samoja testitapauksia voidaan helposti suorittaa uudelleen. Yksikkötestaaminen kuuluu jokaisen ohjelmoijan perustaitoihin, siksi tällä kurssilla se onkin käytössä. Scanner on käyttökelpoinen komentorivipohjaisten sovellusten syötteen lukemiseen ja datan lukemiseen tiedostoista. Web- tai desktop-sovelluksissa Scanner-luokalle ei muutoin löydy oikein mitään käyttöä.

## Kurssin sisällöstä
Tämä kurssi sisältää niitä keskeisiä asioita, joita jokainen ohjelmoija tarvitsee nykypäivänä projekteissa. Kurssi on toteutettu Java-kielellä, joten väkisinkin tulee esille Javan ominaisuuksia ja Javan suoritusympäristön toimintalogiikkaa. Suurin osa kurssin aiheista ovat kuitenkin yleisiä ohjelmointiin liittyviä asioita, ja ideatasolla on sovellettavissa kaikkiin ohjelmointikieliin ja -ympäristöihin. Esimerkiksi yksikkötestausta tehdään kaikilla kielillä, rinnakkaisuuteen liittyvät toimintomallit ja ongelmat ovat kielestä riippumattomia, rajapinnat ja periytyminen ovat toteutettu lähes samalla tavalla eri kielissä, funktionaalinen ohjelmointitekniikka eli tässä tapauksessa lambda-lauseet ovat monessa ohjelmointikielessä mukana, jne jne. Lista jatkuisi vielä, mutta ehkä tässä tuli ajatus ilmi eli kurssi ei ole vain Java-ohjelmointikurssi.

Tavoitteena on antaa myös hyvät edellytykset tästä seuraavien kurssin sisällön opiskeluun. Lähes kaikkia tämän kurssin asioita hyödynnetään esimerkiksi BackEnd-ohjelmointikurssilla.

**Projektityökalut** otetaan tällä kurssi vaivihkaa käyttöön. Java-projekti ei ole mikään yksiselitteinen käsite, se voi olla vain jonkin IDE:n tapa helpottaa useiden java-tiedostohen kääntämistä ja paketointia jar-tiedostoksi. Nykyään käytetään pääasiassa erillisiä projektinhallintavälineitä, esimerkiksi Mavenia tai Gradlea. Ne määrittelevät projektin rakenteen (hakemistot, konfigurointitiedostot) ja työkalut, joilla tehtään projektin käännökset, ajataan testit ja lisätään riippuvuuksia sovelluksessa käytettäviin kirjastoihin. Riippuvuuksien hallinta onkin yksi tärkeä piirre, miksi erillisiä projektityökaluja käytetään. Kurssi ei erityisesti opeta syvällisesti miten Gradle ja Maven toimii, vaan kaikki tehtävät ovat valmiina Gradle-projekteina, joten sen tuomia hyötyjä vain käytetään hyväksi.

**Periytyminen ja rajapinnat** ovat olio-ohjelmoinnin keskeisiä piirteitä. Periytymisen avulla hyödynnetään olemassa olevia luokkia (lähdekoodia ilman koodin kopiointia) laajentamalla luokan sisältämää dataa, metodeja ja voideen ylikirjoittaa kantaluokasta peritytyviä toimintoja. Rajapinta on toimintojen abstraktointitapa, jolla saadaan tyyppiyhteensopivuus eri luokkien välille, vaikka luokat eivät olisi samassa periytymishierarkiassa.

**Streamit ja lambdat** ovat keskeisiä tapoja käsitellä eri kokoelmaluokkia. Streamin avulla läpikäydään kokoelmaluokan sisältämiä olioita, muokataan niitä, tehdään poimintoja, suoritetaan laskentaa muutama esimerkki mainittuna. Käsittelysäännöt määritellään anonyymeinä metodeina, jotka kirjoitataan käyttäen lambda-syntaksia.

**Design Patterns** on joukko kieliriippumattomia malleja erilaisten yleistan ohjelmointi'ongelmien' ratkaisemiseen. Käsite *design pattern* on syytä ymmärtää, jokaista erilaista valmista patternia ei tarvitse muistaa tai osata ulkoa. Tällä kurssilla sivutaan Singleton design patternia.

**Map** on yleisesti käytetty kokoelmaluokka.

**Rinnakkaisuus** ja siihen liittyvä termi asynkronisuus ovat mukana hyvin monessa asiassa. Esimerkiksi web-sovellukselle tulevat pyynnöt selaimilta prosessoidaan palvelimella rinnakkain. Jokaisen mobiilisovelluksen toiminnot ovat toteutettu asynkronisesti. Esimerkkejä löytyisi lukuisia lisää. Rinnakkaisuuden avulla saadaan myös paremmin hyödynnettyä laitteiston kapasitettia. Toisaalta rinnakkaisuuteen liittyy asioita, jotka pitää tietää ja ymmärtää. Ehkä isoin asia on datan käsittelyyn liittyvä asia, poissulkemisongelma (critical section, race condition) eli mistä se johtuu ja miten ratkaistaan. Tarkoituksena tällä kurssilla ei ole käsitellä syvällisesti kaikki rinnakkaisuuteen ja rinnakkaisuuden hallintaan liittyvät tekniikat, vaan antaa yleiskäsitys mitä rinnakkaisuus on ja mitä pitää huomioida rinnakkaisissa toiminnoissa.

**Tietokantakäsittely** liittyy jossain muodossa lähes jokaiseen sovellukseen. Java-sovelluksissa tietokantaa voidaan käyttää joko JDBC:llä tai JPA:lla. Tällä kurssilla käsitellään yksinkertaisempi JDBC ja JPA-tekniikka tulee esille BackEnd -kurssilla. Tietokantaan tehdään erilaisia hakuja sekä ylläpito-operaatioita (CRUD). Lisäksi opetellaan heti alkumeterillä välttämään yksi tietoturvaongelma eli SQL Injection käyttämällä suorittettavissa parametrejä.

Näistä kaikista mainituista asioista lisää kurssin aikana teoria, harjoitusten ja lähdelinkkien avulla.

----------

## Kertauskysymyksiä

```quiz
### Mikä on Java-metodien nimeämiskäytäntö?

- [ ] UpperCamelCase
- [ ] MiddleCAMELcase
- [x] lowerCamelCase
```

```quiz
### Montako valintalauseketta (ehtolause tai operaattori) Javassa on? 

- [ ] 1
- [ ] 2
- [x] 3
```

```quiz
### Tiedonvälitys ja metodit, mikä on vähiten väärä vastaus? 

- [ ] Metodi voi palauttaa useita arvoja
    > Metodi voi palauttaa kokoelman, mutta siinäkin tapauksessa vain yhden kokoelman
- [ ] Parametriä ei tarvitse välittää kutsussa, jos sille on määritelty oletusarvo
    > Javassa ei ole mahdollista määritellä parametreille oletusarvoja
- [ ] Kahta samannimistä metodia ei voi olla yhdessä luokassa
    > Metodit voivat olla samannimisiä, kunhan niiden parametrit ovat eri. Tätä kutsutaan termillä "kuormittaminen".
- [x] Parametria välitetty olio voi muuttua metodin suorituksen aikana (sivuvaikutus)
    > Oikein! Oliot välitetään viittauksina, eli niitä ei kopioida metodia kutsuttaessa.
- [ ] Parametrina voi välittää vain perustietotyyppejä (int, double, char, boolean)
    > Kaikki tietotyypit kelpaavat parametreiksi.
```

```quiz
### Mikä väite ei ole totta?

- [x] Konstruktorilla ei voi olla parametrejä
- [ ] Konstruktori voi kutsua toista saman luokan konstruktoria
    > Kyllä voi käyttämällä this-määrettä
- [ ] Konstruktoria ei ole pakko kirjoittaa
    > konstruktorin kirjoittaminen ei ole pakollista, kääntäjä tekee automaattisesti oletuskonstruktorin jos lähdekoodista puuttuu konstruktorimetodi
- [ ] Konstruktori-metodin nimi on pakko olla sama kuin luokan nimi
```

```quiz
### Mikä väite on totta?

- [ ] Listan (List<>) koko ei voi muuttua suorituksen aikana
    > List on dynaaminen eli koko voi muuttua
- [x] Listan alkoiden lukumäärän saa selville size()-metodilla
- [ ] Käytä aina taulukkoa, ei listaa
    > List on yleensä kätevämpi
- [ ] Voit lisätä listaan alkiota vain loppuun, ei alkuun
    > List mahdollistaa hyvin monipuolisen käsittelyn, myös lisäyksen haluttuun kohtaan
- [ ] Listasta ei voi poistaa mitään, pelkästää lisätä uusi alkioita
```

```quiz
### Mikä väite pätee luokkien ja tiedostojen nimeämiseen?

- [ ] Luokan nimi kirjoitetaan isoilla tai pienellä alkukirjaimella
    > Luokan nimi kirjoitataan aina isolla alkukirjaimelle, on nimeämiskäytäntö jota on syytä noudattaa, Java-kääntäjä ei asiasta välitä
- [x] Luokan ja tiedoston nimet pitää olla täsmälleen samat
- [ ] Yhdessä tiedostossa ei saa olla kuin yksi luokka
    > Vain yksi public luokka per tiedosto, muutoin ei rajoitusta 
- [ ] Luokan ja paketin nimen pitää olla täsmälleen sama
    > Ei ole sama, paketti on käytännössä sama kuin talletushakemiston polku ja luokka sama kuin tiedostonimi
```

{% include quiz.html %}

