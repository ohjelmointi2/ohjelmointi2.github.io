---
title: 📥 Tehtävät
layout: default
nav_order: 2
permalink: /tehtavat/
---

# GitHub classroom -tehtävien suorittaminen
{: .no_toc }


{: .fs-6 }

---

## Tällä sivulla:
{: .no_toc .text-delta }

* Sisällysluettelo
{:toc}



**Vaihe 1: Tehtävän hyväksyminen**

1. Kirjaudu sisään GitHub-tilillesi.

2. Avaa linkki, jonka opettajasi on antanut sinulle päästäksesi tehtävään käsiksi.

3. Klikkaa "Hyväksy tämä tehtävä" -painiketta. Tämä luo sinulle yksityisen versionhallintarepositorion, jossa voit työskennellä tehtävän parissa.

**Vaihe 2: Kloonaa repositorio**

4. Avaa terminaali tai Git Bash tietokoneellasi.

5. Siirry hakemistoon, johon haluat tallentaa tehtäväsi.

6. Käytä seuraavaa komentoa repositorion kloonaamiseen (korvaa `<repository_url>` tehtävän repositorion URL-osoitteella):

   ```bash
   git clone <repository_url>
   ```

**Vaihe 3: Tee muutoksia**

7. Avaa tehtävässä annetut tiedostot valitsemassasi Java-kehitysympäristössä (esim. IntelliJ IDEA, Eclipse, VS Code).

8. Kirjoita Java-koodi, jotta saat tehtävän valmiiksi opettajan antamien ohjeiden mukaisesti.

**Vaihe 4: Suorita testit paikallisesti**

9. Koodin kirjoittamisen jälkeen testaa se paikallisesti varmistaaksesi, että se toimii odotetusti. Käytä mahdollisesti tehtäväohjeissa määriteltyjä testauskehyksiä tai työkaluja.

**Vaihe 5: Lisää ja sitouta muutokset**

10. Terminaalissa tai Git Bashissa siirry tehtävähakemistoon:

    ```bash
    cd <tehtävä_hakemisto>
    ```

11. Käytä seuraavia komentoja muutosten lisäämiseen ja sitouttamiseen:

    ```bash
    git add .
    git commit -m "Suoritettu tehtävä"
    ```

**Vaihe 6: Päivitä etärepoitorioon**

12. Päivitä sitoutetut muutokset etärepositorioon GitHubissa:

    ```bash
    git push origin main
    ```

   Huomioi, että haaran nimi voi vaihdella riippuen tehtävästä.

**Vaihe 7: Tarkastele automaattisen arvioinnin tuloksia**

13. Odota, että automaattinen arviointiprosessi suoritetaan. Opettajasi saattaa olla määrittänyt automaattisia testejä, jotka tarkistavat koodisi tiettyjen kriteerien suhteen.

14. Tarkastele automaattisen arvioinnin tuloksia vierailemalla tehtäväsivulla GitHubissa. Sinun pitäisi nähdä palautetta ja mahdollisia testituloksia, jotka automatisoitu järjestelmä on tuottanut.

**Vaihe 8: Tee korjauksia (tarvittaessa)**

15. Mikäli automaattinen arviointi paljastaa ongelmia tai virheitä, palaa takaisin koodiisi, tee tarvittavat korjaukset ja toista vaiheet 4–7.

**Vaihe 9: Lähetä tehtävä**

16. Kun olet tyytyväinen koodiisi ja automaattiset testit läpäisevät, voit pitää tehtävän suoritettuna.

17. Ilmoita opettajallesi tehtävän suorituksesta ja noudata mahdollisia lisätoimittamisohjeita, jotka hän on antanut.

Noudattamalla näitä ohjeita voit suorittaa Java-ohjelmointitehtäviä GitHub Classroomissa tehokkaasti ja varmistaa, että koodisi testataan ja arvioidaan opettajan vaatimusten mukaisesti.


Tämä ohjeistus luotiin [ChatGPT:n](https://chat.openai.com/) avulla.
