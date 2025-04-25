<template>
  <div id="app">
  <div class="wrapper">
    <div class="searchMenu">
      <center>
      <p class="TitleText">Dreamland</p>
      <form @submit.prevent="handleClick">
        <input type="text" class="SearchBar" v-model="inputValue" />
        <br>
        <button type="submit">Click Me</button>
      </form>
    </center>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const inputValue = ref('');

const handleClick = () => {
  var searchTerm = inputValue.value;
  console.log(searchTerm);
  goToSecondPage();
};

// Method to navigate to the second page
const goToSecondPage = () => {
  // Make sure searchTerm is being correctly set from inputValue
  console.log('Navigating with searchTerm:', inputValue.value);

  // Correctly passing the searchTerm in the query
  router.push({
    path: '/Search',
    query: { searchTerm: inputValue.value }, // Pass the searchTerm as a query
  });
};

</script>

<style>
body {
  margin: 0;
  background-color: #242424;
  display: grid;
  place-items: center; /* This centers everything vertically and horizontally */
  min-height: 100vh;
  --maincolor: hotpink;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.searchMenu {
  width: 75vw;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
  border: 3px solid var(--maincolor);
  border-radius: 10px;
  background-color: #1a1a1a;
}

.SearchBar {
  border: 2px solid var(--maincolor);
  border-radius: 2px;
  aspect-ratio: 10 / 1;
  width: 40vw;
}

.SearchBar:focus {
  border: 2px solid var(--maincolor);
  border-radius: 2px;
  aspect-ratio: 10 / 1;
  width: 40vw;
  outline: none;
  box-shadow: 0 0 10px var(--maincolor);
}

.TitleText {
  color: var(--maincolor);
  font-size: 8vw;
  font-family: system-ui;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
}

button {
  margin-top: 1em;
  padding: 0.6em 1.2em;
  border-radius: 8px;
  font-size: 1em;
  background-color: #0c0b0b;
  color: white;
  transition: color 0.3s ease;
  border: 1px solid var(--maincolor);
  aspect-ratio: 10 / 1;
  font-size: 2vw;
  width: 25vw;
  cursor: pointer;
}

button:hover {
  color: var(--maincolor);
  box-shadow: 0 0 20px var(--maincolor);
}
</style>
