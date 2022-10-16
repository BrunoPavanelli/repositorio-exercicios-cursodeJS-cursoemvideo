function contar() {
    let c = document.getElementById('start')
    let fim = document.getElementById('end')
    let passo = document.getElementById('step')
    let res = document.getElementById('res')

    if (c.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        alert('Erro! Preencha todos os Campos')
        res.innerHTML = `Impossivel Contar \u{1F625}`
    } else {

        res.innerHTML = 'Contando: '
        let i = Number(c.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) {
            // Crescente
            for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += `Fim! \u{1F3C1}`
        } else if (i > f) {
            // Decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            alert(`Sem contagem. Redigite os Valores!`)
            res.innerHTML = `Impossivel Contar \u{1F625}`
        }
    }

}
