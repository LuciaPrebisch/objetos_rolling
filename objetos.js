document.write("CLASE OBJETOS")

/*
Objetos I.
1. ¿Qué entendes por objeto en programación?
objeto es una entidad literal compuesta por propiedades, que a su vez esas propiedades contienen valores.

2. ¿Cuáles son las partes que componen a un objeto?
partes: Property
let pais = {
}
Key 
let pais = {
   capital : 
}
Value
let pais = {
   capital : "Buenos Aires"
}


3. ¿Cómo se define a un objeto vacío?
Significa creado pero sin contenido


4. Qué resultado se obtiene de la siguiente asignación: const obj1 = {{}}
5. Generá un objeto literal llamado autor, que contendrá: nombreyapellido (string), anioNacimiento (number).
const autor = {
   nombreyapellido : "Lucia Prebisch" ,
   nacimiento : 1996
}
6. Generá un objeto literal llamado libro, que contendrá un nombre (string), precio (number), cantidadPaginas (number), autor (autor).
const libro = {
   nombre : "Cuatro Acuerdos" ,
   precio : 3600 ,
   cantidadPaginas: 450 ,
   autor : "Jorge Luis Borges",
   reseña : function () {
      return "el libro " + this.nombre + " es de " + this.autor
   }
}
console.log (libro.reseña())

7. Generá un objeto literal llamado Casa; a los atributos pensalos vos pero debe incluir un objeto que sea piso, éste debe contener al menos dos atributos.

const casa = {
   pisos : 2 ,
   cantHabitaciones : 8 ,
   metros2: 650 ,
}
*/









/*
Objetos II
1. ¿Qué es un constructor?
2. ¿Qué  entendes por la palabra reservada This?
3. Crea los constructores correspondientes a Autor, Libro, Piso y Casa.
4. Crea un objeto a partir de cada Constructor.
5. ¿Qué es un método? Y ¿cuál es la principal diferencia con una función?
6. ¿Cuál es la diferencia entre un getter y un setter? Crea un constructor y dame dos ejemplos de cada uno.
7. Crea un constructor que se llame CajeroAutomático. Tendrá un numeroCuenta (string), monto (number); y los métodos:
   a) mostrarEfectivo: Muestra la cantidad actual
   b) sacarEfectivo: Le ingresas un valor y lo resta al total. Debe considerar que no puede sacar mas de lo que tiene.
   c) ingresarEfectivo: Le ingresas un valor y lo suma al total.
   * Nota: Para el punto b y c considerá que, luego de hacer la operación deberás reutilizar mostrarEfectivo.
8. Crea un constructor que se llame EquipoFutbol. Tendrá un nombre (string), nombreDT (string), coloresCamiseta (string). Generá al menos 3 objetos "equipo"
9. Crea un constructor llamado TablaPosiciones. Tendrá una posicion (number), un equipo (EquipoFutbol), golesAFavor (number),  golesEnContra (number).
10. Crea un objeto llamado tabla. Será un único objeto y contendrá a todos los objetos que creaste a partir del EquipoFutbol.

*/