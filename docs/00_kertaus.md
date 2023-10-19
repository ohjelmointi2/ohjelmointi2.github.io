---
title: Kertaus
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
* List<> ja ArrrayList<>, dynaamiset kokoelmat

### tiedostokäsittely
* tekstitiedoston lukeminen (java-nio-paketti)
* tekstitiedoston kirjoittaminen

### olio-ohjelmoinnin perusteet
* luokka
* luokan jäsenet (kentät ja metodit)
* konstruktorit ja luokan alustaminen 
* getter/setter-metodit ja kapselointi, luokan datan hallittu käyttäminen

Osaat siis olio-ohjelmoinnin osalta osaat tehdä luokkia, niihin konstruktorit sekä setter/getter-metodit kenttien käsittelyyn. Tällä kurssilla otetaan mukaan olio-ohjelmoinnista lisää käsitteitä kuten periytyminen ja rajapinnat. Molemmat ovat tärkeitä ymmärtää ja aivan varmasti joudut myös hyödyntämään ja soveltamaan käytännön ohjelmointityössä.

List<T> on yleisesti käytetty tietorakenne, jos et saanut siitä tarpeeksi harjoitusta Ohjelmointi 1-kurssilla, tämä kurssi korjaa asiaa tältäkin osalta. Hyvin monessa harjoituksessa on List<> käytössä. Ja kurssilla myös selviää myös mikä oikeastaan on <>-notaatio List-luokan yhteydessä (generics).

Muuttujat, kontrollirakenteet, metodit parametreineen ja paluuarvoineen oletetaan tutuiksi, niitä sovelletaan koko kurssin ajan tehtävissä ja jos tuntuu, että niissä on vielä kertaamista, kannattaa mainita asiasta opettajalle.

Tämän kurssin aikana ei käytetä Scanner-luokkaa kovinkaan paljoa. Koodia testataan enemmän yksikkötestauksen avulla, se helpottaa koodin testaamista huomattavasti kun ei joka kerta erikseen tarvitse kirjoittaa syötteitä uudelleen, vaan samoja testitapauksia voidaan helposti suorittaa uudelleen. Yksikkötestaaminen kuuluu jokaisen ohjelmoijan perustaitoihin, siksi tällä kurssilla se onkin käytössä. 

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
- [ ] Parametriä ei tarvitse välittää kutsussa, jos sille on määritelty oletusarvo
- [ ] Kahta samannimistä metodia ei voi olla yhdessä luokassa
- [x] Parametria välitetty olio voi muuttua metodin suorituksen aikana (sivuvaikutus)
- [ ] Parametrina voi välittää vain perustietotyyppejä (int, double, char, boolean)
```

```quiz
### Mikä väite ei ole totta?

- [x] Konstruktorilla ei voi olla parametrejä
- [ ] Konstruktori voi kutsua toista konstruktoria
- [ ] Konstruktoria ei ole pakko kirjoittaa
- [ ] Konstruktori-metodin nimi on pakko olla sama kuin luokan nimi
```

```quiz
### Mikä väite on totta?

- [ ] Listan (List<>) koko ei voi muuttua suorituksen aikana
- [x] Listan alkoiden lukumäärän saa selville size()-metodilla
- [ ] Käytä aina taulukkoa, ei listaa
- [ ] Voit lisätä listaan alkiota vain loppuun, ei alkuun
```

```quiz
### Mikä väite pätee luokkien ja tiedostojen nimeämiseen?

- [ ] Luokan nimi kirjoitetaan isoilla tai pienellä alkukirjaimella
- [x] Luokan ja tiedoston nimet pitää olla täsmälleen samat
- [ ] Yhdessä tiedostossa ei saa olla kuin yksi luokka
- [ ] Luokan ja paketin nimen pitää olla täsmälleen sama
```




