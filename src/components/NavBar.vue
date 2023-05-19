<template>
  <div class="nav">
    <ul class="nav__btns">
      <li class="nav__btns-btn">
        <q-btn class="btn" label="Create" to="/create" />
      </li>
      <li class="nav__btns-btn">
        <q-btn class="btn" label="List" to="/list" />
      </li>
      <li class="nav__btns-btn">
        <q-btn class="btn" label="Update" to="/update" />
      </li>
      <li class="nav__btns-btn">
        <q-btn class="btn" label="Delete" to="/delete" />
      </li>
      <li class="nav__btns-btn">
        <q-btn class="btn back" label="Back" to="/" />
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBarComponent",
});
</script>

<style scoped lang="scss">
.nav {
  padding: 20px;
  &__btns {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    &-btn {
      width: 100%;
      .q-btn {
        width: 100%;
        color: white;
      }
      .back {
        margin-top: 40px;
      }
    }
  }
}
</style>
