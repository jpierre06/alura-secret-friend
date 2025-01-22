function normalizarTexto(texto){
    let textoNormalizado = texto.trim().toUpperCase();
    textoNormalizado = textoNormalizado.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return textoNormalizado;
}


function consultarInput(){
    let elementoInput = document.querySelector('input');
    return elementoInput.value;
    
}


function limparLista(id_lista){
    let listaAmigos = document.getElementById(id_lista);
    listaAmigos.innerHTML = '';
}


function removerAmigoEscolhido(amigoEscolhido){
    let listaAmigos = document.getElementById('listaAmigos');
    let amigoLista = Array.from(listaAmigos.children).find(li => li.textContent === amigoEscolhido);
    listaAmigos.removeChild(amigoLista);
}


function consultarAmigosCadastrados(){
    let listaAmigosHTML = document.querySelectorAll('li');
    let listaAmigos = Array.from(listaAmigosHTML, li => li.textContent);
    return listaAmigos
}


function sortearAmigoAleatorio(){  
    let amigosCadastrados = consultarAmigosCadastrados();
    let amigoSorteado = amigosCadastrados[Math.floor(Math.random() * amigosCadastrados.length)];
    return amigoSorteado;
}


function adicionarAmigo(){
    let amigosCadastrados = consultarAmigosCadastrados();
    let amigo = consultarInput();
    let amigoNormalizado = normalizarTexto(amigo);
    let amigosCadastradosNormalizados = amigosCadastrados.map(amigo => normalizarTexto(amigo));

    if (amigo ==''){
        alert('Nome inválido. informe um nome válido');
    }
    else if(amigosCadastradosNormalizados.includes(amigoNormalizado)){
        alert(`\tNome ${amigo} já está cadastrado. Informe outro nome!!!\t\n\n\tCaso tenha outro amigo com o mesmo nome, adicione um sobrenome ou apelido.\t`);   

    }
    else{
        let listaAmigos = document.getElementById('listaAmigos');
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigo;
        listaAmigos.appendChild(novoAmigo);
        document.querySelector('input').value = '';   
    }
}


function sortearAmigo(){
    let nomeListaResultado = 'resultado';
    limparLista(nomeListaResultado);

    let nomeSorteado = sortearAmigoAleatorio();

    let listaSorteado = document.getElementById(nomeListaResultado);
    let novoNome = document.createElement('li');
    novoNome.textContent = nomeSorteado;
    listaSorteado.appendChild(novoNome);

    removerAmigoEscolhido(nomeSorteado);
}

