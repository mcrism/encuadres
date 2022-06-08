<script lang="ts">
import { defineComponent } from "vue";

import indiaURL from "@/assets/PersonajesCamara/IndiaPosicionada.png";
import chuckURL from "@/assets/PersonajesCamara/ChuckPosicionado.png";
import chuckPensamientoURL from "@/assets/PersonajesCamara/ChuckPensamiento.gif";
import chuckDeseoURL from "@/assets/PersonajesCamara/ChuckDeseo.gif";
import indiaPensamientoURL from "@/assets/PersonajesCamara/IndiaPensamiento.gif";


export default defineComponent({
  name: "Camera",
  components: {},
  data() {
    return {
      chuckSelected: true,
      indiaSelected: false,
      mostrarPolaroid: false,
      modoPensamientos: false,
      modoDeseos: false,
      modoPesadillas: false,
      polaroid: "",
    };
  },
  methods: {
    seleccionarChuck(): void {
      this.chuckSelected = true;
      this.indiaSelected = false;
    },
    seleccionarIndia(): void {
      this.chuckSelected = false;
      this.indiaSelected = true;
    },
    mostrarPolaroidPensamiento(): void {
      this.mostrarPolaroid = true;
      if (this.chuckSelected) {
        this.polaroid = chuckPensamientoURL;
      } else {
        this.polaroid = indiaPensamientoURL;
      }
    },
    mostrarPolaroidDeseo(): void {
      this.mostrarPolaroid = true;
      if (this.chuckSelected) {
        this.polaroid = chuckDeseoURL;
      }
    },
    cerrarPolaroid(): void {
      this.mostrarPolaroid = false;
    }
  },
  computed: {
    // polaroid(): string {
    //   if (this.modoPensamientos) {
    //     if (this.chuckSelected) {
    //       return chuckPensamientoURL;
    //     } else {
    //       return chuckPensamientoURL;
    //     }
    //   }
    //   else {
    //     return chuckPensamientoURL;
    //   }
      
    // },
    chuckClass(): string {
      if (this.chuckSelected) {
        return "active";
      } else {
        return "";
      }
    },
    indiaClass(): string {
      if (this.indiaSelected) {
        return "active";
      } else {
        return "";
      }
    },
    chuckTexto(): string {
      if (this.chuckSelected) {
        return "texto-seleccionado";
      } else {
        return "texto-sin-seleccionar";
      }
    },
     indiaTexto(): string {
      if (this.indiaSelected) {
        return "texto-seleccionado";
      } else {
        return "texto-sin-seleccionar";
      }
    },
    personajeSeleccionado(): string {
      if (this.chuckSelected) {
        return chuckURL;
      } else {
        return indiaURL;
      }
    }
  },
});
</script>


<template>
		<div class="camera-canvas">
			<img class="vineta-estandar" :src="personajeSeleccionado" />
      <!-- <div class="texto-explicativo"> Cada botón es un filtro de Click. ¿Qué pasará si los pulsas? También puedes cambiar de personaje en el selector de la derecha</div> -->
      <img src="../assets/PersonajesCamara/FondoCamara.png" class="imagen-fondo" />
			<div id="pagination">
        <div class="horizontal" @click="seleccionarChuck()"><div :class="chuckTexto">Chuck</div> <button :class="chuckClass" data-slide="0"></button></div>
				<div class="horizontal" @click="seleccionarIndia()"><div :class="indiaTexto">India</div> <button :class="indiaClass" data-slide="1"></button></div>
        <div class="button-container">
          <div class='button' @click="mostrarPolaroidPensamiento()">PENSAMIENTOS</div>
          <div class='button' @click="mostrarPolaroidDeseo()">DESEOS</div>
          <div class='button'>PESADILLAS</div>
        </div>
			</div>
      
      <div v-if="mostrarPolaroid">
        <div id="page-mask"></div>
        <img class="icono-cerrar" title="Cerrar la polaroid" @click="cerrarPolaroid()" src="@/assets/icons/Close.svg" />  
        <img class="polaroid" :src="polaroid" />
      </div> 
		</div>
</template>

<style scoped>
#page-mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0,0,0,0.6);
  z-index: 6;
}
.button-container {
  display: flex;
  flex-direction: row;
  margin: 60px auto;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  z-index: 2;
  margin-top: 300px;
  margin-left: 100px;
  width: 100%;
}

