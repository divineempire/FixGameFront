<template>
    <div class="mini-games__container-item">
        <p class="mini-games__container-item__name">Rainbow Six: Siege</p>
        <button type="button" class="mini-games__container-item__button">
            <p class="mini-games__container-item__button-text">Купить за 119 ₽</p>
        </button>
    </div>
</template>

<script>


    export default {
        name: 'PackCard',
        props: {
            // type: {
            //   type: String,
            //   require: false,
            //   default: 'mine'
            // },
            info: {
                type: Object,
                require: false,
                default: () => ({
                    name: 'Minecraft'
                })
            }
        },
        components: {

        },
        computed: {

        }
    }
</script>

<style lang="scss" scoped>

</style>
