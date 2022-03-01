function asistencia(nombre,p) {
    let presente = prompt(nombre);
    if (presente == "p" || presente == "P") {
        alumnosTotales [p][1]++;
    }
}

let cantidad = prompt(`Ingrese la cantidad de alumnos en el curso`);
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales [i] = [prompt(`Ingrese nombre del alumno ` + (i+1)),0];
}

let mes = prompt(`Ingrese los dias de clases`);

for (i = 0; i < mes; i++) {
    for (alumno in alumnosTotales){
        asistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales) {
    res = `${alumnosTotales[alumno][0]}:
    _____Días de clases: ${mes}
    _____Presentes: ${alumnosTotales[alumno][1]}
    _____Ausentes: ${mes - alumnosTotales[alumno][1]}`;
    if ((mes*0.1) < (mes - alumnosTotales[alumno][1])){
        res+= ` Reprobado por inasistencias`;
    }
    console.log(res);
}