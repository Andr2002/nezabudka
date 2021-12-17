let buttons = document.querySelectorAll('.buy-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let id = button.dataset.id;
        let parent = button.closest('.card');
        let name = parent.querySelector('.card-name');
        let price = parent.querySelector('.price');
        //#region Картинка
        // let img = parent.getElementsByTagName('img');
        // var win = window.open('/', 'example', 'width=400,height=400');
        // win.document.write(`ID товара - ${id}
        // <br>Наименование товара - ${name.textContent}
        // <br>Цена - ${parseInt(price.textContent)}
        // <br><img src="${img[0].currentSrc}" class="card-img">
        // <style>
        // .card-img{
        //     width: 300;
        //     height: 340px;
        //     object-fit: contain;
        // }
        // </style>`);
        //#endregion
        console.log(`ID товара - ${id}\nНаименование товара - ${name.textContent}\nЦена - ${parseInt(price.textContent)}`);
    });
});
/*
let btn = document.querySelector('[data-id="rf-1"]');
let item = document.querySelector('.card-name');
let price = document.querySelector('.price');

btn.addEventListener('click', () => {
    // console.log('click');
    item.innerText = 'change';
});
// let item = document.querySelector('.card-name').textContent;
// let price = document.querySelector('.price').textContent.substring(0, 4);
// console.log(Number(price));

console.log(`Товар - ${item.textContent}\nЦена - ${parseInt(price.textContent.substring(0, 4))}`);


window.addEventListener('click', (event) => {
    for (let i = 0; i < document.querySelector('.cards').children.length; i++) { //  document.querySelector('.cards').children.length - получаем количество дочерних элементов
        if (event.target.dataset.id === `rf-${i+1}`) {
            const el = event.target.closest('.card'); //  нашли родителя
            let itemName = el.querySelector('.card-name');
            let itemPrice = el.querySelector('.price');
            console.log(`${itemName.textContent}\n${itemPrice.textContent.slice(0, -2)}`);
        }
    }
});
*/