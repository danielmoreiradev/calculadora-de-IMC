// VARIAVEIS PARA GUARDAR OS VALORES DE PESO E ALTURA

const peso = document.getElementById('peso')

const altura = document.getElementById('altura')

const btn = document.getElementById('btn')

const campoResultado = document.getElementById('resultado');


btn.addEventListener('click', () => {
      // PEGAR VALORES COMO TEXTO (string)
   let pesoTexto = peso.value;
   let alturaTexto = altura.value;
   
   // TROCAR VÍRGULA POR PONTO
   pesoTexto = pesoTexto.replace(',', '.');
   alturaTexto = alturaTexto.replace(',', '.');

   //CONVERTER PARA NÚMERO
   const valorPeso = Number(pesoTexto);
   let valorAltura = Number(alturaTexto);

   // SE ALTURA FOR MAIOR QUE 3, ASSUMIMOS QUE ESTÁ EM CM
  if (valorAltura > 3) {
    valorAltura = valorAltura / 100;
}



// VALIDAÇÃO
if (
    pesoTexto === "" ||          // campo vazio
    alturaTexto === "" ||        // campo vazio
    isNaN(valorPeso) ||          // não é número
    isNaN(valorAltura) ||        // não é número
    valorPeso <= 0 ||            // zero ou negativo
    valorAltura <= 0             // zero ou negativo
) {
    // mensagem de erro
    campoResultado.innerText = "Preencha peso e altura corretamente.";
    campoResultado.style.color = "red";

    // para o código aqui (não calcula o IMC)
    return;
}

    const imc = valorPeso / (valorAltura * valorAltura);

    console.log(`Seu IMC é ${imc.toFixed(2)}`);

     let categoria = "";
     let tipo = "";
     let mensagem = "";

     if (imc < 18.5) {
        categoria = "Abaixo do peso";
        tipo = "laranja";
        mensagem = "Atencão, você está abaixo do peso, procure um profissional de saúde!";
     } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = "Peso normal";
        tipo = "verde";
        mensagem = "Parabéns, você está na faixa de peso normal, Continue assim!";
     } else if (imc >= 25 && imc <= 29.9) {
        categoria = "Sobrepeso";
        tipo = "vermelho";
        mensagem = "Cuidado, você está com sobrepeso, procure um profissional de saúde!";
     }  else {
    categoria = "Obesidade"; 
    tipo = "vermelho";
    mensagem = "Cuidado, você esta acima do peso, procure um profissional de saúde!";
}

   

 


campoResultado.innerHTML = `<span class="coracao ">❤️‍🔥</span> <br> 
<span class="resultado ${tipo}"> ${imc.toFixed(2)}</span> <br> 
<span class="status-peso ${tipo}">${categoria}</span> <br> <br> 
<span class="msg ${tipo}">${mensagem}</span>`;

    
})







