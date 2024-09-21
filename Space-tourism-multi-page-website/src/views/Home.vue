<template>
  <section class="bg-homeMobile sm:bg-homeTablet lg:bg-homeDesktop w-full h-full centerBg">
    <div class="wrapper container flex flex-col lg:flex lg:flex-row items-center justify-evenly h-full">
      <div class="pt-200 text-center lg:text-start flex flex-col items-center md:items-start">
        <h1 class="text-preset7 md:text-preset5 text-lightBlue flex flex-col">
          <span>SO, YOU WANT TO TRAVEL TO</span>
          <span class="text-preset2 md:text-preset1">SPACE</span>
        </h1>
        <p class="text-preset8 leading-[32.4px] max-w-[327px] md:max-w-[540px] text-start">Let's face it; if you want to
          go to space, you
          might as
          well genuinely
          go to outer
          space
          and not hover kind
          of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
        </p>
      </div>

      <div class="group">

        <div
          class="bg-transparent p-500 lg:p-800 rounded-full transition-colors will-change-auto group-hover:bg-white/10 duration-300">

          <RouterLink to="/destination" class="">
            <div
              class="w-[144px] h-[144px]  md:w-[200px] md:h-[200px] lg:w-[275px] lg:h-[275px] bg-white rounded-full flex items-center justify-center  ">

              <p class="text-darkBlue text-preset6 md:text-preset4 uppercase transition-transform
            will-change-transform group-hover:scale-105">
                Explore
              </p>
            </div>
          </RouterLink>

        </div>

      </div>

    </div>
  </section>
</template>
