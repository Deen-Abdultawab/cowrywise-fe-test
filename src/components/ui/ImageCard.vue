<template>
    <section class="image-card" @click="showModal(props?.item?.id)">
        <div class="image-card__container">
            <img :src="props?.item?.urls?.raw" alt="">
        </div>
        <div class="image-card__info">
            <h3>{{ props?.item?.user?.name }}</h3>
            <p>{{ props?.item?.user?.location }}</p>
        </div>
    </section>
</template>

<script setup>
const props = defineProps(['item'])
const emit = defineEmits(['showModal'])

const showModal = (id)=>{
    emit('showModal', id)
}

</script>

<style lang="scss" scoped>
.image-card {
    min-height: 20rem;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: end;
    padding: 1rem;
    cursor: pointer;

    &__container {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(18, 17, 17, 0.5));
        z-index: 2;
    }

    &__info {
        z-index: 999;
        position: relative;
        color: whitesmoke;
        font-family: $font-stack;
        width: 100%;
        margin-bottom: 1rem;

        h3 {
            font-family: $font-stack;
            font-size: 1rem;
            text-transform: capitalize;
        }

        p {
            font-weight: 400;
            font-size: 0.7rem;
            text-transform: capitalize;
        }
    }
}

</style>