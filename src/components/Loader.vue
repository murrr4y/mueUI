<template>
  <div class="loading">
    <svg width="36px" height="27px" :style="{ scale: scale }">
      <polyline
        points="0.088 13.467, 7.875 13.467, 12.273 27, 24.375 6, 28.125 13.467, 36.000 13.467"
        id="back"
      ></polyline>
      <polyline
        points="0.088 13.467, 7.875 13.467, 12.273 27, 24.375 6, 28.125 13.467, 36.000 13.467"
        id="front"
      ></polyline>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'MLoader',
  props: {
    scale: {
      type: Number,
      default: 1,
    },
  },
}
</script>
<style scoped lang="scss">
/* From Uiverse.io by milley69 */
.loading svg polyline {
  fill: none;
  stroke-width: 2;
}

.loading svg polyline#back {
  fill: none;
  stroke: currentColor;
  opacity: 0.5;
}

.loading svg polyline#front {
  fill: none;
  stroke: currentColor;
  stroke-dasharray: 48, 144;
  stroke-dashoffset: 192;
  animation: dash_682 0.8s linear infinite;
}

@keyframes dash_682 {
  72.5% {
    opacity: 0;
  }

  to {
    stroke-dashoffset: 0;
  }
}
</style>
