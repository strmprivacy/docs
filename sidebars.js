/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'doc',
      label: 'STRM Privacy',
      id: 'about'
    },
    {
      type: 'category',
      label: 'Overview',
      items: [
        'overview/pii',
        'overview/organization',
        'overview/hla',
        'overview/definitions',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      link: {
        type: 'doc',
        id: 'concepts/index',
      },
      items: [
        'concepts/core-concepts',
        'concepts/batch-vs-streaming',
        'concepts/batch-jobs',
        'concepts/data-connectors',
        'concepts/schemas-and-contracts',
        'concepts/strm-meta',
        'concepts/masked-fields',
        'concepts/simple-schemas',
        'concepts/ccd',
        'concepts/rbac',
      ]
    },
    {
      type: 'category',
      label: 'Quickstart',
      link: {
        type: 'doc',
        id: 'quickstart-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: "quickstart"
        },
      ]
    },
    {
      type: 'category',
      label: 'CLI Reference',
      link: {
        type: 'doc',
        id: 'cli-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: "cli-reference"
        },
      ]
    },
    {
      type: 'doc',
      label: 'Contact',
      id: 'contact/index'
    }
  ],
};

module.exports = sidebars;
