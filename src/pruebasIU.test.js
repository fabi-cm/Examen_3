import fs from "fs"
import sumar from "./sumador"

describe("Examen", () => {
    beforeAll(() => {
        document.body.innerHTML = fs.readFileSync("index.html", "utf8");
        require("./presenter.js");
    });
    it("Deberia mostrar el titulo Examen", () => {
        const resultado = document.querySelector("#title");
        expect(resultado.innerHTML).toEqual("Examen");
    }); 
    if ("Deveria recibir un numero en la casilla", () => {
        const montoVenta = document.querySelector("#monto-venta");
        montoVenta.value = 10;
        // const resultado = document.querySelector("#resultado-div");
    });
    if ("Deberia recibir el efectivo en la casilla", () => {
        const efectivo = document.querySelector("#efectivo");
        efectivo.value = 20;
    });
    if ("Recibir el cambio que le debe", () => {
        const botonAdivinar = document.querySelector("#boton-adivinar");
        botonAdivinar.click();
        const resultado = document.querySelector("#resultado-div");
        expect(resultado.innerHTML).toEqual(10);
    });
});
