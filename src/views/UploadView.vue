<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { saveVideo, fetchOneVideo } from '@/services/api'
const baseUrl = import.meta.env.VITE_BASE_API_URL
const videosResource = import.meta.env.VITE_VIDEOS_RESOURCE
let url = `${baseUrl}/${videosResource}`

const route = useRoute()
const router = useRouter()
const title = ref('')
const videoLink = ref('')
const mediaId = route.params.id || null

if (mediaId !== null) {
  url = `${url}/${mediaId}`
}

onMounted(async () => {
  if (mediaId !== null) {
    try {
      const response = await fetchOneVideo(url)
      const video = response.success
      title.value = video.title
      videoLink.value = video.url
      return { title, videoLink }
    } catch (error) {
      router.push({ name: 'NotFound' })
    }
  }
  return {}
})

async function saveUpload() {
  try {
    const data = { title: title.value, videoLink: videoLink.value }
    const isUpdating = mediaId === null ? false : true
    const response = await saveVideo(url, data, isUpdating)
    if (!response.error) {
      alert('Video salvo com sucesso! Você será redirecionado')
      setTimeout(() => {
        router.push({ name: 'Home' })
      }, 2000)
      return
    }
    throw new Error()
  } catch (error) {
    alert('Erro ao salvar!')
  }
}
</script>

<template>
  <div class="container">
    <h1 class="title">Salvar vídeo</h1>
    <form method="POST" @submit.prevent="saveUpload">
      <div class="form-container">
        <div class="form-group">
          <label for="title"> Título do vídeo</label>
          <input
            type="text"
            v-model="title"
            class="form-control"
            placeholder="Insira um título para o vídeo"
          />
        </div>
        <div class="form-group">
          <label for="title">URL do vídeo no Youtube</label>
          <input
            type="text"
            v-model="videoLink"
            class="form-control"
            aria-describedby="videoUrl"
            placeholder="Cole a URL do vídeo copiada do Youtube"
          />
          <small id="videoUrl" class="text-muted">
            Vá até o vídeo desejado no Youtube, clique com o botão direito e selecione "Copiar URL
            do vídeo"</small
          >
        </div>
        <div class="button-container">
          <input type="submit" class="button" value="Salvar" />
        </div>
      </div>
    </form>
  </div>
</template>
