/*  GENERADOR DE FRASES
*   Autor: Jonathan Garcia Antonio
*   Fecha: 23/03/2023
*/


const columnaA = [
    "«La gente ignora el diseño que ignora a la gente.» — Frank Chimero",
    "«La tecnología hace posible lo que antes era imposible. El diseño hace que sea real.» — Michael Gagliano",
    "«El lenguaje es una limitación, una prisión. El diseño permite explorar otros espacios.» — Neville Brody",
    "«Si puedes diseñar una cosa, entonces puedes diseñarlo todo; si lo haces bien, perdurará para siempre.» — Massimo Vignelli",
    "«Haz el trabajo que le haga bien a tu alma, no a tu ego.» — Jessica Walsh",
    "«Haz un buen trabajo para buenas personas.» — Aaron Draplin",
    "«He visto películas que me han conmovido, he leído libros que han cambiado mi modo de ver las cosas y he escuchado música que ha influido en mi ánimo. Nuestro objetivo será llegar al corazón de la gente con el diseño.» — Stefan Sagmeister",
    "«Haz lo que mejor sabes hacer, pero sé capaz de cambiar con el tiempo.» — Paula Scher",
    "«Que tus diseños tengan un fuerte significado.» — Jacqueline Casey",
    "«Los símbolos sencillos y económicos funcionan mejor y de forma más universal que los cargados de detalles.» — Susan Kare"
];


function generaFrase() {
    // Calculamos de forma aleatoria el indice para cada arreglo de frases
    const posicionA = Math.floor(Math.random()*columnaA.length);

    // Concatenamos las  partes de la  en una sola.
    const frase = `${columnaA[posicionA]}`
    
    //Hacemos que la función devuelva la excusa armada.
    return frase;
}

console.log(generaFrase());


function colocaFrase() {
    document.getElementById("frase").innerHTML = generaFrase();
}


colocaFrase();