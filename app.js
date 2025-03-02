//###################################           AMIGO SECRETO CHALLENGE        ####################################

// Inicializamos el array vacío
let amigos = [];

// Función para agregar el valor del input al array
function agregarAmigo() {
    // Obtener el valor del input
    let txtAmigo = document.getElementById("amigo").value;

    // Expresión regular para validar que el valor solo contiene letras y espacios (para nombres)
    let expRegularNombre = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;

    // Verificamos si hay algo en el input antes de agregar (con la expresion regular, se valida si se escriben solamente letras y espacios)
    if (txtAmigo.trim() !== "" && expRegularNombre.test(txtAmigo)) {
        // Agregamos el valor al array
        amigos.push(txtAmigo);
        //console.log(amigos);

        // Limpiamos el input
        document.getElementById("amigo").value = "";

        let listaAmigosHTML = document.getElementById('listaAmigos');
        // Limpiamos la lista
        listaAmigosHTML.innerHTML = "";
        // Recorrer el array y agregar cada elemento como un <li>
            amigos.forEach(function(nombres){
                let listaNombre = document.createElement("li"); //Se crea un elemento <li>
                listaNombre.textContent = nombres; //Establecemos el texto del <li> al valor del array amigos[]
                listaAmigosHTML.appendChild(listaNombre); //Se agrega el <li> al contenedor
                //console.log(nombres);
            });

     } else {
        //Mostramos mensaje en caso de que no ingrese un nombre o un texto valido
        alert("Por favor, inserte un nombre.");
    }
}

function sortearAmigo() {
    if(amigos.length > 0 ){
        //Formula para sacar el indice del array de forma aleatoria
        let nombreRandom = Math.floor(Math.random()*amigos.length);
        let nombreResultado = amigos[nombreRandom]; //Obtenemos el indice con el nombre del elemento
        let resultadoHTML = document.getElementById('resultado');


        // Limpiar la lista de amigos después de hacer el sorteo
        amigos.length = 0;
        
        // Limpiar la lista de amigos en el DOM
        let listaAmigosHTML = document.getElementById('listaAmigos');
        listaAmigosHTML.innerHTML = ""; // Limpiar la lista visualmente en el DOM

        // Mostrar el nombre sorteado en el contenedor
        resultadoHTML.innerHTML = ""; // Limpiar cualquier resultado previo
        let resultadoNombre = document.createElement("li");
        resultadoNombre.textContent = `El amigo sorteado es: ${nombreResultado}`; //Imprimimos el nombre del ganador
        resultadoHTML.appendChild(resultadoNombre);
        
        //console.log(nombreResultado);
    }else{
                //Mostramos mensaje en caso de que no ingrese un nombre o un texto valido
                alert("Para sortear, debe ingresar nombres.");
    }
}

