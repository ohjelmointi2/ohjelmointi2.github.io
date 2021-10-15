<link href="/styles.css" rel="stylesheet">

[⇦ takaisin kurssin etusivulle](../)

# Javan kokoelmat ja Map

Olemme ohjelmointi 1:ssä käyttäneet listoja (`ArrayList<String>`) tai taulukoita (`String[]`), kun olemme halunneet käsitellä useita saman typpisiä asioita. Javassa on myös lukuisia muita **kokoelmia**, joihin voimme koota dataa. Kokoelma tarkoittaa yksinkertaisesti oliota, joka kokoaa alkioita yhteen ([Oracle.com](https://docs.oracle.com/javase/tutorial/collections/intro/index.html)).

Java Collections Framework sisältää mm. seuraavat rajapinnat ja luokat:

* List (ArrayList ja LinkedList)
* Map (HashMap ja TreeMap)
* Set (HashSet ja TreeSet)
* Queue, Stack, jne (ei käsitellä tällä kurssilla)

Tällä kurssilla keskitymme Javan Map-tietorakenteeseen ja erityisesti sen HashMap-toteutukseen, eli ns. hajautustauluun.

Opiskelun tueksi erinomainen lisämateriaali hajautustauluista on Helsingin yliopiston MOOC-oppimateriaali [https://ohjelmointi-20.mooc.fi/osa-8/2-hajautustaulu](https://ohjelmointi-20.mooc.fi/osa-8/2-hajautustaulu), jonka sisältöä on lainattu myös tässä materiaalissa ja materiaaliin liittyvissä videoissa ja tehtävissä.


## Map-tietorakenne

> *Hajautustaulu eli HashMap on ArrayListin lisäksi eniten käytettyjä Javan valmiiksi tarjoamia tietorakenteita. Hajautustaulua käytetään kun tietoa käsitellään avain-arvo -pareina, missä avaimen perusteella voidaan lisätä, hakea ja poistaa arvo.*
>
> [Agile Education Research –tutkimusryhmä, mooc.fi](https://ohjelmointi-20.mooc.fi/osa-8/2-hajautustaulu)

`HashMap` ja `Map` voidaan ottaa käyttöön `import`-komennolla seuraavasti:

```java
import java.util.HashMap;
import java.util.Map;
```

Toisin kuin listoissa, arvoja ei käsitellä pelkästään numeeristen indeksien avulla, vaan voimme määritellä avaimiksi halutessamme vaikka merkkijonoja:

```java
HashMap<String, String> postinumerot = new HashMap<String, String>();

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

## Video: [Map, osa 1](https://video.haaga-helia.fi/media/Map%2C+osa+1/0_airjor6f) <small>9:01</small>

<iframe src="https://d38ynedpfya4s8.cloudfront.net/p/288/sp/28800/embedIframeJs/uiconf_id/23448708/partner_id/288?iframeembed=true&playerId=kaltura_player&entry_id=0_airjor6f&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=0_ayumj3u9" width="608" height="402" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>

[PowerPoint-kalvot](./map.pdf)

## Mapin tyypin määrittely

Hajautustaulua luodessa tarvitaan kaksi tyyppiparametria:

* avainmuuttujan tyyppi
* lisättävän arvon tyyppi.

Tyyppiparametrit määritellään kulmasulkeisiin, kuten teimme Ohjelmointi 1:ssä ArrayList:in kanssa. Koska tyyppiparametreja on tällä kertaa kaksi, ne kirjoitetaan pilkulla eroteltuna:

```java
Map<String, String> tietovarasto = new HashMap<String, String>();
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


### Numeroiden käsitteleminen mapissa

Kuten listoille, myös map-tietorakenteeseen voidaan tallentaa ainoastaan viittaustyyppisiä arvoja. Siksi esimerkiksi `int`-tyypin sijaan käytetään `Integer`-tyyppiä:

```java
Map<String, Integer> opintopisteet = new HashMap<String, Integer>();

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

&nbsp;

## Video: [Map, osa 2](https://video.haaga-helia.fi/media/Map%2C+osa+2A+useita+arvoja+samalla+avaimella/0_diu5meln) <small>16:11</small>

<iframe src="https://d38ynedpfya4s8.cloudfront.net/p/288/sp/28800/embedIframeJs/uiconf_id/23448708/partner_id/288?iframeembed=true&playerId=kaltura_player&entry_id=0_diu5meln&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=0_4a1w3y5k" width="608" height="402" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>

[PowerPoint-kalvot](./map.pdf)



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

## Video: [Useiden arvojen tallentaminen samalle avaimelle](https://video.haaga-helia.fi/media/HashMap%2C+useiden+arvojen+tallentaminen+samalle+avaimelle/0_1xnwercr) <small>7:53</small>

<iframe src="https://d38ynedpfya4s8.cloudfront.net/p/288/sp/28800/embedIframeJs/uiconf_id/23448708/partner_id/288?iframeembed=true&playerId=kaltura_player&entry_id=0_1xnwercr&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=0_odvofpd2" width="608" height="402" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>


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

&nbsp;


## Video: [Mapin sisällön läpikäynti](https://video.haaga-helia.fi/media/Map%2C+osa+3A+mapin+sis%C3%A4ll%C3%B6n+l%C3%A4pik%C3%A4ynti/0_7p4i6rfv) <small>4:02</small>

<iframe src="https://d38ynedpfya4s8.cloudfront.net/p/288/sp/28800/embedIframeJs/uiconf_id/23448708/partner_id/288?iframeembed=true&playerId=kaltura_player&entry_id=0_7p4i6rfv&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=0_um1myohm" width="608" height="402" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>

[PowerPoint-kalvot](./map.pdf)

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

&nbsp;


## Harjoitustehtävät

Tällä tehtäväkierroksella Viopessa on useita ladattavia tiedostoja, joita tarvitsette tehtävien ratkaisemiseksi. Teksti- ja lähdekooditiedostoihin liittyy ajoittain ongelmia merkistöjen suhteen, kun tiedosto on tallennettu eri merkistöllä kuin sen avaava ohjelma olettaa. Hyvä kirjoitus eri merkistöjen ymmärtämiseksi on ["The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)"](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/).

Tehtäväkierroksen liitetiedostot on tallennettu **UTF-8** -merkistössä, jota suositellaan yleisesti mm. verkkosivujen merkistöksi sen laajan yhteensopivuuden vuoksi. Valitettavasti kuitenkin erityisesti Windows-sovellukset käyttävät usein heikommin yhteensopivia merkistöä. Jos kirjaimet näkyvät tiedostoissa väärin, voit joutua vaihtamaan Eclipsen projektin asetuksista merkistöksi UTF-8:n.

Eclipsessä projektin merkistö vaihdetaan klikkaamalla projektia hiiren kakkospainikkeella ja valitsemalla "properties" → "resource" → "text file encoding" → "other" → "UTF-8" ([Google-haku](https://www.google.com/search?q=eclipse+change+file+encoding+to+utf-8)).


### Viope

Tarkat tehtävänannot ja tehtävissä tarvittavat tiedostot löytyvät [Viopesta](https://vw4.viope.com/).

1. **Lempinimet**

    Tässä tehtävässä harjoittelemme Map-tietorakenteen luomista ja arvojen lisäämistä. Opit myös yhden konkreettisen eron `HashMap`-luokan ja `TreeMap`-luokan välillä.

    Tehtävästä on saatavilla [videotallenne](https://video.haaga-helia.fi/media/MapA+Lempinimet-teht%C3%A4v%C3%A4/0_1b186p5w), jota suositellaan katsottavaksi, mikäli et pääse tehtävässä eteenpäin.

1. **Etunimitilasto**

    Tässä tehtävässä harjoittelemme aineiston lukemista CSV-tiedostosta ja Map-tietorakenteeseen. Opit myös päivittämään Map:issa olevaa valmista arvoa arvon korvaamisen sijaan.

    Mikäli törmäät tehtävässä `java.nio.charset.MalformedInputException`-tyyppiseen virheeseen, varmista, että olet tallentanut etunimet.csv-tiedoston sellaisenaan ja oikeassa merkistössä (UTF-8). Jos tiedoston sisällön kopioi selaimessa ja liittää leikepöydän kautta tekstieditoriin, on monta mahdollisuutta sille, että joko selain, leikepöytä tai editori muokkaa merkit omaan merkistöönsä. Varminta on siis avata csv-tiedosto selaimessa ja käyttää selaimen "save as"-toimintoa, joka tallentaa tiedoston muuttamattomana.

    Tehtävästä on saatavilla [videotallenne](https://video.haaga-helia.fi/media/Map+ja+taulukotA+EtunimiTilasto/0_zkjqwbha), jota suositellaan katsottavaksi, mikäli et pääse tehtävässä eteenpäin.

1. **Sanakirja**

    Tässä tehtävässä harjoittelemme Map:in käyttämistä Sanakirja-olioiden sisäisenä tietovarastona. Tämä tehtävä on lainattu [Helsingin yliopiston Agile Education Research –tutkimusryhmän oppimateriaalista](https://2017-ohjelmointi.github.io/part8/#exercise-3-sanakirja) ja se on lisensoitu Creative Commons BY-NC-SA-lisenssillä.

1. **Postitoimipaikka**

    Tässä tehtävässä harjoittelemme projektin kloonaamista GitHubista. Toteutamme logiikan, joka selvittää Postin postinumeroaineistosta tiettyyn postinumeroon liittyvän postitoimipaikan nimen.

    Aineisto ja valmis tehtäväpohja löytyvät GitHubista osoitteesta [https://github.com/ohjelmointi2/postinumerot](https://github.com/ohjelmointi2/postinumerot).

1. **Postinumerot**

    Tässä tehtävässä harjoittelemme Map:in sisällön läpikäyntiä avain-arvo-pareina, ja etsimme kaikki tiettyyn postitoimipaikkaan liittyvät postinumerot Postin postinumeroaineistosta.

    Aineisto ja valmis tehtäväpohja löytyvät GitHubista osoitteesta [https://github.com/ohjelmointi2/postinumerot](https://github.com/ohjelmointi2/postinumerot).


1. **⭐ Bonus ⭐ Usean käännöksen sanakirja**

    Tämä on edistynyt bonustehtävä, jonka pisteet lasketaan mukaan tehtävien yhteispisteisiin, mutta jonka tekemättä jättäminen ei vaikuta arvosanaasi. Tehtävässä samalle avaimelle tallennetaan useita arvoja hyödyntämällä samalla sekä Map-tietorakennetta että listoja.
    
    Tämä tehtävä on lainattu [Helsingin yliopiston Agile Education Research –tutkimusryhmän oppimateriaalista](https://2017-ohjelmointi.github.io/part8/#exercise-3-sanakirja) ja se on lisensoitu Creative Commons BY-NC-SA-lisenssillä.

Tarkemmat tehtävänannot ja tehtäviä koskevat videotallenteet löydät [Viopesta](https://vw4.viope.com/).

<script src="/scripts.js"></script>