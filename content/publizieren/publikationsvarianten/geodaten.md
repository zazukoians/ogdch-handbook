# Metadaten via geocat.ch publizieren

## Wie publiziere ich Geometadaten?

Die Publikation von Geodaten ist ein Spezialfall.
Die Geometadaten werden primär im geografischen Datenkatalog
der Schweiz, dem Katalog für Geometadaten
[geocat.ch](https://www.geocat.ch/geonetwork/srv/ger/catalog.search#/home), erfasst und verwaltet.
Von dort werden die benötigten Attribute dann durch einen automatisierten Prozess
zu opendata.swiss überführt.

### Geometadaten auf geocat.ch publizieren

Stellen Sie vor der Veröffentlichung sicher,
dass Ihre Daten auf geocat.ch vollständig erfasst sind.

### Harvesting von Geodaten (geocat.ch > opendata.swiss)

* **Schritt 1:**
  Die Registrierung Ihrer Organisation auf opendata.swiss
  bleibt weiterhin eine Voraussetzung. Falls Ihre Organisation noch nicht eingerichtet ist,
  finden Sie [hier](../erstpublizierende.md) den Prozess beschrieben.
* **Schritt 2:**
  Sobald die publizierende Organisation vorhanden ist, muss ein
  «geocat-Harvester» eingerichtet werden.
  Dafür benötigen Sie einen sogenannten CSW-Endpoint auf geocat.ch.
  Das [geocat.ch-Team](mailto:geocat@swisstopo.ch) unterstützt Sie dabei.
* **Schritt 3:**
  Nachdem der CSW-Endpoint eingerichtet ist, werden vom geocat.ch-Team in
  Absprache mit Ihnen die Harvesting-Tests durchgeführt. Dabei wird geprüft,
  ob der Prozess zum automatischen Transfer der Metadaten von geocat.ch zu
  opendata.swiss optimal funktioniert.
  [Hier](https://www.geocat.admin.ch/de/dokumentation/opendata.html)
  finden Sie die Anleitung dazu.
* **Schritt 4:**
  Wenn die Vorbereitung der Veröffentlichung mit dem geocat.ch-Team abgeschlossen ist,
  informieren Sie [opendata.swiss](mailto:opendata@bfs.admin.ch)
  darüber.
  Wir werden eine letzte Prüfung der Einträge durchführen und gemeinsam mit
  Ihnen den «Go-Live» auf opendata.swiss planen.
  Denken Sie bitte daran, dass wir in der Regel ca. 5 Arbeitstage für diesen Schritt benötigen.

Wichtig: Selbstverständlich müssen auch hier die
[OGD-Richtlinien](../../glossar/bibliothek/ogd-richtlinien.md)
erfüllt sein.
Zudem müssen Geometadaten gemäss
[Standard ISO-19139_che](../../glossar/bibliothek/geocat-mapping.md)
vorliegen. Dabei handelt es sich um einen auf der internationalen
Norm ISO-19139 basierenden Standard, der mit den Schweizer
Erweiterungen der Norm GM03 ergänzt wurde.

Support

Sie haben eine Frage zum Publizieren von Geometadaten?
Wenden Sie sich bitte direkt an das
[geocat.ch-Team](mailto:geocat@swisstopo.ch).
Bei weiteren Fragen, beispielsweise zu den allgemeinen OGD-Anforderungen,
[dürfen Sie sich gerne an uns wenden](mailto:opendata@bfs.admin.ch).

Mehr zum Thema

- [Transformation ISO-19139_che nach DCAT-AP CH](../../glossar/bibliothek/geocat-mapping.md) – Hier finden Sie die Anleitung zur Transformation des Geodaten-Standards ISO-19139_che auf den von opendata.swiss genutzen Standard DCAT-AP CH.
- [GM03](https://www.geocat.admin.ch/de/dokumentation/gm03.html) ist ein Schweizer Modell für Metadaten. Diese Beschreibung des Datenstandards von Geodaten wird von geocat.ch genutzt.
