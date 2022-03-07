<template>
  <ContainerLayout has-padding>
    <MasonryLayout :items="photos">
      <template v-slot="{ item }">
        <button v-if="item">Add to album</button>
      </template>
    </MasonryLayout>
  </ContainerLayout>
</template>

<script setup>
import { onBeforeMount, computed, defineComponent } from 'vue'
import { usePhotosStore } from '../stores/photos'
import ContainerLayout from '../components/layouts/ContainerLayout/ContainerLayout.vue'
import MasonryLayout from '../components/layouts/MasonryLayout/MasonryLayout.vue'

defineComponent({
  ContainerLayout,
  MasonryLayout,
})

const photosStore = usePhotosStore()
onBeforeMount(() => photosStore.getPhotos())
const photos = computed(() => photosStore.getAllPhotos)
</script>
