//TABLA STOCK INSUMOS
//Controlador tabla trabajador
function generarTablaStock(){
    console.log("INICIANDO PROCESO DE CRACIÓN DE TABLA...")
    //Obtener el número de trabajadores
    var nTrabajadores = 3;
    //Obtener la instancia de la tabla donde se incertaran los datos
    var contenderoTabla = document.getElementById("contenedorTablaStockInsumos")

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
        tabla += "Antibiotico";
        //tabla += "<a href='detalleTrabajo.html'><img src='https://picsum.photos/100/100' alt='foto atencion'></a>";
        tabla += "</td>";

        //Columna 2: Nombre Trabajador 
        tabla += "<td>";
        tabla += "3 unidades";
        tabla += "</td>";

        //Columna 3: Descripción
        tabla += "<td>";
        tabla += "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan arcu non egestas dapibus. Nunc dolor leo, imperdiet in dapibus sodales, vehicula vitae sem. Nullam eleifend sed nisi feugiat tincidunt. Maecenas a neque sit amet elit ornare varius et quis turpis. Nunc sagittis, dolor et euismod tincidunt, erat ligula lacinia.";
        tabla += "</td>";

        //Columna 4: Fecha
        tabla += "<td>";
        tabla += "15/11/2022";
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