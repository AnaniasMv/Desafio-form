
function mais() {
    var atual = document.getElementById("total").value;
    var novo = atual - (-1);
    document.getElementById("total").value = novo;
    event.preventDefault()
}

function menos() {
    var atual = document.getElementById("total").value;
    if (atual > 0) {
        var novo = atual - 1;
        document.getElementById("total").value = novo;
        event.preventDefault()
    }
}

function resultado() {
    if (document.getElementById("react").checked) {
        var r = document.formulario.react.value;
    } else {
        var r = 0
    }
    if (document.getElementById("vue").checked) {
        var v = document.formulario.vue.value;
    } else {
        var v = 0
    }
    if (document.getElementById("angular").checked) {
        var a = document.formulario.angular.value;
    } else {
        var a = 0
    }

    var x = eval(r) + eval(v) + eval(a);
    document.formulario.som.value = x;


}

