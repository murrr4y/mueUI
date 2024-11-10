<template>
  <div>
    <button
      type="submit"
      :disabled="disabled"
      class="mue-button gap-2"
      id="button"
      :class="[{ 'mue-button--transparent': transparent }, buttonSize]"
      :style="[{ '--color-btn-border': color }, { backgroundColor: color }]"
      v-on="$attrs"
    >
      <m-loader v-if="isLoading" />
      <div v-else style="display: contents">
        <m-icon v-if="prependIcon" :icon="prependIcon" />
        <slot />
        <m-icon v-if="appendIcon" :icon="appendIcon" />
      </div>
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import hexToRgbA from '@/utils/HexToRGB.js'
import MLoader from '@/components/Loader.vue'
import MIcon from '@/components/Icon.vue'
export default {
  name: 'MButton',
  components: { MLoader, MIcon },
  methods: { hexToRgbA },
  props: {
    size: {
      type: String,
      default: 'm',
    },
    color: {
      type: String,
      default: 'var(--color-btn-default)',
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    appendIcon: {
      type: Object,
      default: null,
    },
    prependIcon: {
      type: Object,
      default: null,
    },
  },
  computed: {
    ...mapGetters({
      currentTheme: 'theme',
    }),
    buttonSize() {
      return `mue-button--size-${this.size}`
    },
  },
}
</script>

<style lang="scss" scoped>
.mue-button {
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  appearance: none;
  border: none;
  box-shadow: 0 0 0 2px var(--color-btn-border);
  color: var(--color-text);
  cursor: pointer;
  transition:
    box-shadow 0.5s ease,
    scale 0.5s ease;

  &--transparent {
    background: transparent !important;
  }

  &--size {
    &-s {
      min-height: 30px;
      padding: 2px 10px;
      font-size: 14px;
    }

    &-m {
      min-height: 35px;
      padding: 2px 15px;
      font-size: 16px;
    }

    &-l {
      min-height: 40px;
      padding: 2px 20px;
      font-size: 18px;
    }

    &-xl {
      min-height: 50px;
      padding: 2px 25px;
      font-size: 20px;
      border-radius: 30px;
    }
  }

  &:hover:not(:disabled) {
    scale: 1.1;
    box-shadow: 0 0 5px 2px var(--color-btn-border);
  }

  &:disabled {
    filter: opacity(0.3);
  }
}
</style>
