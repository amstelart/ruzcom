ymaps.ready(function () {
    var myMap = new ymaps.Map('coverage-map', {
            center: [54.714737, 42.661363],
            zoom: 6
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemarkMoscow = new ymaps.Placemark([55.755773, 37.617761], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-icon.png',
            // Размеры метки.
            iconImageSize: [34, 47],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-17, -64]
        }),

        myPlacemarkKursk = new ymaps.Placemark([51.730361, 36.192647], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-icon.png',
            // Размеры метки.
            iconImageSize: [34, 47],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-17, -64]
        }),

        myPlacemarkBryansk = new ymaps.Placemark([53.2434, 34.364198], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-icon.png',
            // Размеры метки.
            iconImageSize: [34, 47],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-17, -64]
        }),

        myPlacemarkTambov = new ymaps.Placemark([52.721246, 41.452238], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-icon.png',
            // Размеры метки.
            iconImageSize: [34, 47],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-17, -64]
        }),

        myPlacemarkBryansk = new ymaps.Placemark([53.2434, 34.364198], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-icon.png',
            // Размеры метки.
            iconImageSize: [34, 47],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-17, -64]
        }),

        myPlacemarkNizhny_Novgorod = new ymaps.Placemark([56.323902, 44.002267], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-icon.png',
            // Размеры метки.
            iconImageSize: [34, 47],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-17, -64]
        }),

        myPlacemarkTula = new ymaps.Placemark([54.193033, 37.617752], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-icon.png',
            // Размеры метки.
            iconImageSize: [34, 47],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-17, -64]
        });

    myMap.geoObjects
        .add(myPlacemarkMoscow)
        .add(myPlacemarkTula)
        .add(myPlacemarkKursk)
        .add(myPlacemarkTambov)
        .add(myPlacemarkNizhny_Novgorod)
        .add(myPlacemarkBryansk);
});
