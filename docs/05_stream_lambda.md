---
title: 🚧 Streamit ja lambdat
layout: default
nav_order: 6
permalink: /stream-lambda/
---

# Streamit ja Lambda-lausekkeet

Stream ja Lambda käsitteinä ovat hankalia ymmärtää pelkästä termin nimestä. Stream on 'oliovirta', jonka avulla voidaan käsitellä jossain kokoelmaluokassa tai taulukossa olevia oliota tai primitiiviarvoja. Lambda on matemaattinen notaatio noin sadan vuoden takaa, jonka syntaksi on lainattu moneen ohjelmointikieleen kuvaamaan hyvin tiiviisti kirjoitettua nimetöntä funktiota (*matematiikkaa ei tarvitse osata yhtään!*). Lambda-notaatio on käytössä monessa muussa ohjelmointikielessä Javan lisäksi. Ensimmäisen kerran Lambda oli käytössä Lisp-ohjelmointikielessä 1960, ei siis mikään uusi keksintö. 
Tämän materiaalin tavoitteena on selittää, minkä ongelman Stream ja Lambda-lausekkeet ratkaisevat eli miksi ne ovat Java-kielessä mukana, mitä toimintoja niihin liittyy ja miten niitä käytetään. Lambdan idea on myös, että funktio kirjoitetaan inlinena ja sitä kutsutaan implisiittisesti heti.

**Johdanto esimerkin avulla**

Ohjelmointi 1-kurssilla käsiteltiin mm. taulukoita. Taulukoissa viitataan johonkin tiettyyn soluun tai käydään koko taulukko läpi ja tehdään taulukon sisältämille arvoille joku operaatio, nämä siis yleisimmän käsittelytavat. Esimerkki kokonaislukutaulukon alkioiden yhteelaskusta: 

```java
int[] luvut = { 1, 2, 4, 56, 6, 3, 2, 2, 4, 5, 3, 2, 23, 66, 35, 23, 200, 100 };
int summa = 0;
int suurin = Integer.MIN_VALUE;
for (int i = 0; i < luvut.length; i++) {
    summa += luvut[i];
    suurin = Math.max(suurin, luvut[i]);
}
System.out.println("Taulukon arvojen summa on " + summa + "ja suurin luku on " + suurin);
```
Silmukassa tehdään summan laskenta ja etsitään suurin luku taulukosta. Nämä ovat tyypillisiä esimerkkejä taulukkokäsittelyä opeteltaessa. Huomaa, että for-silmukan voi korvata foreach-silmukalla, joka olisi tässä esimerkissä hieman luontevampi tapa.

```java
for (int luku : luvut) {
    summa += luku;
    suurin = Math.max(suurin, luku); // tai sama if-lauseella
}
```
Taulukkoa voidaan käsitellä myös Stream-rajapinnan kautta, joka saadaan käyttöön Arrays-luokan staattisen metodin avulla.
```java
IntStream luvutStream = Arrays.stream(luvut);
```
Primitiivien osalta on valmiit Stream-rajapinnat int, boolean, double -tyypeille (tässä IntStream). Olioita käsitellään geneerisellä tavalla, johon pääsemme tuota pikaa. IntStream-rajapinnasta löytyy valmiita toimintoja, joita ei siis enää tarvitse koodaajan itse toteuttaa. Merkittävä asia on siis se, että löytyy paljon toimintoja, joita ei koodaajan enää tarvitse itse toteuttaa, vaan voi keskittyä varsinaisen ohjelmalogiikan kirjoittamiseen.
Streamin avulla käydään läpi kaikki kokoelman alkio ja tehdään joku toiminto, tässä esimerkissä lasketaan kaikki kokonaislukualkio yhteen sum()-funktiolla. Stream vastaa silmukkaa ja sum toimintoa silmukan sisällä. Seuraava esimerkki näyttää miten edellisen esimerkin summan laskenta ja suurimmat luvun etsintä voidaan tehdä käyttäen stream:ia, kunhan stream on ensi luotu.  

