- ```
  :fa:`home`
  ```

  [Handbuch](../../index.md)

  ```
  :fa:`chevron-right`
  ```
- Begriffe

# Begriffe

## Was ist was bei Open Data?

<a id="term-Abnahmeumgebung"></a>

Abnahmeumgebung
: Die Test-Version der Plattform opendata.swiss. In der
Abnahmeumgebung sind wie in der Produktionsumgebung
ein Backend und ein Frontend verfügbar. Damit
können Datenpublizierende den Publikationsprozess
über das Backend testweise durchführen und das
Resultat im von den Suchmaschinen nicht indizierten
Frontend prüfen. Jede neue Publikation startet hier
und wird von der Geschäftsstelle OGD abgenommen, bevor
sie in Produktion gehen darf. Wichtig: Das User-Management
ist aus Sicherheitsgründen für beide Umgebungen
(Abnahme und Produktion) getrennt.\
Sie benötigen daher zwei User-Profile.\
Die URL zu dieser Umgebung erhalten Datenpublizierende
bei ihrer Registrierung.

<a id="term-Backend"></a>

Backend
: Der Hintergrund oder nicht sichtbare Teil einer Website.\
Dieser ist nur Administratoren und bei opendata.swiss
den Datenpublizierenden zugänglich, nicht aber der
Öffentlichkeit. Im Backend erfassen die Datenpublizierende
ihre Organisation und richten den Import Ihrer Metadaten ein.\
Das Backend der Abnahmeumgebung und der Produktionsumgebung
sind nahezu identisch.

<a id="term-CKAN"></a>

