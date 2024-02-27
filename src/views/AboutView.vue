<script>
export default {
  data() {
    return {
      aboutImage: `https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80`
    }
  }
}
</script>
<template>
  <!--  about header start -->
  <div class="w-full h-[45vh] bg-center flex flex-center shadow-md" id="about_header">
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
</template>
<style lang="less">
@import '../assets/less/base';
#about_header {
  background-image: @aboutHeader;
}
</style>
