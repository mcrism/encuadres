<script lang="ts">
import { defineComponent } from "vue";

// Componentes
import Camera from "@/components/Camera.vue";
import Polaroids from "@/components/Polaroids.vue";

// URL del GIF a recargar con un click (Vineta explosion)
import vineta5GIF from "@/assets/Vinetas/5_2.gif";

// Componente para el cuerpo del comic

export default defineComponent({
  name: "Comic",
  components: {
    Camera,
    Polaroids,
  },
  data() {
    return {
      control_vineta5: true, // variable de control para cambiar de animacion en la viñeta 5
    };
  },
  methods: {
    // Metodo que restaura la reproducción de un GIF desde el principio
    restartGIF(id: string, url: string) {
      const divImg = document.getElementById(id);
      if (divImg) {
        divImg.setAttribute("src", "");
        divImg.setAttribute("src", url);
      }
    },

    // Metodo de control para la viñeta 5
    mostrarVineta5(): void {
      this.control_vineta5 = !this.control_vineta5;
      this.restartGIF("vineta_5_2", vineta5GIF);
    },
  },
  computed: {
    // Variable con la url del segundo GIF de la viñeta 5 (explosion)
    vineta5GIFurl(): string {
      return vineta5GIF;
    },
  },
});
</script>


<template>
  <div class="vertical">
    <img
      loading="lazy"
      id="vineta1"
      alt="1"
      class="vineta-estandar"
      src="../assets/Vinetas/1_Vineta1.png"
    />
    <img
      loading="lazy"
      alt="2"
      class="vineta-solape-superior"
      src="../assets/Vinetas/2_Vineta2.png"
    />
    <img
      loading="lazy"
      alt="3"
      class="vineta-media"
      src="../assets/Vinetas/3_Vineta3.gif"
    />
    <img
      loading="lazy"
      alt="4"
      class="vineta-media"
      src="../assets/Vinetas/4_Vineta4.png"
    />
    <div
      class="vineta-vacia"
      v-if="control_vineta5"
      @click="control_vineta5 = !control_vineta5"
    >
      <img
        loading="lazy"
        alt="5_1"
        class="vineta-estandar-interactiva"
        src="../assets/Vinetas/5_1.gif"
      />
    </div>
    <div v-else class="vineta-vacia" @click="mostrarVineta5()">
      <img
        loading="lazy"
        id="vineta_5_2"
        alt="5_2"
        class="vineta-estandar-interactiva"
        :src="vineta5GIFurl"
      />
    </div>
    <img
      loading="lazy"
      alt="6"
      class="vineta-estandar"
      src="../assets/Vinetas/6_Vineta6.png"
    />
    <img
      loading="lazy"
      alt="7"
      class="vineta-estandar"
      src="../assets/Vinetas/7_Vineta7.png"
    />
    <img
      loading="lazy"
      alt="8"
      class="vineta-estandar"
      src="../assets/Vinetas/8_Vineta8.png"
    />
    <img
      loading="lazy"
      alt="9"
      class="vineta-estandar"
      src="../assets/Vinetas/9_Vineta9.gif"
    />
    <img
      loading="lazy"
      alt="10"
      class="vineta-estandar"
      src="../assets/Vinetas/10_Vineta10.gif"
    />
    <img
      loading="lazy"
      alt="11"
      class="vineta-estandar"
      src="../assets/Vinetas/11_Vineta11.gif"
    />
    <img
      loading="lazy"
      alt="12"
      class="vineta-estandar"
      src="../assets/Vinetas/12_Vineta12.png"
    />
    <img
      loading="lazy"
      alt="13"
      class="vineta-estandar"
      src="../assets/Vinetas/13_Vineta13.png"
    />
    <img
      loading="lazy"
      alt="14"
      class="vineta-estandar"
      src="../assets/Vinetas/14_Vineta14.gif"
    />
    <img
      loading="lazy"
      alt="15"
      class="vineta-estandar"
      src="../assets/Vinetas/15_Vineta15.png"
    />
    <div><Camera></Camera></div>
    <div><Polaroids class="polaroids"></Polaroids></div>
    <img
      loading="lazy"
      alt="17"
      class="vineta-cambio-formato"
      src="../assets/Vinetas/17_Vineta17.png"
    />
    <img
      loading="lazy"
      alt="18"
      class="vineta-solape-superior"
      src="../assets/Vinetas/18_Vineta18.png"
    />
    <img
      loading="lazy"
      alt="19"
      class="vineta-estandar"
      src="../assets/Vinetas/19_Vineta19.png"
    />
    <img
      loading="lazy"
      alt="20"
      class="vineta-estandar"
      src="../assets/Vinetas/20_Vineta20.png"
    />
    <img
      loading="lazy"
      alt="21"
      class="vineta-estandar"
      src="../assets/Vinetas/21_Vineta21.gif"
    />
    <img
      loading="lazy"
      alt="22"
      class="vineta-estandar"
      src="../assets/Vinetas/22_Vineta22.gif"
    />
    <img
      loading="lazy"
      alt="23"
      class="vineta-estandar"
      src="../assets/Vinetas/23_Vineta23.png"
    />
    <img
      loading="lazy"
      alt="24"
      class="vineta-estandar"
      src="../assets/Vinetas/24_Vineta24.png"
    />
    <img
      loading="lazy"
      alt="25"
      class="vineta-estandar"
      src="../assets/Vinetas/25_Vineta25.png"
    />
    <img
      loading="lazy"
      alt="26"
      class="vineta-estandar"
      src="../assets/Vinetas/26_Vineta26.png"
    />
    <img
      loading="lazy"
      alt="27"
      class="vineta-estandar"
      src="../assets/Vinetas/27_Vineta27.png"
    />
    <img
      loading="lazy"
      alt="28"
      class="vineta-estandar"
      src="../assets/Vinetas/28_Vineta28.png"
    />
    <img
      loading="lazy"
      alt="29"
      class="vineta-estandar"
      src="../assets/Vinetas/29_Vineta29.png"
    />
    <img
      loading="lazy"
      alt="Formulario"
      class="portada"
      src="../assets/Formulario.png"
    />
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSekWuCOnl1l7aJUgAOdjbMkjNFq72sHHo2j5arIlELP9uj6HQ/viewform?embedded=true"
      width="1024"
      height="1930"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >Loading…</iframe
    >
  </div>
</template>

<style scoped>
.polaroids {
  position: absolute;
  z-index: 2;
  margin-top: 100px;
}
.polaroids:after {
  top: 1094px;
}
.vertical {
  display: flex;
  flex-direction: column;
  background-color: var(--color-yellow);
  background-image: radial-gradient(var(--color-dark-yellow) 20%, transparent 0),
    radial-gradient(var(--color-dark-yellow) 20%, transparent 0);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  background-color: white;
  background-image: none;
}

.vineta-cambio-formato {
  width: 100%;
  margin-top: 834px;
}
.vineta-estandar {
  max-width: 1024px;
  width: 100%;
  border-style: solid;
  border-color: white;
  border-width: 10px;
}

.vineta-estandar-interactiva {
  max-width: 1024px;
  width: 100%;
  cursor: pointer;
  border-style: solid;
  border-color: white;
  border-width: 10px;
}

.vineta-solape-superior {
  width: 100%;
  margin-top: -50px;
}

.vineta-vacia {
  height: 768px;
  min-height: 768px;
  width: 100%;
}

.vineta-media {
  height: 50%;
  width: 100%;
  border-style: solid;
  border-color: white;
  border-width: 10px;
}
</style>
