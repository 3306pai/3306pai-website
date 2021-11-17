// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '3306π',
  tagline: '3306π',
  url: 'https://3306pai.github.io',
  baseUrl: '/3306pai/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'databend-website', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    './src/plugins/pxToVw',
    './src/plugins/globalSassVarInject',
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'metting',
        path: 'metting',
        routeBasePath: 'metting',
        sidebarPath: require.resolve('./sidebarsMetting.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'guest',
        path: 'guest',
        routeBasePath: 'guest',
        sidebarPath: require.resolve('./sidebarsGuest.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: '',
        items: [
          {
            to: '/',
            position: 'left',
            label: '首页',
            activeBaseRegex: '^/3306pai/$',
          },
          {to: '/metting/3306pai-sz-2021', label: '会议', position: 'left'},
          // {to: '/databend-cloud2', label: '赞助商', position: 'left'},
          {to: '/blog/databend-architecture', label: 'Blog', position: 'left'},
          {
            type: 'dropdown',
            label: '资源',
            position: 'left',
            items: [
              {
                label: '嘉宾',
                to: '/guest/liukaiyang-action',
              },
              {
                label: '往期PPT',
                to: 'https://github.com/3306pai/3306Pai-presentations',
              }
            ],
          },
          {to: '/contact-us', label: '联系我们', position: 'left'},
          // {
          //   position: 'left',
          //   label: 'Docs',
          //   target: '_blank',
          //   //  to: '/docs/intro'
          //   to: 'https://databend.rs/overview/building-and-running/'
          // },
          // {to: 'https://datafuselabs.github.io/weekly/', label: 'Weekly', target: '_blank', position: 'left'},
          // {to: '/weekly/intro', label: 'Weekly',docId: 'weekly', position: 'left'},
          // {to: '/blog/welcome', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        links: [
          {
            title: '资源',
            items: [
              {
                label: '往期PPT',
                to: 'https://github.com/3306pai/3306Pai-presentations',
              },
              {
                label: '嘉宾',
                to: '/guest/liukaiyang-action',
              }
            ],
          },
          {
            title: '联系我们',
            items: [
              {
                label: 'Contact us',
                to: '/contact-us'
              }
            ],
          },
          {
            title: '关注我们',
            items: [
              {
                label: 'twitter',
                icon: 'img/home/fficialAccount.png',
                to: '/'
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()}  3306π. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
