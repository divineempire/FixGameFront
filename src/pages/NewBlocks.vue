<template>
    <div class="clean-container">
        <section id="roulette">
            <div class="top-back__block">
                <img class="top-back__block-img" :src="back" alt="">
                <p class="top-back__block-back__text">Назад</p>
                <p class="top-back__block-title">Кейс от Фиксплея</p>
            </div>
            <div class="roulette-line">
                <div class="roulette-line__stick"></div>
                <div class="dark-background__roulette"></div>
                <div class="roulette-line__item">
                    <p class="roulete-line__item-text">GTA V</p>
                </div>
                <div class="roulette-line__item">
                    <p class="roulete-line__item-text">GTA V</p>
                </div>
                <div class="roulette-line__item">
                    <p class="roulete-line__item-text">GTA V</p>
                </div>
                <div class="roulette-line__item">
                    <p class="roulete-line__item-text">GTA V</p>
                </div>
                <div class="roulette-line__item">
                    <p class="roulete-line__item-text">GTA V</p>
                </div>
                <div class="roulette-line__item">
                    <p class="roulete-line__item-text">GTA V</p>
                </div>
                <div class="roulette-line__item">
                    <p class="roulete-line__item-text">GTA V</p>
                </div>
                <div class="roulette-line__item">
                    <p class="roulete-line__item-text">GTA V</p>
                </div>
                <div class="roulette-line__item">
                    <p class="roulete-line__item-text">GTA V</p>
                </div>




            </div>
            <div class="roulette-form">
                <img class="roulette-form__img" :src="rouletteFon" alt="">
                <div class="roulette-form__description">
                    <p class="roulette-form__description__title">Испытай свою удачу!</p>
                    <p class="roulette-form__description__text">Принцип игры "Рулетка" основан на случайном выпадении игр. Мы не вмешиваемся в процесс розыгрыша, благодаря этому честность рулетки невозможно нарушить.</p>
                </div>
                <form action="" class="roulette-form__form">
                    <div class="overlays-item__form-touch-price">
                        <p class="overlays-item__form-touch-price__key">Цена:</p>
                        <div class="overlays-item__form-touch-price__value">
                            <p class="overlays-item__form-touch-price__value-last">119 ₽</p>
                            <p class="overlays-item__form-touch-price__value-new">119 ₽</p>
                        </div>
                    </div>
                    <p class="overlays-item__form-touch-text">Email</p>
                    <input placeholder="Введите email" class="overlays-item__form-touch-input" name="email" type="text">
                    <div class="overlays-item__form-touch__promocode-block">
                        <p class="overlays-item__form-touch-text">Промокод</p>
                        <input placeholder="Введите промокод" class="overlays-item__form-touch-input" name="promo" type="text">
                        <button class="overlays-item__form-touch__promocode-block__btn">Применить</button>
                    </div>
                    <div class="overlays-item__form-touch__buy-block">
                        <input typeof="number" value="1" class="overlays-item__form-touch__buy-block__input" type="text">
                        <button :style="{background: 'linear-gradient(243.71deg, #26D657 0%, #0AD266 100%)'}">Купить за 169 ₽</button>

                    </div>
                </form>
            </div>
        </section>
        <h2 class="products-title">Все товары</h2>
        <div class="select-type__block">

            <div @click="changeCategory()" class="select-type__block-item active-select__type">
                <div class="select-border"></div>
                <p class="select-type__block-item__text ">Все</p>
            </div>
            <div @click="changeCategory()" class="select-type__block-item">
                <div class="select-border"></div>
                <p class="select-type__block-item__text">Аккаунты</p>
            </div>
            <div @click="changeCategory()" class="select-type__block-item">
                <div class="select-border"></div>
                <p class="select-type__block-item__text">Ключи</p>
            </div>
        </div>
        <div class="mini-games__container all">

        </div>
        <div class="mini-games__container accounts">

        </div>
        <div class="mini-games__container keys">

        </div>
        <section id="overlays">


