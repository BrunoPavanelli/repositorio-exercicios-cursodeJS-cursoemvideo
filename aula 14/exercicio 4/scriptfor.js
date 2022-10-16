function contadora() {
    let c = document.getElementById('start')
    let fim = document.getElementById('end')
    let passo = c + document.getElementById('step')

    for (c; c <= fim; passo) {
        resultado.innerHTML = `Contando ${c}`
    }
}

