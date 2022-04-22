const fs = require("fs");
const process = require('process');
const funcionesDeTareas = require(__dirname + "/funcionesDeTareas.js", "utf-8");

arrayDeObjetos =JSON.parse(fs.readFileSync("tareas.json"));

if(process.argv[2] == undefined){
    funcionesDeTareas.printWarning1();
}else{
    switch(process.argv[2]){
        case "listar":
            funcionesDeTareas.printArray(arrayDeObjetos);
        break;
        default:
            funcionesDeTareas.printWarning2();
           
    }
}