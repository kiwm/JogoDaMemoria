var imagens = ["gato.png", "macaco.png", "porco.png", "ovelha.png", "rinoceronte.png", "gato.png", "macaco.png", "porco.png", "ovelha.png", "rinoceronte.png", "rato.png", "rato.png"]
var primeiro = "-1"
var segundo = "-1"
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
    comparar(x)
}

function comparar(x) {
    if(primeiro == "-1") {
        primeiro = x

    } else if(segundo == "-1") {
        segundo = x

    }

    if(primeiro != "-1" && segundo != "-1") {
        
        var img1 = document.getElementById(`img${primeiro}`)
        var img2 = document.getElementById(`img${segundo}`)

        if(img1.src == img2.src) {
            img1.onclick =""   
            img2.onclick =""  
            img1.src = "branco.png"
            img2.src = "branco.png"
            primeiro = "-1"
            segundo = "-1"
        } else {
            img1.src = "fundo.png"
            img2.src = "fundo.png"
            primeiro = "-1"
            segundo = "-1"
        }     
    }
}
