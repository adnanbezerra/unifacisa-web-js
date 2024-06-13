export function Modal() {
    return (`
        <div id="modal" class="hidden fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-slate-200/50 shadow-xl justify-center items-center">
            <div class="bg-white p-4 w-full border-2 justify-center items-center w-2/3 h-4/5 rounded-md flex flex-col">
                <h1 class="font-bold text-5xl text-red-600">AGUARDE UM POUCO!</h1>
                <h2 class="text-2xl">Fizemos uma oferta especial só para você:</h2>
            </div>
        </div>
    `)
}
