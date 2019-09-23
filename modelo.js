var imagens = ["gato.png", "macaco.png", "porco.png", "ovelha.png", "rinoceronte.png", "gato.png", "macaco.png", "porco.png", "ovelha.png", "rinoceronte.png", "rato.png", "rato.png"]
function prepararJogo() {
    shuffleArray(imagens)
    for(var i = 0; i < imagens.length; ++i) {
        var img = document.getElementById(`img${i}`)
        img.src = imagens[i]
    }

    iniciarJogo()
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function iniciarJogo() {
    for(var i = 0; i < imagens.length; ++i) {
        var img = document.getElementById(`img${i}`)
        img.src = "fundo.png"
    }
}

function clicar(x) {
    var img = document.getElementById(`img${x}`)
    img.src = imagens[x]
}