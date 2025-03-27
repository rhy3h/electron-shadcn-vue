<template>
  <Menubar class="rounded-none border-b">
    <div class="flex items-center gap-x-1 px-2" style="-webkit-app-region: no-drag;">
      <CircleXIcon class="fill-red-500 cursor-pointer size-5" @click="close"></CircleXIcon>
      <CircleMinusIcon class="fill-yellow-500 cursor-pointer size-5" @click="minimize"></CircleMinusIcon>
      <PlusCircleIcon class="fill-green-500 cursor-pointer size-5" @click="maximize"></PlusCircleIcon>
    </div>

    <MenubarMenu>
      <MenubarTrigger class="font-bold">
        Electron Shadcn Vue
      </MenubarTrigger>
      <MenubarContent>
        <MenubarItem>About Electron Shadcn Vue</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Preferences... <MenubarShortcut>⌘,</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarShortcut />
        <MenubarItem>
          Quit <MenubarShortcut>⌘Q</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>

<script setup lang="ts">
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger
} from '@/components/ui/menubar'

import {
  CircleMinusIcon,
  CircleXIcon,
  PlusCircleIcon
} from 'lucide-vue-next'

function close () {
  window.Electron.close()
}

function minimize () {
  window.Electron.minimize()
}

function maximize () {
  window.Electron.maximize()
}
</script>
