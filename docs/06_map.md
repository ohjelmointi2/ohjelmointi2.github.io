---
title: 🗺️ Map
layout: default
nav_order: 3
permalink: /map/
---


# Map-tietorakenne
{: .no_toc }

Olemme ohjelmointi 1:ssä käyttäneet listoja (`ArrayList<String>`) tai taulukoita (`String[]`), kun olemme halunneet käsitellä useita saman typpisiä asioita. Javassa on myös lukuisia muita **kokoelmia**, joihin voimme koota dataa. Kokoelma tarkoittaa yksinkertaisesti oliota, joka kokoaa alkioita yhteen ([Oracle.com](https://docs.oracle.com/javase/tutorial/collections/intro/index.html)).
{: .fs-6 }

---

## Tällä sivulla:
{: .no_toc .text-delta }

* Sisällysluettelo
{:toc}

## Java Collections Framework

[Java Collections Framework](https://docs.oracle.com/en/java/javase/15/docs/api/java.base/java/util/package-summary.html#CollectionsFramework) sisältää mm. seuraavat rajapinnat ja luokat:

* [List](https://docs.oracle.com/en/java/javase/15/docs/api/java.base/java/util/List.html) *(ArrayList ja LinkedList)*
* [Map](https://docs.oracle.com/en/java/javase/15/docs/api/java.base/java/util/Map.html) *(HashMap ja TreeMap)*
* [Set](https://docs.oracle.com/en/java/javase/15/docs/api/java.base/java/util/Set.html) *(HashSet ja TreeSet)*
* [Queue](https://docs.oracle.com/en/java/javase/15/docs/api/java.base/java/util/Queue.html), [Stack](https://docs.oracle.com/en/java/javase/15/docs/api/java.base/java/util/Stack.html), jne *(ei käsitellä tällä kurssilla)*

Tällä kurssilla keskitymme Javan Map-tietorakenteeseen ja erityisesti sen HashMap-toteutukseen, eli ns. hajautustauluun.

Opiskelun tueksi erinomainen lisämateriaali hajautustauluista on Helsingin yliopiston MOOC-oppimateriaali [https://ohjelmointi-20.mooc.fi/osa-8/2-hajautustaulu](https://ohjelmointi-20.mooc.fi/osa-8/2-hajautustaulu), jonka sisältöä on lainattu myös tässä materiaalissa ja materiaaliin liittyvissä videoissa ja tehtävissä.


## Hajautustaulu eli HashMap

> *"Hajautustaulu eli HashMap on ArrayListin lisäksi eniten käytettyjä Javan valmiiksi tarjoamia tietorakenteita. Hajautustaulua käytetään kun tietoa käsitellään avain-arvo -pareina, missä avaimen perusteella voidaan lisätä, hakea ja poistaa arvo."*
>
> *[Agile Education Research –tutkimusryhmä, mooc.fi](https://ohjelmointi-20.mooc.fi/osa-8/2-hajautustaulu)*

`HashMap` ja `Map` voidaan ottaa käyttöön `import`-komennolla seuraavasti:

```java
import java.util.HashMap;
import java.util.Map;
```

Toisin kuin listoissa, arvoja ei käsitellä pelkästään numeeristen indeksien avulla, vaan voimme määritellä avaimiksi halutessamme vaikka merkkijonoja:

```java
HashMap<String, String> postinumerot = new HashMap<>(); // tai new HashMap<String, String>();

postinumerot.put("00710", "Helsinki");
postinumerot.put("90014", "Oulu");
postinumerot.put("33720", "Tampere");
postinumerot.put("33014", "Tampere");

System.out.println(postinumerot.get("00710")); // tulostaa "Helsinki"

```

Yllä esitetty koodi muodostaa kutakuinkin seuraavan laisen tietorakenteen, jossa jokainen avain viittaa sille asetettuun arvoon:

Avain   | Arvo
--------|-----------
"00710" | "Helsinki"
"90014" | "Oulu"
"33720" | "Tampere"
"33014" | "Tampere"

Toinen samankaltainen käyttötapaus avain-arvo-pareille on myöhemmin tällä kurssilla käsiteltävä JSON-tietorakenne, jossa data näyttäisi tältä:

```json
{
    "00710": "Helsinki",
    "90014": "Oulu",
    "33720": "Tampere",
    "33014": "Tampere"
}
```

<small>Tämä esimerkki on lainattu [Helsingin yliopiston Agile Education Research –tutkimusryhmän oppimateriaalista](https://ohjelmointi-20.mooc.fi/osa-8/2-hajautustaulu), joka on lisensoitu Creative Commons BY-NC-SA-lisenssillä.</small>

## Materiaalia
[PowerPoint-kalvot](/kalvot/map.pdf)


```quiz
### Mikä on Javan Map-tietorakenteen tarkoitus?

- [ ] Map on tietorakenne, joka säilyttää alkioita järjestettynä listana.
- [x] Map on tietorakenne, joka yhdistää avain-arvo -pareja.
- [ ] Map on tietorakenne, joka tallentaa alkioita taulukkomuodossa.
```


## Mapin tyypin määrittely

Hajautustaulua luodessa tarvitaan kaksi tyyppiparametria:

* avainmuuttujan tyyppi
* lisättävän arvon tyyppi.

Tyyppiparametrit määritellään kulmasulkeisiin, kuten teimme Ohjelmointi 1:ssä ArrayList:in kanssa. Koska tyyppiparametreja on tällä kertaa kaksi, ne kirjoitetaan pilkulla eroteltuna:

```java
Map<String, String> tietovarasto = new HashMap<>(); // tai new HashMap<String, String>();
```

Kulmasuluissa ensimmäinen tyyppi on avaimen tyyppi, toinen tallennettavien arvojen tyyppi. Tässä esimerkissä molemmat sattuvat olemaan merkkijonoja, eli `String`.

### Arvojen lisääminen ja hakeminen

Arvot lisätään map-tietorakenteeseen `put`-metodilla. Put tarvitsee kaksi parametria: **avaimen** sekä **arvon**:

```java
Map<String, String> tietovarasto = new HashMap<String, String>();
tietovarasto.put("avain", "arvo");
```

Mikäli mapissa on jo valmiiksi olemassa sille annettu arvo, vanha arvo korvataan uudella.

Arvojen hakeminen mapista puolestaan tehdään `get`-metodilla:

```java
String arvo = tietovarasto.get("avain");
System.out.println(arvo);
```

Get-metodille annetaan parametrina se avain, jonka arvoa haetaan.

<small>Tämä esimerkki on lainattu [Agile Education Research –tutkimusryhmän oppimateriaalista](https://2017-ohjelmointi.github.io/part8/), joka on lisensoitu Creative Commons BY-NC-SA-lisenssillä.</small>


```quiz
### Miten uusi avain-arvo -pari lisätään Map-tietorakenteeseen?
- [ ] Käyttämällä metodia add(key, value)
- [ ] Käyttämällä metodia insert(key, value)
- [x] Käyttämällä metodia put(key, value)

### Kuinka saadaan arvo Map-tietorakenteesta annetun avaimen perusteella?
- [x] Käyttämällä metodia get(key)
- [ ] Käyttämällä metodia retrieve(key)
- [ ] Käyttämällä metodia fetch(key)
```

### Numeroiden käsitteleminen mapissa

Kuten listoille, myös map-tietorakenteeseen voidaan tallentaa ainoastaan viittaustyyppisiä arvoja. Siksi esimerkiksi `int`-tyypin sijaan käytetään `Integer`-tyyppiä:

```java
Map<String, Integer> opintopisteet = new HashMap<>();

// Lisätään arvoja tietyille avaimille:
opintopisteet.put("swd1tn001", 5);
opintopisteet.put("swd1tn002", 5);

// Haetaan yksi arvo:
int pisteet = opintopisteet.get("swd1tn002");
System.out.println(pisteet); // 5

// Haetaan kaikki avaimet:
Set<String> avaimet = opintopisteet.keySet();
System.out.println(avaimet); // [swd1tn002, swd1tn001]
```

[PowerPoint-kalvot](/kalvot/map.pdf)



### Uuden arvon asettaminen

Mapissa on jokaista avainta kohden korkeintaan yksi arvo. Jos siihen lisätään uusi avain-arvo-pari, jossa avain on jo aiemmin liittynyt toiseen hajautustauluun tallennettuun arvoon, vanha arvo katoaa hajautustaulusta.


```java
Map<String, String> numerot = new HashMap<>();
numerot.put("Uno", "Yksi");
numerot.put("Dos", "Zwei");
numerot.put("Uno", "Ein"); // korvaa aikaisemman arvon!

String kaannos = numerot.get("Uno");
System.out.println(kaannos); // Ein
```

<small>Tämä esimerkki on lainattu [Agile Education Research –tutkimusryhmän oppimateriaalista](https://2017-ohjelmointi.github.io/part8/), joka on lisensoitu Creative Commons BY-NC-SA-lisenssillä.</small>


### Arvojen poistaminen (remove) ja tarkastaminen (containsKey)

```java
HashMap<String, String> countries = new HashMap<>();
countries.put("Suomi", "Finland");
countries.put("Ruotsi", "Sweden");
countries.put("Norja", "Norway");

countries.containsKey("Ruotsi"); // true

countries.remove("Ruotsi");

countries.containsKey("Ruotsi"); // false
```

### Null-viittaukset

Jos mapista haetaan arvoa avaimella, jota ei löydy, palautuu tuloksena `null`-arvo, eli tyhjä viittaus.

Mikäli null-arvon sijasta halutaan käyttää jotain toista arvoa oletusarvona, voidaan käyttää mapin `getOrDefault`-metodia:

```java
Map<String, Integer> pistelaskuri = new HashMap<>();
pistelaskuri.put("Matti", 10);

// Avain "Matti" löytyy, joten paluuarvoksi tulee 10:
int matti = pistelaskuri.getOrDefault("Matti", 0);

// Avainta "Teppo" ei löydy, joten paluuarvoksi tulee 0:
int teppo = pistelaskuri.getOrDefault("Teppo", 0);
```

`getOrDefault` on erityisen hyödyllinen tilanteissa, joissa `null`-arvo aiheuttaisi poikkeuksen. Esimerkiksi `int`-tyyppisten arvojen yhteydessä `null`-arvoa ei voida asettaa `int`-tyyppiseen muuttujaan, joten tämä rivi aiheuttaisi poikkeuksen:

```java
int teppo = pistelaskuri.get("Teppo"); // null-arvoa ei voida asettaa int-muuttujaan! 💥
```


### Usean arvon tallentaminen samalle avaimelle

Map:issa voidaan säilyttää vain yhtä arvoa kutakin avainta kohden. Säilytettävät arvot voivat kuitenkin olla muita kokoelmia. Map:issa voidaan siis säilyttää samalla avaimella useita arvoja, kun käsittelemmä Mapin sisällä listoja tai muita kokoelmia.

Tässä esimerkissä säilytämme map-tietorakenteessa listoja, joista kukin sisältää tiettyyn maahan kuuluvien kaupunkien nimiä:

```java
Map<String, List<String>> maat = new HashMap<>();

List<String> fi = new ArrayList<String>();
fi.add("Helsinki");
fi.add("Espoo");
fi.add("Vantaa");

List<String> sv = new ArrayList<String>();
sv.add("Tukholma");
sv.add("Visby");

maat.put("Suomi", fi);
maat.put("Ruotsi", sv);

System.out.println(maat);
```

Tämä esimerkki tulostaa maiden nimet, joihin liittyy listat kaupungeista:

```
{Suomi=[Helsinki, Espoo, Vantaa], Ruotsi=[Tukholma, Visby]}
```


[PowerPoint-kalvot](/kalvot/map.pdf)

### Map:in koko sisällön läpikäynti

Mapin sisältö voidaan käydä helposti läpi joko avainten, arvojen tai avain-arvo –parien osalta:

* **keySet()** palauttaa kaikki mapin avaimet
* **values()** palauttaa kaikki mapin arvot
* **entrySet()** palauttaa avaimet ja arvot pareina


#### Avaimet

Jos haluamme käsitellä mapin arvoja, ne voidaan pyytää mapin `keySet`-metodilla:

```java
Set<String> avaimet = data.keySet();

// Käydään läpi kaikki avaimet:
for (String avain : avaimet) {
    System.out.println(avain);
}
```

Kuten yllä olevasta koodista huomaamme, `keySet` palauttaa paluuarvona setin eli joukon. Setit eivät ole keskeinen osa tätä kurssia, mutta voit ajatella settiä listana, jonka alkioilla ei ole taattua järjestystä, ja joka ei salli arvojen duplikaatteja. Setin käyttämiseksi yllä olevaan esimerkkiin tarvitaan lisäksi seuraava import-rivi:

```java
import java.util.Set;
```


#### Arvot

Mapin kaikki arvot voidaan pyytää hieman vastaavasti `values`-metodilla:

```java
Collection<Integer> arvot = data.values();

// Käydään läpi kaikki arvot:
for (Integer arvo : arvot) {
    System.out.println(arvo);
}
```

`values`-metodin palauttama `Collection`-tyyppi on kaikkia Javan kokoelmia yhdistävä rajapintaluokka:

> *"The root interface in the collection hierarchy. A collection represents a group of objects, known as its elements. Some collections allow duplicate elements and others do not. Some are ordered and others unordered."*
>
> Oracle. Collection. [https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html](https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html)

Collection-tyyppisen kokoelman käyttämiseksi tarvitset luokkaasi seuraavan import-rivin:

```java
import java.util.Collection;
```

#### Avaimet ja arvot pareina

Toisinaan avaimia ja arvoja halutaan käsitellä pareittain. Tällöin voimme hyödyntää `entrySet`-metodia, joka palauttaa monimutkaiselta näyttävän tietorakenteen:

```java
Set<Entry<AvaimenTyyppi, ArvonTyyppi>>
```

Tämä kokoelma voidaan kuitenkin käydä läpi esimerkiksi `for`-toistorakenteella kuten aikaisemmat:

```java
Set<Entry<String, Integer>> parit = data.entrySet();

// Käydään läpi kaikki avain-arvo -parit:
for (Entry<String, Integer> pari : parit) {
    System.out.println("Avain: " + pari.getKey());
    System.out.println("Arvo: " + pari.getValue());
}
```

Jokaisella `Entry`-oliolla on siis sisässään yksi avain ja yksi arvo, jotka saadaan yllä olevan esimerkin mukaisesti pyydettyä `getKey()`- ja `ketValue()`-metodeilla.

Entry-olioiden käyttäminen muuttujissa edellyttää luokan alkuun seuraavan import-rivin:

```java
import java.util.Map.Entry;
```


{% include quiz.html %}
