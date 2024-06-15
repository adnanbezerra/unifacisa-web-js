export function Modal() {
    return (`
        <div id="modal" class="hidden fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-slate-200/50 shadow-xl justify-center items-center">
            <div class="bg-white p-6 w-full border-2 justify-center items-center w-2/3 h-4/5 rounded-md flex flex-col">
                <div class="grid w-full justify-items-end hover:cursor-pointer" id="closeModal">
                    <div>x</div>
                </div>
                <h1 class="font-bold text-5xl text-red-600">AGUARDE UM POUCO!</h1>
                <h2 class="text-2xl">Fizemos uma oferta especial só para você:</h2>
                <img src="img/mercedes1.jpg" class="w-96 h-96 object-cover rounded-lg" alt="Mercedes Benz">
                <h3 class="text-lg font-bold mt-2">Custando apenas</h3>
                <p class="text-3xl text-red-600 font-bold">R$ 3</p>
                <a href="https://wa.me/5583981991617?text=Olá, eu gostaria de comprar uma mercedes por apenas 3 reais!" target="_blank">
                    <button class="bg-red-600 text-white font-bold p-2 mt-4 rounded-md hover:bg-red-800">Comprar</button>
                </a>
            </div>
        </div>
    `)
}
