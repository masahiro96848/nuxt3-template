<template>
  <div>
    <p>テスト</p>
    <p>{{ count }}</p>
    <v-btn @click="increment">add</v-btn>
  </div>
</template>

<script setup lang="ts">
const count = ref(0)

const increment = () => {
  count.value++
}
</script>

<style scoped></style>
