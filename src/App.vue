<template>
  <div class="d-flex flex-column gap-2">
    <fieldset class="flex-column">
      <div class="d-flex align-center gap-1">
        <input
          v-model="value"
          type="radio"
          name="theme"
          id="system"
          value="system"
          checked
        />
        <label for="system">Системная</label>
      </div>
      <div class="d-flex align-center gap-1">
        <input
          v-model="value"
          type="radio"
          name="theme"
          id="light"
          value="light"
          disabled
        />
        <label for="light">Светлая</label>
      </div>
      <div class="d-flex align-center gap-1">
        <input
          v-model="value"
          type="radio"
          name="theme"
          id="dark"
          value="dark"
          disabled
        />
        <label for="dark">Темная</label>
      </div>
      <div class="d-flex align-center gap-1">
        <input
          v-model="value"
          type="radio"
          name="theme"
          id="neon"
          value="neon"
        />
        <label for="neon">Неоновая</label>
      </div>
    </fieldset>
    <div :class="style" class="d-flex flex-column gap-2">
      <m-card
        title="Размеры кнопок"
        background
        border-color="#445e63"
        class="d-flex gap-2"
      >
        <m-button size="xs">Button</m-button>
        <m-button size="s">Button</m-button>
        <m-button size="m">Button</m-button>
        <m-button size="l">Button</m-button>
        <m-button size="xl">Button</m-button>
        <m-button size="xxl">Button</m-button>
        <m-button size="xxxl">Button</m-button>
      </m-card>
      <m-card title="Цвет кнопки" class="d-flex gap-2">
        <m-button color="var(--mue-error)">Button</m-button>
        <m-button color="#ff00f7">Button</m-button>
        <m-button color="#03d1ff">Button</m-button>
        <m-button color="#ffe603">Button</m-button>
      </m-card>
      <m-card
        title="Состояния кнопок"
        background
        background-color="#0000001e"
        class="d-flex gap-2"
      >
        <m-button is-loading>Button</m-button>
        <m-button disabled>Button</m-button>
      </m-card>
      <m-card title="Иконки">
        <m-icon icon="user" color="red" />
      </m-card>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import MButton from '@/components/form/Button.vue'
import MCard from '@/components/Card.vue'
import MIcon from '@/components/Icon.vue'

export default {
  name: 'App',
  components: { MIcon, MCard, MButton },
  data() {
    return {
      value: 'system',
    }
  },
  computed: {
    style() {
      this.switchTheme(this.value)
      return `theme-${this.value}`
    },
  },
  methods: {
    ...mapActions({
      switchTheme: 'switchTheme',
    }),
  },
}
</script>

<style lang="scss" scoped></style>
