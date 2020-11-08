<template>
  <button type="submit" class="pack-button" :class="[colorClass]" @click="$emit('click')">
    <span class="pack-button__text">Купить за {{price}}₽</span>
  </button>
</template>

<script>
export default {
  name: 'PackButton',
  props: {
    type: {
      type: String,
      require: false,
      default: 'mine'
    },
    price: {
      type: Number,
      require: true
    }
  },
  computed: {
    colorClass() {
      return `pack-button--${this.type}`
    }
  }
}
</script>

<style lang="scss" scoped>
.pack-button {
  padding: 12px;
  border-radius: 4px;
  overflow: hidden;
  border: none;
  outline: none;
  width: 100%;
  transition: all $transition;

  &:hover {
    cursor: pointer;
  }

  &__text {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: $main-white;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  }

  &--mine {
    background: $mine;

    &:hover {
      filter: drop-shadow(0px 0px 30px rgba($mine, 0.3));
    }
  }

  &--premium {
    background: $premium;

    &:hover {
      filter: drop-shadow(0px 0px 30px rgba($premium, 0.3));
    }
  }

  &--gold {
    background: $gold;

    &:hover {
      filter: drop-shadow(0px 0px 30px rgba($gold, 0.3));
    }
  }
}
</style>
