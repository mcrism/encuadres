<script lang="ts">
export default {
  data () {
    return {
      control_vineta5: true,
      controlPrimeraCamara: true,
    };
  },
  methods: {
  },
  computed: {
    random5(): string {
      return "../assets/Vinetas/5_2.gif";
    }
  }
};
</script>

<template>
  <div class="vertical">
    <img alt="1" class="vineta-estandar" src="../assets/Vinetas/1_Vineta1.png" />
    <img alt="2" class="vineta-solape-superior" src="../assets/Vinetas/2_Vineta2.png" />
    <img alt="3" class="vineta-estandar" src="../assets/Vinetas/3_Vineta3.gif" />
    <img alt="4" class="vineta-estandar" src="../assets/Vinetas/4_Vineta4.png" />
    <div class="vineta-vacia" v-if="control_vineta5" @click="control_vineta5=!control_vineta5">
      <img alt="5_1" class="vineta-estandar" src="../assets/Vinetas/5_1.gif" />
    </div>
    <div v-else class="vineta-vacia" @click="control_vineta5=!control_vineta5">
      <img id="gif-5-2" alt="5_2" class="vineta-estandar" src="../assets/Vinetas/5_2.gif" @click="document.getElementById('gif-5-2').src='../assets/Vinetas/5_2.gif' + '?a='+Math.random()"/>
    </div>
    <img alt="6" class="vineta-estandar" src="../assets/Vinetas/6_Vineta6.png" />
    <img alt="7" class="vineta-estandar" src="../assets/Vinetas/7_Vineta7.png" />
    <img alt="8" class="vineta-solape-superior" src="../assets/Vinetas/8_Vineta8.png" />
    <img alt="9" class="vineta-estandar" src="../assets/Vinetas/9_Vineta9.gif" />
    <img alt="10" class="vineta-estandar" src="../assets/Vinetas/10_Vineta10.gif" />
    <img alt="11" class="vineta" src="../assets/Vinetas/11_Vineta11.gif" />
    <img alt="12" class="vineta" src="../assets/Vinetas/12.png" />
    <img alt="6" class="vineta" src="../assets/Vinetas/15.gif" />
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
  </div>
</template>

<style scoped>
.vertical {
  display: flex;
  flex-direction: column;
}

.vineta-estandar {
  width: 100%;
}

.vineta-solape-superior {
  width: 100%;
  margin-top: -50px;
}

.vineta-vacia {
  height: 1024px;
  min-height: 1024px;
}

.vineta-media {
  width: 50%;
}

.horizontales {
  display: flex;
  flex-direction: row;
}

.vineta-media-vacia {
  max-height: 1024px;
}
</style>
