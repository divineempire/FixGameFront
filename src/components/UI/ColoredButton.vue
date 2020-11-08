<template>
  <button type="button" class="colored-button" @click="$emit('click')" :class="[colorClass, transparentClass]">
    <span class="colored-button__text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'ColoredButton',
  props: {
    text: {
      type: String,
      require: false,
      default: ''
    },
    color: {
      type: String,
      require: false,
      default: 'default'
    },
    isTransparent: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  computed: {
    colorClass() {
      return `colored-button--${this.color}`
    },
    transparentClass() {
      return this.isTransparent ? 'colored-button--transparent' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.colored-button {
  border: 1px solid transparent;
  background-color: transparent;
  outline: none;
  border-radius: 4px;
  transition: border $transition, background-color $transition;
  padding: 13px 16px;

  &__text {
    color: $main-white;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    display: block;
    width: 100%;
  }

  &--default {
    border-color: $good;
    background-color: $good;
    --color: $good;
  }

  &--error {
    border-color: $error;
    background-color: $error;
    --color: $error;
  }

  &--transparent {
    background-color: transparent;

    &__text {
      color: var(--color);
    }
  }
}
</style>
