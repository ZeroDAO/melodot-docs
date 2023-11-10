const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Docs",
  description: "One Block, One Movie",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
    },
    "/zh/": {
      title: "Docs",
      description: "One Block, One Movie",
    },
  },

  themeConfig: {
    logo: "/logo.svg",
    hostname: "https://docs.melodot.io",

    author: "ZeroDAO",
    repo: "https://github.com/ZeroDAO",

    nav: [
      {
        text: "Home",
        icon: "flex",
        link: "/",
      },
      {
        text: "Learn",
        icon: "plugin",
        link: "/learn/",
      },
      {
        text: "Guide",
        icon: "overflow",
        link: "/guide/",
      },
    ],
    sidebar: {
      "/learn/": [
        {
          title: "Overview",
          icon: "more",
          prefix: "introduction/",
          children: ["../", "modular-blockchains"],
        },
        {
          title: "Architecture",
          icon: "advance",
          prefix: "architecture/",
          children: ["", "lifecycle-of-blob_tx"],
        },
      ],
      "/guide/": [
        {
          title: "Run a Node",
          icon: "shell",
          prefix: "node/",
          children: ["../", "types-of-nodes", "starting-a-node", "strating-a-light-client", "using-docker"],
        },
        {
          title: "Submitting data",
          icon: "shell",
          prefix: "submitting-data/",
          children: [""],
        },
      ],
    },

    locales: {
      "/zh/": {
        nav: [
          {
            text: "首页",
            icon: "flex",
            link: "/zh/",
          },
          {
            text: "学习",
            icon: "plugin",
            link: "/zh/learn/",
          },
          {
            text: "文档",
            icon: "overflow",
            link: "/zh/guide/",
          },
        ],
        sidebar: {
          "/zh/learn/": [
            {
              title: "了解",
              icon: "more",
              prefix: "introduction/",
              children: ["../", "modular-blockchains"],
            },
            {
              title: "架构",
              icon: "advance",
              prefix: "architecture/",
              children: ["", "lifecycle-of-blob_tx"],
            },
          ],
          "/zh/guide/": [
            {
              title: "运行节点",
              icon: "shell",
              prefix: "node/",
              children: ["../", "types-of-nodes", "starting-a-node", "strating-a-light-client", "using-docker"],
            },
            {
              title: "提交数据",
              icon: "shell",
              prefix: "submitting-data/",
              children: [""],
            },
          ],
        },
      },
    },

    footer: {
      display: true,
      content: "Melodot",
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    blog: false,

    mdEnhance: {
      enableAll: false,
      flowchart: true,
      tex: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },

  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-145103797-4'
      }
    ]
  ]
});
