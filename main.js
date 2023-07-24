//PREENTREGA VENTA DE AUTOS

const AutosEnVenta = function (marca, modelo, year, precio, stock) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year
    this.precio = precio;
    this.stock = stock;
}

//AUTOS EN VENTA

let auto1 = new AutosEnVenta("Fiat", "Regata", 2001, 900000, 1)
let auto2 = new AutosEnVenta("Fiat", "Palio", 2004, 1500000, 1)
let auto3 = new AutosEnVenta("Ford", "Falcon", 1970, 750000, 1)
let auto4 = new AutosEnVenta("Chevrolet", "Coupe Cheavy SS", 1967, 3000000, 1)
let auto5 = new AutosEnVenta("Peugeot", "Rx 206", 2001, 860000, 1)
let auto6 = new AutosEnVenta("Peugeot", "Partner", 2007, 3000000, 1)

let auto7 = new AutosEnVenta("Peugeot", "307", 2007, 7000000, 0) //NO HAY STOCK

let listaDeAutos = [auto1, auto2, auto3, auto4, auto5, auto6, auto7]

//FILTRAR AUTOS POR MARCA

function filtrarAutosMarca() {
    let busqueda = prompt("Qué marca de vehículo buscas...").trim().toUpperCase()
    let resultado = listaDeAutos.filter((auto) => auto.marca.toUpperCase().includes(busqueda))
    if (resultado.length > 0) {

        console.table(resultado)
    } else {
        alert("No hay coincidencia con " + busqueda)
    }
}

//FILTRAR AUTOS POR MODELO

function filtrarAutosModelo() {
    let busqueda = prompt("Qué MODELO de vehículo buscas...").trim().toUpperCase()
    let resultado = listaDeAutos.filter((auto) => auto.modelo.toUpperCase().includes(busqueda))
    if (resultado.length > 0) {

        console.table(resultado)
    } else {
        alert("No hay coincidencia con " + busqueda)
    }
}

//MOSTRAR TODA LA LISTA EN STOCK

function mostrarStock() {
    let resultado = listaDeAutos.filter((auto) => auto.stock > 0)
    if (resultado.length > 0) {

        console.table(resultado)
    } else {
        alert("No hay autos en stock")
    }
}


//LLAMAMOS A LA FUNCION

let elegirAccion = prompt("INGRESE: 1-Marca-, 2-modelo-, 3-Mostrar Stock-")

while (elegirAccion) {
    switch (elegirAccion) {
        case "1":
            filtrarAutosMarca();
            break;
        case "2":
            filtrarAutosModelo();
            break;
        case "3":
            mostrarStock()
            break;
        default:
            break;
    } if (elegirAccion != isNaN) {
        alert("Seleccione un numero del 1 al 3")
    }
    elegirAccion = prompt("INGRESE: 1-Marca-, 2-modelo-, 3-Mostrar Stock-")
}
