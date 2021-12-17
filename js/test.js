const productsBtn = document.querySelectorAll('.buy-btn');
// console.log(productsBtn);
const cartProductsList = document.querySelector('.cart-content__list');
const cartContent = document.querySelector('.cart-content');
const fullPrice = document.querySelector('.fullprice');
let price = 0;

const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
    return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
    return price -= currentPrice;
};

const printFullPrice = () => {
    fullPrice.textContent = `${normalPrice(price)} ₽`;
};

const generateCartProduct = (title, price, id) => {
    return `
    <li class="cart-content__item">
    <article class="cart-content__product cart-product" data-id="${id}">
    <div class="cart-product__text">
    <h3 class="cart-product__title">${title}</h3>
    
    <span class="cart-product__price">${normalPrice(price)}</span>
    </div>
    <button class="cart-product__delete" aria-label="Удалить товар"></button>
    </article>
    </li>
    `;
};

const deleteProducts = (productParent) => {

    let id = productParent.querySelector('.cart-product').dataset.id;
    document.querySelector(`.cards[data-id="${id}"]`).querySelector('.buy-btn').disabled = false;


    let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-product__price').textContent));
    minusFullPrice(currentPrice);
    printFullPrice();
    productParent.remove();

};

productsBtn.forEach(el => {
    el.closest('.cards').setAttribute('data-id', randomId());

    el.addEventListener('click', (e) => {
        let self = e.currentTarget;
        let parent = self.closest('.cards');
        let id = parent.dataset.id;
        // let img = parent.querySelector('.product__img').getAttribute('src');
        let title = parent.querySelector('.card-name').textContent;

        let priceString = priceWithoutSpaces(parent.querySelector('.price').textContent);
        let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.price').textContent));

        plusFullPrice(priceNumber);

        printFullPrice();

        cartProductsList.querySelector('.modal').insertAdjacentHTML('afterbegin', generateCartProduct(title, priceString, id));
        printQuantity();


        self.disabled = true;
    });
});