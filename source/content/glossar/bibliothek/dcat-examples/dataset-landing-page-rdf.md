.. code-block:: xml
    :caption: :fa:`exclamation` The landing page is provided as a resource
    :emphasize-lines: 6

    <?xml version="1.0" encoding="utf-8" ?>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:dcat="http://www.w3.org/ns/dcat#">

      <dcat:Dataset rdf:about="https://swisstopo/123">
        <dcat:landingPage rdf:resource="http://www.bafu.admin.ch/laerm/index.html"/>
      </dcat:Dataset>

    </rdf:RDF>
