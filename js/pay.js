let select = document.getElementById('pay');
select.addEventListener('change', () => {
    pay(select.value);
});

let orderBtn = document.querySelector('.order-btn');
orderBtn.addEventListener('click', () => {
    window.location = 'order.html';
});

function pay(value) {
    switch (value) {
        case '0':
            document.getElementById(`pay-1`).style.display = 'none';
            document.getElementById('pay-2').style.display = 'none';
            document.getElementById('pay-3').style.display = 'none';
            document.getElementById('pay-4').style.display = 'none';
            break;

        case '1':
            document.getElementById(`pay-1`).style.display = 'block';
            document.getElementById('pay-2').style.display = 'none';
            document.getElementById('pay-3').style.display = 'none';
            document.getElementById('pay-4').style.display = 'none';
            break;

        case '2':
            document.getElementById(`pay-2`).style.display = 'block';
            document.getElementById('pay-1').style.display = 'none';
            document.getElementById('pay-3').style.display = 'none';
            document.getElementById('pay-4').style.display = 'none';
            break;

        case '3':
            document.getElementById(`pay-3`).style.display = 'block';
            document.getElementById('pay-2').style.display = 'none';
            document.getElementById('pay-1').style.display = 'none';
            document.getElementById('pay-4').style.display = 'none';
            break;

        case '4':
            document.getElementById(`pay-4`).style.display = 'block';
            document.getElementById('pay-2').style.display = 'none';
            document.getElementById('pay-3').style.display = 'none';
            document.getElementById('pay-1').style.display = 'none';
            break;
    }
}