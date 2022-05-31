import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});

// pruebas TDD:
describe("Monedas", () => {
  if("Deberia devolver una lista de monedas:", () => {
    expect(cantidadMonedas(19)).toEqual([5,5,5,2,2]);
  });
});