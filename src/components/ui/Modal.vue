<template>
  <transition name="fade">
    <div class="overlay">
      <section class="section-container" :class="isVisible? 'show': 'hide'">
          <div class="modal-toggle">
              <cancelIcon class="close-icon" @click="closeModal"/>
          </div>
       <div class=modal>
           <div class="modal-body">
               <div class="modal-image">
                   <img :src="props?.item?.urls?.raw" alt="">
               </div>
               <div class="modal-info">
                   <h3>{{ props?.item?.user?.name }}</h3>
                   <p>{{ props?.item?.user?.location }}</p>
               </div>
           </div>
       </div>
      </section>
    </div>
  </transition>
</template>

<script setup>
import cancelIcon from '@/components/icons/cancelIcon.vue';
import { ref } from 'vue';

const emit = defineEmits(['close'])
const props = defineProps(['item'])
const isVisible = ref(false)

const closeModal = ()=>{
    emit('close')
}

</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(72, 68, 68, 0.5);
  backdrop-filter: blur(10px);
}

.section-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .modal-toggle {
      display: flex;
      justify-content: flex-end;
      width: 90%;
      max-width: 1400px;

      .close-icon {
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
          transition: all 0.3s linear;
        }
      }
    }

  .modal {
    height: 90vh;
    width: 80%;
    max-width: 1200px; 
    background: white;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    @media (max-width: $mobile2){
      height: 50vh;
    }

    .modal-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      .modal-image {
        flex: 1;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ensure image covers the area */
        }
      }

      .modal-info {
        padding: 1.5rem;
        background: white;
        border-top: 1px solid #e0e0e0; /* Optional: Add a border */

        h3 {
          font-family: $font-stack;
          color: $primary-text;
          font-weight: 700;
          margin: 0;
        }

        p {
          font-family: $font-stack;
          color: $secondary-text;
          margin: 0;
        }
      }
    }
  }
}
</style>