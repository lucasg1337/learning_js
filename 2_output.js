function changeContent1(){
    document.getElementById("demo1").innerHTML = "DEU TUDO CERTO  ! ! !";//modo comum de mostrar dados em JS 
}

function changeContent2(){
    document.write("Usamos a função/métodoo write() com sucesso!!!");
    window.alert("Conteudo HTML apagado!");//uso da função windows.alert() -- abre um janela de aviso
    console.log("frase que será exiibida somente no console do navegador...");// aqui a saida só é visivel ao browser console
}