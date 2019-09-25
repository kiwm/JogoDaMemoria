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
    
    document.getElementById("div1").style.display = 'block';
    setTimeout(cobrir, 1000);
    function cobrir() {
        for(var i = 0; i < imagens.length; ++i) {
            var img = document.getElementById(`img${i}`)
            img.src = "fundo.png"
        }
      }
      document.getElementById("btn1").style.display = 'none';
}

function clicar(x, index) {
    x.src = imagens[index]
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

        if(primeiro.src == segundo.src && primeiro != segundo) {
            setTimeout(mostarImagemCerta, 200)
            function mostarImagemCerta() {
                primeiro.onclick =""   
                segundo.onclick =""
                primeiro.src = "branco.png"
                segundo.src = "branco.png"
                primeiro = null
                segundo = null
                ++contador
              }
              setTimeout(finalizarJogo, 400)
        } else {
            setTimeout(mostarImagemErrada, 400)
            function mostarImagemErrada() {
                primeiro.src = "fundo.png"
                segundo.src = "fundo.png"
                primeiro = null
                segundo = null
              }
        }     
    }
}
