<script lang="ts">
import { defineComponent } from "vue";
import Camera from "@/components/Camera.vue";
import Polaroids from "@/components/Polaroids.vue";

export default defineComponent({
  name: "Comic",
  components: {
    Camera,
    Polaroids,
  },
  data() {
    return {
      control_vineta5: true,
      control_vineta15: true,
    };
  },
  methods: {
    restartGIF(id: string, url: string) {
      const divImg = document.getElementById(id);
      if (divImg) {
        divImg.setAttribute("src", "");
        divImg.setAttribute("src", url);
      }
    },

    mostrarVineta5(): void {
      this.control_vineta5 = !this.control_vineta5;
      this.restartGIF("vineta_5_2", "../assets/Vinetas/5_2.gif");
    },
     mostrarVineta15(): void {
      this.control_vineta15 = !this.control_vineta15;
      this.restartGIF("vineta_15_3", "../assets/Vinetas/15_3.gif");
    },
  },
  computed: {

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
        class="vineta-estandar"
        src="../assets/Vinetas/5_1.gif"
      />
    </div>
    <div v-else class="vineta-vacia" @click="mostrarVineta5()">
      <img
        loading="lazy"
        id="vineta_5_2"
        alt="5_2"
        class="vineta-estandar"
        src="../assets/Vinetas/5_2.gif"
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
    <div class="horizontales">
      <img
      loading="lazy"
      alt="15_1"
      class="vineta-mitad-horizontal"
      src="../assets/Vinetas/15_Vineta15_1.png"
    />
    <div v-if="control_vineta15"
      @click="control_vineta15 = !control_vineta15">
    <img
        loading="lazy"
        alt="15_2"
        class="vineta-mitad-horizontal-interactiva"
        src="../assets/Vinetas/15_Vineta15_2.png"
      />
      </div>
      <div v-else  @click="mostrarVineta15()">
      <img
        loading="lazy"
        alt="15_3"
        id="vineta_15_3"
        class="vineta-mitad-horizontal-interactiva"
        src="../assets/Vinetas/15_Vineta15_3.gif"
      />
    </div>
    </div>
    <div><Camera></Camera></div>
    <div><Polaroids class="polaroids"></Polaroids></div>
    <img
      loading="lazy"
      alt="17"
      class="vineta-prueba"
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
  </div>
</template>

<style scoped>
.polaroids {
  position: absolute;
}
.polaroids:after {
  top: 1024px;
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
  z-index: -1;
}

.vineta-prueba {
  width: 100%;
  margin-top: 834px;
}
.vineta-estandar {
  max-width: 1194px;
  width: 100%;
}


.vineta-solape-superior {
  width: 100%;
  margin-top: -50px;
}

.vineta-vacia {
  height: 1024px;
  min-height: 1024px;
  width: 100%;
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

.vineta-mitad-horizontal {
  width: 50%;
  height: 100%;
}
.vineta-mitad-horizontal-interactiva {
  width: 100%;
  height: 100%;
}
</style>
