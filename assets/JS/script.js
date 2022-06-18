//Criação dos checkbox
var div = document.getElementById('div')
var adesivos = ['React', 'Vue', 'Angular']
for (i in adesivos) {
    let rd = document.createElement('input')
    let nome = document.createElement('label')
    rd.type = 'checkbox'
    div.append(rd)
    rd.appendChild(nome)
    div.appendChild(nome)
    nome.setAttribute('for', rd)
    nome.innerHTML = adesivos[i]

}

//Funções dos novos botões do contador
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

//Tabular com Enter
function tabularComEnter(e) {
    if (e.keyCode == 13) {
        if ((e.target.type != 'submit') || (e.target.tagName != 'BUTTON')) {
            e.preventDefault();
        }

        let frm = document.forms;
        let foco = document.activeElement;
        for (let i in frm) {
            for (let j in frm[i]) {
                if (frm[i][j] === foco) {
                    frm[i][parseInt(j) + 1].focus();
                    break;
                }
            }
        }
    }

}