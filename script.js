setInterval(
    function carregar(){
        let msg = document.getElementById('msg')
        let img = document.getElementById('imagem')
        let data = new Date()
        let hora = data.getHours()
        let minutes = data.getMinutes()
        let second = data.getSeconds()

        if(second < 10){
            second = '0' + second
        }
        if(minutes < 10){
            minutes = '0' + minutes
        }
        if(hora < 10){
            hora = '0' + hora
        }
        
        
        msg.innerHTML = `Agora são ${hora} : ${minutes} : ${second} `

    
        if(hora >= 0 && hora < 12){
            img.src = './imagens/manha.jpg'
            document.body.style.background = '#e2cd9f'
        }
        else if(hora >= 12 && hora < 18){
            img.src = './imagens/tarde.jpg'
            document.body.style.background = '#b9846f'
        }
        else{
            img.src = './imagens/noite.jpg'
            document.body.style.background = '#515154'
        }
    } , 1000
)
