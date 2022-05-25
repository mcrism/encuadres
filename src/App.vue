<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Comic from '@/components/Comic.vue'

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
  <div class="columnas">
    <img alt="Introduccion" class="portada" src="@/assets/PortadaConTexto.png"/>
    <Comic />
  </div>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  width: 1366px;
  height: 1024px;
  margin: 0px;
  padding: 0rem;

  font-weight: normal;
}

  #app {
    display: block;
    padding: 0 0rem;
  }

  .portada {
    width: 100%;
    margin-top: 0px;
    display: flex;
    flex-direction: row;
    text-align: center;
  }

  .title {
    text-align: center;
    font-weight: bold;
    font-size: 50px;
  }
.columnas {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.comic {
  margin-top: 0px;

}
</style>
