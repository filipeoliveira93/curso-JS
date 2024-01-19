document.getElementById('calcular').addEventListener('click', calcularIMC);
function calcularIMC() {
  let altura = document.getElementById('altura').value;
  let peso = document.getElementById('peso').value;

  if (peso && altura) {
    altura = altura.includes(',') ? altura.replace(',', '.') : parseFloat(altura);

    peso = parseFloat(peso);

    if (!isNaN(peso) && !isNaN(altura)) {
      let imc = peso / altura ** 2;

      let marginTop = '';
      imc = imc.toFixed(2);
      console.log(imc);
      switch (true) {
        case imc < 18.5:
          marginTop = '0px';
          //peso ideal
          break;
        case imc >= 18.5 && imc <= 24.9:
          marginTop = '-25px';
          //peso normal
          break;
        case imc >= 25 && imc <= 29.9:
          marginTop = '-48px';
          break;
        //sobre peso
        case imc >= 30 && imc <= 34.9:
          //obesidade grau 1
          marginTop = '-72px';
          break;
        case imc >= 35 && imc <= 39.9:
          //obesidade grau 2:
          marginTop = '-97px';
          break;
        case imc >= 35 && imc <= 39.9:
          marginTop = '-124px';
          break;
        //obesidade grau 3
      }
      document.getElementById('opcoes').style.marginTop = marginTop;
      document.getElementById('imc').innerText = imc;
    }
  } else {
    console.log('um erro ocorreu');
  }
}
