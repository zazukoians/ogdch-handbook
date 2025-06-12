- ```
  :fa:`home`
  ```

  [Handbuch](../../index.md)

  ```
  :fa:`chevron-right`
  ```
- [Nutzen](nutzen.md)

  ```
  :fa:`chevron-right`
  ```
- opendata.swiss API nutzen

# opendata.swiss API nutzen

## Wie nutze ich den API-Zugriff von opendata.swiss?

Das Portal [opendata.swiss](https://opendata.swiss/) basiert auf dem Open-Source-Projekt CKAN.
CKAN stellt eine umfangreiche API für die Metadaten des offenen Datenkatalogs
zur Verfügung, die Applikationsentwickler_innen nutzen können.
In diesem Kapitel erklären wir Ihnen, wie Sie mittels API auf die Daten von
opendata.swiss zugreifen können. Werfen Sie auch einen Blick in aktuelle
[Beispiele, wie OGD genutzt](https://opendata.swiss/showcase/) wird.

<a id="api-nutzen-einfuhrung"></a>

### Einführung

Eine [API (Application Programming Interface](https://de.wikipedia.org/wiki/Programmierschnittstelle)) ermöglicht es,
dass Software direkt mit einem externen System (in diesem Fall den Metadaten
auf der Plattform opendata.swiss) interagiert. Während die Webseite der
Plattform opendata.swiss und die [Suchfunktion](https://opendata.swiss/de/dataset) auf die Nutzung durch Menschen
ausgerichtet ist, bieten wir über die API eine Zugriffsmöglichkeit, die für die Automatisierung optimiert ist.

#### Nutzung der API – so funktioniert es

- [Zugriffsmöglichkeiten](#api-nutzen-zugriffsmoeglichkeiten)
- [Action-API](#api-nutzen-action-api)
- [Beispiel API-Response](#api-nutzen-beispiel-response)
- [Terminologie](#api-nutzen-terminologie)
- [Beispiele](#api-nutzen-beispiele)

<a id="api-nutzen-zugriffsmoeglichkeiten"></a>

### Zugriffsmöglichkeiten

Sie haben verschiedene Möglichkeiten, auf die API von opendata.swiss zuzugreifen:

- via Browser,
- über die Kommandozeile, oder durch
- spezialisierte Werkzeuge wie ckanapi oder Fetch-API.

Je nach Einsatzzweck eignen sich verschiedene Arten. Für den Zugriff über den Browser
empfehlen wir die Nutzung eines JSON-Viewers (nativ oder Plug-In), um die Lesbarkeit
der Informationen zu verbessern.

Die Basis-URL lautet _https://ckan.opendata.swiss/api/3/action/_ und wird gefolgt von
der Aktion und allfälligen notwendigen Zusatzinformationen.

```default
https://opendata.swiss/api/3/action/package_search?fq=tags:economy
```

```default
curl 'https://opendata.swiss/api/3/action/package_search?fq=tags:economy'
```

```default
ckanapi -r https://opendata.swiss action package_search fq='tags:economy'
```

<a id="api-nutzen-action-api"></a>

### Action-API

Alle Zugriffe verwenden das Wort _action_, wie in den Beispielen oben zu beobachten
ist. Grundsätzlich sind die meisten Funktionen in CKAN als _action_ programmiert,
so dass sie über die API angestossen werden können.
Mehr dazu lesen Sie im Abschnitt [Action-API in der CKAN Dokumentation](https://docs.ckan.org/en/latest/api/#action-api-reference).

Die Rückmeldung wird als [JSON Objekt](https://de.wikipedia.org/wiki/JavaScript_Object_Notation)
ausgegeben. Mehr über die Struktur von JSON Objekten erfahren Sie
[hier](https://www.w3resource.com/JSON/structures.php).

Zuerst wird Ihnen eine Adresse angezeigt, unter der Sie Hintergrundinformationen
zu Ihrer Anfrage erhalten (_help_). Darauf meldet Ihnen das System, ob die Anfrage
erfolgreich war (_success: true_ oder _success: false_). Unter _result_ finden
Sie die Inhalte Ihrer angefragten Informationen.

<a id="api-nutzen-beispiel-response"></a>

### Beispiel API Response

Eine API-Abfrage über den Browser liefert Ihnen als Beispiel folgende Informationen:

#### Übersicht Angaben Dataset-Ebene

| Key                                                      | Value                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| help                                                     | Unter der angegebenen Adresse finden Sie weitere Informationen zur Query.                                                                                                                                                                                                    |
| success                                                  | War Ihre Query richtig formuliert, so dass ein Ergebniss gefunden wurde? Falls _True_ ausgegeben wird, aber eine leere Liste retourniert wird, war die Syntax Ihrer Anfrage korrekt formuliert, aber keine Datensätze entsprechen Ihren Parametern.                          |
| result                                                   | Diese Datensätze entsprechen Ihrer Anfrage.                                                                                                                                                                                                                                  |
| issued                                                   | Das Erstelldatum des Datasets.                                                                                                                                                                                                                                               |
| title_for_slug | Inhalt entspricht dem Namen des Datasets.                                                                                                                                                                                                                                    |
| id                                                       | Die ID des Datasets.                                                                                                                                                                                                                                                         |
| type                                                     | Der Typ des Datasets. Mögliche Typen sind dataset, harvester, showcase.                                                                                                                                                                                      |
| description                                              | Die Beschreibung des Datasets.                                                                                                                                                                                                                                               |
| groups                                                   | Die Kategorien, zu der das Dataset gehört.                                                                                                                                                                                                                                   |
| publisher                                                | Die Stelle, welche das Dataset veröffentlicht hat. Inkl. name und url, etc.                                                                                                                                                                  |
| organization                                             | Die dem Publisher übergeordnete Organisation, die für das Dataset inhaltlich verantwortlich ist. Inkl. Name, URL, Anzahl publizierter Datasets (i.e. package_count). |
| name                                                     | Sprachunabhängiger Term, der für die API-Abfrage genutzt werden kann.                                                                                                                                                                                                        |
| accrual_periodicity                 | Angabe, wie häufig das Dataset aktualisiert wird. Kontrolliertes Vokabular gemäss Standard von data.europa.eu.                                                                                                               |
| resources                                                | Eine Auflistung der Ressourcen, die zum Dataset gehören. Darin finden sich auch die entsprechenden Metadaten zu den Ressourcen.                                                                                                                              |

#### Übersicht Angaben Ressourcen-Ebene

| Key                                | Value                                                                                 |
| ---------------------------------- | ------------------------------------------------------------------------------------- |
| package_id    | Die ID des Datasets, zu dem die Ressourcen gehören.                   |
| issued                             | Das Erstelldatum der Ressource.                                       |
| id                                 | Die ID der Ressource.                                                 |
| download_url  | Die Adresse, unter der die Ressource heruntergeladen werden kann.     |
| media-type                         | Der Medientyp der Ressource.                                          |
| format                             | Das Format der Ressource.                                             |
| rights                             | Die Nutzungsbedingungen der Ressource.                                |
| created                            | Der Zeitpunkt, als die Ressource in der Datenbank eingerichtet wurde. |
| description                        | Die Beschreibung der Ressource.                                       |
| num_resources | Die Anzahl Ressourcen für das Dataset.                                |

<a id="api-nutzen-terminologie"></a>

### Terminologie von CKAN in opendata.swiss

Über die API können Sie nach sämtlichen Metadaten in opendata.swiss suchen.
Die Suchsyntax entspricht Apache [Lucene](https://lucene.apache.org/),
da opendata.swiss auf CKAN basiert und Apache [Solr](https://solr.apache.org/) als
Suchmaschine benutzt.
Dies ist ebenfalls in der
[CKAN-Dokumentation](https://docs.ckan.org/en/latest/user-guide.html#search-in-detail)
ausführlich beschrieben.
Arbeiten Sie mit Metadaten der Organisation, Metadaten der Datasets oder Metadaten der
Ressourcen? Beachten Sie dabei die Ebenen: Die folgende Auflistung zeigt die wichtigsten
Terminologien, mit welchen Sie Informationen in opendata.swiss finden können:

`organization`
: Entspricht der [datenpublizierenden Organisation](https://opendata.swiss/de/organization).\
Jedes Dataset wird von genau einer Organisation publiziert.\
Jedes Dataset wird von genau einer Organisation publiziert. Eine Organisation
kann jedoch Unterorganisationen haben.

`package`, `dataset`
: Entspricht einem [Dataset](../glossar/begriffe.md#term-Dataset) bei opendata.swiss. Damit gemeint sind
die Metadaten zu einem Bündel von Ressourcen.

`id`
: Entspricht in der Regel dem [Slug](../glossar/begriffe.md#term-Slug) des Datasets oder der Organisation auf opendata.swiss.\
Bei Ausnahmefällen konsultieren Sie bitte die CKAN-Dokumentation.\
Bei Ausnahmefällen konsultieren Sie bitte die CKAN-Dokumentation.

`resource`, `distribution`
: Entspricht einer
[Ressource](https://handbook.opendata.swiss/de/content/glossar/begriffe.html#term-Distribution) bei
Opendata.swiss. Die Plattform opendata.swiss hostet selbst keine Datasets oder Ressourcen,
stellt aber downloadUrls oder accesssUrls und teilweise auch Daten Previews zur Verfügung.\
Ressourcen in CKAN entsprechen dcat:Distribution
im [DCAT AP Standard](https://handbook.opendata.swiss/de/content/glossar/bibliothek/dcat-ap-ch.html#dcat-ap-ch-distribution) .

`group`
: Entspricht einer Kategorie bei opendata.swiss. Ein Dataset kann mehreren Kategorien angehören.\
Ein Dataset kann mehreren Kategorien angehören.\
Entspricht [dcat:theme im DCAT AP Standard](https://handbook.opendata.swiss/de/content/glossar/bibliothek/dcat-ap-ch.html#dcat-dataset-theme).

<a id="api-nutzen-beispiele"></a>

### Anwendungsbeispiele für die API

#### Typische Abfragen für Datennutzende

#### Typische Anwendungen für Datenpublizierende

#### Fetch-API

Es ist auch möglich, über
[Fetch-API](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
auf opendata.swiss zuzugreifen.

<a id="api-nutzen-fragen"></a>

Support

#### Noch Fragen?

Haben Sie noch Fragen zur Nutzung unserer API? Dann
[nehmen Sie mit uns Kontakt auf](mailto:opendata@bfs.admin.ch). Bei Rückfragen
zu einzelnen Datasets wenden Sie sich bitte direkt an die Datenpublizierenden.
Die jeweiligen Kontaktangaben finden Sie im Dataset unter Zusätzliche Information.

**Haben Sie ein interessantes Nutzungsbeispiel?** Wir würden uns sehr freuen, davon zu erfahren
und Ihr Projekt in unsere [Showcases](https://opendata.swiss/showcase) aufzunehmen.
[Oder Schreiben Sie uns](mailto:opendata@bfs.admin.ch).

Mehr zum Thema

- [CKAN-API-Guide (Link)](https://docs.ckan.org/en/latest/api/#action-api-reference)  – Guidelines zur Nutzung der CKAN API
