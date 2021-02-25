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
        <h2>Все товары</h2>
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
        <div class="mini-games__container">
            <div class="mini-games__container-item">

                <p class="mini-games__container-item__name">Rainbow Six: Siege</p>

                    <button type="button" class="mini-games__container-item__button">
                        <p class="mini-games__container-item__button-text">Купить за 119 ₽</p>
                    </button>


            </div>
            <div class="mini-games__container-item">

                <p class="mini-games__container-item__name">Rainbow Six: Siege</p>
                <button type="button" class="mini-games__container-item__button">
                    <p class="mini-games__container-item__button-text">Купить за 119 ₽</p>
                </button>
            </div>
            <div class="mini-games__container-item">

                <p class="mini-games__container-item__name">Rainbow Six: Siege</p>
                <button type="button" class="mini-games__container-item__button">
                    <p class="mini-games__container-item__button-text">Купить за 119 ₽</p>
                </button>
            </div>
            <div class="mini-games__container-item">

                <p class="mini-games__container-item__name">Rainbow Six: Siege</p>
                <button type="button" class="mini-games__container-item__button">
                    <p class="mini-games__container-item__button-text">Купить за 119 ₽</p>
                </button>
            </div>
            <div class="mini-games__container-item">

                <p class="mini-games__container-item__name">Rainbow Six: Siege</p>
                <button type="button" class="mini-games__container-item__button">
                    <p class="mini-games__container-item__button-text">Купить за 119 ₽</p>
                </button>
            </div>
            <div class="mini-games__container-item">

                <p class="mini-games__container-item__name">Rainbow Six: Siege</p>
                <button type="button" class="mini-games__container-item__button">
                    <p class="mini-games__container-item__button-text">Купить за 119 ₽</p>
                </button>
            </div><div class="mini-games__container-item">

            <p class="mini-games__container-item__name">Rainbow Six: Siege</p>
            <button type="button" class="mini-games__container-item__button">
                <p class="mini-games__container-item__button-text">Купить за 119 ₽</p>
            </button>
        </div><div class="mini-games__container-item">

            <p class="mini-games__container-item__name">Rainbow Six: Siege</p>
            <button type="button" class="mini-games__container-item__button">
                <p class="mini-games__container-item__button-text">Купить за 119 ₽</p>
            </button>
        </div>
            <div class="mini-games__container-item">

                <p class="mini-games__container-item__name">Rainbow Six: Siege</p>
                <button type="button" class="mini-games__container-item__button">
                    <p class="mini-games__container-item__button-text">Купить за 119 ₽</p>
                </button>
            </div>
            <div class="mini-games__container-item">

                <p class="mini-games__container-item__name">Rainbow Six: Siege</p>
                <button type="button" class="mini-games__container-item__button">
                    <p class="mini-games__container-item__button-text">Купить за 119 ₽</p>
                </button>
            </div>
            <div class="mini-games__container-item">

                <p class="mini-games__container-item__name">Rainbow Six: Siege</p>
                <button type="button" class="mini-games__container-item__button">
                    <p class="mini-games__container-item__button-text">Купить за 119 ₽</p>
                </button>
            </div>
            <div class="mini-games__container-item">

                <p class="mini-games__container-item__name">Rainbow Six: Siege</p>
                <button type="button" class="mini-games__container-item__button">
                    <p class="mini-games__container-item__button-text">Купить за 119 ₽</p>
                </button>
            </div>
        </div>
        <section id="overlays">
            <div class="overlays-item">
                <div class="overlays-item__description">
                    <p class="overlays-item__description-title">
                        Ключ Rainbow Six: Siege Standart
                    </p>
                    <p class="overlays-item__description-text">
                        Мгновенно после оплаты и со скидками вы получаете лицензионный ключ активации на полноценную версию UPLAY игры Tom Clancy´s Rainbow Six: Siege. Это НЕ урезанная стартер-версия.
                    </p>
                    <p class="overlays-item__description-text">
                        «Tom Clancy’s Rainbow Six® Осада» – новая часть всемирно известной серии шутеров от первого лица, разработанная Ubisoft Montreal для консолей нового поколения и PC. В основе сюжета игры лежит борьба с терроризмом по всему миру. В «Tom Clancy’s Rainbow Six Осада» вы сможете в полной мере приобщиться к искусству разрушения. Вас ждут напряженные бои с постоянным риском для жизни, возможность командной игры и, конечно, сложнейшие операции. Одна ошибка – и все взлетит на воздух! Сетевой режим выводит жаркие перестрелки и тактическое планирование на новый уровень в лучших традициях серии «Tom Clancy’s Rainbow Six».
                    </p>
                    <p class="overlays-item__description-text">
                        Станьте агентом по борьбе с мировым терроризмом, мастером ведения боя на коротких дистанциях и специалистом по захвату стратегически важных объектов. Издание «Tom Clancy’s Rainbow Six® Осада» «Тактика осады» предоставит вам массу возможностей отточить тактические навыки и лично возглавить спасательную операцию или атаку на неприятеля.
                    </p>
                    <p class="overlays-item__description-text">
                        Активации ключа:
                        <ul>
                            <li>Если не установлен Uplay клиент, скачайте и установите его . (http://uplay.ubi.com/)</li>
                            <li>Войдите в свой аккаунт Uplay или зарегистрируйте новый, если у вас его еще нет.</li>
                            <li>Нажмите на изображение «Шестерёнки» и выберите «Активировать продукт».</li>
                            <li>Введите ключ активации (для его получения необходимо купить Tom Clancys Rainbow Six:Siege).</li>
                            <li>После этого игра отобразится в библиотеке игр и вы сможете скачать Tom Clancys Rainbow Six:Siege.</li>
                        </ul>
                    </p>
                </div>
                <form class="overlays-item__form" :style="{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%), url('+reddead+') 100% 100% no-repeat', backgroundSize: 'cover'}">
                    <div class="close-btn">
                        <span class="close-btn__item"></span>
                        <span class="close-btn__item"></span>
                    </div>
                    <div class="overlays-item__form-touch">
                        <div class="overlays-item__form-touch-price">
                            <p class="overlays-item__form-touch-price__key">Цена:</p>
                            <div class="overlays-item__form-touch-price__value">
                                <p class="overlays-item__form-touch-price__value-last">119 ₽</p>
                                <p class="overlays-item__form-touch-price__value-new">119 ₽</p>
                            </div>
                        </div>
                        <p class="overlays-item__form-touch-text">Гарантия</p>
                        <div class="overlays-item__form-touch-type">

                            <img class="overlays-item__form-touch-type__sale" :src="sale" alt="">
                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item active-touch__type">
                                <div class="select-type"></div>
                                <p class="overlays-item__form-touch-type__item-text ">Без</p>
                            </div>
                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item">
                                <div class="select-type"></div>
                                <p class="overlays-item__form-touch-type__item-text ">Неделя</p>
                            </div>
                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item">
                                <div class="select-type"></div>
                                <p class="overlays-item__form-touch-type__item-text ">Месяц</p>
                            </div>
                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item">
                                <div class="select-type"></div>
                                <p class="overlays-item__form-touch-type__item-text ">Год</p>
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
                            <button :style="{background: '#FF5001'}">Купить за 169 ₽</button>

                        </div>
                    </div>
                </form>

            </div>
            <div class="overlays-item">
                <div class="overlays-item__description">
                    <p class="overlays-item__description-title">
                        Minecraft PREMIUM
                    </p>
                    <p class="overlays-item__description-text">
                        Приобретая данный товар Вы моментально получаете лицензионный аккаунт Minecraft.
                    </p>
                    <p class="overlays-item__description-text">
                        Возможности товара:
                    </p>
                    <ul>
                        <li>Возможность играть на Premium серверах</li>
                        <li>Возможность смены ника на аккаунте</li>
                        <li>Возможность смены скина на аккаунте</li>
                        <li>Играть с модами на серверах</li>
                    </ul>
                    <p class="overlays-item__description-text">
                        Дополнительная информация:
                    </p>
                    <ul>
                        <li>Как изменить Никнейм<br>
                            Переходим на сайт mojang.com<br>
                            Смотрим на строчку Minecraft<br>
                            Возле ника видим кнопку "Change"<br>
                            Вводим свой новый ник.</li>
                    </ul>
                    <p class="overlays-item__description-text">
                        Как изменить Скин:
                    </p>
                    <ul>
                        <li>Переходим на сайт minecraft.net<br>
                            Проходим авторизацию с помощью купленных у нас данных<br>
                            Далее в верхнем правом углу нажимаем на Ваш логин<br>
                            Выбираем пункт "PROFILE"<br>
                            Видим строку с выбором скина - выбираем скин.<br>
                            Нажимаем внизу на кнопку "Reset skin"</li>
                    </ul>


                </div>
                <form class="overlays-item__form" :style="{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%), url('+premium+') 100% 100% no-repeat', backgroundSize: 'cover'}">
                    <div class="close-btn">
                        <span class="close-btn__item"></span>
                        <span class="close-btn__item"></span>
                    </div>
                    <div class="overlays-item__form-touch">
                        <div class="overlays-item__form-touch-price">
                            <p class="overlays-item__form-touch-price__key">Цена:</p>
                            <div class="overlays-item__form-touch-price__value">
                                <p class="overlays-item__form-touch-price__value-last">119 ₽</p>
                                <p class="overlays-item__form-touch-price__value-new">119 ₽</p>
                            </div>
                        </div>
                        <p class="overlays-item__form-touch-text">Гарантия</p>
                        <div class="overlays-item__form-touch-type">

                            <img class="overlays-item__form-touch-type__sale" :src="sale" alt="">
                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item active-touch__type">
                                <div class="select-type"></div>
                                <p class="overlays-item__form-touch-type__item-text ">Без</p>
                            </div>
                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item">
                                <div class="select-type"></div>
                                <p class="overlays-item__form-touch-type__item-text ">Неделя</p>
                            </div>
                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item">
                                <div class="select-type"></div>
                                <p class="overlays-item__form-touch-type__item-text ">Месяц</p>
                            </div>
                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item">
                                <div class="select-type"></div>
                                <p class="overlays-item__form-touch-type__item-text ">Год</p>
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
                            <button>Купить за 169 ₽</button>

                        </div>
                    </div>
                </form>

            </div>
            <div class="overlays-item">
                <div class="overlays-item__description">
                    <p class="overlays-item__description-title">
                        Minecraft GOLD
                    </p>
                    <p class="overlays-item__description-text">
                        Приобретая данный товар Вы моментально получаете лицензионный аккаунт Minecraft.
                    </p>
                    <p class="overlays-item__description-text">
                        Minecraft — компьютерная инди-игра в жанре песочницы с элементами симулятора выживания и открытым миром, разработанная шведским программистом Маркусом Перссоном, известным также как «Notch» и позже выпускаемая основанной Перссоном компанией Mojang.
                    </p>
                    <p class="overlays-item__description-text">
                        Возможности товара:
                    </p>
                    <ul>
                        <li>Возможность играть на Premium серверах</li>
                        <li>Возможность смены скина на аккаунте</li>
                        <li>Играть с модами на серверах</li>
                    </ul>
                    <p class="overlays-item__description-text">
                        Менять пароль и ник запрещено.
                    </p>
                    <p class="overlays-item__description-text">
                        При смене этих данных Вы лишаетесь любой гарантии от магазина.
                    </p>


                </div>
                <form class="overlays-item__form" :style="{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%), url('+gold+') 100% 100% no-repeat', backgroundSize: 'cover'}">
                    <div class="close-btn">
                        <span class="close-btn__item"></span>
                        <span class="close-btn__item"></span>
                    </div>
                    <div class="overlays-item__form-touch">
                        <div class="overlays-item__form-touch-price">
                            <p class="overlays-item__form-touch-price__key">Цена:</p>
                            <div class="overlays-item__form-touch-price__value">
                                <p class="overlays-item__form-touch-price__value-last">119 ₽</p>
                                <p class="overlays-item__form-touch-price__value-new">119 ₽</p>
                            </div>
                        </div>
                        <p class="overlays-item__form-touch-text">Гарантия</p>
                        <div class="overlays-item__form-touch-type">

                            <img class="overlays-item__form-touch-type__sale" :src="sale" alt="">
                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item active-touch__type">
                                <div class="select-type"></div>
                                <p class="overlays-item__form-touch-type__item-text ">Без</p>
                            </div>
                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item">
                                <div class="select-type"></div>
                                <p class="overlays-item__form-touch-type__item-text ">Неделя</p>
                            </div>
                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item">
                                <div class="select-type"></div>
                                <p class="overlays-item__form-touch-type__item-text ">Месяц</p>
                            </div>
                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item">
                                <div class="select-type"></div>
                                <p class="overlays-item__form-touch-type__item-text ">Год</p>
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
                            <button :style="{background: 'linear-gradient(243.71deg, #FFD439 0%, #FFD335 0.01%, #FF9950 100%)'}">Купить за 169 ₽</button>

                        </div>
                    </div>
                </form>

            </div>

            <div class="overlays-item">
                <div class="overlays-item__description">
                    <p class="overlays-item__description-title">
                        Minecraft
                    </p>


                    <p class="overlays-item__description-text">
                        Приобретая данный товар Вы моментально получаете лицензионный аккаунт Minecraft.
                    </p>
                    <p class="overlays-item__description-text">
                        Minecraft — компьютерная инди-игра в жанре песочницы с элементами симулятора выживания и открытым миром, разработанная шведским программистом Маркусом Перссоном, известным также как «Notch» и позже выпускаемая основанной Перссоном компанией Mojang.
                    </p>
                    <p class="overlays-item__description-text">
                        Возможности товара:
                    </p>
                    <ul>
                        <li>Возможность играть на Premium серверах</li>
                        <li>Играть с модами на серверах</li>
                    </ul>
                    <p class="overlays-item__description-text">
                        Менять пароль и ник запрещено.
                    </p>
                    <p class="overlays-item__description-text">
                        При смене этих данных Вы лишаетесь любой гарантии от магазина.
                    </p>

                </div>
                <form class="overlays-item__form" :style="{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%), url('+mine+') 100% 100% no-repeat', backgroundSize: 'cover'}">
                    <div class="close-btn">
                        <span class="close-btn__item"></span>
                        <span class="close-btn__item"></span>
                    </div>
                    <div class="overlays-item__form-touch">
                        <div class="overlays-item__form-touch-price">
                            <p class="overlays-item__form-touch-price__key">Цена:</p>
                            <div class="overlays-item__form-touch-price__value">
                                <p class="overlays-item__form-touch-price__value-last">119 ₽</p>
                                <p class="overlays-item__form-touch-price__value-new">119 ₽</p>
                            </div>
                        </div>
                        <p class="overlays-item__form-touch-text">Гарантия</p>
                        <div class="overlays-item__form-touch-type">

                            <img class="overlays-item__form-touch-type__sale" :src="sale" alt="">
                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item active-touch__type">
                                <div class="select-type"></div>
                                <p class="overlays-item__form-touch-type__item-text ">Без</p>
                            </div>
                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item">
                                <div class="select-type"></div>
                                <p class="overlays-item__form-touch-type__item-text ">Неделя</p>
                            </div>
                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item">
                                <div class="select-type"></div>
                                <p class="overlays-item__form-touch-type__item-text ">Месяц</p>
                            </div>
                            <div @click="changeGaranty()" class="overlays-item__form-touch-type__item">
                                <div class="select-type"></div>
                                <p class="overlays-item__form-touch-type__item-text ">Год</p>
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
                    </div>
                </form>

            </div>
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

            changeCategory: function(){

                //let categoryBackground = document.querySelectorAll('.select-border')
                let category = document.querySelectorAll('.select-type__block-item')
                for (let i=0; i<category.length; i++){
                    category[i].onclick = function(){
                        if (i===0){
                            console.log(i)
                            category[0].className = 'select-type__block-item active-select__type'
                            category[1].className = 'select-type__block-item'
                            category[2].className = 'select-type__block-item'
                        }
                        if (i===1){
                            console.log(i)
                            category[0].className = 'select-type__block-item'
                            category[1].className = 'select-type__block-item active-select__type'
                            category[2].className = 'select-type__block-item'
                        }
                        if (i===2){
                            console.log(i)
                            category[0].className = 'select-type__block-item'
                            category[1].className = 'select-type__block-item'
                            category[2].className = 'select-type__block-item active-select__type'
                        }
                    }
                }
            },

            changeGaranty: function(){
                let forms = document.querySelectorAll('.overlays-item__form')
                for (let i=0; i<forms.length; i++){
                    let formsChangeGaranty = forms[i].querySelectorAll('.overlays-item__form-touch-type__item')
                    for (let k=0; k<formsChangeGaranty.length; k++){
                        formsChangeGaranty[k].onclick = () =>{
                            if (k===0){
                                formsChangeGaranty[0].className = 'overlays-item__form-touch-type__item active-touch__type'
                                formsChangeGaranty[1].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[2].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[3].className = 'overlays-item__form-touch-type__item'
                            }
                            if (k===1){
                                formsChangeGaranty[0].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[1].className = 'overlays-item__form-touch-type__item active-touch__type'
                                formsChangeGaranty[2].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[3].className = 'overlays-item__form-touch-type__item'
                            }
                            if (k===2){
                                formsChangeGaranty[0].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[1].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[2].className = 'overlays-item__form-touch-type__item active-touch__type'
                                formsChangeGaranty[3].className = 'overlays-item__form-touch-type__item'
                            }
                            if (k===3){
                                formsChangeGaranty[0].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[1].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[2].className = 'overlays-item__form-touch-type__item'
                                formsChangeGaranty[3].className = 'overlays-item__form-touch-type__item active-touch__type'
                            }
                        }
                    }
                }
            }
        }
    }
</script>