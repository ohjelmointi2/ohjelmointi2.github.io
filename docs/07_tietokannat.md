---
title: 💾 Tietokannat
layout: default
nav_order: 7
permalink: /tietokannat/
---


# Tietokantaohjelmointi
{: .no_toc }

Tällä viikolla opettelemme ensin muodostamaan yhteyden tietokantaan Java-ohjelmasta käsin ja tekemään yksinkertaisia CRUD-toimenpiteitä (Create, Read, Update & Delete). Tutustumme mm. käsitteisiin JDBC ja PreparedStatement. 
{: .fs-6 }

---

## Tällä sivulla:
{: .no_toc .text-delta }

* Sisällysluettelo
{:toc}

## JDBC – Java Database Connectivity

Javan standardikirjastoon määritelty JDBC (Java Database Connectivity) -ohjelmointirajapinta mahdollistaa Java-sovellusten yhdistämisen eri tyyppisiin SQL-tietokantoihin ja erilaisten kyselyiden sekä päivitysten tekemisen Java-koodista käsin.
 
```mermaid
flowchart TD
    A[Sovellus] -->B(JDBC API/Driver)
    B --> C[Tietokanta]
```

JDBC ei rajoita sitä, minkä SQL-pohjaisten tietokantojen kanssa sitä voidaan käyttää, vaan eri tietokantoja voidaan hyödyntää käyttämällä niille toteutettuja valmiita ajureita. Sillä ei siis Java-koodisi näkökulmasta ole eroa, käytätkö tietokantana esimerkiksi [MySQL](https://www.mysql.com/)-, [PostgreSQL](https://www.postgresql.org/)- vai [SQLite](https://www.sqlite.org/index.html)-tyyppistä tietokantaa. Tällä kurssilla hyödynnämme oletuksena **SQLite**-tietokantoja niiden tiedostopohjaisuuden ja helppokäyttöisyyden vuoksi.


## SQLite

SQLite-tietokanta on paikallinen muisti- tai tiedostopohjainen tietokanta, joka ei vaadi erillistä palvelinta, vaan se voidaan "sulauttaa" osaksi omaa sovellustamme:

> *"In contrast to many other database management systems, SQLite is not a client–server database engine. Rather, it is embedded into the end program."*
>
> *"SQLite is a popular choice as embedded database software for local/client storage in application software such as web browsers. It is arguably the most widely deployed database engine, as it is used today by several widespread browsers, operating systems, and embedded systems (such as mobile phones), among others. SQLite has bindings to many programming languages.*"
>
> [https://en.wikipedia.org/wiki/SQLite](https://en.wikipedia.org/wiki/SQLite)

SQLite toimii Java-ohjelman näkökulmasta samalla tavalla kuin erilliset tietokantapalvelimet. Myös SQL-kyselyt ovat pääosin samat, esimerkiksi `SELECT id, name FROM Person`.

SQLiten kanssa emme tarvitse erillistä tietokantapalvelinta, joten meidän ei tarvitse huolehtia verkkoyhteyksistä tai salasanoista. SQLite ei myöskään edellytä asennuksia, vaan riittää, että lisäämme SQLite-ajurin Java-projektiimme. Tämän viikon oppimistavoitteisiin kuuluvatkin ajurin käyttöönotto, tietokantaan yhdistäminen sekä ensimmäiset Java-koodista tehtävät SQL-kyselyt.

Toteutamme tällä kurssilla tietokantalogiikan Java-koodeissamme siten, että samat koodirivit toimisivat esim. MySQL tai MariaDB –tietokantoja hyödyntäen. Tietokannan vaihtaminen olisi myöhemmin Java-koodin kannalta suoraviivaista: sinun tulisi vain vaihtaa uusi tietokanta-ajuri ja yhteysosoitteet, joita käsitellään seuraavissa kappaleissa.

<!-- Suorituskyvyn puolesta SQLite ei olisi hyvä valinta julkisen web-järjestelmän tietokannaksi. SQLite soveltuu kuitenkin erinomaisesti moniin erilaisiin tarpeisiin ja esimerkiksi lukuisat mobiilisovellukset ja nettiselaimet käyttävät SQLite:ä paikallisena tietokantanaan. -->


[PowerPoint-esitys on ladattavissa tästä](/kalvot/jdbc.pdf).




## JDBC:n SQLite-ajuri

Tietokannan käyttämiseksi Javasta käsin tarvitsemme erillisen JDBC-ajurin. Erilliset Java-kirjastot jaellaan tyypillisesti `.jar`-tiedostoina (Java Archive), jotka asennetaan pääsääntöisesti automaatiotyökalujen avulla. Suosituimpia automaatiotyökaluja Javalle ovat [Gradle](https://gradle.org/) ja [Maven](https://maven.apache.org/). Automaatiotyökalujen avulla monimutkaistenkin riippuvuuksien hallinta on kohtuullisen yksinkertaista ja myös VS Codessä on hyvät integraatiota automaatiotyökalujen hyödyntämiseksi.

Jos teen projektin ilman hallintatyökaluja, on tässä ohjeet siihen. Kurssilla käytetään pääsääntöisesti Gradle-projekteja joten ohjeistuksessa on myös miten riippuvuuksien avulla saadaan tietokanta-ajurit ladattua projektin käyttöön.


**Ajurin tallentaminen**

Siirry Maven-repositorioon osoitteeseen [https://mvnrepository.com/artifact/org.xerial/sqlite-jdbc/latest](https://mvnrepository.com/artifact/org.xerial/sqlite-jdbc/latest). Tallenna ajuri itsellesi linkistä "Jar (x MB)":

![Lataa ajuri JAR-linkkiä klikkaamalla](/img/maven-sqlite-jdbc.png)


**Ajurin lisääminen VS Code-projektiin**

Ajurin käyttöönotto projektissasi edellyttää sen lisäämistä projektin "build path":iin. Build path on lista sijainneista, joissa ohjelmasi käyttämät Java-luokat sijaitsevat. Ajurin lisääminen onnistuu helpoiten seuraavasti:

1. luo projektiisi uusi hakemisto, esim. `lib`
2. siirrä edellä tallentamasi `sqlite-jdbc-x.y.z.jar`-tiedosto luomaasi uuteen hakemistoon
3. lisää lib-hakemisto projektisi "build path":iin [tämän Stack Overflow -viestin mukaisesti](https://stackoverflow.com/a/23420543).

⚠️ **Huom!** Jar-tiedostot sisältävät suoritettavaa ohjelmakoodia, joten niiden kanssa tulee huomioida tietoturva, aivan kuten muidenkin suoritettavien ohjelmien kanssa. Jar-paketteja ei kannata ladata tuntemattomista lähteistä. Tunnettujen ja laajasti käytettyjen pakettien käyttäminen voi myös olla turvallisempaa kuin heikommin tunnettujen tai vähäisessä käytössä olevien. Lisätietoja löydät esimerkiksi [Google-haulla "Is Maven Safe?"](https://www.google.com/search?q=is+maven+safe)


Voit ladata tietokantatiedoston itsellesi tästä: [shoppingList.sqlite](https://github.com/ohjelmointi2/ohjelmointi2.github.io/blob/main/sql/shoppingList.sqlite?raw=true). Tallenna tiedosto johonkin hakemistoon, jonka osoite on helposti kopioitavissa Java-koodiisi (esim. `C:\sqlite\shoppingList.sqlite` tai `/home/omanimi/sqlite/shoppingList.sqlite`).

**Ajurin lisääminen VS Code -projektiin**

VS Code:ssa Java-projektissa on valmiina lib-hakemisto. VS Coden ohjeiden mukaan lataa ajuri ja kopioi/siirrä se projektin lib-hakemistoon.

---

**Ajurin lisääminen Gradle -projektiin**

Gradle, Maven ja muut projektinhallintatyökalut ovat tehty helpottamaan mm. kirjastojen (riippuvuuksien) latauksia ja hallinnointia. Riittää että on määritelty mitä kirjastoja tai ajureita sovellus tarvitsee ja kirjastot latautuvat build:in yhteydessä ilman että niitä tarvitsee itse asentaa projektiin.

Mavenin repositorysta löytyy määritykset, miten SQLite tai MySQL -ajurit lisätään projektiin. Siirry ensin mavenin [repositoryyn](https://mvnrepository.com/) ja kirjoita hakukenttään esimerkiksi sqlite, valitse ensimmäinen SQLite JDBC. Seuraavana valitse version, ota vaikka uusin ja sitten valitse käyttämäsi projektityyppi (Maven Gradle, Gradle (Short), Gradle (Kotlin), jne...) ja lisää määritys gradle.build-tiedostoon dependencies-kohtaan. Tiedosto voi tämän jälkeen käyttää vaikka tältä (vain osa tiedostosta näkyvillä):

```groovy
dependencies {
    // Use JUnit Jupiter for testing.
    testImplementation("org.junit.jupiter:junit-jupiter:5.9.2")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")

    // SQLite driver: https://mvnrepository.com/artifact/org.xerial/sqlite-jdbc
    implementation 'org.xerial:sqlite-jdbc:3.43.0.0'

    // MySQL driver: https://mvnrepository.com/artifact/com.mysql/mysql-connector-j
    implementation 'com.mysql:mysql-connector-j:8.1.0'
}
```

Esimerkissä on mukana myös MySQL-ajuri. Samalla tavalla pystyt ottamaan käyttöön minkä tahansa muun tietokannan ajurit, esimerkiksi SQL Server, Oracle, MariaDB, PostgreSQL jne.


### SQLite-tietokannan käyttäminen Javan ulkopuolelta (valinnainen)

Tietokannan käyttäminen Java-ohjelmasi ulkopuolella ei ole tällä kurssilla välttämätöntä, mutta kyselyitä on helpompi suunnitella ja kokeilla ennen niiden koodaamista osaksi ohjelmaa. Tietokannan luonti on myös kätevämpää tehdä erillisellä työkalulla, eikä itse Java-ohjelmassa.

[Erilaisten graafisten käyttöliittymien](https://www.google.com/search?q=sqlite+gui) (gui, Graphical User Interface) lisäksi SQLite:lle on saatavissa SQLite:n oma komentorivityökalu.

Voit ladata itsellesi kyseisen `sqlite3.exe`-komentorivityökalun osoitteesta [https://sqlite.org/download.html](https://sqlite.org/download.html). Työkalut löytyvät esimerkiksi Windowsille otsikon "Precompiled Binaries for Windows" alta (sqlite-tools-win32-x86-VERSIO.zip). Pura `sqlite3.exe`-tiedosto zip-paketista esimerkiksi samaan kansioon tietokantasi kanssa. Jos käytät eri käyttöjärjestelmää, sovella ohjeita oman käyttöjärjestelmäsi työkaluversion mukaisesti.

[Tällä sivulla](/tietokannat/sqlite-cli/) on esimerkki SQLite-komentorivityökalun käyttämisestä tämän kurssin tehtävässä käytettävän tietokannan kanssa. Lisää ohjeita löydät SQLiten omilta sivuilta osoitteesta [https://sqlite.org/cli.html](https://sqlite.org/cli.html).

[PowerPoint-esitys on ladattavissa tästä](/kalvot/jdbc.pdf).


## SQLite-tietokannan yhteysosoite

Muodostaessasi yhteyden tietokantaan `DriverManager.getConnection(url)`-metodin avulla, tulee sinun antaa parametrina merkkijono, joka on tietokanta-ajurikohtainen "connection url". JDBC-yhteysosoitteet alkavat aina etuliitteellä `jdbc:` ja ajurin nimellä. Ajurin nimen jälkeen kirjoitetaan kaksoispiste, ja sen jälkeen esimerkiksi tietokannan sijainti levyllä (esim. SQLite) tai verkossa (esim. MySQL).

SQLite-tietokannalle yhteysosoite on käyttöjärjestelmästä riippuen joko muodossa `jdbc:sqlite:C:\polku\tietokanta.sqlite` tai `jdbc:sqlite:/users/me/database.sqlite`. Kun kirjoitat SQLite-osoitteen Java-merkkijonoksi, huomaa, että kenoviivat (`\`) ovat [Javassa varattu erikoismerkeille](https://docs.oracle.com/javase/tutorial/java/data/characters.html). Tavallisen kenoviivan tuottamiseksi merkkijonoon kirjoitetaan siksi kaksi kenoviivaa (`"\\"`).

Java-koodissasi yhteys tietokantaan `C:\sqlite\shoppingList.sqlite` määritellään siis käytännössä esimerkiksi näin:

```java
private static final String JDBC_URL = "jdbc:sqlite:C:\\sqlite\\shoppingList.sqlite";
```

MySQL-tietokantaan yhdistettäisiin vastaavasti esim. osoitteella `"jdbc:mysql://127.0.0.1:3306/shoppinglist"`. Tällöin sinun tulee myös [lisätä projektiisi MySQL-ajuri](https://www.mysql.com/products/connector/), aivan kuten lisäsimme aikaisemmin SQLite-ajurin.

Kovakoodatut arvot, kuten yllä oleva yhteysosoite, eivät edusta hyvää ohjelmointityyliä, joten tyypillisesti sovellus lukee yhteysosoitteen joko ympäristömuuttujasta tai konfiguraatiotiedostosta. Esimerkki ympäristömuuttujan käytöstä Java-koodissa:

```java
// luetaan asetus käyttöjärjestelmän ympäristömuuttujasta
private static final String JDBC_URL = System.getenv("JDBC_DATABASE_URL");
```





Älä koskaan muodosta SQL-kyselyitä käsin yhdistelemällä merkkijonoja, koska kyselyn teko merkkijonoja yhdistelemällä aiheuttaa mm. tietoturvaongelmia:

{: .warning :}
> Seuraavassa esimerkissä on SQL-haavoittuvuus. `name` saattaa sisältää haitallista SQL-koodia, joka päätyy osaksi kyselyä!
> ```java
> PreparedStatement statement = connection.prepareStatement(
>   "SELECT * FROM Artist WHERE Name = \"" + name + "\"");
> ```

Kun kyselyissä tarvitaan ajonaikaisesti muodostettavia parametreja, kuten id tai nimi, ne tulee asettaa paikalleen PreparedStatement-luokan metodeilla. PreparedStatement-luokan SQL-kyselyihin parametrien tilalle kirjoitetaan kysymysmerkit (?), joiden kohdille asetetaan set-metodeilla arvot:

{: .esim :}
> ```java
> PreparedStatement statement = connection.prepareStatement("SELECT * FROM Artist WHERE Name = ?");
> statement.setString(1, name);
> ```

### Esimerkki tietokantayhteyden luomisesta ja sulkemisesta
{: .esim :}
```java

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class MusiikkiTietokantaSoitinOhjelma {
    public static void main(String[] args) throws Exception {
        // 1. OTA YHTEYS TIETOKANTAAN
        String JDBC_URLI = "jdbc:sqlite:data/Chinook_Sqlite.sqlite";
        // 2. MUODOSTA SQL KYSELY
        Connection yhteys = DriverManager.getConnection(JDBC_URLI);
        // 3. SUORITA SQL KYSELY
        PreparedStatement sqlLause = yhteys.prepareStatement("SELECT * FROM Artist");
        // 4. KERÄÄ KYSELYN TULOKSET
        ResultSet haunTulokset = sqlLause.executeQuery();
        // 5. KAY LAPI KAIKKI TULOKSET
        while (haunTulokset.next()) {
            String artistinNimi = haunTulokset.getString("Name");
            System.out.println(artistinNimi);
        }
        // 6. SULJE KAIKKI YHTEYDET
        haunTulokset.close();
        sqlLause.close();
        yhteys.close();
    }
}

```

### Esimerkki SQL-injektiosta

Alla on esimerkki URL-osoitteesta, jolla voisi päästä järjestelmään ilman oikeaa salasanaa, mikäli kysely tehdään suoraan merkkijonoja yhdistelemällä ilman `PreparedStatement`-luokkaa:

```
https://esimerkki.fi/login?username=admin'--&password=salasana
```

Tässä tapauksessa `'--` katkaisee alkuperäisen SQL-lauseen ja kommentoi loput pois.


### SQL-kyselyiden tietoturva

Huomaa, että SQL-kyselyjen muodostaminen merkkijonoja yhdistelemällä aiheuttaa mm. tietoturvaongelmia, kuten alla oleva esimerkki havainnollistaa:

[![Exploits of a Mom](https://imgs.xkcd.com/comics/exploits_of_a_mom.png)](https://xkcd.com/327/)

*Kuva: Randall Munroe. Exploits of a Mom. [https://xkcd.com/327/](https://xkcd.com/327/). [CC BY-NC 2.5](https://creativecommons.org/licenses/by-nc/2.5/)*

Muista siis käyttää oppimateriaaleissa esiteltyä `PreparedStatement`-luokkaa aina muodostaessasi kyselyitä, joihin syötetään dynaamisesti parametreja!




## Yhteyksien sulkeminen

> *"When you are done with using your Connection, you need to explicitly close it by calling its close() method in order to release any other database resources (cursors, handles, etc.) the connection may be holding on to.*
>
> *Actually, the safe pattern in Java is to close your ResultSet, Statement, and Connection (in that order) in a finally block when you are done with them."*
>
> Pascal Thivent. [Closing database connections in Java. StackOverflow.com](https://stackoverflow.com/questions/2225221/closing-database-connections-in-java/2225275#2225275)

Yhteyksien sulkeminen kannattaa tehdä `try`-lohkon jälkeisessä `finally`-lohkossa, jotta yhteydet tulevat varmasti suljetuksi, vaikka koodissa olisi tapahtunut poikkeus. Sulkeminen voidaan tehdä esimerkiksi seuraavasti:

```java
try {
   // tietokantaoperaatiot

} catch (SQLException e) {
   // poikkeusten käsittely

} finally {
   if (connection != null) {
         try {
            connection.close();
         } catch (SQLException e) {
            e.printStackTrace();
         }
   }

   if (statement != null) {
         try {
            statement.close();
         } catch (SQLException e) {
            e.printStackTrace();
         }
   }

   if (result != null) {
         try {
            result.close();
         } catch (SQLException e) {
            e.printStackTrace();
         }
   }
}
```

Resurssien sulkeminen tulee tehdä kaikissa niissä metodeissa, joissa käytät tietokantayhteyksiä. Yllä olevan **koodin toistaminen monessa eri paikassa ei ole tyylikästä**, joten harkitse erillisen metodin toteuttamista, esimerkiksi seuraavasti:

```java
try {
   // tietokantaoperaatiot

} catch (SQLException e) {
   // poikkeusten käsittely

} finally {
   // toteuta itsellesi closeAll-metodi, ja kutsu sitä eri metodeista:
   closeAll(connection, statement, result);
}
```

Toinen vaihtoehto yhteyksien sulkemisen suoraviivaistamiseksi on Javan Try with resources -syntaksi, jota käsitellään seuraavaksi.

### Try with resources (valinnainen)

Javassa on olemassa lisäksi [try-with-resources](https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html) -niminen rakenne, joka huolehtii automaattisesti siinä määriteltyjen resurssien sulkemisesta, eli niiden `close()`-metodin kutsumisesta lohkon jälkeen.

Rakenne on syntaktisesti hieman muita tuntemiamme rakenteita hankalampi hahmottaa eikä se ole osa ohjelmointi 2:n oppimistavoitteita. Voit halutessasi lukea lisää try-with-resources -rakenteesta ja katsoa siihen liittyvät esimerkit [tällä erillisellä sivulla](/tietokannat/try-with-resources/).


## Lisämateriaali

[Jenkov.com](https://jenkov.com/tutorials/jdbc/index.html) -palvelussa on laaja tutoriaali JDBC-teknologioista ja se käsittelee kattavasti tietokantojen Javasta käyttämiseksi tarvittavat toimenpiteet. Tutoriaali itsessään käyttää H2-tietokantaa, mutta ei tietokanta-ajurin luokan nimeä ja yhteysosoitetta lukuun ottamatta poikkea SQLite:n käytöstä:

[https://jenkov.com/tutorials/jdbc/index.html](https://jenkov.com/tutorials/jdbc/index.html)

Jenkov.com:in tutoriaalissa H2-tietokannan ajuri ladataan kirjoittamalla koodirivi `Class.forName("org.h2.Driver");`. Ajurin lataus manuaalisesti ei nykyään enää ole tarpeellista, jos ajurista on tarpeeksi uusi versio, mutta vastaava rivi SQLite-tietokannan ajurin lataamiseksi on:

```java
Class.forName("org.sqlite.JDBC");
```
## INSERT-, UPDATE- ja DELETE-lauseet PreparedStatementilla (Pankkitili)

CRUD-operaatioista:

- **INSERT** = luo uusi rivi (Create)  
- **UPDATE** = päivittää olemassa olevaa riviä (Update)  
- **DELETE** = poistaa rivin (Delete)  

Näitä kutsutaan usein **DML-lauseiksi** (Data Manipulation Language). JDBC:ssä ne suoritetaan yleensä `PreparedStatement`-olion avulla metodilla `executeUpdate()`, joka palauttaa **päivitettyjen rivien lukumäärän**.

Alla olevissa esimerkeissä käytämme taulua **Pankkitili**, jossa on:

- `tilinumero` – pankkitilin numero, tyyppi `TEXT` (Javassa `String`)  
- `saldo` – pankkitilin saldo, tyyppi `REAL` (Javassa `double`)  

Taulu voisi esimerkiksi olla luotu seuraavasti:

<div class="code-example">
  <button class="copy-button" type="button" onclick="kopioiKoodi('code-sql-pankkitili')">Kopioi koodi</button>
  <pre class="line-numbers"><code id="code-sql-pankkitili" class="language-sql">
CREATE TABLE Pankkitili (
    tilinumero TEXT PRIMARY KEY,
    saldo REAL NOT NULL
);
  </code></pre>
</div>

### Miksi PreparedStatement myös INSERT/UPDATE/DELETE-lauseissa?

Sama periaate kuin SELECT-kyselyissä:

- **Kyselyä ei rakenneta merkkijonoja yhdistelemällä**, vaan SQL-lauseessa käytetään **kysymysmerkkejä (?)** parametreille.  
- Arvot asetetaan erikseen `setString`, `setDouble` jne. -metodeilla.  
- Tämä:
  - estää **SQL-injektiota**,  
  - hoitaa **tyyppimuunnokset** puolestasi,  
  - mahdollistaa tietokanta-ajurille kyselyn optimoinnin.

---

### INSERT – uuden pankkitilin lisääminen

Seuraava esimerkki lisää uuden pankkitilin tietokantaan:

{: .esim }
> Esimerkki pankkitilin lisäämisestä `PreparedStatement`-luokan avulla.

<div class="code-example">
  <button class="copy-button" type="button" onclick="kopioiKoodi('code-insert-1')">Kopioi koodi</button>
  <pre class="line-numbers"><code id="code-insert-1" class="language-java">
<span class="token-keyword">import</span> <span class="token-type">java.sql.Connection</span>;
<span class="token-keyword">import</span> <span class="token-type">java.sql.DriverManager</span>;
<span class="token-keyword">import</span> <span class="token-type">java.sql.PreparedStatement</span>;

<span class="token-keyword">public class</span> <span class="token-type">PankkitiliLisaysEsimerkki</span> {

    <span class="token-keyword">public static void</span> <span class="token-function">main</span>(<span class="token-type">String</span>[] <span class="token-var">args</span>) <span class="token-keyword">throws</span> <span class="token-type">Exception</span> {
        <span class="token-comment">// 1. Muodosta yhteys tietokantaan</span>
        <span class="token-type">String</span> <span class="token-var">JDBC_URLI</span> = <span class="token-string">"jdbc:sqlite:data/pankki.sqlite"</span>;
        <span class="token-type">Connection</span> <span class="token-var">yhteys</span> = <span class="token-type">DriverManager</span>.getConnection(<span class="token-var">JDBC_URLI</span>);

        <span class="token-comment">// 2. Muodosta INSERT SQL -lause, jossa käytetään parametreja (?)</span>
        <span class="token-type">String</span> <span class="token-var">sql</span> = <span class="token-string">"INSERT INTO Pankkitili (tilinumero, saldo) VALUES (?, ?)"</span>;
        <span class="token-type">PreparedStatement</span> <span class="token-var">lause</span> = <span class="token-var">yhteys</span>.prepareStatement(<span class="token-var">sql</span>);

        <span class="token-comment">// 3. Aseta parametriarvot PreparedStatementiin</span>
        <span class="token-type">String</span> <span class="token-var">uusiTilinumero</span> = <span class="token-string">"FI11 1234 5600 0007"</span>;
        <span class="token-type">double</span> <span class="token-var">alkuSaldo</span> = <span class="token-number">1000.00</span>;

        <span class="token-var">lause</span>.setString(<span class="token-number">1</span>, <span class="token-var">uusiTilinumero</span>); <span class="token-comment">// 1. parametri: tilinumero</span>
        <span class="token-var">lause</span>.setDouble(<span class="token-number">2</span>, <span class="token-var">alkuSaldo</span>);      <span class="token-comment">// 2. parametri: saldo</span>

        <span class="token-comment">// 4. Suorita INSERT-lause</span>
        <span class="token-type">int</span> <span class="token-var">paivitetytRivit</span> = <span class="token-var">lause</span>.executeUpdate();
        <span class="token-type">System</span>.out.println(<span class="token-string">"Lisättiin rivejä: "</span> + <span class="token-var">paivitetytRivit</span>);

        <span class="token-comment">// 5. Sulje resurssit</span>
        <span class="token-var">lause</span>.close();
        <span class="token-var">yhteys</span>.close();
    }
}
  </code></pre>
</div>

**Teoriaa INSERT-esimerkistä**

- `INSERT INTO Pankkitili (tilinumero, saldo) VALUES (?, ?)`  
  - SQL-lauseessa ei vielä ole arvoja, vain paikat arvoille (`?`).  
- `lause.setString(1, uusiTilinumero)`  
  - Asettaa **ensimmäisen** `?`-kohdan arvoksi tilinumeron (`String`). Indeksointi alkaa numerosta 1.  
- `lause.setDouble(2, alkuSaldo)`  
  - Asettaa **toisen** `?`-kohdan arvoksi saldon (`double`).  
- `executeUpdate()`  
  - Palauttaa lisättyjen rivien lukumäärän (tyypillisesti 1, jos yksi tili lisättiin).

---

### UPDATE – pankkitilin saldon muuttaminen

Seuraava esimerkki **päivittää pankkitilin saldon** tilinumeron perusteella:

{: .esim }
> Esimerkki pankkitilin saldon päivittämisestä.

<div class="code-example">
  <button class="copy-button" type="button" onclick="kopioiKoodi('code-update-1')">Kopioi koodi</button>
  <pre class="line-numbers"><code id="code-update-1" class="language-java">
<span class="token-keyword">import</span> <span class="token-type">java.sql.Connection</span>;
<span class="token-keyword">import</span> <span class="token-type">java.sql.DriverManager</span>;
<span class="token-keyword">import</span> <span class="token-type">java.sql.PreparedStatement</span>;

<span class="token-keyword">public class</span> <span class="token-type">PankkitiliPaivitysEsimerkki</span> {

    <span class="token-keyword">public static void</span> <span class="token-function">main</span>(<span class="token-type">String</span>[] <span class="token-var">args</span>) <span class="token-keyword">throws</span> <span class="token-type">Exception</span> {
        <span class="token-comment">// 1. Muodosta yhteys tietokantaan</span>
        <span class="token-type">String</span> <span class="token-var">JDBC_URLI</span> = <span class="token-string">"jdbc:sqlite:data/pankki.sqlite"</span>;
        <span class="token-type">Connection</span> <span class="token-var">yhteys</span> = <span class="token-type">DriverManager</span>.getConnection(<span class="token-var">JDBC_URLI</span>);

        <span class="token-comment">// 2. Muodosta UPDATE SQL -lause</span>
        <span class="token-type">String</span> <span class="token-var">sql</span> = <span class="token-string">"UPDATE Pankkitili SET saldo = ? WHERE tilinumero = ?"</span>;
        <span class="token-type">PreparedStatement</span> <span class="token-var">lause</span> = <span class="token-var">yhteys</span>.prepareStatement(<span class="token-var">sql</span>);

        <span class="token-comment">// 3. Aseta parametriarvot</span>
        <span class="token-type">String</span> <span class="token-var">muokattavaTilinumero</span> = <span class="token-string">"FI11 1234 5600 0007"</span>;
        <span class="token-type">double</span> <span class="token-var">uusiSaldo</span> = <span class="token-number">1500.50</span>;

        <span class="token-var">lause</span>.setDouble(<span class="token-number">1</span>, <span class="token-var">uusiSaldo</span>);            <span class="token-comment">// 1. parametri: uusi saldo</span>
        <span class="token-var">lause</span>.setString(<span class="token-number">2</span>, <span class="token-var">muokattavaTilinumero</span>); <span class="token-comment">// 2. parametri: tilinumero</span>

        <span class="token-comment">// 4. Suorita UPDATE-lause</span>
        <span class="token-type">int</span> <span class="token-var">paivitetytRivit</span> = <span class="token-var">lause</span>.executeUpdate();
        <span class="token-type">System</span>.out.println(<span class="token-string">"Päivitettiin rivejä: "</span> + <span class="token-var">paivitetytRivit</span>);

        <span class="token-comment">// 5. Sulje resurssit</span>
        <span class="token-var">lause</span>.close();
        <span class="token-var">yhteys</span>.close();
    }
}
  </code></pre>
</div>

**Teoriaa UPDATE-esimerkistä**

- `UPDATE Pankkitili SET saldo = ? WHERE tilinumero = ?`  
  - Päivittää **vain ne rivit**, joiden `tilinumero` vastaa toista parametria.  
- Parametrien järjestys on tärkeä:
  - 1. `?` → `saldo` → `setDouble(1, uusiSaldo)`  
  - 2. `?` → `tilinumero` → `setString(2, muokattavaTilinumero)`  
- Jos `paivitetytRivit` on 0, mikään rivi ei vastannut ehtoa (tilinumeroa ei löytynyt).

---

### UPDATE – saldon kasvattaminen/alentaminen (esim. tilitapahtuma)

Usein halutaan **lisätä tai vähentää saldoa**, ei vain asettaa sitä kiinteäksi arvoksi. Tämä voidaan tehdä SQL:ssä käyttämällä nykyistä arvoa:

{: .esim }
> Esimerkki saldon muuttamisesta suhteessa nykyiseen saldoon.

<div class="code-example">
  <button class="copy-button" type="button" onclick="kopioiKoodi('code-update-2')">Kopioi koodi</button>
  <pre class="line-numbers"><code id="code-update-2" class="language-java">
<span class="token-type">String</span> <span class="token-var">sql</span> = <span class="token-string">"UPDATE Pankkitili SET saldo = saldo + ? WHERE tilinumero = ?"</span>;
<span class="token-type">PreparedStatement</span> <span class="token-var">lause</span> = <span class="token-var">yhteys</span>.prepareStatement(<span class="token-var">sql</span>);

<span class="token-type">double</span> <span class="token-var">summa</span> = <span class="token-number">-50.00</span>; <span class="token-comment">// miinus = vähennetään, plus = lisätään</span>
<span class="token-type">String</span> <span class="token-var">tilinumero</span> = <span class="token-string">"FI11 1234 5600 0007"</span>;

<span class="token-var">lause</span>.setDouble(<span class="token-number">1</span>, <span class="token-var">summa</span>);
<span class="token-var">lause</span>.setString(<span class="token-number">2</span>, <span class="token-var">tilinumero</span>);

<span class="token-type">int</span> <span class="token-var">paivitetytRivit</span> = <span class="token-var">lause</span>.executeUpdate();
  </code></pre>
</div>

Tässä:

- `saldo = saldo + ?`  
  - käyttää **nykyistä saldoa** ja lisää siihen parametrin arvon (voi olla positiivinen tai negatiivinen).  
- Tätä mallia käytetään tyypillisesti **tilitapahtumien** kirjauksessa.

---

### DELETE – pankkitilin poistaminen

DELETE-lause poistaa rivejä taulusta. Yleensä **poistetaan avaimen** (esim. tilinumero) perusteella:

{: .warning }
> DELETE-lauseiden kanssa kannattaa olla erityisen varovainen.  
> Unohdettu `WHERE`-ehto poistaa **kaikki rivit** taulusta!

{: .esim }
> Esimerkki pankkitilin poistamisesta tietokannasta.

<div class="code-example">
  <button class="copy-button" type="button" onclick="kopioiKoodi('code-delete-1')">Kopioi koodi</button>
  <pre class="line-numbers"><code id="code-delete-1" class="language-java">
<span class="token-keyword">import</span> <span class="token-type">java.sql.Connection</span>;
<span class="token-keyword">import</span> <span class="token-type">java.sql.DriverManager</span>;
<span class="token-keyword">import</span> <span class="token-type">java.sql.PreparedStatement</span>;

<span class="token-keyword">public class</span> <span class="token-type">PankkitiliPoistoEsimerkki</span> {

    <span class="token-keyword">public static void</span> <span class="token-function">main</span>(<span class="token-type">String</span>[] <span class="token-var">args</span>) <span class="token-keyword">throws</span> <span class="token-type">Exception</span> {
        <span class="token-comment">// 1. Muodosta yhteys tietokantaan</span>
        <span class="token-type">String</span> <span class="token-var">JDBC_URLI</span> = <span class="token-string">"jdbc:sqlite:data/pankki.sqlite"</span>;
        <span class="token-type">Connection</span> <span class="token-var">yhteys</span> = <span class="token-type">DriverManager</span>.getConnection(<span class="token-var">JDBC_URLI</span>);

        <span class="token-comment">// 2. Muodosta DELETE SQL -lause</span>
        <span class="token-type">String</span> <span class="token-var">sql</span> = <span class="token-string">"DELETE FROM Pankkitili WHERE tilinumero = ?"</span>;
        <span class="token-type">PreparedStatement</span> <span class="token-var">lause</span> = <span class="token-var">yhteys</span>.prepareStatement(<span class="token-var">sql</span>);

        <span class="token-comment">// 3. Aseta poistettavan tilin tilinumero</span>
        <span class="token-type">String</span> <span class="token-var">poistettavaTilinumero</span> = <span class="token-string">"FI11 1234 5600 0007"</span>;
        <span class="token-var">lause</span>.setString(<span class="token-number">1</span>, <span class="token-var">poistettavaTilinumero</span>);

        <span class="token-comment">// 4. Suorita DELETE-lause</span>
        <span class="token-type">int</span> <span class="token-var">poistetutRivit</span> = <span class="token-var">lause</span>.executeUpdate();
        <span class="token-type">System</span>.out.println(<span class="token-string">"Poistettiin rivejä: "</span> + <span class="token-var">poistetutRivit</span>);

        <span class="token-comment">// 5. Sulje resurssit</span>
        <span class="token-var">lause</span>.close();
        <span class="token-var">yhteys</span>.close();
    }
}
  </code></pre>
</div>

**Teoriaa DELETE-esimerkistä**

- `DELETE FROM Pankkitili WHERE tilinumero = ?`  
  - Poistaa vain ne rivit, joiden `tilinumero` vastaa parametria.  
- `executeUpdate()` palauttaa poistettujen rivien lukumäärän.  
- Pankkisovelluksissa tietoja ei usein poisteta oikeasti, vaan käytetään esimerkiksi **"aktiivinen"/"suljettu"** -statusta. Tällöin käytetään `UPDATE`-lausetta poistamisen sijaan.

---

### Yhteenveto: INSERT / UPDATE / DELETE PreparedStatementilla

- Käytä aina **`PreparedStatement`-luokkaa** myös INSERT-, UPDATE- ja DELETE-lauseissa.  
- Kirjoita SQL-lauseeseen **?-merkit** parametreille ja aseta arvot `setXxx`-metodeilla.  
- Kutsu **`executeUpdate()`**:
  - palauttaa lisättyjen, päivitettyjen tai poistettujen rivien määrän.  
- Muista sulkea `PreparedStatement` ja `Connection` kuten sivun aiemmissa esimerkeissä on näytetty (`close()` tai try-with-resources).

---

<!-- Yksinkertainen copy-paste -toiminnallisuus: ei sisällä rivinumeroita,
     koska kopiointi tapahtuu suoraan &lt;code&gt;-elementin tekstistä. -->

<style>
.code-example .token-keyword { color: #d73a49; }
.code-example .token-type { color: #005cc5; }
.code-example .token-var { color: #24292e; }
.code-example .token-string { color: #032f62; }
.code-example .token-number { color: #005cc5; }
.code-example .token-comment { color: #6a737d; font-style: italic; }
</style>

<script>
function kopioiKoodi(id) {
  var codeElement = document.getElementById(id);
  if (!codeElement) return;

  var text = codeElement.innerText || codeElement.textContent;
  navigator.clipboard.writeText(text).then(function() {
    console.log("Koodi kopioitu leikepöydälle.");
  }, function(err) {
    console.error("Koodin kopiointi epäonnistui:", err);
  });
}
</script>






Jenkov.com:in tutoriaalin lisäksi myös Oraclella on [kattava oppimateriaali](https://docs.oracle.com/javase/tutorial/jdbc/basics/index.html) JDBC:n opetteluun: [https://docs.oracle.com/javase/tutorial/jdbc/basics/index.html](https://docs.oracle.com/javase/tutorial/jdbc/basics/index.html)

Hyviä ohjeita löytyy myös YouTubesta sekä Googlettamalla tarkemmin yksittäisiä JDBC-aiheita.

**HUOM!** Varsinainen tehtävä on GitHub Classroom:ssa kuten muutkin tämän kurssin tehtävät.
