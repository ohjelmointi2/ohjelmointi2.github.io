---
title: 🏠 Etusivu
layout: home
nav_order: 0
---

# 👋 Tervetuloa kurssille!
{: .no_toc }

Tervetuloa kurssille Ohjelmointi 2, SOF001AS3A!
{: .fs-6 }

Tällä kurssilla syvennämme ohjelmointiosaamistamme ja sovellamme aiemmin oppimianne ohjelmointitaitoja mm. tietokantojen parissa. Syvennymme kielen syntaksin ja tarvittavien kirjastojen lisäksi myös yksikkötestaukseen, automaatiotyökaluihin sekä versionhallintaan.
{: .fs-6 }

{: .huom }
Kurssin päivitys on käynnissä ja sisältö uudistuu syksyksi 2023.

---
## Tällä sivulla:
{: .no_toc .text-delta }

* Sisällysluettelo
{:toc}


## ✅ Osallistumisen vahvistaminen

**Kurssin osallistumisen vahvistaminen edellyttää kahden ensimmäisen viikon tehtävien palauttamista määräaikaan mennessä.** Ensimmäiset tehtävät ovat luonteeltaan aikaisempaa osaamista kertaavia ja tehtäviin on saatavissa vinkkejä sekä tukea kurssin keskustelukanavalla.

