<script lang="ts">
export default {
  data() {
    return {
      control: true,
      controlPrimeraCamara: true,
    };
  },
  methods: {
    // cambioControl(): void {
    //   this.control = !this.control;
    // },
    // cambioControlPrimeraCamara(): void {
    //   this.controlPrimeraCamara = !this.controlPrimeraCamara;
    // },
  },
};
</script>

<template>
  <div class="vertical">
    <img alt="1" class="vineta" src="../assets/Vinetas/1.png" />
    <img alt="3" class="vineta" src="../assets/Vinetas/3.gif" />
    <img alt="4" class="vineta" src="../assets/Vinetas/4.png" />
    <div class="vineta-vacia" v-if="control" @click="cambioControl">
      <img alt="5_1" class="vineta" src="../assets/Vinetas/5_1.gif" />
    </div>
    <div v-else class="vineta-vacia" @click="cambioControl">
      <img alt="5_1" class="vineta" src="../assets/Vinetas/5_2.gif" />
    </div>
    <img alt="6" class="vineta" src="../assets/Vinetas/6.png" />
    <img alt="7" class="vineta" src="../assets/Vinetas/7.png" />
    <img alt="9" class="vineta" src="../assets/Vinetas/9.gif" />
    <img alt="10" class="vineta" src="../assets/Vinetas/10.gif" />
    <img alt="11" class="vineta" src="../assets/Vinetas/11.gif" />
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

.vineta {
  width: 100%;
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
