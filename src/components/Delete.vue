<template>
  <div class="create">
    <q-input v-model.number="product_type_id" label="id" type="number" />
    <q-btn class="submit" label="Удалить" @click="submitForm" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { api } from "boot/axios";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "DeleteComponent",
  setup() {
    const product_type_id = ref(2);
    const router = useRouter();

    const submitForm = () => {
      api
        .delete(`/api/product/${product_type_id.value}`)
        .then((response) => {
          console.log(response.data);
          router.push("/list");
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return {
      product_type_id,
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
