<script>
export default {
  data() {
    return {
            navItems: [
        { name: 'Ana Səhifə', link: '/ironwork' },
        { name: 'Məhsullar', link: '/ironwork/products' },
        { name: 'Galereya', link: '/ironwork/gallery' },
        { name: 'Haqqımızda', link: '/about' },
        { name: 'Əlaqə', link: '/contact' }
      ],

      logoHeader: `../../public/loginBack.jpeg`,
      aboutImage: `https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80`,
    }
  }
}
</script>
<template>
  <!--  whatsapp start -->
    <div class="fixed z-50 bottom-5 right-0">
    <a href="https://wa.me/905010271819">
      <img
        class="w-16 h-16"
        src="https://imgs.search.brave.com/Msl04q9JNj2XQFqz3fHu0DECxR280FEApBW8TB8nRHA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8zNjcwLzM2NzAw/NTEucG5n"
        alt=""
      />
    </a>
  </div>
  <!--  whatsapp end -->
  <!-- header start -->
  <header
    class="min-h-100 flex flex-end bg-second scroll-smooth fixed top-0 w-full z-50"
    id="container"
  >
   <div class="w-1/2">
    <div id="logo">
      <img :src="logoHeader" class="w-16 h-16 rounded-full m-2" alt="" />
    </div>
  </div>
  <!-- toggle icon -->
  <div id="toggle" class="w-1/2 flex flex-center-end m-2 text-right">
    <a class="text-extrabold text-3xl text-primary uppercase" href="#menu">
      <ion-icon name="apps-outline"></ion-icon>
    </a>
  </div>
  <!-- popup  -->
  <div class="popover z-50" id="menu">
    <div
      class="flex flex-center fixed top-[50px] w-0 h-0 text-second bg-transparan text-center"
      id="content"
    >
      <a href="#" class="close"> </a>
      <div id="nav">
        <ul id="nav_list">
          <div
            v-for="navItem in navItems"
            :key="navItem"
            class="text-4xl text-primary h-100 overflow-hidden"
            id="nav_list_item"
          >
            <li class="uppercase transform translate-y-200 text-second opacity-0 relative">
              <RouterLink :to="navItem.link">{{ navItem.name }}</RouterLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
  </header>
  <!-- header end -->
  <!--  gallery header start -->
  <div class="w-full h-[45vh] flex flex-center shadow-md" id="gallery_header">
    <div id="overlay" class="w-full h-[45vh] bg-transparan absolute"></div>
    <h1 class="text-4xl font-bold text-second z-10">Anproduction Galereya</h1>
  </div>
  <!--  gallery header end -->
  <!--  gallery start-->
  <div class="container mx-auto">
    <div
      class="grid-cols-3 p-20 space-y-2 bg-yellow-200 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3"
    >
      <div id="content_img" class="w-full rounded">
        <img
          src="https://imgs.search.brave.com/b82Vv3A8-trYfttGzbVKu2J3gt5K1o3GogRnvOTdtmc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMzIyNjMz/My83NTg2L2kvNjAw/L2RlcG9zaXRwaG90/b3NfNzU4Njg1MjUt/c3RvY2stcGhvdG8t/d3JvdWdodC1pcm9u/LmpwZw"
          alt="image"
        />
      </div>
      <div id="content_img" class="w-full col-span-2 row-span-2 rounded">
        <img
          src="https://imgs.search.brave.com/9cuPrgM8WRfHID9V9bNab6AjUlLVoEOaMuj6LvY6sMo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9maW5l/aXJvbi5jby51ay93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/Mi9HZW9yZ2lhbi1X/cm91Z2h0LUlyb24u/anBn"
          alt="image"
        />
      </div>
      <div id="content_img" class="w-full rounded">
        <img
          src="https://imgs.search.brave.com/RXeobw8J2NBA9bi_unHMskpO2wpCx7eTvd6UduOzTpQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzcwLzk3LzA5/LzM2MF9GXzE3MDk3/MDk0MF9kSUtUNjFU/U0VvRHBJTzRTd0l1/YWZiY3lrMU1qRTJB/aC5qcGc"
          alt="image"
        />
      </div>
      <div id="content_img" class="w-full rounded">
        <img
          src="https://imgs.search.brave.com/ZIjifJ9aEgxTuqpDZIiHXqtJqxkEqKNzI2ADDSGEQ3A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9rZXJ2/aW5zaXJvbndvcmtz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wMi9NZXNo/LUhvbWUtcGFnZS5q/cGc"
          alt="image"
        />
      </div>
      <div id="content_img" class="w-full rounded">
        <img
          src="https://imgs.search.brave.com/NZtkDLkSEbVy8khyHPJwDBqe75QhIYi0ENNPrjmIiEI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly94dHJl/bWVpcm9ud29yay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDYveHRyZW1l/LWlyb24td29yay1j/b3JlbWVkaWEtcGhv/dG9ncmFwaHlfd2Vi/LXJhaWwtaXJvbi1p/bnRlcmlvci1iYWxj/b255LmpwZw"
          alt="image"
        />
      </div>
      <div id="content_img" class="w-full rounded">
        <img
          src="https://imgs.search.brave.com/pq4Wn4bdLQ6sCuc-nY0XPIVY8pOh0ukDTOLe2ZPdu2k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMy8w/NS8zMC8xNi8xNC9t/ZWNoYW5pY3MtMTE0/NzIwXzY0MC5qcGc"
          alt="image"
        />
      </div>
    </div>
  </div>
  <!--  gallery end -->
    <!-- footer start -->
  <footer class="bg-second">
    <div class="container px-6 py-12 mx-auto">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        <div>
          <p class="font-semibold text-dark">Səhifələr</p>

          <div class="flex flex-col items-start mt-5 space-y-2">
            <RouterLink
              to="/"
              class="text-dark transition-colors duration-300 hover:underline hover:text-primary"
              >Ana Səhifə</RouterLink
            >
            <RouterLink
              to="/products"
              class="text-dark transition-colors duration-300 hover:underline hover:text-primary"
              >Məhsullar</RouterLink
            >
            <RouterLink
              to="/about"
              class="text-dark transition-colors duration-300 hover:underline hover:text-primary"
              >Haqqımızda</RouterLink
            >

            <RouterLink
              to="/contact"
              class="text-dark transition-colors duration-300 hover:underline hover:text-primary"
              >Əlaqə</RouterLink
            >
          </div>
        </div>

        <div>
          <p class="font-semibold text-dark">Əlaqə</p>

          <div class="flex flex-col items-start mt-5 space-y-2">
            <a
              href="tel:994234234234"
              class="text-dark transition-colors duration-300 hover:underline hover:text-primary"
              >+99455342342</a
            >
            <a
              href="mailto:anproduction@gmail.com"
              class="text-dark transition-colors duration-300 hover:underline hover:text-primary"
              >anproduction@gmail.com</a
            >

            <a
              href="mailto:anproduction@gmail.com"
              class="text-dark transition-colors duration-300 hover:underline hover:text-primary"
              >anproduction@mail.ru</a
            >
          </div>
        </div>
      </div>

      <hr class="my-6 border-dark md:my-8" />

      <div class="flex items-center justify-between">
        <RouterLink to="/">
          <img
            class="w-auto h-7"
            src="https://imgs.search.brave.com/ejwdXVr5GglGzUAeyXMlR3gK7R4JbfcovvRqh1a8T_Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/Nzc1NzgyMS92ZWN0/b3Ivd2F0ZXJjb2xv/ci1ncmVlbi1sZWFm/LWxvZ28uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXp6NzBs/T3lHTmZaX2RjLW5s/NW1pTWcxcUxyV2t3/LXRublJUS0pwamdr/QjQ9"
            alt=""
          />
        </RouterLink>

        <div class="flex -mx-2">
          <a
            href="#"
            class="mx-2 text-dark transition-colors duration-300 hover:success"
            aria-label="Facebook"
          >
            <ion-icon class="text-2xl" name="logo-instagram"></ion-icon>
          </a>

          <a
            href="#"
            class="mx-2 text-dark transition-colors duration-300 hover:success"
            aria-label="instagram"
          >
            <ion-icon class="text-2xl" name="logo-facebook"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  </footer>
  <!-- footer end  -->
</template>

<style lang="less">
@import '../../assets/less/base';
#content_img:hover {
  -ms-filter: blur(2px);
  filter: blur(2px);
}
#gallery_header {
  background-image: @galleryHeader;
}
</style>
