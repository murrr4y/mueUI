<template>
  <div :style="{ color: color }">
    <i
      v-if="isPrimeIcon"
      :class="`pi pi-${icon}`"
      style="color: currentColor"
    />
    <component v-else :is="icon" style="color: currentColor" />
  </div>
</template>
<script>
export default {
  name: 'MIcon',
  props: {
    icon: {
      type: [String, Object],
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
  },
  computed: {
    isPrimeIcon() {
      return typeof this.icon !== 'object'
    },
  },
}
</script>
<style scoped lang="scss"></style>
