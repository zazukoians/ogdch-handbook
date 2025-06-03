# Metadaten als XML importieren

## Wie importiere ich meine Metadaten als XML-Datei?

Wenn Sie mehr als 3 Datasets importieren möchten, die regelmässig aktualisiert
werden müssen, empfehlen wir die Variante Import als XML-Datei.
Ihr Datenkatalog muss im Format
[DCAT-AP-CH](../../glossar/bibliothek/dcat-ap-ch.md) vorliegen. Des Weiteren muss
[Ihre Organisation mitsamt Benutzerinnen und Benutzern registriert sein](../erstpublizierende/kontakt-bfs.md).
Dies erfolgt in Absprache mit der
[Geschäftsstelle OGD](../../glossar/begriffe.md#term-Geschaftsstelle-Open-Government-Data-OGD).
Wir zeigen Ihnen
hier Schritt für Schritt, wie der Import funktioniert.

### Die Schritte auf einen Blick

- [Datenkatalog importieren](#xml-datenkatalog-hochladen)
- [Datasets prüfen](#xml-datensaetze-pruefen)
- [Dataset veröffentlichen](#xml-datensaetze-veroeffentlichen)
- [Datasets im Frontend prüfen](#xml-datensaetze-im-frontend)
- [Veröffentlichung in der Produktionsumgebung](#xml-go-live)

## Alle Schritte im Detail

<a id="xml-datenkatalog-hochladen"></a>

### Datenkatalog importieren

Loggen Sie sich im Backend von opendata.swiss ein. Handelt es sich
um eine Erstpublikation oder möchten Sie eine neue oder
besonders komplexe Veröffentlichung testweise durchführen,
ist die [Abnahmeumgebung](../../glossar/begriffe.md#term-Abnahmeumgebung) dafür die richtige Wahl.
Handelt es sich um eine wiederholte Publikation und Sie möchten
Ihre Datasets direkt veröffentlichen,
dann können Sie direkt die [Produktionsumgebung](../../glossar/begriffe.md#term-Produktionsumgebung)
verwenden.

Gehen Sie zu Ihrer Organisation.

![XML Katalog im Backend von opendata.swiss hochladen](/images/publizieren/xml-upload/xml-upload-starten.png)

Klicken Sie auf den Button «Datensätze aus XML hinzufügen».

![XML Katalog importieren: Datei auswählen](/images/publizieren/xml-upload/upload-button.png)

In der Upload-Maske können Sie einen Datenkatalog als
XML-Datei von Ihrem PC auswählen und hochladen.

![XML Katalog importieren: Upload starten](/images/publizieren/xml-upload/upload-starten.png)

Mit  «Submit» wird der Upload gestartet.

Wichtig: Der Datenkatalog muss im
Format [DCAT-AP-CH](../../glossar/bibliothek/dcat-ap-ch.md) vorliegen.

Ihre Datasets werden nach erfolgreichem Import
als «Entwurf» gespeichert und in der Liste der Datasets Ihrer Organisation mit
aufgelistet:

![unveröffentlichter Datensatz im Backend von opendata.swiss](/images/publizieren/dataset/dataset-entwurf.png)

Bei allfälligen Fehlern erscheint eine rote Fehlermeldung
nach dem Hochladen des Datenkatalogs.

![Fehleransicht nach dem Hochladen einer XML-Datei](/images/publizieren/xml-upload/upload-fehler.png)

Korrigieren Sie Ihren Datenkatalog und laden Sie diesen
anschliessend erneut hoch.

<a id="xml-datensaetze-pruefen"></a>

### Datasets prüfen

Ihre Datasets sind jetzt hochgeladen, aber noch nicht veröffentlicht.
Finden Sie Ihre Datasets mit der Facettensuche nach dem Status «Entwurf»:

![Hochgeladene Datasets auswählen](/images/publizieren/xml-upload/hochgeladene-datasets-auswaehlen.png)

Gehen Sie in die Detailansicht Ihres Datasets: Sind alle Felder so ausgefüllt,
wie Sie es erwarten, dann können Sie Ihr Dataset veröffentlichen.

![Detailansicht eines Datasets im CKAN Backend](/images/publizieren/dataset/dataset-detailansicht.png)

<a id="xml-datensaetze-veroeffentlichen"></a>

### Dataset veröffentlichen

Vor der Veröffentlichung ist Ihr Dataset in der
Abnahmeumgebung mit dem Vermerk «Entwurf» und einem Schlosssymbol markiert. Nach der Veröffentlichung
verschwindet dieses Symbol und Ihr Dataset ist dann auch im Frontend der Abnahmeumgebung sichtbar.

![Dataset das als Entwurf markiert ist](/images/publizieren/dataset/dataset-entwurf.png)

Um Ihr Dataset zu veröffentlichen müssen Sie in den Bearbeitungsmodus wechseln.
Klicken Sie dazu auf den Button «Bearbeiten».

![Dataset Titel in dem das Dataset als Entwurf markiert ist](/images/publizieren/dataset/dataset-titel-entwurf.png)

Sie gelangen in das Webformular Ihres Datasets:

![Dataset im Webformular](/images/publizieren/dataset/dataset-webformular.png)

Scrollen Sie zu dem Feld «Sichtbarkeit»: Es ist auf «Entwurf eingestellt»

![Eingabefeld «Sichtbarkeit» im Webformular](/images/publizieren/dataset/dataset-veroeffentlichen.png)

Sie können Ihr Dataset sofort veröffentlichen, indem Sie den Status auf “Veröffentlicht”
ändern. Oder Sie können eine zukünftige Veröffentlichung planen, indem Sie im darunterliegenden Feld
den Veröffentlichungstermin terminieren.

Die Veröffentlichung lässt sich verlässlich auf ein bestimmtes Datum planen.

Wichtig: Vergessen Sie nicht nach der Änderung auf «Aktualisieren» zu klicken. Sie finden diesen Button
ganz unten im Webformular.

<a id="xml-datensaetze-im-frontend"></a>

### Datasets im Frontend prüfen

Sobald Ihre Datasets veröffentlicht sind, können sie auch im Frontend der Abnahmeumgebung angesehen werden.
Sie gelangen zur Datenansicht Ihres Datasets im Frontend,
indem Sie in die Detailansicht Ihres Datasets gehen und `ckan` aus der URL Ihres Datasets entfernen:

![CKAN URL eines Datasets](/images/publizieren/dataset/ckan-backend-url.png)![Frontend URL eines publizierten Datasets](/images/publizieren/dataset/frontend-url.png)

Bitte prüfen Sie Ihre Daten auch hier nochmal:

![Beispielansicht eines publizierten Datasets](/images/publizieren/dataset/dataset-frontend.png)

Beispielansicht eines publizierten Datasets

<a id="xml-go-live"></a>

### Veröffentlichung in der Produktionsumgebung

Sollten Sie zum ersten Mal Daten publizieren, muss Ihr Dataset
von der Abnahmeumgebung noch auf die Produktionsumgebung übertragen werden.
Dies übernehmen wir für Sie,
[geben Sie uns einfach per E-Mail Bescheid](mailto:opendata@bfs.admin.ch).
Sollten Sie bereits über die Rechte für die Produktionsumgebung verfügen,
können Sie die Daten dort gleich veröffentlichen.

Support

Sie haben eine Frage zum Import Ihres Datasets als XML?
[Schreiben Sie uns](mailto:opendata@bfs.admin.ch)
und wir helfen Ihnen gerne weiter.

Mehr zum Thema

- [DCAT-AP-CH (Link, englisch)](../../glossar/bibliothek/dcat-ap-ch.md) – Beschreibung des aktuell von opendata.swiss genutzte Datenstandards DCAT-AP-CH
- [`Screencast zum Importieren der Metadaten als XML-Datei`](../../..//screencasts/xml-import.gif) - In diesem Screencast zeigen wir Ihnen den Import eines Datenkatalogs
- [`Veröffentlichung eines Datasets terminieren`](../../..//screencasts/schedule-dataset.gif) - In diesem Screencast zeigen wir Ihnen, wie Sie die Veröffentlichung Ihres Datasets terminieren können
