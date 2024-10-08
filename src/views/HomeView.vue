<script setup>
const items = [
  { name: 'AWS', url: 'https://www.youtube.com/embed/mkHMYCnHl0U?si=ALDGxQ15X2KiztN7' },
  { name: 'Expresso VDG', url: 'https://www.youtube.com/embed/qh51mcuH7Fg' },
  { name: 'AWS', url: 'https://www.youtube.com/embed/mkHMYCnHl0U?si=ALDGxQ15X2KiztN7' },
  { name: 'Expresso VDG', url: 'https://www.youtube.com/embed/qh51mcuH7Fg' }
]
</script>

<template>
  <div class="container">
    <h1 class="title">Media list</h1>
    <ul class="list-items cards">
      <li v-for="(item, index) in items" :key="index">
        <div class="card">
          <div class="card-header">
            <h2 class="subtitle">{{ item.name }}</h2>
          </div>
          <div class="card-body">
            <iframe class="card-img" width="400" height="300" :src="item.url"></iframe>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
