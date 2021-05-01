<template>
    <section class="main">
        <transition mode="out-in" name="loading-packs">
            <Loader :key="'loader'" class="main__loader" v-if="isLoading"/>
            <div :key="'list'" class="container main__container" v-else>
                <Mine :packs="packs"/>
                <Shop/>
            </div>
        </transition>
        <BuyForm class="main__buy-form" v-if="formIsOpen"/>
    </section>
</template>

<script>
    import Loader from '@/components/UI/Loader'
    import {mapActions, mapState, mapMutations} from 'vuex'
    import BuyForm from '@/components/BuyForm'
    import Mine from '../components/Shop/Mine'
    import Shop from "../components/Shop/Shop";

    export default {
        name: 'Main',
        components: {
            Shop,
            Mine,
            BuyForm,
            Loader
        },
        data() {
            return {}
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
            },
        },
        mounted() {
        },
        computed: {
            ...mapState('packs', {
                packs: 'packs',
                isLoading: 'loading'
            }),
            formIsOpen: function () {
                return this.$store.state.packs.openForm;
            }
        },
        created() {
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
    }
</style>