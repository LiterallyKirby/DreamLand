<template>
  <div>
    <div v-if="errorMessage" class="error">
      {{ errorMessage }}
    </div>

    <div v-else class="results-grid">
      <PackageCard
        v-for="pkg in packages"
        :key="pkg.Name"
        :name="pkg.Name"
        :description="pkg.Description"
        @install=installPackage(pkg)
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PackageCard from '../components/PackageCard.vue'

const route = useRoute()
const router = useRouter()
const searchTerm = route.query.searchTerm || ''
const errorMessage = ref('')
const packages = ref([])


const installPackage = async (pkg) => {
  console.log("Installing Package:", pkg.Name)
  console.log(pkg)
  router.push({
    path: '/Install', 
    query: { 
      pkgName: pkg.Name,
      pkgDesc: pkg.Description,
      pkgPop: pkg.Popularity,
      pkgAuth: pkg.Maintainer



    }  // Corrected to pass the correct package name
  })
}


const fetchPackages = async () => {
  if (!searchTerm) {
    errorMessage.value = 'No search term provided'
    router.push({ path: '/' })
    return
  }

  try {
    const res = await fetch(`http://localhost:8080/api/Search?search=${encodeURIComponent(searchTerm)}`)
    if (!res.ok) {
      const text = await res.text()
      errorMessage.value = text || 'Unknown error'
      alert(errorMessage.value)
      return router.push({ path: '/' })
    }
    const data = await res.json()
    packages.value = data.results || []
    console.log(data.results)
    if (!packages.value.length) {
      errorMessage.value = 'No packages found. Try a different search.'
      router.push({ path: '/' })
    }
  } catch (err) {
    errorMessage.value = err.message
    console.error(err)
    window.alert(err.message)
    router.push({ path: '/' })
  }
}

onMounted(fetchPackages)
</script>

<style scoped>
.error {
  color: #f88;
  padding: 1em;
  text-align: center;
}
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
</style>
