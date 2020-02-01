function createField(){
    // DECLARANDO AS VARIAVEIS E CRIANDO OS ELEMENTOS A PARTIR DELAS.
    let box = document.querySelector('.box');
    let row = document.querySelector('.box .row');
    let input = document.createElement('input');
    let block = document.createElement('div');

    // SETANDO ATRIBUTOS AS VARIÁVEIS E SUAS RESPECTIVAS PROPRIEDADES
    block.setAttribute('class','col-md-10 mt-2');
    input.setAttribute('class','form-control form-control-sm');
    input.setAttribute('name','numerico');
    input.setAttribute('type','text');
    input.setAttribute('placeholder','Entre com n° telefone para ser impresso');
    row.appendChild(block)
    block.appendChild(input);
}

function result(){
    let numerico = document.querySelectorAll('input[name = "numerico"]');
    let p = document.querySelector('#target');
    let cont = 0;
    let x = 0;
    
    for (let i = 0; i < numerico.length; i++) { //535456
        // VALIDAR O CAMPO ENVIADO PELO USUARIO
        if(numerico[i].value == '' || numerico[i+1] == 0){
            return $.alert({
                title: 'ATENÇÃO!',
                content: 'Campo(s) vázio!',
                type: 'orange',
                typeAnimated: true,
                buttons: {
                    tryAgain: {
                        text: 'Fechar',
                        btnClass: 'btn-orange',
                        close: function(){
                        }
                    },
                }
            });
                
        }

        if(numerico[0].value.length < 6){
            console.log(numerico[0].value.length)
            return $.alert({
                title: 'OPS!',
                content: 'Por Favor, preencha os campos com no minímo 6 caracteres!',
                type: 'red',
                typeAnimated: true,
                buttons: {
                    tryAgain: {
                        text: 'Fechar',
                        btnClass: 'btn-danger',
                        close: function(){
                        }
                    },
                }
            });
        }

        for (let j = i+1; j < numerico.length; j++) { // 535488
            while (numerico[i].value.charAt(x) === numerico[j].value.charAt(x)) {
                cont += 1;
                x += 1;
            }
            j = numerico.length;
        }
        x = 0;
    }
    
    // console.log(cont);
    return p.innerHTML = `O maior número possível de caracteres economizados no processo foi <strong style='font-weight:bold; font-size:1rem;'>${cont}</strong>`;
}



// function calc(numerico = [], cont, x){
//     for (let i = 0; i < numerico.length; i++) { //535456
//         for (let j = i + 1; j < numerico.length; j++) { // 535488
//             while (numerico[i].value.charAt(x) === numerico[j].value.charAt(x)) {
//                 cont += 1;
//                 x += 1;
//             }
//             j = numerico.length;
//         }
//         x = 0;
//     }
//     return cont;
// }


// function imprimirNaTela(){
//     let p = document.querySelector('#target');
//     let cont = 0;
//     let x = 0;
//     let numerico = document.querySelectorAll('input[name = "numerico"]');

//     calc(numerico,cont, x);

//     return p.innerText = `O maior número possível de caracteres economizados no processo foram ${cont}`;
// }