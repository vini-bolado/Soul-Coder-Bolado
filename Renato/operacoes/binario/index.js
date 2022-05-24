
function toDecimal(bin) {
    let dec = 0;
  
    for (let c = bin.length - 1, i = 0; c >= 0; c--, i++) {
      dec += bin[c] * Math.pow(2, i);
    }
  
    return dec;
  }
  
  console.log(
    toDecimal('1101010'),
    toDecimal('1101010') === parseInt('1101010', 2)
  );