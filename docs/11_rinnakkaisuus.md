---
title: 🔀 Rinnakkaisuus
layout: default
nav_order: 11
permalink: /rinnakkaisuus/
search_exclude: true
nav_exclude: false
---

# Rinnakkaisuus

Tähän saakka kaikki kursseilla tehdyt sovellukset ovat käynnistyneet main-metodin ensimmäisestä lauseesta ja suoritus on edennyt lause kerrallaan kunnes main-metodi on suoritettu kokonaan. Jokaisella hetkellä on suorituksessa vain yksi sovelluksen kohta. 
On mahdollista, että sovelluksen (prosessin) sisällä on useita samaan aikaan suorituksessa olevia koodinosia, tällöin puhutaan rinnakkaisuudesta.
Rinnakkaisuuden toteutukseen Javassa on käytetty Thread-luokkaa (Säie). On olemassa myös 'kehittyneempiä' tapoja rinnakkaisuuden hallintaan, mutta kaikissa tilanteissa alimmaisena käsitteenä on Thread. 

Miksi rinnakkaisuutta tarvitaan? Yksi syy on suorituskyky, rinnakkain toimivien säikeiden avulla saadaan prosessori paremmin hyödynnettyä sovelluksen suoritukseen. Toinen aika suoraviivainen tarve löytyy vaikka web-sovelluksien toteutuksesta. Sovellus käsittelee selaimelta tulevia pyyntöjä (esim. HTTP-protokollan GET). Sovelluksessa toteutetaan yksittäisten pyyntöjen käsittely ja varsinainen suoritusympäristö käsittelee samanaikaisesti rinnakkain selaimilta tulevia pyyntöjä. Rinnakkaisuuteen liittyy myös käsite asynkronisuus. Yleensä sillä tarkoitetaan metodin kutsumista niin, että ei käädää odottamaan metodin suorituksen päättymistä, vaan kutsuva koodi jatkaa suoritustaan ja mahdollinen paluuarvo käsitellään myöhemmin. Tämänkin taustalla on säikeet joihin tutustumme seuraavana, selvitellään rinnakkaisuuteen liittyviä sarjallistamisasioita ja poissulkemisongelmaa sekä lyhyt katsaus uusiin piirteisiin Javan rinnakkaisuudessa.

Ihan ensimmäisenä tarvitaan joku sopiva esimerkkitoiminta, jonka avulla rinnakkaisuutta ja siihen liittyviä asioida voi havainnollistaa koodin avulla. Yksi helppo ja selkeä koodi olkoon luokka, jolta voi pyytää yksilöllisiä numeroita vaikka tuotenumeroiden generointiin. Tästä päädymme pieneen sivuaskeleeseen eli suunnittelumalleihin (Design Patterns).

### Design Patterns - suunnittelumallit 
Sovelluksian tehtäessä tulee usein esille samankaltaisia ongelmia ja tilanteita. Joka kerta ei tarvitse miettiä ratkaisua alusta saakka uudelleen, vaan voidaan käyttää suunnittelumalleja eli Design Patterneja apua. Yleisesti käytetään englanninkielistä termiä Design Pattern, vaikka tässä tapauksessa suomennos suunnittelumalli on hyvä. Olio-ohjelmointia on tehty piitkäään ja 90-luvulla neljän kopla (Gang of Four, GoF) kirjoitti kirjan **Design Patterns: Elements of Reusable Object-Oriented Software** ja siitä saakka on Design Pattern-käsite ollut mukana sovelluskehitysprojekteissa. 

Tässä ei ole tarkoitus käydä enempää läpi erilaisia suunnittelumalleja, vaan ne jää omatoimisen opiskelun varaan. Seuraavissa koodiesimerkeissä käytetty numerogeneraattori toteuttaa Singleton (Ainokainen) suunnittelumallin. Singleton on olio, joita on olemassa vain ja ainoastaan yksi ilmentymä koodin suorituksen aikana ja tyypillisesti Singleton on käytössä ja näkyvissä koko sovellukselle.

IDGenerator-luokan koodi:

```java
public class IDGenerator {
    private static int id = 0;
    private static final IDGenerator idg = new IDGenerator();

    private IDGenerator() { } // private, ei siis voi käyttää luokan ulkopuolelta

    public static IDGenerator getIDGenerator() { // tällä pyydetään viittaus ainokaiseen
        return idg;
    }

    public int nextID() {
        return ++id;
    }

    public int getLastId() {
        return id;
    }
}
```
Kun sovelluskoodissa tarvitaan yksilöllinen kokonaisluku, esimerkiksi avaimen generoimiseksi oliolle, voidaan missä tahansa koodissa tehdä se IDGenerator-luokan avulla.

```java
IDGenerator idg = IDGenerator.getIDGenerator();
int id = idg.nextID();
```

Sitten siirrytään takaisin rinnakkaiseen ohjelmointiin ja käytetään tätä luokkaa apuna.

