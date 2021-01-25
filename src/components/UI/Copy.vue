<template>
  <div class="copy">
    <p class="copy__text">
      {{ text }}
    </p>
    <svg class="copy__icon" @click="copy">
      <use xlink:href="#copy"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Copy',
  props: {
    text: {
      type: String,
      require: false,
      default: ''
    }
  },
  methods: {
    copy() {
      window.navigator.clipboard.writeText(this.text)
    }
  }
}
</script>

<style lang="scss" scoped>
.copy {
  padding: 15px;
  background-color: $main-grey;
  display: flex;

  &__text {
    margin: 0;
    color: $main-black;
    font-size: 16px;
    line-height: 20px;
    flex-grow: 1;
    text-align: left;
  }

  &__icon {
    margin-left: 10px;
    width: 24px;
    height: 22px;
    fill: $main-black;

  &:hover {
     cursor: pointer;
   }
  }
}
</style>
