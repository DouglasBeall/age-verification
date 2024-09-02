function calcular(){
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById("anoNasc");
    let res = document.getElementById("res");
    let imagem = document.getElementById("imagem");
    if(Number(fano.value.length == 0) || Number(fano.value > ano)){
        alert("[ERRO] Verifique os dados e tente novamente!")
    }else{
        let fsex = document.getElementsByName("radsex");
        let idade = ano - Number(fano.value);
        let genero = '';
        

        if (fsex[0].checked){
            genero = "Homem"

            if (idade >= 0 && idade < 10){
                // Criança
                imagem.src = "img/fotocrianca-mas.jpg"
            }else if (idade < 21){
                // Jovem
                imagem.src = "img/fotojovem-mas.jpg"
            }else if (idade < 50){
                // Adulto
                imagem.src = "img/fotoadulto-mas.jpg"
            }else{
                // Idoso
                imagem.src = "img/fotoidoso-mas.jpg"
            }
        }else if (fsex[1].checked){
            genero = "Mulher"

            if (idade >= 0 && idade < 10){
                // Criança
                imagem.src = "img/fotocrianca-fem.jpg"
            }else if (idade < 21){
                // Jovem
                imagem.src = "img/fotojovem-fem.jpg"
            }else if (idade < 50){
                // Adulto
                imagem.src = "img/fotoadulto-fem.jpg"
            }else{
                // Idoso
                imagem.src = "img/fotoidoso-fem.jpg"
            }
        }

        msg.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild("imagem");
        
    }

}

