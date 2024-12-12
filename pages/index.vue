<template>
  <div class="bg-neutral-50 duration-300 dark:bg-slate-800" :class="blnDarkMode? 'dark': 'light'" >

    <header>
      <div class="container relative h-12 flex justify-between items-center px-4 md:h-14">
        <p class="text-sky-500 text-xl font-bold  transition-colors duration-300 dark:text-amber-200 md:text-2xl lg:text-3xl">Louie<span class="text-black dark:text-white">.</span></p>
  
        <div class="px-2 md:hidden">
          <font-awesome :icon=" blnShowMenu ? 'xmark' :'bars'" class="text-xl" :class="blnDarkMode && 'text-slate-50'" @click="blnShowMenu = !blnShowMenu"/>
        </div>
        <nav 
        :class="blnShowMenu ? 'absolute bg-white dark:bg-slate-800': 'hidden md:flex  '"
        >
          <p>About</p>
          <p>Resume</p>
          <p>Projects</p>
          <p>Contact</p>

          <div class=" md:w-10 md:h-8 content-center self-center" @click="fnToggleDarkMode">
            <font-awesome :icon="blnDarkMode ? ['far','moon'] : ['far','sun']" class="text-base md:text-2xl cursor-pointer" :class="blnDarkMode ? 'text-white' : 'text-slate-700'" />
          </div>

          <!-- <div class="relative inline-block w-12 h-6 self-center">
            <input type="checkbox" v-model="blnDarkMode" id="toggle" class="peer w-12 h-6 appearance-none bg-slate-200 rounded-full border checked:border-slate-800 checked:bg-blue-400 cursor-pointer transition-colors duration-300" >
            <label for="toggle" class="absolute bg-white border rounded-full top-0 w-6 h-6 left-0 peer-checked:border-slate-800 peer-checked:translate-x-6 transition-transform duration-300 z-10"></label>
            <label class="absolute right-0 peer-checked:-translate-x-6 w-6 h-6 top-0 transition-transform duration-300 content-center text-sm" @click="blnDarkMode = !blnDarkMode">
              <font-awesome :icon="blnDarkMode ? ['far','moon'] : ['far','sun']" class="" :class="blnDarkMode ? 'text-white' : 'text-slate-700'"/>
            </label>
          </div> -->
        </nav>
      </div>
    </header>

    <section class="">
      <div class="container">
  
        <div class="
        md:relative
        flex 
        flex-col 
        justify-center 
        items-center 
        gap-2
        md:grid
        md:grid-cols-5
        md:flex-row-reverse
        md:px-10
        md:h-64
        lg:h-[25rem]
        ">
          <div class="md:flex md:justify-center md:col-span-2 md:order-2">
            <div class="
            w-32 
            h-32 
            border-2 
            border-sky-500
            dark:border-amber-200
            rounded-full 
            overflow-hidden
            md:border-none
            md:rounded-none
            md:h-80
            md:w-80
            md:absolute
            md:-top-5
            md:right-0
            lg:h-[30rem]
            lg:w-[30rem]
            ">
              <img src="~/assets/images/artist.png" alt="" class="w-full h-full object-cover">
            </div>
          </div>

          <div class="
          text-center 
          flex 
          flex-col 
          gap-2
          text-gray-800 
          dark:text-slate-50 
          md:text-start
          md:col-span-3
          ">
            <p class="text-2xl font-bold md:text-3xl lg:text-4xl">Hi I'm <span class="text-sky-500 dark:text-amber-200">Louie</span></p>
            <p class="font-semibold md:text-lg lg:text-xl">Javascript Web Developer</p>
            <p class="
            text-sm 
            text-gray-500 
            leading-4 
            dark:text-slate-50
            md:text-base
            md:leading-4
            lg:text-lg
            lg:leading-5
            ">I have acquired and sharpen de Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore tempora eos fuga eveniet nisi doloremque dolorum quod quasi nemo pariatur.</p>
            <div>
              <nuxt-link to="/#contact">
                <button class="contact-btn" >Contact me</button>
              </nuxt-link>
            </div>
          </div>

        </div>


      </div>
    </section>

    <!-- <section class="">
      <div class="container">
        <p class="section-title">About</p>
        <p>I have acquired and sharpen de Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore tempora eos fuga eveniet nisi doloremque dolorum quod quasi nemo pariatur.</p>
      </div>
    </section> -->

    <section class="">
      <div class="container">
        <p class="section-title">Skills</p>

        <div class="container__body flex flex-wrap justify-center gap-3 w-full md:gap-4 lg:gap-5 ">
          <div class="skills__image-container"> 
            <img src="../assets/icons/nodejs.svg" alt="" class="skills__image">
            <p>Node JS</p>
          </div>
          
          <div class="skills__image-container"> 
            <img src="../assets/icons/express-original.svg" alt="" class="skills__image">
            <p>Express JS</p>
          </div>

          <div class="skills__image-container"> 
            <img src="../assets/icons/javascript-js.svg" alt="" class="skills__image">
            <p>JavaScipt</p>
          </div>

          <div class="skills__image-container"> 
            <img src="../assets/icons/typescript.svg" alt="" class="skills__image">
            <p>TypeScript</p>
          </div>

          <div class="skills__image-container"> 
            <img src="../assets/icons/nuxtjs.svg" alt="" class="skills__image">
            <p>Nuxt JS</p>
          </div>

          <div class="skills__image-container"> 
            <img src="../assets/icons/vue.svg" alt="" class="skills__image">
            <p>Vue JS</p>
          </div>
          
          <div class="skills__image-container"> 
            <img src="../assets/icons/tailwind-css.svg" alt="" class="skills__image">
            <p>Tailwind CSS</p>
          </div>

          <div class="skills__image-container"> 
            <img src="../assets/icons/mongodb.svg" alt="" class="skills__image">
            <p>MongoDB</p>
          </div>

          <div class="skills__image-container"> 
            <img src="../assets/icons/github.svg" alt="" class="skills__image">
            <p>Github</p>
          </div>

        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <p class="section-title">Projects</p>

        <div class="container__body text-center">
          Add Projects here +
        </div>
      </div>
    </section>

    <section>
      <div class="container text-gray-800 dark:text-slate-50">
        <p class="section-title">Experience</p>

        <div class="container__body grid grid-cols-7">
          <p class="col-span-2 text-center font-bold md:text-xl lg:text-2xl">2022</p>
          <div class="col-span-5">
            <p class="experience__title">Backend Developer</p>
            <div class="pl-4 py-1 border-l-2 border-gray-700 dark:border-slate-200">
              <p class="font-semibold md:text-lg lg:text-xl">Cebu City</p>
              <p class="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veritatis saepe voluptate molestias eos repellendus, fugit dolor nobis cumque eius.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="container">
        <p class="section-title">Contact Me</p>

        <div class="container__body w-full flex flex-col items-center gap-3 md:flex-row md:justify-center flex-wrap lg:gap-5">

          <div class="contact-info ">
            <font-awesome :icon="['far','envelope']"  class="text-xl md:text-xl"/>
            <p>vlarrabis@gmail.com</p>
          </div>
          
          <div class="contact-info">
            <font-awesome icon="phone"  class="text-xl md:text-xl"/>
            <p >(+63) 915-048-4106</p>
          </div>
          
          <div class="contact-info">
            <font-awesome icon="map-pin"  class="text-xl md:text-xl"/>
            <p>Cagayan De Oro City</p>
          </div>

        </div>
      </div>
    </section>

    <section class="h-44  content-center">
      <p class="
      text-center 
      text-2xl 
      font-serif 
      text-sky-500 
      dark:text-amber-200
      md:text-3xl
      lg:text-4xl
      ">-Thanks for scrolling-</p>
    </section>

  </div>
</template>

<script setup>
import darkmode from '../helper/darkmode.js'
const blnShowMenu = ref(false)
const blnDarkMode = ref(false)


const fnSetDarkMode = () => blnDarkMode.value = darkmode.get()

const fnToggleDarkMode = () => {
  blnDarkMode.value = !blnDarkMode.value
  darkmode.set(blnDarkMode.value)
}

onMounted(() => {
  fnSetDarkMode()
})
</script>

<style lang="ts" scoped>

</style>