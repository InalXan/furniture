<template>
  <div
    id="AdminLogin"
    class="w-full bg-center min-h-screen bg-second flex flex-col sm:justify-center items-center pt-6 sm:pt-0"
  >
    <div class="w-full h-[100vh] bg-transparan absolute"></div>
    <div class="w-full sm:max-w-md p-5 mx-auto z-50">
      <h2 class="mb-12 text-center text-5xl text-second font-extrabold">
        İdarə Panelinə Xoşgəlmisiniz
      </h2>
      <form action="/admin/login">
        <div class="mb-4">
          <label class="block mb-1 text-second" for="email">Username</label>
          <input
            id="email"
            type="text"
            name="username"
            placeholder="username"
            class="py-2 px-3 border border-shadow focus:border-primary focus:outline-none focus:ring focus:primary/2 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-transparan mt-1 block w-full"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-1 text-second" for="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="**********"
            class="py-2 px-3 border border-shadow focus:border-primary focus:outline-none focus:ring focus:ring-primary/2 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-shadow mt-1 block w-full"
          />
        </div>
        <div class="mt-6">
          <button
            class="w-full inline-flex items-center justify-center px-4 py-2 bg-primary border border-transparan rounded-md font-semibold capitalize text-second hover:bg-second hover:text-dark active:bg-danger focus:outline-none focus:border-danger focus:ring focus:ring-danger/2 disabled:opacity-25 transition"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="less">
@import '../../assets/less/base';
#AdminLogin {
  background-image: @loginBack;
}
</style>
