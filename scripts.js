import { MainPage } from "./pages/MainPage.js";

const root = document.querySelector('#root');

changeElementsOnRoot(MainPage());

const modalHtml = document.getElementById('modal');

function openModal() {
    modalHtml.style.display = 'flex';
}

function closeModal() {
    modalHtml.style.display = 'none';
}

function clearRootHtml() {
    root.innerHTML = '';
}

function addElementToRoot(element) {
    root.innerHTML += element;
}

window.addEventListener('scroll', function () {
    const scrollHeight = window.scrollY;
    const totalHeight = document.body.scrollHeight;

    if (scrollHeight > totalHeight / 6) {
        console.log('Scrolling');
        openModal();
    }
});

function changeElementsOnRoot(element) {
    root.innerHTML = element;
}

// sensor de ré, multimidia, silicone para couro, spray de limpeza, descanso de cabeça com tela






