<template>
  <div class="input-group">
    <input class="input-group__input" :required="required" v-model="_value" :placeholder="placeholder" :type="type"/>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    type: {
      type: String,
      require: false,
      default: 'text'
    },
    placeholder: {
      type: String,
      require: false,
      default: ''
    },
    value: {
      type: String,
      require: true
    },
    required: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('update:value', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input-group {
  &__input {
    padding: 10px;
    font-size: 14px;
    line-height: 17px;
    background-color: $main-white;
    border-radius: 4px;
    border: none;
    width: 100%;

    &::placeholder {
      font-size: 14px;
      line-height: 17px;
      color: $main-black;
    }
  }
}
</style>
