<template>
  <div
    class="mue-card align-center justify-center flex-column flex-wrap"
    :style="[{ 'border-color': borderColor }, { background: cardBackground }]"
  >
    <div class="mue-card-header">
      <div v-if="title">{{ title }}</div>
      <slot name="header" />
    </div>
    <div class="mue-card-content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'MCard',
  props: {
    title: {
      type: String,
      default: null,
    },
    borderColor: {
      type: String,
      default: 'var(--color-border)',
    },
    background: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: "var(--mue-black-soft)",
    },
    kitty: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cardBackground() {
      if (this.kitty)
        return 'url(src/assets/cattt.svg)'
      if (this.background) {
        return this.backgroundColor
      }
      return 'unset'
    },
  },
}
</script>
<style scoped lang="scss">
.mue-card {
  border: 1px solid currentColor;
  border-radius: 20px;
  padding: 20px;
  background-position: left;

  &-header {
    width: 100%;
    font-size: 20px;
    color: var(--color-text);
  }

  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
}
</style>
