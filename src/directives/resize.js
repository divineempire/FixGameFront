import Vue from 'vue'

Vue.directive('resize', {
  inserted(el, binding) {
    window.addEventListener('resize', binding.value)
  }
})