<!--            <div class="overlays-item">-->
<!--                <div class="overlays-item__description">-->
<!--                    <p class="overlays-item__description-title">-->
<!--                        Minecraft-->
<!--                    </p>-->


<!--                    <p class="overlays-item__description-text">-->
<!--                        Приобретая данный товар Вы моментально получаете лицензионный аккаунт Minecraft.-->
<!--                    </p>-->
<!--                    <p class="overlays-item__description-text">-->
<!--                        Minecraft — компьютерная инди-игра в жанре песочницы с элементами симулятора выживания и открытым миром, разработанная шведским программистом Маркусом Перссоном, известным также как «Notch» и позже выпускаемая основанной Перссоном компанией Mojang.-->
<!--                    </p>-->
<!--                    <p class="overlays-item__description-text">-->
<!--                        Возможности товара:-->
<!--                    </p>-->
<!--                    <ul>-->
<!--                        <li>Возможность играть на Premium серверах</li>-->
<!--                        <li>Играть с модами на серверах</li>-->
<!--                    </ul>-->
<!--                    <p class="overlays-item__description-text">-->
<!--                        Менять пароль и ник запрещено.-->
<!--                    </p>-->
<!--                    <p class="overlays-item__description-text">-->
<!--                        При смене этих данных Вы лишаетесь любой гарантии от магазина.-->
<!--                    </p>-->

<!--                </div>-->
<!--                <form class="overlays-item__form" :style="{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%), url('+mine+') 100% 100% no-repeat', backgroundSize: 'cover'}">-->
<!--                    <div class="close-btn">-->
<!--                        <span class="close-btn__item"></span>-->
<!--                        <span class="close-btn__item"></span>-->
<!--                    </div>-->
<!--                    <div class="overlays-item__form-touch">-->
<!--                        <div class="overlays-item__form-touch-price">-->
<!--                            <p class="overlays-item__form-touch-price__key">Цена:</p>-->
<!--                            <div class="overlays-item__form-touch-price__value">-->
<!--                                <p class="overlays-item__form-touch-price__value-last">119 ₽</p>-->
<!--                                <p class="overlays-item__form-touch-price__value-new">119 ₽</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <p class="overlays-item__form-touch-text">Гарантия</p>-->
<!--                        <div class="overlays-item__form-touch-type">-->
<!--                            <img class="overlays-item__form-touch-type__sale" :src="sale" alt="">-->
<!--                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item active-touch__type">-->
<!--                                <div class="select-type"></div>-->
<!--                                <p class="overlays-item__form-touch-type__item-text ">Без</p>-->
<!--                            </div>-->
<!--                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item">-->
<!--                                <div class="select-type"></div>-->
<!--                                <p class="overlays-item__form-touch-type__item-text ">Неделя</p>-->
<!--                            </div>-->
<!--                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item">-->
<!--                                <div class="select-type"></div>-->
<!--                                <p class="overlays-item__form-touch-type__item-text ">Месяц</p>-->
<!--                            </div>-->
<!--                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item">-->
<!--                                <div class="select-type"></div>-->
<!--                                <p class="overlays-item__form-touch-type__item-text ">Год</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <p class="overlays-item__form-touch-text">Email</p>-->
<!--                        <input placeholder="Введите email" class="overlays-item__form-touch-input" name="email" type="text">-->
<!--                        <div class="overlays-item__form-touch__promocode-block">-->
<!--                            <p class="overlays-item__form-touch-text">Промокод</p>-->
<!--                            <input placeholder="Введите промокод" class="overlays-item__form-touch-input" name="promo" type="text">-->
<!--                            <button class="overlays-item__form-touch__promocode-block__btn">Применить</button>-->
<!--                        </div>-->
<!--                        <div class="overlays-item__form-touch__buy-block">-->
<!--                            <input typeof="number" value="1" class="overlays-item__form-touch__buy-block__input" type="text">-->
<!--                            <button :style="{background: 'linear-gradient(243.71deg, #26D657 0%, #0AD266 100%)'}">Купить за 169 ₽</button>-->

