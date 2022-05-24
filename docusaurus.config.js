// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// This ensures URLs to our old Antora-based docs are successfully redirected to Docusaurus-based URLs
let oldVersions = ["latest", "0.21.0", "0.20.1", "0.20.0", "0.19.0", "0.18.0", "0.17.0", "0.16.0", "0.15.0", "0.14.0", "0.13.2", "0.13.1", "0.13.0", "0.12.0", "0.11.0", "0.10.0", "0.9.0", "0.8.0", "0.7.0", "0.6.0", "0.5.1", "0.5.0", "0.4.1"]
let oldOverviewPages = ["about", "pii", "organization", "hla", "definitions"];

let replacements = [];

for (let oldVersion of oldVersions) {
  for (let oldOverviewPage of oldOverviewPages) {
    replacements.push({
      from: `/docs/${oldVersion}/${oldOverviewPage}.html`,
      to: `/docs/latest/overview/${oldOverviewPage}`,
    });
  }
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'STRM Privacy Documentation',
  url: 'https://docs.strmprivacy.io/',
  baseUrl: '/',
  projectName: 'docs',
  organizationName: 'strmprivacy',
  baseUrlIssueBanner: false,
  trailingSlash: true,
  onBrokenLinks: 'warn', // TODO change to throw!
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',

  scripts: [
    {
      src: 'https://plausible.io/js/plausible.js',
      defer: true,
      'data-domain': 'docs.strmprivacy.io'
    }
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'latest',
              path: 'latest',
            },
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        }
      },
    ],
  ],

  themeConfig:
    ({
      navbar: {
        logo: {
          alt: 'STRM Privacy Logo',
          src: 'https://storage.googleapis.com/strm-media/strm-logo-orange-slim.svg',
          href: 'https://strmprivacy.io',
          target: '_self',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'overview/about',
            label: 'Docs',
          },
          {
            label: 'Hiring!',
            position: 'left',
            to: 'https://join.strm.team/',
          },
          // TODO this is versioning. For now switched off
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'left',
          //   dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          //   dropdownActiveClassDisabled: true,
          // },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright (C) 2020-2022 STRM Privacy`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['typescript', 'java', 'php', 'rust'],
      },
      algolia: {
        appId: 'M24OHV52F0',
        apiKey: '75af5c8e621e102165a0787ee4581b54',
        indexName: 'docusaurus-2',
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        redirects: [
          ...replacements,
          {
            from: '/docs/latest',
            to: '/docs/latest/overview'
          },
          {
            from: '/docs/latest/quickstart/receiving-s3',
            to: '/docs/latest/quickstart/batch-exporter'
          }
        ]
      },
    ],
  ],
};

module.exports = config;
