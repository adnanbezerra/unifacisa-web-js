import { MainPage } from "./pages/MainPage.js";

const root = document.querySelector('#root');

function clearRootHtml() {
  root.innerHTML = '';
}

function addElementToRoot(element) {
    root.innerHTML += element;
}

function changeElementsOnRoot(element) {
    root.innerHTML = element;
}

changeElementsOnRoot(MainPage());