<!--                        </div>-->
<!--                    </div>-->
<!--                </form>-->

<!--            </div>-->
        </section>



        <section class="case-container">

        </section>
    </div>
</template>


<script>

    import reddead from '../static/images/newblock/reddead.png'
    import sale from '../static/images/newblock/sale.svg'
    import gold from '../static/images/buy_form/gold.jpg'
    import mine from '../static/images/buy_form/mine.jpg'
    import premium from '../static/images/buy_form/premium.jpg'
    import back from '../static/images/newblock/back.svg'
    import fifa from '../static/images/newblock/fifa.png'
    import rouletteFon from '../static/images/newblock/roulette-fon.png'

    export default {
        name: 'NewBlocks',
        data() {
            return {
                reddead,
                sale,
                gold,
                mine,
                premium,
                back,
                fifa,
                rouletteFon
            }
        },
        methods: {
            changeCategory(){
                //let categoryBackground = document.querySelectorAll('.select-border')
                let category = document.querySelectorAll('.select-type__block-item')
                let miniGames = document.querySelectorAll('.mini-games__container-item')
                let miniGamesAccount = document.querySelectorAll('.account-game')
                let miniGamesKey = document.querySelectorAll('.key-game')
                let productsTitle = document.querySelector('.products-title')
                for (let i=0; i<category.length; i++){
                    category[i].onclick = function(){
                        if (i===0){
                            console.log(i)
                            category[0].className = 'select-type__block-item active-select__type'
                            category[1].className = 'select-type__block-item'
                            category[2].className = 'select-type__block-item'
                            productsTitle.innerText = 'Все товары'
                            for (let k=0; k<miniGames.length; k++){
                                miniGames[k].style.display = 'flex'
                            }
                            for (let k=0; k<miniGamesAccount.length; k++){
                                miniGamesAccount[k].style.display = 'flex'
                            }
                            for (let k=0; k<miniGamesKey.length; k++){
                                miniGamesKey[k].style.display = 'flex'
                            }
                        }
                        if (i===1){
                            console.log(i)
                            category[0].className = 'select-type__block-item'
                            category[1].className = 'select-type__block-item active-select__type'
                            category[2].className = 'select-type__block-item'
                            productsTitle.innerText = 'Аккаунты'
                            for (let k=0; k<miniGames.length; k++){
                                miniGames[k].style.display = 'none'
                            }
                            for (let k=0; k<miniGamesAccount.length; k++){
                                miniGamesAccount[k].style.display = 'flex'
                            }
                            for (let k=0; k<miniGamesKey.length; k++){
                                miniGamesKey[k].style.display = 'none'
                            }
                        }
                        if (i===2){
                            console.log(i)
                            category[0].className = 'select-type__block-item'
                            category[1].className = 'select-type__block-item'
                            category[2].className = 'select-type__block-item active-select__type'
                            productsTitle.innerText = 'Ключи'
                            for (let k=0; k<miniGames.length; k++){
                                miniGames[k].style.display = 'none'
                            }
                            for (let k=0; k<miniGamesAccount.length; k++){
                                miniGamesAccount[k].style.display = 'none'
                            }
                            for (let k=0; k<miniGamesKey.length; k++){
                                miniGamesKey[k].style.display = 'flex'
                            }
                        }
                    }
                }
            },

            changeGaranty(){
                let forms = document.querySelectorAll('.overlays-item__form')
                let modal = document.querySelectorAll('.overlays-item')
                let priceValue = document.querySelectorAll('.overlays-item__form-touch-price__value')
                console.log(modal)
                let getTitles = function(e){
                    let getTitlesArr = []
                    for (let a=0; a<modal.length; a++){
                        let modalTitles = modal[e].querySelectorAll('.overlays-item__description-title')
                        getTitlesArr.push(modalTitles)
                    }
                    return getTitlesArr
                }
                let getTexts = function(e){
                    let getTitlesArr = []
                    for (let a=0; a<modal.length; a++){
                        let modalText = modal[e].querySelectorAll('.overlays-item__description-text')
                        getTitlesArr.push(modalText)
                    }
                    return getTitlesArr
                }
                let lastPrice = function(e){
                    let lastPriceArr = []
                    for (let a=0; a<priceValue.length; a++){
                        let modalLastPrice = priceValue[e].querySelectorAll('.overlays-item__form-touch-price__value-last')
                        lastPriceArr.push(modalLastPrice)
                    }
                    return lastPriceArr
                }
                let newPrice = function(e){
                    let newPriceArr = []
                    for (let a=0; a<priceValue.length; a++){
                        let modalNewPrice = priceValue[e].querySelectorAll('.overlays-item__form-touch-price__value-new')
                        newPriceArr.push(modalNewPrice)
                    }
                    return newPriceArr
                }


                for (let i=0; i<forms.length; i++){
                    let formsChangeGaranty = forms[i].querySelectorAll('.overlays-item__form-touch-type__item')

                    for (let k=0; k<formsChangeGaranty.length; k++){
                        console.log()
                        console.log(newPrice(i)[0][0])
                        formsChangeGaranty[k].onclick = () =>{
                            if (k===0){
                                formsChangeGaranty[0].className = 'overlays-item__form-touch-type__item active-touch__type'
                                formsChangeGaranty[1].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[2].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[3].className = 'overlays-item__form-touch-type__item'

                                if (getTitles(i)[0].length!==1){
                                    getTitles(i)[0][0].style.display = 'block'
                                    getTitles(i)[0][1].style.display = 'none'
                                    getTitles(i)[0][2].style.display = 'none'
                                    getTitles(i)[0][3].style.display = 'none'

                                    getTexts(i)[0][0].style.display = 'block'
                                    getTexts(i)[0][1].style.display = 'none'
                                    getTexts(i)[0][2].style.display = 'none'
                                    getTexts(i)[0][3].style.display = 'none'

                                    lastPrice(i)[0][0].style.display = 'block'
                                    lastPrice(i)[0][1].style.display = 'none'
                                    lastPrice(i)[0][2].style.display = 'none'
                                    lastPrice(i)[0][3].style.display = 'none'

                                    newPrice(i)[0][0].style.display = 'block'
                                    newPrice(i)[0][1].style.display = 'none'
                                    newPrice(i)[0][2].style.display = 'none'
                                    newPrice(i)[0][3].style.display = 'none'

                                }
                                else{
                                    getTitles(i)[0][0].style.display = 'block'
                                    getTexts(i)[0][0].style.display = 'block'
                                    lastPrice(i)[0][0].style.display = 'block'
                                    newPrice(i)[0][0].style.display = 'block'

                                }

                            }
                            if (k===1){
                                formsChangeGaranty[0].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[1].className = 'overlays-item__form-touch-type__item active-touch__type'
                                formsChangeGaranty[2].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[3].className = 'overlays-item__form-touch-type__item'
                                if (getTitles(i)[0].length>1){
                                    getTitles(i)[0][0].style.display = 'none'
                                    getTitles(i)[0][1].style.display = 'block'
                                    getTitles(i)[0][2].style.display = 'none'
                                    getTitles(i)[0][3].style.display = 'none'

                                    getTexts(i)[0][0].style.display = 'none'
                                    getTexts(i)[0][1].style.display = 'block'
                                    getTexts(i)[0][2].style.display = 'none'
                                    getTexts(i)[0][3].style.display = 'none'

                                    lastPrice(i)[0][0].style.display = 'none'
                                    lastPrice(i)[0][1].style.display = 'block'
                                    lastPrice(i)[0][2].style.display = 'none'
                                    lastPrice(i)[0][3].style.display = 'none'

                                    newPrice(i)[0][0].style.display = 'none'
                                    newPrice(i)[0][1].style.display = 'block'
                                    newPrice(i)[0][2].style.display = 'none'
                                    newPrice(i)[0][3].style.display = 'none'
                                }
                                else{
                                    getTitles(i)[0][0].style.display = 'block'
                                    getTexts(i)[0][0].style.display = 'block'
                                    lastPrice(i)[0][0].style.display = 'block'
                                    newPrice(i)[0][0].style.display = 'block'
                                }
                            }
                            if (k===2){
                                formsChangeGaranty[0].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[1].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[2].className = 'overlays-item__form-touch-type__item active-touch__type'
                                formsChangeGaranty[3].className = 'overlays-item__form-touch-type__item'
                                if (getTitles(i)[0].length>1){
                                    getTitles(i)[0][0].style.display = 'none'
                                    getTitles(i)[0][1].style.display = 'none'
                                    getTitles(i)[0][2].style.display = 'block'
                                    getTitles(i)[0][3].style.display = 'none'

                                    getTexts(i)[0][0].style.display = 'none'
                                    getTexts(i)[0][1].style.display = 'none'
                                    getTexts(i)[0][2].style.display = 'block'
                                    getTexts(i)[0][3].style.display = 'none'

                                    lastPrice(i)[0][0].style.display = 'none'
                                    lastPrice(i)[0][1].style.display = 'none'
                                    lastPrice(i)[0][2].style.display = 'block'
                                    lastPrice(i)[0][3].style.display = 'none'

                                    newPrice(i)[0][0].style.display = 'none'
                                    newPrice(i)[0][1].style.display = 'none'
                                    newPrice(i)[0][2].style.display = 'block'
                                    newPrice(i)[0][3].style.display = 'none'
                                }
                                else{
                                    getTitles(i)[0][0].style.display = 'block'
                                    getTexts(i)[0][0].style.display = 'block'
                                    lastPrice(i)[0][0].style.display = 'block'
                                    newPrice(i)[0][0].style.display = 'block'
                                }
                            }
                            if (k===3){
                                formsChangeGaranty[0].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[1].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[2].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[3].className = 'overlays-item__form-touch-type__item active-touch__type'
                                if (getTitles(i)[0].length>1){
                                    getTitles(i)[0][0].style.display = 'none'
                                    getTitles(i)[0][1].style.display = 'none'
                                    getTitles(i)[0][2].style.display = 'none'
                                    getTitles(i)[0][3].style.display = 'block'

                                    getTexts(i)[0][0].style.display = 'none'
                                    getTexts(i)[0][1].style.display = 'none'
                                    getTexts(i)[0][2].style.display = 'none'
                                    getTexts(i)[0][3].style.display = 'block'

                                    lastPrice(i)[0][0].style.display = 'none'
                                    lastPrice(i)[0][1].style.display = 'none'
                                    lastPrice(i)[0][2].style.display = 'none'
                                    lastPrice(i)[0][3].style.display = 'block'

                                    newPrice(i)[0][0].style.display = 'none'
                                    newPrice(i)[0][1].style.display = 'none'
                                    newPrice(i)[0][2].style.display = 'none'
                                    newPrice(i)[0][3].style.display = 'block'
                                }
                                else{
                                    getTitles(i)[0][0].style.display = 'block'
                                    getTexts(i)[0][0].style.display = 'block'
                                    lastPrice(i)[0][0].style.display = 'block'
                                    newPrice(i)[0][0].style.display = 'block'
                                }
                            }
                        }
                    }
                }
            },
            productRequest(){
                let request = new XMLHttpRequest()
                request.open('GET', 'https://api.fixgame.ru/api/productGroups', false)
                request.send()
                if (request.status === 200) {
                    let subjectsRequest = JSON.parse(request.response)

                    return(subjectsRequest)
                } else {
                    console.log('Error')
                }
            },
            showModal(){
                let previewsBtns =document.querySelectorAll('.mini-games__container-item__button')
                let modals = document.querySelectorAll('.overlays-item')
                for (let i=0; i<previewsBtns.length; i++){
                    previewsBtns[i].onclick = function(){
                        modals[i].style.display = 'flex'
                    }
                }
            },
            closeModal(){
                let closeBtn = document.querySelectorAll('.close-btn')
                let modals = document.querySelectorAll('.overlays-item')
                for (let i=0; i<closeBtn.length;i++){
                    closeBtn[i].onclick = function(){
                        modals[i].style.display = 'none'
                    }
                }
            }

        },
        mounted() {
            let products = this.productRequest()
            let caseContainer = document.querySelector('.case-container')
                console.log(products)
            for (let i=0; i<products.length; i++){
                let product = document.createElement('div')
                product.className = 'overlays-item'
                let productDescriptionBlock = document.createElement('div')
                productDescriptionBlock.className = 'overlays-item__description'
                const createDescriptionsTitles = function(a) {
                    let descArr = []
                    for (let k=0; k<products[a].products.length; k++){
                        let descTitle = document.createElement('p')
                        descTitle.className = 'overlays-item__description-title'
                        descTitle.innerText = products[a].products[k].name
                        descArr.push(descTitle)
                    }
                    return descArr
                }
                const createDescriptionsText = function(a) {
                    let descArr = []
                    for (let k=0; k<products[a].products.length; k++){
                        let descText = document.createElement('p')
                        descText.className = 'overlays-item__description-text'
                        descText.innerText = products[a].products[k].description
                        descArr.push(descText)
                    }
                    return descArr
                }

                let productForm = document.createElement('form')
                productForm.className = 'overlays-item__form'
                productForm.style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%), url('+products[i].meta.slice(10, products[i].meta.length-1)+') 100% 100% no-repeat'
                productForm.style.backgroundSize = 'cover'
                let closeBtn = document.createElement('div')
                closeBtn.className = 'close-btn'
                let closeBtnItem1 = document.createElement('span')
                closeBtnItem1.className = 'close-btn__item'
                let closeBtnItem2 = document.createElement('span')
                closeBtnItem2.className = 'close-btn__item'
                closeBtn.appendChild(closeBtnItem1)
                closeBtn.appendChild(closeBtnItem2)
                let overlaysTouch = document.createElement('div')
                overlaysTouch.className = 'overlays-item__form-touch'
                let overlaysTouchPrice = document.createElement('div')
                overlaysTouchPrice.className = 'overlays-item__form-touch-price'
                let overlaysTouchPriceKey = document.createElement('p')
                overlaysTouchPriceKey.className = 'overlays-item__form-touch-price__key'
                overlaysTouchPriceKey.innerText = 'Цена:'
                let overlaysTouchPriceValue = document.createElement('div')
                overlaysTouchPriceValue.className = 'overlays-item__form-touch-price__value'


                const createLastPrices = function(a){
                    let lastPriceArr = []
                    for (let k=0; k<products[a].products.length; k++){
                        let lastPrice = document.createElement('p')
                        lastPrice.className = 'overlays-item__form-touch-price__value-last'
                        lastPrice.innerText = products[i].products[0].prePrice + ' ₽'
                        lastPriceArr.push(lastPrice)
                    }
                    return lastPriceArr
                }

                const createNewPrices = function(a){
                    let newPriceArr = []
                    for (let k=0; k<products[a].products.length; k++){
                        let newPrice = document.createElement('p')
                        newPrice.className = 'overlays-item__form-touch-price__value-new'
                        newPrice.innerText = products[i].products[0].price + ' ₽'
                        newPriceArr.push(newPrice)
                    }
                    return newPriceArr
                }



                let overlaysTouchText = document.createElement('p')
                overlaysTouchText.className = 'overlays-item__form-touch-text'
                overlaysTouchText.innerText = 'Гарантия'
                let overlaysTouchType = document.createElement('div')
                overlaysTouchType.className = 'overlays-item__form-touch-type'
                let overlaysTouchTypeImg = document.createElement('img')
                overlaysTouchTypeImg.className = 'overlays-item__form-touch-type__sale'
                overlaysTouchTypeImg.src = ''
                //-----------------------------------------------------------------------------
                let overlaysTouchTypeItem1 = document.createElement('div')
                overlaysTouchTypeItem1.className = 'overlays-item__form-touch-type__item active-touch__type'
                let selectType1 = document.createElement('div')
                selectType1.className = 'select-type'
                let overlaysTouchTypeItemText1 = document.createElement('p')
                overlaysTouchTypeItemText1.className = 'overlays-item__form-touch-type__item-text'
                overlaysTouchTypeItemText1.innerText = 'Без'
                //-----------------------------------------------------------------------------
                let overlaysTouchTypeItem2 = document.createElement('div')
                overlaysTouchTypeItem2.className = 'overlays-item__form-touch-type__item'
                let selectType2 = document.createElement('div')
                selectType2.className = 'select-type'
                let overlaysTouchTypeItemText2 = document.createElement('p')
                overlaysTouchTypeItemText2.className = 'overlays-item__form-touch-type__item-text'
                overlaysTouchTypeItemText2.innerText = 'Неделя'
                //-----------------------------------------------------------------------------
                let overlaysTouchTypeItem3 = document.createElement('div')
                overlaysTouchTypeItem3.className = 'overlays-item__form-touch-type__item'
                let selectType3 = document.createElement('div')
                selectType3.className = 'select-type'
                let overlaysTouchTypeItemText3 = document.createElement('p')
                overlaysTouchTypeItemText3.className = 'overlays-item__form-touch-type__item-text'
                overlaysTouchTypeItemText3.innerText = 'Месяц'
                //-----------------------------------------------------------------------------
                let overlaysTouchTypeItem4 = document.createElement('div')
                overlaysTouchTypeItem4.className = 'overlays-item__form-touch-type__item'
                let selectType4 = document.createElement('div')
                selectType4.className = 'select-type'
                let overlaysTouchTypeItemText4 = document.createElement('p')
                overlaysTouchTypeItemText4.className = 'overlays-item__form-touch-type__item-text'
                overlaysTouchTypeItemText4.innerText = 'Год'
                //-----------------------------------------------------------------------------
                let overlaysItemEmailText = document.createElement('p')
                overlaysItemEmailText.className = 'overlays-item__form-touch-text'
                overlaysItemEmailText.innerText = 'Email'
                let inputEmail = document.createElement('input')
                inputEmail.className = 'overlays-item__form-touch-input'
                inputEmail.placeholder = 'Введите email'
                inputEmail.name = 'email'
                inputEmail.type = 'text'
                let overlaysPromocodeBlock = document.createElement('div')
                overlaysPromocodeBlock.className = 'overlays-item__form-touch__promocode-block'
                let overlaysItemPromoText = document.createElement('p')
                overlaysItemPromoText.className = 'overlays-item__form-touch-text'
                overlaysItemPromoText.innerText = 'Промокод'
                let inputPromo = document.createElement('input')
                inputPromo.className = 'overlays-item__form-touch-input'
                inputPromo.placeholder = 'Введите промокод'
                inputPromo.name = 'promo'
                inputPromo.type = 'text'
                let formButton = document.createElement('button')
                formButton.className = 'overlays-item__form-touch__promocode-block__btn'
                formButton.innerText = 'Применить'
                let overlaysItemBuyBlock = document.createElement('div')
                overlaysItemBuyBlock.className = 'overlays-item__form-touch__buy-block'
                let inputBuy = document.createElement('input')
                inputBuy.className = 'overlays-item__form-touch__buy-block__input'
                inputBuy.type = 'number'
                inputBuy.value = 1
                let buyBtn = document.createElement('button')
                buyBtn.style.background = 'linear-gradient(243.71deg, #26D657 0%, #0AD266 100%)'
                buyBtn.innerText = 'Купить за'+products[i].products[0].price+' ₽'
                product.appendChild(productDescriptionBlock)
                for (let k=0; k<createDescriptionsTitles(i).length; k++){
                    productDescriptionBlock.appendChild(createDescriptionsTitles(i)[k])
                }
                for (let k=0; k<createDescriptionsText(i).length; k++){
                    productDescriptionBlock.appendChild(createDescriptionsText(i)[k])
                }
                for (let k=0; k<createLastPrices(i).length; k++){
                    overlaysTouchPriceValue.appendChild(createLastPrices(i)[k])
                }
                for (let k=0; k<createNewPrices(i).length; k++){
                    overlaysTouchPriceValue.appendChild(createNewPrices(i)[k])
                }

                product.appendChild(productForm)
                productForm.appendChild(closeBtn)
                productForm.appendChild(overlaysTouch)
                overlaysTouch.appendChild(overlaysTouchPrice)
                overlaysTouchPrice.appendChild(overlaysTouchPriceKey)
                overlaysTouchPrice.appendChild(overlaysTouchPriceValue)

                overlaysTouch.appendChild(overlaysTouchText)
                overlaysTouch.appendChild(overlaysTouchType)
                overlaysTouchType.appendChild(overlaysTouchTypeImg)
                overlaysTouchTypeItem1.appendChild(selectType1)
                overlaysTouchTypeItem1.appendChild(overlaysTouchTypeItemText1)
                overlaysTouchTypeItem2.appendChild(selectType2)
                overlaysTouchTypeItem2.appendChild(overlaysTouchTypeItemText2)
                overlaysTouchTypeItem3.appendChild(selectType3)
                overlaysTouchTypeItem3.appendChild(overlaysTouchTypeItemText3)
                overlaysTouchTypeItem4.appendChild(selectType4)
                overlaysTouchTypeItem4.appendChild(overlaysTouchTypeItemText4)
                overlaysTouchType.appendChild(overlaysTouchTypeItem1)
                overlaysTouchType.appendChild(overlaysTouchTypeItem2)
                overlaysTouchType.appendChild(overlaysTouchTypeItem3)
                overlaysTouchType.appendChild(overlaysTouchTypeItem4)
                overlaysTouch.appendChild(overlaysItemEmailText)
                overlaysTouch.appendChild(inputEmail)
                overlaysTouch.appendChild(overlaysPromocodeBlock)
                overlaysPromocodeBlock.appendChild(overlaysItemPromoText)
                overlaysPromocodeBlock.appendChild(inputPromo)
                overlaysPromocodeBlock.appendChild(formButton)
                overlaysTouch.appendChild(overlaysItemBuyBlock)
                overlaysItemBuyBlock.appendChild(inputBuy)
                overlaysItemBuyBlock.appendChild(buyBtn)
                caseContainer.appendChild(product)



            }


            let categoryAll = document.querySelectorAll('.mini-games__container')

            for (let i=0; i<products.length; i++){
                let miniGame        = document.createElement('div')
                let miniGameName    = document.createElement('p')
                let miniGameBtn     = document.createElement('button')
                let miniGameBtnText = document.createElement('p')

                miniGame.className          = 'mini-games__container-item'
                miniGameName.className      = 'mini-games__container-item__name'
                miniGameBtn.className       = 'mini-games__container-item__button'
                miniGameBtnText.className   = 'mini-games__container-item__button-text'

                if (products[i].products[0].category==='account'){
                    miniGame.className = 'mini-games__container-item account-game'
                }
                if (products[i].products[0].category==='key') {
                    miniGame.className = 'mini-games__container-item key-game'
                }


                miniGame.style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%), url(' + products[i].products[0].imgLink + ')'

                miniGameName.innerText = products[i].products[0].displayName
                miniGameBtnText.innerText = 'Купить за ' + products[i].products[0].price + ' ₽'

                miniGameBtn.appendChild(miniGameBtnText)
                miniGame.appendChild(miniGameName)
                miniGame.appendChild(miniGameBtn)




                categoryAll[0].appendChild(miniGame)






            }
            let modals = document.querySelectorAll('.overlays-item')
            for (let i=0;i<modals.length;i++){
                let newPrices = modals[i].querySelectorAll('.overlays-item__form-touch-price__value-new')
                for (let l=0; l<newPrices.length;l++){
                    newPrices[l].style.display = 'none'
                }
                newPrices[0].style.display = 'block'
            }


            this.changeCategory()
            this.changeGaranty()
            this.showModal()
            this.closeModal()
        }
    }
</script>

