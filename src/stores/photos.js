import { ref } from 'vue'
import { defineStore } from 'pinia'

import { 
    searchPhotos,
    getAPhoto
 } from '@/services/Photos'

export const usePhotoStore = defineStore('photos', ()=>{
    const searchedPhotos = ref([])
    const photo = ref({})

    const getSearchedPhotos = async (query)=>{
        try {
            searchedPhotos.value = await searchPhotos(query)
            console.log(searchedPhotos.value)
            return searchPhotos.value
        } catch (error) {
            console.log(error)
        }
    }

    const getPhoto = async (id)=>{
        try {
            photo.value = await getAPhoto(id)
            return photo.value
        } catch (error) {
            console.log(error)
        }
    }


    return {
        searchedPhotos,
        getSearchedPhotos,
        getPhoto,
        photo
    }
})