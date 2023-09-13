
const argv = require('yargs')
    .option('b',{
        alias :'base',
        demandOption : true,
        description : "Es la base de la tabla de multiplicar",
        type : "number",
    })
    .option('l',{
        alias : "listar", 
        default : false, 
        description : "Es la que muestra la tabla de multiplicar",
        type : "boolean",
    })
    .option('h',{
        alias : 'hasta',
        demandOption : true,
        description : "Es hasta donde quieres que llegue la tabla de multiplicar", 
        type : "number"
    })
    .check((argv, options)=>{
        if(isNaN (argv.b)){
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .check((argv,option)=>{
        if(isNaN (argv.h)){
            throw 'El valor la que debe de llegar debe de ser un numero '
        }
        return true
    })
    .argv

module.exports = argv;

            