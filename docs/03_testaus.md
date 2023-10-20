---
title: Yksikkötestaus
layout: default
nav_order: 3
permalink: /testaus/
---



# Yksikkötestauksen perusteet
{: .no_toc }

Tällä viikolla tutustumme yksikkötestaukseen ja testaamme valmista virheellisesti toimivaa ja tyylillisesti heikosti toteutettua metodia. Tutustumme lisäksi koodin laatuun vaikuttaviin tekijöihin ja sovellamme niitä annetun valmiin koodin parantamiseksi.
{: .fs-6 }

---

## Tällä sivulla:
{: .no_toc .text-delta }

* Sisällysluettelo
{:toc}

Tähän mennessä olemme ohjelmointikursseilla testanneet kirjoittamiamme ohjelmia suorittamalla niitä, antamalla niille syötteitä ja tarkistamalla ohjelman tulosteita manuaalisesti. Tehtävien arvioinnissa on hyödynnetty Viope-järjestelmää, jossa testausmenetelmä on hyvin samankaltainen: ohjelma suoritetaan, sille annetaan syötteitä ja lopulta ohjelman tulosteet tarkistetaan.

Vaikka käyttämämme testaustapa auttaa sinua ratkaisemaan tehtävät, vähänkään isompien ohjelmistojen testaaminen tulosteiden manuaalisen läpikäynnin avulla olisi hyvin työlästä, jopa lähes mahdotonta. Jokaisen isomman muutoksen jälkeen ohjelma täytyisi myös testata uudelleen, jotta varmistutaan siitä, että muutos ei aiheuttanut virheitä jo toimineisiin osiin. Tämän vuoksi ohjelmistoja testataan usein ohjelmallisesti kirjoitettujen testien avulla.

