---
title: 🚧 Rinnakkaisuus
layout: default
nav_order: 11
permalink: /rinnakkaisuus/
search_exclude: true
nav_exclude: true
---

#Rinnakkaisuus

Tähän saakka kaikki kursseilla tehdyt sovellukset ovat käynnistyneet main-metodin ensimmäisestä lauseesta ja suoritus on edennyt lause kerrallaan kunnes main-metosi on suoritettu kokonaan. Jokaisella hetkellä on suorituksessa vain yksi sovelluksen kohta. 
On mahdollista, että sovelluksen (prosessin) sisällä on useita samaan aikaan suorituksessa olevia koodinosia, tällöin puhutaan rinnakkaisuudesta.
<!-- 
esimerkki thread:lla, sitten runnable
seuraavana rinnakkaisuudesta aiheutuvia 'ongelmia'
silmukassa laskurin kasvatus ==> ei toimi jos tarpeeksi kierroksia ==> joskus menee pieleen 
ensimmisellä kerralla
tähän ratkaisuna synkronointi eli mutex eli poissulkemisongelman perusratkaisu java-kielessä
Race-condition


tästä parempi esimerkki voisi olla IDGenerator-luokka, jota käytetään useasta eri säikeestä.
tässä voisi olla jopa Singleton pattern käytössä. Jos tarpeeksi generoi ID-arvoja rinnakkain (aasinsilta vaikka web-sovellukseen), menee varmasti pieleen ilman poissulkemisohngelman ratkaisua. Ensin ratkaisu synchronized-tekniikalla, sitten ReentrantLock-luokalla (Mutex). Semaphoren voisi käytä vielä läpi koska siinä on laskuri mukana (montako pyyntöä sallitaan kerralla) kun Mutex on on/off-tyyppinen.

Thread /Runnable
Executor
java.util.concurrent-paketti ==> Executor ja ExecutorService rajapinnat ja niiden käyttö -->
