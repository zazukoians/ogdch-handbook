import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  sidebar: [
    {
      type: 'category',
      label: 'Vorbereiten',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Auf einen Blick',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'vorbereiten/vorbereiten',
          },
          items: [
            {
              type: "category",
              label: 'Fürs jedes Dataset',
              link: {
                type: 'doc',
                id: 'vorbereiten/dataset',
              },
              items: [
                'vorbereiten/dataset/rechtlicher-check',
                'vorbereiten/dataset/technischer-check',
                'vorbereiten/dataset/organisatorischer-check'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Für Erst-Publizierende',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'vorbereiten/erstpublizierende',
          },
          items: [
            'vorbereiten/erstpublizierende/opendata-swiss-verstehen',
            'vorbereiten/erstpublizierende/dateninventar-erstellen'
          ]
        },
        'vorbereiten/publikationsrichtlinien'
      ],
    },
    {
      type: "category",
      label: "Publizieren",
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Auf einen Blick',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'publizieren/publizieren',
          },
          items: []
        },
        {
          type: 'category',
          label: 'Für Erst-Publizierende',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'publizieren/erstpublizierende',
          },
          items: [
            'publizieren/erstpublizierende/kontakt-bfs',
            'publizieren/erstpublizierende/profil-einrichten',
            'publizieren/erstpublizierende/organisation-einrichten'
          ]
        },
        {
          type: 'category',
          label: 'Publikationsvariante auswählen',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'publizieren/publikationsvariante',
          },
          items: [
            'publizieren/publikationsvarianten/metadaten-manuell-erfassen',
            'publizieren/publikationsvarianten/metadaten-via-xml-hochladen',
            'publizieren/publikationsvarianten/harvesting'
          ]
        }
      ]
    }
  ],
};

export default sidebars;
