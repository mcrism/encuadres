<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
  <div class="body">
  <div class="columnas">
    <img alt="Introduccion" class="portada" src="@/assets/Vinetas/0_Portada.png"/>
    <!--<Comic2 />-->
    <Comic />
     <!-- <img
      loading="lazy"
      alt="Formulario"
      class="portada"
      src="@/assets/Formulario.png"
    />
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSekWuCOnl1l7aJUgAOdjbMkjNFq72sHHo2j5arIlELP9uj6HQ/viewform?embedded=true" width="1194" height="1930" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>  -->
</div> 
  <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';

@font-face {
  font-family: "CCMonsterMashMedium";
  src: local("CCMonsterMashMedium"),
   url(./assets/fonts/CCMonsterMashMedium.ttf) format("truetype");
}

@font-face {
  font-family: "ComicBook";
  src: local("ComicBook"),
   url(./assets/fonts/ComicBook.otf) format("truetype");
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
</style>