```java
summa = luvutStream.sum();
luvutStream.close();
luvutStream = Arrays.stream(luvut);
suurin = luvutStream.max();
luvutStream.close();
```
Valitettavasti stream pitää sulkea ennen seuraavaa operaatiota, jos taustalla oleva tietorakenne on taulukko. Kokoelmaluokkien osalta stream on paljon joustavampi ja kun suurin osa stream-käsitelystä kohdistuu kokoelmiin (List<>), niin keskitymme enemmän niihin.
Vielä esimerkki String-taulukosta, joka toimii myös mallina minkä tahansa oliotaulukon käsittelyyn.
```java
String[] osat = "Hiiri;Punainen;1024;19.99".split(";");
Stream<String> osatStream = Arrays.stream(osat);
long sarakelkm = osatStream.count(); 
osatStream.close();
// HUOM: tässä ei stream tuo lisäarvoa, osat-taulukon size() ja sarakelkm ovat samat
```

###Stream ja toiminnot###
Stream on siis olio'virta' jostain kokoelmaluokasta. Kokeillaan ensin miten merkkijonoja sisältävää listaa voidaan käsitellä streamin avulla. Käytetään seuraavilla esimerkeissä seuraavaa listaa: 
```java
List<String> nimet = List.of("Aku", "Pelle", "Roope", "Iines", "Leenu", "Lupu", "Tiinu", "Mikki", "Minni", "Simo Sisu");
```
Streamin avulla voidaan mm.:
- poimia halutut nimet eli muodostaa uusi stream
- järjestää aakkosjärjestykseen tai mihin tahansa haluttuun järjestykseen merkkijonon sisällön perusteella
- tehdä joku toiminto jokaiselle merkkijonolle (oliolle)
- etsiä joku merkkijono määritellyn kriteerin perusteella tai kysyä löytyykä listalta joku tietty nimi

Tehdään ensin vaikka jokaisen alkion eli tässä tapauksessa nimen tulostaminen. Listan alkioiden käsittely (vaikkapa juurikin tulostaminen) onnistuu aivan hyvin ilman stream:ia, aloitetaan kuitenkin yksinkertaisesta asiasta ja lisätään toimintoja, joita olisi työläs toteuttaa ilman stream-käsitettä. Listasta saadaan stream()-funktiolla kaikki alkiot käsiteltäväksi peräkkäin. Streamin jokainen alkio voidaan 'kuluttaa' käyttämällä foreach()-funktiota,  jolle annetaan parametrina funktio, joka saa itse parametrinaan tässä tapauksessa yhden String-tyyppisen parametrin. Kuluttajafunktio eli Consumer ei palauta mitään ja saa yhden parametrin jonka tyyppi on kokoelmaluokan alkion tyyppi, kuluttajafunktio tekee jotain saamallaan parametrilla, tässä tapauksessa tulostaa sen konsolille.  

```java
class SDemo {
    // Consumer-funktio
    void tulostaNimi(String n) {
        System.out.println("Nimi: " + n);
    }
    // seuraavana koodia, nimilistan tulostukseen streamin avulla
    void esimerkki() {
        // nimet-lista on näkyvillä tässä kohtaa koodia
        nimet.stream().foreach(SDemo::tulostaNimi); 
        // foreach-funktio kutsuu tulostaNimi-funktiota jokaiselle listalta löytävälle nimelle (String)
        // ja parametrina on aina käsiteltävä ('kulutettava') nimi 
    }
}
```
Tämä esimerkki vaatii selityksen, tai vähintään suorituksen debuggerin avulla, jotta toiminto selviää. 
1. luodaan stream nimilistasta stream()-funktiolla
2. Stream sisältää kaikki listan alkiot, jotka ovat String-olioita
3. foreach()-funktio tulee suoritettavaksi jokaiselle oliolle streamissa ja olio (String) välitetään parametrina funktiolle, joka on määritelty foreach()-parametrina (tämä on funktionaalista ohjelmointia)

Koodia saadaan vielä siistittyä ja lyhennettyä paljon. Seuraavana tutkitaan vaihe vaiheelta miten lopulta päädytään käyttämään lambda-lauseita stream-käsittelyssä. Ensin tutustutaan yhteen rajapintaan Consumer<T>, joka on määritelty annotaatiolla @FunctionalInterface. Tämän tyyppinen muuttuja sisältää jonkin funktion arvonaan, Consumer<T> voi sisältää osoitteen funktioon, joka on muotoa void funktionNimi(T t) {}. 

