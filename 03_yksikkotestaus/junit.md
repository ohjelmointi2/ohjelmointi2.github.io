---
title: Yksikkötestauksen perusteet
layout: default
nav_order: 3
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

Tällä viikolla perehdymme tarkemmin yksikkötestaukseen ja Javan [JUnit-kirjastoon](https://junit.org/junit5/), joka on vakiintunut ratkaisu yksikkötestien toteuttamiseksi Javalla. JUnit integroituu moniin laadunvarmistusjärjestelmiin ja sovelluskehittimiin, minkä vuoksi samat testit voidaan suorittaa automatisoidusti niin kehittäjän omalla koneella kuin erillisessä testausympäristössä. Myös Eclipsessä on erittäin hyvät työkalut JUnit-testien kirjoittamiseksi ja suorittamiseksi. Lisäksi tutustumme koodin laatuun vaikuttaviin tekijöihin ja sovellamme niitä annetun valmiin koodin parantamiseksi.


## Yksikkötestaus

> *"Yksikkötestauksella tarkoitetaan **pienimmän mahdollisen ohjelman osan**, esimerkiksi aliohjelman, toiminnan testaamista. Yksikkötesteillä varmistetaan, että ohjelman pienimmät osat toimivat odotetulla tavalla, ja että mahdolliset virhetilanteet on niiden osalta ennakoitu."*
>
> *"Yksikkötestauksen hyödyt näkyvät kehitysprosessin aikana erityisesti silloin, kun jo kirjoitettuun koodiin joudutaan tekemään muutoksia. Automatisoiduilla yksikkötesteillä voidaan **nopeasti** todeta, aiheuttavatko tehdyt muutokset virheitä."*
>
> Jyväskylän Yliopisto, Informaatioteknologian tiedekunta. Testauksen tasot. http://smarteducation.jyu.fi/projektit/systech/Periaatteet/suunnittelun-periaatteet/testaus/testauksen-tasot

Mikäli olisimme kehittämässä esimerkiksi verkkokauppaa ja siihen liittyvää laskujen viitenumeroiden generointia, voisi viitenumeroiden generoinnin testaaminen käyttöliittymän kautta edellyttää meiltä esimerkiksi sisäänkirjautumista, tuotteiden lisäämistä ostoskoriin, toimitustavan valintaa ja lukuisia muita erillisiä työvaiheita ennen pääsyä varsinaiseen testattavaan osaan. Testaus käyttöliittymän kautta onkin monessa tapauksessa erittäin aikaavievää. Yksikkötestauksen avulla voimme testata viitenumeroiden generoinnin erillään kaikesta muusta koodista, omana yksikkönään.


## Oppimateriaalit

Yksikkötestausta käsitellään tämän kurssin näkökulmasta oheisissa [PowerPoint-kalvoissa (PDF)](/kalvot/yksikkotestaus.pdf).

Lisäksi suosittelen perehtymään [JUnit-testaustyökalun omiin käyttöohjeisiin](https://junit.org/junit5/docs/current/user-guide/).


### JUnit-teoriavideot

[**JUnit-testin luonti ja assertiot**](https://video.haaga-helia.fi/media/JUnit-testin+luonti+ja+assertiot/0_pl76xbuy) <small>9:21</small>

<iframe src="https://d38ynedpfya4s8.cloudfront.net/p/288/sp/28800/embedIframeJs/uiconf_id/23448708/partner_id/288?iframeembed=true&playerId=kaltura_player&entry_id=0_pl76xbuy&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=0_bvt6dx1t" width="608" height="402" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>

Testiluokan luominen ja suorittaminen sekä käsitteet **testiluokka**, **annotaatio**, **testimetodi** ja **assertio**.

&nbsp;

[**Luokan testaaminen JUnit-työkalulla**](https://video.haaga-helia.fi/media/Luokan+testaaminen+JUnit-ty%C3%B6kalulla/0_1gkcscbe) <small>7:10</small>

<iframe src="https://d38ynedpfya4s8.cloudfront.net/p/288/sp/28800/embedIframeJs/uiconf_id/23448708/partner_id/288?iframeembed=true&playerId=kaltura_player&entry_id=0_1gkcscbe&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=0_6si1l0my" width="608" height="402" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>

Luokan metodien testaaminen erillisen testiluokan ja JUnit-kirjaston avulla.

&nbsp;

[**Testin alustaminen ja @BeforeEach**](https://video.haaga-helia.fi/media/Testin+alustaminen+ja+%40BeforeEach/0_poklvdms) <small>3:54</small>

<iframe id="kaltura_player" src="https://d38ynedpfya4s8.cloudfront.net/p/288/sp/28800/embedIframeJs/uiconf_id/23448708/partner_id/288?iframeembed=true&playerId=kaltura_player&entry_id=0_poklvdms&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=0_reca7zwj" width="608" height="402" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>

Useille testimetodeille yhteisten alustustoimenpiteiden tekeminen erillisessä alustusmetodissa.

&nbsp;

<!-- palindromi-video: https://video.haaga-helia.fi/media/t/0_m8y5zv8k -->


**module-info.java ja "The import cannot be resolved"-virhe**

Mikäli hyödynnät Java-projektissasi [Javan moduulijärjestelmää](https://www.oracle.com/corporate/features/understanding-java-9-modules.html), eli valitsit projektia luodessasi vaihtoehdon *"Create a new module-info.java file"*, saatat joutua tekemään muutoksia `module-info.java`-tiedostoon jotta Java löytää JUnit-kirjaston. Kurssin esimerkeissä moduulijärjestelmää ei hyödynnetä, joten niissä `module-info.java`-tiedostoa ei ole. Voit korjata ongelman poistamalla kyseisen tiedoston, tai tutustua muihin vaihtoehtoihin mm. [tässä keskustelussa](https://stackoverflow.com/a/52581442).


&nbsp;


## Testaaminen käytännössä:

"Oikean ohjelman" testaamisessa haastetta tuo usein ohjelman rakenne, joka voi tehdä siitä vaikeasti testattavan. Seuraavilla videoesimerkeillä esitellään Map-aiheen yhteydessä luodun EtunimiTilasto-sovelluksen testausta yksikkötestien avulla ja muodostetaan ohjelman rakenne siten, että sen osat ovat testattavissa, laajennettavissa ja uudelleenkäytettävissä.

Videoilla käsitellyt lähdekoodit löytyvät [täältä](./yksikkotestaus_lahdekoodit):

* [📝 `Sanakirja.java`](./yksikkotestaus_lahdekoodit)
* [📝 `SanakirjaTest.java`](./yksikkotestaus_lahdekoodit)
* [📝 `EtunimiTilastoTest.java`](./yksikkotestaus_lahdekoodit)
* [📝 `EtunimiTilasto.java`](./yksikkotestaus_lahdekoodit)
* [📝 `Tekstikayttoliittyma.java`](./yksikkotestaus_lahdekoodit)

&nbsp;

> 🔐 **Huom!** Seuraavien videoiden katsomiseksi sinun täytyy kirjautua sisään Microsoft Stream -palveluun @myy.haaga-helia.fi- käyttäjätunnuksellasi. Jos videot eivät aukea, selaimesi tai selaimen lisäosat saattavat estää evästeiden välittämisen videopalveluun. Kokeile tässä tapauksessa avata videon suoraan MS Stream:issa klikkaamalla videon yllä olevaa otsikkoa tai videon oikeassa yläkulmassa olevaa 🗗-kuvaketta.
>
> Mikäli olet tai olet ollut samanaikaisesti kirjautuneena kaksilla eri Microsoft-tunnuksilla, voi ongelma johtua siitä, että Stream tunnistaa sinut tunnuksella, jolla ei ole katseluoikeutta. Kokeile tässä tapauksessa avata video "incognito"-näkymässä, jossa nykyiset kirjautumisesi eivät ole voimassa. Klikkaa siis videon otsikkoa kakkospainikkeella ja valitse linkin avaaminen yksityisessä tilassa. Sen jälkeen sinun tulee kirjautua sisään @myy.haaga-helia.fi-tunnuksellasi.

&nbsp;

**[EtunimiTilasto-tehtävän yksikkötestaus, osa 1/3](https://web.microsoftstream.com/video/80c680e7-a853-4962-a9fb-19e7ef1f8d0b)** <small>19:06</small>

<iframe width="640" height="360" src="https://web.microsoftstream.com/embed/video/80c680e7-a853-4962-a9fb-19e7ef1f8d0b?autoplay=false&amp;showinfo=true" allowfullscreen style="border:none;"></iframe>

Tällä videolla sovelletaan yksikkötestausta käytännössä Map-tehtävistä tutun EtunimiTilasto-tehtävän kanssa. Videolla huomataan, että yksikkötestaus voi olla haastavaa, mikäli ohjelman rakenne ei mahdollista sen osien käsittelyä toisistaan irrallisina. Videolla pilkotaan ohjelma testattaviin paloihin, joille kirjoitetaan testejä.

&nbsp;

**[EtunimiTilasto-tehtävän yksikkötestaus, osa 2/3](https://web.microsoftstream.com/video/144d7504-7f0f-465d-a473-130e9fd3a2b8)** <small>17:56</small>

<iframe width="640" height="360" src="https://web.microsoftstream.com/embed/video/144d7504-7f0f-465d-a473-130e9fd3a2b8?autoplay=false&amp;showinfo=true" allowfullscreen style="border:none;"></iframe>

Tällä videolla toteutetaan logiikka CSV-rivien muuttamiseksi `HashMap`-tietorakenteeksi siten, että logiikka on yksikkötesttavissa.

&nbsp;

**[EtunimiTilasto-tehtävän tiedostonkäsittely, osa 3/3](https://web.microsoftstream.com/video/2180450b-4663-430d-9cb4-a5aa89db17f3)** <small>12:26</small>

<iframe width="640" height="360" src="https://web.microsoftstream.com/embed/video/2180450b-4663-430d-9cb4-a5aa89db17f3?autoplay=false&amp;showinfo=true" allowfullscreen style="border:none;"></iframe>

Tällä videolla toteutetaan ja yksikkötestataan EtunimiTilasto-tehtävän tiedostojenkäsittelyä koskeva osuus. Videolla käsitellään aineistona [etunimet.csv-tiedostoa](https://gist.githubusercontent.com/swd1tn002/f6b4c367cba9eecce0c2a1ba9de6854a/raw/fecefc85b1915bfcaf9aaf2ede7bf7503c2bffb0/etunimet.csv). Valmis TiedostonLukija.java -apuluokka löytyy [täältä](https://gist.github.com/swd1tn002/5842d9bb5d4152799e11d0f7742ecc91).

*Aineiston lisenssi: [Digi- ja väestötietovirasto](https://www.avoindata.fi/data/fi/organization/digi_ja_vaestotietovirasto) on julkaissut tietoaineiston [Väestötietojärjestelmän suomalaisten nimiaineistot](https://www.avoindata.fi/data/fi/dataset/none) lisenssillä [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).*

&nbsp;

### Lisämateriaali

Lisäksi sinun kannattaa tutustua tämän viikon tehtävän alkuperäiseen lähteeseen, josta löydät tekstimateriaaleja sekä videoita tehtävään liittyen: [https://web.mit.edu/6.005/www/fa16/classes/04-code-review/](https://web.mit.edu/6.005/www/fa16/classes/04-code-review/)


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

