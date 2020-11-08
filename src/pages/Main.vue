<template>
  <section class="main">
    <div class="container main__container">
      <ul class="main__list">
        <li class="main__item" v-for="pack in packs" :key="pack.id">
          <PackCard :info="pack" @buyPack="openForm($event, pack)"/>
        </li>
      </ul>
    </div>
    <BuyForm class="main__buy-form" @close="formType = ''" v-if="formType.length" :type="formType"/>
  </section>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import PackCard from '@/components/Pack/PackCard'
import BuyForm from '@/components/BuyForm'

export default {
  name: 'Main',
  components: {
    PackCard,
    BuyForm
  },
  data() {
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
    openForm(type, pack) {
      this.setCurrentAccountToBuy(pack)
      this.formType = type
    }
  },
  computed: {
    ...mapState('packs', {
      packs: 'packs'
    })
  },
  created() {
    this.loadPacks()
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding-top: 85px;

  &__list {
    display: flex;
    justify-content: space-around;
    list-style: none;
  }

  &__item {
    &:nth-child(2) {
      transform: scale(1.1);
    }
  }
}
</style>
