import { defineStore } from 'pinia'
import { GET_RANDOM_PHOTOS } from '../endpoints'
import { processPhotos } from '../utils/process-photos'

export const usePhotosStore = defineStore({
  id: 'photos',
  state: () => ({
    photos: false,
    hasError: false,
  }),
  getters: {
    getAllPhotos: (state) => state.photos,
    getPhotoById: (state) => {
      return (photoId) => state.photos.find((photo) => photo.id === photoId)
    },
  },
  actions: {
    getPhotos() {
      fetch(GET_RANDOM_PHOTOS)
        .then((response) => response.json())
        .then((data) => (this.photos = processPhotos(data)))
        .catch((err) => {
          this.hasError = true
          console.log(err)
        })
    },
  },
  persist: true,
})
