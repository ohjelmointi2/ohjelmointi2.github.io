# Ajax, JSON ja JavaScript

<link href="/styles.css" rel="stylesheet">

[⇦ takaisin kurssin etusivulle](../)


Tämän viikon tehtävissä käytetään Javan lisäksi JavaScriptiä. Vaikka JavaScript muistuttaa nimeltään ja syntaksiltaan monilta osin Javaa, ovat ne kaksi täysin eri ohjelmointikieltä. Tämän viikon tavoitteena ei ole oppia itse JavaScriptiä, vaan tutustua siihen, miten web-sovelluksissa voidaan hyödyntää selainpäässä suoritettavaa JavaScript-koodia käyttöliittymän päivittämiseksi ilman sivulatauksia.



## Tämän osion tavoitteet

JavaScript-ohjelmointi, sivujen rakentaminen HTML-elementteinä ja elementtien ulkoasun määrittely CSS-tyyleillä ovat erittäin laajoja aiheita, joita käsitellään muilla kursseilla. Pyrimmekin tällä kurssilla minimoimaan sivun rakenteeseen ja ulkoasuun liittyvät aiheet, kuten HTML:n ja CSS:n. Sen sijaan tavoitteenamme on tutustua selaimen ja palvelimen väliseen tiedonsiirtoon ja siihen, miten voimme tehdä JavaScriptin avulla hyvin pienimuotoisia palvelinkutsuja sekä muutoksia sivurakenteeseen.

