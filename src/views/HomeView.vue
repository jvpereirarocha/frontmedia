<script setup>
import { onMounted, reactive, ref } from 'vue'
import { fetchAllVideos, deleteVideo } from '@/services/api'
import DeleteModal from '@/components/DeleteModal.vue'
import { useRouter, useRoute } from 'vue-router'
const baseUrl = import.meta.env.VITE_BASE_API_URL
const videosResource = import.meta.env.VITE_VIDEOS_RESOURCE
const url = `${baseUrl}/${videosResource}`

const itemsData = reactive([])
const isModalVisible = ref(false)
const itemToDelete = ref(null)

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  try {
    const response = await fetchAllVideos(url)
    const allVideos = response.success.items
    for (const current of allVideos) {
      itemsData.push({ id: current.id, title: current.title, url: current.url })
    }
    return itemsData
  } catch (error) {
    alert(`Erro ao recuperar infos => ${error}`)
  }
})

function showDeleteModal(id) {
  isModalVisible.value = true
  itemToDelete.value = id
}
function hideModal() {
  isModalVisible.value = false
  itemToDelete.value = null
}

async function deleteItem() {
  try {
    const response = await deleteVideo(`${url}/${itemToDelete.value}`)
    if (response.success) {
      alert('Deletado com sucesso!')
      router.push({ name: 'New', params: route.params })
      return
    }
  } catch (error) {
    alert('Erro ao deletar o video')
  }
}
</script>

<template>
  <div class="container">
    <h1 class="title">Vídeos Youtube</h1>
    <ul v-if="itemsData.length > 0" class="list-items cards">
      <li v-for="item in itemsData" :key="item.id">
        <div class="card">
          <div class="card-header">
            <h2 class="subtitle">
              <router-link :to="{ name: 'Save', params: { id: item.id } }">
                {{ item.title }}
              </router-link>
            </h2>
          </div>
          <div class="card-body">
            <iframe class="card-img" width="400" height="300" :src="item.url"></iframe>
            <div class="card-footer">
              <button @click="showDeleteModal(item.id)">Remover</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="text-center" v-else>Nenhum registro encontrado</div>
    <DeleteModal :isVisible="isModalVisible" @confirm="deleteItem" @cancel="hideModal" />
  </div>
</template>
