const id_DOM = (dom) => {
    return document.getElementById(dom)
}
const con = console.log;
let fechaExcel = new Date();
let day, month,year, ConverToXlsx, wbout, libroDeTrabajo;
let arrIds = [];
let filas, contadorHoras, z = 0;
let fecha, hour, minute, second, audio;
let ident, clase, filHora, colCampo, campoMini, anchoP, anchoM, horaTurno;
let HTMLProfesor, HTMLMonitor, HTMLInputs;
let inputAccion, inputNombre, casillaFichero, avtiva1, activa2,valor;
let contHoja = []; 
let inc, idTurno;
listadoTurnos = [];
let arrMiembros = new Array(8);
let arrInvitados = new Array(8);
let arrProfesores = new Array(4);
let arrMonitores = new Array(4);
datosTurno = [];
prueba=[];
arrTurnos=[];
idT = cp = hr = s1 = ac1 = s2 = ac2 = s3 = ac3 = s4 = ac4 = i1 = ai1 = i2 = ai2 = i3 = ai3 = i4 = ai4 = p1 = p2 = p3 = p4 = m1 = m2 = m3 = m4 = idC ='';
encabezadoExcel = ['campo','hora','miembro_1', 'miembro_2','miembro_3','miembro_4','invitado_1', 'invitado_2','invitado_3','invitado_4','profesor_1', 'profesor_2','profesor_3','profesor_4','monitor_1', 'monitor_2','monitor_3','monitor_4','accion'];
contExcel=[];
// profesores y monitores
let monitores = [], profesores = [];
document.addEventListener("DOMContentLoaded", function event() {
    const crearTabla = () => {
        filas = id_DOM("campos_y_horas");
        for (let i = 0; i <= 14; i++) {
            filas.innerHTML += '<tr></tr>';
            for (let j = 0; j <= 34; j++) {
                i == 0
                    ? document.getElementsByTagName("tr")[i].innerHTML += '<td><div id="fil_' + i + '_col_' + j + '">' + j + '</div></td>'
                    : document.getElementsByTagName("tr")[i].innerHTML += '<td><div id="fil_' + i + '_col_' + j + '" class="casillas"></div></td>';
                if (j == 0) {
                    contadorHoras = i + 5;
                    if (contadorHoras < 12) {
                        id_DOM('fil_' + i + '_col_0').classList.remove('casillas');
                        id_DOM('fil_' + i + '_col_0').innerHTML = contadorHoras + ':00-' + contadorHoras + ':50 AM' ;
                        id_DOM('fil_' + i + '_col_0').style.width = "6em";
                    }else if(contadorHoras==12){
                        id_DOM('fil_' + i + '_col_0').classList.remove('casillas');
                        id_DOM('fil_' + i + '_col_0').innerHTML = contadorHoras + ':00-' + contadorHoras + ':50 PM' ;
                        id_DOM('fil_' + i + '_col_0').style.width = "6em";
                    }
                    else{
                        id_DOM('fil_' + i + '_col_0').classList.remove('casillas');
                        id_DOM('fil_' + i + '_col_0').innerHTML = (contadorHoras - 12) + ':00-' + (contadorHoras - 12) + ':50 PM';
                        id_DOM('fil_' + i + '_col_0').style.width = "6em";
                    }
                    // `${i+5}:00-${i+5}:50`
                }
                j % 2 == 0
                    ? id_DOM('fil_' + i + '_col_' + j).style.backgroundColor = "rgb(55, 179, 70)"
                    : id_DOM('fil_' + i + '_col_' + j).style.backgroundColor = "palegreen"
                if (j >= 1 && i >= 1) {
                    arrIds.push('fil_' + i + '_col_' + j)
                    if (i > 0 && j == 6){
                        id_DOM('fil_' + i + '_col_6').classList.remove('casillas')
                        arrIds.pop();
                        id_DOM('fil_' + i + '_col_6').classList.add("miniTenis");
                        for (let k = 0; k < 4; k++) {
                            id_DOM('fil_' + i + '_col_6').innerHTML += '<div id="mini_' + (++z) + '" class="mini_tenis casillas"></div>';
                            arrIds.push(`mini_${z}`)
                        }
                    }
                }
            }
        }
        id_DOM('fil_0_col_0').innerHTML="Hora/Campo";
        // divs = document.getElementsByTagName("div");
    }
    crearTabla();
    // if(localStorage.getItem('turnos')){
    //     getTurnos();
    // }
    window.addEventListener('storage', function() {
        getTurnos();
    });
});
function getTurnos(){
    listadoTurnos = JSON.parse(localStorage.getItem('turnos'));
    imprimirTurnos(listadoTurnos,0);
}
function imprimirTurnos(nuevoTurno,ind){
    for(let i=ind;i<listadoTurnos.length;i++){
        if(nuevoTurno[i].miembro_1!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].miembro_1+'\n ';
        }
        if(nuevoTurno[i].accion_1!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].accion_1+'\n ';
            id_DOM(nuevoTurno[i].id_casilla).innerHTML += nuevoTurno[i].accion_1+'</br>';
        }
        if(nuevoTurno[i].miembro_2!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].miembro_2+'\n ';
        }
        if(nuevoTurno[i].accion_2!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].accion_2+'\n ';
            id_DOM(nuevoTurno[i].id_casilla).innerHTML += nuevoTurno[i].accion_2+'</br>';
        }
        if(nuevoTurno[i].miembro_3!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].miembro_3+'\n ';
        }
        if(nuevoTurno[i].accion_3!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].accion_3+'\n ';
            id_DOM(nuevoTurno[i].id_casilla).innerHTML += nuevoTurno[i].accion_3+'</br>';
        }
        if(nuevoTurno[i].miembro_4!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].miembro_4+'\n ';
        }
        if(nuevoTurno[i].accion_4!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].accion_4+'\n ';
            id_DOM(nuevoTurno[i].id_casilla).innerHTML += nuevoTurno[i].accion_4+'</br>';
        }
        if(nuevoTurno[i].invitado_1!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].invitado_1+'\n ';
        }
        if(nuevoTurno[i].accionInv_1!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].accionInv_1+'\n ';
            id_DOM(nuevoTurno[i].id_casilla).innerHTML += nuevoTurno[i].accionInv_1+'</br>';
        }
        if(nuevoTurno[i].invitado_2!=undefined) {
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].invitado_2+'\n ';
        }
        if(nuevoTurno[i].accionInv_2!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].accionInv_2+'\n ';
            id_DOM(nuevoTurno[i].id_casilla).innerHTML += nuevoTurno[i].accionInv_2+'</br>';
        }
        if(nuevoTurno[i].invitado_3!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].invitado_3+'\n ';
        }
        if(nuevoTurno[i].accionInv_3!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].accionInv_3+'\n ';
            id_DOM(nuevoTurno[i].id_casilla).innerHTML += nuevoTurno[i].accionInv_3+'</br>';
        }
        if(nuevoTurno[i].invitado_4!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].invitado_4+'\n ';
        }
        if(nuevoTurno[i].accionInv_4!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].accionInv_4+'\n ';
            id_DOM(nuevoTurno[i].id_casilla).innerHTML += nuevoTurno[i].accionInv_4+'</br>';
        }
        if(nuevoTurno[i].profesor_1!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].profesor_1+'\n ';
        }
        if(nuevoTurno[i].profesor_2!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].profesor_2+'\n ';
        }
        if(nuevoTurno[i].profesor_3!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].profesor_3+'\n ';
        }
        if(nuevoTurno[i].profesor_4!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].profesor_4+'\n ';
        }
        if(nuevoTurno[i].monitor_1!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].monitor_1+'\n ';
        }
        if(nuevoTurno[i].monitor_2!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].monitor_2+'\n ';
        }
        if(nuevoTurno[i].monitor_3!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].monitor_3+'\n ';
        }
        if(nuevoTurno[i].monitor_4!=undefined){
            id_DOM(nuevoTurno[i].id_casilla).title += nuevoTurno[i].monitor_4+'\n ';
        }
    }
}