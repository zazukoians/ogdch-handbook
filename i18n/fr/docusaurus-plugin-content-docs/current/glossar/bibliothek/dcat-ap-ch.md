- ```
  :fa:`home`
  ```

  [Handbuch](../../../index.md)

  ```
  :fa:`chevron-right`
  ```
- [Bibliothek](../bibliothek.md)

  ```
  :fa:`chevron-right`
  ```
- DCAT-AP Switzerland

# DCAT-AP CH

## Der Schweizer Metadatenstandard

[DCAT-AP CH](https://dcat-ap.ch/) ist das Schweizer Anwendungsprofil des Data Catalog Vocabulary
(DCAT) für Datenportale und basiert auf dem
internationalen [DCAT-AP](../begriffe.md#term-DCAT-AP) Standard. Es ist auf opendata.swiss implementiert.

Die Metadaten der Datasets, die von opendata.swiss
[geharvestet](../../publizieren/publikationsvarianten/harvesting.md)
oder per [XML-Upload](../../publizieren/publikationsvarianten/metadaten-via-xml-hochladen.md)
auf die Plattform importiert werden, müssen den DCAT-AP CH Standard erfüllen.
Unten finden Sie beschrieben, welche Mindestanforderungen Ihre Metadaten erfüllen
müssen (mandatory, conditional). Ebenso finden Sie eine Beschreibung optionaler Felder,
die von opendata.swiss unterstützt werden (optional).

DCAT-AP und DCAT-AP CH werden stetig weiterentwickelt. Daher kann es zeitweise zu Abweichungen
zwischen dem auf opendata.swiss implementierten und dem weiterentwickelten Standard kommen.
Sollten Sie solche Unterschiede feststellen, dürfen Sie sich gerne
[an uns wenden](mailto:opendata@bfs.admin.ch).

Falls Ihre Datasets Metadaten enthalten, die über den auf opendata.swiss implementierten
Standard hinausgehen, werden diese bei uns weder berücksichtigt noch angezeigt.

Diese Dokumentation ist derzeit nur in Englisch verfügbar.

### DCAT-AP CH Standard Overview

- [RDF-File Structure & Example](#dcat-ap-ch-example-rdf)
- [Namespaces](#dcat-ap-ch-namespaces)
- [Internationalisation](#dcat-ap-ch-internationalisation)
- [Overview](#dcat-ap-ch-overview)
- [DCAT Catalog](#dcat-ap-ch-catalog)
- [DCAT Dataset](#dcat-ap-ch-dataset)
- [DCAT Resource](#dcat-ap-ch-distribution)

<a id="dcat-ap-ch-example-rdf"></a>

### RDF-File Structure & Example

Your data catalog must follow the DCAT-AP CH standard.
It consists of the following 4 Classes:

- the catalog
- the publishers
- the datasets
- the distributions

These classes relate to each other as described below.
All examples will be provided in both `turtle` and `rdf/xml`. `rdf/xml` is used for the actual import of the data.
You can use a converter to convert between these two formats:
[https://www.easyrdf.org/converter](https://www.easyrdf.org/converter)

It is important to provide URIs for each of the classes in your catalog.

The example catalogs above show the classes without any further properties.
Here you can find an overview of all possible properties and which of these you must provide.

- `mandatory` means you MUST provide them
- `conditional` means you must provide them under certain conditions
- `optional` means you may provide them

#### Example for Download

Have a look at the following file for a quickstart:
[`full dataset example`](../../..//examples/ogdch_dcatapch_v3_import.rdf)

<a id="dcat-ap-ch-namespaces"></a>

### Namespaces

All classes and properties have definitions that are accessible with a URI.
Usually these URIs are provided in the header of the data catalog and receive an alias there,
so that they can be easily referenced in the rest of the catalog:
A `dcat:Dataset` really means `http://www.w3.org/ns/dcat#Dataset`. To avoid having to
write that throughout the document, a namespace is defined by `@prefix dcat: <http://www.w3.org/ns/dcat#> .` in `turtle`
or `xmlns:dcat="http://www.w3.org/ns/dcat#"` in `RDF`.

These are the namespaces that are used in DCAT-AP CH:

```turtle
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix vcard: <http://www.w3.org/2006/vcard/ns#> .
@prefix schema: <http://schema.org/> .
```

```xml
<rdf:RDF
  xmlns:dcat="http://www.w3.org/ns/dcat#"
  xmlns:dct="http://purl.org/dc/terms/"
  xmlns:foaf="http://xmlns.com/foaf/0.1/"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema#"
  xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:vcard="http://www.w3.org/2006/vcard/ns#"
  xmlns:schema="http://schema.org/"
>
```

<a id="dcat-ap-ch-internationalisation"></a>

### Internationalisation

The DCAT-AP CH Standard allows/supports that text elements of
datasets and their distributions are translated in the following four
languages:

- French (fr)
- German (de)
- Italian (it)
- English (en)

Examples are provided for how to translate those
elements for all relevant properties.

<a id="dcat-ap-ch-overview"></a>

### Overview

Below you find a list of classes that you need to implement in your catalog.
Translatable elements are marked as such under usage notes.

#### Classes of DCAT-AP CH

| class                                    | URI                               | usage notes   |
| ---------------------------------------- | --------------------------------- | ------------- |
| [Catalog](#dcat-ap-ch-catalog)           | dcat:Catalog      | **mandatory** |
| [Dataset](#dcat-ap-ch-dataset)           | dcat:Dataset      | **mandatory** |
| [Distribution](#dcat-ap-ch-distribution) | dcat:Distribution | **mandatory** |

#### Properties of dcat:Catalog

| property                         | URI                          | usage notes   |
| -------------------------------- | ---------------------------- | ------------- |
| [dataset](#dcat-catalog-dataset) | dcat:dataset | **mandatory** |

#### Properties of dcat:Dataset

| property                                                                                           | URI                                    | usage notes                                                                                                                 |
| -------------------------------------------------------------------------------------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [title](#dcat-dataset-title)                                                                       | dct:title              | **mandatory**, multilingual                                                                                                 |
| [description](#dcat-dataset-description)                                                           | dct:description        | **mandatory**, multilingual                                                                                                 |
| ``<br/>:fa:`exclamation`<br/>``<br/><br/> [publisher](#dcat-dataset-publisher)                     | dct:publisher          | **mandatory**, <br/><br/>``<br/>:fa:`exclamation`<br/>``<br/><br/> import format changed                                    |
| [contact point](#dcat-dataset-contact-point)                                                       | dcat:contactPoint      | **mandatory**                                                                                                               |
| [identifier](#dcat-dataset-identifier)                                                             | dct:identifier         | **mandatory**                                                                                                               |
| [distribution](#dcat-dataset-distribution)                                                         | dcat:distribution      | **mandatory**                                                                                                               |
| [issued](#dcat-dataset-issued)                                                                     | dct:issued             | conditional                                                                                                                 |
| [modified](#dcat-dataset-modified)                                                                 | dct:modified           | conditional                                                                                                                 |
| ``<br/>:fa:`exclamation`<br/>``<br/><br/> [theme](#dcat-dataset-theme)                             | dcat:theme             | conditional, <br/><br/>``<br/>:fa:`exclamation`<br/>``<br/><br/> new vocabulary to use                                      |
| ``<br/>:fa:`exclamation`<br/>``<br/><br/> [landing page](#dcat-dataset-landing-page)               | dcat:landingPage       | conditional,  <br/><br/>``<br/>:fa:`exclamation`<br/>``<br/><br/> import format changed                                     |
| [language](#dcat-dataset-language)                                                                 | dct:language           | conditional                                                                                                                 |
| [keyword](#dcat-dataset-keyword)                                                                   | dcat:keyword           | optional, multilingual                                                                                                      |
| [spatial](#dcat-dataset-spatial)                                                                   | dct:spatial            | optional                                                                                                                    |
| [coverage](#dcat-dataset-coverage)                                                                 | dct:coverage           | optional                                                                                                                    |
| [temporal](#dcat-dataset-temporal)                                                                 | dct:temporal           | optional                                                                                                                    |
| ``<br/>:fa:`exclamation`<br/>``<br/><br/> [accrual periodicity](#dcat-dataset-accrual-periodicity) | dct:accrualPeriodicity | optional, <br/><br/>``<br/>:fa:`exclamation`<br/>``<br/><br/> import format changed                                         |
| [related resource](#dcat-dataset-relation)                                                         | dct:relation           | ``<br/>:fa:`exclamation`<br/>``<br/><br/> optional, **mandatory** for federal level, the legal basis must be indicated here |
| ``<br/>:fa:`exclamation`<br/>``<br/><br/> [qualified relation](#dcat-dataset-qualified-relation)   | dcat:qualifiedRelation | optional, <br/><br/>``<br/>:fa:`exclamation`<br/>``<br/><br/> replaces the property rdfs:seeAlso            |
| ``<br/>:fa:`exclamation`<br/>``<br/><br/> [documentation](#dcat-dataset-documentation)             | foaf:page              | optional, <br/><br/>``<br/>:fa:`exclamation`<br/>``<br/><br/> new property                                                  |
| ``<br/>:fa:`exclamation`<br/>``<br/><br/> [conforms to](#dcat-dataset-conforms-to)                 | dct:conformsTo         | optional, <br/><br/>``<br/>:fa:`exclamation`<br/>``<br/><br/> new property                                                  |

#### Properties of dcat:Distribution

| property                                                                                                | URI                                     | usage notes                                                                                                          |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [issued](#dcat-distribution-issued)                                                                     | dct:issued              | **mandatory**                                                                                                        |
| [access url](#dcat-distribution-access-url)                                                             | dcat:accessURL          | **mandatory**                                                                                                        |
| ``<br/>:fa:`exclamation`<br/>``<br/><br/> [license](#dcat-distribution-license)                         | dct:license             | **mandatory**, replaces dct:rights                                                                   |
| [title](#dcat-distribution-title)                                                                       | dct:title               | conditional, multilingual                                                                                            |
| [description](#dcat-distribution-description)                                                           | dct:description         | conditional, multilingual                                                                                            |
| [byte size](#dcat-distribution-byte-size)                                                               | dct:byteSize            | conditional                                                                                                          |
| [media type](#dcat-distribution-media-type)                                                             | dcat:mediaType          | conditional                                                                                                          |
| ``<br/>:fa:`exclamation`<br/>``<br/><br/> [format](#dcat-distribution-format)                           | dct:format              | conditional, <br/><br/>``<br/>:fa:`exclamation`<br/>``<br/><br/> use a Controlled Vocabulary (CV) |
| ``<br/>:fa:`exclamation`<br/>``<br/><br/> [rights](#dcat-distribution-rights)                           | dct:rights              | optional, <br/><br/>``<br/>:fa:`exclamation`<br/>``<br/><br/> for exceptional use only                               |
| [language](#dcat-distribution-language)                                                                 | dct:language            | conditional                                                                                                          |
| [modified](#dcat-distribution-modified)                                                                 | dct:modified            | conditional                                                                                                          |
| [identifier](#dcat-distribution-identifier)                                                             | dct:identifier          | optional                                                                                                             |
| [download url](#dcat-distribution-download-url)                                                         | dcat:downloadURL        | optional                                                                                                             |
| [coverage](#dcat-distribution-coverage)                                                                 | dct:coverage            | optional                                                                                                             |
| ``<br/>:fa:`exclamation`<br/>``<br/><br/> [documentation](#dcat-distribution-documentation)             | foaf:page               | optional, <br/><br/>``<br/>:fa:`exclamation`<br/>``<br/><br/> new property                                           |
| ``<br/>:fa:`exclamation`<br/>``<br/><br/> [temporal resolution](#dcat-distribution-temporal-resolution) | dcat:temporalResolution | optional, <br/><br/>``<br/>:fa:`exclamation`<br/>``<br/><br/> new property                                           |
| ``<br/>:fa:`exclamation`<br/>``<br/><br/> [accessService](#dcat-distribution-access-service)            | dcat:accessService      | optional, <br/><br/>``<br/>:fa:`exclamation`<br/>``<br/><br/> new property, read usage notes                         |
| ``<br/>:fa:`exclamation`<br/>``<br/><br/> [conforms to](#dcat-distribution-conforms-to)                 | dct:conformsTo          | optional, <br/><br/>``<br/>:fa:`exclamation`<br/>``<br/><br/> new property                                           |

<a id="dcat-ap-ch-catalog"></a>

### Catalog

<a id="dcat-catalog-class"></a>

#### dcat:Catalog (DCAT)

- **DCAT URI:**
  dcat:Catalog
- **Requirement Level:**
  mandatory
- **Cardinality:**
  1..1
- **Description:**
  Catalog with datasets, usually a catalog endpoint
- **Usage Notes:**
  If possible provide a URI, where the catalog can be accessed

<a id="dcat-catalog-dataset"></a>

#### dcat:dataset (DCAT)

- **DCAT URI:**
  dcat:dataset
- **Domain:**
  dcat:Catalog
- **Value:**
  `dcat:Dataset`
- **Requirement Level:**
  mandatory
- **Cardinality:**
  1..n
- **Description:**
  Datasets that are included in the catalog
- **Usage Notes:**
  Provide at least one dataset per catalog

<a id="dcat-ap-ch-dataset"></a>

### Dataset

<a id="dcat-dataset-class"></a>

#### dcat:Dataset (DCAT)

- **DCAT URI:**
  dcat:Dataset
- **Requirement Level:**
  mandatory
- **Cardinality:**
  1..n
- **Description:**
  A single dataset of the catalog
- **Usage Notes:**
  Provide at least one dataset per catalog.\
  Provide a URI per dataset if possible\
  Provide a URI per dataset if possible

<a id="dcat-dataset-identifier"></a>

#### dct:identifier (DCAT)

- **DCAT URI:**
  dct:identifier
- **Domain:**
  dcat:Dataset
- **Value:**
  `rdfs:Literal` [http://www.w3.org/TR/rdf-schema/#ch_literal](http://www.w3.org/TR/rdf-schema/#ch_literal) with
  special requirements, see Usage Notes
- **Requirement Level:**
  mandatory
- **Cardinality:**
  1..1
- **Description:**
  Unique identifier of the dataset across all publishers.
- **Usage Notes:**
  The identifier is expected in the following structure:
  `[Source-Dataset-ID]@[Source-Organisation-ID]` where
  `[Source-Organisation-ID]` is the [slug](../begriffe.md#term-Slug) of
  the organization on opendata.swiss.
  `[Source-Dataset-ID]` must be unique within the
  datasets of the organization. A recommended way to choose this
  is to use the ID in the source system of the
  publisher. It can consist of the following characters:
  `A-Za-z`, `0-9` and `-` and `_`

<a id="dcat-dataset-title"></a>

#### dct:title (DCAT)

- **DCAT URI:**
  dct:title
- **Domain:**
  dcat:Dataset
- **Value:**
  `rdfs:Literal` [http://www.w3.org/TR/rdf-schema/#ch_literal](http://www.w3.org/TR/rdf-schema/#ch_literal)
- **Requirement Level:**
  mandatory
- **Cardinality:**
  1..4 (one for each language)
- **Description:**
  Title of the dataset in different languages
- **Usage Notes:**
  - The title must be provided as language-tagged strings in at least one of the languages `en`, `de`, `fr`, `it`.
  - Federal offices must provide the title in at least two official languages (`de`, `fr`, `it`). Cantons are required to provide it in at least one official language. All others must make it available in at least one of the four languages (`en`, `de`, `fr`, `it`). Whenever possible, it should be provided in all four languages.

<a id="dcat-dataset-description"></a>

#### dct:description (DCAT)

- **DCAT URI:**
  dct:description
- **Domain:**
  dcat:Dataset
- **Value:**
  `rdfs:Literal` [http://www.w3.org/TR/rdf-schema/#ch_literal](http://www.w3.org/TR/rdf-schema/#ch_literal)
- **Requirement Level:**
  mandatory
- **Cardinality:**
  1..4 (one for each language)
- **Description:**
  Description of the dataset in different languages
- **Usage Notes:**
  - The description must be provided as language-tagged strings in at least one of the languages `en`, `de`, `fr`, `it`.
  - Federal offices must provide the description in at least two official languages (`de`, `fr`, `it`). Cantons are required to provide it in at least one official language. All others must make it available in at least one of the four languages (`en`, `de`, `fr`, `it`). Whenever possible, it should be provided in all four languages.
  - Markdown can be used.

<a id="dcat-dataset-publisher"></a>

#### dct:publisher (DCAT)

- **DCAT URI:**
  dct:publisher
- **Domain:**
  dcat:Dataset
- **Value:**

  ```
  :fa:`exclamation`
  ```

  `foaf:Agent` [http://xmlns.com/foaf/spec/#term_Agent](http://xmlns.com/foaf/spec/#term_Agent)
- **Requirement Level:**
  mandatory
- **Cardinality:**
  1..1
- **Description:**
  The publisher is the organization with the legal authority
  to publish the dataset.
- **Usage Notes:**
  - The publisher’s name can be provided in the three official languages DE, FR and IT as well as in EN.
  - Refer to the following for a distinction between `dct:publisher` and `dcat:contactPoint`:
    [https://joinup.ec.europa.eu/release/how-are-publisher-and-contact-point-modelled](https://joinup.ec.europa.eu/release/how-are-publisher-and-contact-point-modelled)
- **Update:**

  ```
  :fa:`exclamation`
  ```

  Publisher must be a foaf:Agent.

<a id="dcat-dataset-contact-point"></a>

#### dcat:contactPoint (DCAT)

- **DCAT URI:**
  dcat:contactPoint
- **Domain:**
  dcat:Dataset
- **Value:**
  `vcard:Kind`
- **Requirement Level:**
  mandatory
- **Cardinality:**
  1..n
- **Description:**
  One or more contact email addresses for this dataset
- **Usage Notes:**
  `vcard:Kind` is in itself a class: choose between
  `vcard:Organization` and `vcard:Individual` and
  set the attributes `vcard:hasEmail` and `vcard:fn`.

<a id="dcat-dataset-distribution"></a>

#### dcat:distribution (DCAT)

- **DCAT URI:**
  dcat:distribution
- **Domain:**
  dcat:Dataset
- **Value:**
  `dcat:Distribution`
- **Requirement Level:**
  mandatory
- **Cardinality:**
  1..n
- **Description:**
  Distributions that belong to the dataset
- **Usage Notes:**
  Provide at least one distribution per dataset

<a id="dcat-dataset-issued"></a>

#### dct:issued (DCAT)

- **DCAT URI:**
  dct:issued
- **Domain:**
  dcat:Dataset
- **Value:**
  [rdfs:Literal](https://www.w3.org/TR/rdf-schema/#ch_literal) (typed as [xsd:date](https://www.w3.org/TR/xmlschema11-2/#date), [xsd:dateTime](https://www.w3.org/TR/xmlschema11-2/#dateTime), [xsd:gYear](https://www.w3.org/TR/xmlschema11-2/##gYear) or [xsd:gYearMonth](https://www.w3.org/TR/xmlschema11-2/#gYearMonth))
- **Requirement Level:**
  conditional: required once the the dataset is published
- **Cardinality:**
  0..1
- **Description:**
  Date of the first publication of the dataset
- **Usage Notes:**
  Can be empty while the dataset is in preparation.

<a id="dcat-dataset-modified"></a>

#### dct-modified (DCAT)

- **DCAT URI:**
  dct:modified
- **Domain:**
  dcat:Dataset
- **Value:**
  [rdfs:Literal](https://www.w3.org/TR/rdf-schema/#ch_literal) (typed as [xsd:date](https://www.w3.org/TR/xmlschema11-2/#date), [xsd:dateTime](https://www.w3.org/TR/xmlschema11-2/#dateTime), [xsd:gYear](https://www.w3.org/TR/xmlschema11-2/##gYear) or [xsd:gYearMonth](https://www.w3.org/TR/xmlschema11-2/#gYearMonth))
- **Requirement Level:**
  conditional: required when the dataset has changed since its
  first publication
- **Cardinality:**
  0..1
- **Description:**
  Date of the last change

<a id="dcat-dataset-theme"></a>

#### dcat:theme (DCAT)

- **DCAT URI:**
  dcat:theme
- **Domain:**
  dcat:Dataset
- **Value:**
  skos:Concept
- **Requirement Level:**
  optional
- **Cardinality:**
  0..n
- **Description:**
  This property refers to a theme/category of the dataset. A dataset can be associated
  with multiple themes. CV to be used: [[VOCAB-EU-THEME]](https://publications.europa.eu/resource/authority/data-theme)

<a id="dcat-dataset-language"></a>

#### dct:language (DCAT)

- **DCAT-URI:**
  dct:language
- **Domain:**
  dcat:Dataset
- **Value:**
  [dct:LinguisticSystem](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/LinguisticSystem)
- **Requirement Level:**
  conditional
- **Cardinality:**
  0..n
- **Description:**
  Languages in which distributions are available
- **Usage Notes:**
  - Should contain all languages for which a distribution of the dataset is available.
  - If all distributions are language-independent, this field can be left out.
  - CV to be used: [VOCAB-EU-LANGUAGE](https://publications.europa.eu/resource/authority/language)
  - Only the languages `DEU`, `FRA`, `ENG`, `ITA` are currently imported to opendata.swiss

<a id="dcat-dataset-landing-page"></a>

#### dcat:landingPage (DCAT)

- **DCAT URI:**
  dcat:landingPage
- **Domain:**
  dcat:Dataset
- **Value:**

  ```
  :fa:`exclamation`
  ```

  `foaf:Document` [http://xmlns.com/foaf/spec/#term_Document](http://xmlns.com/foaf/spec/#term_Document)
- **Requirement Level:**
  optional
- **Cardinality:**
  0..1
- **Description:**
  Website of the dataset with related information
- **Usage Notes:**
  If data of the dataset is only accessible via a landing page
  (i.e. direct download URLs are not known), the landing page must be set and
  the link should be duplicated as `dcat:accessURL` on a distribution.
- **Update:**

  ```
  :fa:`exclamation`
  ```

  Use a resource instead of a string literal for the landing page

<a id="dcat-dataset-relation"></a>

#### dct:relation (DCAT)

- **DCAT URI:**
  dct:relation
- **Domain:**
  dcat:Dataset
- **Value:**
  `rdfs:Resource`
- **Requirement Level:**
  optional
- **Cardinality:**
  0..n
- **Description:**
  related resource
- **Usage Notes:**
  - Link to documents that provide further information for the dataset
  - This property is also used to link to the legal basis regarding the publication of the dataset
  - Labels for the link can be specified in the four languages `de`, `fr`, `it`, `en`.

<a id="dcat-dataset-documentation"></a>

#### foaf:page (DCAT)

- **DCAT URI:**
  foaf:page
- **Domain:**
  dcat:Dataset
- **Value:**
  `foaf:Document`
- **Requirement Level:**
  Optional
- **Cardinality:**
  0..n
- **Description:**
  documentation
- **Usage Notes:**
  This property refers to a page or document about this dataset

<a id="dcat-dataset-conforms-to"></a>

#### dct:conformsTo (DCAT)

- **DCAT URI:**
  dct:conformsTo
- **Domain:**
  dcat:Dataset
- **Value:**
  `dct:Standard`
- **Requirement Level:**
  Optional
- **Cardinality:**
  0..n
- **Description:**
  This property refers to an implementing rule or other specification.
- **Usage Notes:**
  This property SHOULD be used to indicate the model, schema, ontology, view or profile that this representation of a dataset conforms to. This is (generally) a complementary concern to the format or media-type.

<a id="dcat-dataset-keyword"></a>

#### dcat:keyword (DCAT)

- **DCAT URI:**
  dcat:keyword
- **Domain:**
  dcat:Dataset
- **Value:**
  `rdfs:Literal` [http://www.w3.org/TR/rdf-schema/#ch_literal](http://www.w3.org/TR/rdf-schema/#ch_literal)
- **Requirement Level:**
  optional
- **Cardinality:**
  0..n
- **Description:**
  Keywords that match the topic of the dataset and help data users to find it
- **Usage Notes:**
  - Keywords can be added as localized strings in the 4 languages `en`, `de`, `fr`, `it`.
  - Federal offices provide keywords in at least two official languages (`de`, `fr`, `it`). All others provide keywords in at least one language. However, for optimal search results, it is best to provide keywords in all four languages.

<a id="dcat-dataset-spatial"></a>

#### dct:spatial (DCAT)

- **DCAT URI:**
  dct:spatial
- **Domain:**
  dcat:Dataset
- **Value:**
  `dct:Location` [https://www.dublincore.org/specifications/dublin-core/dcmi-terms/2012-06-14/#terms-Location](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/2012-06-14/#terms-Location)
- **Requirement Level:**
  optional
- **Cardinality:**
  0..n
- **Description:**
  Geographical classification of the dataset.
- **Usage Notes:**
  Can be a description, coordinates, a bounding-box or a polygon.\
  **Usage Notes:**
  Can be a description, coordinates, a bounding-box or a polygon.\
  This field currently supports GeoJSON with the
  [LOCN extension](https://www.w3.org/community/locadd/wiki/LOCN_extension:_Metadata) .
  See also: [How should dct:spatial and dct:Location be used?](https://joinup.ec.europa.eu/release/how-should-dctspatial-and-dctlocation-be-used)                                |

<a id="dcat-dataset-coverage"></a>

#### dct:coverage (DCAT)

- **DCAT URI:**
  dct:coverage
- **Domain:**
  dcat:Dataset
- **Value:**
  `dct:LocationPeriodOrJurisdiction`,
  see [http://dublincore.org/documents/2012/06/14/dcmi-terms/?v=terms#LocationPeriodOrJurisdiction](http://dublincore.org/documents/2012/06/14/dcmi-terms/?v=terms#LocationPeriodOrJurisdiction)
- **Requirement Level:**
  optional
- **Cardinality:**
  0..n
- **Description:**
  The location or time a dataset covers.
- **Usage Notes:**
  This property is deprecated and might be excluded from future versions of DCAT-AP CH.\
  Consider using `dct:temporal` or `dct:spatial`.\
  If a date is provided, it does not have to be an ISO date.

<a id="dcat-dataset-temporal"></a>

#### dct:temporal (DCAT)

- **DCAT URI:**
  dct:temporal
- **Domain:**
  dcat:Dataset
- **Value:**
  [dct:PeriodOfTime](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/2012-06-14/#terms-PeriodOfTime). Start and end date as [rdfs:Literal](https://www.w3.org/TR/rdf-schema/#ch_literal) (typed as [xsd:date](https://www.w3.org/TR/xmlschema11-2/#date), [xsd:dateTime](https://www.w3.org/TR/xmlschema11-2/#dateTime), [xsd:gYear](https://www.w3.org/TR/xmlschema11-2/##gYear) or [xsd:gYearMonth](https://www.w3.org/TR/xmlschema11-2/#gYearMonth))
- **Requirement Level:**
  optional
- **Cardinality:**
  0..n
- **Description:**
  One or more time period(s) that the dataset covers.
- **Usage Notes:**
  `<schema:startDate>` contains the start date,
  `<schema:endDate>` contains the end date. It needs a start and end date. If you do not know the end date, please do not use the property.

<a id="dcat-dataset-accrual-periodicity"></a>

#### dct:accrual-periodicity (DCAT)

- **DCAT URI:**
  dct:accrualPeriodicity
- **Domain:**
  dcat:Dataset
- **Value:**

  ```
  :fa:`exclamation`
  ```

  Controlled vocabulary [http://publications.europa.eu/resource/authority/frequency](http://publications.europa.eu/resource/authority/frequency)
- **Requirement Level:**
  optional
- **Cardinality:**
  0..1
- **Description:**
  The frequency with which this dataset is updated.
- **Usage Notes:**
  Provide a term of the controlled vocabulary in the form of a URI.
- **Update:**

  ```
  :fa:`exclamation`
  ```

  Use EU vocabulary that is mandatory on DCAT-AP.

<a id="dcat-dataset-qualified-relation"></a>

#### dcat:qualifiedRelation (DCAT)

- **DCAT URI:**
  [dcat:qualifiedRelation](https://www.w3.org/TR/vocab-dcat/#Property:resource_qualified_relation)
- **Domain:**
  dcat:Dataset
- **Value:**
  [rdfs:Resource](https://www.w3.org/TR/vocab-dcat/#Class:Relationship)
- **Requirement Level:**
  Optional
- **Cardinality:**
  0..n
- **Description:**
  Link to related datasets on opendata.swiss.
- **Usage Notes:**
  Contains the identifier of the related dataset. The perma link must be used:

  `https://ogdch-abnahme.clients.liip.ch/perma/adb280a9-381d-4fb3-ae43-b40ace826dc7@stadt-zurich"`

<a id="dcat-ap-ch-distribution"></a>

### Distribution

<a id="dcat-distribution-class"></a>

#### dcat:Distribution (DCAT)

- **DCAT URI:**
  dcat:Distribution
- **Requirement Level:**
  mandatory
- **Cardinality:**
  1..n
- **Description:**
  A single distribution of a dataset
- **Usage Notes:**
  Provide at least one distribution per dataset

<a id="dcat-distribution-access-url"></a>

#### dcat:accessURL (DCAT)

- **DCAT URI:**
  dcat:accessURL
- **Domain:**
  dcat:Distribution
- **Value:**
  [rdfs:Resource](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/Standard)
- **Requirement Level:**
  mandatory
- **Cardinality:**
  1..n
- **Description:**
  A URL of the resource that gives access to a distribution of the dataset. E.g., landing page, feed, SPARQL endpoint.
- **Usage Notes:**
  - `dcat:accessURL` SHOULD be used for the URL of a service or location that can provide access to this distribution, typically through a Web form, query or API call.
  - If the accessURL is also a downloadURL, then it must be also entered in the `dcat:downloadURL` field.
  - If the distribution(s) are accessible only through a landing page (i.e., direct download URLs are not known), then the landing page URL associated with the dcat:Dataset SHOULD be duplicated as access URL on a distribution.
  - The use of [http://www.w3.org/2001/XMLSchema#anyURI](http://www.w3.org/2001/XMLSchema#anyURI) is deprecated.

<a id="dcat-distribution-download-url"></a>

#### dcat:downloadURL (DCAT)

- **DCAT URI:**
  dcat:downloadURL
- **Domain:**
  dcat:Distribution
- **Value:**
  [rdfs:Resource](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/Standard)
- **Requirement Level:**
  optional
- **Cardinality:**
  0..n
- **Description:**
  URL for the download, if the distribution can be downloaded
- **Usage Notes:**
  - If the distribution can be downloaded, this property usually contains the same URL as `dcat:accessURL`. See also [https://www.w3.org/ns/dcat#downloadURL](https://www.w3.org/ns/dcat#downloadURL)
  - The use of [http://www.w3.org/2001/XMLSchema#anyURI](http://www.w3.org/2001/XMLSchema#anyURI) is deprecated.

<a id="dcat-distribution-issued"></a>

#### dct:issued (DCAT)

- **DCAT URI:**
  dct:issued
- **Domain:**
  dcat:Distribution
- **Value:**
  [rdfs:Literal](https://www.w3.org/TR/rdf-schema/#ch_literal) (typed as [xsd:date](https://www.w3.org/TR/xmlschema11-2/#date), [xsd:dateTime](https://www.w3.org/TR/xmlschema11-2/#dateTime), [xsd:gYear](https://www.w3.org/TR/xmlschema11-2/##gYear) or [xsd:gYearMonth](https://www.w3.org/TR/xmlschema11-2/#gYearMonth))
- **Requirement Level:**
  mandatory
- **Cardinality:**
  1..1
- **Description:**
  Date of the publication of this distribution

<a id="dcat-distribution-rights"></a>

#### dct:rights (DCAT)

- **DCAT URI:**
  dct:rights
- **Domain:**
  dcat:Distribution
- **Value:**
  [dct:RightsStatement](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/RightsStatement)
- **Requirement Level:**
  Recommended
- **Cardinality:**
  0..1
- **Description:**
  This property refers to a statement that specifies rights associated with the Distribution. Only used in exceptional cases (see usage notes below).
- **Usage notes:**
  - **Important!** The [dct:licence](https://handbook.opendata.swiss/de/content/glossar/bibliothek/dcat-ap-ch.html#dct-license-dcat) property is required to specify the [terms of use](https://opendata.swiss/de/terms-of-use) of opendata.swiss.
  - **Exception:** dct:rights is therefore only used if a publisher uses datasets with CC licences in its catalogue, which it wants to forward to data.europa.eu. These can then be specified under dct:rights. On opendata.swiss, only the three CC licences specified below are imported under dct:rights and forwarded to the portal data.europa.eu. The CC licences are not displayed on opendata.swiss.
  - CV to be used for the CC-License: [DCAT-AP CH license vocabulary](https://dcat-ap.ch/vocabulary/licenses/20240716.html)

```default
https://creativecommons.org/publicdomain/zero/1.0/
https://creativecommons.org/licenses/by/4.0/
https://creativecommons.org/licenses/by-sa/4.0/
```

```default
NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired
NonCommercialAllowed-CommercialAllowed-ReferenceRequired
NonCommercialAllowed-CommercialWithPermission-ReferenceNotRequired
NonCommercialAllowed-CommercialWithPermission-ReferenceRequired
```

```default
NonCommercialAllowed-CommercialNotAllowed-ReferenceNotRequired
NonCommercialAllowed-CommercialNotAllowed-ReferenceRequired
NonCommercialNotAllowed-CommercialNotAllowed-ReferenceNotRequired
NonCommercialNotAllowed-CommercialNotAllowed-ReferenceRequired
NonCommercialNotAllowed-CommercialAllowed-ReferenceNotRequired
NonCommercialNotAllowed-CommercialAllowed-ReferenceRequired
NonCommercialNotAllowed-CommercialWithPermission-ReferenceNotRequired
NonCommercialNotAllowed-CommercialWithPermission-ReferenceRequired
```

<a id="dcat-distribution-media-type"></a>

#### dcat:mediaType (DCAT)

- **DCAT URI:**
  dcat:mediaType
- **Domain:**
  dcat:Distribution
- **Value:**
  `dct:MediaType` must be a MIME type of [[IANA-MEDIA-TYPES]](http://www.iana.org/assignments/media-types/media-types.xhtml)
- **Requirement Level:**
  conditional, required if the distribution is  a file accessible by a `dcat:downloadURL`
- **Cardinality:**
  0..1
- **Description:**
  Resource format of the data provided by the `dcat:downloadURL`
- **Usage Notes:**
  Not required for distributions that have only a `dcat:accessURL`

<a id="dcat-distribution-format"></a>

#### dct:format (DCAT)

- **DCAT URI:**
  dct:format
- **Domain:**
  dcat:Distribution
- **Value:**
  [dct:MediaTypeOrExtent](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/MediaTypeOrExtent)
- **Requirement Level:**
  Recommended, required if the distribution is accessible by a `dcat:downloadURL`
- **Cardinality:**
  0..1
- **Description:**
  This property refers to the file format of the distribution
- **Usage Notes:**
  CV to be used: [[VOCAB-EU-FILE-TYPE](https://dcat-ap.ch/releases/2.0/dcat-ap-ch.html#bib-vocab-eu-file-type)]

  If a format is not available:

  > 1. media type [[IANA-MEDIA-TYPES](https://dcat-ap.ch/releases/2.0/dcat-ap-ch.html#bib-iana-media-types)] should be used
  > 2. if required, please contact [Geschäftsstelle OGD](mailto:opendata@bfs.admin.ch).

<a id="dcat-distribution-byte-size"></a>

#### dcat:byteSize (DCAT)

- **DCAT URI:**
  dcat:byteSize
- **Domain:**
  dcat:Distribution
- **Value:**
  `rdfs:Literal` typed as `xsd:decimal` or `xsd:nonNegativeInteger`
- **Requirement Level:**
  conditional, required if the distribution is accessible by a `dcat:downloadURL`
- **Cardinality:**
  0..1
- **Description:**
  Size of the data in bytes
- **Usage Notes:**
  Must be a non negative integer.

<a id="dcat-distribution-modified"></a>

#### dct:modified (DCAT)

- **DCAT URI:**
  RDF-property `dct:modified` of `dcat:Distribution`
- **Domain:**
  dcat:Distribution
- **Value:**
  [rdfs:Literal](https://www.w3.org/TR/rdf-schema/#ch_literal) (typed as [xsd:date](https://www.w3.org/TR/xmlschema11-2/#date), [xsd:dateTime](https://www.w3.org/TR/xmlschema11-2/#dateTime), [xsd:gYear](https://www.w3.org/TR/xmlschema11-2/##gYear) or [xsd:gYearMonth](https://www.w3.org/TR/xmlschema11-2/#gYearMonth))
- **Requirement Level:**
  conditional: required if the distribution has changed since its first
  publication.
- **Cardinality:**
  0..1
- **Description:**
  Date of the last change to the distribution. If this distribution has been changed several times,
  this corresponds to the date of the latest change.

<a id="dcat-distribution-title"></a>

#### dct:title (DCAT)

- **DCAT URI:**
  dct:title
- **Domain:**
  dcat:Distribution
- **Value:**
  `rdfs:Literal` [http://www.w3.org/TR/rdf-schema/#ch_literal](http://www.w3.org/TR/rdf-schema/#ch_literal)
- **Requirement Level:**
  conditional
- **Cardinality:**
  0..4 (one for each language)
- **Description:**
  The title of the distribution
- **Usage Notes:**
  - The title is mandatory if the distribution contains only a part of the content covered by the dataset: for example if it contains only the data for one year, whereas the dataset covers several years in total.
  - The title must be provided as language-tagged strings in at least one of the languages `en`, `de`, `fr`, `it`.
  - Federal offices must provide the title in at least two official languages (`de`, `fr`, `it`). Cantons are required to provide it in at least one official language. All others must make it available in at least one of the four languages (`en`, `de`, `fr`, `it`). Whenever possible, it should be provided in all four languages.

<a id="dcat-distribution-description"></a>

#### dct:description (DCAT)

- **DCAT URI:**
  dct:description
- **Domain:**
  dcat:Distribution
- **Value:**
  `rdfs:Literal` [http://www.w3.org/TR/rdf-schema/#ch_literal](http://www.w3.org/TR/rdf-schema/#ch_literal)
- **Requirement Level:**
  conditional: required if the distribution does not contain all the content of the dataset.
- **Cardinality:**
  0..4 (one for each language)
- **Description:**
  Description of the dataset in different languages
- **Usage Notes:**
  - The description must be provided as language-tagged strings in at least one of the languages `en`, `de`, `fr`, `it`.
  - Federal offices must provide the description in at least two official languages (`de`, `fr`, `it`). Cantons are required to provide it in at least one official language. All others must make it available in at least one of the four languages (`en`, `de`, `fr`, `it`). Whenever possible, it should be provided in all four languages.
  - Markdown can be used.

<a id="dcat-distribution-language"></a>

#### dct:language (DCAT)

- **DCAT URI:**
  dct:language
- **Domain:**
  dcat:Distribution
- **Value:**
  [dct:LinguisticSystem](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/LinguisticSystem)
- **Requirement Level:**
  optional
- **Cardinality:**
  0..n
- **Description:**
  Language in which this distribution is available.
- **Usage Notes:**
  - If the distribution is language independent, this can be left out
  - This property can be repeated if the metadata is provided in multiple languages
  - CV to be used: [VOCAB-EU-LANGUAGE](https://publications.europa.eu/resource/authority/language)
  - Only the languages `DEU`, `FRA`, `ENG`, `ITA` are currently imported to opendata.swiss

<a id="dcat-distribution-identifier"></a>

#### dct:identifier (DCAT)

- **DCAT URI:**
  dct:identifier
- **Domain:**
  dcat:Distribution
- **Value:**
  `rdfs:Literal` [http://www.w3.org/TR/rdf-schema/#ch_literal](http://www.w3.org/TR/rdf-schema/#ch_literal)
- **Requirement Level:**
  optional
- **Cardinality:**
  0..1
- **Description:**
  Identifier of the distribution in the source system

<a id="dcat-distribution-coverage"></a>

#### dct:coverage (DCAT)

- **DCAT URI:**
  dct:coverage
- **Domain:**
  dcat:Distribution
- **Value:**
  `dct:LocationPeriodOrJurisdiction`,
  see [http://dublincore.org/documents/2012/06/14/dcmi-terms/?v=terms#LocationPeriodOrJurisdiction](http://dublincore.org/documents/2012/06/14/dcmi-terms/?v=terms#LocationPeriodOrJurisdiction)
- **Requirement Level:**
  optional
- **Cardinality:**
  0..n
- **Description:**
  Distributions can be marked by a location or time period (for example, one for each canton,
  one for each year, etc.)
- **Usage Notes:**
  This property is a string. When it is used to indicate a date, a custom format
  can be used.

<a id="dcat-distribution-license"></a>

#### dct:license (DCAT)

- **DCAT URI:**
  [dct:license](https://www.w3.org/TR/vocab-dcat/#Property:distribution_license)
- **Domain:**
  dcat:Distribution
- **Value:**
  [dct:LicenseDocument](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#LicenseDocument)
- **Requirement Level:**
  Mandatory
- **Cardinality:**
  1..1
- **Description:**
  The [terms of use](https://opendata.swiss/de/terms-of-use) indicates for what purpose and in what context
  the data of a distribution can be used: for commercial or for non commercial purposes.\
  Does it need to be referenced, when it is used?\
  Does it need to be referenced, when it is used? Must permission be obtained for commercial use.\
  These conditions are included in the terms of use statements. See the list below for the exact values.
- **Usage Notes:**
  - Terms of use are no longer referenced under `dct:rights`, but under `dct:license`.
  - **Exception:** If a CC-license is used for the dataset in addition to the terms of use, it must be referenced under [dct:rights](https://handbook.opendata.swiss/de/content/glossar/bibliothek/dcat-ap-ch.html#dct-rights-dcat). Only the terms of use from the list below are displayed on opendata.swiss. If CC-licenses are included, they should be referenced under `dct:rights` to pass on to the portal data.europa.eu.
  - CV to be used for the terms of use: [DCAT-AP CH license vocabulary](https://dcat-ap.ch/vocabulary/licenses/20240716.html)
  - This field ensures compatibility to other metadata standards such as DCAT-AP.

```default
http://dcat-ap.ch/vocabulary/licenses/terms_open
http://dcat-ap.ch/vocabulary/licenses/terms_by
http://dcat-ap.ch/vocabulary/licenses/terms_ask
http://dcat-ap.ch/vocabulary/licenses/terms_by_ask
```

```default
NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired
NonCommercialAllowed-CommercialAllowed-ReferenceRequired
NonCommercialAllowed-CommercialWithPermission-ReferenceNotRequired
NonCommercialAllowed-CommercialWithPermission-ReferenceRequired
```

```default
NonCommercialAllowed-CommercialNotAllowed-ReferenceNotRequired
NonCommercialAllowed-CommercialNotAllowed-ReferenceRequired
NonCommercialNotAllowed-CommercialNotAllowed-ReferenceNotRequired
NonCommercialNotAllowed-CommercialNotAllowed-ReferenceRequired
NonCommercialNotAllowed-CommercialAllowed-ReferenceNotRequired
NonCommercialNotAllowed-CommercialAllowed-ReferenceRequired
NonCommercialNotAllowed-CommercialWithPermission-ReferenceNotRequired
NonCommercialNotAllowed-CommercialWithPermission-ReferenceRequired
```

<a id="dcat-distribution-documentation"></a>

#### foaf:page (DCAT)

- **DCAT URI:**
  foaf:page
- **Domain:**
  dcat:Distribution
- **Value:**
  `foaf:Document`
- **Requirement Level:**
  Optional
- **Cardinality:**
  0..n
- **Description:**
  documentation
- **Usage Notes:**
  This property refers to a page or document about this Distribution.

<a id="dcat-distribution-temporal-resolution"></a>

#### dcat:temporalResolution (DCAT)

- **DCAT URI:**
  dcat:temporalResolution
- **Domain:**
  dcat:Distribution
- **Value:**
  `xsd:duration` [https://www.w3.org/TR/xmlschema11-2/#duration](https://www.w3.org/TR/xmlschema11-2/#duration)
- **Requirement Level:**
  Optional
- **Cardinality:**
  0..1
- **Description:**
  Minimum time period resolvable in the dataset distribution.
- **Usage Notes:**
  If the dataset is a time-series this should correspond to the spacing
  of the items in the series. For other kinds of dataset, this property will
  usually indicate the smallest time difference between items in the dataset.
- **Usage Notes:**
  Alternative temporal resolutions might be provided in different dataset distributions.

<a id="dcat-distribution-access-service"></a>

#### dcat:accessService (DCAT)

- **DCAT URI:**
  [dcat:accessService](https://www.w3.org/TR/vocab-dcat/#Property:distribution_access_service)
- **Domain:**
  dcat:Distribution
- **Value:**
  [dcat:DataService](https://www.w3.org/TR/vocab-dcat/#Class:Data_Service) ([Class: Data Service](https://dcat-ap.ch/releases/2.0/dcat-ap-ch.html#Class:Data_Service))
- **Requirement Level:**
  Optional
- **Cardinality:**
  0..n
- **Description:**
  This property refers to a data service that gives access to the distribution of the Dataset.
- **Usage Notes:**
  The class dcat:DataService is currently not implemented in opendata.swiss and will therefore not be imported.\
  However, if the property dcat:accessService exists in the catalogue, it will be imported and forwarded to data.europa.eu.

<a id="dcat-distribution-conforms-to"></a>

#### dct:conformsTo (DCAT)

- **DCAT URI:**
  dct:conformsTo
- **Domain:**
  dcat:Distribution
- **Value:**
  [dct:Standard](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/Standard)
- **Requirement Level:**
  Optional
- **Cardinality:**
  0..n
- **Description:**
  This property refers to an implementing rule or other specification.
- **Usage Notes:**
  This property SHOULD be used to indicate the model, schema, ontology, view or profile that this representation of a dataset conforms to. This is (generally) a complementary concern to the format or media-type.
