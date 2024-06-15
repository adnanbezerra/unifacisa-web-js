const listaAcessoriosDisponiveis = [
    'Spray limpeza',
    'Silicone para couro',
    'Câmera de ré',
    'Sensor de estacionamento',
    'Capa para banco',
    'Kit camera de re',
    'Aerofolio',
    'KitFogo'
];

function mostrarAcessorios() {
    const listaElement = document.getElementById('lista');
    
    // Limpar a lista antes de preencher
    listaElement.innerHTML = '';
    
    // Preencher a lista com os acessórios disponíveis
    listaAcessoriosDisponiveis.forEach(item => {
        const li = document.createElement('li');  
        li.textContent = item;
        listaElement.appendChild(li);
    });
}

function adicionarAcessorio() {
    const novoAcessorio = document.getElementById('novoAcessorio').value.trim().toLowerCase();
    
    if (novoAcessorio !== '') {
        // Verificar se o acessório está na lista de acessórios disponíveis (tudo em minúsculas)
        const listaAcessoriosDisponiveisLowerCase = listaAcessoriosDisponiveis.map(acessorio => acessorio.toLowerCase());
        
        if (listaAcessoriosDisponiveisLowerCase.includes(novoAcessorio)) {
            const listaElement = document.getElementById('listaCompras');
            const li = document.createElement('li');
            // Adicionar o acessório com a mesma capitalização da lista original
            const acessorioOriginal = listaAcessoriosDisponiveis[listaAcessoriosDisponiveisLowerCase.indexOf(novoAcessorio)];
            li.textContent = acessorioOriginal;
            listaElement.appendChild(li);
            document.getElementById('novoAcessorio').value = '';
        } else {
            alert('Este acessório não está disponível.');
        }
    } else {
        alert('Por favor, digite um acessório.');
    }
}

