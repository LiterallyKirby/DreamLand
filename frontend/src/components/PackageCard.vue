<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <button @click="$emit('install', name)">Install</button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  name: String,
  description: String
});
</script>

<style scoped>
.card {
  border: 1px solid var(--maincolor, hotpink);
  padding: 1em;
  border-radius: 8px;
  background: #1a1a1a;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
button {
  margin-top: 1em;
  padding: 0.5em;
  background: var(--maincolor, hotpink);
  border: none;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}
</style>