---

### Thread - Säie

Javassa säie on lyhyesti sanottuna metodi (void run()), joka on suorituksessa itsenäisesti samaan aikaan (rinnakkain) muiden säikeiden kanssa. Säikeen luonnissa konstruktorin parametrina annetaan Runnable-tyyppinen olio. Runnable on rajapinta (FunctionalInterface), joten tässäkin voi käyttää lambda-lauseketta. Seuraavana yksinkertainen esimerkki, jossa säie ei tee mitään muuta kuin tulostaa säikeen nimen. Sen avulla on helppo nähdä, että samaan aikaan on suorituksessa useita säikeitä. Jokainen säie voi suorittaa eri metodia, tässä esimerkissä kaikki ovat samoja.

```java
Runnable run = () -> System.out.println("Käynnistetty säie: " + Thread.currentThread().getName());
System.out.println("Pääsäie: " + Thread.currentThread().getName());
Thread t = new Thread(run);
t.start();
for (int i = 0; i < 5; i++) {
    new Thread(run).start();
}
```

Saman voi kirjoittaa lyhyemmin käyttämällä lambda-syntaksia.

```java
// lambda käytössä
System.out.println("Pääsäie: " + Thread.currentThread().getName());
Thread t = new Thread(() -> System.out.println("Käynnistetty säie: " + Thread.currentThread().getName()));
t.start();
for (int i = 0; i < 5; i++) {
    new Thread(run).start();
}
```

Ja jos käytetään luokassa olevaa run()-metodia:

```java
Thread t3 = new Thread(new DemoSäie() );
t3.start();

// luokka joka toteuttaa Runnable-rajapinnan
class DemoSäie implements Runnable {
    @Override
    public void run() {
        System.out.println("Luokka ja säiemetodi: " + Thread.currentThread().getName());
    }
}
```
Usein on tarpeen tietää milloin säie on päättynyt. Säikeen suoritus päättyy, kun run()-metodi on suoritettu tai koodi kaatuu virheeseen. Säie ei ilmoita päättymisestä silloin kun käytetään säikeitä tähän mennessä näkyvien esimerkkien mukaisesti. On olemassa myös toimintomalli, jossa saadaan ilmoitus käynnistävälle koodille säikeen päättymisestä. Muutoin on vaihtoehtona kysyä pollaamalla säikeen tilaa tai 'liittyä' säikeeseen join()-metodilla. Näissä pitää huolehtia mahdollisesta poikkeuksesta. Metodi sleep() aiheuttaa säikeen siirtymisen pois suorituksesta parametrina olevan millisekuntimäärän ajaksi. Pollaavassa versiossa kannattaa odottaa tovi ennen kuin kysyy uudelleen säikeen tilaa isAlive()-metodilla. Pollaus tarkoittaa sitä, että kysytään (poll) säikeen tilaa, koodissa siis aktiivisesti seurataan säikeen suorituksen tilaa. 

```java
while (t3.isAlive()) { // join() on parempi!
    try {
        Thread.sleep(100);
    } catch (InterruptedException e) {
    }
}
System.out.println("Säie 3 päättynyt");
try {
    t2.join();
} catch (InterruptedException e) {
}
System.out.println("Säie 2 päättynyt");
```

Testataan seuraavana miten numeroiden generointi onnistuu useasta eri säikeestä ja toimiiko IDGenerator-luokka kuten halutaan. Sitä varten tehdään uusi luokka IDConsumer:

```java
public class IDConsumer implements Runnable {

    private int counter; // montako kertaan pyydetään uusi ID
    private boolean useDelay; // simuloidaanko kuormaa viiveellä

    public IDConsumer(int counter, boolean useDelay) {
        this.counter = counter;
        this.useDelay = useDelay;
    }

    @Override
    public void run() {
        Random rnd = new Random();
        IDGenerator idg = IDGenerator.getIDGenerator();
        int id = 0; 
        for (int i = 0; i < counter; i++) {
            id = idg.nextID();
            if (useDelay) {
                try {
                    Thread.sleep(rnd.nextInt(50));
                } catch (InterruptedException e) {
                    // just do nothing...
                }
            }
        }
    }
}
```

Nyt kokeillaan ensimmäisen kerran seuraavalla koodilla ja kaikki näyttää olevan kunnossa.

