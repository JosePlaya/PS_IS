//TABLA STOCK INSUMOS
//Controlador tabla trabajador
function generarTablaStock(){
    console.log("INICIANDO PROCESO DE CRACIÓN DE TABLA...")
    //Obtener el número de trabajadores
    var nTrabajadores = 4;
    //Obtener la instancia de la tabla donde se incertaran los datos
    var contenderoTabla = document.getElementById("contenedorCalificaciones")

    //Iniciar el contenedor vacio
    contenderoTabla.innerHTML = ""
    
    //Variable que irá almacenando los valores para la tabla
    var tabla = "<table>";

    //Crear tabla según la cantidad de filas
    for (var i=0; i< nTrabajadores; i++){
        tabla += "<tr>";

        //Tiene que haber un <td> por cada columna creada
        //Columna 1: Fecha
        tabla += "<td>";
        tabla += "1"+i+"/0"+(i+1)+"/2018";
        tabla += "</td>";

        //Columna 2: Calificacion
        tabla += "<td>";
        tabla += "4,5 pts";
        //tabla += "<a href='detalleTrabajo.html'><img src='https://picsum.photos/100/100' alt='foto atencion'></a>";
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
window.onload = generarTablaStock();