# Verkkosovellus kolmikerrosarkkitehtuurilla

<link href="/styles.css" rel="stylesheet">

[⇦ takaisin kurssin etusivulle](../)

Tällä viikolla tavoitteinamme on rakentaa kolmikerrosarkkitehtuuria noudattava web-sovellus, joka yhdistää tähän mennessä opettelemamme erilliset tietokanta- ja web-teknologiat yhdeksi loogiseksi kokonaisuudeksi.

Jatkat siis tällä viikolla edellisellä viikolla aloittamasi web-projektin kehittämistä ja tarvitset myös aikaisempia shopping list -tietokantaluokkiasi. Mikäli aikaisemmat tehtävät ovat jääneet sinulta kesken, voit hyödyntää tällä viikolla myös kurssin malliratkaisuja, jotka on julkaistu edellisten tehtävien määräaikojen päätyttyä kurssin Teams-kanavalla.


## Sovelluksemme arkkitehtuuri

Sovellusten kehitettävyyden ja ylläpidettävyyden kannalta on tärkeää, että ne noudattavat jotain tiettyä arkkitehtuuria ja että niissä erilliset loogiset kokonaisuudet on toteutettu toisistaan irrallaan. Meidän ostoslistasovelluksessamme noudatamme kolmikerrosarkkitehtuuria ja MVC-mallia:

