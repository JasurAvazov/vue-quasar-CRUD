<template>
  <q-page>
    <div class="side-bar">
      <NavBar />
    </div>
    <div class="main">
      <q-img
        src="../../public/icons/favicon-128x128.png"
        :spinner-color="spinnerColor"
        :spinner-size="spinnerSize"
        alt="Image"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
// import List from "../components/List.vue";
import NavBar from "../components/NavBar.vue";

export default defineComponent({
  name: "MainPage",
  components: {
    // List,
    NavBar,
  },
});
</script>

<style scoped lang="scss">
.q-page {
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
}
.side-bar {
  width: 300px;
  background: #89bf04;
}
.main {
  width: calc(100% - 300px);
  padding-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.q-img {
  width: 128px;
  filter: grayscale(50%);
}
</style>
