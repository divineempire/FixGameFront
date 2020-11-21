<template>
  <div class="fail">
    <svg class="fail__icon">
      <use xlink:href="#crashed_logo"/>
    </svg>
    <p class="fail__title">
      Opps...
    </p>
    <p class="fail__subtitle">
      При обработке платежа произошла ошибка
    </p>
    <div class="fail__controls">
      <ColoredButton class="fail__go-to-main-button" :text="toMain" @click="goToMain"/>
      <ColoredButton class="fail__retry-button" :text="tryAgain" @click="tryBuyAgain"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ColoredButton from '@/components/UI/ColoredButton'

export default {
  name: 'Fail',
  components: {
    ColoredButton
  },
  data () {
    return {
      toMain: 'На главную',
      tryAgain: 'Повторить попытку'
    }
  },
  methods: {
    ...mapActions('buy', {
      tryToBuy: 'tryToBuy'
    }),
    goToMain () {
      this.$router.push('/')
    },
    tryBuyAgain () {
      this.tryToBuy()
          .then(res => {
            window.open(res.link)
          })
    }
  }
}
</script>

<style lang="scss" scoped>
.fail {
  width: 540px;
  padding: 30px;
  background-color: $main-white;
  border-radius: 10px;

  @media ($desktop) {
    width: 100%;
  }

  &__icon {
    width: 106px;
    height: 150px;
    fill: $error;
    margin-bottom: 25px;
    margin-right: auto;
    margin-left: auto;
    display: block;
  }

  &__title, &__subtitle {
    text-align: center;
    width: 100%;
  }

  &__title {
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    margin: 0 0 15px 0;
  }

  &__subtitle {
    font-size: 18px;
    line-height: 22px;
    margin: 0 0 50px 0;
  }

  &__controls {
    display: flex;
    justify-content: space-between;

    @media ($desktop) {
      flex-direction: column;
    }
  }

  &__go-to-main-button {
    margin-bottom: 0;
    @media ($desktop) {
      margin-bottom: 25px;
    }
  }
}
</style>
