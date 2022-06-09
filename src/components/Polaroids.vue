<script lang="ts">
import { defineComponent } from "vue";

import polaroid0 from "@/assets/Polaroids/polaroid00.png";
import polaroid1 from "@/assets/Polaroids/polaroid01.png";
import polaroid2 from "@/assets/Polaroids/polaroid02.png";
import polaroid3 from "@/assets/Polaroids/polaroid03.png";
import polaroid4 from "@/assets/Polaroids/polaroid04.png";
import polaroid5 from "@/assets/Polaroids/polaroid05.png";
import polaroid6 from "@/assets/Polaroids/polaroid06.png";
import polaroid7 from "@/assets/Polaroids/polaroid07.png";
import polaroid8 from "@/assets/Polaroids/polaroid08.png";
import polaroid9 from "@/assets/Polaroids/polaroid09.png";
import polaroid10 from "@/assets/Polaroids/polaroid10.png";
import polaroid11 from "@/assets/Polaroids/polaroid11.png";
import polaroid12 from "@/assets/Polaroids/polaroid12.png";
import polaroid13 from "@/assets/Polaroids/polaroid13.png";
import polaroid14 from "@/assets/Polaroids/polaroid14.png";


export default defineComponent({
  name: "Polaroids",
  components: {},
  data() {
    return {
      // carruselNo Inicializado: true,
    };
  },
  methods: {
    inicializarCarrusel() {
      this.mueveCarrusel(8)
    },
    mueveCarrusel(id: number): void {
      const incrementoX = 300
      const incrementoY = 15
      const incrementoZ = 90

      const maxZIndex = this.polaroids.length - id

      let posicionX = - (id - 1) * incrementoX
      let posicionY = - (id - 1) * incrementoY
      let posicionZ = - (id - 1) * incrementoZ

      for (let idx = 1; idx <= this.polaroids.length; idx++) {
        const zIndex = (maxZIndex - Math.abs(idx - id))
        const div = document.getElementById(`carrusel-${idx}`)
        div?.setAttribute(
          "style",
          `transform: translateX(${posicionX}px) translateZ(-${Math.abs(posicionZ)}px) translateY(-${Math.abs(posicionY)}px); z-index: ${zIndex};`
        )
        posicionX += incrementoX
        posicionY += incrementoY
        posicionZ += incrementoZ
      }
    }
  },
  computed: {
    polaroids(): Array<Record<string, any>> {
      return [ 
        {url: polaroid0, index:"carrusel-1", id: 1}, 
        {url: polaroid1, index:"carrusel-2", id: 2},
        {url: polaroid2, index:"carrusel-3", id: 3},
        {url: polaroid3, index:"carrusel-4", id: 4},
        {url: polaroid4, index:"carrusel-5", id: 5},
        {url: polaroid5, index:"carrusel-6", id: 6},
        {url: polaroid6, index:"carrusel-7", id: 7},
        {url: polaroid7, index:"carrusel-8", id: 8},
        {url: polaroid8, index:"carrusel-9", id: 9},
        {url: polaroid9, index:"carrusel-10", id: 10},
        {url: polaroid10, index:"carrusel-11", id: 11},
        {url: polaroid11, index:"carrusel-12", id: 12},
        {url: polaroid12, index:"carrusel-13", id: 13},
        {url: polaroid13, index:"carrusel-14", id: 14},    
        {url: polaroid14, index:"carrusel-15", id: 15},   
      ];
    }
  },
  async mounted () {
    this.inicializarCarrusel();
  }
});
</script>


<template>
  <div class="canvas">
    <img src="../assets/Polaroids/Fondo.png" class="coleccion-polaroids" />
    <div class="slider">
      <div class="testimonials mb-8">
        <label v-for="polaroid in polaroids" :key="polaroid.index" class="item" :id="polaroid.index">
          <img :src="polaroid.url" @click="mueveCarrusel(polaroid.id)" /> 
        </label>
      </div>
    </div>
    <div class="texto">14 fotos después, India se da cuenta de una cosa...</div>
  </div>
</template>


<style scoped>
.texto {
  font-family: "ComicBook";
  color: white;
  font-size: 30px;
  position: absolute;
  top: 750px;
  text-align: center;
  width: 100%;
  text-shadow: 3px 3px 1px black;
}
.polaroids {
  text-align: center;
}
.coleccion-polaroids {
  width: 100%;
  max-width: 1194px;
  position: absolute;
  z-index: -1;
}

.canvas {
  width: 100%;
  text-align: start;
  background: #5c82b7;
  position:fixed;
}

.mycard {
  height: 100%;
  width: 100%;
  max-width: 24rem;
}
.cardtitle {
  font-weight: bold;
  --tw-text-opacity: 1;
  color: rgba(31, 41, 55, var(--tw-text-opacity));
  text-align: center;
}
.cardimg {
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.75rem;
  margin-bottom: 2.75rem;
  max-height: 6rem;
  border-radius: 9999px;
}
.carddescription {
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, var(--tw-text-opacity));
  text-align: center;
}

