import { MainPage } from "./pages/MainPage.js";

const root = document.querySelector('#root');

changeElementsOnRoot(MainPage());

const modalHtml = document.getElementById('modal');

function openModal() {
    modalHtml.style.display = 'flex';
}

let hasOpened = false;

window.addEventListener('scroll', function () {
    const scrollHeight = window.scrollY;

    if (scrollHeight >= 156 && !hasOpened) {
        openModal();
        hasOpened = true;
    }
});

document.getElementById('closeModal').addEventListener('click', function() {
    modalHtml.style.display = 'none';
});

function changeElementsOnRoot(element) {
    root.innerHTML = element;
}
