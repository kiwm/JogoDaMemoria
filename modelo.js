var imagens = ["gato.png", "macaco.png", "porco.png", "ovelha.png", "rinoceronte.png", "gato.png", "macaco.png", "porco.png", "ovelha.png", "rinoceronte.png", "rato.png", "rato.png"]
var primeiro = null
var segundo = null
var contador = 0
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

    setTimeout(cobrir, 800);
    function cobrir() {
        for(var i = 0; i < imagens.length; ++i) {
            var img = document.getElementById(`img${i}`)
            img.src = "fundo.png"
        }
      }
}

function clicar(x) {
    var img = document.getElementById(`img${x}`)
  
    img.src = imagens[x]
    comparar(x)
}

function finalizarJogo() {
    if(contador > 5) {
        if(confirm("Parabéns, deseja jogar novamente?")) {
            parent.window.document.location.href = '';
        }
    }
}

function comparar(x) {
    if(primeiro == null) {
        primeiro = x

    } else if(segundo == null) {
        segundo = x

    }

    if(primeiro != null && segundo != null) {
        
        var img1 = document.getElementById(`img${primeiro}`)
        var img2 = document.getElementById(`img${segundo}`)

        if(img1.src == img2.src) {
            setTimeout(mostarImagemCerta, 200)
            function mostarImagemCerta() {
                img1.onclick =""   
                img2.onclick =""  
                img1.src = "branco.png"
                img2.src = "branco.png"
                primeiro = null
                segundo = null
                ++contador
              }
              setTimeout(finalizarJogo, 400)
        } else {
            setTimeout(mostarImagemErrada, 400)
            function mostarImagemErrada() {
                img1.src = "fundo.png"
                img2.src = "fundo.png"
                primeiro = null
                segundo = null
              }
        }     
    }
}
