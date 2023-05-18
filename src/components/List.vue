<template>
  <div class="items">
    <div class="item" v-for="item in $store.state.arr" :key="item">
      <p>id: {{ item.id }}</p>
      <p>product_type_id: {{ item.product_type_id }}</p>
      <p>name_uz: {{ item.name_uz }}</p>
      <p>cost: {{ item.cost }}</p>
      <p>address: {{ item.address }}</p>
      <p>created_date: {{ item.created_date }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListComponent",
});
</script>

<style scoped lang="scss">
.items {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
}
.item {
  padding: 20px;
  width: 100%;
  background-color: #e2e2e2;
}
</style>
