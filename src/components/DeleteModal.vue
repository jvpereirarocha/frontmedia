<script setup>
const props = defineProps({
  isVisible: Boolean
})
const emit = defineEmits(['confirm', 'cancel'])

function cancel() {
  emit('cancel')
}
function confirmDeletion() {
  emit('confirm')
}
</script>

<template>
  <div v-if="props.isVisible">
    <div class="modal-content">
      <h2 class="title">Confirmar exclusão</h2>
      <p>Você tem certeza de que deseja excluir o item?</p>
      <button @click="confirmDeletion">Sim</button>
      <button @click="cancel">Não</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
</style>
