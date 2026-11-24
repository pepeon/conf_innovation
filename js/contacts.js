// ymaps.ready(init);

// function init() {
//   var confFrame = document.querySelector(".conf-page");
//   var mapSwitcher = confFrame.id;
//   var pageLanguage = document.documentElement.lang;

//   var myMap = new ymaps.Map("map", {
//     center: [59.937759, 30.235429],
//     zoom: 12,
//     controls: [], // Убираем стандартные контролы из массива
//   });

//   // Добавляем zoomControl с позицией справа и компактным размером
//   var zoomControl = new ymaps.control.ZoomControl({
//     options: {
//       position: { right: 5, top: 47 },
//       size: "small",
//     },
//   });
//   myMap.controls.add(zoomControl);

//   myMap.behaviors.disable(["scrollZoom"]);

//   switch (mapSwitcher) {
//     case "full-map":
//       var myGeoObjects = new ymaps.GeoObjectCollection(
//         {},
//         {
//           preset: "islands#blueStretchyIcon",
//           strokeWidth: 4,
//           geodesic: true,
//         },
//       );
//       if (pageLanguage == "ru") {
//         myGeoObjects.add(
//           new ymaps.Placemark(
//             [59.941759, 30.230429],
//             {
//               iconCaption: "",
//               iconContent: "МФК Горный",
//               hintContent: "",
//               balloonContentHeader: "Многофункциональный комплекс «Горный»",
//               balloonContentFooter: "",
//               balloonContentBody:
//                 "<p>Россия, 199406, г. Санкт-Петербург,<br \/>Васильевский остров, ул. Наличная, д. 28\/16<\/p>",
//             },
//             {
//               preset: "islands#orangeStretchyIcon",
//             },
//           ),
//         );
//         myGeoObjects.add(
//           new ymaps.Placemark(
//             [59.928983, 30.268689],
//             {
//               iconCaption: "",
//               iconContent: "Горный университет",
//               hintContent: "",
//               balloonContentHeader: "Санкт-Петербургский горный университет",
//               balloonContentFooter: "",
//               balloonContentBody:
//                 "<p>Россия, 199406, г. Санкт-Петербург,<br \/>Васильевский остров, 22 линия д.1<\/p>",
//             },
//             {
//               preset: "islands#blueStretchyIcon",
//             },
//           ),
//         );
//       }
//       if (pageLanguage == "en") {
//         myGeoObjects.add(
//           new ymaps.Placemark(
//             [59.941759, 30.230429],
//             {
//               iconCaption: "",
//               iconContent: "MFC Gorny",
//               hintContent: "",
//               balloonContentHeader: "Multifunctional Complex «Gorny»",
//               balloonContentFooter: "",
//               balloonContentBody:
//                 "<p>28/16, Nalichnaya st., St Petersburg 199406,<br \/>Russia<\/p>",
//             },
//             {
//               preset: "islands#orangeStretchyIcon",
//             },
//           ),
//         );
//         myGeoObjects.add(
//           new ymaps.Placemark(
//             [59.928983, 30.268689],
//             {
//               iconCaption: "",
//               iconContent: "Mining University",
//               hintContent: "",
//               balloonContentHeader: "Saint Petersburg Mining University",
//               balloonContentFooter: "",
//               balloonContentBody:
//                 "<p>2, 21st Line, St Petersburg 199106,<br \/>Russia<\/p>",
//             },
//             {
//               preset: "islands#blueStretchyIcon",
//             },
//           ),
//         );
//       }
//       myMap.geoObjects.add(myGeoObjects);
//       // myMap.setBounds(myGeoObjects.getBounds());
//       break;
//     case "mfc-only":
//       if (pageLanguage == "ru") {
//         myMap.geoObjects.add(
//           new ymaps.Placemark(
//             [59.941759, 30.230429],
//             {
//               balloonContentHeader: "Многофункциональный комплекс «Горный»",
//               balloonContentBody:
//                 "<p>Россия, 199406, г. Санкт-Петербург,<br \/>Васильевский остров, ул. Наличная, д. 28\/16<\/p>",
//               balloonContentFooter: "",
//               iconContent: "МФК Горный",
//             },
//             {
//               balloonPanelMaxMapArea: 0,
//               preset: "islands#blueStretchyIcon",
//               openEmptyBalloon: true,
//             },
//           ),
//         );
//       }
//       if (pageLanguage == "en") {
//         myMap.geoObjects.add(
//           new ymaps.Placemark(
//             [59.941759, 30.230429],
//             {
//               balloonContentHeader: "Multifunctional Complex «Gorny»",
//               balloonContentBody:
//                 "<p>28/16, Nalichnaya st., St Petersburg 199406,<br \/>Russia<\/p>",
//               balloonContentFooter: "",
//               iconContent: "MFC Gorny",
//             },
//             {
//               balloonPanelMaxMapArea: 0,
//               preset: "islands#blueStretchyIcon",
//               openEmptyBalloon: true,
//             },
//           ),
//         );
//       }
//       break;
//     case "spmi-only":
//       if (pageLanguage == "ru") {
//         myMap.geoObjects.add(
//           new ymaps.Placemark(
//             [59.928983, 30.268689],
//             {
//               balloonContentHeader: "Санкт-Петербургский горный университет",
//               balloonContentBody:
//                 "<p>Россия, 199406, г. Санкт-Петербург,<br \/>Васильевский остров, 22 линия д.1<\/p>",
//               balloonContentFooter: "",
//               iconContent: "Горный университет",
//             },
//             {
//               balloonPanelMaxMapArea: 0,
//               preset: "islands#blueStretchyIcon",
//               openEmptyBalloon: true,
//             },
//           ),
//         );
//       }
//       if (pageLanguage == "en") {
//         myMap.geoObjects.add(
//           new ymaps.Placemark(
//             [59.928983, 30.268689],
//             {
//               balloonContentHeader: "Saint Petersburg Mining University",
//               balloonContentBody:
//                 "<p>2, 21st Line, St Petersburg 199106,<br \/>Russia<\/p>",
//               balloonContentFooter: "",
//               iconContent: "Mining University",
//             },
//             {
//               balloonPanelMaxMapArea: 0,
//               preset: "islands#blueStretchyIcon",
//               openEmptyBalloon: true,
//             },
//           ),
//         );
//       }
//       break;
//     default:
//       myMap.copyrights.add("© spmi.ru");
//   }

//   if (mapSwitcher !== "full-map") {
//     const myBounds = [
//       [59.92898299999101, 30.23042899999997],
//       [59.94175899999099, 30.26868899999998],
//     ];
//     myMap.setBounds(myBounds);
//   }
// }
