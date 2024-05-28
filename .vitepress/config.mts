// import { defineConfig } from 'vitepress'

// // https://vitepress.dev/reference/site-config
// export default defineConfig({
//   title: "博弈之城",
//   description: "A VitePress Site",
//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     nav: [
//       { text: '首页', link: '/' },
//       { text: '游戏', link: '/markdown-examples' }
//     ],

//     sidebar: [
//       {
//         text: '游戏',
//         items: [
//           { text: 'Markdown Examples', link: '/markdown-examples' },
//           { text: 'Runtime API Examples', link: '/api-examples' }
//         ]
//       }
//     ],

//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/vilenice/jokergame' }
//     ]
//   }
// })
import { defineConfig, type DefaultTheme } from "vitepress";

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '首页', link: '/' },
    { text: '游戏', link: '/markdown-examples' }
  ];
}

export default defineConfig({
  lang: "zh-CN",
  title: "博弈之城",
  description: "由佩剑行@vilenice和博弈游戏爱好者共建的开源学习社区.",

  themeConfig: {
    nav: nav(),
    sidebar: [
      {
        text: '游戏',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    footer: {
      message:
        "本站招募共建者,联系<a href='https://x.com/@MasterCui'>佩剑行</a>",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: {
      label: "页面导航",
    },
    editLink: {
      pattern:
        "https://github.com/Fankouzu/solana-basic-ui/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    }
  },
});