> *"Opiskelija vahvistaa paikkansa opintojaksototeutuksella olemalla läsnä opetuksen alkaessa tai muutoin opettajan ilmoittamalla tavalla, joka voi esimerkiksi olla ensimmäisen oppimistehtävän palautus."*
>
> [Tutkintosääntö](https://www.haaga-helia.fi/fi/tutkintosaanto-noudatettavat-normit-ja-muutoksenhaku)

Tämän käytännön ei ole tarkoitus estää ketään opiskelemasta tai suorittamasta kurssia, vaan sen on tarkoitus varmistaa, että kurssi lähtee kaikilla onnistuneesti käyntiin.

Kurssin keskeyttäminen ei ole Haaga-Helian linjauksia noudattaen mahdollista enää osallistumisen vahvistamisen jälkeen:

> *"Opettaja poistaa opetuksen alussa toteutukselta opiskelijat, jotka eivät osallistu ensimmäiseen opetuskertaan tai ilmoita poissaolostaan. Opiskelijoita ei enää myöhemmin poisteta toteutukselta, vaan kaikille annetaan arvosana hylätty-kiitettävä."*
>
> [https://mynet.haaga-helia.fi/group/pakki/toteutukselle-ilmoittautuminen](https://mynet.haaga-helia.fi/group/pakki/toteutukselle-ilmoittautuminen)


## 💬 Viestintäkanavat

Tällä kurssilla viestintä tapahtuu toteutuksesta riippuen Moodlessa tai MS Teams -palvelussa. Jos jäät jumiin koodisi kanssa tai et ymmärrä materiaaleja tai tehtävänantoja, kysy rohkeasti vinkkejä. Todennäköisesti samaa ongelmaa pohtii kanssasi myös moni muu, joten lähetäthän sisältöä ja tehtävänantoja koskevat kysymykset yhteiselle kanavalle eikä yksityisviestinä.


## 📥 Palautettavat tehtävät

Kurssilla on viikoittaisia tehtäviä, jotka tulee palauttaa annettuihin määräaikoihin mennessä. Toteutuksesta riippuen palautus tehdään joko GitHubiin, Teamsiin tai Moodleen. Tarkemmat ohjeet löytyvät oman toteutuksesi ohjeista.

Apua tehtävien tekoon on saatavissa kurssin keskustelukanavalla niin opettajalta kuin muiltakin opiskelijoilta.


## 📊 Arviointi

Kurssi arvioidaan asteikolla 0-5. Kurssin loppuarvosana lasketaan kurssin tehtävien keskiarvosta tehtäväkohtaiset painotukset huomioiden, ja tulos pyöristetään lähimpään kokonaiseen arvosanaan.


## ⏱️ Kurssin työmäärä

Opintojakso kestää 8 viikkoa ja on laajuudeltaan 5 opintopistettä, joten sen [laskennallinen työmäärä on noin 135 tuntia](https://www.haaga-helia.fi/fi/ects-jarjestelma-ja-tutkintotodistuksen-liite-eli-diploma-supplement). Ttyömäärä vastaa laskennallisesti noin 17 tuntia viikossa, joten varaa kurssin suorittamiseen runsaasti aikaa joka viikko:

```java
public class KurssinTyomaara {

    public static void main(String[] args) {
        int kestoViikkoina = 8;
        int opintopisteita = 5;
        int tyomaaraPerPiste = 27;

        int kokonaistyomaara = opintopisteita * tyomaaraPerPiste;
        System.out.println(kokonaistyomaara); // 135 tuntia

        double tyomaaraPerViikko = 1.0 * kokonaistyomaara / kestoViikkoina;
        System.out.println(tyomaaraPerViikko); // 16.875 tuntia per viikko
    }
}
```


## 📑 Lähteiden käyttäminen

Tämän kurssin materiaali perustuu suurelta osin valmiisiin netistä löytyviin dokumentaatioihin ja tutoriaaleihin. Tällä sivulla eri aihealueiden yhteydessä tarjotaan linkkejä aihetta koskeviin materiaaleihin, mutta **joudut sen lisäksi merkittävissä määrin etsimään itse tietoa aiheista**.

Ohjelmointiongelmiin löytyy usein valmiita tai osittaisia ratkaisuja ympäri Internetiä niin keskustelupalstoilta kuin tutoriaaleista. Huonossa tapauksessa löydät toimivan ratkaisun ongelmaasi, mutta et osaa aivan tulkita mitä löytämäsi koodi tekee ja miksi se ratkaisee ongelmasi. Ammattimaisessa ohjelmistokehityksessä tästä seuraa mahdollisesti suuriakin vahinkoja.

Nettilähteiden hyödyntäminen ja niistä mallin ottaminen on sallittua ja kannustettavaa, mutta et saa vain kopioida ratkaisuja, vaan sinun tulee ymmärtää, miten koodisi toimii. Lisäksi, erityisesti koska kyseessä on korkeakoulun opintojakso, sinun tulee merkitä lähteet lainatessasi esimerkiksi StackOverflow:sta löytämääsi koodia. Lähdeviitteeksi riittää esimerkiksi verkkosivun osoite Java-kommenttina lainatun koodin yhteydessä, tai käyttämäsi lähteen käyttöehtojen mukainen muu lähdeviite.


## 🧠 Esitietovaatimukset

> *"Opiskelija on suorittanut opintojakson Ohjelmointi 1 (SOF005AS2A/SWD4TN032) tai hänellä on vastaavat tiedot ja taidot. Opiskelija suorittaa samanaikaisesti opintojakson Tietokannat ja tiedonhallinta (SOF001AS2A/ SWD1TN003) tai hänellä on vastaavat tiedot ja taidot."*
>
> [*opintojaksokuvaus*](https://opinto-opas.haaga-helia.fi/course_unit/SOF001AS3A)

Mikäli sinulla ei ole sujuvaa osaamista Ohjelmointi 1 -opintojaksolta, vaatii tämä kurssi erityisen paljon työtä ja omaa panostusta.

Mikäli SQL-osaamisessasi on puutteita, suosittelen perehtymään netistä vapaasti löytyviin lähteisiin sekä tutoriaaleihin, kuten [sqlzoo.net](https://sqlzoo.net/).

&nbsp;

# ⚖️ Lisenssit ja tekijänoikeudet

Tällä kurssilla hyödynnetään avoimilla lisensseillä julkaistuja oppimateriaaleja, dataa ja ohjelmakoodia.


## Helsingin yliopiston oppimateriaalit
{: .no_toc }

Kurssin oppimateriaalissa ja tehtävissä hyödynnetään laajasti [Helsingin yliopiston Agile Education Research –tutkimusryhmän oppimateriaaleja](https://ohjelmointi-20.mooc.fi/), jotka on lisensoitu [Creative Commons BY-NC-SA 4.0 -lisenssillä](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fi).


## DayOfYear-esimerkkiluokka (Smelly Example #1)
{: .no_toc }

Yksikkötestauksessa käytettävä DayOfYear-esimerkkiluokka on lainattu [MIT:n Software Construction -kurssin oppimateriaaleista](https://web.mit.edu/6.005/www/fa16/classes/04-code-review/). Sen tekijät ja lisenssi ovat:

Collaboratively authored with contributions from: Saman Amarasinghe, Adam Chlipala, Srini Devadas, Michael Ernst, Max Goldman, John Guttag, Daniel Jackson, Rob Miller, Martin Rinard, and Armando Solar-Lezama.

Licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fi).


## Nimiaineiston lisenssi (etunimet.csv)
{: .no_toc }

Kurssin Viope-tehtävässä ja esimerkeissä hyödynnetään [Digi- ja väestötietoviraston](https://www.avoindata.fi/data/fi/organization/digi_ja_vaestotietovirasto) julkaisemaa tietoaineistoa [Väestötietojärjestelmän suomalaisten nimiaineistot](https://www.avoindata.fi/data/fi/dataset/none), joka on julkaistu lisenssillä [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).


## Postinumeroaineiston tekijänoikeudet
{: .no_toc }

[Postinumerot-projektipohjassa](https://github.com/ohjelmointi2/postinumerot) hyödynnettävä postinumeroaineisto muodostettu [https://github.com/theikkila/postinumerot](https://github.com/theikkila/postinumerot)-projektin JSON-tiedostosta.

Datan tekijänoikeudet kuuluvat Postille ja niitä käytetään [Postin käyttöehtojen mukaisesti](https://www.posti.fi/fi/asiakastuki/postinumerotiedostot).


## SQLite-tietokanta-ajuri
{: .no_toc }

Tietokanta-ajuri `sqlite-jdbc-*.jar` noudattaa lisenssiä [Apache License version 2.0](https://www.apache.org/licenses/). Lisätiedot: [https://xerial.org/software/](https://xerial.org/software/)


## Chinook-tietokanta
{: .no_toc }

Chinook-tietokannan on luonut [Luis Rocha](https://github.com/lerocha) ja se on lisensoitu avoimena lähdekoodina [MIT-lisenssillä](https://github.com/lerocha/chinook-database/blob/master/LICENSE.md).


## Just the Docs -teema
{: .no_toc }

Sivuston sivupohjana käytetään [Just the Docs](https://github.com/just-the-docs/just-the-docs) -nimistä teemaa, joka on lisensoitu [MIT-lisenssillä](https://github.com/just-the-docs/just-the-docs/blob/main/LICENSE.txt).


## Tämän oppimateriaalin lisenssi
{: .no_toc }

Tämän oppimateriaalin on kehittänyt Teemu Havulinna ja se on lisensoitu [Creative Commons BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/) -lisenssillä.

Sivuston lähdekoodit löydät osoitteesta [https://github.com/ohjelmointi2/ohjelmointi2.github.io](https://github.com/ohjelmointi2/ohjelmointi2.github.io).
