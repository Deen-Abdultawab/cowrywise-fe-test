<template>
    <div class="overlay">
    </div>
   <section class="section-container">
    <div class=modal>
        <div class="modal-toggle">
            <cancelIcon class="close-icon" @click="closeModal"/>
        </div>
        <div class="modal-body">
            <div class="modal-image">
                <!-- <img :src="props?.item?.urls?.full" alt=""> -->
            </div>
            <div class="modal-info">
                <h3></h3>
                <p></p>
            </div>
        </div>
    </div>
   </section>
</template>

<script setup>
import cancelIcon from '@/components/icons/cancelIcon.vue';

const emit = defineEmits(['close'])

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

.modal-image,
h3,
p  {
    background: #bcbcbc;
    background: linear-gradient(110deg, #bcbcbc 8%, #d5d5d5 18%, #bcbcbc 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    @include shine;
}

.section-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;

    .modal {
        margin: 4rem 0;
        height: 80vh;

        .modal-toggle {
            display: flex;
            justify-content: end;
            margin: 0.5rem auto;
            width: 80%;

            .close-icon {
                width: 2.5rem;
                height: 3rem;
                cursor: pointer;

                &:hover {
                    transform: scale(1.1);
                    transition: all 0.3s linear;
                }
            }
        }

        .modal-body {
            width: 70%;
            margin: 0 auto;
            height: 100%;

            .modal-image {
                width: 100%;
                height: 100%;
                border-top-left-radius: 12px;
                border-top-right-radius: 12px;
                overflow: hidden;
            }
    
            .modal-info {
                width: 100%;
                padding: 2rem;
                background: white;
                border-bottom-left-radius: 12px;
                border-bottom-right-radius: 12px;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
    
                h3 {
                    height: 2rem;
                    margin-bottom: 0.5rem;
                }
        
                p {
                    height: 2rem;
                }
            }
        }
    }
}
</style>