/*Harcodear " ESCRIBIR A MANO "
Harcodear un array de objetos de productos, con nombre y precio.
Pedir al usuario datos de nombre y precio, PARA AGREGAR UN PRODUCTO AL ARRAY. */


const productos = [  // los arrays siempre con corchetes. Contienen 3 objetos
    {
        nombre : "Manzana" ,
        precio : 50 ,
    },
    {
        nombre: "Naranja" ,
        precio : 20 ,
    },
    {
        nombre : "Banana" ,
        precio : 100 ,
    },
];

 function agregarProductos () {
    const nombreIngresado = prompt ("Ingrese nombre de producto")
    const precioIngresado = parseInt(prompt("Ingrese precio del producto"))
    const producto = {nombre : nombreIngresado, precio: precioIngresado}
    productos.push(producto) //esto sirve para al array de producto agregarel u nprodcuo
    console.log(productos)
}

/*
Que el usuario pueda seleccionar distintos productos de nuestra lista.
Listar prodcutos para el usuario.
Seleccionar un prodcuto del listado.
*/

function mostrarListado () {
 for(let i = 0; i < productos.length; i++) {
    const producto = productos [i] ;
    console.log(`codigo: ${i}, ${producto.nombre}, $${producto.precio}`) // concatenacion de string con variable
 }
}



/*
Seleccionar un producto del listado
Que estos prodcutos se agreguen un array de compras
*/
const listaCompra = [];

function seleccionarProducto() {
  const codigo = parseInt(prompt("Ingresa un codigo de producto"));
  if (isNaN(codigo) || codigo < 0 || codigo >= productos.length) {
    return alert("Ingrese un codigo valido!! 😡");
  }

  // for (let index = 0; index < productos.length; index++) {
  //     const codigoSelect = productos[index];
  //     if (codigo === codigoSelect) {
  //         console.log('codigo seleccionado', `${codigoSelect}, ${productos.producto}`)
  //     }
  // }
  // console.log("🚀 ~ file: index.js:47 ~ seleccionarProducto ~ codigo:", codigo);
  // console.log("producto que coincide con el indice", productos[codigo]);
  listaCompra.push(productos[codigo]);
//   console.log("🚀 ~ file: index.js:44 ~ listaCompra:", listaCompra);
  for (let i = 0; i < listaCompra.length; i++) {
    const producto = listaCompra[i];
    console.log(`codigo: ${i}, ${producto.nombre}, $${producto.precio}`);
  }
}


/*
Y al finalizar que muestre la suma total de todos los productos que seleccionono el usuario
*/

function calcularTotalCompra() {
    let total = 0;
    for (let i = 0; i < listaCompra.length; i++) {
        const producto = listaCompra[i];
        total = total + producto.precio;
    }
    console.log(`El total de la compra es: $${total}`)
}