<script lang="ts">
import { defineComponent } from "vue";

import indiaURL from "@/assets/PersonajesCamara/India.png";
import chuckURL from "@/assets/PersonajesCamara/Chuck.png";

export default defineComponent({
  name: "Camera",
  components: {},
  data() {
    return {
      chuckSelected: true,
      indiaSelected: false,
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
    }

  },
  computed: {
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
		<div id="slider">

			<div class="slider-inner">
				<div id="slider-content">				
				</div>
			</div>

			<img class="vineta-estandar" :src="personajeSeleccionado" />
      <div class="texto-explicativo"> Cada botón es un filtro de Click. ¿Qué pasará si los pulsas? También puedes cambiar de personaje en el selector de la derecha</div>

			<div id="pagination">
				<!-- <button class="active" data-slide="0"></button> -->
        <div class="horizontal" @click="seleccionarChuck()"><div :class="chuckTexto">Chuck</div> <button :class="chuckClass" data-slide="0"></button></div>
				<div class="horizontal" @click="seleccionarIndia()"><div :class="indiaTexto">India</div> <button :class="indiaClass" data-slide="1"></button></div>
			</div>

		</div>
</template>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: right;
}
.vineta-estandar {
  max-width: 1366px;
  widows: 100%;
}
.texto-seleccionado {
  margin-right: 30px;
  color: blue;
  font-size: 20px;
}

.texto-explicativo {
  font-size: 20px;
}
.texto-sin-seleccionar {
  margin-right: 30px;
  color: blue;
  opacity: 0.4;
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
  position: absolute;
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
  color: blue;
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
  color: blue;
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
  color: blue;
}
@media screen and (min-width: 800px) {
  #slider-content #slide-status {
    font-size: 34px;
  }
}

#pagination {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 30px;
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
  background-color: blue;
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
  border: 1px solid blue;
  opacity: 0;
  transition: opacity 0.4s ease-in-out, width 0.4s ease-in-out, height 0.4s ease-in-out;
}


</style>
