<template>
<div class="load-wrapp">
  <div class="load">
    <div class="load-text">Imprimiendo</div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cargador",
});
</script>
<style scoped>
.load-wrapp {
  float: left;
  min-width: 150px;
  min-height: 50px;
  margin: 0 0px 0px 0;
  padding: 0px 0px 0px;
  border-radius: 0px;
  text-align: center;
}

.load-wrapp p {
  padding: 0 0 0px;
}
.load-wrapp:last-child {
  margin-right: 0;
}
.line {
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background-color: white;
  margin-bottom: 5px;
}

.load .line:nth-last-child(1) {
  animation: loadingC 0.6s 0.1s linear infinite;
}

.load .line:nth-last-child(2) {
  animation: loadingC 0.6s 0.2s linear infinite;
}
.load .line:nth-last-child(3) {
  animation: loadingC 0.6s 0.3s linear infinite;
}

@keyframes loadingC {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, 0);
  }
}
.load-text {
  color: white;
  font-family: "ComicBook";
  margin-bottom: 5px;
  font-size: 30px;
}

</style>