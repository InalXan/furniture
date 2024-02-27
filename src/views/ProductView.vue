<template>
  <!--  product header start -->
  <div class="w-full h-[45vh] bg-center flex flex-center shadow-md" id="product_header">
    <div id="overlay" class="w-full h-[45vh] bg-transparan absolute"></div>
    <h1 class="text-4xl font-bold text-second z-10">Anproduction Məhsulları</h1>
  </div>
  <!--  product header end -->
  <!-- product main start -->
  <main class="gallery">
    <div class="relative grid grid-cols-3 gap-1 p-2" id="gallery-track">
      <div class="h-[400px]" id="card">
        <div class="h-[135px]" id="card-image-wrapper">
          <img src="https://source.unsplash.com/kL3u4Tqfn1s" />
        </div>
      </div>
      <div class="h-[400px] overflow-hidden" id="card">
        <div class="h-[135px] will-change-transform" id="card-image-wrapper">
          <img src="https://source.unsplash.com/kL3u4Tqfn1s" />
        </div>
      </div>
      <div class="h-[400px] overflow-hidden" id="card">
        <div class="h-[135px] will-change-transform" id="card-image-wrapper">
          <img src="https://source.unsplash.com/kL3u4Tqfn1s" />
        </div>
      </div>
      <div class="h-[400px] overflow-hidden" id="card">
        <div class="h-[135px] will-change-transform" id="card-image-wrapper">
          <img src="https://source.unsplash.com/kL3u4Tqfn1s" />
        </div>
      </div>
      <div class="h-[400px] overflow-hidden" id="card">
        <div class="h-[135px] will-change-transform" id="card-image-wrapper">
          <img src="https://source.unsplash.com/kL3u4Tqfn1s" />
        </div>
      </div>
      <div class="h-[400px] overflow-hidden" id="card">
        <div class="h-[135px] will-change-transform" id="card-image-wrapper">
          <img src="https://source.unsplash.com/kL3u4Tqfn1s" />
        </div>
      </div>
      <div class="h-[400px] overflow-hidden" id="card">
        <div class="h-[135px] will-change-transform" id="card-image-wrapper">
          <img src="https://source.unsplash.com/kL3u4Tqfn1s" />
        </div>
      </div>
      <div class="h-[400px] overflow-hidden" id="card">
        <div class="h-[135px] will-change-transform" id="card-image-wrapper">
          <img src="https://source.unsplash.com/kL3u4Tqfn1s" />
        </div>
      </div>
      <div class="h-[400px] overflow-hidden" id="card">
        <div class="h-[135px] will-change-transform" id="card-image-wrapper">
          <img src="https://source.unsplash.com/kL3u4Tqfn1s" />
        </div>
      </div>
    </div>
  </main>
  <!--  product main end -->
</template>

<style lang="less">
@import '../assets/less/base';
#product_header {
  background-image: @productHeader;
}
#gallery-track {
  will-change: transform;
}

.card {
  height: 400px;
  overflow: hidden;
  & .card-image-wrapper {
    height: 135%;
    will-change: transform;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@media (width < 800px) {
  #gallery-track {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (width < 550px) {
  #gallery-track {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
<script setup></script>