> *"Ammattilaisten kehittämä sovellus ei ole pelkkä satunnainen kasa koodia, vaan rakentuu valittujen arkkitehtuurimallien ympärille. Arkkitehtuuri auttaa pitämään sovelluksen sisäisen rakenteen loogisena ja helpottaa sovelluksen ylläpidettävyyttä ja jatkokehitettävyyttä.*
>
> *Model-View-Controller (MVC) on perinteinen ohjelmistokehityksen suunnittelumalli, jonka tärkein tehtävä on eriyttää sovelluksen esitys- ja logiikkakerros toisistaan ja delegoida sovelluksen sisäisiä vastuita eri osa-alueille."*
>
> [Hurja.fi, 2020. MVC for dummies: malli, näkymä ja ohjain -arkkitehtuuri web-sovelluksissa](https://www.hurja.fi/blogi/mvc-for-dummies-malli-nakyma-ja-ohjain-arkkitehtuuri-web-sovelluksissa/)

Model-View-Controller -suunnittelumallissa (MVC) sovelluksen eri vastuualueet eriytetään toisistaan sovelluksen sisällä kolmikerrosarkkitehtuurin mukaisesti malleihin (models), näkymiin (views) ja ohjauslogiikkaan (controllers).

Tämä suunnittelumalli on tyypillinen erityisesti olio-ohjelmointiparadigmaa noudattavissa web-sovelluksissa ja suosittelen lukemaan aiheesta blogikirjoituksen ["MVC for dummies: malli, näkymä ja ohjain -arkkitehtuuri web-sovelluksissa" (Hurja, 2020)](https://www.hurja.fi/blogi/mvc-for-dummies-malli-nakyma-ja-ohjain-arkkitehtuuri-web-sovelluksissa/).

Näiden arkkitehtuurimallien mukaisesti sovelluksemme kolme osakokonaisuutta ovat siis:

1. datan tallennuskerros (model: dao, jdbc ja SQLite)
2. käyttöliittymäkerros (view: jsp ja jstl)
3. looginen kerros (controller: servlet)

Seuraavissa kappaleissa ja videoissa käsittelemme jo aikaisemmin toteuttamamme datan tallennuskerroksen tuomisen osaksi web-sovellustamme.


## Projektipohja

Tällä viikolla tarkoituksena on jatkaa web-sovelluksen kehittämistä viime viikolla käyttämääsi projektipohjaan. Mikäli edellinen tehtävä jäi sinulta ratkaisematta tai haluat aloittaa puhtaalta pöydältä, voit kloonata itsellesi uuden kopion [kurssin projektipohjasta](https://github.com/ohjelmointi2/embedded-tomcat-template) edellisen viikon ohjevideoiden mukaisesti. 

💡 *Jos kloonaat projektipohjan uudelleen, nimeä ensin nykyinen projektisi Eclipsessä uudelleen, koska Eclipse-työtilassa ei voi olla kahta samannimistä projektia.*


## DAO- ja Model-luokkien lisääminen projektiin

Olet aikaisemmassa tehtävässä luonut `ShoppingListITem`-luokan, joka mallintaa yksittäisiä tietokannassa olevia rivejä. Olet lisäksi luonut DAO-luokan, jonka avulla pystyt tekemään CRUD-operaatioita tietokantaasi (CRUD = Create, Read, Update, Delete).

Saat valmiit luokat helpoiten käyttöön web-projektissasi kopioimalla luokkien pakettirakenteen web-projektiisi `src/main/java`-hakemiston alle. Mahdollisesti toteuttamasi JUnit-testiluokat puolestaan kuuluvat `src/test/java`-hakemiston alle.

Ohjelmasi hakemistorakenne voi olla luokkien lisäämisen jälkeen esimerkiksi seuraava:

```
pom.xml
src
 ├───main
 │   ├───java
 │   │   ├───database
 │   │   │       JDBCShoppingListItemDao.java
 │   │   │       ShoppingListItemDao.java
 │   │   │       Database.java *
 │   │   │
 │   │   ├───launch
 │   │   │       Main.java
 │   │   │
 │   │   ├───model
 │   │   │       ShoppingListItem.java
 │   │   │
 │   │   └───servlet
 │   │           ShoppingListServlet.java **
 │   │
 │   └───webapp
 │       ├───styles
 │       │       demo.css
 │       │
 │       └───WEB-INF
 │               list.jsp **
 │
 └───test
     └───java
         └───database
                 JDBCShoppingListItemDaoTest.java *

---------------------------------------------------

*  toteutettu vapaaehtoisena tehtävänä
** luodaan tällä harjoituskierroksella
```

**Ympäristömuuttujan lisääminen**

Mikäli toteutit DAO-tehtävän bonus-osuuden ja käytit `JDBCShoppingListItemDao`-luokkasi kanssa `JDBC_DATABASE_URL`-ympäristömuuttujaa, määrittele sama ympäristömuuttuja myös web-projektin `Main`-luokan ympäristömuuttujiin. Eclipsen ympäristömuuttujat ovat luokkakohtaisia ja aikaisempi ympäristömuuttujasi ei ole automaattisesti `Main`-luokan käytettävissä.

Ohjeet muuttujan asettamiseksi löydät myös seuraavalta videolta.


## Video 1: [Tietokantaluokkien tuominen web-sovellukseen](https://web.microsoftstream.com/video/3998be63-0576-44e2-8e05-fb3da6008789) <small>10:33</small>

<iframe width="640" height="360" src="https://web.microsoftstream.com/embed/video/3998be63-0576-44e2-8e05-fb3da6008789?autoplay=false&amp;showinfo=true" allowfullscreen style="border:none;"></iframe>

Tässä videossa lisäämme verkkopalveluumme aikaisemmalla viikolla toteuttamamme tietokantaluokat. Lisäämme `Main`-luokallemme `JDBC_DATABASE_URL`-ympäristömuuttujan, jonka avulla verkkosovellus hyödyntää samaa tietokantaa kuin aikaisempi tekstikäyttöliittymämme.

Tällä videolla esiintyvät lähdekoodit löydät JDBC ja DAO -tehtävien malliratkaisuista Teamsissa.

&nbsp;



## Riippuvuuksien asentaminen

Omien lähdekooditiedostojemme lisäksi tarvitsemme web-projektiimme sen ulkoiset riippuvuudet, eli SQLite-ajurin ja JUnit-testikirjaston. Kuten viime viikon materiaalissa totesimme, projektipohjassa on valmiiksi käytössä Maven-automaatiotyökalu riippuvuuksien hallitsemiseksi. 

Aikaisempien riippuvuuksien ja uuden JSTL-tagikirjaston (JSP Standard Tag Library) asennus sujuu helpoiten lisäämällä ne riippuvuuksina Mavenin hyödyntämään `pom.xml`-tiedostoon.

<!--Toinen vaihtoehto olisi tallentaa riippuvuudet .jar-paketteina (Java Archive), kuten aikaisemmin tällä kurssilla teimme SQLite-kirjaston kanssa.-->


### Riippuvuuksien määrittely pom.xml:ään (Project Object Model)

Tomcat-projektipohjan juurihakemistossa sijaitseva `pom.xml`-projektitiedosto on normaali XML-tiedosto, jota voit muokata esimerkiksi Eclipsen tekstieditorilla. Avatessasi tiedostoa Eclipse saattaa avata sen "Overview"-näkymässä, jolloin voit vaihtaa näkymän klikkaamalla sen alalaidan `pom.xml`-välilehteä [tämän videon mukaisesti](https://javavids.com/video/open-xml-in-pomxml-by-default-in-eclipse).

Tehdessäsi muutoksia ja tallentaessasi tiedoston Eclipsen Maven-lisäosa asentaa automaattisesti uudet riippuvuudet projektiisi.

### Versionumeroiden määritteleminen

Riippuvuuksien versionumerot on tapana määritellä projektitiedostoon `<properties>`-tagin sisään ja itse riippuvuudet `<dependencies>`-tagin sisään. Lisää vihreällä korostetut rivit pom.xml-tiedostoosi properties-tagin sisään:

<pre>
&lt;properties&gt;
    &lt;!-- Tomcatin versionumero --&gt;
    &lt;tomcat.version&gt;8.5.73&lt;/tomcat.version&gt;

    &lt;!-- Javan versionumero --&gt;
    &lt;maven.compiler.target&gt;11&lt;/maven.compiler.target&gt;
    &lt;maven.compiler.source&gt;11&lt;/maven.compiler.source&gt;

    &lt;!-- JUnit-testikirjaston versio --&gt;
    &lt;junit.jupiter.version&gt;5.7.1&lt;/junit.jupiter.version&gt;
<span style="color: darkgreen; font-weight: bold;">
    &lt;!-- lis&auml;&auml; n&auml;m&auml; rivit: --&gt;
    &lt;sqlite.driver.version&gt;3.36.0.3&lt;/sqlite.driver.version&gt;
    &lt;jstl.api.version&gt;1.2&lt;/jstl.api.version&gt;
</span>
    &lt;!-- Projektin merkist&ouml;koodaus --&gt;
    &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
    &lt;project.reporting.outputEncoding&gt;UTF-8&lt;/project.reporting.outputEncoding&gt;
</pre>

Lisäämäsi tagit määrittelevät seuraavat uudet muuttujat versionumeroita varten:

Muuttuja                | Versionumero  | Tarkoitus
------------------------|---------------|----------
`sqlite.driver.version` | 3.36.0.3      | Aikaisemmilta viikoilta tuttu SQLite-ajuri JDBC-kirjastolle
`jstl.api.version`      | 1.2           | JSTL-tagikirjasto

Näitä muuttujia voidaan hyödyntää alempana riippuvuuksia määriteltäessä. Riippuvuudet määritellään `<dependencies>`-tagin sisään, kukin riippuvuus omana `<dependency>`-tagina. Lisää seuraavat plus-merkein korostetut riippuvuudet dependencies-tagin loppuun:


<pre>
&lt;!-- Tiedoston alkuosa j&auml;tetty pois... --&gt;

    &lt;!-- JUnit-testausty&ouml;kalu --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.junit.jupiter&lt;/groupId&gt;
        &lt;artifactId&gt;junit-jupiter&lt;/artifactId&gt;
        &lt;version&gt;${junit.jupiter.version}&lt;/version&gt;
        &lt;scope&gt;test&lt;/scope&gt;
    &lt;/dependency&gt;
<span style="color: darkgreen; font-weight: bold;">
    &lt;!-- lis&auml;&auml; n&auml;m&auml; riippuvuudet (SQLite ja JSTL): --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.xerial&lt;/groupId&gt;
        &lt;artifactId&gt;sqlite-jdbc&lt;/artifactId&gt;
        &lt;version&gt;${sqlite.driver.version}&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;javax.servlet&lt;/groupId&gt;
        &lt;artifactId&gt;jstl&lt;/artifactId&gt;
        &lt;version&gt;${jstl.api.version}&lt;/version&gt;
    &lt;/dependency&gt;
</span>&lt;/dependencies&gt;
</pre>

**Huom!** Esimerkkikoodien vihreiden rivien vasemmassa laidassa olevat plus-merkit (`+`) ovat osa muuttuneita rivejä korostavaa diff-syntaksia, jotka eivät kuulu mukaan pom-tiedostoon. 

Tallennettuasi muutetun `pom.xml`-tiedoston Eclipse käynnistää Maven-pluginin asentaakseen uudet riippuvuudet. Varmuuden vuoksi aina tämän tiedoston muokkaamisen jälkeen kannattaa vielä klikata projektia Eclipsen hakemistopuussa hiiren kakkospainikkeella ja valita [Maven-valikosta kohta "Update Project"](https://stackoverflow.com/a/20547404).


## JSTL (JSP Standard Tag Library)

Dynaamisten ominaisuuksien, kuten ehto- ja toistorakenteiden toteuttaminen JSP-sivuilla onnistuu kätevimmin hyödyntäen edellä projektiimme lisättyä JSTL-kirjastoa. JSTL-kirjaston avulla esimerkiksi ehto- ja toistorakenteet voidaan toteuttaa JSP-sivuille XML-muotoisten tagien avulla (`c:if`- ja `c:forEach`-tagit). JSTL-kirjaston avulla voimme myös turvallisesti näyttää sivulla syötteinä saatuja merkkijonoja, jotka saattavat sisältää haitallista HTML-koodia (`c:out`-tagi).

Katso seuraava video, jossa esitellään tagikirjaston käyttöönotto sekä sen keskeisiä tageja:

**YouTube: [JSTL Tutorial part 2 Core Tags](https://youtu.be/R0EnI9_ZMA0)**

<!--[![JSTL Tutorial part 2 Core Tags](https://img.youtube.com/vi/R0EnI9_ZMA0/hq1.jpg)](https://youtu.be/R0EnI9_ZMA0)-->

> *Tämä video esittelee, miten JSTL tagikirjasto lisätään JSP-sivulle `taglib`-direktiivin avulla. Opit myös käyttämään `c:out` ja `c:forEach` tageja. Video näyttää myös konkreettisesti, miten lista olioita voidaan välittää servletiltä JSP-sivulle ja miten sillä olevat Java-oliot saadaan esitettyä sivulla HTML-muodossa. Video on jatkoa viime viikon videolle [JSTL tutorial part 1](https://youtu.be/KmREMEhj5eE).*


## Video 2: [Tietokantapohjaisen servletin toteuttaminen ja tulosten näyttäminen JSP-sivulla](https://web.microsoftstream.com/video/515b523d-bc9b-4892-a2cf-78e75206e9a9) <small>58:31</small>

Seuraavalla videolla lisäämme verkkopalvelumme tarvitsemat riippuvuudet ohjeen mukaisesti Maven-työkalun avulla. Tietokantaluokat kopioidaan aikaisemmista harjoituksistamme ja kopioinnin onnistuminen varmistetaan yksikkötesteillä.

Lopulta näytämme tietokannasta löytyvät ostoslistan rivit HTML-muodossa JSP-sivulla.

<iframe width="640" height="360" src="https://web.microsoftstream.com/embed/video/515b523d-bc9b-4892-a2cf-78e75206e9a9?autoplay=false&amp;showinfo=true" allowfullscreen style="border:none;"></iframe>

Videolla esitellään kohdassa **15:30** tyypillinen ongelma Tomcatin käynnistämisessä, joka johtuu siitä, että vanha Tomcat-suoritus on edelleen käynnissä taustalla.

Tärkeä aihe web-palvelun suojaamiseksi haitallisilta JavaScript-koodeilta ([Cross Site Scripting, XSS](https://owasp.org/www-community/attacks/xss/)) esitellään videolla kohdassa **44:13**.

💡 *Videolla projektiin lisätään kolme riippuvuutta, joista `org.junit.jupiter` tulee projektipohjan nykyisessä versiossa valmiina. Sitä ei siis tarvitse lisätä enää tämän videon mukaisesti.*

&nbsp;

<!--Videolla muokattavan [pom.xml-tiedoston, ShoppingListServlet-luokan ja list.jsp-tiedoston lähdekoodit löydät täältä](https://gist.github.com/swd1tn002/c2adb55f198846d6f44bf6d96275dead).-->


## Video 3: [JSP-sivujen ehtorakenteet ja "fail silently"-ominaisuus](https://web.microsoftstream.com/video/d4adda6c-9b93-4a0a-a92a-57067f3493fb) <small>31:21</small>

<iframe width="640" height="360" src="https://web.microsoftstream.com/embed/video/d4adda6c-9b93-4a0a-a92a-57067f3493fb?autoplay=false&amp;showinfo=true" allowfullscreen style="border:none;"></iframe>

Tällä videolla toteutamme servletin, joka välittää JSP-sivulle useita attribuutteja. Tutustumme myös `c:if`-ehtorakenteisiin ja JSP-sivujen virheenkäsittelyyn. 

<!--Videolla käsiteltävän [SummerCountdownServlet.java-luokan ja countdown.jsp-sivun löydät täältä](https://gist.github.com/swd1tn002/1a9eac1b32179a8411e6f611ef0f731a).-->

&nbsp;


## Tehtävät

Näissä tehtävissä tarvitset aikaisempina viikkoina toteutettuja tietokantaluokkia. Mikäli tehtävät jäivät sinulta kesken tai et ole tyytyväinen koodisi toimintaan, voit käyttää tehtävän pohjana malliratkaisun lähdekoodeja, jotka julkaistaan kurssin Teams-kanavalla tehtävien määräajan päätyttyä.

**Tehtävät liittyvät vahvasti edellä esitettyihin videoihin, joten videoiden katsominen on erittäin suositeltavaa.**


### Osa 1: Toteuta ostoslistan sisällön hakeva servletti ja sen `doGet`-metodi

Tarvitset ostoslistan esittämistä varten uuden servletin, joka voi löytyä palvelimeltasi esimerkiksi polusta (`/list`). Voit vapaasti valita haluamasi polun, joka määritellään kuten edellisessä tehtävässä, eli esimerkiksi `@WebServlet("/list")`-annotaation avulla. 

Tämän sivun yläosassa esitetyssä esimerkkihakemistorakenteessa tämän servletin nimi on `ShoppingListServlet`, mutta voit nimetä luokan haluamallasi tavalla.

Tarvitset servletissä aikaisemmin toteuttamaasi DAO-luokkaa tuotteiden hakemista ja lisäämistä varten. Lisää servlet-luokkaan tarvittavat `import`-komennot DAO-luokkaa sekä model-luokkaa varten.

`doGet`-metodin on tarkoitus hakea kaikki ostoslistan tuoterivit listana. Sen jälkeen servletin tulee välittää kyseinen lista seuraavassa osassa toteutettavalle JSP-sivulle `setAttribute`-metodin avulla. [Tämä YouTube-video](https://youtu.be/R0EnI9_ZMA0) havainnollistaa listan välittämisen JSP-sivulle sekä listan käyttämisen tagikirjaston avulla.


### Osa 2: Toteuta JSP-sivu ostoslistan sisällön esittämistä varten

Toteuta tietokannasta haettujen ostoslistan tuoterivien näyttämiseksi uusi JSP-sivu. Yllä esimerkkihakemistorakenteessa tämän sivun tiedostonimi on `list.jsp`, mutta voit nimetä tiedoston myös muulla tavalla. Tällä JSP-sivulla tarvitset aikaisemmin asentamaasi **JSTL-kirjastoa**, joka otetaan käyttöön sivulla `taglib`-direktiivin avulla:

```jsp
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
```

Ylempänä sivulta löytyvä video 2 näyttää, miten ostoslista voidaan käydä läpi `c:forEach`-tagin avulla ja miten tuoterivit tulostetaan turvallisesti `c:out`-tagin avulla.

Sivun HTML-rakenteella ei ole tämän tehtävän kannalta suurta merkitystä, kunhan ratkaisusi on järkevää HTML-koodia. Voit näyttää ostoslistan sisällön valintasi mukaan esimerkiksi `<ul>`- ja `<li>`-listaelementeillä ([ohje](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)):

```html
<!-- lista -->
<ul>
    <!-- TODO: Nämä rivit tulee generoida c:forEach- ja c:out-tagien avulla -->
    <li>Milk</li>
    <li>Eggs</li>
</ul>
```

Vaihtoehtoisesti voit luoda `<table>`-taulukkorakenteen esimerkiksi seuraavasti ([ohje](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)):

```html
<!-- taulukko -->
<table>
    <thead>
        <tr><th>Product</th></tr>
    </thead>
    <tbody>
        <!-- TODO: Nämä rivit tulee generoida c:forEach- ja c:out-tagien avulla -->
        <tr><td>Milk</td></tr>
        <tr><td>Eggs</td></tr>
    </tbody>
</table>
```

### Injektioilta suojautuminen (Cross Site Scripting, XSS)

SQL-aiheen yhteydessä käytimme `PreparedStatement`-luokkaa välttääksemme tekstidatan tulkitsemisen SQL-lausekkeina (SQL-injektio). Koska **ostoslistan tuotteet ovat käyttäjien syöttämää dataa, myös ne saattavat sisältää mitä tahansa merkkijonoja**. On siis mahdollista, että käyttäjä kirjoittaa tuotteen nimeen **esimerkiksi HTML- tai JavaScript-koodia**, joka muuttaa sivun sisältöä haitallisesti toisen käyttäjän avatessa sivua. Tästä haavoittuvuudesta käytetään termiä Cross Site Scripting (XSS). Voit lukea aiheesta lisää [Open Web Application Security Project -projektin sivuilla (OWASP)](https://owasp.org/www-community/attacks/xss/).

HTML-koodin yhteydessä onkin erittäin tärkeää huolehtia siitä, että kaikki dynaaminen teksti enkoodataan siten, että esimerkiksi kulmasulkeita `<` ja `>` ei tulkita osaksi HTML-tageja, vaan pelkiksi kirjainmerkeiksi. `c:out`-tagi huolehtii juuri tästä ja muuttaa esimerkiksi `<`-merkin ns. HTML-entiteetiksi `&lt;`, jonka selain tulkitsee aina kirjainmerkiksi.

> *"An HTML entity is a piece of text ("string") that begins with an ampersand (&) and ends with a semicolon (;) . Entities are frequently used to display reserved characters (which would otherwise be interpreted as HTML code), and invisible characters (like non-breaking spaces)."*
>
> MDN web docs. Entity. [https://developer.mozilla.org/en-US/docs/Glossary/Entity](https://developer.mozilla.org/en-US/docs/Glossary/Entity)

Esimerkiksi haitallista koodia sisältävä tuotenimi `"Milk <script>alert('attack!');</script>"` ei siis saa tuottaa HTML-sivulle seuraavaa sisältöä:

<pre class="highlight" style="border: solid red 2px; color: red;"><code>&lt;li&gt;
    Milk <span style="color: red">&lt;script&gt;alert('attack!');&lt;/script&gt;</span>
&lt;/li&gt;</code></pre>

Yllä oleva koodi sisältää sivulle kuulumatonta JavaScriptiä, joka voi huonossa tapauksessa esimerkiksi kaapata käyttäjän istunnon tai suorittaa sivustolla toimenpiteitä käyttäjän nimissä.

Merkkijonot tuleekin aina käsitellä `c:out`-tagin avulla, jolloin niissä mahdollisesti olevat HTML-rakenteet muutetaan erikoismerkeiksi, jotka selain osaa tulkita tavallisena tekstinä:

```html
<li>
    <c:out value="${ item.getTitle() }" />
</li>
```

```html
<li>
    Milk &lt;script&gt;alert(&#039;attack!&#039;);&lt;/script&gt;
</li>
```

Selain tulkitsee yllä olevasta koodista `c:out`-tagin ulkopuoliset `<li>`-elementit HTML-koodina, mutta `c:out`-tagin tuottama `&lt;` näytetään sivulla tavallisena turvallisena "pienempi kuin"-merkkinä.

Lue myös tarvittaessa keskustelu aiheesta ["what exactly does the &lt;c:out&gt; do?"](https://stackoverflow.com/q/291031)


### Osa 3: Toteuta lomake ja `doPost`-metodi uuden rivin lisäämiseksi ostoslistalle

Viimeiseksi tarvitsemme vielä lomakkeen uusien tuoterivien lisäämiseksi listalle, sekä käsittelijän, joka vastaanottaa lomakkeen tiedot ja kutsuu dao-luokan tallennusoperaatiota.

Voit lisätä lomakkeen samalle JSP-sivulle, jolla näytät myös tuotelistan. Lomakkeen HTML-koodiksi sopii esimerkiksi seuraava koodinpätkä:

```html
<form method="post">
    <input name="title" type="text" required placeholder="type item here..." autofocus /> 
    <input type="submit" value="Add to list" />
</form>
```

Valmis lomake näyttää suurin piirtein seuraavalta:

<form method="post" action="http://localhost:8080/list">
    <fieldset>
        <legend>Esimerkki lomakkeesta:</legend>
        <input name="title" type="text" required placeholder="type item here..." /> 
        <input type="submit" value="Add to list" />
    </fieldset>
</form>

<!--Esimerkin `form`-tagilla ei ole `action`-attribuuttia, joten sen lähettäminen tekee `post`-tyyppisen HTTP-pyynnön samaan osoitteeseen, josta sivu on ladattu. Voit tarvittaessa määritellä eri osoitteen lisäämällä `action`-attribuutin.-->

Kun lomake lähetetään, HTTP-pyynnön mukana välitetään käyttäjän kirjoittama teksti. Kunkin tekstikentän sisältö on palvelimella käsiteltävissä sillä nimellä, joka on määritetty kyseisen tekstikentän `name`-attribuutin arvoksi:

```html
<input name="title" />
```

Yllä tekstikentän nimeksi on asetettu on `"title"`, joten siihen syötetty teksti saadaan servletissä luettua esimerkiksi seuraavasti:

```java
String itemTitle = req.getParameter("title");
```

Voit lukea lisää HTML-lomakkeiden lähettämisestä artikkelista ["Sending form data" (MDN web docs)](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data).

### Lomaketietojen käsitteleminen palvelimella

Lomakkeen lähetyksen jälkeen se käsitellään palvelimella joko `doGet` tai `doPost`-käsittelijämetodilla. Käytettävä metodi riippuu siitä, mikä HTTP-metodi on määritetty sivun lomakkeelle. Tässä tehtävässä lomake lähetetään post-metodilla:

```html
<form method="post">
    <!-- lomakkeen sisältö -->
</form>
```

Jos et määrittele lomakkeelle valinnaista `action`-attribuuttia, lähetetään pyyntö samaan osoitteeseen josta kyseinen HTML-sivu ladattiin. Meidän tapauksessamme emme määrittele action-attribuuttia, joten pyyntö päätyy samalle servletille, mutta tällä kertaa `doPost`-metodiin.

Lisää lomakkeella lähetettyjen tietojen käsittelemiseksi omaan servlettiisi uusi `doPost`-metodi, joka lukee parametrina lähetetyn tuotenimen ja lisää tietokantaan uuden tuoterivin kyseisellä nimellä. Huom! Noudata MVC-mallia ja hyödynnä DAO-luokkaa, äläkä tee tietokantaoperaatiota servlet-luokassasi:

```java
public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
    // todo: hae tuotteen  nimi req-objektilta
    // todo: käytä tuotenimeä luodaksesi uuden ShoppingListItem-olion
    // todo: tallenna luomasi olio tietokantaan DAO-luokkasi avulla
}
```

### Bonus: uudelleenohjaus POST-pyynnön jälkeen (Post/Redirect/Get)

Onnistuneen POST-tyyppisen lomakkeen lähetyksen jälkeen on aina hyvä tehdä uudelleenohjaus, eli pyytää selainta lataamaan sivu GET-pyynnöllä. Tällä tavoin käyttäjä ei voi esimerkiksi vahingossa käyttää selaimensa päivitä-toimintoa tai sivuhistoriaa ja toistaa POST-tyyppistä kutsua, joka saattaisi luoda esimerkiksi tietokantaan saman rivin uudelleen:

> "*The post / redirect / get pattern or PRG pattern is a development approach that prevents duplicate content when submitting forms and provides a more intuitive user interface. The post-redirect-get pattern allows you to set bookmarks, share URLs, and reload a website that queries and sends form data - without creating duplicate content or near duplicate content.*"
>
> *Ryte Wiki. Post-Redirect-Get. [https://en.ryte.com/wiki/Post-Redirect-Get](https://en.ryte.com/wiki/Post-Redirect-Get)*


POST-pyyntöihin vastaamista uudelleenohjauksilla kutsutaan osuvasti nimellä ["Post/Redirect/Get"](https://en.wikipedia.org/wiki/Post/Redirect/Get)". Selaimen uudelleenohjauksen voi käytännössä toteuttaa servletissä `HttpServletResponse`-olion `sendRedirect`-metodilla seuraavasti:

```java
resp.sendRedirect("/polku/johon/ohjataan");
```

Käytännössä `"/polku/johon/ohjataan"` on tyypillisesti sama polku, joka on määritetty servletin osoitteeksi `@WebServlet`-annotaatiolla.

---

### Loppusanat

Olemme nyt jatkokehittäneet aikaisemmin toteuttamamme komentorivikäyttöliittymällä toimivan logiikan web-sovellukseksi. Ohjelmiston tarkoituksenmukainen rakenne on mahdollistanut koodin hyödyntämisen erilaisissa käyttötarkoituksissa.

Jotta ohjelma olisi lopulta hyödyllinen ostoslistasovellus, siihen tulisi vielä lisätä lukuisia ominaisuuksia, kuten tuoterivin poistaminen. Tutustumme hieman myöhemmin myös `doDelete`-metodiin, jonka avulla toteutamme rivien poistamisen ostoslistalta.


<script src="/scripts.js"></script>