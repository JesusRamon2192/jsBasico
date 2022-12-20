var auto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
}

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tollota", "Prius", 2017);

var autoNuevo2 = new auto("Tesla", "Model x", 2018);

var autoNuevo3 = new auto("Tesla", "Model 3", 2020);