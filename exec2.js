    let hrsBr, hrsfran
  
    hrsBr = parseFloat(prompt('Que horas são no Brasil que eu te digo que horas sãi na França'));
    hrsfran = horabrasil + 5;

    if (hrsfran >= 24) {
     hrsfran -= 24; 
    }
    
    document.write(`A hora aqui é: ${hrsBr.toFixed(2)} e na França é: ${hrsfran.toFixed(2)}`);