CKAN
: Open Source Software für Datenportale.\
Mit dieser Software ist auch opendata.swiss gebaut.
[Mehr zu CKAN](https://ckan.org).

<a id="term-Katalog-Endpunkt-Catalogue-endpoint"></a>

Katalog Endpunkt (Catalogue endpoint)
: URL, mit der ein Datenkatalog abgeholt,
sprich «geharvested», werden kann.

<a id="term-Dataset"></a>

Dataset
: Ein Dataset entspricht einem Eintrag auf opendata.swiss.\
Es wird von einer Organisation publiziert bzw. kuratiert
und ist in einer oder mehreren Darstellungen
(“Ressourcen” oder “Distribution”) zum Download verfügbar.\
Auf opendata.swiss entspricht dies einem Metadaten-Eintrag
der Klasse dcat:Dataset (Dataset-Metadaten-Record) und
beschreibt ein einzelnes, thematisch geschlossenes Dataset.\
Beispiel: <br/>
[Dataset: Statistiken Dienst Überwachung Post- und Fernmeldeverkehr ÜPF](https://opendata.swiss/de/dataset/statistiken-dienst-ueberwachung-post-und-fernmeldeverkehr-uepf) <br/>
[Ressource: Detaillierte Statistik 2011](https://opendata.swiss/de/dataset/statistiken-dienst-ueberwachung-post-und-fernmeldeverkehr-uepf/resource/fffbd06f-ddc3-43b6-9873-e4aef316e4d0)

<a id="term-Datenpublizierende-Datenanbietende"></a>

Datenpublizierende / Datenanbietende
: Personen oder Organisationen, die Open Government
Data (OGD) publizieren.

<a id="term-Datennutzende"></a>

Datennutzende
: Personen oder Organisationen, die Open Government
Data (OGD) nutzen.

<a id="term-DCAT-AP"></a>

DCAT-AP
: DCAT-AP ist ein Anwendungsprofil des Data Catalog
Vocabulary (DCAT) und dient zur Beschreibung der in
Datenportalen verzeichneten Daten. Es richtet sich
insbesondere an die Betreiber von Open-Data-Portalen
und deren Datenpublizierende. Die Schweizerische
Ableitung [DCAT-AP-CH](http://www.ech.ch/index.php/de/standards/39919)
wird seit 2016 von opendata.swiss verwendet.\
Diese wird kontinuierlich im Rahmen der eCH Fachgruppe OGD
weiterentwickelt.

<a id="term-DCAT-AP-Katalog"></a>

DCAT-AP-Katalog
: Ein Katalog, der dem DCAT Application Profile entspricht.\
Dieser Katalog ist eine kuratierte Sammlung
von Metadaten-Records über offene Daten.

<a id="term-Distribution"></a>

Distribution
: Eine physische Verkörperung respektive Repräsentanz
des Datasets in einem spezifischen Format.\
Eine Distribution (oder auch «Ressource») ist eine
spezifische Repräsentierung des Datasets. Dies können
unterschiedliche Bereitstellungsformen eines Datasets
(z.B. ein bestimmtes Format), unterschiedliche Zeitreihen
oder auch unterschiedliche Aggregationsstufen sein.

<a id="term-Europaisches-Datenportal"></a>

Europäisches Datenportal
: Das europäische Datenportal [data.europa.eu](https://data.europa.eu/de)
ist das offizielle Portal für europäische Daten. Es sammelt die Metadaten von
den nationalen, regionalen, lokalen und bereichsspezifischen Datenanbietern
und bietet Zugang zu mehr als einer Million offenen Datensätze aus 36 Ländern.

<a id="term-Frontend"></a>

Frontend
: Der Vordergrund oder öffentlich sichtbare Teil
einer Website. Das Frontend der Abnahmeumgebung
dient zur Prüfung der Daten und ist daher nahezu
identisch zum Frontend der Produktionsumgebung aufgebaut.\
Das Frontend der Produktionsumgebung ist
[https://opendata.swiss](https://opendata.swiss/de).

<a id="term-Geocat-geocat.ch"></a>

Geocat, geocat.ch
: geocat.ch ist der Metadatenkatalog für die Geodaten der Schweiz.\
Bundesämter, Kantone, Gemeinden und private Firmen erfassen
in geocat.ch Metadaten zu ihren eigenen Geodaten.\
geocat.ch bietet deshalb den idealen Einstiegspunkt für
die Suche nach Geodaten: z.B. Luftbilder, geschützte
Ortsbilder, Naturgefahren, Erdbeben usw.

<a id="term-Geschaftsstelle-Open-Government-Data-OGD"></a>

Geschäftsstelle Open Government Data (OGD)
: Die Geschäftsstelle [Open Government Data (OGD)](https://www.bfs.admin.ch/bfs/de/home/dienstleistungen/ogd.html)
beim Bundesamt für Statistik (BFS) koordiniert in enger
Zusammenarbeit mit dem Eidgenössischen Departement
des Innern (EDI) die Umsetzung der OGD-Strategie
Schweiz 2019–2023. Sie betreibt ausserdem das Portal
opendata.swiss und das vorliegende Handbuch.

<a id="term-Harvester-Harvesting"></a>

Harvester / Harvesting
: Als Harvesting bezeichnet man das automatische «Einsammeln»
von Daten bzw. Metadaten im Fall von opendata.swiss.\
Mit Hilfe des [CKAN Harvester Plugins](https://docs.ckan.org/en/ckan-1.7.4/harvesting.html)
werden Datasets aus anderen Instanzen automatisch importiert.

<a id="term-Linked-Open-Data"></a>

Linked Open Data
: Linked Open Data ist ein von Tim Berners-Lee entwickeltes
Konzept für Daten. Es bezeichnet ein Netz aus frei
verfügbaren Daten, das im Interesse der Allgemeinheit
ohne Einschränkungen zur Nutzung, Verbreitung und
Weiterverwendung zugänglich gemacht wird.\
Linked Open Data gelten als hoch maschinenlesbare Open Data
und werden somit auf opendata.swiss referenziert.\
Sollten Sie Fragen zum Thema haben oder möchten Sie
Ihre Daten als Linked Open Data publizieren,
kontaktieren Sie bitte [support-lindas@bar.admin.ch](mailto:support-lindas@bar.admin.ch).

<a id="term-Open-Government-Data"></a>

Open Government Data
: Maschinenlesbare, offene und wiederverwendbare
Verwaltungsdaten.
[Mehr Informationen](https://www.admin.ch/opc/de/federal-gazette/2019/879.pdf)

<a id="term-Open-by-default"></a>

Open by default
: Prinzip, das im Rahmen der Strategie [Open Government Data 2019 – 2023](https://www.admin.ch/opc/de/federal-gazette/2019/879.pdf) auf Bundesebene umgesetzt werden muss. Ab 2020 sollen alle neuen publizierten Daten von Bundesstellen als offene, frei und maschinell nutzbare Verwaltungsdaten publiziert werden.

<a id="term-Produktionsumgebung"></a>

Produktionsumgebung
: Das CMS von opendata.swiss. Nachdem Datenpublizierende
Ihre Daten in der Abnahmeumgebung geprüft haben, werden
diese öffentlich in der Produktionsumgebung publiziert.\
Die URL erhalten Sie bei der ersten Registrierung.

<a id="term-Ressource"></a>

Ressource
: Eine physische Verkörperung respektive Repräsentanz
des Datasets in einem spezifischen Format.\
Eine Ressource (oder auch «Distribution») ist eine
spezifische Repräsentierung des Datasets.\
Dies können unterschiedliche Bereitstellungsformen
eines Datasets (z.B. ein bestimmtes Format),
unterschiedliche Zeitreihen oder auch
unterschiedliche Aggregationsstufen sein.

<a id="term-Showcase"></a>

Showcase
: Unter [https://opendata.swiss/de/showcase](https://opendata.swiss/de/showcase)
werden laufend
unterschiedliche Arten von Nutzungsbeispielen von Open
Government Data aufgenommen. Wollen Sie uns auf weitere
Showcases aufmerksam machen,
[kontaktieren Sie uns gern](mailto:opendata@bfs.admin.ch).

<a id="term-Slug"></a>

Slug
: Maschinenlesbarerer Name für ein Dataset oder eine
Organisation, welcher auch im URL verwendet wird.

<a id="term-Verwaltungsdaten"></a>

Verwaltungsdaten
: Verwaltungsdaten sind Daten, die im Rahmen eines
gesetzlichen Auftrags erhoben, erstellt, verwaltet,
verarbeitet und gespeichert werden. Es handelt sich um
strukturierte Sammlungen von Daten, in Form von
beispielsweise Tabellen oder Datenbanken. «Geschäftsdossiers»
oder «Ordnungssysteme» gelten nicht als Verwaltungsdaten
ebenso nicht wie «Fachanwendungen» oder «Applikationen»,
obwohl ihre Inhalte durchaus als Verwaltungsdaten betrachtet
werden können.
