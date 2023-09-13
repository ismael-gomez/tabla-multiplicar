const {crearArchivo} = require("./helpers/multiplicar")
const argv =  require("./config/yargs");


console.clear()

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.blue))
    .catch(err => console.log("Algo esta fallandio :(",  err))
// console.clear()