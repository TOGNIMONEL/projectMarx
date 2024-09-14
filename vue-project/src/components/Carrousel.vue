<template>
  <div
    class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
    style="background-color: #12295b; border-radius: 80px"
  >
    <div class="mx-auto max-w-screen-md sm:text-center">
      <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
        Newsletter
      </h2>
      <form action="#">
        <div
          class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0"
        >
          <div class="relative w-full">
            <label for="email" class="hidden mb-2 text-sm font-medium text-white"
              >Email address</label
            >
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                ></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              class="block p-3 pl-10 w-full text-sm text-white bg-white border border-white focus:ring-white focus:border-white"
              style="border-radius: 80px; padding: 12px"
              placeholder="Enter your email"
              type="email"
              id="email"
              required=""
            />
          </div>
          <div>
            <button
              type="submit"
              class="py-3 px-5 w-full text-sm font-medium text-center text-white border cursor-pointer bg-black border-white hover:bg-default focus:ring-4 focus:ring-white"
              style="border-radius: 20px; padding: 12px"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
