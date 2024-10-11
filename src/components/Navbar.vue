<template>
  <nav class="navbar">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    |
    <router-link :to="{ name: 'New' }">Novo vídeo</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.navbar a {
  text-decoration: none;
  font-size: 1.2rem;
  color: black;
  font-weight: bold;
}
</style>