```java
IDConsumer idc1 = new IDConsumer(5, false);
IDConsumer idc2 = new IDConsumer(5, false);
Thread t1 = new Thread(idc1);
Thread t2 = new Thread(idc2);
t1.start();
t2.start();
try {
    t1.join();
    t2.join();
} catch (InterruptedException e) {
}
IDGenerator idg = IDGenerator.getIDGenerator();
// seuraava id pitäisi olla 2 kertaa 5 eli 10
int id = idg.getLastId();
System.out.println("ID: " + id); // tulostaa ID: 10 
```
Todellisuudessa tämä koodi toimii vain vahingossa oikein. Jos lisätään kierrosten lukumäärää, alkaa laskuri tuottaa outoja arvoja. IDGenerator-luokan nextID()-metodi näyttää tekevän vain yhden operaation. Näin ei kuitenkaan ole, vaan suorituksen aikana kokonaisluvun kasvattaminen on monta erillistä käskyä prosessoritasolla. Säikeitä suoritetaan aika aikaviipale kerrallaan (järjestelmän päättämä aika ja prioriteetit vaikuttaa myös). Jos aikaviipale päättyy kesken muuttujan päivityksen ja toinen säie pääsee suoritukseen, osa päivitysoperaatioista 'katoaa'. Tämä riski on aina mahdollista, kun eri säikeistä käsitellään samaa muuttujaa (olion kenttää).

Olemme päätyneet tilanteeseen, josta käytetään termiä Critical Section (kriittinen alue). Critical section on koodia, joka pitää suorittaa säikeessä atomaarisesti niin, ettei muut säikeet pääse suorittamaan samaa koodia tai käsittelemään samaa muuttujaa. Javassa tähän on ollut yksinkertainen ratkaisu olemassa jo aivan ensimmäisestä versiosta saakka ja se on synchronized sanalla toteutettavissa. Synchronized-toiminnolla saadaan lukittua koodilohko tai kokonainen metodi niin, että säie saa suorittaa metodin tai koodilohkon loppuun saakka ilman että mikään muu säie pääsee suorittamaan samaa koodia. 

Koodilohkoa käytettäessä tarvitaan jokin olio lukitukseen. Jokaisessa Java-oliossa on sisäänrakennettu lukko-bitti, joka ei näy mitenkään, vaan se pitää tietää. 
Turvallinen ja toimiva nextID()-metodin toteutus voi olla seuraava:

```java
private static Object mutex = new Object();
public int nextID() {
    synchronized (mutex) {
        return ++id;
     }
}
```

Jos koko metodin koodi halutaan suorittaa synkronoituna, voidaan käyttää lyhennettyä versiota ja koko metodi merkitä synkronoiduksi:

```java
public synchronized int nextID() {
    return ++id;
}
```

Nyt korjattu versio toimii kaikissa tilanteissa oikein. Säikeiden käynnistäminen ei ole vaikeaa, huomattavasti hankalampaa on niiden hallinnointi, löytää sopivat käyttötilanteet ja ymmärtää seuraamukset vaikka yhteisten muuttujien käsittelyn osalta.

Säikeet ovat perusrakenne rinnakkaisuuden toteutuksessa. Valitettavasti ominaisuudet ovat myös rajalliset ja jos säikeen run()-metodille pitäisi välittää parametreja tai sen pitäisi palauttaa arvo, loppuu ominaisuudet kesken. Onneksi on myös edistyneempiä tapoja tehdä rinnakkaisuutta käyttällä Executor-luokkaa hyväksi.  

Tutustu esimerkkikoodiin, jossa on käytetty ExecutorService:ä ja Future-luokkaa:

```java
public class AppExecutor {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        int threadCount = 5;
        ExecutorService executor = Executors.newFixedThreadPool(threadCount);
        List<Callable<Integer>> threads = new ArrayList<>();
        for (int i = 0; i < threadCount; i++) {
            threads.add(new IDConsumerCallable(10));
        }
        List<Future<Integer>> futures = executor.invokeAll(threads);
        IDGenerator idGenerator = IDGenerator.getIDGenerator();
        int id = idGenerator.getLastId();
        System.out.println("ID: " + id);
        id = 0;
        for (Future<Integer> future : futures) {
            id = future.get();
            System.out.println("ID säikeen päättyessä: " + id);
        }
    }
}

class IDConsumerCallable implements Callable<Integer> {

    private int counter = 1000;

    public IDConsumerCallable(int counter) {
        this.counter = counter;
    }

    @Override
    public Integer call() throws Exception {
        IDGenerator idg = IDGenerator.getIDGenerator();
        System.out.println("Callable starting...");
        int id = 0; 
        for (int i = 0; i < counter; i++) {
            id = idg.nextID();
            System.out.println("\t" + this.toString() + " " + id);
        }
        System.out.println(this.toString() + " " + id + " counter: " + counter);
        return id;
    }
}
```

Tämä ei ole kattava kokonaisuus Javan rinnakkaisuudesta, oleellisinta on saada perusteista käsitys ja varsinkin miksi synchronized varattua sanaa pitää käyttää ja miten.
Lisää aiheesta löytyy mm.:
* [dev.java](https://dev.java/learn/new-features/virtual-threads/) 
* [oracle](https://docs.oracle.com/javase/tutorial/essential/concurrency/) 
* [baeldung](https://www.baeldung.com/java-concurrency) 
* [w3schools](https://www.w3schools.com/java/java_threads.asp)

{% include quiz.html %}
