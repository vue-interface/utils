const path = require('path');
const list = require('./list');

module.exports = {
    serviceWorker: true,
    title: 'Vue Interface',
    description: 'A collection of standalone UI components built for Vue.',
    plugins: [
        ['vuepress-plugin-template-constants', {
            pkg: require(path.resolve('package.json'))
        }]
    ],
    themeConfig: {
        sidebarDepth: 2,
        sidebar: [
            {
                title: 'Utilities',
                collapsable: false,
                children: list(path.resolve('docs/utils')).map(value => `/utils/${value}`)
            }
        ],
        footer: "Ⓒ Active Engagement, LLC"
    }
};