Ohjelmistotestauksen käsitteistöön kuuluu oleellisena osana eri testausmenetelmät, joilla erityisesti automatisoitua testausta suoritetaan. Yleisesti käytettyyn jakoon kuuluvat **järjestelmätestaus**, **integraatiotestaus** ja **yksikkötestaus**. Lisäksi testauksessa voidaan keskittyä tiettyihin tarkempiin kohteisiin, kuten käytettävyyteen, tietoturvaan tai tehokkuuteen. Voit lukea näistä lisää esimerkiksi Vertics Oy:n blogikirjoituksesta ["Ohjelmistotestauksen perusteet"](https://vertics.co/ohjelmistotestauksen-perusteet/).

Tällä viikolla perehdymme tarkemmin yksikkötestaukseen ja Javan [JUnit-kirjastoon](https://junit.org/junit5/), joka on vakiintunut ratkaisu yksikkötestien toteuttamiseksi Javalla. JUnit integroituu moniin laadunvarmistusjärjestelmiin ja sovelluskehittimiin, minkä vuoksi samat testit voidaan suorittaa automatisoidusti niin kehittäjän omalla koneella kuin erillisessä testausympäristössä. Myös VS Codessa ja Eclipsessä on erittäin hyvät työkalut JUnit-testien kirjoittamiseksi ja suorittamiseksi. Lisäksi tutustumme koodin laatuun vaikuttaviin tekijöihin ja sovellamme niitä annetun valmiin koodin parantamiseksi.

Missä tahansa Java-projektissa voi olla yksikkötestajä. On kuitenkin luontevinta käyttää jotain projektityökalua, joka jo valmiiksi tukee testaamista. Esimerkiksi Maven ja Gradle-projektit sisältävät valmiiksi JUnit-kirjaston ja testihakemiston ja -luokan. 


## Yksikkötestaus

> *"Yksikkötestauksella tarkoitetaan **pienimmän mahdollisen ohjelman osan**, esimerkiksi aliohjelman, toiminnan testaamista. Yksikkötesteillä varmistetaan, että ohjelman pienimmät osat toimivat odotetulla tavalla, ja että mahdolliset virhetilanteet on niiden osalta ennakoitu."*
>
> *"Yksikkötestauksen hyödyt näkyvät kehitysprosessin aikana erityisesti silloin, kun jo kirjoitettuun koodiin joudutaan tekemään muutoksia. Automatisoiduilla yksikkötesteillä voidaan **nopeasti** todeta, aiheuttavatko tehdyt muutokset virheitä."*
>
> Jyväskylän Yliopisto, Informaatioteknologian tiedekunta. Testauksen tasot. http://smarteducation.jyu.fi/projektit/systech/Periaatteet/suunnittelun-periaatteet/testaus/testauksen-tasot

Mikäli olisimme kehittämässä esimerkiksi verkkokauppaa ja siihen liittyvää laskujen viitenumeroiden generointia, voisi viitenumeroiden generoinnin testaaminen käyttöliittymän kautta edellyttää meiltä esimerkiksi sisäänkirjautumista, tuotteiden lisäämistä ostoskoriin, toimitustavan valintaa ja lukuisia muita erillisiä työvaiheita ennen pääsyä varsinaiseen testattavaan osaan. Testaus käyttöliittymän kautta onkin monessa tapauksessa erittäin aikaavievää. Yksikkötestauksen avulla voimme testata viitenumeroiden generoinnin erillään kaikesta muusta koodista, omana yksikkönään.

## Testit
Testi on jossain luokassa oleva metodi, joka määritellään testiksi @Test annotaatiolla. Yleensä kuitenkin on käytössä Maven- tai Gradle-projekti, joissa testit ovat omassa hakemistorakenteessaan, näin saadaan helpommin ylläpidettävä projekti. 
Testit voidaan ajaa VS Codessa ja Eclipsessä yksi kerrallaan vain vaikka kaikki yhdellä komennolla. Jos testi menee läpi, näkyy se testityökalussa vihreänä, muutoin punaisena. Lisäksi testit voidaan ajaa ilman IDE:ä komentoriviltä käsin jolloin saadaan enemmän automaatiota.
Testeillä testataan koodin toimintaa ja yksi testimetodi testaa yhtä asiaa pelkästään. Siksi testimetodeja tulee yleensä useita per luokka/metodi.

## Nimeämiskäytännöt
Testimetodeja tulee yleensä paljon, siksi on erittäin tärkeään käyttää yhtenäistä ja kuvaavaa nimeämiskäytäntöä. Testin nimestä pitäisi pystyä päättelemään mitä toimintoa testataan, mitä tilannetta ja mikä on oletettu lopputulos. Esimerkkejä nimeämiskäytännöstä löytyy paljon, tiivis kuvaus löytyy esimerkiksi osoitteesta https://www.baeldung.com/java-unit-testing-best-practices



```quiz
### Miksi yksikkötestaus on tärkeä osa ohjelmistokehitystä?

- [ ] Yksikkötestit varmistavat, että koko järjestelmä toimii oikein.
- [x] Yksikkötestit helpottavat koodin ylläpitoa ja mahdollistavat muutosten tekemisen ilman hajoamisia.
- [ ] Yksikkötestit optimoivat ohjelmiston suorituskyvyn.
```

## Oppimateriaalit

Yksikkötestausta käsitellään tämän kurssin näkökulmasta oheisissa [PowerPoint-kalvoissa (PDF)](/kalvot/yksikkotestaus.pdf).

Lisäksi suosittelen perehtymään [JUnit-testaustyökalun omiin käyttöohjeisiin](https://junit.org/junit5/docs/current/user-guide/).


## Lyhyt oppimäärä JUnit-testin tekemiseen

Testiluokan luominen ja suorittaminen sekä käsitteet **testiluokka**, **annotaatio**, **testimetodi** ja **assertio**.

Luokan metodien testaaminen erillisen testiluokan ja JUnit-kirjaston avulla.

Seuraava esimerkki esittelee lyhyesti yksikkötestaamista ja lisäksi TDD-menetelmää (Test- Driven Development),  jossa tehdään ensi testit ja sitten vasta toteutetaan luokat ja metodit.

1. tee uusi Gradle-projekti
2. tee build
3. tee testiluokka ja siihen yksi testimetodi 
4. tee testattava luokka ja toteuta niin, että ensimmäinen testi menee läpi
5. tee seuraava testi ja koodaa niin että testi menee läpi
6. palaa takaisin kohtaa 5 ja toista kunnes kaikki mahdolliset testitapaukset on katettu



&nbsp;

[seille testimetodeille yhteisten alustustoimenpiteiden tekeminen erillisessä alustusmetodissa.

&nbsp;






## Testaaminen käytännössä:

"Oikean ohjelman" testaamisessa haastetta tuo usein ohjelman rakenne, joka voi tehdä siitä vaikeasti testattavan. Seuraavilla videoesimerkeillä esitellään Map-aiheen yhteydessä luodun EtunimiTilasto-sovelluksen testausta yksikkötestien avulla ja muodostetaan ohjelman rakenne siten, että sen osat ovat testattavissa, laajennettavissa ja uudelleenkäytettävissä.

Videoilla käsitellyt lähdekoodit löytyvät [täältä](/03_yksikkotestaus/yksikkotestaus_lahdekoodit):

* [📝 `Sanakirja.java`](/03_yksikkotestaus/yksikkotestaus_lahdekoodit)
* [📝 `SanakirjaTest.java`](/03_yksikkotestaus/yksikkotestaus_lahdekoodit)
* [📝 `EtunimiTilastoTest.java`](/03_yksikkotestaus/yksikkotestaus_lahdekoodit)
* [📝 `EtunimiTilasto.java`](/03_yksikkotestaus/yksikkotestaus_lahdekoodit)
* [📝 `Tekstikayttoliittyma.java`](/03_yksikkotestaus/yksikkotestaus_lahdekoodit)

&nbsp;


```quiz
### Mikä on JUnitin rooli ohjelmistokehityksessä?

- [ ] JUnit on työkalu ohjelmistotuotannon automatisoimiseen.
- [x] JUnit on työkalu yksikkötestien kirjoittamiseen ja suorittamiseen.
- [ ] JUnit on työkalu tietokantojen hallintaan.
```




### Lisämateriaali



```quiz
### Miten JUnit-testit yleensä kirjoitetaan?

- [ ] JUnit-testit kirjoitetaan erillisiin tiedostoihin .junit-päätteellä.
- [x] JUnit-testit kirjoitetaan Java-luokkiin, jotka sisältävät testimetodeja, jotka on merkattu @Test-annotaatiolla.
- [ ] JUnit-testit kirjoitetaan komentoriviltä suoritettaviin tiedostoihin.
```


## Tehtävä

Tämän viikon tehtävänäsi on toteuttaa JUnit-yksikkötestit valmiiksi annetulle esimerkkiluokalle ja korjata sieltä löytämäsi virheet. Testattavana luokkana käytämme seuraavaa `DayOfYear`-luokkaa:

```java
/**
 * Smelly Example #1
 *
 * https://web.mit.edu/6.005/www/fa16/classes/04-code-review/
 *
 * Collaboratively authored with contributions from: Saman Amarasinghe, Adam
 * Chlipala, Srini Devadas, Michael Ernst, Max Goldman, John Guttag, Daniel
 * Jackson, Rob Miller, Martin Rinard, and Armando Solar-Lezama.
 *
 * This work is licensed under CC BY-SA 4.0.
 */
public class DayOfYear {

    public static int dayOfYear(int month, int dayOfMonth, int year) {
        if (month == 2) {
            dayOfMonth += 31;
        } else if (month == 3) {
            dayOfMonth += 59;
        } else if (month == 4) {
            dayOfMonth += 90;
        } else if (month == 5) {
            dayOfMonth += 31 + 28 + 31 + 30;
        } else if (month == 6) {
            dayOfMonth += 31 + 28 + 31 + 30 + 31;
        } else if (month == 7) {
            dayOfMonth += 31 + 28 + 31 + 30 + 31 + 30;
        } else if (month == 8) {
            dayOfMonth += 31 + 28 + 31 + 30 + 31 + 30 + 31;
        } else if (month == 9) {
            dayOfMonth += 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31;
        } else if (month == 10) {
            dayOfMonth += 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
        } else if (month == 11) {
            dayOfMonth += 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
        } else if (month == 12) {
            dayOfMonth += 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 31;
        }

        return dayOfMonth;
    }
}
```

Voit ladata luokan lähdekoodin itsellesi [tästä](https://gist.githubusercontent.com/swd1tn002/06bf2e70f2fd683bffba946bb5307eb6/raw/97af3932d59a6e4206dea63bdc4c799c018d2288/DayOfYear.java). Lisää tarpeen mukaan luokkaan `package`-rivi vastaamaan oman Java-projektisi hakemistorakennetta.

Yksinkertaisuudessaan yllä `dayOfYear`-metodi saa parametreinaan päivämäärän kolmena kokonaislukuna, ja palauttaa annetun päivämäärän järjestysnumeron kyseisenä vuonna (1-366). Voit tutkia eri päivämääriä vastaavia "day of year"-lukuja esimerkiksi [Day of the Year (DOY) calendar -kalenterista](https://nsidc.org/data/user-resources/help-center/day-year-doy-calendar) (National Snow and Ice Data Center). Huomaa, että maaliskuusta alkaen eri päivien numerot vaihtelevat tavallisina- ja karkausvuosina.

> *"Some data sets specify dates using the year and day of year rather than the year, month, and day of month. The day of year (DOY) is the sequential day number starting with day 1 on January 1st."*
>
> [Day of the Year (DOY) calendar. National Snow and Ice Data Center](https://nsidc.org/data/user-resources/help-center/day-year-doy-calendar)

Annetussa metodissa on bugeja, jotka tässä tehtävässä tulee löytää omilla JUnit-testeillä. Saatat lisäksi huomata luokan koodaustyylissä merkittäviä heikkouksia, joihin paneudutaan tehtävän 3. osassa.

### Staattisen metodin kutsumisesta

Kuten toivottavasti muistat edeltävältä ohjelmointikurssilta, `dayOfYear`-metodin otsikossa esiintyvä avainsana `static` tarkoittaa, että se on **staattinen eli luokkametodi**:

> *"Koska luokkametodi ei liity mihinkään olioon, ei sitä kutsuta oliometodien tapaan olionNimi.metodinNimi(), vaan sen kutsumisessa (saman luokan sisällä) käytetään pelkkää metodin nimeä. Mikäli luokkametodin koodi on eri luokan sisällä kuin sitä kutsuva metodi, voi luokkametodia kutsua muodossa LuokanNimi.staattisenMetodinNimi().*"
>
> Agile Education Research -tutkimusryhmä. [Luokka- ja oliometodit: määre static](https://ohjelmointi-19.mooc.fi/osa-6/1-luokka-ja-oliometodit). [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fi)

`dayOfYear`-metodin kutsu omasta luokastasi käsin tehdään siis luokan nimen avulla, esimerkiksi `int tulos = DayOfYear.dayOfYear(12, 31, 2022)`.

### Tehtävän vaiheet

Tämä tehtävä on jaettu kolmeen eri vaiheeseen, jotka voit halutessasi tehdä yksi kerrallaan tai haluamassasi järjestyksessä. Vain lopputulos palautetaan, joten ei ole käytännön merkitystä, kirjoitatko ensin kaikki testitapaukset ja sen jälkeen korjaat bugit, vai testaatko ohjelmaa ja korjaat bugeja yksi kerrallaan. Jako vaiheisiin toivottavasti auttaa kuitenkin tehtävänannon seuraamisessa.


## Vaihe 1: kirjoita dayOfYear-metodille JUnit-yksikkötestit

Tallenna itsellesi kopio testattavasta *DayOfYear*-luokasta [tästä](https://gist.githubusercontent.com/swd1tn002/06bf2e70f2fd683bffba946bb5307eb6/raw/97af3932d59a6e4206dea63bdc4c799c018d2288/DayOfYear.java). Kirjoita lisäksi uusi testiluokka `DayOfYearTest`, jossa hyödynnät  JUnit-testikirjastoa testataksesi dayOfYear-metodin toimivuutta erilaisilla testitapauksilla.

DayOfYear-luokan `dayOfYear`-metodissa on virheitä, joten testiluokkasi tavoitteena on löytää nämä virheet erilaisten testitapausten avulla.

Kukin testitapaus, eli testimetodi, voi käytännössä koostua vain kahdesta rivistä. Ensimmäisellä rivillä kutsut testattavaa dayOfYear-metodia, ja toisella rivillä tarkistat, onko metodista saatu tulos on oikea.

Jos haluat esimerkiksi varmistaa, että metodi antaa tammikuun 1. päivälle tuloksen 1, kutsu testin sisällä testattavaa metodia seuraavasti:

```java
int tulos = DayOfYear.dayOfYear(1, 1, 2023); // tammikuun 1. päivä on vuoden 1. päivä
```

Jotta testi oikeasti huomaa virheet, sinun pitää vielä varmistaa, että saatu tulos on 1. Tätä varten käytämme `assertEquals`-metodia, jolle annetaan sekä tunnettu oikea arvo (eli 1), että metodista saamamme tulos:

```java
assertEquals(1, tulos); // varmistaa että saatu `tulos` on 1
```

`dayOfYear`-metodissa on ainakin kaksi virhettä. Virheiden etsimiseksi sinun kannattaa testata erilaisia päivämääriä vuoden alussa, keskellä ja lopussa niin tavallisina- kuin karkausvuosina. Kirjoita eri testitapaukset kukin omaan `@Test`-metodiin.

Testiluokkasi saa sijaita projektissasi vapaasti valitsemassasi paketissa.


## Vaihe 2: korjaa dayOfYear-luokan bugi(t)

Mikäli löysit testiesi avulla bugeja edellisessä osassa, kaikki testitapauksesi eivät mene korjausten jälkeen läpi. Korjaa seuraavaksi `dayOfYear`-metodista löytämäsi bugit. Bugien korjaamisen jälkeen edellisessä vaiheessa kirjoittamasi testiluokan kaikkien testien tulisi mennä hyväksytysti läpi.

Bugien korjauksessa sinulle voi olla hyötyä Javan valmiista `Year`-luokasta ja sen `isLeap`-metodista. Katso ohje sen käyttämiseksi esimerkiksi sivulta [tutorialspoint.com](https://www.tutorialspoint.com/javatime/javatime_year_isleap.htm). Tarkista myös eri kuukausien todelliset pituudet esimerkiksi [Wikipediasta](https://fi.wikipedia.org/wiki/Kuukausi).

**Virheelliset parametrit &mdash; bugi vai ominaisuus?**

Esimerkkikoodin [lähteessä](https://web.mit.edu/6.005/www/fa16/classes/04-code-review/#fail_fast) tuodaan esiin fail fast -ajattelutapa, jonka mukaisesti ongelmat on sitä helpompi korjata mitä aikaisemmin ne havaitaan. Tämän metodin tapauksessa metodi palauttaa arvoja riippumatta siitä, ovatko kuukausien ja päivien numerot annettu oikeassa järjestyksessä tai ovatko ne sallituilta väleiltä. Voit halutessasi lisätä metodiin tarkastuksia, ja heittää esimerkiksi `IllegalArgumentException`-poikkeuksen virheellisen päivämäärän saatuasi. Tämä ei kuitenkaan ole tehtävän kannalta välttämätöntä, emmekä laske virheellisiä syötteitä tämän metodin bugeiksi.


## Vaihe 3: koodin refaktorointi hyvien käytäntöjen mukaiseksi

Tähän asti olet ohjelmointiopinnoissasi kenties keskittynyt lähinnä saamaan ohjelmasi toimimaan tehtävänannon mukaisesti kiinnittämättä suurempaa huomiota sen ymmärrettävyyteen tai jatkokehitettävyyteen. Voimme olettaa myös annetun `dayOfYear`-metodin syntyneen näin. Ammatillisessa ohjelmistokehityksessä on harvinaista, että samaa koodia työstettäisiin vain kerran tai vain yhden kehittäjän toimesta. Päinvastoin, koodia kirjoitetaan tiimeissä, joissa kehittäjät vaihtuvat ja olemassa oleviin ominaisuuksiin tehdään jatkuvasti muutoksia.

Tulet siis itse jatkokehittämään jonkun toisen vuosia sitten kirjoittamaa koodia, aivan kuten joku muu tulee jatkokehittämään sinun koodiasi. Tällöin on erittäin tärkeää, että koodi on muokattavissa ilman odottamattomia rikkoutumisia ja että muut kehittäjät ymmärtävät toistensa koodia ja pystyvät hyödyntämään ja muokkaamaan sitä.

Kun luet `dayOfYear`-metodin sisältämää koodia tarkemmin, huomaat, että siinä on käytetty ohjelmoinnin perusrakenteita melko suppeasti. Koodi koostuukin erittäin pitkästä `if-else`-rakenteesta sekä samanlaisista kokonaislukujen yhteenlaskuista. Samat numerot myös esiintyvät koodissa toistuvasti ja saattavat olla virheellisiä.

Tämän viikon tehtävien viimeinen osa on refaktoroida koodi hyvien ohjelmointitapojen mukaiseksi. Refaktoroidun koodin tulee siis olla ymmärrettävämpää ja ylläpidettävämpää kuin alkuperäinen koodi, mutta toimia ulkoisesti samalla tavalla.


> *"Refaktorointi tarkoittaa prosessia, jossa tietokoneohjelman lähdekoodia muutetaan siten, että sen toiminnallisuus säilyy, mutta sen sisäinen rakenne muuttuu. Muutokset voivat koskea esimerkiksi luettavuutta tai ohjelmakomponenttien työnjaon selkeyttämistä."*
>
> Wikipedia. [Refaktorointi](https://fi.wikipedia.org/wiki/Refaktorointi). Viitattu 5.11.2020. [CC BY–SA 3.0](https://fi.wikipedia.org/wiki/Wikipedia:Creative_Commons_Attribution-Share_Alike_3.0_Unported_-lisenssiehdot)

Tutustu seuraaviin "koodin hajuihin" esimerkkikoodissa ja parantele koodia parhaasi mukaan:

- Don't Repeat Yourself
- Comments Where Needed
- Fail Fast
- Avoid Magic Numbers
- One Purpose For Each Variable

Edellä mainittu lista on käyty läpi tämän saman esimerkkikoodin avulla osoitteessa [https://web.mit.edu/6.005/www/fa16/classes/04-code-review/](https://web.mit.edu/6.005/www/fa16/classes/04-code-review/). Voit käyttää myös muita lähteitä. Tehtävässä on suositeltavaa lisätä koodiin tarpeen mukaan uusia tietorakenteita ja metodeja.

&nbsp;

**Huom!** Javan standardikirjastossa on olemassa useita valmiita toimivia toteutuksia päivän järjestysnumeron laskemiselle. Oikeassa ohjelmistoprojektissa sinun tulisi luonnollisesti käyttää valmista ratkaisua, eikä yrittää keksiä pyörää uudestaan. Tämän harjoituksen tavoitteena on kuitenkin opetella testaamaan ja refaktoroimaan koodia, joten suosittelen muodostamaan oman ratkaisun annettua koodia muokkaamalla.

**Huom!** Mikäli päädyt poistamaan annetun koodin kokonaisuudessaan ja korvaamaan sen Javan valmiita luokkia hyödyntävällä logiikalla, on arvioinnin kannalta erityisen tärkeää, että testisi osoittavat sinun löytäneen alkuperäisessä koodissa olleet bugit!

**Huom!** Javan `java.time`-paketista löytyvät `Month`-, `YearMonth` ja `Year`-luokat voivat olla refaktoroinnissa hyödyllisiä. `Year`-luokan `isLeap`-metodin avulla voit selvittää onko tietty vuosi karkausvuosi. `length()` ja `lengthOfMonth()`-metodit puolestaan auttavat kuukauden pituuden selvittämisessä ilman kovakoodattuja numeroita.

Linkit:

* [Year-luokka](https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/time/Year.html)
* [Month-luokka](https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/time/Month.html)
* [YearMonth-luokka](https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/time/YearMonth.html)


## Tehtävän palauttaminen

Palauta luokat `DayOfYear` ja `DayOfYearTest` Teamsissa olevaan palautuslaatikkoon erillisinä tiedostoina (ei pakattuna). Riittää että palautat tehtävien lopputuloksen. Eri vaiheiden tuloksia ei tarvitse palauttaa erikseen.

Mikäli tarvitset apua tehtävän palauttamisessa Teamsiin, tutustu Microsoftin artikkeliin ["Turn in an assignment in Microsoft Teams"](https://support.microsoft.com/en-us/topic/turn-in-an-assignment-in-microsoft-teams-e25f383a-b747-4a0b-b6d5-a2845a52092b). Apua ja vinkkejä on saatavilla myös Teams-keskustelualueellamme!

## Arviointi

Tehtävä arvioidaan asteikolla 0-5. Arvioinnissa suurin painoarvo on testien kirjoittamisella sekä bugien korjauksella (60 %). Koodin laadun parantamisella on pienempi painoarvo (40 %).

Täysiin pisteisiin tehtävässä riittää, että kirjoitat muutaman toimivan testimetodin, korjaat löytämäsi bugit ja parannat annettua koodia ainakin yhden laatuongelman osalta. Osittain valmiit ratkaisut pisteytetään suhteessa niiden valmiusasteeseen.

{% include quiz.html %}