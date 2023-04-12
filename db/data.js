let data = {
    usuario : {
        email : 'juancazares@gmail.com',
        nombreDeUsuario : 'juanitogod11',
        contrasena : '',
        fechaDeNacimiento : '06/09/2003',
        dni : '45013211',
        fotoDePerfil : '',
        logueado: true
    },
    productos : [
        {
            imagen : '/images/toyotasupramk4.jpg',
            nombre : 'Toyota Supra mk4',
            descripcion : 'Tiene un kilometraje de 150.000 km y viene con un motor  2JZ desarrollado por YAMAHA. Los 6 cilindros y dos turbocompresores generan 324 CV.',
            fechaDeCarga : '10/03/2023',
            id : '0123456789',

        },
        {
            imagen : '/images/NissanSkylinegtrr34.jpg',
            nombre : 'Nissan Skyline GTR R34',
            descripcion : 'Tiene un kilometraje de 144.586 km y viene con un motor RB26DETT, con seis cilindros en línea generando 503 CV.',
            fechaDeCarga : '11/12/2022',
            id : '1234567891',

        }, {
            imagen : '/images/Lamboaventador.jpg',
            nombre : 'Lamborghini Aventador',
            descripcion : 'Tiene un kilometraje de 35.869 km y viene con un motor un motor V12, el cual provee una potencia máxima de 700 CV.',
            fechaDeCarga : '03/04/2023',
            id : '2345678912',

        }, {
            imagen : '/images/bugattichiron.jpg',
            nombre : 'Bugatti Chiron',
            descripcion : 'Es 0 km y viene con un motor  motor W16 a 90° sobrealimentado por cuádruples turbocompresores con una potencia de 1500 CV.',
            fechaDeCarga : '05/04/2023',
            id : '3456789123',

        }, {
            imagen : '/images/civicsimt.jpg',
            nombre : 'Honda Civic 2.0 Si Mt ',
            descripcion : 'Tiene un kilometraje de 103.543 km y viene con un motor 2.0 el cual proporciona una potencia de 203 CV.',
            fechaDeCarga : '18/08/2022',
            id : '4567891234',

        }, {
            imagen : '/images/f40.jpg',
            nombre : 'Ferrari f40',
            descripcion : 'Tiene un kilometraje de 23.000 km y viene con un motor V8 con cuatro válvulas por cilindro, este proporciona una potencia de 478 CV.',
            fechaDeCarga : '20/05/2022',
            id : '5678912345',

        }, {
            imagen : '/images/720s.jpg',
            nombre : 'Mclaren 720s',
            descripcion : 'Es 0 km  motor V8 biturbo, que produce 720 CV ',
            fechaDeCarga : '12/03/2023',
            id : '6789123456',

        }, {
            imagen : '/images/yarisgr.jpg',
            nombre : 'Toyota Yaris GR',
            descripcion : '4.000 km, motor 1.6 Turbo listo para transferir',
            fechaDeCarga : '10/04/2023',
            id : '',

        }, {
            imagen : '/images/AlfaGiulia.jpeg',
            nombre : 'Alfa Romeo Giulia Quadrifoglio',
            descripcion : 'La unidad cuenta con 14.000 km y un motor de 2.9 V6 con una potencia de 510cv',
            fechaDeCarga : '15/03/2023',
            id : '',
        
        }, {
            imagen : '/images/FordF150.jpg',
            nombre : 'Ford F-150 Raptor',
            descripcion : '0 km con su motor 3.5l Bi-turbo y todo el confort que un usuario de Ford se merece',
            fechaDeCarga : '04/01/2023',
            id : '',
        }
    ],
    comentarios : [ 
        {
            nombreDeUs : 'Alevivonecai',
            textoDelComentario : 'Buenas! Queria consultar para ir a ver el Honda ¿Que dias se podria ir a ver?',
            fotoDePer : '',

        },{
            nombreDeUs : 'Cucco',
            textoDelComentario : 'Hola! Que dias esta abierta la consecionaria?',
            fotoDePer : '',

        },{
            nombreDeUs : 'Juani_morozumi',
            textoDelComentario : 'Buenas! Queria sacar un turno para ir a ver el Ferrari f40 y consultar por una cotizacion ¿Que dias estarian disponibles?',
            fotoDePer : '',

        },{
            nombreDeUs : 'JoaquinGarcia7',
            textoDelComentario : 'Abren el jueves feriado por semana santa? ',
            fotoDePer : '',

        },{
            nombreDeUs : 'Cucco',
            textoDelComentario : 'Hola! Hasta que horario tienen abierto los dias martes?',
            fotoDePer : '',

        },{
            nombreDeUs : 'Juani_morozumi',
            textoDelComentario : 'Buenas, me interesa el vehiculo',
            fotoDePer : '',
       
        },{
            nombreDeUs : 'JoaquinGarcia7',
            textoDelComentario : 'Me interesa mucho el auto que estás vendiendo. ¿Podrías darme más detalles sobre su historial de mantenimiento?',
            fotoDePer : '',

        },{
            nombreDeUs : 'Bauticanalla',
            textoDelComentario : 'Estuve buscando este modelo específico durante meses, y este parece ser el adecuado. ¿Podríamos programar un test drive?',
            fotoDePer : '',
        
        },{
            nombreDeUs : 'Juani_Morozumi',
            textoDelComentario : 'Tengo algunas preguntas sobre el kilometraje del auto. ¿Podrías aclarar si es original o si el motor ha sido reconstruido?',
            fotoDePer : '',
        
        },{
            nombreDeUs : 'JoaquinGarcia7',
            textoDelComentario : 'Este auto parece estar en excelentes condiciones, pero me gustaría llevarlo a mi mecánico antes de comprarlo. ¿Se podria permitir una inspección por parte de un mecánico de mi elección?',
            fotoDePer : '',
      
        },{
            nombreDeUs : 'Bauticanalla',
            textoDelComentario : 'Estoy buscando un auto para mi hijo que acaba de obtener su  registro, podrías decirme cuánto tiempo estuvo parado el auto?',
            fotoDePer : '',
        },{
            nombreDeUs : 'Alevivonecai',
            textoDelComentario : 'Me encanta el color de este auto. ¿Podría proporcionar algunas fotos adicionales del exterior y del interior?',
            fotoDePer : '',
            
        },{
            nombreDeUs : 'JoaquinGarcia7',
            textoDelComentario : '¿Cuál es el precio final para el auto? Estoy dispuesto a hacer una oferta, pero necesito saber tu precio de venta mínimo.',
            fotoDePer : '',
       
        },{
            nombreDeUs : 'Bauticanalla',
            textoDelComentario : 'Me gusta mucho el estilo y la apariencia del auto, pero tengo algunas preocupaciones sobre la seguridad. ¿Podría proporcionar información sobre las características de seguridad?',
            fotoDePer : '',
        
        },{
            nombreDeUs : 'Alevivonecai',
            textoDelComentario : 'Precio?',
            fotoDePer : '',
        
        },{
            nombreDeUs : 'Cucco',
            textoDelComentario : 'Estoy interesado en comprar este auto para mi negocio. ¿Podrías proporcionar una factura de venta y algún tipo de garantía?',
            fotoDePer : '',
        }
    ],


}
module.exports = data;