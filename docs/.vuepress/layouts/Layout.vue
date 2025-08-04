<script setup>
import { Layout } from 'vuepress-theme-plume/client'
</script>

<template>
  <Layout>
    <template #aside-bottom>
      <div class="custom-content">
        <LinkCard icon="twemoji:astonished-face" title="卡片标题" href="/" />
      </div>
    </template>
  </Layout>
</template>

<style>
.custom-content {
  width: 100%;
}
</style>