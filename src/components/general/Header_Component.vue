<script>
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

      logoHeader: `../public/loginBack.jpeg`
    }
  }
}
</script>

<template>
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
</template>

<style lang="less">
@import '../../assets/less/base';

.popover {
  display: none;
  box-shadow: @shadow-md;
}

.popover:target {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  .flex-center();
}

#content {
  animation: 1s grow ease forwards;
}

#nav_list li {
  padding: 15px 0;
  animation: 2s slideUp ease forwards 0.5s;
}

#nav_list li::before {
  content: ' ';
  position: absolute;
  height: 2px;
  width: 0px;
  left: 0;
  bottom: 10px;
  background: @danger;
  transition: all 0.5s ease;
}

#nav_list li:hover:before {
  width: 100%;
}

.popover .close::after {
  right: 0;
  top: 0;
  width: 50px;
  height: 50px;
  position: absolute;
  display: flex;
  z-index: 1;
  font-size: 30px;
  .flex-center();
  background-color: @danger;
  color: @second;
  content: ' ';
  cursor: pointer;
  opacity: 0;
  animation: 1s fadeIn ease forwards 0.5s;
}

@keyframes grow {
  100% {
    height: 90%;
    width: 90%;
  }
}

@keyframes fadeIn {
  100% {
    opacity: 1;
  }
}

@keyframes slideUp {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
