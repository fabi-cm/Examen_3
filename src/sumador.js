function sumar(a, b) {
  return a + b;
}

function cambio(a, b) {
  return a - b;
}

function cantidadMonedas(a) {
  let monedas = [5,2,1,0.5,0.2];
  let cambioDevolver = [];
  let monto = a;
  let i = 0;
  while (monto <= 0) {
    monto -= cambioDe(monto, monedas[i]);
    cambioDevolver.push(cambioDe(monto, monedas[i]));
    i++;
  }
  return cambioDevolver;
}

function cambioDe(a, moneda) {
  if (a > moneda) {
    return moneda;
  } else {
    return 0;
  }
}

// console.log(cantidadMonedas(19))
export default sumar;
