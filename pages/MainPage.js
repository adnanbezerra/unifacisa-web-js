import { catalogo } from "../shared/files.js";
import { Modal } from "./Modal.js";

export function MainPage() {
    function renderCatalogo() {
        let catalogoHtml = '';

        catalogo.forEach((carro) => { // Primeiro método com array
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

    function renderAsQuatroMaisBaratas() {
        let catalogoHtml = '';

        catalogo.sort((a, b) => Number(a.preco) - Number(b.preco)); // Segundo método com array

        for (let i = 0; i < 4; i++) {
            catalogoHtml += `
            <div class="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg mr-4 custom-width">
                <img src="img/${catalogo[i].img}" class="w-48 h-48 object-cover rounded-lg" alt="${catalogo[i].nome}"> 
                <h3 class="text-lg font-bold mt-2">${catalogo[i].nome}</h3>
                <p class="text-sm mt-2">R$ ${catalogo[i].preco}</p>
            </div>
            `;
        }

        return catalogoHtml;
    }


    fetch('https://economia.awesomeapi.com.br/json/BRL-USD')
        .then(response => response.json())
        .then(data => {
            const dolar = data[0].bid;
            const dolarReal = document.querySelector('.dolar-real');
            dolarReal.innerHTML = `US$ ${dolar}`;
        })


    return (`
    ${Modal()}
    <h2 class="text-lg font-bold">Bem-vindo ao Outlet Mercedes Benz!</h2>
    <p class="mb-4">Confira nossos modelos disponíveis:</p>
    <div class="flex overflow-x-scroll">
        ${renderCatalogo()}
    </div>
    <div class="flex flex-col w-full items-center justify-center mt-4 bg-white p-8 rounded-lg">
        <h3 class="text-red-500 font-bold text-7xl mb-2 animate-bounce">Seu luxo a baixo custo!</h3>
        <h4 class="text-2xl font-bold text-yellow-600 mb-2">Compre já! Mercedes Benz a preços populares</h4>
        <h4 class="text-2xl font-bold">Entregamos em até 90 dias, 100% seguro e confiável</h4>
    </div>
    <h2 class="text-lg font-bold mt-4">As nossas melhores ofertas:</h2>
    <div class="flex overflow-x-scroll mt-4 mb-4">
        ${renderAsQuatroMaisBaratas()}
    </div>
    <div class="flex flex-col w-full items-center justify-center mt-4 bg-white p-8 rounded-lg">
        <h3 class="text-red-500 font-bold text-7xl mb-2 animate-bounce">É cliente internacional?!</h3>
        <h2 class="text-lg font-bold">Cotação do valor do real para o dólar:</h2>
        <p class="dolar-real"></p>
    </div>
    `);
}