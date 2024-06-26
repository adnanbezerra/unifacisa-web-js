const listaAcessoriosDisponiveis = [
    { img: 'SprayDeLimpezaParaMercedesBarata.jpg', name: 'Spray limpeza', price: 10500 },
    { img: 'SiliconeParaMercedesBarata.jpg', name: 'Silicone para couro', price: 20000 },
    { img: 'KitCameraDeReParaMercedesBarara.jpg', name: 'Câmera de ré', price: 470000 },
    { img: 'SensorDeEstacionamentoMercedesBarata.webp', name: 'Sensor de estacionamento', price: 45000 },
    { img: 'CapaDeBancoParaMercedesBarata.webp', name: 'Capa para banco', price: 1000000 },
    { img: 'SensorDeEstacionamentoMercedesBarata.webp', name: 'Sensor de ré', price: 270982 },
    { img: 'AerofolioMercedesBarata.webp', name: 'Aerofolio', price: 129376 },
    { img: 'KitFogoMassaDaMercedesBarata.webp', name: 'KitFogo', price: 58967 }
];

function mostrarAcessorios() {
    const listaElement = document.getElementById('lista');

    // Limpar a lista antes de preencher
    listaElement.innerHTML = '';

    // Preencher a lista com os acessórios disponíveis
    listaAcessoriosDisponiveis.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
        <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg mr-4 custom-width">
            <img src="img/${item.img}" class="w-48 h-48 object-cover rounded-lg" alt="${item.name}">
            <span class="ml-2">${item.name}</span>
            <p class="text-sm mt-2">R$ ${item.price}</p>
        </div>
        `;
        listaElement.appendChild(li);
    });
}

function adicionarAcessorio() {
    const novoAcessorio = document.getElementById('novoAcessorio').value.trim().toLowerCase();

    if (novoAcessorio !== '') {
        // Verificar se o acessório está na lista de acessórios disponíveis (tudo em minúsculas)
        const listaAcessoriosDisponiveisLowerCase = listaAcessoriosDisponiveis.map(acessorio => acessorio.name.toLowerCase());

        if (listaAcessoriosDisponiveisLowerCase.includes(novoAcessorio)) {
            const listaElement = document.getElementById('listaCompras');
            const li = document.createElement('li');
            // Adicionar o acessório com a mesma capitalização da lista original
            const acessorioOriginal = listaAcessoriosDisponiveis[listaAcessoriosDisponiveisLowerCase.indexOf(novoAcessorio)];
            li.innerHTML = `
            <div class="flex flex-col w-40 items-center p-4 bg-gray-100 rounded-lg shadow-lg mr-4 custom-width">
                <img src="img/${acessorioOriginal.img}" class="w-48 h-48 object-cover rounded-lg" alt="${acessorioOriginal.name}">
                <span class="ml-2">${acessorioOriginal.name}</span>
                <p class="text-sm mt-2">R$ ${acessorioOriginal.price}</p>
            </div>`
            listaElement.appendChild(li);
            document.getElementById('novoAcessorio').value = '';
        } else {
            alert('Este acessório não está disponível.');
        }
    } else {
        {
            alert('Por favor}, digite um acessório.');
        }
    }
}
//Exportar a função adicionarAcessorio
module.exports = { adicionarAcessorio };