const { adicionarAcessorio } = require('./acessorios'); // Importando a função adicionarAcessorio

// Mock do documento HTML para simular interações
beforeEach(() => {
    document.body.innerHTML = `
        <input type="text" id="novoAcessorio" value="">
        <ul id="listaCompras"></ul>
    `;
});

// Mock da função alert para capturar mensagens de alerta
global.alert = jest.fn();

describe('Testes para funções de acessórios', () => {
    // Teste para a função adicionarAcessorio
    test('Adicionar acessório válido à lista de compras', () => {
        // Definindo o valor do input
        document.getElementById('novoAcessorio').value = 'Spray limpeza';

        // Executando a função
        adicionarAcessorio();

        // Verificando se o acessório foi adicionado à lista de compras
        const listaCompras = document.getElementById('listaCompras');
        expect(listaCompras.children.length).toBe(1);
        expect(listaCompras.children[0].textContent).toBe('Spray limpeza');
    });

    // Teste para adicionar acessório não disponível
    test('Tentar adicionar acessório não disponível', () => {
        // Definindo um acessório não disponível
        document.getElementById('novoAcessorio').value = 'Chaveiro';

        // Executando a função
        adicionarAcessorio();

        // Verificando se o alerta foi chamado com a mensagem correta
        expect(alert).toHaveBeenCalledWith('Este acessório não está disponível.');
    });

    // Teste para adicionar acessório vazio
    test('Tentar adicionar acessório vazio', () => {
        // Definindo o valor do input vazio
        document.getElementById('novoAcessorio').value = '';

        // Executando a função
        adicionarAcessorio();

        // Verificando se o alerta foi chamado com a mensagem correta
        expect(alert).toHaveBeenCalledWith('Por favor, digite um acessório.');
    });
});

// Limpar o documento após os testes
afterEach(() => {
    document.body.innerHTML = '';
});