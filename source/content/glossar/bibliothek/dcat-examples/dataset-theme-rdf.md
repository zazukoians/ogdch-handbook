.. code-block:: xml
    :caption: The categories are selected from the EU theme vocabulary
    :emphasize-lines: 6,7

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#">

      <dcat:Dataset rdf:about="https://swisstopo/123">
        <dcat:theme rdf:resource="http://publications.europa.eu/resource/authority/data-theme/REGI"/>
        <dcat:theme rdf:resource="http://publications.europa.eu/resource/authority/data-theme/ENVI"/>
      </dcat:Dataset>

    </rdf:RDF>
