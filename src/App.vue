<template>
  <div class="d-flex flex-column gap-2">
    <div class="d-flex flex-column gap-2">
      <m-card
        title="Размеры кнопок"
        class="d-flex gap-2"
      >
        <m-button size="s">Button</m-button>
        <m-button size="m">Button</m-button>
        <m-button size="l">Button</m-button>
        <m-button size="xl">Button</m-button>
      </m-card>
      <m-card title="Цвет кнопки" class="d-flex gap-2">
        <m-button color="var(--mue-primary)">Primary</m-button>
        <m-button color="var(--mue-error)">Error</m-button>
        <m-button color="var(--mue-warning">Warning</m-button>
        <m-button color="var(--mue-success)">Succes</m-button>
        <m-button color="var(--mue-info)">Info</m-button>
      </m-card>
      <m-card
        title="Состояния кнопок"
        class="d-flex gap-2"
      >
        <m-button is-loading>Button</m-button>
        <m-button disabled>Button</m-button>
      </m-card>
      <m-card title="Иконки">
        <m-icon icon="user" color="red" />
      </m-card>
      <m-card title="Карточки" class="d-flex gap-2">
        <m-card kitty title="Kitty">Карточка с котиками!</m-card>
        <m-card border-color="var(--mue-success)" title="Цвет рамки">Укажите свой цвет рамки</m-card>
        <m-card background title="Фон">Карточка с фоном</m-card>
        <m-card background background-color="var(--mue-info)" title="Цвет фона">Укажите свой цвет фона</m-card>
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
  },
  methods: {
    ...mapActions({
      switchTheme: 'switchTheme',
    }),
  },
}
</script>

<style lang="scss" scoped></style>
