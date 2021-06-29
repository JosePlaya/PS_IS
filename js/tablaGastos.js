//TABLA STOCK INSUMOS
//Controlador tabla trabajador
function generarTablaStock(){
    console.log("INICIANDO PROCESO DE CRACIÓN DE TABLA...")
    //Obtener el número de trabajadores
    var nTrabajadores = 4;
    //Obtener la instancia de la tabla donde se incertaran los datos
    var contenderoTabla = document.getElementById("contenedorTablaGastos")

    //Iniciar el contenedor vacio
    contenderoTabla.innerHTML = ""
    
    //Variable que irá almacenando los valores para la tabla
    var tabla = "<table>";

    //Crear tabla según la cantidad de filas
    for (var i=0; i< nTrabajadores; i++){
        tabla += "<tr>";

        //Tiene que haber un <td> por cada columna creada
        //Columna 1: Nombre
        tabla += "<td>";
        tabla += "Antibiotico "+(i+1);
        //tabla += "<a href='detalleTrabajo.html'><img src='https://picsum.photos/100/100' alt='foto atencion'></a>";
        tabla += "</td>";

        //Columna 2: Cantidad
        tabla += "<td>";
        tabla += (i+1)+" unidades";
        tabla += "</td>";

        //Columna 3: Monto
        tabla += "<td>";
        tabla += "$"+(i+1)*6520;
        tabla += "</td>";

        //Columna 4: Total
        tabla += "<td>";
        tabla += "$"+(i+1)*6520*(i+1);
        tabla += "</td>";

        //Columna 5: Fecha
        tabla += "<td>";
        tabla += "1"+i+"/0"+(i+1)+"/2018";
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