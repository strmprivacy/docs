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
            type: 'category',
            label: 'Documentation',
            collapsible:false,
            items: [
                {
                    Overview: [
                        'overview/about',
                        'overview/pii',
                        'overview/organization',
                        'overview/hla',
                        'overview/definitions',
                    ],
                },
                {
                    Concepts: [
                        'concepts/core-concepts',
                        'concepts/batch-vs-streaming',
                        'concepts/batch-jobs',
                        'concepts/schemas-and-contracts',
                        'concepts/strm-meta',
                        'concepts/masked-fields',
                        'concepts/simple-schemas',
                    ]
                },
                {
                    Quickstart: [
                        'quickstart/creating-streams',
                        'quickstart/listen-web-socket',
                        'quickstart/sending-curl',
                        'quickstart/full-example',
                        'quickstart/exporting-kafka',
                        'quickstart/receiving-s3',
                        'quickstart/exporting-keys',
                        'quickstart/grpc',
                        'quickstart/simple-schema',
                    ]
                },
                {
                    'CLI Reference': [
                        'cli-reference/auth',
                        'cli-reference/batch-exporter',
                        'cli-reference/batch-job',
                        'cli-reference/completion',
                        'cli-reference/listen-web-socket',
                        'cli-reference/event-contract',
                        'cli-reference/kafka-cluster',
                        'cli-reference/kafka-exporter',
                        'cli-reference/kafka-user',
                        'cli-reference/key-stream',
                        'cli-reference/schema',
                        'cli-reference/schema-code',
                        'cli-reference/simulate',
                        'cli-reference/sink',
                        'cli-reference/stream',
                        'cli-reference/usage',
                    ]
                },
                {
                    Contact: [
                        'contact/index'
                    ]
                }
            ],
        },
    ],
};

module.exports = sidebars;