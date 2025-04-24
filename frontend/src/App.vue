<template>
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
</template>

<script setup>
import {ref} from 'vue'

const searchTerm = ""

const handleClick = () =>{
  searchTerm = inputValue
   console.log(inputValue)
}
</script>


<style>
body {
  margin: 0;
  background-color: #242424;
  display: grid;
  place-items: center;
  min-height: 100vh;

  --maincolor: hotpink;
}

.searchMenu {
  width: 75vw;
  max-width: 1000px;
  aspect-ratio: 16 / 9;
  border: 3px solid var(--maincolor); /* fix */
  border-radius: 10px;
  background-color: #1a1a1a;
}

.SearchBar {
  border: 2px solid var(--maincolor); /* fix */
  border-radius: 2px;
  aspect-ratio: 10 / 1;
  width: 40vw;
}

.SearchBar:focus{
  border: 2px solid var(--maincolor); /* fix */
  border-radius: 2px;
  aspect-ratio: 10 / 1;
  width: 40vw;
  outline: none;
  box-shadow: 0 0 10px var(--maincolor);
}

.TitleText {
  color: var(--maincolor); /* fix */
  position: relative;
  font-size: 5vw;
  font-family: system-ui;
  margin-bottom: 1.5em;
  margin-top: -0em;
}

button {
  margin-top: 1em;
  padding: 0.6em 1.2em;
  border-radius: 8px;
  font-size: 1em;
  background-color: #0c0b0b;
  color: white;
  transition: color 0.3s ease; /* fix: add 's' for seconds */
  border: 1px solid var(--maincolor); /* fix */
  cursor: pointer;
}

button:hover {
  color: var(--maincolor);
  box-shadow: 0 0 20px var(--maincolor);
}
</style>
