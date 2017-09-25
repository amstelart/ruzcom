ymaps.ready(function() {
	if (document.getElementById('contacts__map_01')) {
		var myMap_01 = new ymaps.Map('contacts__map_01', {
			center: [55.589285, 37.911447],
			zoom: 16
		});

		myMap_01.geoObjects
			.add(new ymaps.Placemark([55.589285, 37.911447], {
				balloonContent: 'цвет <strong>голубой</strong>',
				iconCaption: '6-й микрорайон, с4А'
			}, {
				preset: 'islands#redCircleDotIconWithCaption',
				iconCaptionMaxWidth: '130'
			}));
	}

	if (document.getElementById('contacts__map_02')) {
		var myMap_02 = new ymaps.Map('contacts__map_02', {
			center: [55.589447, 37.912840],
			zoom: 16
		});

		myMap_02.geoObjects
			.add(new ymaps.Placemark([55.589447, 37.912840], {
				balloonContent: 'цвет <strong>голубой</strong>',
				iconCaption: 'улица Степана Степанова, 9Г'
			}, {
				preset: 'islands#redCircleDotIconWithCaption',
				iconCaptionMaxWidth: '200'
			}));
	}
});
