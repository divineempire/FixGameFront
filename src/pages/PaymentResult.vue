<template>
  <section class="payment-result">
    <div class="container">
      <router-view class="payment-result__modal"/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PaymentResult'
}
</script>

<style lang="scss" scoped>
.payment-result {
  padding-top: 50px;

  &__modal {
    margin: 0 auto;
  }
}
</style>
