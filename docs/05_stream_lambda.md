---
title: 🚧 Streamit ja lambdat
layout: default
nav_order: 6
permalink: /stream-lambda/
---

# Streamit ja Lambda-lausekkeet

<!-- johdatus funktionaaliseen ohjelmointiin esimerkin avulla.
lambda on anonyymi funktio, jossa syntaksia on vielä tiivistetty
Luokka, joka sisältää jonkin listan esimerkiksi tuotteita
- ensin tavallisina funktioina poimiKalliit ja poimiPunaiset ==> kovakoodattu ratkaisu
- seuraavana sisäinen toteutus niin, että valinta on omana funktiona
- funktio-osoitin ja miten se toimii
- toteutus niin, että valintafunktion voi välittää poiminta-funktiolle
- java.util.function-paketti ja Predicate
- edellisen toteutus prodikaatin avulla, ensin funktiona ja sitten käyttäen lambda-syntaksia
- muita: consumer, supplier -->

#Stream

<!-- lyhyt kuvaus mikä on stream
sitten edellinen esimerkki, oikea toteutus käyttäen streamia 
ja vaikka kokonaan ilman erillistä luokkaa koska jos on lista, siitä voidaan käsitellä streamin ja lambdojen avulla 

näiden esittely:
Operaatiot streamien yhteydessä
Intermediate (streamin läpikäynti jatkuu)
-filter()   map()  peek()

Terminal (päättää streamin suorituksen)
-forEach()  count()  sum() average()   min()   max()  collect()

Terminal short-circuit (päättää  suorituksen riippuen käsiteltävästä datasta)
-findFirst()  findAny()  anyMatch()  allMatch()  noneMatch()

Poiminta 
-map(), peek()

datafunktioita
- sum(), count(), max(), min() , average()

Stream toimintoja
-collect() , sort() -->