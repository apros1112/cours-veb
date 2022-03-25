//alert("Hello JS");


//alert(a);
function guess() {
    var a = prompt("введите число:");
    if (a > 5) {
        alert("чилсо должно быть меньше");
        return guess();
    } else if (a == 5) {
        return alert("КЛОУН");
    } else {
        alert(" число должно буть больше");
        return guess();
    }
}
//guess();

function timer() {
    alert("ты здесь слишком долго");
}

//setTimeout(timer, 3000);

function valid() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    var reg_name = /^[а-яa-zё]+$/i;
  var reg_password = /^[a-z0-9]{5,100}/i;
    if (reg_name.test(name) == false) {
        alert("ошибка в твоем имени, либо же в тебе(");
    }
    if (reg_name.test(password) == false) {
        alert("ошибка в твоем пароле, либо же в тебе(");
    }

}
document.querySelector(".button").addEventListener("click", valid);
