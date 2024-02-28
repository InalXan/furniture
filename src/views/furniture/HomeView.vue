<script>
// swiper components
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// autoplay slider options
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
         navItems: [
        { name: 'Ana Səhifə', link: '/furniture' },
        { name: 'Məhsullar', link: '/furniture/products' },
        { name: 'Galereya', link: '/furniture/gallery' },
        { name: 'Haqqımızda', link: '/about' },
        { name: 'Əlaqə', link: '/contact' }
      ],

      logoHeader: `../../public/loginBack.jpeg`,
      swiperItems: [
        {
          slideImg: `https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          text: 'Anproduction'
        },
        {
          slideImg: `https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          text: 'Dayanıqlı Materiallar'
        },
        {
          slideImg: `https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          text: 'Ən Yaxşı İşçilik'
        }
      ],
      modules: [Autoplay, Pagination, Navigation]
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
  <!-- slide start -->
  <div class="w-100 sm:h-[100vh] h-[80vh] bg-center" id="slider_container">
    <div class="w-full sm:h-[100vh] h-[80vh]">
      <swiper
        class="max-w-full blur-sm rounded-lg sm:h-[100vh] h-[80vh] relative"
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :modules="modules"
      >
        <swiper-slide
          id="slide_content"
          v-for="swiperItem in swiperItems"
          :key="swiperItem"
          :style="{ backgroundImage: `url('${swiperItem.slideImg}')` }"
          class="shadow-sxl bg-center text-center text-xl rounded-lg bg-second flex flex-center"
        >
        </swiper-slide>
      </swiper>
      <div class="absolute"></div>
      <swiper
        class="max-w-[800px] rounded-lg h-[50vh] sm:h-[70vh] top-[-75%] relative"
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :modules="modules"
      >
        <swiper-slide
          id="slide_content"
          v-for="swiperItem in swiperItems"
          :key="swiperItem"
          :style="{ backgroundImage: `url('${swiperItem.slideImg}')` }"
          class="shadow-sxl bg-center text-center text-xl rounded-lg bg-second flex flex-center"
        >
          <div class="w-full flex flex-center h-full">
            <h1 class="text-4xl text-second shadow-lg font-extrabold">{{ swiperItem.text }}</h1>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <!-- slide end -->
  <!--sevice category start-->
  <div class="flex justify-center items-center">
    <div
      class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto"
    >
      <!-- start hr components -->
      <section class="px-4 sm:px-6 lg:px-8">
        <div
          class="p-8 bg-primary sm:p-14 bg-center rounded-2xl shadow-2xl font-mulish md:min-w-[692px]"
        >
          <div class="flex justify-between items-center">
            <h3 class="text-[#D0CAE5] text-[22px] font-bold">Projects</h3>
            <a href="#" class="text-[#F09666] font-bold hover:underline"> Archived projects </a>
          </div>
          <p class="mt-5 text-[#D0CAE5] max-w-md">
            Group your projects into separate folders. When you are uploading use the “Add to
            folder” checkbox.
          </p>
        </div>
      </section>
      <!-- end hr components -->
      <div class="lg:flex items-stretch md:mt-12 mt-8">
        <div class="lg:w-1/2">
          <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
            <div class="sm:w-1/2 relative">
              <div>
                <p class="p-6 text-xs font-medium leading-3 text-second absolute top-0 right-0">
                  Anproduction
                </p>
                <div class="absolute bottom-0 left-0 p-6">
                  <h2 class="text-xl font-semibold 5 text-second">The Decorated Ways</h2>
                  <p class="text-base leading-4 text-second mt-2">Dive into minimalism</p>
                  <a
                    href="javascript:void(0)"
                    class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-second hover:text-success hover:underline"
                  >
                    <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                    <svg
                      class="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img src="https://i.ibb.co/DYxtCJq/img-1.png" class="w-full" alt="chair" />
            </div>
            <div class="sm:w-1/2 sm:mt-0 mt-4 relative">
              <div>
                <p class="p-6 text-xs font-medium leading-3 text-second absolute top-0 right-0">
                  Anproduction
                </p>
                <div class="absolute bottom-0 left-0 p-6">
                  <h2 class="text-xl font-semibold 5 text-second">The Decorated Ways</h2>
                  <p class="text-base leading-4 text-second mt-2">Dive into minimalism</p>
                  <a
                    href="javascript:void(0)"
                    class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-second hover:text-success hover:underline"
                  >
                    <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                    <svg
                      class="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img src="https://i.ibb.co/3C5HvxC/img-2.png" class="w-full" alt="wall design" />
            </div>
          </div>
          <div class="relative">
            <div>
              <p
                class="md:p-10 p-6 text-xs font-medium leading-3 text-second absolute top-0 right-0"
              >
                Anproduction
              </p>
              <div class="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 class="text-xl font-semibold 5 text-second">The Decorated Ways</h2>
                <p class="text-base leading-4 text-second mt-2">Dive into minimalism</p>
                <a
                  href="javascript:void(0)"
                  class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-second hover:text-success hover:underline"
                >
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg
                    class="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <img
              src="https://i.ibb.co/Ms4qyXp/img-3.png"
              alt="sitting place"
              class="w-full mt-8 md:mt-6 hidden sm:block"
            />
            <img
              class="w-full mt-4 sm:hidden"
              src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
              alt="sitting place"
            />
          </div>
        </div>
        <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
          <div class="relative">
            <div>
              <p
                class="md:p-10 p-6 text-xs font-medium leading-3 text-second absolute top-0 right-0"
              >
                Anproduction
              </p>
              <div class="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 class="text-xl font-semibold 5 text-second">The Decorated Ways</h2>
                <p class="text-base leading-4 text-second mt-2">Dive into minimalism</p>
                <a
                  href="javascript:void(0)"
                  class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-second hover:text-success hover:underline"
                >
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg
                    class="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <img
              src="https://i.ibb.co/6Wfjf2w/img-4.png"
              alt="sitting place"
              class="w-full sm:block hidden"
            />
            <img
              class="w-full sm:hidden"
              src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
              alt="sitting place"
            />
          </div>
          <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
            <div class="relative w-full">
              <div>
                <p class="p-6 text-xs font-medium leading-3 text-second absolute top-0 right-0">
                  Anproduction
                </p>
                <div class="absolute bottom-0 left-0 p-6">
                  <h2 class="text-xl font-semibold 5 text-second">The Decorated Ways</h2>
                  <p class="text-base leading-4 text-second mt-2">Dive into minimalism</p>
                  <a
                    href="javascript:void(0)"
                    class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-second hover:text-success hover:underline"
                  >
                    <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                    <svg
                      class="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img src="https://i.ibb.co/3yvZBpm/img-5.png" class="w-full" alt="chair" />
            </div>
            <div class="relative w-full sm:mt-0 mt-4">
              <div>
                <p class="p-6 text-xs font-medium leading-3 text-second absolute top-0 right-0">
                  12 April 2021
                </p>
                <div class="absolute bottom-0 left-0 p-6">
                  <h2 class="text-xl font-semibold 5 text-second">The Decorated Ways</h2>
                  <p class="text-base leading-4 text-second mt-2">Dive into minimalism</p>
                  <a
                    href="javascript:void(0)"
                    class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-second hover:text-success hover:underline"
                  >
                    <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                    <svg
                      class="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img src="https://i.ibb.co/gDdnJb5/img-6.png" class="w-full" alt="wall design" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--sevice category end-->
  <!-- Home Gallery start -->
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/0/03/Kashi_Vishwanath_Temple_Banaras.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pbs.twimg.com/media/FGRnUzPVEAAbqM8?format=jpg&name=large"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pbs.twimg.com/media/FGRnNpAVUAYqRYv?format=jpg&name=large"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pbs.twimg.com/media/FGRnP_TUUAAttG3?format=jpg&name=large"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://i.pinimg.com/originals/c0/7d/17/c07d17d7ca0b9f39f5aded4b6dca8f02.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg/1280px-Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://www.jagranimages.com/images/newimg/27072020/27_07_2020-shri-kashi-vishwanath-temple_20557350.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://www.jansatta.com/wp-content/uploads/2021/12/Kashi-Vishwanath-Mandir.png?w=1024"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://staticimg.amarujala.com/assets/images/2021/11/07/750x506/kashi-vishwanath-dham_1636258507.jpeg?w=674&dpr=1.0"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://staticimg.amarujala.com/assets/images/2020/01/13/750x506/kashi-vishwanath-mandir-varanasi_1578924152.png?w=700&dpr=2.0"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/800px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/2/25/Chet_Singh_Ghat_in_Varanasi.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <!-- Home Gallery end -->
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
// base
@import '../../assets/less/base';
// slider
#slider_container {
  background-image: @sliderBack;
}
</style>