body {
  margin: 0;
  color: #fff;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  min-height: 200vh;
}
.slider {
  width: 100%;
  height: 1024px;
  margin-top: 100px;
  z-index: 1;
  position: absolute;
}
.slider input {
  display: none;
}
.testimonials {
  display: flex;
  align-items: start;
  justify-content: center;
  position: relative;
  min-height: 500px;
  perspective: 500px;
  margin-top: 5rem;
  overflow: hidden;
}
.testimonials .item {
  max-width: 20rem;
  top: 0;
  position: absolute;
  background-color: #fff;
  padding: 1px;
  width: 350px;
  height: 450px;
  text-align: center;
  transition: transform 0.4s;
  -webkit-transform-style: preserve-3d;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  user-select: none;
  cursor: pointer;
}
.testimonials .item img {
  width: 100%;
}
.testimonials .item p {
  color: #ddd;
}
.testimonials .item h2 {
  font-size: 14px;
}
.dots {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dots label {
  display: block;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #413b52;
  margin: 7px;
  transition: transform 0.2s, color 0.2s;
}

/* First */
#t-1:checked ~ .dots label[for="t-1"] {
  transform: scale(2);
  background-color: #fff;
}
#t-1:checked ~ .dots label[for="t-2"] {
  transform: scale(1.5);
}
#t-1:checked ~ .testimonials label[for="t-1"] {
  z-index: 15;
}
#t-1:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(300px) translateZ(-90px) translateY(-15px);

  z-index: 14;
}
#t-1:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(600px) translateZ(-180px) translateY(-30px);
  z-index: 13;
}
#t-1:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(900px) translateZ(-270px) translateY(-45px);
  z-index: 12;
}
#t-1:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(1200px) translateZ(-360px) translateY(-60px);
  z-index: 11;
}
#t-1:checked ~ .testimonials label[for="t-6"] {
  transform: translateX(1200px) translateZ(-360px) translateY(-75px);
  z-index: 10;
}
#t-1:checked ~ .testimonials label[for="t-7"] {
  transform: translateX(1200px) translateZ(-360px) translateY(-90px);
  z-index: 9;
}
#t-1:checked ~ .testimonials label[for="t-8"] {
  transform: translateX(1200px) translateZ(-360px) translateY(-105px);
  z-index: 8;
}
#t-1:checked ~ .testimonials label[for="t-9"] {
  transform: translateX(1200px) translateZ(-360px) translateY(-120px);
  z-index: 7;
}
#t-1:checked ~ .testimonials label[for="t-10"] {
  transform: translateX(1200px) translateZ(-360px) translateY(-135px);
  z-index: 6;
}
#t-1:checked ~ .testimonials label[for="t-11"] {
  transform: translateX(1200px) translateZ(-360px) translateY(-150px);
  z-index: 5;
}
#t-1:checked ~ .testimonials label[for="t-12"] {
  transform: translateX(1200px) translateZ(-360px) translateY(-165px);
  z-index: 4;
}
#t-1:checked ~ .testimonials label[for="t-13"] {
  transform: translateX(1200px) translateZ(-360px) translateY(-60px);
  z-index: 3;
}
#t-1:checked ~ .testimonials label[for="t-14"] {
  transform: translateX(1200px) translateZ(-360px) translateY(-180px);
  z-index: 2;
}
#t-1:checked ~ .testimonials label[for="t-15"] {
  transform: translateX(1200px) translateZ(-360px) translateY(-195px);
  z-index: 1;
}

/* Second */
#t-2:checked ~ .dots label[for="t-1"] {
  transform: scale(1.5);
}
#t-2:checked ~ .dots label[for="t-2"] {
  transform: scale(2);
  background-color: #fff;
}
#t-2:checked ~ .dots label[for="t-3"] {
  transform: scale(1.5);
}
#t-2:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-300px) translateZ(-90px) translateY(-15px);
}
#t-2:checked ~ .testimonials label[for="t-2"] {
  z-index: 3;
}
#t-2:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(300px) translateZ(-90px) translateY(-15px);
  z-index: 2;
}
#t-2:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(600px) translateZ(-180px) translateY(-30px);
  z-index: 1;
}
#t-2:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(900px) translateZ(-270px) translateY(-45px);
}

/* Third */
#t-3:checked ~ .dots label[for="t-2"] {
  transform: scale(1.5);
}
#t-3:checked ~ .dots label[for="t-3"] {
  transform: scale(2);
  background-color: #fff;
}
#t-3:checked ~ .dots label[for="t-4"] {
  transform: scale(1.5);
}
#t-3:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-600px) translateZ(-180px) translateY(-30px);
}
#t-3:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-300px) translateZ(-90px) translateY(-15px);
}
#t-3:checked ~ .testimonials label[for="t-3"] {
  z-index: 3;
}
#t-3:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(300px) translateZ(-90px) translateY(-15px);
  z-index: 2;
}
#t-3:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(600px) translateZ(-180px) translateY(-30px);
}

/* Fourth */
#t-4:checked ~ .dots label[for="t-3"] {
  transform: scale(1.5);
}
#t-4:checked ~ .dots label[for="t-4"] {
  transform: scale(2);
  background-color: #fff;
}
#t-4:checked ~ .dots label[for="t-5"] {
  transform: scale(1.5);
}
#t-4:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-900px) translateZ(-270px) translateY(-45px);
}
#t-4:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-600px) translateZ(-180px) translateY(-30px);
}
#t-4:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(-300px) translateZ(-90px) translateY(-15px);
  z-index: 2;
}
#t-4:checked ~ .testimonials label[for="t-4"] {
  z-index: 3;
}
#t-4:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(300px) translateZ(-90px) translateY(-15px);
}

/* Fifth */
#t-5:checked ~ .dots label[for="t-4"] {
  transform: scale(1.5);
}
#t-5:checked ~ .dots label[for="t-5"] {
  transform: scale(2);
  background-color: #fff;
}
#t-5:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-1200px) translateZ(-360px) translateY(-60px);
}
#t-5:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-900px) translateZ(-270px) translateY(-45px);
  z-index: 1;
}
#t-5:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(-600px) translateZ(-180px) translateY(-30px);
  z-index: 2;
}
#t-5:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(-300px) translateZ(-90px) translateY(-15px);
  z-index: 3;
}
#t-5:checked ~ .testimonials label[for="t-5"] {
  z-index: 4;
}
</style>
