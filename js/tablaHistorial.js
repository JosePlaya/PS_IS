//TABLA HISTORIAL CUIDADOS
//Controlador tabla
function generarTablaHistorial(){
    console.log("INICIANDO PROCESO DE CRACIÓN DE TABLA...")
    //Obtener el número de trabajadores
    var nTrabajadores = 10;
    //Obtener la instancia de la tabla donde se incertaran los datos
    var contenderoTabla = document.getElementById("contenedorTablaHistorialCuidados")

    //Iniciar el contenedor vacio
    contenderoTabla.innerHTML = ""
    
    //Variable que irá almacenando los valores para la tabla
    var tabla = "<table>";

    //Crear tabla según la cantidad de filas
    for (var i=0; i< nTrabajadores; i++){
        tabla += "<tr>";

        //Tiene que haber un <td> por cada columna creada
        //Columna 1: Imagen 
        tabla += "<td>";
        tabla += "Rodolfo Amancio";
        //tabla += "<a href='detalleTrabajo.html'><img src='https://picsum.photos/100/100' alt='foto atencion'></a>";
        tabla += "</td>";

        //Columna 2: Nombre Trabajador 
        tabla += "<td>";
        tabla += "Carlos Padget L.";
        tabla += "</td>";

        //Columna 3: Descripción
        tabla += "<td>";
        tabla += "Revisión general semanal.";
        tabla += "</td>";

        //Columna 4: Fecha
        tabla += "<td>";
        tabla += "15/11/1888";
        tabla += "</td>";

        tabla += "</tr>";
    }
    //Cerrar el almacenado de los valores para completar la tabla
    tabla += "</table>";

    //Asignar 'tabla' al contenedor
    contenderoTabla.innerHTML = tabla;

    console.log("PROCESO FINALIZADO")
}


//Carga los datos automáticamente al iniciar la vista
window.onload = generarTablaHistorial();