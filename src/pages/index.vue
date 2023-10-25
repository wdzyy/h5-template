<script setup>
import { login } from '@/apis/user.ts'
import { useUserStore } from '@/stores/modules/user'

const userInfoStore = useUserStore()
onMounted(() => {
  login({
    account: '18311223344',
    password: 'e10adc3949ba59abbe56e057f20f883e',
  }).then((res) => {
    console.log(res, 'res')
    userInfoStore.setToken(res.data)
  })
})
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
