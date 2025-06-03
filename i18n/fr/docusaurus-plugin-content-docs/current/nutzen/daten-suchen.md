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
- Daten suchen

# Daten suchen

## Wie finde ich die Daten, die ich brauche?

Um Ihnen die Suche nach Daten zu erleichtern, bietet opendata.swiss
ein Suchfeld an sowie Filtermöglichkeiten. Sie können einfache Suchanfragen stellen oder
mittels sogenannter Abfragesyntax (Querysyntax) komplexere Suchanfragen formulieren.
Diese Seite erklärt, wie die Suche funktioniert, erläutert die Abfragesyntax
und stellt hilfreiche Beispiele zur Verfügung.

Sie können nach Datasets auf der [Einstiegsseite von opendata.swiss](https://opendata.swiss)
oder unter der Rubrik [Daten](https://opendata.swiss/de/dataset) suchen.
Auf der [Organisationsseite](https://opendata.swiss/de/organization) können Sie nach Organisationen
suchen. Wenn Sie an Beispielen für die Wiederverwendung von [Open Government Data](https://handbook.opendata.swiss/de/content/glossar/begriffe.html#term-Open-Government-Data)
interessiert sind, finden Sie unter der Rubrik [Showcases](https://opendata.swiss/de/showcase) Applikationen, Visualisierungen und Veranstaltungen.

### Wie funktioniert das Suchfeld von opendata.swiss?

Das Suchfeld von opendata.swiss ist so konzipiert, dass es einfache
Phrasen (Suchbegriffe ohne komplexe Syntax) verarbeiten und nach einzelnen Begriffen
in mehreren Metadatenfeldern mit unterschiedlicher Gewichtung suchen kann, je nach
Bedeutung der einzelnen Metadatenfelder. So hat beispielsweise das
Feld `Titel` eine stärkere Gewichtung als das Feld `Beschreibung`. Die
Suchmaschine Solr ordnet Ihre Anfrage entsprechend ein und liefert Ihnen
je nach Suchstrategie die passenden Treffer.

![Suchfeld auf der Seite Daten auf opendata.swiss](/images/daten-suchen/suchfeld-opendataswiss.png)![Suche auf opendata.swiss](/images/daten-suchen/trefferliste_de.png)

### Trefferliste

In der Trefferliste werden alle Datasets angezeigt, die den von Ihnen eingegebenen Suchkriterien entsprechen. Wenn
Sie keine Suchkriterien ausgewählt haben, wird Ihnen eine Liste aller auf opendata.swiss vorhandenen Datasets angezeigt.

In der Trefferliste finden Sie unterhalb des Suchfeldes die Anzahl der Datasets, die Ihrer Suchanfrage entsprechen.
Damit Sie sich einen schnellen Überblick über die gefundenen Datasets verschaffen können, werden diese mit folgenden Metadaten angezeigt:
`Titel des Datasets`, `Name der Organisation`, `Kategorien`, `Beschreibung`, `Letzte Aktualisierung der Metadaten (Ebene Dataset/Ressource)`,
`Formate` und `Schlagwörter`.

Durch Anklicken des Dataset-Titels gelangen Sie zur Dataset-Seite, mit den wichtigen Beschreibungen (Metadaten) des
entsprechenden Datasets, wie Titel, Beschreibung, Nutzungsbedingungen, etc. Die Daten können entweder direkt über eine Download-URL heruntergeladen
werden oder, wenn sie nur über eine Landing Page verfügbar sind, über eine Zugangs-URL. Dies können Sie direkt
auf der Dataset-Seite machen oder Sie können auch weiter auf die Ressourcen-Seite navigieren.

### Filtern

Duch Anklicken der entsprechenden Facetten der Filterkategorien können Sie Ihre
Suchergebnisse verfeinern. Es kann nach _Kategorien_, _Schlagwörtern_, _Organisationen_,
_politischen Ebenen_, _Nutzungsbedingungen_ und den _Formaten_ gefiltert werden. Wenn Sie
nach Datasets einer bestimmten Kategorie suchen, können Sie diese direkt
von der Startseite von [opendata.swiss](https://opendata.swiss) bereits filtern.

![Filterfacetten](/images/daten-suchen/bild-facetten.png)

In der Rubrik [Daten](https://opendata.swiss/de/dataset) finden Sie alle Filtermöglichkeiten
links neben der Trefferliste. Eine Mehrfachauswahl innerhalb einer Filterkategorie ist möglich, jedoch
nur innerhalb der gefilterten Ergebnisse in der Trefferliste (Schnittmenge). Interessieren Sie sich beispielsweise für Datasets
aus den Kategorien _Geographie_ oder _Raum und Umwelt_, müssen Sie diese einzeln nacheinander auswählen, da sonst nur Dataset,
die beide Kategorien tragen gefunden werden. Nachdem Sie einen Filter gesetzt haben, können Sie die Trefferliste mit weiteren Filtermöglichkeiten, wie zum Beispiel _Formate_
erweitern. Zum Beispiel wenn ich nur an Dataset interessiert bin, die der Kategorie _Geographie_ zugehörig sind,
aber nur Ressourcen mit dem Format _JSON_ enthalten.

### Sortieren

Sie haben die Möglichkeit, Ihre Trefferliste zu sortieren. Dazu stehen Ihnen die Sortierung nach
_Relevanz_, _Daten zuletzt geändert_, _Metadaten zuletzt geändert_, _Name aufsteigend_ und nach
_Name absteigend_ zur Verfügung.

![sortieren nach](/images/daten-suchen/sortieren-nach.png)

### Stichwortsuche

Bei der Stichwortsuche geben Sie Ihre(n) Suchbegriff oder Ihre Suchbegriffe in das Suchfeld ein.
Während der Eingabe erscheint unterhalb des Suchfeldes eine Auswahl von [Vorschlägen](https://ogdch-new-handbook.clients.liip.ch/de/content/nutzen/daten-suchen.html#vorschlage-fur-suchbegriffe).
Diese können Sie bei Bedarf anklicken. Mit der Eingabetaste (Enter) starten Sie die Suche.

### Vorschläge für Suchbegriffe

Bei der Eingabe von Suchbegriffen werden Ihnen Vorschläge angezeigt,
die Sie bei Bedarf auswählen können. Für jede Sprache wird mehrmals täglich
ein in sich geschlossener Solr-Index aufgebaut. Das bedeutet, dass Änderungen
an Datasets oder neue Datasets nicht sofort in den Vorschlägen berücksichtigt werden.

![Suche auf opendata.swiss](/images/daten-suchen/suchvorschlaege.png)

### Suchsprache

Die Syntax kommt von Solr und das Vokabular von opendata.swiss

### Erweiterte Suche mithilfe von Operatoren

Eine Suchanfrage gliedert sich in einzelne Begriffe `open`, [Phrasen](https://ogdch-new-handbook.clients.liip.ch/de/content/nutzen/daten-suchen.html#phrasensuche)
`open data` und Operatoren. Um eine komplexere Suchanfrage zu erstellen, können Sie mehrere
Begriffe oder Phrasen mit Suchoperatoren kombinieren. Die Suchlogik folgt der
Syntax von [Apache Lucene/Solr](https://lucene.apache.org/core/3_6_0/queryparsersyntax.html).
Der Standardoperator im Suchfeld ist der [Operator](https://ogdch-new-handbook.clients.liip.ch/de/content/nutzen/daten-suchen.html#or) `OR` . Das bedeutet, dass,
wenn Sie mehrere Begriffe in das Suchfeld eingeben, die Suchanfrage als OR-Anfrage behandelt wird,
ohne dass Sie diesen Operator eingeben müssen. Wenn Sie den Begriff _open data_ in das Suchfeld eingeben,
werden _open_ und _data_ als Einzelbegriffe behandelt. In der Trefferliste finden
Sie nun Datasets aufgelistet, bei denen _open_ **oder** _data_ im Suchindex gefunden wurde.
Wenn Sie nach der Phrase _open data_ suchen wollen, dann müssen Sie
die Begriffe in Anführungs- und Schlusszeichen setzen: “open data”.

![Suche nach Begriffen open und data ohne Operatoren](/images/daten-suchen/suche_open-data.png)

### Suchmodi

#### **OR (||)**

Der Operator `OR` gibt Ihnen alle Datasets zurück, die den Begriff _open_ oder _data_
in ihrem Index enthalten. Dieser Operator ist als Standardoperator im Suchfeld implementiert.
Sie können daher mehrere Begriffe auch ohne `OR` in das Suchfeld eingeben.

![Suche nach Begriffen open und data mit dem OR-Operator](/images/daten-suchen/suchmodi_OR.png)

#### **AND (&&)**

Mit dem Operator `AND` werden alle Datasets angezeigt, deren Suchindex _open_ und _data_ enthält.
Datasets, die nur einen dieser Begriffe enthalten, erscheinen nicht in der Trefferliste.

![Suche nach Begriffen open und data mit dem AND-Operator](/images/daten-suchen/suchmodi_and.png)

#### **Ein- und Ausschluss von Begriffen (+)(-)**

Wenn Sie nach Datasets suchen, die den Begriff _open_, aber nicht den Begriff _data_ enthalten sollen,
können Sie den gewünschten Begriff mit dem Operator `+` einschliessen und den unerwünschten
Begriff mit dem Operator `-` ausschliessen.

![Suche nach Begriffen mit Plus-Zeichen vor open und Minus-Zeichen vor data](/images/daten-suchen/suchmodus_plusundminus.png)

#### **Phrasensuche**

Mit Anführungszeichen können Sie nach Begriffen suchen, die zusammengehören. In der Trefferliste
finden Sie mit `"open data"` nun Datasets, die _open data_ als Phrase enthalten. Entscheidend ist
die Reihenfolge der beiden Begriffe. Datasets, die die Phrase _data open_ enthalten, erscheinen
nicht in der Trefferliste.

![Suche nach dem Begriff open data mit Anführungszeichen](/images/daten-suchen/phrasensuche.png)

#### **Suche in den Feldern**

Wenn Sie nach einem Dataset suchen, in dessen Beschreibung der Begriff _open data_ vorkommen soll,
können Sie dem Begriff die Feldbezeichnung `description` gefolgt von einem **Doppelpunkt** `:` voranstellen.

![Suche in description nach Phrase open data](/images/daten-suchen/suche-in-description_1.png)

Wenn Sie nach einem Dataset suchen, das sowohl _open_ als auch _data_ in seiner Beschreibung enthalten soll,
können Sie eine Suchanfrage mit dem Operator `AND` formulieren und in Klammern hinter die Feldbezeichnung setzen.
Dasselbe können Sie mit dem Operator `OR` tun, wenn entweder der Begriff _open_ oder der Begriff
_data_ in der Beschreibung des Datasets vorkommen soll.

![Suche in description mit AND-Operator](/images/daten-suchen/suche-in-description_2.png)![Suche in description mit OR-Operator](/images/daten-suchen/suche-in-description_3.png)

Sie können auch Begriffe innerhalb eines [bestimmten Feldes einschliessen](https://ogdch-new-handbook.clients.liip.ch/de/content/nutzen/daten-suchen.html#ein-und-ausschluss-von-begriffen): `+{field}:{value}`.
Wenn Sie zum Beispiel an einem Dataset interessiert sind, in dessen englischem Titelfeld der Begriff `power`
vorkommen soll.

![+title_en:power](/images/daten-suchen/suche-in-title_einschliessen.png)

Die gleiche Suche ist auch möglich, wenn Sie zusätzlich einen Begriff ausschliessen wollen: `-{field}:{value}`. Sie suchen
zum Beispiel nach einem Dataset, in dessen englischem Titelfeld zwar der Begriff `power` vorkommt, nicht aber der Begriff `hydraulic`.

![+title_en:power -title_en:hydraulic](/images/daten-suchen/suche-in-title_auschliessen.png)

Weiter können Sie auch nach Datasets suchen, die bestimmte Schlüsselwörter enthalten. Sie möchten zum Beispiel alle
Datasets mit den englischsprachigen Schlagwörtern `geology` und `geophysics` finden.

![keywords_en:(geology AND geophysics)](/images/daten-suchen/keywords-suche.png)

Es ist auch möglich, mehrere Suchbegriffe mit dem Operator `OR` zu verknüpfen.  Zum Beispiel möchten Sie
ein Dataset finden, das entweder von der Organisation `Kanton Thurgau` oder `Stadt Zürich` publiziert wird.
Bei dieser Suche muss jedoch der Slug der Organisation angegeben werden. Diesen finden Sie in der URL der Organisationsseite
der jeweiligen Organisation. In unserem Beispiel wäre das für den [Kanton Thurgau](https://opendata.swiss/organization/kanton-thurgau): `kanton-thurgau`.

![URL der Organisation Kanton Thurgau](/images/daten-suchen/slug-organisation.png)![organization:(kanton-thurgau OR stadt-zurich)](/images/daten-suchen/suche-organisation.png)

Diese Suche kann auch noch erweitert werden. In unserem Beispiel mit dem Suchbegriff `karte`.

![organization:(kanton-thurgau OR stadt-zurich)karte](/images/daten-suchen/suche-in-organisation-begriff.png)

#### **Wortstämme**

Bitte beachten Sie bei der Suche in bestimmten Feldern, dass Wortstämme und
Sonderzeichen nur in den sprachspezifischen Feldern berücksichtigt werden. Damit zum Beispiel
das Dataset `Luftbilder swisstopo farbig` in der Trefferliste erscheint, können sie folgende
Suchanfrage in das Suchfeld eingeben: `title_de:(bild AND farbe)`.

![title_de:(bild AND farbe)](/images/daten-suchen/suche-wortstamm.png)

### SOLR-Konfiguration

Ausführlichere Informationen zur Solr-Konfiguration finden Sie in der offiziellen [Solr-Dokumention](https://solr.apache.org/guide/6_6/index.html) (Englisch).
Die [Konfiguration und das Schema von opendata.swiss ist auf Github](https://github.com/opendata-swiss/ckanext-switzerland-ng/tree/master/solr) verfügbar.
`solr.xml` referenzierte Dateien, wie `italian_stop.txt`, `fr_elision.txt`, etc., sind im offiziellen CKAN-Repository der aktuellen
[CKAN-Version auf Github](https://github.com/ckan/ckan/tree/master/ckanext/multilingual/solr) zu finden. Alle anderer Dateien (z.B. `stopwords.txt`) werden
von Solr bereitgestellt.
