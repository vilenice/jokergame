import { defineConfig, type DefaultTheme } from "vitepress";

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '首页', link: '/' },
    { text: '游戏', link: '/超机智青年大会/蟠桃大会' }
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
          {
            text: '超机智青年大会',
            items: [
              { text: '蟠桃大会', link: '/超机智青年大会/蟠桃大会' },
              { text: '39点', link: '/超机智青年大会/39点' },
              { text: '黄金捕手', link: '/超机智青年大会/黄金捕手' },
              { text: '满分算式', link: '/超机智青年大会/满分算式' },
              { text: '全力出击', link: '/超机智青年大会/全力出击' },
              { text: '命运轮盘', link: '/超机智青年大会/命运轮盘' },
              { text: '风险投资人', link: '/超机智青年大会/风险投资人' },
              { text: '时光拍卖会', link: '/超机智青年大会/时光拍卖会' },
            ]
          },
          {
            text: '名侦探学院',
            items: [
              { text: '代理人消消乐', link: '/名侦探学院/代理人消消乐' },
              { text: '通告单争夺战', link: '/名侦探学院/通告单争夺战' },
            ]
          }
        ]
      }
    ],
    footer: {
      message:
        "本站招募共建者,欢迎在github上贡献PR",
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
        "https://github.com/vilenice/jokergame/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
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
