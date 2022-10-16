function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txt-ano')
    let res =  document.getElementById('res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        let fSex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked ) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'nenem_m.jpg')
            } else if (idade < 21)  {
                img.setAttribute('src', 'jovem_m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto.jpg') 
            } else {
                img.setAttribute('src', 'velho_250.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'nenem_f.jpg')
            } else if (idade < 21)  {
                img.setAttribute('src', 'jovem_f.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta.jpg') 
            } else {
                img.setAttribute('src', 'senhora_250.jpg')   
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        img.style.borderRadius = '120px'
    }

}