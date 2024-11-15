const { themes: prismThemes } = require('prism-react-renderer');

const config = {
  title: 'kig.wiki',
  tagline: 'Because kigu is too precious for any one person\'s opinions',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kig.wiki',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kig-wiki', // username for deployed site and repo.
  projectName: 'kigwiki',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/kig-wiki/kigwiki/blob/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/kigwiki.png',
    navbar: {
      title: 'Kigwiki',
      logo: {
        alt: 'Kigwiki Logo',
        src: 'img/kigwiki.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Home',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Home',
              to: '/docs/home',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/kig-wiki/kigwiki',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Animegao Specific Resources',
              href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kig.wiki | Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/img/apple-touch-icon.png',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/img/favicon-32x32.png',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/img/favicon-16x16.png',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'mask-icon',
          href: '/img/safari-pinned-tab.svg',
          color: '#5bbad5',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          name: 'msapplication-TileColor',
          content: '#2b5797',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          name: 'theme-color',
          content: '#ffffff',
        },
      },
    ],
  },

  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en', 'ja'], // Specify the languages you need
      },
    ],
  ],
};

module.exports = config;
