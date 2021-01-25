<template>
  <div class="loader">
    <svg class="loader__icon" viewBox="0 0 74 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="loader-gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0"  stop-color="var(--green)">
            <animate attributeName="stop-color" :values="`${goodColor}; ${errorColor}; ${goodColor}`" dur="1.5s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stop-color="var(--red)">
            <animate attributeName="stop-color" :values="`${errorColor}; ${goodColor}; ${errorColor}`" dur="1.5s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <path d="M11.746 59.4231L62.254 150V87.1154L74 91.1538L62.254 30.5769L0 0L39.3492 64.6154L11.746 59.4231Z" fill="url(#loader-gradient)"/>
    </svg>
  </div>
</template>

<script>
import {goodColor, errorColor} from '@/assets/css/vars.scss'
export default {
  name: 'Loader',
  data() {
    return {
      goodColor,
      errorColor
    }
  }
}
</script>

<style lang="scss" scoped>
.loader {
  --green: #{$good};
  --red: #{$error};

  &__icon {
    width: 74px;
    height: 150px;
  }
}
</style>
