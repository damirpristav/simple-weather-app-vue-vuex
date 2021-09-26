<template>
  <div class="modal is-active has-text-centered">
    <div class="modal-background" @click="handleClose"></div>
    <div class="modal-card">
      <header class="modal-card-head has-background-danger">
        <p class="modal-card-title has-text-white">{{ message }}</p>
      </header>
      <footer class="modal-card-foot">
        <button class="button" @click="handleClose">Close</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message'],
  setup({ message }, context) {
    
    // On close
    const handleClose = () => {
      context.emit('close')
    }

    return { message, handleClose }
  }
}
</script>

<style scoped>
  .modal-card-foot {
    justify-content: center;
  }
</style>