---
title: Annotaatiot
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

Tässä @Target-annotaatiolla määritellään mihin koodinosaan @Override:n voi liittää (metodiin) ja @Retention:lla määritetään pysyvyys, SOURCE on vain käännösaikana käytössä, eikä talletu käännettyyn koodiin. RedentionPolicy.CLASS -annotaatiot tallettuvat käännettyyn class-tiedostoon (ja on byte-koodia), mutta eivät ole suorituksen aikana olemassa, tämä on oletus. RUNTIME-tyyppiset annotaatiot ovat suorituksen aikana olemassa ja luettavissa.

On mahdollista tehdä myös omia annotaatioita, toki yleensä käytetään valmiiksi määriteltyjä jotka ovat erilaisissa kirjatoissa. Esimerkkeinä vaikka Spring Boot-kirjasto tai JSON-käsittelykirjastot. 

Seuraavana esimerkki omasta annotaatiosta. 
```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface StringLengthRule {
    public int minlen() default 1;
    public int maxlen() default 10;
}
```
Nimestä voi päätellä, että annotaatio liittyy merkkijonon pituuteen. Tässä esimerkissä annotaatiolla määritellään merkkijonolle minimi- ja maksimipituus. Override-annotaatioon ei liity mitään parametrointia, StringLengthRule tarvitsee pituuden ylä- ja alarajat, joihin tarkitus perustuu. Annotaatio lisätään kenttään näin:

```java
public class Product {
    private int id;
    @StringLengthRule(minlen = 2, maxlen = 8)
    private String Name;

    public Product(int id, String name) {
        this.id = id;
        Name = name;
    }
    // ... loput luokan koodista jätetty pois
```

Pelkkä annotaatio ei tee mitään tarkistusta merkkijonon osalta. Jossain pitää olla vielä koodi,  joka annotaation perusteella tekee tarkistuksen. Olkoot se vaikka näin:

```java
public class StringValidator {

    public boolean isValid(Object object) {
        boolean ok = true;
        Class<?> objectClass = object.getClass();
        try {
            for (Field field : objectClass.getDeclaredFields()) {
                field.setAccessible(true);
                if (field.getType().getSimpleName().equals("String") && field.isAnnotationPresent(StringLengthRule.class)) {
                    String value;
                    value = field.get(object).toString();
                    StringLengthRule slr = field.getAnnotation(StringLengthRule.class);
                    ok = value.length() >= slr.minlen() && value.length() <= slr.maxlen();
                    if (!ok) {
                        return false;
                    }
                }
            }
        } catch (IllegalArgumentException | IllegalAccessException e) {
            return false;
        } 
        return ok;
    }
}
```
Ja lopulta tarkistus annotaation avulla:
```java
Product p = new Product(-1, "Mouse");
p.setId(-100);
System.out.println(p);
StringValidator sv = new StringValidator();
System.out.println(sv.isValid(p));
p.setName("TooLongNameIsThis");
System.out.println(sv.isValid(p));
```

Tämä on tekninen esimerkki miten annotaatio tehdään ja miten se toimii suorituksen aikana. Suorituksen aikana Reflection-toiminnoilla pystyy selvittämään luokasta kaiken ajonaikaisen tiedon, niin myös luokkiin ja kenttiin määritellyt annotaatiot. Tällä kurssilla ei reflectionia käsitellä enempää kuin mitä on tässä esimerkissä sekä hyvin monessa viikkotehtävässä testien puolella. Kannattaa tutustua yksikkötestien koodiin, sieltä löytyy paljon mielenkiintoista opeteltavaa mm. reflectionista.

