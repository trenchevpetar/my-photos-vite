<template>
  <section
    class="l-container"
    :class="{
      'l-container--has-padding': hasPadding,
      'l-container--is-narrow': isNarrow,
      'l-container--is-full-height': isFullHeight,
    }"
  >
    <div v-if="!!$slots.header" class="l-container__header">
      <slot name="header" />
    </div>
    <slot />

    <div v-if="!!$slots.footer" class="l-container__footer">
      <slot name="footer" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    hasPadding: {
      type: Boolean,
      default: false,
    },
    isNarrow: {
      type: Boolean,
      default: false,
    },
    isFullHeight: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
@import './conatiner-layout';
</style>