```java
    Consumer<String> nimenTulostusFunktio = SDemo::tulostaNimi;
    // ja nyt funktio voidaan välittää muuttujan kautta, 
    // edellinen esimerkki kirjoitetaan muotoon:
     nimet.stream().foreach(nimenTulostusFunktio);
```
Tämä ei varsinaisesti lyhennä tai paranna koodia, vaan on vain yksi välivaihe matkalla kohti tiiviimpää koodia. Jos koodia kirjoitetaan näin, päädytään tilanteeseen, jossa on funktioita joita käytetään vain yhdessä kohdassa koodia ikään kuin apufunktiona. Tämä on ihan hyvä tapa pilkkoa ongelmat pienempiin osiin, mutta lopputuloksena on paljon pieniä apufunktioita luokassa. Tämän ratkaiseen lammbda-lauseke, joka on nimetön tiiviiseen muotoon kirjoitettu funktiomääritys. 

### Lambda-lauseke ###
Lambda-lauseke muodostuu kolmesta osasta:
1. Parametrit  (Parameter list)
2. Nuoli symboli -> (Arrow token)
3. Toiminnallinen osuus (expression body)
Näiden avulla voidaan täysin määritellä ja kirjoittaa funktio (parametrit, koodi ja paluuarvo), mutta funktiolla ei ole nimeä. Tähän saakka funktiolla (metodi) on aina ollut nimi jotta sitä pystyisi kutsumaan. Jos funktiolta puuttuu nimi, sitä käytetään joko funktiomuuttujan kautta tai sitten funktio kirjoitetaan suoraan käyttökohtaan.

```java
// korvataan tulostaNimi-funktio lambda-lauseella
Consumer<String> nimenTulostusFunktio = (String n) -> { System.out.println("Nimi: " + n); };
nimet.stream().foreach(nimenTulostusFunktio);
```
Tätäkin voidaan tiivistää, jos on vain yksi parametrien tyypit voidaan jättää pois, koska kääntäjä tietää joka tapauksessa aika käyttötilanteen mukaan mitä parametrien tyypit ovat. Jos on vain yksi parametri, ei parametrisulkuja tarvita. Jos koodi sisältää vain yhden lauseen, ei tarvita lohkosulkuja. Näin ollen voidaan vielä koodia lyhentää:
```java
// lambda-lauseketta
Consumer<String> nimenTulostusFunktio = n -> System.out.println("Nimi: " + n);
nimet.stream().foreach(nimenTulostusFunktio);
```
Funktiomuuttuja nimenTulostusFunktio sisältää nyt osoitteen funktioon, jolla tulostetaan merkkijono konsolille. Ihan samoin kuin muutenkin parametrien välityksessä, ei tarvitse käyttää apumuuttujaa, vaan koodin voi kirjoittaa näin: 
```java
// tämä on lopulta normaali tapa kirjoittaa ja käyttää lambda-lauseita streamien yhteydessä
nimet.stream().foreach( n -> System.out.println("Nimi: " + n));
```
Vielä muutaman huomio lambda-lausekkeista:
- nuolimerkintä -> on pakollinen, sen perusteella kääntäjä tunnistaa lambda-lausekkeen
- parametrilistan sulkuja ei tarvita, jos parametreja on yksi. Muutoin sulut on pakolliset.
- parametrien tyyppejä ei tarvitse koskaan kirjoittaa.
- jos funktion sisältää vain yhden lauseen, ei lohkosulkuja tarvita.
- return-lausetta ei tarvitse kirjoittaa, jos on vain yksi lause.

```java
// esimerkkejä
(int a) -> { return a + 42;} // tässä turhia osia
a -> a + 42;    // tämä tiiviimpi, mutta sama kuin edellinen rivi
() -> true; // ei parametrejä, sulut tarvitaan
(x, y) -> x < y ? x: y; 
```

Lisää lambda-lausekkeista löytyy mm.:
- https://www.w3schools.com/java/java_lambda.asp
- https://dev.java/learn/lambdas/first-lambdas/
- https://www.baeldung.com/java-8-lambda-expressions-tips

