/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/', icon: 'line-md:home' },
  // { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    icon: 'line-md:coffee-loop',
    badge: '新',
    items: [
      { text: '地市分析', icon: 'line-md:search-twotone', link: '/notes/analysis/overview.md' },
      { text: '推广周报', icon: 'line-md:search-twotone', link: '/notes/weekly-report/overview.md' },
      { text: '推广总结报告', icon: 'line-md:search-twotone', link: '/notes/summary-report/overview.md' },
    ]
  },
])
