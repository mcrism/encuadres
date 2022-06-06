<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Comic from '@/components/Comic.vue'
import Comic2 from '@/components/Comic2.vue'

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
    <img alt="Introduccion" class="portada" src="@/assets/Vinetas/0_Portada.png"/>
    <!--<Comic2 />-->
    <Comic />
  </div>
  <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';

#app {
  width: 100%;
  max-width: 1366px;
  margin: 0px;
  padding: 0rem;
  font-weight: normal;
}

body {
max-width: max-content;
margin: auto;
}


.portada {
    width: 100%;
  }

.columnas {
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
