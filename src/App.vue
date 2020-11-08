<template>
  <div id="app" class="app">
    <Header />
    <router-view class="app__body"/>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
.app {
  background-image: url('~st/images/main_back.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;

  &__body {
    flex-grow: 1;
  }
}
</style>
