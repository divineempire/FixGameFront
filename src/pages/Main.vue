<template>
  <section class="main">
    <transition name="loading-packs" mode="out-in">
      <Loader :key="'loader'" class="main__loader" v-if="isLoading" />
      <div v-else :key="'list'" class="container main__container">
        <ul class="main__list">
          <li class="main__item" v-for="pack in packs" :key="pack.id">
            <PackCard :info="pack" @buyPack="openForm($event, pack)"/>
          </li>
        </ul>
      </div>
    </transition>
    <BuyForm class="main__buy-form" @close="formType = ''" v-if="formType.length" :type="formType"/>
  </section>
</template>

<script>
import Loader from '@/components/UI/Loader'
import { mapActions, mapState, mapMutations } from 'vuex'
import PackCard from '@/components/Pack/PackCard'
import BuyForm from '@/components/BuyForm'

export default {
  name: 'Main',
  components: {
    PackCard,
    BuyForm,
    Loader
  },
  data () {
    return {
      formType: ''
    }
  },
  methods: {
    ...mapActions('packs', {
      loadPacks: 'loadPacks'
    }),
    ...mapMutations('buy', {
      setCurrentAccountToBuy: 'setCurrentAccountToBuy'
    }),
    openForm (type, pack) {
      this.setCurrentAccountToBuy(pack)
      this.formType = type
    }
  },
  computed: {
    ...mapState('packs', {
      packs: 'packs',
      isLoading: 'loading'
    })
  },
  created () {
    this.loadPacks()
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding-top: 85px;

  @media ($desktop) {
    padding-top: 20px;
  }

  &__loader {
    position: fixed;
    top: calc(50% - 75px);
    left: calc(50% - 37px);
  }

  .loading-packs {
    &-leave-to {
      opacity: 0;
      transform: translateY(-30px);
    }

    &-enter {
      opacity: 0;
      transform: translateY(30px);
    }

    &-enter-to {
      opacity: 1;
      transform: translateY(0);
    }

    &-enter-active, &-leave-active {
      transition: opacity $transition, transform $transition;
    }
  }

  &__list {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;

    @media ($desktop) {
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
    }
  }

  &__item {
    &:nth-child(2) {
      transform: scale(1.1);

      @media ($desktop) {
        transform: scale(1);
      }
    }

    @media ($desktop) {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 350px;
      flex-grow: 1;
      margin-right: 15px;
    }
  }
}
</style>
