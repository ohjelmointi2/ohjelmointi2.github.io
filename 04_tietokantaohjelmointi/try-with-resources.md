---
title: "Extra: Try with resources"
layout: default
parent: Tietokantaohjelmointi
---

# Extra: Try with resources

Javassa on olemassa try-with-resources -tyyppinen rakenne, joka huolehtii automaattisesti siinä määriteltyjen resurssien sulkemisesta, eli niiden `close()`-metodin kutsumisesta lohkon jälkeen.

Rakenne on syntaktisesti hieman muita tuntemiamme rakenteita hankalampi hahmottaa eikä se ole osa ohjelmointi 2:n oppimistavoitteita. Saatatte kuitenkin hyötyä myös siihen tutustumisesta esimerkiksi tutustuessanne muissa lähteissä löytämiinne esimerkkeihin.

Voit halutessasi tutustua tähän rakenteeseen tarkemmin esimerkiksi [Jenkov.com](http://tutorials.jenkov.com/java-exception-handling/try-with-resources.html)-palvelussa tai [Baeldung.com](https://www.baeldung.com/java-try-with-resources)-palvelussa.

## Close-metodin kutsuminen finally-lohkossa ilman try-with-resources -rakennetta

```java
package tietokantaohjelmointi;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class TryWithResources {

    public static void main(String[] args) {

        final String SELECT_ALL = "select * from ShoppingListItem order by id asc";

        Connection connection = null;
        PreparedStatement statement = null;
        ResultSet result = null;

        try {
            connection = DriverManager.getConnection("jdbc:sqlite:c:/sqlite/shoppingList.sqlite");

            statement = connection.prepareStatement(SELECT_ALL);
            result = statement.executeQuery();

            while (result.next()) {
                String title = result.getString("title");
                System.out.println(title);
            }

        } catch (SQLException e) {
            e.printStackTrace();

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
    }
}
```

## Omat try-with-resources -lohkot eri resursseille

```java
public static void main(String[] args) {

    final String SELECT_ALL = "select * from ShoppingListItem order by id asc";

    try (Connection connection = DriverManager.getConnection("jdbc:sqlite:c:/sqlite/shoppingList.sqlite")) {

        try (PreparedStatement statement = connection.prepareStatement(SELECT_ALL)) {

            try (ResultSet result = statement.executeQuery()) {

                while (result.next()) {
                    String title = result.getString("title");
                    System.out.println(title);
                }
            }
        }
    } catch (SQLException e) {
        e.printStackTrace();

    }
}
```

## Kaikki suljettavat resurssit yhdistettynä yhteen try-with-resources-lohkoon

```java
public static void main(String[] args) {

    final String SELECT_ALL = "select * from ShoppingListItem order by id asc";

    try (Connection connection = DriverManager.getConnection("jdbc:sqlite:c:/sqlite/shoppingList.sqlite");
            PreparedStatement statement = connection.prepareStatement(SELECT_ALL);
            ResultSet result = statement.executeQuery()) {

        while (result.next()) {
            String title = result.getString("title");
            System.out.println(title);
        }

    } catch (SQLException e) {
        e.printStackTrace();

    }
}
```