// var _name = "Andrey";
// var _city = "Ekaterinburg";
// var _number = "+79122939297";

// var user = {
//     "id": 1,
//     "name": _name,
//     "city": _city,
//     "number": _number
// };

// document.write(user.name + "<br>" + user.city + "<br>" + user.number);
function check() {

    let name = document.getElementById("input-name").value;
    let city = document.getElementById("input-city").value;
    let number = document.getElementById("input-number").value;

    let user = {
        "name": name,
        "city": city,
        "number": number
    }

    document.write(user.name + "<br>" + user.city + "<br>" + user.number);

}
// const inputs = document.querySelectorAll('input')

// let user = [];

// for (let i = 0; i < inputs.length; i++) {
//     user.push([inputs[i].value, inputs[++i].value, inputs[i + 2]])
// }

// const data = Object.fromEntries(user)

// document.write(user[0])