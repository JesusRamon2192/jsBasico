var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Television", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo:500},
    {nombre:"Teclado", costo: 105},
    {nombre: "Laptop", costo:40},    
    {nombre:"Audifonos", costo: 1700}
];

var artuculosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
});