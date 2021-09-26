const logo = document.querySelector('.logo')
const logoP = document.querySelector('.logo p')
let louvreSite = `https://louvre-museum.tickets-paris.fr/`

logo.onclick = function(){
    window.open(louvreSite)
    // logo.style.color = 'var(--color-gold)'
    logoP.style.color = 'var(--color-gold)'
}


// let vrCardArr = ['Royal Palace', 'Denon Wing', 'Colonnade Perrault', 'Greek hall', 'Mona Lisa', 'Night Palace']
// console.log(vrCardArr)

//перенес в data.js
// let vrCardArr = [
//     {
//         place : "Royal Palace",
//         http : "https://goo.gl/maps/Yt9eNHZqZGeJL9Wa9"
//     },
//     {
//         place : 'Denon Wing',
//         http : "https://goo.gl/maps/MT9gw4W4NBVTpDoKA"
//     },
//     {
//         place : 'Colonnade Perrault',
//         http : "https://goo.gl/maps/kEePSTpCtoZzjwjo9"
//     },
//     {
//         place : 'Greek hall',
//         http : "https://goo.gl/maps/kBoBZRm59AYoGVuq5"
//     },
//     {
//         place : 'Mona Lisa',
//         http : "https://goo.gl/maps/5jGxo9oLitQVBf1Z8"
//     },
//     {
//         place : 'Night Palace',
//         http : "https://goo.gl/maps/uoCEJ8ZcV1kuVGtF8"
//     },
// ]

// vrCardArr.forEach( item => {
//     console.log(item)
//     vrCard.innerHTML += `
//          <div class="vr-card">
//             <a href="${item.http}"> <img src="./assets/img/vr0${vrCardArr.indexOf(item)+1}.jpg" alt=""></a>
//             <h3 class="style-title">${item.place}</h3>
//             <h4>360° Virtual Tour</h4>
//             <p>Google Street Panorama View</p>
//          </div>
//     `
// })

let vrCard = document.querySelector('.vr')

vrCardArr.forEach( item => {
    vrCard.innerHTML += `
    <div class="vr-card vr-card-block">
            <a class="vr-card" href="${item.http}" target="_blank"> <img src="./assets/img/vr0${vrCardArr.indexOf(item)+1}.jpg" alt="">
                <h3 class="style-title">${item.place}</h3>
                <div class="line"></div>
                <h4>360° Virtual Tour</h4>
                <p>Google Street Panorama View</p>
            </a>
         </div>
    `
})

console.log(`
Ваша оценка - 153.5 балла 
Отзыв по пунктам ТЗ:
Частично выполненные пункты:
1) секция Video 

2) иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления 

3) в футере добавлены ссылки на соцсети. Круглая граница вокруг иконок соцсетей выполнена при помощи css 

4) можно передвигать ползунки громкости и прогресс-бара видео, при этом цвет шкалы до и после ползунка отличается и соответствует макету 

5) кнопке "Book" в форме покупки билетов добавлен ripple-эффект. Демо: https://50projects50days.com/projects/button-ripple-effect/ 

Выполненные пункты:
1) Вёрстка валидная. Для проверки валидности вёрстки используйте сервис https://validator.w3.org/. Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." 

2) header, main, footer 

3) семь элементов section (по количеству секций) 

4) только один заголовок h1 

5) семь заголовков h2 (по количеству секций) 

6) шесть заголовков h3 (по количеству карточек) 

7) два элемента nav (основная и вспомогательная панель навигации) 

8) три списка ul > li > a (основная и вспомогательная панель навигации, ссылки на соцсети) 

9) тринадцать кнопок button (четыре из них в секции Video, пять в секции Tickets, по две - стрелки слайдера и плейлиста) 

10) три тега input type="radio" (в секции Tickets) 

11) два тега input type="number"(в секции Tickets) 

12) два тега input type="range" (громкось и прогрес-бар видео) 

13) для всех элементов img указан обязательный атрибут alt 

14) блок header 

15) секция Welcome 

16) секция Visiting 

17) секция Explore 

18) секция Gallery 

19) секция Tickets 

20) секция Contacts 

21) блок footer 

22) форма плавно выдвигается слева при открытии и плавно возвращается назад при закрытии. В открытом состоянии под формой есть полупрозрачный overlay, который занимает весь экран. Форма и overlay прокручиваются вместе со страницей 

23) форма открывается при клике по кнопке Buy Now в секции Tickets и закрывается кликом по иконке с крестиком в верхнем правом углу или кликом по overlay 

24) при вёрстке формы используются следующие элементы: form, input type="date", input type="time", input type="text", input type="email", input type="tel", input type="number", select 

25) вёрстка формы соответствует макету 

26) добавлен favicon 

27) для построения сетки используются флексы или гриды 

28) при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону 

29) фоновый цвет каждого блока и секции тянется на всю ширину страницы 

30) расстояние между буквами, там, где это требуется по макету, регулируется css-свойством letter-spacing 

31) переключаются радиокнопки в блоке Tickets, одновременно может быть выбрана только одна кнопка 

32) в блоке Contacts правильно указанны ссылки на почту mailto и на телефон tel 

33) плавная прокрутка по якорям 

34) параллакс 

35) при кликам по кнопке Discover the Louvre и карточкам секции Visiting открываются полноэкранные панорамы Google Street View встроенные в страницы вашего сайта при помощи iframe 

36) изменение стиля интерактивных элементов при наведении и клике. Интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты – изменение цвета фона или шрифта, появление подчёркивания и т.д. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили, если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета 

37) обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы 

38) интерактивность при наведении карточек в секции Visiting предусматривает плавное растягивание подчёркивания заголовка карточки на всю ширину карточки 

39) интерактивность при наведении иконок социальных сетей в футере предусматривает изменение цвета иконки и круглой границы вокруг иконки на золотистый 

40) кликами по кнопкам + и - в секции Tiskets можно менять количество билетов Basic и Senior от 0 до 20 

41) при перезагрузке (обновлении) страницы картины в блоке Galery отображаются в рандомном порядке 



`)


