<template>
  <div class="screen">
    <div class="info">
    <h2 class="title">{{ pkgName }}</h2>
    <p class="description">Description: {{ pkgDesc }}</p>
    <p>Maintainer: {{pkgAuth}}</p>
    <p>Popularity: {{pkgPop}}</p>
    <!-- Error message -->
    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>
    </div>
    <div class="buttons">
    <button @click="installPackage(pkgName)">Install</button>
    
    <button @click="goBack">Back</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

// Extract all values from route query parameters
const pkgName = route.query.pkgName || "Unknown Package";
const pkgDesc = route.query.pkgDesc || "No description available";
const pkgPop = route.query.pkgPop;
const pkgAuth = route.query.pkgAuth;

const errorMessage = ref('');

async function installPackage(pkgName) {
  try {
    const response = await fetch(`http://localhost:8080/api/Install?pkg=${pkgName}`, {
  method: 'POST',
});
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Install result:", result);
    alert(`Install Done For: ${pkgName}`)
  } catch (err) {
    console.error("Install error:", err);
  }
}


const goBack = () => {
  window.history.back();
};

// Switch to a new screen based on the package name
const navigateToScreen = () => {
  // This was using an undefined 'name' variable, fixing it
  if (pkgName === 'ScreenOne') {
    router.push({ name: 'ScreenOne' });
  } else {
    router.push({ name: 'ScreenTwo' });
  }
};
</script>
<style scoped>
.screen {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--maincolor, hotpink);
  padding: 1em;
  border-radius: 8px;
  background: #1a1a1a;
  width: 90vw;
  height: 90vh;
  color: #fff;
}
.info h2 {
  margin-bottom: 0.2em; /* Less space below title */
}

.info p {
  margin-top: 0; /* No extra gap */
  margin-bottom: 0;
  font-size: 16px;
}

.title{
    margin: 0em;
}
.description{
    margin: 0em;
}
button {
  margin-top: 1em;
  padding: 0.5em;
  margin: 3px;
  background: var(--maincolor, hotpink);
  border: none;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}
.error-message {
  margin-top: 1em;
  padding: 1em;
  background-color: #ff4d4d;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
  border: 1px solid #ff0000;
}
.buttons{
  
}
</style>