/*Uma comerciante comprou alguns produtos e quer revender com lucro de 45% se o valor da compra foi menor que 20 reais. Caso contrário, o lucro será de 30%. O valor deve ser passado para o programa que deverá retornar o valor da venda.

Exemplo: 
produto: R$ 18,00 -> 18 * 45% -> R$ 26,10
produto: R$ 21,00 -> 21 * 30% -> R$ 27,30*/

let valorDaCompra = 10

if (valorDaCompra < 20){
    let valorDaVenda = valorDaCompra + (valorDaCompra * 0.45)
    let valorTotal = valorDaVenda.toFixed(2).replace(".", ",")

    console.log(`Valor da venda é R$${valorTotal} tendo lucro de 45%.`)
} else {
    let valorDaVenda = valorDaCompra + (valorDaCompra * 0.3)
    let valorTotal = valorDaVenda.toFixed(2).replace(".", ",")

    console.log(`Valor da venda é R$${valorTotal} tendo lucro de 30%.`)
}

