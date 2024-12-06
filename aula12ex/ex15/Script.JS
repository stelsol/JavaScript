function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res') // esta é uma segunda opção, a de cima e está fazem a mesma funcão//
   if( fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
   } else{
       var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       // res.innerHTML = `Idade calculada ${idade}` para testar o código//
       var genro = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'crih.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovh.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src', 'adth.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoh.png')
            }
       }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'crim.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovm.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src', 'adtm.png')
            }else{
                //idoso
                img.setAttribute('src', 'idom.png')
            }
       }
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
   }
}