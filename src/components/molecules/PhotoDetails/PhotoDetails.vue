<template>
  <ContainerLayout has-padding is-narrow>
    <PhotoItem
      :src="photoById.download_url"
      :alt="photoById.author"
      :ratio="{
        width: 3,
        height: 4,
      }"
      :author="photoById.author"
    />
  </ContainerLayout>
</template>

<script setup>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { usePhotosStore } from '../../../stores/photos'

import ContainerLayout from '../../layouts/ContainerLayout/ContainerLayout.vue'
import PhotoItem from '../../atoms/PhotoItem/PhotoItem.vue'

defineComponent({
  ContainerLayout,
  PhotoItem,
})

const route = useRoute()
const photos = usePhotosStore()
const photoById = photos.getPhotoById(route.params.id)
</script>
