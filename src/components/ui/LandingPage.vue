<template>
  <section class="container">
    <header class="header">
        <div class="header-items">
            <div class="search-box" v-if="searchHeader">
              <searchIcon class="icon"/>
              <input type="text" name="" id="" placeholder="Search for photo" v-model="searchInput" @keyup.enter="handleSearch"
              >
              <span v-if="showError">Search field is empty</span>
            </div>
            <div class="result-box" v-else>
              <h1>Search Results for <span>"{{ searchInput }}"</span></h1>
              <cancelIcon class="cancel-icon" @click="closeSearch"/>
            </div>
        </div>
    </header>
    <div class="image-container">
      <div class="no-result" v-if="searchedPhotos?.results?.length < 1">
        <h3>Oops!! Your research returned no items this time</h3>
      </div>
      <div class="grid-container" v-else>
        <ImageCard
        v-if="!isLoading"
          v-for="(photos, index) in searchedPhotos?.results?.slice(0, 7)"
          :key="photos.id"
          :item="photos"
          :class="`item-${index}`"
          class="grid-item"
          @showModal="handleShowModal"
        />
        <LoadingCards v-else
          v-for="item in ['1', '2', '3', '4', '6', '7']"
          class="grid-item"
          :key="item"
        />
      </div>
    </div>
    <Modal 
      @close="closeModal" 
      v-if="showModal && !isLoadingModal"
      :item="photo"
    />
    <LoadingModal v-if="isLoadingModal"/>
  </section>
</template>

<script setup>
import searchIcon from '@/components/icons/searchIcon.vue';
import ImageCard from '@/components/ui/ImageCard.vue';
import LoadingCards from '@/components/ui/LoadingCards.vue';
import { usePhotoStore } from '@/stores/photos';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import Modal from '@/components/ui/Modal.vue';
import LoadingModal from '@/components/ui/LoadingModal.vue';
import cancelIcon from '@/components/icons/cancelIcon.vue';

const photoStore = usePhotoStore()
const { searchedPhotos, photo } = storeToRefs(photoStore)
const isLoading = ref(false)
const searchInput = ref('')
const showError = ref(false)
const searchHeader = ref(true)
const showModal = ref(false)
const isLoadingModal = ref(false)

const getPhotos = async ()=>{
  isLoading.value = true
  try {
    await photoStore.getSearchedPhotos('african')
    isLoading.value = false
  } catch (error) {
    console.log(error)
    isLoading.value = false
  }
}

const handleSearch = async () => {
  isLoading.value = true
  if (searchInput.value?.length > 0) {
    await photoStore.getSearchedPhotos(searchInput.value);
    isLoading.value = false
    searchHeader.value = false
  } else {
    showError.value = true;
    setTimeout(() => {
      showError.value = false; 
    }, 2000);
    isLoading.value = false
  }
}

const closeSearch = async ()=>{
  await getPhotos()
  searchInput.value = ''
  searchHeader.value = true
}

const closeModal = ()=>{
  showModal.value = false
}

const handleShowModal = async (id)=>{
  isLoadingModal.value = true
  try {
    await photoStore.getPhoto(id)
    console.log(photo.value)
    isLoadingModal.value = false
    showModal.value = true
  } catch (error) {
    console.log(error)
    isLoadingModal.value = false
  }
}

onMounted(()=>{
  getPhotos()
})

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding: 6rem 0;
    background: $bgColor;
    display: flex;
    justify-content: center;
    font-family: $font-stack;

    .header-items {
        display: flex;
        flex-direction: column; /* Adjust direction if needed */
        // align-items: center;
        width: 70%;

        .search-box {
            display: flex;
            align-self: center;
            align-items: center;
            background: white;
            padding: 1rem;
            width: 100%;
            border-radius: 10px;

            .icon {
                display: flex;
                align-items: center;

                &svg {
                    width: 24px; /* Adjust width as needed */
                    height: auto; /* Maintain aspect ratio */
                }
            }

            span {
              color: red;
              font-size: 0.7rem;
              margin-top: 0.7rem;
            }

            input {
                margin-left: 8px; 
                font-family: $font-stack;
                color: $primary-text;
                background: inherit;
                border: none;
                flex: 1;

                &::placeholder {
                    color: $primary-text;
                }

                &:focus {
                    outline: none;
                }
            }
        }

        .result-box {
            font-family: $font-stack;
            color: $primary-text;
            font-size: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media (max-width: $mobile){
              font-size: 0.8rem;
            }

            span {
                color: $secondary-text;
            }

            .cancel-icon {
              width: 2.5rem;
              height: 2.5rem;
              color: $primary-text !important;
              cursor: pointer;
            }
        }

        @media (max-width: $tablet){
          width: 90%;
        }
    }
}

.image-container {
    width: 100%;
    position: relative;

    .no-result {
      display: grid;
      place-items: center;
      width: 60%;
      height: 100%;
    }

    .grid-container {
        padding-bottom: 4rem;
        width: 60%;
        margin: 0 auto;
        height: auto;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -3rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        // grid-template-rows: 1fr 0.5fr 1fr;
        grid-auto-rows: 10px;
        gap: 0.5rem;
        

         .grid-item:nth-child(odd) {
            grid-row-end: span 20; /* Spans more rows for odd items */
        }
        .grid-item:nth-child(even) {
            grid-row-end: span 30; /* Spans more rows for even items */
        }

        @media (max-width: $tablet){
          width: 85%;
        }

        @media (max-width: $mobile){
          grid-template-columns: 1fr;
        }
    }
}

.modal {
  opacity: 0;
  z-index: -1;
}

.showModal {
  opacity: 1;
  z-index: 1;
}

</style>