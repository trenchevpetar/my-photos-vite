<template>
  <div class="a-photo">
    <img
      :src="src"
      :alt="alt"
      :style="`aspect-ratio: ${ratio.width} / ${ratio.height}; object-fit: cover;`"
    />
    <div v-if="author" class="a-photo__details">
      <p class="a-photo__uploaded-by">Uploaded by</p>
      <a class="a-photo__author" href="#" rel="author">
        {{ author }} - <small class="a-photo__date">29th November 2021</small>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ratio: {
      type: Object,
      default: () => ({
        width: 16,
        height: 9,
      }),
    },
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
  },
}
</script>
