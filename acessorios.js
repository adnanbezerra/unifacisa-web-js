function mostrarAcessorios() {
    
    const lista = ['Spray limpeza', 'Silicone para couro', 'Câmera de ré', 'Sensor de estacionamento', 'Capa para banco'];
    
    // Obtém o elemento UL no HTML onde a lista será exibida
    const listaElement = document.getElementById('lista');
    
    // Limpa a lista existente (caso já tenha sido exibida antes)
    listaElement.innerHTML = '';
    
    // Itera sobre cada item na lista
    lista.forEach(item => {
        // Cria um novo elemento LI para cada item
        const li = document.createElement('li');
        // Define o texto do LI como o item atual da lista
        li.textContent = item;
        // Adiciona o LI ao UL
        listaElement.appendChild(li);
    });

    function adicionarAcessorio() {
        // Obtém o valor do campo de entrada
        const novoAcessorio = document.getElementById('novoAcessorio').value;
        
        // Verifica se o campo de entrada não está vazio
        if (novoAcessorio.trim() !== '') {
            // Obtém o elemento UL no HTML onde a lista será exibida
            const listaElement = document.getElementById('listaCompras');
            
            // Cria um novo elemento LI para o novo acessório
            const li = document.createElement('li');
            // Define o texto do LI como o novo acessório
            li.textContent = novoAcessorio;
            // Adiciona o LI ao UL
            listaElement.appendChild(li);
            
            // Limpa o campo de entrada
            document.getElementById('novoAcessorio').value = '';
        } else {
            // Se o campo de entrada estiver vazio, exibe um alerta
            alert('Por favor, digite um acessório.');
        }
    }
}