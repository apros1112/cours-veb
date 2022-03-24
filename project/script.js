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
guess();
