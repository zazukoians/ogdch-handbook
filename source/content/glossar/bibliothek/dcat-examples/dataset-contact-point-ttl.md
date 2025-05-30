```Turtle
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix vcard: <http://www.w3.org/2006/vcard/ns#> .

<https://swisstopo/123>
  a dcat:Dataset ;
  dcat:contactPoint [
    a vcard:Organization ;
    vcard:fn "Abteilung Lärm BAFU" ;
    vcard:hasEmail <mailto:noise@bafu.admin.ch>
  ], [
    a vcard:Individual ;
    vcard:fn "Max Muster, BAFU Datenspezialist" ;
    vcard:hasEmail <mailto:max-muster@bafu.admin.ch>
  ] .
```
