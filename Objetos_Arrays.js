
// Carlos Perez

//  Objeto

const movie = {
    tittle: "Spider-man: Across the Spiderverse",
    year: 2023,
    duration: "2h 20min",
    score: 8.6,
    production: {
        direction: ["Joaquim Dos Santos", "Kemp Powers", "Justin K. Thompson"],
        mainCast: ["Shameik Moore", "Hailee Steinfeld", "Brian Tyree Henry"]
    }
}

// Metodos

// Desetructuracion

const {tittle, year, duration, score, production} = movie; 
console.log(`Titulo: ${tittle}
Año: ${year}
Duración: ${duration}
Puntuación: ${score}
Reparto Principal: ${production.mainCast}
`);

//Congelar objeto

//Object.freeze(movie);
//console.log(Object.isFrozen(movie));
//movie.tittle = "Resident Evi";
//console.log(movie.tittle);

//Uso de seal

//Object.seal(movie);
//console.log(Object.isSealed(movie));
//movie.tittle = "Spider-man: Across the spiderverse";
//console.log(movie.tittle);

//Rest
const {tittle:titulo,year:año, ...detalles} = movie;
console.log(detalles);

//Spread
const movie2 = {
    ...movie, 
    tittle: "Star Wars",
    year: 1977
}
console.log(movie2);

//Acceder al contenido

console.log("Obtener las claves:",Object.keys(movie))
console.log("Obtener los valores:",Object.values(movie))
console.log("Obtener las claves y valores en un array:",Object.entries(movie))

//Abreviación de propiedades
const nombre = "Resident Evil";
const añoEstreno = 2002;

const movie3 = {
    nombre,
    añoEstreno
}
console.log(movie3);

//  ------------------------------------------------------------------------------------------------

//Arreglos
const peliculas = [
    {
    nombre: "The Matrix", 
    añoEstreno: 1999, 
    duracion: "2h 16min"
    },
    {
    nombre: "Resident Evil", 
    añoEstreno: 2002, 
    duracion: "1h 40min"
    },
    {
    nombre: "Spider-man: Across the spiderverse", 
    añoEstreno: 2023, 
    duracion: "2h 20min"
    }
]

//Uso de propiedades de arreglos

const peliculasBD = peliculas.map(p => {
    return {
        nombre: p.nombre.toUpperCase(),
    }
})

console.log(peliculasBD);

console.log("Número de elementos:", peliculas.length);
peliculas.length >= 2 ? console.log("Ver peliculas") : console.log("Solo hay una pelicula");

//  Iteraciones

for(let i=0; i<peliculas.length; i++){
    console.log(`${i} - ${peliculas[i].nombre}`);
}


peliculas.forEach((p, i) => {
    console.log(`${i} - ${p.nombre}`);
})


const nuevaPelicula = peliculas.map((p, i) => {
    return `${i} - ${p.nombre}`;
})
console.log(nuevaPelicula);
console.log();


const peliculas2 = ["Avengers", "Chucky", "Miku"];

peliculas2.push("Alimentos") 
peliculas2.unshift("Bebidas") /
console.log(peliculas2)

peliculas2.pop() 
peliculas2.shift() 
console.log(peliculas2)

//Encontrar elementos
const pelicula1 = peliculas2.find(p => p === "Avengers");
console.log(pelicula1);

//filtrar elementos
const resultPeliculaFiltro = peliculas2.filter(p => p.startsWith("A"));
console.log(resultPeliculaFiltro);