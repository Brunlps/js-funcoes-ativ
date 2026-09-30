// function mostrarDataHora() {
//     let data = new Date()

//     console.log(data.toLocaleStringtring());
//     console.log(data.toDateString());
    
// }
// mostrarDataHora();

function imprimirTabuada(numero = 0) {
    for (let i = 0; i < 10; i++) {
       console.log(`${numero} X ${i} = ${numero*i}`);
       
    }
}

imprimirTabuada();