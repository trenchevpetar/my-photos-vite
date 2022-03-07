<template>
  <ul class="l-grid" :class="`l-grid--is-${type}`">
    <li v-for="item in items" :key="item.id" class="l-grid__item">
      <router-link :to="`/photo-details/${item.id}`">
        <PhotoItem :src="item.download_url" :alt="item.author" />
      </router-link>
      <slot :item="item" />
    </li>
  </ul>
</template>

<script>
import PhotoItem from '../../atoms/PhotoItem/PhotoItem.vue'
export default {
  components: {
    PhotoItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: 'masonry',
    },
  },
}
</script>

<style lang="scss">
@import './masonry-layout';
</style>
