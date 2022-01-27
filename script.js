var textoEscrito = document.querySelector(".text-input");

var mensajeEncriptado = document.querySelector("#msg");

var btnCopiar = document.querySelector("#btn-copy");

var btnEncripto = document.querySelector("#btn-encriptar");

var btnDesencripto = document.querySelector("#btn-desencriptar");


btnEncripto.addEventListener("click",function(event){

    event.preventDefault();

    texto = textoEscrito.value;
    textoEncriptado = texto.replaceAll("e", "enter");
    textoEncriptado = textoEncriptado.replaceAll("i", "imes");
    textoEncriptado = textoEncriptado.replaceAll("a", "ai");
    textoEncriptado = textoEncriptado.replaceAll("o", "ober");
    textoEncriptado = textoEncriptado.replaceAll("u", "ufat");
    
    mensajeEncriptado.value = textoEncriptado;
    textoEscrito.value = "";
    
}
);
btnDesencripto.addEventListener("click",function(event){

    event.preventDefault();

    texto = mensajeEncriptado.value;
    textoDesencriptado = texto.replaceAll("enter", "e");
    textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
    textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");
    textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
    textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");

   
    textoEscrito.value = textoDesencriptado;
    mensajeEncriptado.value = "";

}
);
btnCopiar.addEventListener("click",function(event){

    navigator.clipboard.writeText(mensajeEncriptado.value);
    mensajeEncriptado.value = "";
    textoEscrito.focus();

    alert("texto copiado correctamente");
    
}
);