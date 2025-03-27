<template>
  <AppMenuBar />
  <div class="w-screen h-[calc(100vh-36px)] grid lg:grid-cols-7">
    <AppSidebar class="hidden lg:block" />
    <RouterView class="col-span-5 lg:col-span-6 lg:border-l"></RouterView>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from '@/components/modules/AppSideBar.vue'
import AppMenuBar from '@/components/modules/AppMenuBar.vue'
</script>