.button {
  width: fit-content;
  display: flex;
  overflow: hidden;
  margin: 10px;
  padding: 12px 12px;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  text-transform: none;
  text-transform: capitalize;
  text-shadow: 2px 2px 0px black;
  color: #fff;
  border: 0 none;
  border-radius: 36px;
  font-size: 30px;
  font-family: "CCMonsterMashMedium";
  font-weight: 500;
  line-height: 1.3;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  justify-content: center;
  align-items: center;
  flex: 0 0 250px;
  color:#4483BA;
  background:#FDE147;
  margin-left: 50px;
  border: 3px solid #F9AC5F;
  box-shadow: 2px 5px 0px black;
}
.button:hover {
  transition: all 150ms linear;
  opacity: 0.55;
}
.button:active {
  transition: all 150ms linear;
  opacity: 0.75;
}
.button:focus {
  outline: 1px dotted #959595;
  outline-offset: -4px;
}
.camera-canvas {
  width: 100%;
  text-align: start;
}
.imagen-fondo {
  position:absolute;
  width: 100%;
  z-index: -1;
  max-width: 1366px;
}

.horizontal {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: right;
}
.vineta-estandar {
  max-width: 1366px;
  width: 100%;
  position: absolute;
  z-index: 1;
}
.texto-seleccionado {
  margin-right: 30px;
  color: white;
  font-size: 20px;
  font-family: "ComicBook";
}

.texto-explicativo {
  font-size: 20px;
  
}
.texto-sin-seleccionar {
  margin-right: 30px;
  color: white;
  opacity: 0.4;
  font-family: "ComicBook";
}
.vineta-estandar {
  max-width: 1366px;
  width: 100%;
}

#slider {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
#slider canvas {
  width: 150%;
  height: 150%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
#slider img {
  width: 100%;
  max-width: 100%;
  position: relative;
  z-index: 0;
}

.slider-inner {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1060px;
  height: 100%;
  margin: 0 auto;
  z-index: 5;
}

#slider-content {
  padding: 0 10px;
}
#slider-content h2 {
  font-family: "acta-display", serif;
  font-weight: 400;
  font-size: 30px;
  letter-spacing: -1px;
  color: white;
  line-height: 30px;
  margin: 20px 0 60px;
}
@media screen and (min-width: 800px) {
  #slider-content h2 {
    font-size: 110px;
    line-height: 100px;
  }
}
#slider-content span {
  display: none;
}
#slider-content .meta {
  display: inline-block;
  font-family: "Arial", sans-serif;
  font-size: 11px;
  letter-spacing: 5px;
  color: white;
  text-transform: uppercase;
  position: relative;
}
@media screen and (min-width: 800px) {
  #slider-content .meta {
    font-size: 13px;
  }
}
#slider-content .meta:after {
  content: "";
  display: block;
  position: absolute;
  top: 5px;
  right: -55px;
  width: 45px;
  height: 2px;
  background-color: blue;
}
#slider-content #slide-status {
  margin-top: 10px;
  font-family: "acta-display", serif;
  font-weight: 400;
  font-size: 18px;
  color: white;
}
@media screen and (min-width: 800px) {
  #slider-content #slide-status {
    font-size: 34px;
  }
}

#pagination {
  position: absolute;
  transform: translateY(250%);
  right: 80px;
  z-index: 6;
  width: 100%

}
#pagination button {
  display: block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 100%;
  padding: 0;
  margin: 30px 0;
  cursor: pointer;
  position: relative;
  opacity: 0.2;
  transition: opacity 0.2s ease-in-out;
  outline: none;
}
#pagination button:hover {
  opacity: 0.5;
}
#pagination button.active {
  opacity: 1;
}
#pagination button.active:before {
  width: 300%;
  height: 300%;
  opacity: 1;
}
#pagination button:before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 1px solid white;
  opacity: 0;
  transition: opacity 0.4s ease-in-out, width 0.4s ease-in-out, height 0.4s ease-in-out;
}

.polaroid {
  width: 50%;
  max-width: 30%;
  position: absolute;
  z-index: 7;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 20%);
}

.icono-cerrar {
  position: absolute;
  z-index: 8;
  height: 50px;
  width: 50px;
  top: 50%;
  left: 50%;
  transform: translate(300%, 200%);
  cursor: pointer;
}


</style>