function contadora() {
    let c = window.document.getElementById('start')
    let fim = window.document.getElementById('end')
    let passo = window.document.getElementById('step')
    resultado.innerHTML = 'Contando ...'

    do {
        resultado.innerHTML = `${c}`
        c + passo
    }  while (c <= fim)

}

