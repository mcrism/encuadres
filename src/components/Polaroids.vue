<script lang="ts">
import { defineComponent } from "vue";

// Carga de las imagenes para el carrusel
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

// Este componente construye el carrusel interactivo con las fotos de India, Chuck y Deva
export default defineComponent({
  name: "Polaroids",
  components: {},
  data() {
    return {
    };
  },
  methods: {
    // Metodo para inicializar la posicion del carrusel
    inicializarCarrusel() {
      this.mueveCarrusel(8)
    },
    // Metodo para mover el carrusel al seleccionar una foto
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
    // Variable de almacenamiento de las polaroids
    polaroids(): Array<Record<string, any>> {
      return [ 
        {url: polaroid0, index:"carrusel-1", id: 1}, 
        {url: polaroid6, index:"carrusel-2", id: 2},
        {url: polaroid12, index:"carrusel-3", id: 3},
        {url: polaroid1, index:"carrusel-4", id: 4},
        {url: polaroid7, index:"carrusel-5", id: 5},
        {url: polaroid2, index:"carrusel-6", id: 6},
        {url: polaroid13, index:"carrusel-7", id: 7},
        {url: polaroid10, index:"carrusel-8", id: 8},
        {url: polaroid3, index:"carrusel-9", id: 9},
        {url: polaroid9, index:"carrusel-10", id: 10},
        {url: polaroid14, index:"carrusel-11", id: 11},
        {url: polaroid4, index:"carrusel-12", id: 12},
        {url: polaroid8, index:"carrusel-13", id: 13},
        {url: polaroid5, index:"carrusel-14", id: 14},    
        {url: polaroid11, index:"carrusel-15", id: 15},   
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
    <img src="../assets/Polaroids/fondo.png" class="coleccion-polaroids" />
    <div class="texto-superior">Pulsa las fotos para moverte hacia los lados. <BR/>¡Podrás ver todas las polaroids!</div>
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
.texto-superior {
  color: white;
  font-family: "ComicBook";
  font-size: 25px;
  text-shadow: 3px 3px 1px black;
  text-align: center;
  width: 100%;
  top: 50px;
}
.texto {
  font-family: "ComicBook";
  color: white;
  font-size: 30px;
  position: absolute;
  top: 670px;
  text-align: center;
  width: 100%;
  text-shadow: 3px 3px 1px black;
}
.coleccion-polaroids {
  width: 100%;
  max-width: 1024px;
  position: absolute;
  z-index: -1;
}

.canvas {
  width: 100%;
  text-align: start;
  background: #5c82b7;
  position:absolute;
  
}

.canvas::after {
  position: absolute;
  content: "";
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
  margin-top: 10px;
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
</style>
