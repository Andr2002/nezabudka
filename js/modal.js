// const { json } = require("express/lib/response");

! function(e) {
    "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function(e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;) ++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function(e) {
        for (var t = this; t && 1 === t.nodeType;) {
            if (t.matches(e)) return t;
            t = t.parentNode
        }
        return null
    })
}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

    /* Записываем в переменные массив элементов-кнопок и подложку.
       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll('.busket-name'),
        overlay = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');


    /* Перебираем массив кнопок */
    modalButtons.forEach(function(item) {

        /* Назначаем каждой кнопке обработчик клика */
        item.addEventListener('click', function(e) {

            /* Предотвращаем стандартное действие элемента. Так как кнопку разные
               люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
               Нужно подстраховаться. */
            e.preventDefault();

            /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
               и будем искать модальное окно с таким же атрибутом. */
            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


            /* После того как нашли нужное модальное окно, добавим классы
               подложке и окну чтобы показать их. */
            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click

    }); // end foreach


    closeButtons.forEach(function(item) {

        item.addEventListener('click', function(e) {
            var parentModal = this.closest('.modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });

    }); // end foreach


    document.body.addEventListener('keyup', function(e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    // overlay.addEventListener('click', function() {
    //     document.querySelector('.modal.active').classList.remove('active');
    //     this.classList.remove('active');
    // });
    // ЭТО ДЛЯ ТОГО, ЧТОБЫ ОКНО ЗАКРЫВАЛОСЬ ПРИ НАЖАТИИ ГДЕ-ТО

}); // end ready

// КОРЗИНА

// var d = document,
//     itemBox = d.querySelectorAll('.card'), //блок каждого товара
//     cartCont = d.getElementById('cart_content'); //  блок вывода данных корзины(модальное окно)

// function addEvent(elem, type, handler) {
//     if (elem.addEventListener) {
//         elem.addEventListener(type, handler, false);
//     } else {
//         elem.attachEvent('on' + type, function() { handler.call(elem); });
//     }
//     return false;
// }

// //получение данных из localStorage
// function getCartData() {
//     return JSON.parse(localStorage.getItem('cart'));
// }

// //запись данных в localStorage
// function setCartData(o) {
//     localStorage.setItem('cart', JSON.stringify(o));
//     return false;
// }

// //add item to cart
// function addToCart(e) {
//     // this.disabled = true;
//     var cartData = getCartData() || {},
//         parentBox = this.parentNode,
//         itemId = this.getAttribute('data-id'),
//         itemTitle = parentBox.querySelector('.card-name').innerHTML,
//         itemPrice = parentBox.querySelector('.price').innerHTML;

//     if (cartData.hasOwnProperty(itemId)) {
//         cartData[itemId][2] += 1;
//     } else {
//         cartData[itemId] = [itemTitle, itemPrice, 1];
//     }
//     if (!setCartData(cartData)) {
//         // this.disabled = false;
//     }
//     return false;
// }

// // Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
// for (let i = 0; i < itemBox.length; i++) {
//     addEvent(itemBox[i].querySelector('.buy-btn'), 'click', addToCart)
// }

// // Открываем корзину со списком добавленных товаров
// function openCart(e) {
//     let cartData = getCartData(),
//         totalItems = '';
//     // если что-то в корзине уже есть, начинаем формировать данные для вывода
//     if (cartData !== null) {
//         totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
//         for (var items in cartData) {
//             totalItems += '<tr>';
//             for (var i = 0; i < cartData[items].length; i++) {
//                 totalItems += '<td>' + cartData[items][i] + '</td>';
//             }
//             totalItems += '</tr>';
//         }
//         totalItems += '</table>';
//         cartCont.innerHTML = totalItems;
//     } else {
//         // если в корзине пусто, то сигнализируем об этом
//         cartCont.innerHTML = 'В корзине пусто!';
//     }
//     return false;
// }
// /* Открыть корзину */
// addEvent(d.getElementById('checkout'), 'click', openCart);
// /* Очистить корзину */
// addEvent(d.getElementById('clear_cart'), 'click', function(e) {
//     localStorage.removeItem('cart');
//     cartCont.innerHTML = 'Корзина очищена.';
// });