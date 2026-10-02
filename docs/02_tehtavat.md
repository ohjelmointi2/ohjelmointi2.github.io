---
title: 📥 Tehtävät
layout: default
nav_order: 2
permalink: /tehtavat/
---

# GitHub-tehtävät
{: .no_toc }

Osa opintojakson tehtävänannoista löytyy GitHub-palvelusta, kukin omana repositorionaan. Kyseisissä tehtävissä hyödynnetään tehtävien automaattista tarkastusta [GitHub actions](https://docs.github.com/en/actions) -palvelun avulla. Tehtäväkohtaiset ohjeet löydät aina kustakin repositoriosta, mutta tehtävien yhteiset ohjeet on kirjattu alle.
{: .fs-5 }

---

## Tällä sivulla:
{: .no_toc .text-delta }

* Sisällysluettelo
{:toc}

VS Code:lla on [omat ohjeet versionhallinnan käytöstä](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git), joita kannattaa hyödyntää näiden ohjeiden ohessa.

Tehtäviä aloitettaessa sinulla tulee olla GitHub-tili ja Git-versionhallintaohjelma asennettuna koneellesi. Lisäksi sinun tulee olla kirjautuneena GitHubiin sekä selaimella että Git-työkalullasi. Käyttötavat vaihtelevat eri käyttöjärjestelmien ja Git-työkalujen välillä, joten etsi omaan käyttöösi sopivat ohjeet tarpeidesi mukaan.

Tehtävien tekemiseen tarvitset myös Java-kehitysympäristön ja VS Code:n. Tehtävien tekemiseen liittyvät ohjeet löytyvät tämän sivun lopusta.


## Kurssin organisaatio

Tehtävät ratkotaan kukin omassa GitHub-repositoriossaan. Repositoriot luodaan kurssin GitHub-organisaation alle, joten sinun tulee liittyä ennen tehtävien aloittamista kyseiseen organisaatioon.

Ilmoita GitHub-käyttäjänimesi kurssin opettajalle oman kurssisi ohjeiden mukaisesti. Opettaja kutsuu sinut kurssin GitHub-organisaatioon, jonka jälkeen sinun tulee vielä hyväksyä kutsu GitHubissa. Kun olet hyväksynyt kutsun, pääset tekemään kurssin tehtäviä.


## Vaihe 1: Luo oma kopio tehtävästä

Jokaiselle tehtävälle löytyy oma luontilinkkinsä, jota käyttämällä saat oman henkilökohtaisen kopion tehtävästä. Luo omat repositoriosi aina käyttämällä annettuja linkkejä, älä tee kopioita itse GitHubissa. Tehtävien linkit löytyvät kurssin ohjeista.

Kun olet luonut oman kopiosi tehtävästä, kopioi sen URL-osoite GitHubista. URL-osoite löytyy repositoriosi sivulta, "Code"-painikkeen alta. Valitse HTTPS-vaihtoehto ja kopioi osoite leikepöydälle.


## Vaihe 2: Kloonaa repositorio

- Avaa terminaali, Git Bash, GitHub Desktop, VS Code:n source control tai muu Git-työkalu tietokoneellasi.

- Siirry hakemistoon, johon haluat tallentaa tehtäväsi. **Huom:** Tämän hakemisto pitää olla oman koneen paikallisella levyllä, älä kloonaa OneDriveen tai muuhun pilvipalvelujakoon, viimeisimmän versiot löytyvät aina GitHubista joten OneDriven käytöstä ei saa mitään hyötyä, mutta voi aiheuttaa käännösohgelmia.

- Käytä seuraavaa komentoa repositorion kloonaamiseen (korvaa `<repository_url>` tehtävän repositorion URL-osoitteella):

   ```bash
   git clone <repository_url>
   ```

   Huom! Tehtävän kloonaamiseksi sinun tulee olla kirjautuneena GitHubiin myös Git-työkalullasi. Seuraa tarpeen mukaan työkalun ohjeita.


## Vaihe 3: Tee muutoksia

- Avaa tehtävässä annetut tiedostot valitsemassasi IDE:ssä.

    * VS Code -koodieditorin Java-ohjeistus löytyy sivustolta [Java in Visual Studio Code ](https://code.visualstudio.com/docs/languages/java). Seuraa sivun ohjeita ja asenna itsellesi editorin suosittelema paketti ["Extension Pack for Java"](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack).

- Kirjoita ohjelmakoodia tehtävänannon ohjeiden mukaisesti. Tehtävän ohjeet löytyvät aina repositorion readme-tiedostosta, ja tarkemmat ohjeet kustakin muokattavasta Java-luokasta.


## Vaihe 4: Suorita testit paikallisesti

- Koodin kirjoittamisen jälkeen testaa se paikallisesti varmistaaksesi, että se toimii odotetusti. Tarkemmat ohjeet ratkaisun testaamiseksi löydät kunkin tehtävän tehtävänannosta.


## Vaihe 5: `git status`, `git add` ja `git commit`

- Komentotulkissa, terminaalissa tai Git Bashissa siirry tehtävähakemistoon:

    ```bash
    cd <tehtävä_hakemisto>
    ```

- Käytä seuraavia komentoja muutosten lisäämiseen ja commitointiin:

    ```bash
    git status     # näyttää muuttuneet tiedostot
    git add <tiedosto1> <tiedosto2> ...  # lisää muutokset staging-tilaan
    git commit -m "Tehtävä suoritettu"
    ```

## Vaihe 6: Päivitä muutoksesi etärepositorioon

- Päivitä tekemäsi commit etärepositorioon GitHubissa:

    ```bash
    git push
    ```

## Vaihe 7: Tarkastele automaattisen arvioinnin tuloksia

- Odota, että automaattinen arviointiprosessi suoritetaan GitHub actions -työkalulla.

- Tarkastele automaattisen arvioinnin tuloksia käymällä oman repositoriosi sivulla GitHubissa. Löydät automaattisten testien tuottamat tulokset ja pistemäärän "actions"-välilehden alta.


## Vaihe 8: Tee korjauksia (tarvittaessa)

- Mikäli automaattinen arviointi paljastaa ongelmia tai virheitä, palaa takaisin koodiisi, tee tarvittavat korjaukset ja toista vaiheet 3–7. Voit palauttaa tehtävät niin monta kertaa kuin on tarpeen tehtävän määräaikaan asti.


## Vaihe 9: Lähetä tehtävä

- Kun olet tyytyväinen koodiisi, testien tuloksiin ja saamiisi pisteisiin, tehtävä on suoritettu.

- Tehtäviä ei pääsääntöisesti tarvitse palauttaa erikseen muuta kautta, kunhan olet luonut tehtävärepositoriosi ohjeiden mukaan ja se sijaitsee kurssin organisaatiossa.

