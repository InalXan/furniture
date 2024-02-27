<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
// components start
import Header_Component from './components/general/Header_Component.vue'
import Footer_Component from './components/general/Footer_Component.vue'
import Whatsapp_Component from './components/general/Whatsapp_Component.vue'
// components end
const isAdmin = ref(false)

function setMenuStatus() {
  const urlPath = window.location.pathname
  const match = urlPath.match(/^\/[a-zA-Z]+/)

  if (!match) {
    isAdmin.value = false
    return
  }

  if (match[0] === '/admin') {
    isAdmin.value = true
  }
}

onMounted(() => {
  setMenuStatus()
})
</script>

<template>
  <!--  whatsapp start -->
  <Whatsapp_Component v-if="!isAdmin" class="z-50 right-5" />
  <!--  whatsapp end -->
  <!-- header start -->
  <header
    v-if="!isAdmin"
    class="min-h-100 flex flex-end bg-second scroll-smooth fixed top-0 w-full z-50"
    id="container"
  >
    <Header_Component />
  </header>
  <!-- header end -->
  <!-- border start -->
  <RouterView />
  <!-- border end -->
  <!-- footer start -->
  <Footer_Component v-if="!isAdmin" />
  <!-- footer end -->
</template>

<style scoped></style>
