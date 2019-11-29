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
    personas=[
    {"nombre" : "Camilo Dominguez", "rol":"monitor",    "codigo":"m_1"},
    {"nombre" : "Andres Murcia",    "rol":"monitor",    "codigo":"m_2"},
    {"nombre" : "Felipe Cetina",    "rol":"monitor",    "codigo":"m_3"},
    {"nombre" : "Fredy Riaño",      "rol":"profesor",   "codigo":"p_1"},
    {"nombre" : "Carlos Herrera",   "rol":"profesor",   "codigo":"p_2"},
    {"nombre" : "Julian contreras", "rol":"profesor",   "codigo":"p_3"},
    {"nombre" : "Jonathan Guzman",  "rol":"monitor",    "codigo":"m_4"},
    {"nombre" : "Fernando Ibañez",  "rol":"profesor",   "codigo":"p_4"},
    {"nombre" : "Jhon Ruiz",        "rol":"monitor",    "codigo":"m_5"},
    {"nombre" : "Michael Ruiz",     "rol":"monitor",    "codigo":"m_6"},
    {"nombre" : "Camilo Roa",       "rol":"profesor",   "codigo":"p_5"},
    {"nombre" : "Wilson Ramirez",   "rol":"profesor",   "codigo":"p_6"}
]

document.addEventListener("DOMContentLoaded", function event() {

    HTMLProfesor =  '<img src="svg/user_1.svg" alt="user_1.svg" class="img_user">'+
                    '<h3>Profesor</h3>';
    HTMLMonitor =   '<img src="svg/user_1.svg" alt="user_1.svg" class="img_user">'+
                    '<h3>Monitor</h3>'; 
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
    id_DOM('select_usuario_1').addEventListener('change', (event) => {
        valor = id_DOM('select_usuario_1').value;
        valorSelect(valor, event.target.id);
    });
    id_DOM('select_usuario_2').addEventListener('change', (event) => {
        valor = id_DOM('select_usuario_2').value;
        valorSelect(valor, event.target.id);
    });
    id_DOM('select_usuario_3').addEventListener('change', (event) => {
        valor = id_DOM('select_usuario_3').value;
        valorSelect(valor, event.target.id);
    });
    id_DOM('select_usuario_4').addEventListener('change', (event) => {
        valor = id_DOM('select_usuario_4').value;
        valorSelect(valor, event.target.id);
    });
    crearTabla();
    HTMLPyM();
    recorrerJson();
    if(localStorage.getItem('turnos')){
        getTurnos();
    }

    document.addEventListener('mousedown', function (e) {
        ident = e.target.id;
        clase = e.target.classList;
        // con(ident)
        // con(clase);
        for (let buscarId of arrIds) {
            if (ident == buscarId) {
                casillaFichero = ident;
                if(!clase.contains('mini_tenis')){
                    filHora = id_DOM('fil_'+ident.split('_')[1]+'_col_0').innerHTML;
                    horaTurno = filHora;
                    colCampo = id_DOM('fil_0_col_'+ident.split('_')[3]).innerHTML;
                    id_DOM('titulo_registro').innerHTML = 'Turno en el campo '+colCampo+' de</br>'+filHora ;
                    
                }else{
                    filHora=Math.ceil(Number(ident.split('_')[1])/4);
                    horaTurno = id_DOM('fil_'+filHora+'_col_0').innerHTML;
                    campoMini=Number(ident.split('_')[1])%4;
                    campoMini==0?campoMini=4:id_DOM('titulo_registro').innerHTML = 'Turno en el campo '+campoMini+' de minitenis de</br>'+horaTurno;
                    id_DOM('titulo_registro').innerHTML = 'Turno en el campo '+campoMini+' de minitenis de</br>'+horaTurno;
                    colCampo = '6';
                }
                id_DOM("overlay").classList.add('active');
                id_DOM("popup").classList.add('active');
                id_DOM("titulo_registro").classList.add('active');
                id_DOM("cerrar_popup").classList.add('active');
            }
        }
        if (ident == "cerrar_popup" || ident == "cancelar_registro") {
            cerrarTodo();
        }
        
    });
    
    // ++++++++++++++++++++++++++++++++++ excel ++++++++++++++++++++++++
    day = fechaExcel.getDate();
    month=fechaExcel.getMonth()+1;
    year= fechaExcel.getFullYear();
    dia = day+'-'+month+'-'+year;
    libroDeTrabajo = XLSX.utils.book_new();
    libroDeTrabajo.Props = {
            Title: "Descarga de Excel",
            Subject: "Prueba",
            Author: "CADS",
            CreatedDate: new Date()
    };
    libroDeTrabajo.SheetNames.push(dia);
    // let ws_data = [["hello","world",'cads', 'codigo']];
    // let ws = XLSX.utils.aoa_to_sheet(ws_data);
    contHoja = [["Nombre","Rol",'Codigo']];
    for(let i=0;i<personas.length;i++){
        contHoja.push([personas[i].nombre, personas[i].rol, personas[i].codigo]);
    }
    // libroDeTrabajo.Sheets[dia] = contHoja;
    ConverToXlsx = XLSX.utils.aoa_to_sheet(contHoja);
    libroDeTrabajo.Sheets[dia] = ConverToXlsx;
    wbout = XLSX.write(libroDeTrabajo, {bookType:'xlsx',  type: 'binary'});
    function s2ab(s) {
            let buf = new ArrayBuffer(s.length);
            let view = new Uint8Array(buf);
            for (let i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf; 
    }
    id_DOM("button-a").addEventListener('click',()=>{
            saveAs(new Blob([s2ab(wbout)]), 'Noviembre.xlsx');
    }); 
    //   ++++++++++++++++++++timbre++++++++++++++++++
    audio = id_DOM("aud_timbre2");
    setInterval(() => {
        fecha = new Date();
        // hour    =   fecha.getHours();
        minute = fecha.getMinutes();
        second = fecha.getSeconds();
        if (second == "00" && minute == "00") { audio.play() }
    }, 1000);
});
function HTMLPyM(){
    activa1=document.getElementsByClassName('select_modalidad')[0].classList.contains('active');
    activa2=document.getElementsByClassName('select_modalidad')[1].classList.contains('active');
    for(let i=0;i<4;i++){
        if(activa1){
            document.getElementsByClassName('select_modalidad')[1].getElementsByTagName('input')[i].value = '';
        }
        else{
            document.getElementsByClassName('cont_inputs')[i].innerHTML =   '<input type="text" class="input_text" id="input_nombre_'+(i+1)+'">'+
                                                                            '<input type="text" placeholder = "Acción" class="input_text" id="input_accion_'+(i+1)+'">';
            
        }
    }
}

function cerrarTodo(){
    id_DOM('overlay').classList.remove('active');
    id_DOM('popup').classList.remove('active');
    id_DOM('titulo_registro').classList.remove('active');
    id_DOM('cerrar_popup').classList.remove('active');
    document.getElementsByClassName('select_modalidad')[0].classList.remove('active');
    document.getElementsByClassName('select_modalidad')[1].classList.remove('active');
    for(let i=1;i<=4;i++){
        id_DOM('opciones_profesor_'+i).classList.remove('active');
        id_DOM('opciones_monitor_'+i).classList.remove('active');
        id_DOM('select_monitor_'+i).classList.remove('active');
        id_DOM('select_profesor_'+i).classList.remove('active');
        id_DOM('select_usuario_'+i).classList.remove('active');
        id_DOM('select_usuario_'+i).value = document.getElementsByTagName('option')[0].value;
        document.getElementsByClassName('cont_inputs')[i-1].classList.remove('active');
        // id_DOM('input_nombre_'+i).value='';
        // id_DOM('input_accion_'+i).value='';
        id_DOM('inner_profesor_'+i).classList.remove('true');
        id_DOM('inner_monitor_'+i).classList.remove('true');
    }
    HTMLPyM();
}

function inputSingles(){
    HTMLPyM();
    activa1=document.getElementsByClassName('select_modalidad')[0].classList.contains('active');
    activa2=document.getElementsByClassName('select_modalidad')[1].classList.contains('active');
    if(!activa1 && !activa2){
        document.getElementsByClassName('select_modalidad')[0].classList.add('active');
    }
    else if(activa1 && activa2){
        // document.getElementsByClassName('select_modalidad')[0].classList.add('active');
        document.getElementsByClassName('select_modalidad')[1].classList.remove('active');
        for(let i=3;i<=4;i++){
            id_DOM('select_profesor_'+i).classList.remove('active');
            id_DOM('opciones_profesor_'+i).classList.remove('active');
            id_DOM('select_monitor_'+i).classList.remove('active');
            id_DOM('opciones_monitor_'+i).classList.remove('active');
            id_DOM('select_usuario_'+i).classList.remove('active');
            id_DOM('select_usuario_'+i).value = document.getElementsByTagName('option')[0].value;
            document.getElementsByClassName('cont_inputs')[i-1].classList.remove('active');
            id_DOM('inner_profesor_'+i).classList.remove('true');
            id_DOM('inner_monitor_'+i).classList.remove('true');
        }
    }
    else{
        document.getElementsByClassName('select_modalidad')[0].classList.remove('active');
        for(let i=1;i<=4;i++){
            id_DOM('select_profesor_'+i).classList.remove('active');
            id_DOM('opciones_profesor_'+i).classList.remove('active');
            id_DOM('select_monitor_'+i).classList.remove('active');
            id_DOM('opciones_monitor_'+i).classList.remove('active');
            id_DOM('select_usuario_'+i).classList.remove('active');
            id_DOM('select_usuario_'+i).value = document.getElementsByTagName('option')[0].value;
            id_DOM('inner_profesor_'+i).classList.remove('true');
            id_DOM('inner_monitor_'+i).classList.remove('true');
            if(i<3){
                document.getElementsByClassName('cont_inputs')[i-1].classList.remove('active');
            }
        }
    }
}
const inputDoubles = () => {
    HTMLPyM();
    activa1=document.getElementsByClassName('select_modalidad')[0].classList.contains('active');
    activa2=document.getElementsByClassName('select_modalidad')[1].classList.contains('active');
    if(activa1 && !activa2){
        document.getElementsByClassName('select_modalidad')[1].classList.add('active');
    }
    else if(activa1 && activa2){
        document.getElementsByClassName('select_modalidad')[0].classList.remove('active');
        document.getElementsByClassName('select_modalidad')[1].classList.remove('active');
        for(let i=1;i<=4;i++){
            id_DOM('select_profesor_'+i).classList.remove('active');
            id_DOM('opciones_profesor_'+i).classList.remove('active');
            id_DOM('select_monitor_'+i).classList.remove('active');
            id_DOM('opciones_monitor_'+i).classList.remove('active');
            id_DOM('select_usuario_'+i).classList.remove('active');
            id_DOM('select_usuario_'+i).value = document.getElementsByTagName('option')[0].value;
            document.getElementsByClassName('cont_inputs')[i-1].classList.remove('active');
            id_DOM('inner_profesor_'+i).classList.remove('true');
            id_DOM('inner_monitor_'+i).classList.remove('true');
        }
    }
    else{
        document.getElementsByClassName('select_modalidad')[0].classList.add('active');
        document.getElementsByClassName('select_modalidad')[1].classList.add('active');
    }
}
function valorSelect(valor, id_select){
    id_select = event.target.id.substr(-1);
    if(valor === 'miembro'){   
        id_DOM('select_usuario_'+id_select).classList.add('active');
        id_DOM('input_nombre_'+id_select).placeholder='Nombre '+valor;
        // id_DOM(document.getElementsByClassName('cont_inputs')[id_select-1].getElementsByTagName('input')[0].id).placeholder='Nombre ' + valor;
        document.getElementsByClassName('cont_inputs')[id_select-1].classList.add('active');
    }
    else if(valor === 'invitado'){
        id_DOM('select_usuario_'+id_select).classList.add('active');
        id_DOM(document.getElementsByClassName('cont_inputs')[id_select-1].getElementsByTagName('input')[0].id).placeholder='Nombre ' + valor;
        document.getElementsByClassName('cont_inputs')[id_select-1].classList.add('active');
    }
    else if(valor === 'profesor'){
        id_DOM('select_usuario_'+id_select).classList.add('active');
        id_DOM('select_profesor_'+id_select).classList.add('active');
        document.getElementsByClassName('inner_profesor')[id_select-1].innerHTML = HTMLProfesor;
    }
    else if(valor === 'monitor'){
        id_DOM('select_usuario_'+id_select).classList.add('active');
        id_DOM('select_monitor_'+id_select).classList.add('active');
        document.getElementsByClassName('inner_monitor')[id_select-1].innerHTML = HTMLMonitor;
    }
}
function recorrerJson(){
    incP = incM = 0;
    for(let j = 1; j<=4; j++){{
        for(let i=0;i<personas.length;i++)
            if(personas[i].rol==='profesor'){
                incP++;
                id_DOM('opciones_'+personas[i].rol+'_'+j).innerHTML +='<div id="'+personas[i].rol+'_'+incP+'" class="opciones '+personas[i].codigo+'" onclick="clickPyM(this)"><img src="svg/user_1.svg" class="'+personas[i].codigo+'"><h4 class="'+personas[i].codigo+'">'+personas[i].nombre+'</h4></div>';
            }
            else{
                incM++;
                id_DOM('opciones_'+personas[i].rol+'_'+j).innerHTML +='<div id="'+personas[i].rol+'_'+incM+'" class="opciones '+personas[i].codigo+'" onclick="clickPyM(this)"><img src="svg/user_1.svg" class="'+personas[i].codigo+'"><h4 class="'+personas[i].codigo+'">'+personas[i].nombre+'</h4></div>';
            }
        }
    }
}
function clickPyM(attrElemento) {
    let idPadre = id_DOM(attrElemento.id).parentNode.id;
    id_DOM('inner_'+idPadre.substr(9)).innerHTML = id_DOM(attrElemento.id).innerHTML;
    id_DOM('inner_'+idPadre.substr(9)).classList.add('true');
    id_DOM(idPadre).classList.remove('active')
}
function desplegarOpciones(attrElemento){
    let indice = attrElemento.id.substr(7);
    id_DOM('opciones_'+indice).classList.toggle('active');
}
function guardarRegistro(){
    valDatos=true;
    activa1 = document.getElementsByClassName('select_modalidad')[0].classList.contains('active');
    activa2 = document.getElementsByClassName('select_modalidad')[1].classList.contains('active')
    if(activa1 && activa2)
    {
        incS=0;
        incI=0;
        incPr=0;
        incMon=0;
        for(let i=1;i<=4;i++){
            if(id_DOM('cont_inputs_'+i).classList.contains('active')){
                if(id_DOM('input_nombre_'+i).placeholder=='Nombre miembro'){
                    inputNombre = id_DOM('input_nombre_'+i).value.trim();
                    inputAccion = id_DOM('input_accion_'+i).value.trim();
                    if(inputNombre!=''&&inputAccion!=''){
                        if(valDatos){
                            arrMiembros[incS]=inputNombre;
                            incS++;
                            arrMiembros[incS]=inputAccion;
                            incS++;
                        }
                    }
                    else{
                        valDatos=false;
                        con('input_nombre_'+i+' le faltan datos')
                    }
                }
                else if(id_DOM('input_nombre_'+i).placeholder=='Nombre invitado'){
                    inputNombre = id_DOM('input_nombre_'+i).value.trim();
                    inputAccion = id_DOM('input_accion_'+i).value.trim();
                    if(inputNombre!=''&&inputAccion!=''){
                        if(valDatos){
                            arrInvitados[incI]=inputNombre;
                            incI++;
                            arrInvitados[incI]=inputAccion;
                            incI++;
                            }
                    }
                    else{
                        valDatos=false;
                        con('input_nombre_'+i+' le faltan datos')
                    }
                }
            }
            if(id_DOM('select_profesor_'+i).classList.contains('active')){
                if(id_DOM('inner_profesor_'+i).classList.contains('true')){
                    arrProfesores[incPr]=(id_DOM('inner_profesor_'+i).getElementsByTagName('h4')[0].innerHTML);
                    incPr++;
                }
                else{
                    valDatos=false;
                    // id_DOM('input_nombre_'+i).focus();
                    con('input_nombre_'+i+' le falta un profesor')
                }
            }
            else if(id_DOM('select_monitor_'+i).classList.contains('active')){
                if(id_DOM('inner_monitor_'+i).classList.contains('true')){
                    arrMonitores[incMon] = id_DOM('inner_monitor_'+i).getElementsByTagName('h4')[0].innerHTML;
                    incMon++;
                }
                else{
                    valDatos=false;
                    con('input_nombre_'+i+' le falta un monitor')
                }
            }
        }
    }
    else if(activa1 && !activa2){
        incS=0;
        incI=0;
        incPr=0;
        incMon=0;
        for(let i=1;i<=2;i++){
            if(id_DOM('cont_inputs_'+i).classList.contains('active')){
                if(id_DOM('input_nombre_'+i).placeholder=='Nombre miembro'){
                    inputNombre = id_DOM('input_nombre_'+i).value.trim();
                    inputAccion = id_DOM('input_accion_'+i).value.trim();
                    if(inputNombre!=''&&inputAccion!=''){
                        if(valDatos){
                            arrMiembros[incS]=inputNombre;
                            incS++;
                            arrMiembros[incS]=inputAccion;
                            incS++;
                        }
                    }
                    else{
                        valDatos=false;
                        con('input_nombre_'+i+' le faltan datos')
                    }
                }
                else if(id_DOM('input_nombre_'+i).placeholder=='Nombre invitado'){
                    inputNombre = id_DOM('input_nombre_'+i).value.trim();
                    inputAccion = id_DOM('input_accion_'+i).value.trim();
                    if(inputNombre!=''&&inputAccion!=''){
                        if(valDatos){
                            arrInvitados[incI]=inputNombre;
                            incI++;
                            arrInvitados[incI]=inputAccion;
                            incI++;
                            }
                    }
                    else{
                        valDatos=false;
                        con('input_nombre_'+i+' le faltan datos')
                    }
                }
            }
            else if(id_DOM('select_profesor_'+i).classList.contains('active')){
                if(id_DOM('inner_profesor_'+i).classList.contains('true')){
                    arrProfesores[incPr] = id_DOM('inner_profesor_'+i).getElementsByTagName('h4')[0].innerHTML;
                    incPr++;
                }
                else{
                    valDatos=false;
                    con('inner_profesor_'+i+' le falta un profesor')
                }
            }
            else if(id_DOM('select_monitor_'+i).classList.contains('active')){
                if(id_DOM('inner_monitor_'+i).classList.contains('true')){
                    arrMonitores[incMon] = (id_DOM('inner_monitor_'+i).getElementsByTagName('h4')[0].innerHTML);
                    incMon++;
                }
                else{
                    valDatos=false;
                    con('input_nombre_'+i+' le falta un monitor')
                }
            }
        }
    }
    else{
        alert('No has agrado ningun contenido');
        valDatos=false;
    }
    if(valDatos){
        idTurno = listadoTurnos.length;
        contExcel = contExcel.concat(idTurno,colCampo,horaTurno,arrMiembros,arrInvitados,arrProfesores,arrMonitores,casillaFichero);
        prueba=contExcel;
        let nuevoTurno = new turno(contExcel);
        listadoTurnos.push(nuevoTurno);
        arrMiembros = new Array(8);
        arrInvitados = new Array(8);
        arrProfesores = new Array(4);
        arrMonitores = new Array(4);
        imprimirTurnos(listadoTurnos, listadoTurnos.length-1);
        contExcel=[];
        idTurno++;
        localStorage.setItem('turnos',JSON.stringify(listadoTurnos))
        cerrarTodo();
        // imprimir en pantalla

    }
}
// *********IMPORTANTE 
// +++++++Constructor del turno
function getTurnos(){
    listadoTurnos = JSON.parse(localStorage.getItem('turnos'));
    imprimirTurnos(listadoTurnos,0);
}

function turno(cE)
{
    this.id_turno= cE[0];
    this.campo = cE[1];
    this.hora = cE[2];
    this.miembro_1 = cE[3];
    this.accion_1 = cE[4];
    this.miembro_2 = cE[5];
    this.accion_2 = cE[6];
    this.miembro_3 = cE[7];
    this.accion_3 = cE[8];
    this.miembro_4 = cE[9];
    this.accion_4 = cE[10];
    this.invitado_1 = cE[11];
    this.accionInv_1 = cE[12];
    this.invitado_2 = cE[13];
    this.accionInv_2 = cE[14];
    this.invitado_3 = cE[15];
    this.accionInv_3 = cE[16];
    this.invitado_4 = cE[17];
    this.accionInv_4 = cE[18];
    this.profesor_1 = cE[19];
    this.profesor_2 = cE[20];
    this.profesor_3 = cE[21];
    this.profesor_4 = cE[22];
    this.monitor_1 = cE[23];
    this.monitor_2 = cE[24];
    this.monitor_3 = cE[25];
    this.monitor_4 = cE[26];
    this.id_casilla= cE[27];
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