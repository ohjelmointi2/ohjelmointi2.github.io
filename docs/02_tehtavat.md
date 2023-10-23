---
title: 📥 Tehtävät
layout: default
nav_order: 2
permalink: /tehtavat/
---

# GitHub classroom -tehtävät
{: .no_toc }

Osa opintojakson tehtävänannoista löytyy GitHub-palvelusta, kukin omana repositorionaan. Kyseisissä tehtävissä hyödynnetään tehtävien automaattista tarkastusta [GitHub classroom](https://classroom.github.com/) -palvelun avulla. Tehtäväkohtaiset ohjeet löydät aina kustakin repositoriosta, mutta tehtävien yhteiset ohjeet on kirjattu alle.
{: .fs-5 }

---

## Tällä sivulla:
{: .no_toc .text-delta }

* Sisällysluettelo
{:toc}

{: .vinkki }
Voit soveltaa näitä ohjeita esim. VS Code -koodieditorin tai Eclipsen kanssa seuraamalla [VS Code:n omia ohjeita](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git) tai lukuisia [Eclipsen ohjeita](https://www.google.com/search?q=eclipse+git).

## Vaihe 1: Tehtävän hyväksyminen

1. Kirjaudu sisään GitHub-tilillesi.

2. Avaa linkki, jonka opettajasi on antanut sinulle päästäksesi tehtävään käsiksi.

3. Klikkaa "Accept" -painiketta. Tämä luo sinulle yksityisen kopion repositoriosta, jossa voit työskennellä tehtävän parissa.

## Vaihe 2: Kloonaa repositorio

4. Avaa terminaali, Git Bash tai Git-työkalu tietokoneellasi.

5. Siirry hakemistoon, johon haluat tallentaa tehtäväsi.

6. Käytä seuraavaa komentoa repositorion kloonaamiseen (korvaa `<repository_url>` tehtävän repositorion URL-osoitteella):

   ```bash
   git clone <repository_url>
   ```

   Huom! Tehtävän kloonaamiseksi sinun tulee olla kirjautuneena GitHubiin myös Git-työkalullasi. Seuraa tarpeen mukaan työkalun ohjeita.


## Vaihe 3: Tee muutoksia

7. Avaa tehtävässä annetut tiedostot valitsemassasi Java-kehitysympäristössä.

    * VS Code -koodieditorin Java-ohjeistus löytyy sivustolta [Java in Visual Studio Code ](https://code.visualstudio.com/docs/languages/java). Seuraa sivun ohjeita ja asenna itsellesi editorin suosittelema Java-laajennus ["Language Support for Java"](https://marketplace.visualstudio.com/items?itemName=redhat.java).

    * Eclipse -koodieditorille löytyy [lukuisia epävirallisia ohjeita](https://www.google.com/search?q=eclipse+smart+import+project) Java-projektin lisäämiseksi työtilaan.

      Suosittelemme, että kloonaat projektin ensin Eclipsen ulkopuolella ja lisäät kloonatun projektin Eclipseen seuraavasti: `File` - `Import` - `Gradle` - `Existing Gradle Project`. Mikäli käytät Windows-käyttöjärjestelmää, joudut mahdollisesti asettamaan Eclipsen työtilaan UTF-8-merkistökoodauksen, jotta ääkköset ja erikoismerkit toimivat oikein. Merkistökoodaus asetetaan `Window`-valikon `Preferences`-kohdasta [tämän kuvan mukaisesti](/img/eclipse-workspace-encoding.jpg).

8. Kirjoita ohjelmakoodia tehtävänannon ohjeiden mukaisesti.


## Vaihe 4: Suorita testit paikallisesti

9. Koodin kirjoittamisen jälkeen testaa se paikallisesti varmistaaksesi, että se toimii odotetusti. Tarkemmat ohjeet ratkaisun testaamiseksi löydät tehtävänannosta.


## Vaihe 5: `git status`, `git add` ja `git commit`

10. Terminaalissa tai Git Bashissa siirry tehtävähakemistoon:

    ```bash
    cd <tehtävä_hakemisto>
    ```

11. Käytä seuraavia komentoja muutosten lisäämiseen ja commitointiin:

    ```bash
    git status     # näyttää muuttuneet tiedostot
    git add <muutettu tiedosto>
    git commit -m "Tehtävä suoritettu"
    ```

## Vaihe 6: Päivitä muutoksesi etärepoitorioon

12. Päivitä tekemäsi commit etärepositorioon GitHubissa:

    ```bash
    git push
    ```

## Vaihe 7: Tarkastele automaattisen arvioinnin tuloksia

13. Odota, että automaattinen arviointiprosessi suoritetaan GitHub actions -työkalulla.

14. Tarkastele automaattisen arvioinnin tuloksia käymällä oman repositoriosi sivulla GitHubissa. Löydät automaattisten testien tuottamat tulokset ja pistemäärän "actions"-välilehden alta.


## Vaihe 8: Tee korjauksia (tarvittaessa)

15. Mikäli automaattinen arviointi paljastaa ongelmia tai virheitä, palaa takaisin koodiisi, tee tarvittavat korjaukset ja toista vaiheet 4–7. Voit palauttaa tehtävät niin monta kertaa kuin on tarpeen tehtävän määräaikaan asti.


## Vaihe 9: Lähetä tehtävä

16. Kun olet tyytyväinen koodiisi ja testien tuloksiin, tehtävä on suoritettu.

17. Noudata mahdollisia kurssitoteutuskohtaisia lisäohjeita, kuten repositorion linkin lisääminen Teamsiin tai Moodleen.

Tämä ohjeistus luotiin [ChatGPT:n](https://chat.openai.com/) avulla.
