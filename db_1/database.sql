
CREATE SCHEMA tpintegrador;
USE tpintegrador;
CREATE TABLE `comentarios` (
  `id` int unsigned primary key auto_increment NOT NULL,
  `products_id` int(11) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  `comentario` varchar (500),
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comments`
--

INSERT INTO `comentarios` (`id`, `products_id`, `users_id`, `comentario`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Buenas! Queria consultar para ir a ver este vehiculo ¿Que dias se podria ir a ver?', '2023-04-10 18:27:55', '2023-04-10 18:27:55'),
(2, 1, 2, 'Hola! Que dias esta abierta la consecionaria?', '2023-04-10 18:27:55', '2023-04-10 18:27:55'),
(3, 1, 3, 'Buenas! Queria sacar un turno para ir a ver este auto y consultar por una cotizacion ¿Que dias estarian disponibles?', '2023-04-10 18:27:55', '2023-04-10 18:27:55'),
(4, 1, 4, 'Abren el jueves feriado por semana santa?', '2023-04-10 18:27:55', '2023-04-10 18:27:55'),
(5, 2, 2, 'Hola! Hasta que horario tienen abierto los dias martes?', '2023-04-10 18:27:55', '2023-04-10 18:27:55'),
(6, 2, 3, 'Buenas, me interesa este vehiculo', '2023-04-10 18:27:55', '2023-04-10 18:27:55'),
(7, 2, 4, 'Me interesa mucho el auto que estás vendiendo. ¿Podrías darme más detalles sobre su historial de mantenimiento?', '2023-04-10 18:27:55', '2023-04-10 18:27:55'),
(8, 2, 5, 'Estuve buscando este modelo específico durante meses, y este parece ser el adecuado. ¿Podríamos programar un test drive?', '2023-04-10 18:27:55', '2023-04-10 18:27:55'),
(9, 3, 3, 'Tengo algunas preguntas sobre el kilometraje del auto. ¿Podrías aclarar si es original o si el motor ha sido reconstruido?', '2023-04-10 18:27:55', '2023-04-10 18:27:55'),
(10, 3, 4, 'Este auto parece estar en excelentes condiciones, pero me gustaría llevarlo a mi mecánico antes de comprarlo. ¿Se podria permitir una inspección por parte de un mecánico de mi elección?', '2023-04-10 18:27:55', '2023-04-10 18:27:55'),
(11, 3, 5, 'Estoy buscando un auto para mi hijo que acaba de obtener su  registro, podrías decirme cuánto tiempo estuvo parado el auto?', '2023-04-10 18:27:55', '2023-04-10 18:27:55'),
(12, 3, 1, 'Me encanta el color de este auto. ¿Podría proporcionar algunas fotos adicionales del exterior y del interior?', '2023-04-10 18:27:55', '2023-04-10 18:27:55'),
(13, 4, 4, '¿Cuál es el precio final para el auto? Estoy dispuesto a hacer una oferta, pero necesito saber tu precio de venta mínimo.', '2023-04-10 18:27:55', '2023-04-10 18:27:55'),
(14, 4, 5, 'Me gusta mucho el estilo y la apariencia del auto, pero tengo algunas preocupaciones sobre la seguridad. ¿Podría proporcionar información sobre las características de seguridad?', '2023-04-10 18:27:55', '2023-04-10 18:27:55'),
(15, 4, 1, 'Precio?', '2023-04-10 18:27:55', '2023-04-10 18:27:55'),
(16, 4, 2, 'Estoy interesado en comprar este auto para mi negocio. ¿Podrías proporcionar una factura de venta y algún tipo de garantía?', '2023-04-10 18:27:55', '2023-04-10 18:27:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `followers`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `productos` (
  `id` int unsigned primary key auto_increment NOT NULL,
  `users_id` int(11) DEFAULT NULL,
  `photo` varchar(1000) NULL,
  `model` varchar(100) NOT NULL,
  `description` varchar (500), 
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `productos` (`id`, `users_id`, `photo`, `model`, `description`, `created_at`, `updated_at`) VALUES
(1, 1, '/images/toyotasupramk4.jpg', 'Toyota Supra mk4', 'Tiene un kilometraje de 150.000 km y viene con un motor  2JZ desarrollado por YAMAHA. Los 6 cilindros y dos turbocompresores generan 324 CV.', '2023-04-10 18:11:41', '2023-04-10 18:11:41'),
(2, 1, '/images/NissanSkylinegtrr34.jpg', 'Nissan Skyline GTR R34', 'Tiene un kilometraje de 144.586 km y viene con un motor RB26DETT, con seis cilindros en línea generando 503 CV.', '2023-04-10 18:11:41', '2023-04-10 18:11:41'),
(3, 2, '/images/Lamboaventador.jpg', 'Lamborghini Aventador', 'Tiene un kilometraje de 35.869 km y viene con un motor un motor V12, el cual provee una potencia máxima de 700 CV.', '2023-04-10 18:11:41', '2023-04-10 18:11:41'),
(4, 2, '/images/bugattichiron.jpg', 'Buggatti Chiron', 'Es 0 km y viene con un motor  motor W16 a 90° sobrealimentado por cuádruples turbocompresores con una potencia de 1500 CV.', '2023-04-10 18:11:41', '2023-04-10 18:11:41'),
(5, 3, '/images/civicsimt.jpg', 'Honda Civic 2.0 Si Mt', 'Tiene un kilometraje de 103.543 km y viene con un motor 2.0 el cual proporciona una potencia de 203 CV.', '2023-04-10 18:11:41', '2023-04-10 18:11:41'),
(6, 3, '/images/f40.jpg', 'Ferrari f40', 'Tiene un kilometraje de 23.000 km y viene con un motor V8 con cuatro válvulas por cilindro, este proporciona una potencia de 478 CV.', '2023-04-10 18:11:41', '2023-04-10 18:11:41'),
(7, 4,'/images/720s.jpg', 'Mclaren 720s', 'Es 0 km  motor V8 biturbo, que produce 720 CV.', '2023-04-10 18:11:41', '2023-04-10 18:11:41'),
(8, 4, '/images/yarisgr.jpg', 'Toyota Yaris GR', '4.000 km, motor 1.6 Turbo listo para transferir.', '2023-04-10 18:11:41', '2023-04-10 18:11:41'),
(9, 5, '/images/AlfaGiulia.jepg',  'Alfa Romeo Giulia Quadrifoglio', 'La unidad cuenta con 14.000 km y un motor de 2.9 V6 con una potencia de 510cv', '2023-04-10 18:11:41', '2023-04-10 18:11:41'),
(10, 5, '/images/FordF150.jpg', 'Ford F-150 Raptor', '0 km con su motor 3.5l Bi-turbo y todo el confort que un usuario de Ford se merece', '2023-04-10 18:11:41', '2023-04-10 18:11:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `usuarios` (
  `id` int unsigned primary key auto_increment NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL UNIQUE,
  `contrasena` varchar(250) NOT NULL,
  `foto` varchar(200) NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `contrasena`, `foto`,`created_at`, `updated_at`) VALUES
(1,'Alejandro', 'Vivone', 'Alevivonecai@Gmail.com', '113355', '/images/users/alevivone.PNG', default, default),
(2, 'Lautaro','Cucco', 'Cucco@Gmail.com', '779955','/images/users/hasbu.jpg', default, default),
(3, 'Juani', 'Morozumi',  'Juani_morozumi@Gmail.com', '553311', '/images/users/river.jpg', default, default),
(4, 'Joaquin', 'Garcia',  'JoaquinGarcia7@Gmail.com', '557799', '/images/users/Lebron.jpg',default, default),
(5, 'Bautista', 'Remoldino', 'Bauticanalla@Gmail.com', '448866', '/images/users/canalla.jpg',default, default);