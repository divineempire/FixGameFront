<template>
  <div class="success">
    <svg class="success__icon">
      <use xlink:href="#logo_filled"/>
    </svg>
    <p class="success__title">
      Успех!
    </p>
    <p class="success__subtitle">
      Всё прошло отлично!
    </p>
    <Copy class="success__copy" :text="email"/>
    <p class="success__footer">
      Данные продублированы на почту
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Copy from '@/components/UI/Copy'

export default {
  name: 'Success',
  components: {
    Copy
  },
  computed: {
    ...mapState('buy', {
      email: 'email'
    })
  }
}
</script>

<style lang="scss" scoped>
.success {
  width: 540px;
  padding: 30px;
  background-color: $main-white;
  border-radius: 10px;

  &__icon {
    width: 74px;
    height: 150px;
    fill: $good;
    margin-bottom: 25px;
    margin-right: auto;
    margin-left: auto;
    display: block;
  }

  &__title, &__subtitle, &__footer {
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
    margin: 0 0 15px 0;
  }

  &__copy {
    margin-bottom: 10px;
  }

  &__footer {
    margin: 0;
    color: rgba($main-black, 0.5);
    font-size: 14px;
    line-height: 17px;
  }
}
</style>
