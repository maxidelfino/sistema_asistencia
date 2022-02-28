function asistencia(nombre,p) {
    let presente = prompt(nombre);
    if (presente == "p" || presente == "P") {
        alumnosTotales [p][1]++;
    }
}

let cantidad = prompt(`Ingrese la cantidad de alumnos en el curso`);
alumnosTotales = [];

for (let i = 0; i < cantidad; i++) {
    alumnosTotales [i] = [prompt(`Ingrese nombre del alumno ` + (i+1)),0];
}

mes = prompt(`Elige el mes en el que estamos:
1: Enero - 2: Febrero - 3: Marzo - 4: Abril - 5: Mayo - 6: Junio - 7: Julio - 8: Agosto - 9: Septiembre - 10: Octubre - 11: Nobiembre - 12: Diciembre`);

while (mes == 1 || mes == 2 || mes == 3 || mes == 4 || mes == 5 || mes == 6 || mes == 7 || mes == 8 || mes == 9 || mes == 10 || mes == 11 || mes == 12) {
    if (mes == 1) {
        mes = 31 ; 
    }
    else if (mes == 2) {
        mes = 28;
    }
    else if (mes == 3) {
        mes = 31;
    }
    else if (mes == 4) {
        mes = 30;
    }
    else if (mes == 5) {
        mes = 31;
    }
    else if (mes == 6) {
        mes = 30;
    }
    else if (mes == 7) {
        mes = 31;
    }
    else if (mes == 8) {
        mes = 31;
    }
    else if (mes == 9) {
        mes = 30;
    }
    else if (mes == 10) {
        mes = 31;
    }
    else if (mes == 11) {
        mes = 30;
    }
    else if (mes == 12) {
        mes = 31;
    }
    else {
        mes = prompt(`Elige el mes en el que estamos:
        1: Enero - 2: Febrero - 3: Marzo - 4: Abril - 5: Mayo - 6: Junio - 7: Julio - 8: Agosto - 9: Septiembre - 10: Octubre - 11: Nobiembre - 12: Diciembre`);
    }
}

for (let i = 0; i <= mes; i++) {
    for (alumno in alumnosTotales){
        asistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales) {
    res = `${alumnosTotales[alumno][0]}:
    _____Presentes: ${alumnosTotales[alumno][1]}
    _____Ausentes: ${mes - alumnosTotales[alumno][1]}`;
    if (15 < (mes - alumnosTotales[alumno][1])){
        res+= ` Reprobado por inasistencias`;
    }
}
console.log(res)