<script>
export default {
  data() {
    return {
      rightImage: `https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      leftImage: `https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
    }
  }
}
</script>
<template>
  <!--split page start -->
  <div id="split_container" class="flex flex-wrap w-full">
    <div
      id="right_side"
      :style="{ backgroundImage: `url('${rightImage}')` }"
      class="w-[100vw] bg-center border-r-2 border-second md:w-1/2 h-[50vh] md:h-[100vh]"
    >
      <div id="overlay" class="w-full h-[100vh] flex flex-center bg-transparan">
        <div>
          <h1 class="text-3xl font-bold text-second">Mebellərin Hazırlanması</h1>
          <br>
          <RouterLink to="/furniture" class="w-36 h-16 p-2 text-second bg-primary rounded-md focus:border focus:border-second"
          >Səhifəyə Gedin</RouterLink
          >
        </div>
      </div>

    </div>
    <div
      id="left_side"
      :style="{ backgroundImage: `url('${leftImage}')` }"
      class="w-[100vw] bg-center md:w-1/2 border-l-2 border-second h-[50vh] md:h-[100vh]"
    >
      <div id="overlay" class="w-full h-[100vh] flex flex-center bg-transparan">
        <div>
          <h1 class="text-3xl font-bold text-second">Dəmir Konstruksiyaların Hazırlanması</h1>
          <br>
          <RouterLink to="/ironwork" class="w-36 h-16 p-2 text-second bg-primary rounded-md focus:border focus:border-second"
          >Səhifəyə Gedin</RouterLink
          >
        </div>
      </div>

    </div>
  </div>
  <!--split page end -->
</template>
