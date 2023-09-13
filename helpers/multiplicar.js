const fs = require("fs")
const colors = require("colors")

async function crearArchivo(base=5, listar=false , hasta=10){
    try {        
        let salida = ''
        let consola = ''
        for(let i = 1; i <= hasta; i++){
            consola += `${base} ${"X".green} ${i} ${"=".green} ${ base * i}\n`
            salida  += `${base} X ${i} = ${ base * i}\n`
        }

        if(listar){
            console.log("===============I".green)
            console.log("     Tabla del: ".green, colors.blue( base ))
            console.log("===============F".green)
            console.log(consola)
        }

        fs.writeFileSync(`./exit/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt fue creada exitosamente!!`
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}
