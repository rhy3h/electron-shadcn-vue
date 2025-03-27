<template>
  <ScrollArea class="h-full">
    <div class="space-y-4 py-4">
      <div class="px-3 py-2">
        <div class="space-y-1">
          <template v-for="navItem in navItems" :key="navItem.title">
            <RouterLink :to="navItem.href" >
              <Button variant="secondary" class="w-full justify-start">
                {{ navItem.title }}
              </Button>
            </RouterLink>
          </template>
        </div>
      </div>
    </div>
  </ScrollArea>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Item {
  title: string
  href: string
}

const navItems: Item[] = [
  {
    title: 'Example',
    href: '/example'
  }
]
</script>
