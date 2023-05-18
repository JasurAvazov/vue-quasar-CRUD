<template>
  <q-page>
    <div class="side-bar">
      <NavBar />
    </div>
    <div class="main">
      <Create />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Create from "../components/Create.vue";
import NavBar from "../components/NavBar.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    Create,
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
}
</style>
