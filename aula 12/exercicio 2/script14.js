function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 5 && hora < 12) {
        //bomdia
        img.src = 'manha_250.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        //boatarde
        img.src = 'manha_250.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //boanoite
        img.src = 'noite_250.jpg'
        document.body.style.background = '#515154'
    }
}