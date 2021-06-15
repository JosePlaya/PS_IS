//TABLA STOCK INSUMOS
//Controlador tabla trabajador
function generarTablaPacientes(){
    console.log("INICIANDO PROCESO DE CRACIÓN DE TABLA...")
    //Obtener el número de trabajadores
    var nTrabajadores = 8;
    //Obtener la instancia de la tabla donde se incertaran los datos
    var contenderoTabla = document.getElementById("contenedorTablaPacientes")

    //Iniciar el contenedor vacio
    contenderoTabla.innerHTML = ""
    
    //Variable que irá almacenando los valores para la tabla
    var tabla = "<table>";

    //Crear tabla según la cantidad de filas
    for (var i=0; i< nTrabajadores; i++){
        tabla += "<tr>";

        //Tiene que haber un <td> por cada columna creada
        //Columna 1: Nombre paciente 
        tabla += "<td>";
        tabla += "Eduardo Sánchez P.";
        //tabla += "<a href='detalleTrabajo.html'><img src='https://picsum.photos/100/100' alt='foto atencion'></a>";
        tabla += "</td>";

        //Columna 2: Edad paciente 
        tabla += "<td>";
        tabla += "8"+i+" años";
        tabla += "</td>";

        //Columna 3: Habitación
        tabla += "<td>";
        tabla += "30"+i;
        tabla += "</td>";

        //Columna 4: Fecha ingreso
        tabla += "<td>";
        tabla += "1"+i+"/0"+(i+1)+"/2018";
        tabla += "</td>";

        //Columna 4: Medicamentos
        tabla += "<td>";
        tabla += "Aspirina y armonil";
        tabla += "</td>";

        //Columna 3: Descripción
        tabla += "<td>";
        tabla += "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan arcu non egestas dapibus. Nunc dolor leo, imperdiet in dapibus sodales.";
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
window.onload = generarTablaPacientes();