const { adicionarAcessorio } = require('./acessorios');

beforeEach(() => {
    document.body.innerHTML = `
        <input type="text" id="novoAcessorio" value="">
        <ul id="listaCompras"></ul>
    `;
});

global.alert = jest.fn();

describe('Testes para funções de acessórios', () => {

    test('Adicionar acessório válido à lista de compras', () => {

        document.getElementById('novoAcessorio').value = 'Spray limpeza';


        adicionarAcessorio();


        const listaCompras = document.getElementById('listaCompras');
        expect(listaCompras.children.length).toBe(1);
        expect(listaCompras.children[0].textContent).toBe('Spray limpeza');
    });


    test('Tentar adicionar acessório não disponível', () => {

        document.getElementById('novoAcessorio').value = 'Chaveiro';

        adicionarAcessorio();

        expect(alert).toHaveBeenCalledWith('Este acessório não está disponível.');
    });

    test('Tentar adicionar acessório vazio', () => {
        document.getElementById('novoAcessorio').value = '';

        adicionarAcessorio();

        expect(alert).toHaveBeenCalledWith('Por favor, digite um acessório.');
    });
});

afterEach(() => {
    document.body.innerHTML = '';
});