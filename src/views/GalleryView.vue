<template>
  <!--  gallery header start -->
  <div class="w-full h-[45vh] bg-center flex flex-center shadow-md" id="gallery_header">
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
          src="https://images.unsplash.com/photo-1560449752-b5d5c1c89cee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
      </div>
      <div id="content_img" class="w-full col-span-2 row-span-2 rounded">
        <img
          src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
      </div>
      <div id="content_img" class="w-full rounded">
        <img
          src="https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
      </div>
      <div id="content_img" class="w-full rounded">
        <img
          src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
      </div>
      <div id="content_img" class="w-full rounded">
        <img
          src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1513&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
      </div>
      <div id="content_img" class="w-full rounded">
        <img
          src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
      </div>
    </div>
  </div>
  <!--  gallery end -->
</template>

<style lang="less">
@import '../assets/less/base';
#content_img:hover {
  -ms-filter: blur(2px);
  filter: blur(2px);
}
#gallery_header {
  background-image: @galleryHeader;
}
</style>
