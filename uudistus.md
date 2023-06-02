# Aiheiden loogiset yhteydet

* tietorakenteet
    * erilaisten operaatioiden suorituskyky
* rekursio:
    * hakemistojen ja tiedostojen käsittely:
        * etsi hakemistosta ja alihakemistoista tiedostot, joiden päätteenä on X tai joiden nimessä on Y
* annotaatiot @SerializedName, @Expose, @Until, @Since, @JsonAdapter
* Gradle / Maven
    * Gradle tutorial for complete beginners https://youtu.be/-dtcEMLNmn0
    * riippuvuudet ja riippuvuuksien riippuvuudet
    * tietokanta
    * gson
    * build, test, package...
* tehtäväideoita:
    * users & posts, tms
* dependency injection
    * väripaletti annetaan parametrina (dark, light, high contrast...)
    * tiedoston lukija annetaan parametrina (ei tarvite tietää tiedoston formaattia tai sijaintia)


# Tehtäväideat

* Lämmittely
    * Pokeri (väri, suora, värisuora)
    * Kivi, paperi sakset

* Tietorakenteet ja algoritmit
    * Tapahtuma-aineisto
        * Suodatusfunktio
        * Lajittelufunktio
    * Sanaruudukko
        * Sanojen etsiminen vaaka- ja pystysuunnassa

* Rajapinnat
    * Sudoku-ruudukon tallennus
        * 1-ulotteinen merkkijono, jossa numeroiden indeksit "kovakoodattu"
        * 2-ulotteinen merkkijono
    * Kaupunkisuunnitelman tallentaminen
        * "Talo siellä, talo täällä"
        ```
        🏠             🏠🌳🌳         🌳🌳🏠        🌳🌳🌳🌳       🏠
               🏠🏠🏠       🏠            🏠🏠🏠🏠🏠🌳🌳🌳🌳🌳🌳🌳🌳
        ```

* Pokeri
    * Pari, kolme, neljä, täyskäsi
    * Väri, suora, värisuora

## Sisältö

Opintojaksolla syvennetään olio-ohjelmoinnin perusosaamista Java-ohjelmointikielellä ja annetaan valmiudet seuraaville kursseille. Kurssilla käsiteltäviä aiheita:

* Periytyminen
    * Tori.fi-tuote-esimerkit
* Rajapinta
    * Comparable
    * FunctionalInterface
* Maven:in käyttö Java-projekteissa
* Annotaatiot
    * GSON: @SerializedName, @Expose, (transient)
* Dependency Injection Design Pattern
    * Tiedostojen lataus ja tallennus eri formaateissa
    * Injektoidaan lukija, jolloin logiikassa ei tarvitse tietää tiedoston sisältöä
* Map-tietorakenne
    * JSON:ista apua?
* Algoritmit
    * Miksi: ongelmanratkaisu ja suorituskyky
    * Lajittelualoritmin toteutus
* Rinnakkaisuus (käsitteenä, mitä tarkoittaa, miksi on olemassa, mihin käytetään)
* Stream ja lambda-lausekkeet
    * Filter
    * Map
    * ForEach
* Rekursio
    * Syvyyshaku
    * Ristinolla?
* Tietokantaohjelmointi Javalla, haut ja päivitykset (JDPC ja JPA)
    * JPA &rarr; mikä laajuus?
* Yksikkötestauksen alkeet
* Versionhallinnan alkeet
