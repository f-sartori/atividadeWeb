const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const resultado = document.querySelector('#res')


const calcularIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''

    if (imc < 18.5) {
      classification = 'Magreza'
    } else if (imc < 24.9) {
      classification = 'Normal'
    } else if (imc < 30) {
      classification = 'Sobrepeso'
    } else {
      classification = 'Obesidade'
    }
    
    resultado.innerHTML = `IMC: ${imc} (${classification})`
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}