> *"AJAX stands for Asynchronous JavaScript And XML. In a nutshell, it is the use of the XMLHttpRequest object to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files. AJAX’s most appealing characteristic is its "asynchronous" nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page.*"
>
> [What's AJAX?](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started) [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/MDN/About/contributors.txt). [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

Ammattimaisessa web-kehityksessä JavaScript-ohjelmointiin käytetään erilaisia ohjelmistokehyksiä tai kirjastoja, kuten [React](https://reactjs.org/). Tällä kurssilla hyödynnämme kuitenkin ainoastaan selainten sisäänrakennettuja ominaisuuksia.



## Sovellusarkkitehtuurit: SPA ja MPA

Web-sovelluksia voidaan rakentaa hyvin erilaisilla arkkitehtuureilla. Tomcat, servletit ja JSP-sivut rakennetaan tyypillisesti [asiakas-palvelin-arkkitehtuurilla (client-server)](https://www.google.com/search?q=client+server+architecture), jossa sovellus ja kaikki siihen liittyvä data sijaitsevat palvelimella, jolle asiakas (selain) tekee pyyntöjä. Palvelin suorittaa pyynnön täyttämiseksi tarvittavan logiikan ja muodostaa HTML-sivuja, jotka asiakas (selain), näyttää renderöitynä käyttäjälle.

On olemassa myös muita tapoja rakentaa web-sovelluksia ja jakaa niitä osiin. Toinen tyypillinen arkkitehtuuri on ns. Single Page Application eli SPA. SPA-sovelluksissa osa sovelluslogiikasta suoritetaan käyttäjän selaimessa JavaScript-koodina, joka kommunikoi tarvittaessa taustapalvelimen kanssa. SPA-sovelluksissa selaimessa toimiva koodi vastaa tyypillisesti käyttöliittymästä ja palvelin datasta, joten palvelimen sijasta HTML-rakenteet muodostetaan selaimessa. Selaimen ja palvelimen välillä välitetään tyypillisesti JSON- tai XML-muotoista dataa ja harvemmin valmiita HTML-rakenteita.

Voit halutessasi perehtyä MPA- ja SPA-ohjelmistoarkkitehtuureihin syvemmin artikkelilla ["Single-page application vs. multiple-page application" (Neoteric, 2016)](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58) tai videolla ["SPAs vs MPAs/MVC - Are Single Page Apps always better?" (Academin, 2017)](https://youtu.be/F_BYg2QGsC0).

&nbsp;



## Koneluettavat rajapinnat, REST ja JSON (valinnainen)

Sovelluslogiikan sijaitessa käyttäjän selaimessa, kohdistuu selaimen ja palvelimen väliseen tiedonsiirtoon erilaisia tarpeita. HTML-sivurakenteen sijasta JavaScript-koodissa halutaankin tyypillisesti käsitellä dataa olioina eikä HTML-elementteinä. Tätä tarkoitusta varten on kehitetty helposti koneluettava [JSON-tiedostomuoto (JavaScript Object Notation)](https://www.w3schools.com/js/js_json_intro.asp) sekä vakiintuneita tapoja JSON-vastausten hakemiseksi palvelimilta.

Voit halutessasi katsoa seuraavat videot, joka käsittelevät tiedonsiirron peruskäsitteitä sekä REST-suunnitteluperiaatteita, joiden mukaisesti sovellukset vaihtavat usein tietoa koneluettavassa muodossa:

**[WebConcepts: REST API concepts and examples](https://youtu.be/7YcW25PHnAA)** (valinnainen)

[![WebConcepts: REST API concepts and examples](https://img.youtube.com/vi/7YcW25PHnAA/hq1.jpg)](https://youtu.be/7YcW25PHnAA)

&nbsp;

**[Traversy Media: What Is A RESTful API? Explanation of REST & HTTP](https://youtu.be/Q-BpqyOT3a8)** (valinnainen)

[![Traversy Media: What Is A RESTful API? Explanation of REST & HTTP](https://img.youtube.com/vi/Q-BpqyOT3a8/hq3.jpg)](https://youtu.be/Q-BpqyOT3a8)

&nbsp;



## Tehtävä

Kuten johdannossa jo todettiin, tämän viikon tehtävissä käytetään eri ohjelmointikieltä kuin aikaisemmilla viikoilla. Samalla sivuamme kokonaan uusia käsitteisiin, kuten asynkronista ohjelmointia ja tapahtumankuuntelijoita. Älä lannistu, mikäli aiheet eivät täysin aukea tämän tehtävän puitteissa. 

Tehtävä koostuu useammasta osasta, joiden tuloksena edellisillä viikoilla aloittamaasi ostoslistasovellukseen syntyy uusi Ajax-pohjainen ominaisuus ostoslistan tuoterivien poistamiseksi.

Poisto-ominaisuuden toteutus koostuu seuraavista vaiheista:

1. kunkin ostoslistan tuoterivin yhteyteen lisätään painike, jonka klikkaaminen kutsuu JavaScript-funktiota
1. JS-funktio tekee `DELETE`-tyyppisen Ajax-pyynnön palvelimelle poistaakseen halutun rivin
1. Servlet käsittelee poistopyynnön uudessa `doDelete`-metodissa ja poistaa pyydetyn tuoterivin tietokannasta
1. JavaScript-funktio poistaa tuotteen HTML-sivulta ilman, että sivua ladataan uudelleen

Tehtävänannossa hyödynnetään ainoastaan JavaScriptin standardikirjastoa, mutta voit halutessasi toteuttaa omat harjoituksesi esimerkiksi [jQuery-kirjaston](https://jquery.com/) tai [Reactin](https://reactjs.org/) avulla. Näihin ei kuitenkaan tarjota tukea kurssin puolesta. Valmiin koodin muokkaaminen on myös sallittua.


### Esimerkkitoteutus

Tästä tehtävästä on julkaistu esimerkkitoteutus [https://shoppinglist-ajax.herokuapp.com/list](https://shoppinglist-ajax.herokuapp.com/list), jonka tutkiminen [selaimen kehittäjätyökaluilla](https://developer.chrome.com/docs/devtools/overview/) saattaa auttaa tehtävän hahmottamisessa. Esimerkkitoteutus toimii [Heroku-palvelun](https://www.heroku.com/) ilmaisilla resursseilla, joten sen käynnistyminen lepotilasta voi kestää hetken.


### Osa 1 / 4: painike tuotteiden poistamiseksi

Lisää JSP-sivupohjaasi jokaisen tuoterivin kohdalle uusi painike kyseisen tuotteen poistamiseksi ostoslistalta. Painike voi olla toteutettu esimerkiksi `<button>`-elementtinä, mutta voit halutessasi käyttää myös muita elementtejä:

```html
<button>Remove</button>
```

Lisää seuraavaksi painikkeelle `onclick`-käsittelijä, joka kutsuu `removeProduct`-funktiota tuoterivin poistamiseksi. Jos toteutit tuotelistauksen `<li>`-elementeillä, tulos voi näyttää seuraavalta:

```html
<li>
    Milk

    <!-- Painike, jota klikattaessa kutsutaan removeProduct-funktiota: -->
    <button onclick="removeProduct(7)">Remove</button>
</li>

```

Yllä olevassa esimerkkikoodissa painikkeen painaminen käynnistää `removeProduct`-funktion kutsun, ja antaa sille esimerkin vuoksi parametrina kovakoodatun luvun 7. Tässä tapauksessa haluamme oikeasti välittää funktiolle poistettavan rivin id:n, joka voidaan lisätä `ShoppingListItem`-luokan id:n avulla. Kirjoita siis edellisiltä viikoilta tuttu JSP expression language -lauseke (`${ }`) funktiokutsun sisään:

```html
<button onclick="removeProduct(${ item.getId() })">Remove</button>
```

Huomaa että yllä olevassa koodinpätkässä `item.getId()` on Javaa, ja se korvataan metodin palauttamalla numerolla jo *palvelimella*. `removeProduct()` puolestaan on JavaScriptiä, ja se suoritetaan *selaimessa* elementtiä klikattaessa. Huomaa myös, että omassa koodissasi ShoppingListItem-olio ei välttämättä ole samannimisessä muuttujassa kuin tässä esimerkissä.

Jos muutoksesi toimivat oikein, niiden jälkeen [selaimen lähdekoodinäkymässä](https://neilpatel.com/blog/how-to-read-source-code/) jokaisen ostoslistan rivin kohdalla näkyy funktio oikean parametrin kanssa, esimerkiksi seuraavasti:

```html
<ul>
    <li>
        Milk
        <button onclick="removeProduct(7)">Remove</button>
    </li>
    <li>
        Eggs
        <button onclick="removeProduct(8)">Remove</button>
    </li>
</ul>
```

Lisäyksen jälkeen sivusi pitäisi näyttää esimerkiksi tältä:

![Poistonapit lisätty](remove-button.jpg)

*Mikäli haluat perehtyä onclick-attribuuttiin tarkemmin, voit perehtyä niihin [W3Schools-sivustolla](https://www.w3schools.com/jsref/event_onclick.asp) tai videolla [JavaScript Tutorial For Beginners #40 - The onClick Event](https://youtu.be/XQEfWd1lh4Q)*


### Osa 2 / 4: JavaScript-koodi

Kun olet toteuttanut painikkeen ja `onclick`-attribuutin, täytyy sivulle lisätä `removeProduct`-funktion varsinainen koodi. JavaScript-koodi annetaan tässä tehtävässä valmiina, koska kurssin oppimistavoitteet rajoittuvat Java- ja JSP-osioihin:

```javascript
async function removeProduct(productId) {
    let success = await removeFromServer(productId);

    if (success) {
        removeFromPage(productId);
    }
}

async function removeFromServer(productId) {
    let response = await fetch(`?id=${productId}`, { method: 'DELETE' });

    if (response.status === 200) {
        return true;
    } else {
        alert(`Ajax call failed. Please check the console. Error code ${response.status}.`);
        console.log(response);
        return false;
    }
}

function removeFromPage(productId) {
    let elementId = `product-${productId}`;
    let element = document.getElementById(elementId);

    if (element !== null) {
        element.remove();
    } else {
        alert(`Could not find element by id "${elementId}"`);
    }
}
```

Lisää yllä oleva JavaScript-lähdekoodi projektiisi uuteen tiedostoon `src/main/webapp/scripts/app.js`. Voit myös tallentaa koodin itsellesi erillisenä tiedostona [tästä](app.js). Lisää lopuksi JSP-sivullesi `<head>`-osioon tagi, jonka avulla selain osaa ladata koodin osaksi ostoslistasivua:

```html
<script src="/scripts/app.js"></script>
```

Varmista vielä lopuksi, että tiedosto lisättiin oikein avaamalla selaimessasi osoite [http://localhost:8080/scripts/app.js](http://localhost:8080/scripts/app.js). Sinun tulisi nähdä lisäämäsi JS-lähdekoodi sellaisenaan.


### Osa 3 / 4: doDelete-metodin toteuttaminen servletissä

Mikäli tähänastiset vaiheet on toteutettu onnistuneesti, painikkeen kokeileminen tässä vaiheessa aiheuttaa HTTP-virheen 405 (Method Not Allowed). Tämä johtuu siitä, että `removeProduct`-funktiossamme kutsutaan JavaScriptin `fetch`-funktiota käyttäen `DELETE`-metodia:

```js
let response = await fetch(`?id=${productId}`, { method: 'DELETE' });
```

Tämä tekee servletille **delete**-tyyppisen HTTP-pyynnön, jota servlettimme ei vielä osaa käsitellä. Servlet-puolella `DELETE`-tyyppinen pyyntö käsitellään `doGet`- ja `doPost`-metodien tavoin `doDelete`-nimisellä metodilla, joten lisää `ShoppingListServlet`-servlettiisi seuraava metodi:

```java
@Override
protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws IOException {
    // TODO: selvitä mikä `id` annettiin pyynnön mukana
    // TODO: poista id:tä vastaava rivi tietokannasta dao-luokan avulla
}
```

`doDelete` toimii kuten `doGet` ja `doPost`, eli voit hyödyntää parametrina saamaasi request-oliota ja sen `getParameter("id")`-metodia selvittääksesi poistettavan rivin id:n. Muista, että tässäkin tapauksessa parametrina saatu id on merkkijono, joka tulee muuttaa kokonaisluvuksi kuten aikaisemmilla viikoilla päivämääriä käsiteltäessä. Voit hyödyntää ostoslistalogiikan aikaisempien viikkojen malliratkaisuja esimerkiksi tietokantalogiikan osalta, mikäli oma koodisi ei sisällä kaikkia tarvitsemiasi osia esimerkiksi ostoslistan rivien poistamiseksi.

`doDelete`-metodissa sinun ei välttämättä tarvitse palauttaa vastausta, mutta halutessasi voit kirjoittaa vastaukseen esimerkiksi JSON-olion `{ "success": true }` seuraavasti:

```java
resp.getWriter().println("{ \"success\": true }");
```


### Osa 4 / 4: sivun sisällön päivittäminen poiston jälkeen

Kun pyyntö ostoslistan tuotteen poistamiseksi on lähetetty palvelimelle ja rivi on poistettu tietokannasta, on poistettu tuoterivi edelleen paikallaan HTML-sivulla 😲. Tämä johtuu siitä, että `fetch`-funktiolla tehty pyyntö ei aiheuttanut uutta sivulatausta. Sivun sisältö on siis edelleen sama kuin ennen painikkeen painamista, vaikka data poistui tietokannasta.

Elementin poistaminen sivulta JavaScriptin avulla on helppoa, mikäli rivillä on yksilöllinen `id`- tai `class`-attribuutti. JS-koodissamme elementin poistaminen tehdään `getElementById` ja `remove`-metodien avulla seuraavasti:

```js
let elementId = `product-${productId}`;
let element = document.getElementById(elementId);

if (element !== null) {
    element.remove();
}
```

Toistaiseksi koodi ei toimi, koska `getElementById`-metodi ei löydä sivultasi poistettavaa elementtiä. Tämä puolestaan johtuu siitä, että sivun html-elementeiltä puuttuu id-attribuutit. Sinun tuleekin seuraavaksi lisätä sivulle yksilölliset id-attribuutit koodinpätkässä määritellyssä muodossa, eli `product-X`, joissa X vastaa yksittäisen ostoslistan rivin id:tä.

Jos käytit sivullasi taulukkorakennetta, lisää id:t taulukon riveille eli `<tr>`-elementeille:


```html
<tr id="product-1">
    <td>Milk</td>
    <td><button onclick="removeProduct(1)">Remove</button></td>
</tr>
```

Jos taas käytit listarakennetta, lisää id:t `<li>`-elementeille:

```html
<li id="product-1">
    Milk
    <button onclick="removeProduct(1)">Remove</button>
</li>
```


Teknisesti tämä ratkaistaan JSP-sivulla hyvin samalla tavalla, kuin miten ratkaisit id:n lisäämisen `onclick`-attribuuttiin.

Tämän osan jälkeen painikkeen painamisen pitäisi poistaa ostoslistan rivit myös tietokannasta. Varmista lopuksi päivittämällä sivu selaimessa, että poisto on oikeasti tapahtunut, eikä rivit vain poistuneet näkyvistä selaimessa.


### Tehtävän palauttaminen

Palauta tähän tehtävään kuuluvat servlet- ja JSP-tiedostot Teams-palautuslaatikkoon erillisinä tiedostoina. Myös osittaiset ratkaisut arvostellaan, joten voit palautta vain osan tehtävistä.

Mikäli muutit JavaScript-koodia, palauta myös muutettu JS-tiedosto. Lisää tarvittaessa tiedostopäätteeksi `.txt`, jos Teams ei hyväksy `.js`-päätteistä tiedostoa (esim. `app.js.txt`). 

**Älä palauta koko projektia äläkä pakkaa tiedostoja.**


## Valinnaiset lisämateriaalit

[DWB, fetch API](https://davidwalsh.name/fetch)

[Google Developers, Introduction to fetch()](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)

[Google Developers, JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/primers/promises)

[A practical ES6 guide on how to perform HTTP requests using the Fetch API](https://www.freecodecamp.org/news/a-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547/)


## Loppusanat

Olemme tässä tehtävässä toteuttaneet yksittäisen ominaisuuden hyödyntäen Ajax-teknologioita. Sovelluksemme pääsääntöisesti noudattaa edelleen aikaisemmilta viikoilta tuttua arkkitehtuuria ja toimintamallia. Voit halutessasi jatkokehittää sovellukseesi lisää dynaamisia ominaisuuksia hyödyntäen esimerkkiprojektia ja löytämiäsi ohjeita.


<script src="/scripts.js"></script>