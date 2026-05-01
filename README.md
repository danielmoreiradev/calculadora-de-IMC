# Calculadora de IMC

Este projeto e uma calculadora de IMC feita com HTML, CSS e JavaScript.

A proposta e simples: a pessoa informa o peso e a altura, e o sistema mostra o resultado do IMC com uma classificacao facil de entender.

## Ver online

Voce pode testar a calculadora aqui:

https://danielmoreiradev.github.io/calculadora-de-IMC/

## O que esse projeto faz

- Recebe peso e altura
- Calcula o IMC
- Mostra a categoria do resultado
- Exibe uma mensagem de apoio na tela

## Tecnologias usadas

- HTML
- CSS
- JavaScript

## Algoritmo do sistema

Em palavras simples, o sistema funciona assim:

1. A pessoa digita o peso e a altura
2. O sistema verifica se os valores estao corretos
3. Se a altura estiver em centimetros, ela e convertida para metros
4. O sistema calcula o IMC
5. Depois compara o resultado com a faixa correspondente
6. Por fim, mostra o valor do IMC, a categoria e uma mensagem

### Logica resumida

```text
Inicio
  Ler peso
  Ler altura

  Se peso ou altura forem invalidos
    Mostrar mensagem de erro
    Encerrar
  Fim se

  Se altura > 3
    altura = altura / 100
  Fim se

  imc = peso / (altura * altura)

  Se imc < 18.5
    categoria = "Abaixo do peso"
  Senao se imc <= 24.9
    categoria = "Peso normal"
  Senao se imc <= 29.9
    categoria = "Sobrepeso"
  Senao
    categoria = "Obesidade"
  Fim se

  Mostrar imc, categoria e mensagem
Fim
```

## Observacao

O resultado serve como referencia inicial. Para uma avaliacao mais completa, o ideal e procurar um profissional de saude.
