<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Comic",
  components: {},
  data() {
    return {
      control_vineta5: true,
      controlPrimeraCamara: true,
    };
  },
  methods: {
    vineta5() {
      return "../assets/Vinetas/5_2.gif?a=${Math.random()}";
    },

    restartGIF(id: string, url: string) {
      console.log("El id que obtengo es ", id);
      const divImg = document.getElementById("vineta1");
      console.log("El elemento que obtengo del documento es ", divImg);
      const prueba = !this.control_vineta5;
      if (divImg) {
        //  img.src = "";
        //  img.src = url;
        divImg.setAttribute("src", "");
        divImg.setAttribute("src", url);
      }
    },

    mostrarVineta5(): void {
      this.control_vineta5 = !this.control_vineta5;
      this.restartGIF("gif52", "../assets/Vinetas/5_2.gif");
    },
  },
  computed: {
    random5(): string {
      return "../assets/Vinetas/5_2.gif";
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
        class="vineta-estandar"
        src="../assets/Vinetas/5_1.gif"
      />
    </div>
    <div v-else class="vineta-vacia" @click="mostrarVineta5()">
      <img
        loading="lazy"
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
  </div>
</template>

<style scoped>
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
</style>
