function calculator(){
    let box = document.querySelector('.box');
    let row = document.querySelector('.box .row');
    let input = document.createElement('input');
    let block = document.createElement('div');

    block.setAttribute('class','col-md-10 mt-2');
    input.setAttribute('class','form-control form-control-sm');
    input.setAttribute('name','numerico');
    input.setAttribute('type','text');
    input.setAttribute('placeholder','Entre com n° telefone para ser impresso');
    row.appendChild(block)
    block.appendChild(input);
      
}

