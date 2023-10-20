---
title: 🚧 Annotaatiot
layout: default
nav_order: 10
permalink: /annotaatiot/
---


# Annotaatiot
{: .no_toc }

Annotaatio on kähdekoodissa oleva @-alkuinen merkintä, jolla lisätään koodiin metadataa. Annotaatio liittyy seuraavaan koodissa olevaan osaan. luokkaan, kenttään, metodiin jne.  Annotaatio voi olla kääntäjän ohjaukseen tarkoitettu ja se ei tallennu käännettyyn byte-koodiin, tai sitten annotaatiota käytetään suorituksen aikana jolloin annotaatio on tallessa tyyppitiedossa metadatana.

Luultavasti olet nähnyt @Override -annotaation toString-metodin perinnän yhteydessä. Tämä on hyvä esimerkki miten annotaatioita käytetään ja miten ne toimii. 

```java
@Override
public String toString() {
    return "Pelaaja " + nimi + ", pisteitä koossa " + pisteet;
}
```
Yllä oleva Pelaaja-luokka kääntyy, vaikka annotaation ottaa pois lähdekoodista. @Override-annotaatio kuitenkin kannattaa laittaa koodiin, koska silloin kääntäjä pystyy tarkistamaan että kantaluokassa (yliluokassa) on varmasti sama metodi ylikirjoitettavaksi. Jos ei ole, niin kääntäjä antaa virheilmoituksen. Samalla tällä annotaatiolla dokumentoit omaan koodiisi ylikirjoitettavat metodit.

Jokainen annotaatio on määritelty, otetaan esimerkiksi edellä esitelty @Override. Sen määritelmä on:

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.SOURCE)
public @interface Override {
}
```

Tässä @Target-annotaatiolla määritellään mihin koodinosaan @Override:n voi liittää (metodiin) ja @Retention:lla määritetään pysyvyys, SOURCE on vain käännösaikana käytössä, eikä talletu käännettyy koodiin.
On mahdollista tehdä myös omia annotaatioita, toki yleensä käytetään valmiiksi määriteltyjä jotka ovat erilaisissa kirjatoissa. Esimerkkeinä vaikka Spring Boot-kirjasto tai JSON-käsittelykirjastot.


