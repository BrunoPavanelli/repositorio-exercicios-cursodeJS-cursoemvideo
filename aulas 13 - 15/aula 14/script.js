function carregar() {
let msg = window.document.getElementsById("msg")
let img = window.document.getElementsById("imagem")
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 6 && hora < 12) {
    //bomdia
    img.src = 'manha_250'
} else if (hora < 18) {
    //boatarde
    img.src = 'tarde_250'
} else {
    //boanoite
    img.src = 'noite_250'
}
}