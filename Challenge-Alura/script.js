var botaoCriptografar = document.querySelector(".btn__criptografar");
var botaoDescriptografar = document.querySelector(".btn__descriptografar");
var imagem = document.querySelector(".container__imagen");
var conteudo = document.querySelector(".container__paragrafo");
var resultado = document.querySelector(".texto-resultado");

botaoCriptografar.onclick = criptografar;
botaoDescriptografar.onclick = descriptografar;

function criptografar(){
    esconderafrente();
    var caixa__texto = recuperarTexto()
    resultado.textContent = criptografartexto(caixa__texto);
}

function descriptografar(){
    esconderafrente();
    var caixa__texto = recuperarTexto()
    resultado.textContent = descriptografartexto(caixa__texto);
}

function recuperarTexto(){
    var caixa__texto = document.querySelector(".caixa__texto")
    return caixa__texto.value
}

function esconderafrente(){
    imagem.classList.add("ocultar");
    conteudo.classList.add("ocultar");
}

function criptografartexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function descriptografartexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var conteudo = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(conteudo);
    console.log("hola"); 
});