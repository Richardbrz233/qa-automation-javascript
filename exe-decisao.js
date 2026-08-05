const cidades = ['São Paulo', 'Rio de janeiro', 'Florianópolis', 'Recife']

cidades.forEach((cidade, indice) => {
    console.log('Execução: ', indice +1)
    console.log('cidade: ', cidade)

if (cidade == 'Florianópolis') {
    console.log('Encontrado!')
} else {
    console.log('Não encontrado!')
}

console.log('------------------------')
})