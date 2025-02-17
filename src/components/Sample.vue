<template>
   <article 
    v-for="photo in kogiMedia" 
    :key="photo.id" 
    class="mb-[0.5rem] shadow-md cursor-pointer overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl w-full h-full container">
    <div class="absolute top-0 left-0 w-full h-full transition-opacity duration-300 hover:opacity-90 card">

    </div>
</article>
</template>

<script setup>

</script>

<style scoped>
    .shine {
    animation: 1.5s shine linear infinite;
  }
  
  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }

  .container {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .card {
    z-index: 1;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    animation: 1.5s shine linear infinite;
  }
</style>