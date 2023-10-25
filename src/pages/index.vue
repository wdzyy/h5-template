<script setup>
import { useUserStore } from '@/stores/modules/user'

const userInfoStore = useUserStore()
</script>

<template>
  <div>
    {{ userInfoStore.token }}
    <ZHeader />
    <ZFooter />
    <ZNavbar />
    <ZTabbar />
  </div>
</template>

<style lang="scss" scoped>
</style>
