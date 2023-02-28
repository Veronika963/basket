let btnMinus = document.querySelector('.btn-minus');
let btnPlus = document.querySelector('.btn-plus');
let numGoods = document.querySelector('.number-text');
let price = document.querySelector('.price');
let priceInput = document.querySelector('.input-price');
let paymentButton = document.querySelector('.payment-btn');
let elModal = document.querySelector('.modal-window');
let buttonOk = document.querySelector('.btn-ok')


let a = numGoods;
a = 1;

btnMinus.addEventListener('click', () => {
    a = a - 1;
    numGoods.innerHTML = a;
});

btnPlus.addEventListener('click', () => {
    a = a + 1;
    numGoods.innerHTML = a;
    elModal.classList.add('show');
})

buttonOk.addEventListener('click', () => {
    elModal.classList.remove('show');
})


paymentButton.addEventListener('click', getN);

function getN() {
    let getPrice = priceInput.value;

    let getNum = parseInt(a);

    price.innerHTML = getPrice * getNum;
}
