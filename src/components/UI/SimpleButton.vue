<template>
  <button type="button" class="button" @click="$emit('click')">
    <span class="button__text">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'SimpleButton'
}
</script>

<style lang="scss" scoped>
.button {
  padding: 8px 15px;
  background-color: $main-white;
  border: none;
  outline: none;
  transition: all $transition;
  box-shadow: 0 0 4px 4px rgba($main-black, 0.25);
  border-radius: 4px;

  &__text {
    color: $main-black;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 4px 4px rgba($main-black, 0.35 );
  }

  &:active {
    box-shadow: none;
    filter: none;
  }
}
</style>
