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
- ISO-19139_che zu DCAT-AP CH

# ISO-19139_che zu DCAT-AP CH

## Transformation des Geometadatenstandards für opendata.swiss

Um Geometadaten auf opendata.swiss publizieren zu können, muss der Geometadatenstandard
[ISO-19139_che](https://www.geocat.admin.ch/de/documentation/gm03-metadata-model.html)
auf den von opendata.swiss genutzten [DCAT-AP CH](dcat-ap-ch.md) abgebildet werden.
Diese Dokumentation beschreibt die Standard-Transformation von ISO-19139_che
nach [DCAT-AP CH](dcat-ap-ch.md),
so wie sie für das Harvesting von Geometadaten auf opendata.swiss
benötigt wird. Es geht dabei um
die [XML-Serialisierung durch XPath](https://de.wikipedia.org/wiki/XPath) .

Diese Dokumentation ist aktuell nur in Englisch verfügbar.

### DCAT-AP CH Standard Overview

- [Example Catalog](#iso-19139-che-example)
- [Overview](#iso-19139-che-overview)
- [Dataset](#iso-19139-che-dataset)
- [Distribution](#iso-19139-che-distribution)

This documentation describes the mapping from ISO-19139_che to [DCAT-AP CH](dcat-ap-ch.md).
ISO-19139_che is a standard used by [geocat.ch](https://www.geocat.ch),
a data source from which opendata.swiss harvests datasets.

In this documentation we focus on the XML serialization of ISO-19139_che
and therefore describe the mapping in form of XPath (if not noted differently).

<a id="iso-19139-che-example"></a>

### Example-Catalog

[Example XML serialization of an ISO-19139_che dataset](https://www.geocat.ch/geonetwork/srv/ger/xml.metadata.get?uuid=c5bc9d6b-cafb-4617-97d7-868ab4cd5506)

<a id="iso-19139-che-overview"></a>

### Overview

Geocat Distributions `//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource`
are mapped either to the [dcat:Dataset](#iso-19139-che-dataset-mapping)
class or to the [dcat:Distribution](#iso-19139-che-distribution-mapping) class, depending on `.//gmd:protocol`

The “Mapped from” column in the table gives just a hint on where the metadata is taken from. Please see
the field descriptions for the actual mapping.

<a id="iso-19139-che-dataset-mapping"></a>

#### Mapping to dcat:Dataset

#### Mappings to dcat:Dataset

| DCAT property                                                         | Mapped from                                                                                           | Usage Notes                           |
|-----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|---------------------------------------|
| [dct:title](dcat-ap-ch.md#dcat-dataset-title)                         | [//gmd:identificationInfo//gmd:citation//gmd:title](#geocat-dataset-title)                            | multilingual                          |
| [dct:description](dcat-ap-ch.md#dcat-dataset-description)             | [//gmd:identificationInfo//gmd:abstract](#geocat-dataset-description)                                 | multilingual                          |
| [dct:publisher](#geocat-dataset-publisher)                            | [//gmd:identificationInfo//gmd:pointOfContact](#geocat-dataset-publisher)                             |                                       |
| [dcat:contactPoint](dcat-ap-ch.md#dcat-dataset-contact-point)         | [//gmd:identificationInfo//gmd:pointOfContact or //gmd:contact](#geocat-dataset-contact-point)        |                                       |
| [dct:identifier](dcat-ap-ch.md#dcat-dataset-identifier)               | [//gmd:fileIdentifier](#geocat-dataset-identifier)                                                    |                                       |
| [dcat:Distribution](dcat-ap-ch.md#dcat-dataset-distribution)          | [//gmd:distributionInfo](#geocat-dataset-distribution)                                                |                                       |
| [dct:issued](dcat-ap-ch.md#dcat-dataset-issued)                       | [//gmd:identificationInfo//gmd:citation//gmd:CI_Date](#geocat-dataset-issued)                         |                                       |
| [modified](dcat-ap-ch.md#dcat-dataset-modified)                       | [//gmd:identificationInfo//gmd:citation//gmd:CI_Date](#geocat-dataset-modified)                       |                                       |
| [dcat:theme](dcat-ap-ch.md#dcat-dataset-theme)                        | [//gmd:identificationInfo//gmd:topicCategory](#geocat-dataset-theme)                                  |                                       |
| [dcat:landingPage](dcat-ap-ch.md#dcat-dataset-landing-page)           | [//gmd:distributionInfo](#geocat-dataset-landing-page)                                                | depends on gmd:protocol               |
| [dct:relation](dcat-ap-ch.md#dcat-dataset-relation)                   | [//gmd:distributionInfo](#geocat-dataset-relation)                                                    | depends on gmd:protocol               |
| [dct:language](dcat-ap-ch.md#dcat-dataset-language)                   | [//gmd:identificationInfo//gmd:language](#geocat-dataset-language)                                    |                                       |
| [dcat:keyword](dcat-ap-ch.md#dcat-dataset-keyword)                    | [//gmd:identificationInfo//gmd:descriptiveKeywords](#geocat-dataset-keyword)                          | multilingual                          |
| [dct:spatial](dcat-ap-ch.md#dcat-dataset-spatial)                     | [//gmd:identificationInfo//gmd:extent](#geocat-dataset-spatial)                                       |                                       |
| [dct:coverage](dcat-ap-ch.md#dcat-dataset-coverage)                   |                                                                                                       | mapping not implemented               |
| [dct:temporal](dcat-ap-ch.md#dcat-dataset-temporal)                   | [//gmd:identificationInfo//gmd:extent//gmd:temporalElement](#geocat-dataset-temporal)                 |                                       |
| [accrual periodicity](dcat-ap-ch.md#dcat-dataset-accrual-periodicity) | [//gmd:identificationInfo//che:CHE_MD_MaintenanceInformation](#geocat-dataset-accrual-periodicity)    |                                       |
| [qualified relation](dcat-ap-ch.md#dcat-dataset-qualified-relation)   | [//gmd:identificationInfo//gmd:aggregationInfo](#geocat-dataset-qualified-relation)                   |                                       |
| [documentation](dcat-ap-ch.md#dcat-dataset-documentation)             | [//gmd:distributionInfo/gmd:MD_Distribution](#geocat-dataset-documentation)                           | new property, depends on gmd:protocol |
| [conforms to](dcat-ap-ch.md#dcat-dataset-conforms-to)                 | [//gmd:contentInfo/che:CHE_MD_FeatureCatalogueDescription/che:dataModel](#geocat-dataset-conforms-to) | new property                          |

<a id="iso-19139-che-distribution-mapping"></a>

#### Mapping to dcat:Distribution

#### Mappings of //gmd:DistributionInfo to dcat:Distribution

| DCAT property                                                  | Mapped from                                                                   | Usage Notes                  |
|----------------------------------------------------------------|-------------------------------------------------------------------------------|------------------------------|
| [dct:issued](dcat-ap-ch.md#dcat-distribution-issued)           | [//gmd:identificationInfo//gmd:citation//gmd:CI_Date](#geocat-dataset-issued) | taken from the Dataset       |
| [dcat:accessURL](dcat-ap-ch.md#dcat-distribution-access-url)   | [.//gmd:linkage](#geocat-distribution-access-url)                             |                              |
| [dct:rights](dcat-ap-ch.md#dcat-distribution-rights)           | [//gmd:resourceConstraints](#geocat-distribution-rights)                      | derived for the dataset      |
| [dct:title](dcat-ap-ch.md#dcat-distribution-title)             | [.//gmd:name](#geocat-distribution-title)                                     | in combination with protocol |
| [dct:description](dcat-ap-ch.md#dcat-distribution-description) | [.//gmd:description](#geocat-distribution-description)                        |                              |
| [dcat:byteSize](dcat-ap-ch.md#dcat-distribution-byte-size)     |                                                                               | mapping not implemented      |
| [media type](dcat-ap-ch.md#dcat-distribution-media-type)       | [.//gmd:protocol](#geocat-distribution-media-type)                            | derived from the protocol    |
| [dct:format](dcat-ap-ch.md#dcat-distribution-format)           | [.//gmd:protocol](#geocat-distribution-format)                                | derived from the protocol    |
| [dct:language](dcat-ap-ch.md#dcat-distribution-language)       | [.//gmd:linkage//che:LocalisedURL](#geocat-distribution-language)             | depends on localized urls    |
| [dct:modified](dcat-ap-ch.md#dcat-distribution-modified)       | [//gmd:identificationInfo//gmd:citation//gmd:CI_Date](#geocat-dataset-issued) | taken from the Dataset       |
| [dct:license](dcat-ap-ch.md#dcat-distribution-license)         |                                                                               | mapping not implemented      |
| [dct:identifier](#geocat-distribution-identifier)              |                                                                               | mapping not implemented      |
| [download url](dcat-ap-ch.md#dcat-distribution-download-url)   | [.//gmd:linkage](#geocat-distribution-download-url)                           | download protocols only      |
| [coverage](dcat-ap-ch.md#dcat-distribution-coverage)           |                                                                               | mapping not implemented      |

<a id="iso-19139-che-dataset"></a>

### Dataset

<a id="geocat-dataset-identifier"></a>

#### `//gmd:fileIdentifier` to `dct:identifier`

* **DCAT:**
  [dct:identifier](dcat-ap-ch.md#dcat-dataset-identifier)
* **XPATH:**
  `//gmd:fileIdentifier`
* **Value:**
  `gco:CharacterString/text()`
* **Usage Notes:**
  the internal id of the dataset is taken from the XPath `//gmd:fileIdentifier`
  and combined with the slug of the publishing organization to form the value of
  `dct:identifier`, with the format `<id>@<organization-slug>`.

```xml
//gmd:fileIdentifier/gco:CharacterString/text()
```

<a id="geocat-dataset-title"></a>

#### `/gmd:identificationInfo//gmd:citation//gmd:title` to `dct:title`

* **DCAT:**
  [dct:title](dcat-ap-ch.md#dcat-dataset-title)
* **XPATH:**
  `//gmd:identificationInfo//gmd:citation//gmd:title`
* **Value:**
  `.//gmd:textGroup/gmd:LocalisedCharacterString[@locale="<lang code>"]/text()`
* **Fallback-Value:**
  `.//gmd:CharacterString/text()`
* **Usage Notes:**
  <lang code> is expected as `DE`, `EN`, `FR`, `IT`. In case the localized strings are not there the Fallback will
  be used for all 4 languages

```xml
//gmd:identificationInfo//gmd:citation//gmd:title//gmd:textGroup/gmd:LocalisedCharacterString[@LOCALE=#DE]/text()
//gmd:identificationInfo//gmd:citation//gmd:title//gmd:textGroup/gmd:LocalisedCharacterString[@LOCALE=#EN]/text()
//gmd:identificationInfo//gmd:citation//gmd:title//gmd:textGroup/gmd:LocalisedCharacterString[@LOCALE=#FR]/text()
//gmd:identificationInfo//gmd:citation//gmd:title//gmd:textGroup/gmd:LocalisedCharacterString[@LOCALE=#IT]/text()
//gmd:identificationInfo//gmd:citation//gmd:title//gco:CharacterString/text()
```

<a id="geocat-dataset-description"></a>

#### `/gmd:identificationInfo//gmd:abstract` to `dct:description`

* **DCAT:**
  [dct:description](dcat-ap-ch.md#dcat-dataset-description)
* **XPATH:**
  `//gmd:identificationInfo//gmd:abstract`
* **Value:**
  `.//gmd:textGroup/gmd:LocalisedCharacterString[@locale="<lang code>"]/text()`
* **Fallback-Value:**
  `.//gmd:CharacterString/text()`
* **Usage Notes:**
  <lang code> is expected as `DE`, `EN`, `FR`, `IT`. In case the localized strings are not there the Fallback will
  be used for all 4 languages

```xml
//gmd:identificationInfo//gmd:abstract//gmd:textGroup/gmd:LocalisedCharacterString[@LOCALE=#DE]/text()
//gmd:identificationInfo//gmd:abstract//gmd:textGroup/gmd:LocalisedCharacterString[@LOCALE=#EN]/text()
//gmd:identificationInfo//gmd:abstract//gmd:textGroup/gmd:LocalisedCharacterString[@LOCALE=#FR]/text()
//gmd:identificationInfo//gmd:abstract//gmd:textGroup/gmd:LocalisedCharacterString[@LOCALE=#IT]/text()
//gmd:identificationInfo//gmd:abstract//gmd:CharacterString/text()
```

<a id="geocat-dataset-publisher"></a>

#### `gmd:pointOfContact` or `//gmd:contact` to `dct:publisher`

* **DCAT:**
  [dct:publisher](dcat-ap-ch.md#dcat-dataset-publisher)
* **XPATH:**
  `//gmd:identificationInfo/gmd:pointOfContact` or `//gmd:contact//che:CHE_CI_ResponsibleParty` (fallback value)
* **Filter:**
  `.//gmd:CI_RoleCode/@codeListValue`
* **Value:**
  `.//gmd:organisationName/gco:CharacterString/text()`
* **Usage Notes:**
  The publisher consists of a name and a uri.
  Currently only the publisher name is mapped from the geocat dataset:
  For the uri the url of the organization that the dataset belongs on
  opendata.swiss is taken: [https://opendata.swiss/de/organization](https://opendata.swiss/de/organization).

  gmd:contact is the metadata contact registered in geocat.ch and is only used as a fallback value.

```xml
//gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "publisher"]//gmd:organisationName/gco:CharacterString
//gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "owner"]//gmd:organisationName/gco:CharacterString
//gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "pointOfContact"]//gmd:organisationName/gco:CharacterString
//gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "distributor"]//gmd:organisationName/gco:CharacterString
//gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "custodian"]//gmd:organisationName/gco:CharacterString
//gmd:contact//che:CHE_CI_ResponsibleParty//gmd:organisationName/gco:CharacterString
```

<a id="geocat-dataset-contact-point"></a>

#### `gmd:pointOfContact or //gmd:contact`  to `dct:contactPoint`

* **DCAT:**
  [dcat:contactPoint](dcat-ap-ch.md#dcat-dataset-contact-point)
* **XPATH:**
  `//gmd:identificationInfo/gmd:pointOfContact or //gmd:contact` (fallback value)
* **Value:**
  `gmd:electronicMailAddress/gco:CharacterString`
* **Usage Notes:**
  Only one contact email is taken. A corresponding name is not taken.

  gmd:contact is the metadata contact registered in geocat.ch and is only used as a fallback value.

```xml
//gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "pointOfContact"]//gmd:address//gmd:electronicMailAddress/gco:CharacterString
//gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "owner"]//gmd:address//gmd:electronicMailAddress/gco:CharacterString
//gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "publisher"]//gmd:address//gmd:electronicMailAddress/gco:CharacterString
//gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "distributor"]//gmd:address//gmd:electronicMailAddress/gco:CharacterString
//gmd:identificationInfo//gmd:pointOfContact[.//gmd:CI_RoleCode/@codeListValue = "custodian"]//gmd:address//gmd:electronicMailAddress/gco:CharacterString
//gmd:contact//che:CHE_CI_ResponsibleParty//gmd:address//gmd:electronicMailAddress/gco:CharacterString
```

<a id="geocat-dataset-distribution"></a>

#### `//gmd:distributionInfo/gmd:MD_Distribution` to `dcat:distribution`

* **DCAT:**
  [dcat:distribution](dcat-ap-ch.md#dcat-dataset-distribution)
* **XPATH:**
  `//gmd:distributionInfo/gmd:MD_Distribution[//gmd:transferOptions//gmd:CI_OnlineResource`
* **protocol:**
  `//gmd:distributionInfo/gmd:MD_Distribution[//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol`
* **Mapping:**
  The mapping depends on the protocol. If the Protocol starts in the following way it is mapped to a
  dcat:Distribution: `WWW:DOWNLOAD`, `OGC:WMTS`, `OGC:WFS`, `OGC:WMS`,
  `LINKED:DATA`, `ESRI:REST`, `MAP:Preview`
* **Usage Notes:**
  Only the above geocat Distributions will be mapped to dcat:Distribution. There are other protocols
  that will be mapped to dcat:landingPage and dct:relation.

```xml
//gmd:distributionInfo/gmd:MD_Distribution[//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol/gco:CharacterString/text()
```

<a id="geocat-dataset-issued"></a>

#### `//gmd:identificationInfo//gmd:citation//gmd:CI_Date` to `dct:issued`

* **DCAT:**
  [dct:issued](dcat-ap-ch.md#dcat-dataset-issued)
* **XPATH:**
  `//gmd:identificationInfo//gmd:citation//gmd:CI_Date`
* **Role:**
  `publication` or `creation` or `revision`
* **Value:**
  `.//gco:Date` or `.//gco:DateTime`
* **Usage Notes:**
  This also serves as dct:issued for dcat:Distribution

```xml
//gmd:identificationInfo//gmd:citation//gmd:CI_Date[.//gmd:CI_DateTypeCode/@codeListValue = "publication"]//gco:Date or gco:DateTime
//gmd:identificationInfo//gmd:citation//gmd:CI_Date[.//gmd:CI_DateTypeCode/@codeListValue = "creation"]//gco:Date or gco:DateTime
//gmd:identificationInfo//gmd:citation//gmd:CI_Date[.//gmd:CI_DateTypeCode/@codeListValue = "revision"]//gco:Date or gco:DateTime
```

<a id="geocat-dataset-modified"></a>

#### `//gmd:identificationInfo//gmd:citation//gmd:CI_Date` to `dct:modified`

* **DCAT:**
  [dct:modified](dcat-ap-ch.md#dcat-dataset-modified)
* **XPATH:**
  `//gmd:identificationInfo//gmd:citation//gmd:CI_Date`
* **Role:**
  `revision`
* **Value:**
  `//gco:Date` or `//gco:DateTime`
* **Usage Notes:**
  This also serves as dct:modified for dcat:Distribution

```xml
//gmd:identificationInfo//gmd:citation//gmd:CI_Date[.//gmd:CI_DateTypeCode/@codeListValue = "revision"]//gco:Date or gco:DateTime
```

<a id="geocat-dataset-theme"></a>

#### `//gmd:identificationInfo//gmd:topicCategory/` to `dcat:theme`

* **DCAT:**
  [dct:theme](dcat-ap-ch.md#dcat-dataset-theme)
* **XPATH:**
  `//gmd:identificationInfo//gmd:topicCategory/`
* **Mapping of values:**
  Geocat topicCategory values are mapped to themes from the DCAT-AP CH themes vocabulary:
  [in rdf/xml](https://www.dcat-ap.ch/vocabulary/themes/20210623.rdf)
  [in turtle](https://www.dcat-ap.ch/vocabulary/themes/20210623.ttl)
  For details of the mapping, see below.

```xml
//gmd:identificationInfo//gmd:topicCategory/gmd:MD_TopicCategoryCode
```

```python
swisstopo_to_ogdch_group_mapping = {
    'imageryBaseMapsEarthCover': ['geography', 'territory'],
    'imageryBaseMapsEarthCover_BaseMaps': ['geography', 'territory'],
    'imageryBaseMapsEarthCover_EarthCover': ['geography', 'territory'],
    'imageryBaseMapsEarthCover_Imagery': ['geography', 'territory'],
    'location': ['geography', 'territory'],
    'elevation': ['geography', 'territory'],
    'boundaries': ['geography', 'territory'],
    'planningCadastre': ['geography', 'territory'],
    'planningCadastre_Planning': ['geography', 'territory'],
    'planningCadastre_Cadastre': ['geography', 'territory'],
    'geoscientificInformation': ['geography', 'territory'],
    'geoscientificInformation_Geology': ['geography', 'territory'],
    'geoscientificInformation_Soils': ['geography', 'territory'],
    'geoscientificInformation_NaturalHazards': ['geography', 'territory'],
    'biota': ['geography', 'territory', 'agriculture'],
    'oceans': ['geography', 'territory'],
    'inlandWaters': ['geography', 'territory'],
    'climatologyMeteorologyAtmosphere': ['geography', 'territory'],
    'environment': ['geography', 'territory'],
    'environment_EnvironmentalProtection': ['geography', 'territory'],
    'environment_NatureProtection': ['geography', 'territory'],
    'society': ['geography', 'culture', 'population'],
    'health': ['geography', 'health'],
    'structure': ['geography', 'construction'],
    'transportation': ['geography', 'mobility'],
    'utilitiesCommunication': ['geography', 'territory', 'energy', 'culture'],
    'utilitiesCommunication_Energy': ['geography', 'energy', 'territory'],
    'utilitiesCommunication_Utilities': ['geography', 'territory'],
    'utilitiesCommunication_Communication': ['geography', 'culture'],
    'intelligenceMilitary': ['geography', 'public-order'],
    'farming': ['geography', 'agriculture'],
    'economy': ['geography', 'work', 'national-economy'],
}
```

<a id="geocat-dataset-language"></a>

#### `//gmd:identificationInfo//gmd:language` to `dct:language`

* **DCAT:**
  [dct:language](dcat-ap-ch.md#dcat-dataset-language)
* **XPATH:**
  `//gmd:identificationInfo//gmd:language`
* **Value:**
  `gmd:LanguageCode`
* **Usage Notes:**
  only the languages German, French, Italian and English are mapped

```xml
//gmd:identificationInfo//gmd:language/gmd:LanguageCode
```

```python
language_mapping = {
    'ger': 'de',
    'fra': 'fr',
    'fre': 'fr',
    'eng': 'en',
    'ita': 'it',
}
```

<a id="geocat-dataset-landing-page"></a>

#### `//gmd:distributionInfo/gmd:MD_Distribution` to `dct:landing-page`

* **DCAT:**
  [dcat:landingPage](dcat-ap-ch.md#dcat-dataset-landing-page)
* **XPATH:**
  `//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource`
* **Protocol:**
  `WWW:LINK`, `WWW:LINK-1.0-http--link`
* **Value:**
  `.//gmd:linkage/gmd:URL/text()`
* **Fallback-Value:**
  `'.//che:LocalisedURL` for any language
* **Usage Notes:**
  The protocol `WWW:LINK-1.0-http--link` is deprecated, please use `WWW:LINK` instead

```xml
//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource
```

```xml
//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol
```

<a id="geocat-dataset-relation"></a>

#### `//gmd:distributionInfo/gmd:MD_Distribution` to `dct:relation`

* **DCAT:**
  [dct:relation](dcat-ap-ch.md#dcat-dataset-relation)
* **XPATH:**
  `//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource`
* **Protocol:**
  `WWW:LINK`, `CHTOPO:specialised-geoportal`, `WWW:LINK-1.0-http--link`
* **Value:**
  For the url: `.//gmd:linkage/gmd:URL/text()`; for the text: `.//gmd:description`
* **Fallback-Value:**
  For the url: `.//che:LocalisedURL` for any language; for the text: the url is used as a fallback
* **Usage Notes:**
  The protocol `WWW:LINK-1.0-http--link` is deprecated, please use `WWW:LINK` instead
  The first `WWWW:LINK` is taken as dcat:landingPage, all further `WWW-LINK` Resources are
  added to dct:relation

```xml
//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource
```

```xml
//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol
```

<a id="geocat-dataset-keyword"></a>

#### `//gmd:identificationInfo//gmd:descriptiveKeywords` to `dcat:keyword`

* **DCAT:**
  [dcat:keyword](dcat-ap-ch.md#dcat-dataset-keyword)
* **XPATH:**
  `//gmd:identificationInfo//gmd:descriptiveKeywords//gmd:keyword`
* **Value:**
  `//gmd:textGroup//gmd:LocalisedCharacterString`
* **Usage Notes:**
  all keywords with the Locale `#DE`, `#FR`, `#EN`, `#IT` are taken.
  The keyword opendata.swiss is not taken: it serves to mark which datasets
  should be imported to opendata.swiss

```xml
//gmd:identificationInfo//gmd:descriptiveKeywords//gmd:keyword//gmd:textGroup//gmd:LocalisedCharacterString
```

<a id="geocat-dataset-spatial"></a>

#### `//gmd:identificationInfo//gmd:extent//gmd:description` to `dct:spatial`

* **DCAT:**
  [dct:spatial](dcat-ap-ch.md#dcat-dataset-spatial)
* **XPATH:**
  `//gmd:identificationInfo//gmd:extent//gmd:description`
* **Value:**
  `./gco:CharacterString/text()`

```xml
//gmd:identificationInfo//gmd:extent//gmd:description/gco:CharacterString/text()
```

<a id="geocat-dataset-temporal"></a>

#### `//gmd:identificationInfo//gmd:extent//gmd:temporalElement` to `dct:temporal`

* **DCAT:**
  [dct:temporal](dcat-ap-ch.md#dcat-dataset-temporal)
* **XPATH:**
  `//gmd:identificationInfo//gmd:extent//gmd:temporalElement`
* **Value:**
  `//gml:TimePeriod/gml:beginPosition`, `//gml:TimePeriod/gml:endPosition`

```xml
//gmd:identificationInfo//gmd:extent//gmd:temporalElement//gml:TimePeriod/gml:beginPosition
//gmd:identificationInfo//gmd:extent//gmd:temporalElement//gml:TimePeriod/gml:endPosition
```

<a id="geocat-dataset-accrual-periodicity"></a>

#### `//gmd:identificationInfo//che:CHE_MD_MaintenanceInformation` to `dct:accrualPeriodicity`

* **DCAT:**
  [dcat:accrualPeriodicity](dcat-ap-ch.md#dcat-dataset-accrual-periodicity)
* **XPATH:**
  `//gmd:identificationInfo//che:CHE_MD_MaintenanceInformation/gmd:maintenanceAndUpdateFrequency/`
* **Value:**
  `gmd:MD_MaintenanceFrequencyCode/@codeListValue`
* **Mapping of values:**
  For the mapping of Frequency Codes see below

```xml
//gmd:identificationInfo//che:CHE_MD_MaintenanceInformation/gmd:maintenanceAndUpdateFrequency/gmd:MD_MaintenanceFrequencyCode/@codeListValue
```

```python
frequency_mapping = {
    'continual':
      'http://publications.europa.eu/resource/authority/frequency/CONT',
    'daily':
      'http://publications.europa.eu/resource/authority/frequency/DAILY',
    'weekly':
      'http://publications.europa.eu/resource/authority/frequency/WEEKLY',
    'fortnightly':
      'http://publications.europa.eu/resource/authority/frequency/BIWEEKLY',
    'monthly':
      'http://publications.europa.eu/resource/authority/frequency/MONTHLY',
    'quarterly':
      'http://publications.europa.eu/resource/authority/frequency/QUARTERLY',
    'biannually':
      'http://publications.europa.eu/resource/authority/frequency/ANNUAL_2',
    'annually':
      'http://publications.europa.eu/resource/authority/frequency/ANNUAL',
    'asNeeded':
      'http://publications.europa.eu/resource/authority/frequency/IRREG',
    'irregular':
      'http://publications.europa.eu/resource/authority/frequency/IRREG',
}
```

<a id="geocat-dataset-qualified-relation"></a>

#### `//gmd:identificationInfo//gmd:aggregationInfo` to `dcat:qualifiedRelation`

* **DCAT:**
  [dcat:qualifiedRelation](dcat-ap-ch.md#dcat-dataset-qualified-relation)
* **XPATH:**
  `//gmd:identificationInfo//gmd:aggregationInfo//gmd:aggregateDataSetIdentifier/gmd:MD_Identifier`
* **Value:**
  `/gmd:code/gco:CharacterString`
* **Mapping of Values:**
  The geocat identifier is mapped to a dct:identifier by attaching `@<organization-slug>`

```xml
//gmd:identificationInfo//gmd:aggregationInfo//gmd:aggregateDataSetIdentifier/gmd:MD_Identifier/gmd:code/gco:CharacterString
```

<a id="geocat-dataset-documentation"></a>

#### `//gmd:distributionInfo/gmd:MD_Distribution` to `foaf:page`

* **DCAT:**
  [foaf:page](dcat-ap-ch.md#dcat-dataset-documentation)
* **XPATH:**
  `//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource`
* **Protocol:**
  `WWW:LINK`
* **Value:**
  `.//gmd:linkage/gmd:URL/text()`
* **Fallback-Value:**
  `'.//che:LocalisedURL` for any language
* **Usage Notes:**
  The first resource with WWW:LINK protocol is mapped as dcat:landingPage. All other resources with WWW:LINK protocol are mapped as foaf:page.

```xml
//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource
```

```xml
//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol
```

<a id="geocat-dataset-conforms-to"></a>

#### `//che:dataModel//che:LocalisedURL` to `dct:conformsTo`

* **DCAT:**
  [dct:conformsTo](dcat-ap-ch.md#dcat-dataset-conforms-to)
* **XPATH:**
  `che:CHEMD_Metadata/gmd:contentInfo/che:CHE_MD_FeatureCatalogueDescription/che:dataModel/`
* **Value:**
  `.//gmd:contentInfo//che:CHE_MD_FeatureCatalogueDescription//che:dataModel/text()`
* **Usage Notes:**

```xml
.//gmd:contentInfo//che:CHE_MD_FeatureCatalogueDescription//che:dataModel//che:PT_FreeURL//che:URLGroup//che:LocalisedURL[@locale="#DE"]/text()
.//gmd:contentInfo//che:CHE_MD_FeatureCatalogueDescription//che:dataModel//che:PT_FreeURL//che:URLGroup//che:LocalisedURLL[@locale="#FR"]/text()
.//gmd:contentInfo//che:CHE_MD_FeatureCatalogueDescription//che:dataModel//che:PT_FreeURL//che:URLGroup//che:LocalisedURL[@locale="#EN"]/text()
.//gmd:contentInfo//che:CHE_MD_FeatureCatalogueDescription//che:dataModel//che:PT_FreeURL//che:URLGroup//che:LocalisedURL[@locale="#IT"]/text()
.//gmd:contentInfo//che:CHE_MD_FeatureCatalogueDescription//che:dataModel//che:PT_FreeURL//che:URLGroup//che:LocalisedURL/text()
```

<a id="iso-19139-che-distribution"></a>

### Distribution

<a id="geocat-distribution-access-url"></a>

#### Set `dcat:accessURL`

* **DCAT:**
  [dcat:accessURL](dcat-ap-ch.md#dcat-distribution-access-url)
* **XPATH:**
  `//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource`
* **Mapping:**
  The mapping depends on the protocol. If the protocol starts in the following way it is mapped to a
  dcat:Distribution: `WWW:DOWNLOAD`, `OGC:WMTS`, `OGC:WFS`, `"OGC:WMS`, `LINKED:DATA`,
  `ESRI:REST`, `MAP:Preview`, `WWW:DOWNLOAD-APP`
* **Value:**
  `.//gmd:linkage/gmd:URL/text()`
* **Fallback-Value:**
  `'.//che:LocalisedURL` for any language
* **Usage Notes:**
  For the protocol `WWW:DOWNLOAD` the protocol should include the format of the
  resource: for example `WWW:DOWNLOAD:INTERLIS`

```xml
//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource
```

```xml
//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol
```

<a id="geocat-distribution-download-url"></a>

#### Set `dcat:downloadURL`

* **DCAT:**
  [dcat:downloadURL](dcat-ap-ch.md#dcat-distribution-download-url)
* **XPATH:**
  `//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource`
* **Protocol:**
  `.//gmd:protocol/gco:CharacterString` `WWW:DOWNLOAD`
* **Value:**
  `.//gmd:linkage/gmd:URL/text()`
* **Fallback-Value:**
  `'.//che:LocalisedURL` for any language
* **Usage Notes:**
  For the protocol `WWW:DOWNLOAD` the same url is mapped to both dcat:accessURL and dcat:downloadURL

```xml
.//gmd:linkage//gmd:URL/text()
```

<a id="geocat-distribution-rights"></a>

#### Set `dct:rights`

* **DCAT:**
  [dct:rights](dcat-ap-ch.md#dcat-distribution-rights)
* **XPATH:**
  `//gmd:resourceConstraints//gmd:otherConstraints`
* **Mapping of values:**
  Geocat rights statements are mapped to rights statements from the DCAT-AP CH rights vocabulary:
  [`RIGHTS-RDF`](/_static/vocabulary/rights.rdf),
  [`RIGHTS-Turtle`](/_static/vocabulary/rights.ttl).
  For details of the mapping, see below.

```xml
//gmd:resourceConstraints//gmd:otherConstraints
```

```python
    rights = {
        u'Freie Nutzung': 'NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired',
        u'Utilisation libre': 'NonCommercialAllowed-CommercialAllowed-ReferenceNotRequired',

        u'Freie Nutzung. Quellenangabe ist Pflicht.': 'NonCommercialAllowed-CommercialAllowed-ReferenceRequired',
        u'Utilisation libre. Obligation d’indiquer la source.': 'NonCommercialAllowed-CommercialAllowed-ReferenceRequired',

        u'Freie Nutzung. Kommerzielle Nutzung nur mit Bewilligung des Datenlieferanten zulässig.': 'NonCommercialAllowed-CommercialWithPermission-ReferenceNotRequired',
        u'Utilisation libre. Utilisation à des fins commerciales uniquement avec l’autorisation du fournisseur des données.': 'NonCommercialAllowed-CommercialWithPermission-ReferenceNotRequired',

        u'Freie Nutzung. Quellenangabe ist Pflicht. Kommerzielle Nutzung nur mit Bewilligung des Datenlieferanten zulässig.': 'NonCommercialAllowed-CommercialWithPermission-ReferenceRequired',
        u'Utilisation libre. Obligation d’indiquer la source. Utilisation commerciale uniquement avec l’autorisation du fournisseur des données.': 'NonCommercialAllowed-CommercialWithPermission-ReferenceRequired'
    }
```

<a id="geocat-distribution-media-type"></a>

#### Set `dcat:mediaType`

* **DCAT:**
  [dcat:mediaType](dcat-ap-ch.md#dcat-distribution-media-type)
* **Usage-Notes:**
  For protocol “WWW:DOWNLOAD” the media type is derived by splitting the protocol name:
  the protocol name is expected as `<download-protocol>:<media-type>`.
  For protocols “OGC:WMTS”, “OGC:WMS”, “OGC:WFS”, “LINKED:DATA”, “MAP:Preview”, “ESRI:REST” the dcat:mediaType is “SERVICE”

```xml
//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol
```

<a id="geocat-distribution-format"></a>

#### Set `dct:format`

* **DCAT:**
  [dct:format](dcat-ap-ch.md#dcat-distribution-format)
* **Usage-Notes:**
  For protocol “WWW:DOWNLOAD” the format is derived in the same way as the
  [media type](#geocat-distribution-media-type).
  For the other protocols the format is derived from the protocol
  as described in the mapping below.

```default
//gmd:distributionInfo/gmd:MD_Distribution//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol
```

```python
protocol_to_format_mapping = {
    "OGC:WMTS": "WMTS",
    "OGC:WMS": "WMS",
    "OGC:WFS": "WFS",
    "ESRI:REST": "API"
}
```

<a id="geocat-distribution-title"></a>

#### Set `dct:title`

* **DCAT:**
  [dct:title](dcat-ap-ch.md#dcat-distribution-title)
* **XPATH:**
  Mapping depends on the type of distribution that is derived from the protocol
* **Protocol:**
  `//gmd:transferOptions//gmd:CI_OnlineResource//gmd:protocol/gco:CharacterString`
* **Name:**
  `.//gmd:distributionInfo//gmd:transferOptions//gmd:name`
* **Usage Notes:**
  The title of the distribution is derived by mapping the normed protocol name
  to a derived protocol name and then adding the name of the Distribution.

```xml
.//gmd:distributionInfo//gmd:transferOptions//gmd:protocol/gco:CharacterString
```

```xml
.//gmd:distributionInfo//gmd:transferOptions/gmd:name
```

```python
protocol_to_name_mapping = {
    "OGC:WMTS": "WMTS",
    "OGC:WMS": "WMS",
    "OGC:WFS": "WFS",
    "WWW:DOWNLOAD": "Download",
    "LINKED:DATA": "Linked Data (Dienst)",
    "MAP:Preview": "Map (Preview)",
    "ESRI:REST": "ESRI (Rest)"
}
```

<a id="geocat-distribution-description"></a>

#### Set `dct:description`

* **DCAT:**
  [dct:description](dcat-ap-ch.md#dcat-distribution-description)
* **XPATH:**
  `//gmd:distributionInfo//gmd:transferOptions//gmd:description`

```xml
.//gmd:description//gmd:LocalisedCharacterString
```

<a id="geocat-distribution-language"></a>

#### Set `dct:language`

* **DCAT:**
  [dct:language](dcat-ap-ch.md#dcat-distribution-language)
* **Usage-Notes:**
  The language is derived from the languages that a localized url is offered for.