### Takaisin stream-käsittelyyn ###
Olemme nyt oppineet sekä Lambda-lauseen syntaksin sekä streamin perustoiminnon eli jonkin kokoelman läpikäynnin. Seuraavaksi tutkitaan miten streamia ja lambdoja voidaan hyödyntää tehokkaammin datan käsittelyssä.
Seuraavissa esimerkeissä käytetään listaa, joka sisältää tuotteita:
```java
List<Product> products = new ArrayList<>();
public void fillSampleList() {
    products.add(new Product(1, "Mouse", 10, "Accessory"));
    products.add(new Product(2, "SSD disk", 199.99, "Accessory"));
    products.add(new Product(3, "Laptop XYZ", 1000, "Computer"));
    products.add(new Product(4, "Levoton X1", 10, "Computer"));
    products.add(new Product(5, "Power cable", 20, "Accessory"));
    products.add(new Product(6, "Is Java ancient?", 29.90, "Book"));
}
```
Esimerkin aineisto on tarkoituksella pieni, sen avulla on helppo hahmottaa esimerkkejä ja lopputulokset.
Ensimmäisenä tehdään poiminta, lasketaan montako tietokonetta on listalla. Tämä on helppo tehdä perinteisellä tavalla:
```java
int lkm = 0;
for (Product product : products) {
    if(product.type().equals("Computer")) {
        lkm++;
    }
}
```
Jos sama tehdään streamin avulla, päästään paljon vähemmillä koodiriveillä. Sama streamilla:
```java
long lkm = products.stream().filter(p -> p.type().equals("Computer")).count();
```
Esimerkissä stream() palauttaa 'oliovirran', jonka avulla käydään jokainen tuote läpi. Tämä stram suodatetaan eli poimitaan sieltä filter()-funktion avulla osan tuotteista ja näistä valituista tulee uusi stream, jonka alkioiden lukumäärä lasketaan count()-funktiolla. Funktiolle filter() annetaan suodatusehto lambda-lausekkeella. Suodatusehto voi monimutkainen kunhan lambda-lauseke palauttaa boolean-arvon (true == otetaan mukaan, false == ei oteta mukaan). Filter-funktioita voi laittaa peräkkäin useita tai sitten yhdistää ehtoja samaan lambda-lauseeseen.

```java
// funktiot voidaan kirjoittaa omille riveille selvyyden vuoksi
lkm = products.stream()
    .filter(p -> p.type().equals("Computer"))
    .filter(p -> p.price() > 100.0)
    .count();
// nämä molemmat esimerkit tuottavat sama lopputuloksen
lkm = products.stream()
    .filter(p -> p.type().equals("Computer") && p.price() > 100.0)
    .count();
```

Filter-funktiolla parametrina annettava lambda on predikaattifunktio, se palauttaa boolean-arvon ja on tyypiltään rajapinta 
```java
@FunctionalInterface
public interface Predicate<T> {
        public boolean test(T t);
}
```
Onneksi näitä rajapintoja ei tarvitse jatkuvasti aktiivisesti muistaa, lambda-lausekkeiden käyttö on sen verran luontevaa, että niiden kirjoittamiseen tulee automaatio.
Streamia käsitellään seuraavan tyyppisillä toiminnoilla
**Intermediate** streamin läpikäynti jatkuu funktio jälkeen
- filter()   
- map()  
- peek()

**Terminal** päättää streamin suorituksen
- forEach()  
- count()  
- sum() 
- average()   
- min()   
- max()  
- collect()

**Terminal short-circuit** päättää  suorituksen riippuen käsiteltävästä datasta
- findFirst()  
- findAny()  
- anyMatch()  
- allMatch()  
- noneMatch()



<!-- 
```java
import java.util.Arrays;
import java.util.List;
import java.util.function.IntPredicate;
import java.util.function.Predicate;
import java.util.stream.*;
```

johdatus funktionaaliseen ohjelmointiin esimerkin avulla.
lambda on anonyymi funktio, jossa syntaksia on vielä tiivistetty
Luokka, joka sisältää jonkin listan esimerkiksi tuotteita
- ensin tavallisina funktioina poimiKalliit ja poimiPunaiset ==> kovakoodattu ratkaisu
- seuraavana sisäinen toteutus niin, että valinta on omana funktiona
- funktio-osoitin ja miten se toimii
- toteutus niin, että valintafunktion voi välittää poiminta-funktiolle
- java.util.function-paketti ja Predicate
- edellisen toteutus prodikaatin avulla, ensin funktiona ja sitten käyttäen lambda-syntaksia
- muita: consumer, supplier -->



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