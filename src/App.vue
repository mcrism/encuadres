<script lang="ts">
import { defineComponent } from "vue";

import { RouterLink, RouterView } from "vue-router";
import Comic from "@/components/Comic.vue";

export default defineComponent({
  name: "AppComic",
  components: {
    Comic,
  },
  data() {
    return {
      mostrar_comic: true,
      mostrar_personajes: false,
      mostrar_mundos: false,
    };
  },
  methods: {
    mostrarPersonajes(): void {
      this.mostrar_comic = false;
      this.mostrar_personajes = true;
      this.mostrar_mundos = false;
    },
    mostrarComic(): void {
      this.mostrar_comic = true;
      this.mostrar_personajes = false;
      this.mostrar_mundos = false;
    },
    mostrarMundos(): void {
      this.mostrar_comic = false;
      this.mostrar_personajes = false;
      this.mostrar_mundos = true;
    },
  },
});
</script>

<template>
  <!--   <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <div class="body">
    <div class="columnas">
      <img alt="Header" class="portada" src="@/assets/Header.png" />
      <div class="header">
        <div class="buttons-group">
          <div class="button" @click="mostrarComic()">LEER</div>
          <div class="button" @click="mostrarPersonajes()">PERSONAJES</div>
          <div class="button" @click="mostrarMundos()">MUNDOS</div>
          <div class="button">MEMORIA</div>
          <div class="button">
            <a
              class="link"
              href="https://github.com/mcrism/encuadres"
              target="_blank"
              >GITHUB</a
            >
          </div>
        </div>
      </div>
      <img
        v-if="mostrar_comic"
        alt="Introduccion"
        class="portada"
        src="@/assets/Vinetas/0_Portada.png"
      />
      <Comic v-if="mostrar_comic"></Comic>
      <img
        v-if="mostrar_personajes"
        alt="Personajes"
        class="portada"
        src="@/assets/Personajes.png"
      />
      <img
        v-if="mostrar_mundos"
        alt="Mundos"
        class="portada"
        src="@/assets/Mundos.png"
      />
    </div>
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";

@font-face {
  font-family: "CCMonsterMashMedium";
  src: local("CCMonsterMashMedium"),
    url(./assets/fonts/CCMonsterMashMedium.ttf) format("truetype");
}

@font-face {
  font-family: "ComicBook";
  src: local("ComicBook"), url(./assets/fonts/ComicBook.otf) format("truetype");
}

#app {
  width: 100%;
  max-width: 1024px;
  min-width: 1024px;
  margin: 0px;
  padding: 0rem;
  font-weight: normal;
}

body {
  max-width: max-content;
  margin: auto;
}

:focus {
  outline: 2px dotted;
  outline-offset: 0.125rem;
}

.portada {
  width: 100%;
  max-width: 1024px;
}

.columnas {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.button {
  width: fit-content;
  display: flex;
  overflow: hidden;
  margin: 5px;
  padding: 6px 8px;
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
  font-size: 25px;
  font-family: "CCMonsterMashMedium";
  font-weight: 500;
  line-height: 1.3;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  justify-content: center;
  align-items: center;
  flex: 0 0 175px;
  color: #4483ba;
  background: #fde147;
  margin-left: 20px;
  border: 3px solid #f9ac5f;
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

.buttons-group {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1024px;
  min-width: 1024px;
  margin: 0px;
  margin-bottom: 20px;
}
.header {
  background-color: #5c83b7;
}
.link {
  text-decoration: none;
  color: #4483ba;
}
</style>
