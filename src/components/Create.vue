<template>
  <div class="create">
    <q-input
      v-model.number="productData.product_type_id"
      label="Product Type ID"
      type="number"
    />
    <q-input v-model="productData.name_uz" label="Name" />
    <q-input v-model.number="productData.cost" label="Cost" type="number" />
    <q-input v-model="productData.address" label="Address" />
    <q-input
      v-model="productData.created_date"
      label="Created Date"
      type="date"
    />
    <q-btn class="submit" label="Создать" @click="submitForm" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { api } from "boot/axios";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "CreateComponent",
  setup() {
    const router = useRouter();
    const productData = ref({
      product_type_id: null,
      name_uz: "",
      cost: null,
      address: "",
      created_date: "",
    });

    const submitForm = () => {
      api
        .post("/api/product", productData.value)
        .then((response) => {
          console.log(response.data);
          router.push("/list");
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return {
      productData,
      submitForm,
    };
  },
});
</script>

<style scoped lang="scss">
.create {
  display: flex;
  align-content: center;
  flex-direction: column;
}
.submit {
  margin-top: 20px;
}
</style>
