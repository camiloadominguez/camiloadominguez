let xlsx = require('xlsx');
let fs = require('fs');
let path=require('path');

let carpeta = 'Excel'

// let wb = xlsx.readFile('js/Libro1.xlsx',{cellDates:true});
// let ws = wb.Sheets["Hoja2"];
// let data = xlsx.utils.sheet_to_json(ws)
// let newData = data.map((record)=>{
//     record.net = record.Sales - record.Cost;
//     delete record.Sales;
//     delete record.Cost;
//     return record;
// });

// let newWB= xlsx.utils.book_new();
// let newWS = xlsx.utils.json_to_sheet(newData);
// xlsx.utils.book_append_sheet(newWB,newWS,'Nueva Hoja');
// xlsx.writeFile(newWB,'js/ExcelNode.xlsx');

function imprimirContDeHoja(nombre){
    let libroDeTrabajo = xlsx.readFile(nombre);
    let primeraHoja = libroDeTrabajo.SheetNames[1];
    let hojaDeTrabajo = libroDeTrabajo.Sheets[primeraHoja];
    let data = xlsx.utils.sheet_to_json(hojaDeTrabajo);
    return data;
}
let ruta = path.join(__dirname, carpeta);
let archivos = fs.readdirSync(ruta);
let allData = [];
// console.log(archivos);

archivos.forEach(archivo => {
    let separar = path.parse(archivo);
    let extension = path.parse(archivo).ext;
    if(extension === '.xlsx' && archivo[0]!== '~'){
        let allDir = path.join(__dirname,carpeta,archivo);
        let data = imprimirContDeHoja(allDir);
        allData = allData.concat(data);
        // console.log(data);
    }
});

let newExcel = xlsx.utils.book_new(); 
let newCont = xlsx.utils.json_to_sheet(allData);

xlsx.utils.book_append_sheet(newExcel,newCont,'Contenido Full');
xlsx.writeFile(newExcel,'Todo.xlsx');

// console.log(allData.length);