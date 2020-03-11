(function(){
    const botao = document.getElementById('botao')
    botao.onclick = () => document.body.style.background = randomColor()

    function randomColor(){
        const letras = "0123456789ABCDEF"
        let cor = "#"

        console.log(letras.length)

        for(let i = 0; i < 6; i++){
            console.log(cor)
            cor += letras[Math.floor(Math.random()*16)]

        }
        return cor
    }

})()
