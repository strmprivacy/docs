// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'STRM Privacy Documentation',
  url: 'https://docs.strmprivacy.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  projectName: 'end-user-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          versions: {
            current: {
              label: 'latest',
              path: 'latest',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        logo: {
          alt: 'STRM Privacy Logo',
          src: 'https://storage.googleapis.com/strm-media/strm-logo-orange-slim.svg',
          href: 'https://strmprivacy.io'
        },
        items: [],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright (C) 2020-2022 STRM Privacy`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['typescript', 'java', 'php'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'M24OHV52F0',

        // Public API key: it is safe to commit it
        apiKey: '75af5c8e621e102165a0787ee4581b54',

        indexName: 'strmprivacy documentation',

        contextualSearch: true,
        // Optional: Algolia search parameters
        searchParameters: {
          facetFilters: [[`tags:docs`]]
        },
      },
    }),

};

module.exports = config;
