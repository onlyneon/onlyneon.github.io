/**
 * @see https://theme-plume.vuejs.press/guide/document/ 查看文档了解配置详情。
 *
 * Notes 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Notes，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Notes，然后在与 Note 相关的 Markdown 文件中，自动生成 permalink。
 *
 * 如果你发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 note 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `note.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineNoteConfig` 是用于定义单个 note 配置的帮助函数
 * - `defineNotesConfig` 是用于定义 notes 集合的帮助函数
 *
 * 通过 `defineNoteConfig` 定义的 note 配置，应该填入 `defineNotesConfig` 的 notes 数组中
 */
import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const weeklyReportNote = defineNoteConfig({
  dir: 'weekly-report',
  link: '/weekly-report',
  sidebar: [{
    text: '从这里开始',
    icon: 'carbon:idea',
    items: [{
      text: '概述',
      link: 'overview',
    }]
  }, {
    text: '小微企业云周报 7月21日 - 7月25日',
    link: '2025-7-25',
  }, {
    text: '小微企业云周报 7月28日 - 8月1日',
    link: '2025-8-1',
  }, {
    text: '小微企业云周报 8月4日 - 8月8日',
    link: '2025-8-8',
  }]
})

const summaryReportNote = defineNoteConfig({
  dir: 'summary-report',
  link: '/summary-report',
  sidebar: [{
    text: '从这里开始',
    icon: 'carbon:idea',
    items: [{
      text: '概述',
      link: 'overview',
    }]
  },{
    text: '安康审计中心交流总结',
    link: 'ankang',
  }, {
    text: '桐川审计中心交流总结',
    link: 'tongchuan',
  }, {
    text: '宝鸡审计中心交流总结',
    link: 'baoji',
  }]
})

const analysisNote = defineNoteConfig({
  dir: 'analysis',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
  link: '/analysis',
  // 手动配置侧边栏结构
  sidebar: [{
    text: '从这里开始',
    icon: 'carbon:idea',
    items: [{
      text: '概述',
      link: 'overview',
    }]
  },{
      text: '宝鸡',
      prefix: 'baoji',
      collapsed: false,
      items: [{
        text: '陈仓农商行',
        link: 'chencang'
      },{
        text: '太白农商行',
        link: 'taibai'
      },{
        text: '千阳农商行',
        link: 'qianyang'
      },{
        text: '渭滨农商行',
        link: 'weibin'
      }]
  },{
    text: '汉中',
    prefix: 'hanzhong',
    collapsed: false,
    items: [{
      text: '洋县农商行',
      link: 'yangxian'
    }]
  },{
    text: '渭南',
    prefix: 'weinan',
    collapsed: false,
    items: [{
      text: '潼关农商行',
      link: 'tongguan'
    }]
  },{
      text: '安康',
      prefix: 'ankang',
      collapsed: false,
      items: [
        {
            text: '汉阴农商行',
            link: 'hanyin'
        },
        {
            text: '宁陕农商行',
            link: 'ningshan'
        },        
        {
            text: '旬阳农商行',
            link: 'xunyang'
        },        
        {
            text: '镇坪农商行',
            link: 'zhenping'
        }
      ],
  }],
  // 根据文件结构自动生成侧边栏
  // sidebar: 'auto',
})

const resourceNote = defineNoteConfig({
  dir: 'resource',
  link: '/resource',
  sidebar: [{
    text: '从这里开始',
    icon: 'carbon:idea',
    items: [{
      text: '概述',
      link: 'overview',
    }]
  },{
    text: '推广视频',
    prefix: 'video',
    items: [{
      text: '平台操作',
      link: 'oper',
    }]
  },{
    text: '推广图片',
    prefix: 'image',
    items: [{
      text: '汇总',
      link: 'index',
    }]
  },{
    text: '推广文档',
    prefix: 'doc',
    items: [{
      text: '汇总',
      link: 'index'
    }]
  }]
})

/**
 * 导出所有的 note
 * 每一个 note 都应该填入到 `notes.notes` 数组中
 * （DemoNote 为参考示例，如果不需要它，请删除）
 */
export default defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [analysisNote, weeklyReportNote, summaryReportNote, resourceNote],
})
