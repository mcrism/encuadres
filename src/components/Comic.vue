<script lang="ts">

import Vue from 'vue'

// @ts-ignore
//import VueVirtualScroller from 'vue-virtual-scroller'

export default {
  data () {
    return {
      control_vineta5: true,
      controlPrimeraCamara: true,
    };
  },
  components: {
    //VueVirtualScroller,
  },
  methods: {
    // vineta5: function() {
    //   return '../assets/Vinetas/5_2.gif?a=${Math.random()}';
    // }
  },
  computed: {
    // random5(): string {
    //   return "../assets/Vinetas/5_2.gif";
    // }
  }
};
</script>

<template>
  <div class="vertical">
    
    <img alt="1" class="vineta-estandar" src="../assets/Vinetas/1_Vineta1.png" />
    <img alt="2" class="vineta-solape-superior" src="../assets/Vinetas/2_Vineta2.png" />
    <img alt="3" class="vineta-media" src="../assets/Vinetas/3_Vineta3.gif" />
    <img alt="4" class="vineta-media" src="../assets/Vinetas/4_Vineta4.png" />
    <div class="vineta-vacia" v-if="control_vineta5" @click="control_vineta5=!control_vineta5">
      <img alt="5_1" class="vineta-estandar" src="../assets/Vinetas/5_1.gif" />
    </div>
    <div v-else class="vineta-vacia" @click="control_vineta5=!control_vineta5">
      <img id="gif-5-2" alt="5_2" class="vineta-estandar" src="../assets/Vinetas/5_2.gif">
    </div>
    <img alt="6" class="vineta-estandar" src="../assets/Vinetas/6_Vineta6.png" />
    <img alt="7" class="vineta-estandar" src="../assets/Vinetas/7_Vineta7.png" />
    <img alt="8" class="vineta-estandar" src="../assets/Vinetas/8_Vineta8.png" />
    <img alt="9" class="vineta-estandar" src="../assets/Vinetas/9_Vineta9.gif" />
    <img alt="10" class="vineta-estandar" src="../assets/Vinetas/10_Vineta10.gif" />
    <img alt="11" class="vineta-estandar" src="../assets/Vinetas/11_Vineta11.gif" />
    <img alt="12" class="vineta-estandar" src="../assets/Vinetas/12.png" />
    <img alt="6" class="vineta-estandar" src="../assets/Vinetas/15.gif" />
    <div class="horizontales">
      <img alt="16" class="vineta-media" src="../assets/Vinetas/16_2.png" />
      <div v-if="controlPrimeraCamara" @click="cambioControlPrimeraCamara">
        <img
          alt="16"
          class="vineta-media-vacia"
          src="../assets/Vinetas/16_1.png"
        />
      </div>
      <div v-else @click="cambioControlPrimeraCamara">
        <img
          alt="16"
          class="vineta-media-vacia"
          src="../assets/Vinetas/16.gif"
        />
      </div>
    </div>
    <img alt="13" class="vineta" src="../assets/Vinetas/13.png" />
    <!-- <img alt="6" class="vineta" src="../assets/Vinetas/.png" />
    <img alt="6" class="vineta" src="../assets/Vinetas/.png" /> -->
    <img alt="14" class="vineta" src="../assets/Vinetas/14.png" />
    <img alt="21" class="vineta-estandar" src="../assets/Vinetas/21_Vineta21.gif" />
  </div>
</template>

<style scoped>


.vertical {
  display: flex;
  flex-direction: column;
  background-color: var(--color-yellow);
  background-image: radial-gradient(var(--color-dark-yellow) 20%, transparent 0), radial-gradient(var(--color-dark-yellow) 20%, transparent 0);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  background-color: white;
  background-image: none;
}

.vineta-estandar {
  max-width: 1366px;
  width: 100%;
}

.vineta-solape-superior {
  width: 100%;
  margin-top: -50px;
}

.vineta-vacia {
  height: 1024px;
  min-height: 1024px;
  width: 100%;;
}

.vineta-media {
  height: 50%;
  width: 100%;
}

.horizontales {
  display: flex;
  flex-direction: row;
}

.vineta-media-vacia {
  max-height: 1024px;
}
</style>
