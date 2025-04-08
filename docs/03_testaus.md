---
title: ✔️ Yksikkötestaus
layout: default
nav_order: 4
permalink: /testaus/
---



# Yksikkötestauksen perusteet
{: .no_toc }

Tässä osassa tutustumme yksikkötestaukseen ja testaamme valmista virheellisesti toimivaa ja tyylillisesti heikosti toteutettua metodia. Tutustumme lisäksi koodin laatuun vaikuttaviin tekijöihin ja sovellamme niitä annetun valmiin koodin parantamiseksi.
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
Testimetodeja tulee yleensä paljon, siksi on erittäin tärkeään käyttää yhtenäistä ja kuvaavaa nimeämiskäytäntöä. Testin nimestä pitäisi pystyä päättelemään mitä toimintoa testataan, mitä tilannetta ja mikä on oletettu lopputulos. Esimerkkejä nimeämiskäytännöstä löytyy paljon, tiivis kuvaus löytyy esimerkiksi [täältä](https://www.baeldung.com/java-unit-testing-best-practices).


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



**Demo**



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


{% include quiz.html %}
