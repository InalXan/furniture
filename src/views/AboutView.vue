<script>
// components end
export default {
  data() {
    return {
            navItems: [
        { name: 'Ana Səhifə', link: '/' },
        { name: 'Məhsullar', link: '/products' },
        { name: 'Galereya', link: '/gallery' },
        { name: 'Haqqımızda', link: '/about' },
        { name: 'Əlaqə', link: '/contact' }
      ],

      logoHeader: `../public/loginBack.jpeg`,
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
  <!--  about header start -->
  <div class="w-full h-[45vh]  flex flex-center shadow-md" id="about_header">
    <div id="overlay" class="w-full h-[45vh] bg-transparan absolute"></div>
    <h1 class="text-4xl font-bold text-second z-10">Anproduction Haqqında</h1>
  </div>
  <!--  about header end -->
  <!--  about section start -->
  <section class="relative pt-12 bg-second">
    <div class="items-center flex flex-wrap">
      <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
        <img alt="..." class="max-w-full rounded-lg shadow-lg" :src="aboutImage" />
      </div>
      <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
        <div class="md:pr-12">
          <div
            class="text-second p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full text-xl bg-primary mt-8"
          >
            <ion-icon name="construct"></ion-icon>
          </div>
          <h3 class="text-3xl font-semibold">Anproduction</h3>
          <p class="mt-4 text-lg leading-relaxed text-primary">
            Biz Anproduction Şirkəti Sizin Üçün İstədiyiniz Dizayn Və Materialda Metal
            Konstruksiyalar Və Ya Mebellər Hazırlayırıq.
          </p>
          <ul class="list-none mt-6">
            <li class="py-2">
              <div class="flex items-center">
                <div>
                  <span
                    class="font-semibold inline-block py-1 px-2 uppercase rounded-full text-second bg-primary text-xl flex flex-center mr-3"
                    ><ion-icon name="checkmark"></ion-icon
                  ></span>
                </div>
                <div>
                  <h4 class="text-primary">Keyfiyyətli Material</h4>
                </div>
              </div>
            </li>
            <li class="py-2">
              <div class="flex items-center">
                <div>
                  <span
                    class="text-xl flex flex-center font-semibold inline-block py-1 px-2 uppercase rounded-full text-second bg-primary mr-3"
                    ><ion-icon name="checkmark"></ion-icon
                  ></span>
                </div>
                <div>
                  <h4 class="text-primary">Markanız Üçün Xüsusi Dizayn</h4>
                </div>
              </div>
            </li>
            <li class="py-2">
              <div class="flex items-center">
                <div>
                  <span
                    class="text-xl flex flex-center font-semibold inline-block py-1 px-2 uppercase rounded-full text-second bg-primary mr-3"
                    ><ion-icon name="checkmark"></ion-icon
                  ></span>
                </div>
                <div>
                  <h4 class="text-primary">Tam Zamanlı Xidmət</h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!--  about section end -->
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
@import '../assets/less/base';
#about_header {
  background-image: @aboutHeader;
}

</style>
