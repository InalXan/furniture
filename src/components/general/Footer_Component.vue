<template>
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
</template>
