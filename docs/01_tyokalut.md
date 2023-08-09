---
title: Työkalut
layout: default
nav_order: 1
permalink: /työkalut/
---


# Kurssin työkalut
{: .no_toc }

Edeltävillä kursseilla olet hyödyntänyt todennäköisesti Eclipse- ja VS Code -koodieditoreja sekä Viope-tehtäväjärjestelmää. Tällä opintojaksolla laajennamme työkalujen valikoimaa ja hyödynnämme mm. Git-versionhallintaa, Gradle-automaatiotyökalua sekä JUnit-testaustyökalua. Tavoitteenamme on, että sovellusta voidaan suorittaa suoraviivaisesti myös koodieditorin ulkopuolella ja että sen testaamisessa voidaan hyödyntää automaatiota.
{: .fs-6 }

{: .vinkki }
Tällä kurssilla käytettävät Git, Gradle sekä JUnit ovat Java-projekteissa erittäin laajasti hyödynnettyjä työkaluja. Vaikka seuraava projektisi olisi tehty muulla kielellä kuin Javalla, vastaavia työkaluja löytyy niin Pythonille ([pip](https://pypi.org/), [pytest](https://docs.pytest.org/)), JavaScriptille ja TypeScriptille ([npm](https://www.npmjs.com/), [Jest](https://jestjs.io/)), PHP:lle ([Composer](https://getcomposer.org/), [PHPUnit](https://github.com/sebastianbergmann/phpunit)) kuin monille muillekin kielille. Voit siis soveltaa oppimiasi asioita tulevaisuudessa ohjelmointikielestä riippumatta.

---

## Tällä sivulla:
{: .no_toc .text-delta }

* Sisällysluettelo
{:toc}

## Git

> *"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."*
>
> [https://git-scm.com/](https://git-scm.com/)

## Gitin asennus omalle koneelle

[https://git-scm.com/downloads](https://git-scm.com/downloads)

## Git-opas Haaga-Helian opiskelijoille

[https://mruonavaara.github.io/git101/](https://mruonavaara.github.io/git101/)

## Suositellut videot

[https://git-scm.com/videos](https://git-scm.com/videos)

{% include youtube.html id="IHaTbJPdB-s" %}

{% include youtube.html id="RGOj5yH7evk" %}


## Kyselyt

```quiz
### Kuinka luodaan uusi git-repositorio paikallisesti?

- [ ] git clone `<repository_url>`
- [x] git init
- [ ] git branch
```

```quiz
### Miten lisätä muutokset staging-tilaan gitissä?

- [ ] git push `<file_name>`
- [ ] git stage `<file_name>`
- [x] git add `<file_name>`
```

```quiz
### Miten tehdään commit gitissä tallentamaan muutokset?
- [x] git commit -m "Commit message"
- [ ] git merge
- [ ] git pull
```

Tämä kysely luotiin [ChatGPT:n](https://chat.openai.com/) avulla.

{% include quiz.html %}