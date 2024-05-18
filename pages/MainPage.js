export function MainPage() {
    const catalogo = [
        {
            nome: 'Mercedes AMG GT Azul',
            img: 'mercedes1.jpg',
            preco: '5'
        },
        {
            nome: 'Mercedes SLS Preta',
            img: 'mercedes2.jpg',
            preco: '10'
        },
        {
            nome: 'Mercedes SLK Preta',
            img: 'mercedes3.jpg',
            preco: '3'
        },
        {
            nome: 'Mercedes 250S Vermelho',
            img: 'mercedes4.jpg',
            preco: '20'
        },
        {
            nome: 'Mercedes Uno Branco',
            img: 'mercedes5.jpg',
            preco: '2,50'
        },
        {
            nome: 'Mercedes E320 Preto',
            img: 'mercedes6.jpg',
            preco: '5'
        },
        {
            nome: 'Mercedes-Benz S550 lwb black',
            img: 'mercedes7.jpg',
            preco: '10'
        },
        {
            nome: 'mercedes a38 amg',
            img: 'mercedes8.jpg',
            preco: '1'
        }
    ];

    function renderCatalogo() {
        let catalogoHtml = '';

        catalogo.forEach((carro) => {
            catalogoHtml += `
            <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg mr-4 custom-width">
                <img src="img/${carro.img}" class="w-48 h-48 object-cover rounded-lg" alt="${carro.nome}"> 
                <h3 class="text-lg font-bold mt-2">${carro.nome}</h3>
                <p class="text-sm mt-2">R$ ${carro.preco}</p>
            </div>
            `;
        });

        return catalogoHtml;
    }
    
    return (`
    <h2 class="text-lg font-bold">Bem-vindo ao Outlet Mercedes Barata!</h2>
    <p class="mb-4">Confira nossos modelos disponíveis:</p>
    <div class="flex overflow-x-scroll no-scrollbar">
    ${renderCatalogo()}
    </div>
    `);
}