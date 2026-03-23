---
title: 🔨 Työkalut
layout: default
nav_order: 1
permalink: /työkalut/
---


# Kurssin työkalut
{: .no_toc }

Edeltävillä kursseilla olet hyödyntänyt todennäköisesti Eclipse- ja VS Code -koodieditoreja sekä Viope-tehtäväjärjestelmää. Tällä opintojaksolla laajennamme työkalujen valikoimaa ja hyödynnämme mm. versionhallintaa, automaatiotyökalua sekä testaustyökalua.
{: .fs-5 }

Tavoitteenamme on, että sovellusta voidaan suorittaa suoraviivaisesti myös koodieditorin ulkopuolella ja että sen kääntäminen, riippuvuuksien asentaminen, paketointi sekä testaaminen voidaan tarvittaessa automatisoida. Näitä taitoja tulet tarvitsemaan niin Java-kielisissä kuin myös muissa ohjelmistoprojekteissa.
{: .fs-5 }

{: .vinkki }
Tällä kurssilla käytettävät Git, Gradle sekä JUnit ovat Java-projekteissa erittäin laajasti hyödynnettyjä työkaluja. Vaikka seuraava projektisi olisi tehty muulla kielellä kuin Javalla, vastaavia työkaluja löytyy niin Pythonille ([pip](https://pypi.org/), [pytest](https://docs.pytest.org/)), JavaScriptille ja TypeScriptille ([npm](https://www.npmjs.com/), [Jest](https://jestjs.io/)), PHP:lle ([Composer](https://getcomposer.org/), [PHPUnit](https://github.com/sebastianbergmann/phpunit)) kuin monille muillekin kielille. Voit siis soveltaa oppimiasi asioita tulevaisuudessa ohjelmointikielestä riippumatta.

---

## Tällä sivulla:
{: .no_toc .text-delta }

* Sisällysluettelo
{:toc}

## VS Code tai Eclipse

Kurssin ohjeet ja esimerkit on tehty [VS Code](https://code.visualstudio.com/docs/languages/java)- ja [Eclipse](https://www.eclipse.org/downloads/packages/) -sovelluskehittimillä Windows-käyttöjärjestelmässä. Tehtäviä ja esimerkkejä testataan myös Linux-ympäristössä. Voit hyödyntää kurssilla myös muita työkaluja ja käyttöjärjestelmiä, mutta emme voi tarjota niihin samanlaatuista ohjausta.

Käyttäessäsi VS Code:a asenna itsellesi [Java-kehityksessä tarvittavat työkalut](https://code.visualstudio.com/docs/languages/java). Vastaavasti käyttäessäsi Eclipseä asenna itsellesi [Java-kehitykseen tarkoitettu paketti](https://www.eclipse.org/downloads/packages/).


## JDK

Kurssilla tarvitset Javan ohjelmointityökalut sisältävän JDK-paketin (Java Development Kit). JDK löytyy sinulta todennäköisesti edeltävän kurssin vuoksi valmiina, mutta löydät listan suositelluista OpenJDK-versioista [VS Code:n asennusohjeista](https://code.visualstudio.com/docs/languages/java#_install-a-java-development-kit-jdk).

Kurssilla tuetaan virallisesti viimeisintä [LTS-versiota (long-term support)](https://en.wikipedia.org/wiki/Java_version_history), mutta voit käyttää oman harkinnan mukaan myös muita versioita.


## Git

> *"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."*
>
> [https://git-scm.com/](https://git-scm.com/)

Kurssin tehtävien ja esimerkkien yhteydessä hyödynnämme Git-versionhallintaa ja GitHub-palvelua. Gitin käytön opetteluun voit käyttää esimerkiksi Haaga-Helian tietojenkäsittelyn opiskelijoiden kollektiivisesti kirjoittamaa [Git 101 -opasta](https://github.com/mruonavaara/git101) tai Helsingin yliopiston "Tietokone Työvälineenä" -kurssin [Git-materiaalia](https://tkt-lapio.github.io/git/).

Gitin voit asentaa itsellesi osoitteesta [https://git-scm.com/](https://git-scm.com/). Vaikka Git tuntuisi aluksi vaikealta tai ahdistavalta, sinun ei tarvitse opetella kaikkea kerralla, vaan tee vain sen verran mistä on sinulle välitöntä hyötyä. Lisäksi tarvitset GitHub-käyttäjätunnuksen, jotka voit luoda osoitteessa [https://github.com/](https://github.com/).


### Git-videot

* [https://git-scm.com/videos](https://git-scm.com/videos)
* [Learn Git in 20 Minutes. Web Dev Simplified](https://youtu.be/IHaTbJPdB-s)
* [Git and GitHub for Beginners - Crash Course. freeCodeCamp.org](https://youtu.be/RGOj5yH7evk)


## Gradle ja Maven

[Gradle](https://gradle.org/) ja [Maven](https://maven.apache.org/) ovat suosittuja "build automation"-työkaluja, jotka helpottavat projektien sekä niiden riippuvuuksien hallintaa. Automaatiotyökalu mahdollistaa mm. koodin kääntämisen, riippuvuuksien asentamisen, testien suorittamisen ja sovelluksen paketoinnin yhdellä komennolla.

Hyödynnämme kurssilla näitä työkaluja tarpeen mukaan, mutta emme varsinaisesti perehdy niiden teoriaan. Mikäli haluat tutustua Gradleen tarkemmin, suosittelemme katsomaan videon [Gradle tutorial for complete beginners](https://youtu.be/-dtcEMLNmn0) tai lukemaan artikkelin [Maven in 5 Minutes](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).

💡 *Huom! Gradlea tai Mavenia ei tarvitse asentaa itselleen tällä kurssilla. Mikäli näitä työkaluja tarvitaan, ne tulevat valmiiksi tehtävärepositorion mukana.*


## Kyselyt

```quiz
### Kuinka luodaan uusi git-repositorio paikallisesti?

- [ ] git clone `<repository_url>`
- [x] git init
- [ ] git branch
```

```quiz
### Miten lisätä muutokset staging-tilaan gitissä?

- [ ] git push `<file_name>`
- [ ] git stage `<file_name>`
- [x] git add `<file_name>`
```

```quiz
### Miten tehdään commit gitissä tallentamaan muutokset?
- [x] git commit -m "Commit message"
- [ ] git merge
- [ ] git pull
```

```quiz
### Mikä on Gradle-projektityökalun tarkoitus ohjelmistokehityksessä?

- [x] Kääntää lähdekoodit suoritettaviksi ohjelmiksi
- [ ] Luoda tietokantataulut ja skeemat
- [ ] Testata ohjelmiston suorituskykyä
```

```quiz
### Miten luodaan uusi Gradle-projekti komentorivillä?

- [ ] gradle new-project
- [x] gradle init
- [ ] gradle create-project
```

```quiz
### Kuinka lisätään riippuvuudet (dependencies) Gradle-projektiin?

- [x] Muokkaamalla build.gradle-tiedostoa ja lisäämällä riippuvuudet dependencies-lohkoon
- [ ] Suorittamalla komento "gradle add-dependency <dependency_name>"
- [ ] Kopioimalla riippuvuudet manuaalisesti projektin kansioon
```

Tämä kysely luotiin [ChatGPT:n](https://chat.openai.com/) avulla.

{% include quiz.html %}
