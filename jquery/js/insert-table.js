var studentsList = localStorage.getItem("studentsList")
console.log(studentsList)



if (!studentsList) {
    var alumnos = [{
        "Nombre": "Edwin",
        "Edad": 20,
        "Ciudad": "Puerto Vallarta"
    }, {
        "Nombre": "Kevin",
        "Edad": 28,
        "Ciudad": "Puerto Vallarta"
    }, {
        "Nombre": "Edgar",
        "Edad": 28,
        "Ciudad": "Coahuila"
    }, {
        "Nombre": "Alfredo",
        "Edad": 21,
        "Ciudad": "CDMX"
    }];
} else {
	var alumnos = JSON.parse(studentsList);
}

const updateTable = () => {
    $("#alumnos-table").empty();
    /*llena la tabla con los registros actuales*/
    $.each(alumnos, (index, value) => {
        $("#alumnos-table").append(`<tr><td>${value.Nombre}</td><td>${value.Edad}</td><td>${value.Ciudad}</td></tr>`);
    });
}

$(".nav-button").on("click", function(e) {
    let selectedButton = e.target;
    let currentSection = $(e.target).data("controls"); /*obtenemos la sección a mostrar*/
    /*oculta las secciones*/
    $("section").hide();
    /*muestra la sección seleccionada*/
    $(currentSection).show();
    switch (currentSection) {
        case '#alumnos':
            updateTable()
            break;
        default:
            break;
    }
});

/*(crear funcion que se ejecute al dar click en el boton y que extraiga los datos del formulario)
 */

$("#add-student").on("click", function(e) {
    let studentName = $("#student-name").val(),
        studentAge = $("#student-age").val(),
        studentCity = $("#student-city").val();
    let newStudent = {
        "Nombre": studentName,
        "Edad": studentAge,
        "Ciudad": studentCity
    };
    console.log(newStudent);
    alumnos.push(newStudent);
    console.log(alumnos);
    updateTable();
    localStorage.setItem("studentsList", JSON.stringify(alumnos));
})