
const form = document.getElementById ('fNumber');
let nMaior = document.getElementById('nMaior');
let nMenor = document.getElementById('nMenor');
let alert = document.getElementById('alert');


function enviar (){
    let maior = Number(nMaior.value)
    let menor = Number(nMenor.value)
    if (maior < menor){
        //msg erro
        alert.innerHTML = 'o segundo valor precisa ser menor que o primeiro';

    } else if (maior == '' ||  menor == '' ) {
        //msg campo vazio
        alert.innerHTML ='ops! cheque se os dois campos estão preenchidos e tente novamente';

    } else {
        //msg postiva
        form.innerHTML = `valores <b>${nMaior.value}</b> e <b>${nMenor.value}</b> enviados com sucesso :) `;
    }

}


