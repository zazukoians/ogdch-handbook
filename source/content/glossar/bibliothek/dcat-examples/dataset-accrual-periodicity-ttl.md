.. code-block:: Turtle
    :caption: :fa:`exclamation` EU frequency vocabulary is used
    :emphasize-lines: 6

    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .

    <https://swisstopo/123>
              a dcat:Dataset ;
              dct:accrualPeriodicity <http://publications.europa.eu/resource/authority/frequency/ANNUAL> .
