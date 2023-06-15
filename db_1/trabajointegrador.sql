-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-04-2023 a las 15:37:15
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `trabajointegrador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `texto_comentario` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `producto_id`, `usuario_id`, `texto_comentario`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 'Buenas! Queria consultar para ir a ver este vehiculo ¿Que dias se podria ir a ver?', '2023-04-10 18:27:55', '2023-04-10 18:27:55', NULL),
(2, 1, 2, 'Hola! Que dias esta abierta la consecionaria?', '2023-04-10 18:27:55', '2023-04-10 18:27:55', NULL),
(3, 1, 3, 'Buenas! Queria sacar un turno para ir a ver este auto y consultar por una cotizacion ¿Que dias estarian disponibles?', '2023-04-10 18:27:55', '2023-04-10 18:27:55', NULL),
(4, 1, 4, 'Abren el jueves feriado por semana santa?', '2023-04-10 18:27:55', '2023-04-10 18:27:55', NULL),
(5, 2, 2, 'Hola! Hasta que horario tienen abierto los dias martes?', '2023-04-10 18:27:55', '2023-04-10 18:27:55', NULL),
(6, 2, 3, 'Buenas, me interesa este vehiculo', '2023-04-10 18:27:55', '2023-04-10 18:27:55', NULL),
(7, 2, 4, 'Me interesa mucho el auto que estás vendiendo. ¿Podrías darme más detalles sobre su historial de mantenimiento?', '2023-04-10 18:27:55', '2023-04-10 18:27:55', NULL),
(8, 2, 5, 'Estuve buscando este modelo específico durante meses, y este parece ser el adecuado. ¿Podríamos programar un test drive?', '2023-04-10 18:27:55', '2023-04-10 18:27:55', NULL),
(9, 3, 3, 'Tengo algunas preguntas sobre el kilometraje del auto. ¿Podrías aclarar si es original o si el motor ha sido reconstruido?', '2023-04-10 18:27:55', '2023-04-10 18:27:55', NULL),
(10, 3, 4, 'Este auto parece estar en excelentes condiciones, pero me gustaría llevarlo a mi mecánico antes de comprarlo. ¿Se podria permitir una inspección por parte de un mecánico de mi elección?', '2023-04-10 18:27:55', '2023-04-10 18:27:55', NULL),
(11, 3, 5, 'Estoy buscando un auto para mi hijo que acaba de obtener su  registro, podrías decirme cuánto tiempo estuvo parado el auto?', '2023-04-10 18:27:55', '2023-04-10 18:27:55', NULL),
(12, 3, 1, 'Me encanta el color de este auto. ¿Podría proporcionar algunas fotos adicionales del exterior y del interior?', '2023-04-10 18:27:55', '2023-04-10 18:27:55', NULL),
(13, 4, 4, '¿Cuál es el precio final para el auto? Estoy dispuesto a hacer una oferta, pero necesito saber tu precio de venta mínimo.', '2023-04-10 18:27:55', '2023-04-10 18:27:55', NULL),
(14, 4, 5, 'Me gusta mucho el estilo y la apariencia del auto, pero tengo algunas preocupaciones sobre la seguridad. ¿Podría proporcionar información sobre las características de seguridad?', '2023-04-10 18:27:55', '2023-04-10 18:27:55', NULL),
(15, 4, 1, 'Precio?', '2023-04-10 18:27:55', '2023-04-10 18:27:55', NULL),
(16, 4, 2, 'Estoy interesado en comprar este auto para mi negocio. ¿Podrías proporcionar una factura de venta y algún tipo de garantía?', '2023-04-10 18:27:55', '2023-04-10 18:27:55', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `nombre_producto` varchar(250) NOT NULL,
  `descripcion_producto` text DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `usuario_id`, `nombre_producto`, `descripcion_producto`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 'Toyota Supra mk4', 'Tiene un kilometraje de 150.000 km y viene con un motor  2JZ desarrollado por YAMAHA. Los 6 cilindros y dos turbocompresores generan 324 CV.', '2023-04-10 18:11:41', '2023-04-10 18:11:41', NULL),
(2, 1, 'Nissan Skyline GTR R34', 'Tiene un kilometraje de 144.586 km y viene con un motor RB26DETT, con seis cilindros en línea generando 503 CV.', '2023-04-10 18:11:41', '2023-04-10 18:11:41', NULL),
(3, 2, 'Lamborghini Aventador', 'Tiene un kilometraje de 35.869 km y viene con un motor un motor V12, el cual provee una potencia máxima de 700 CV.', '2023-04-10 18:11:41', '2023-04-10 18:11:41', NULL),
(4, 2, 'Buggatti Chiron', 'Es 0 km y viene con un motor  motor W16 a 90° sobrealimentado por cuádruples turbocompresores con una potencia de 1500 CV.', '2023-04-10 18:11:41', '2023-04-10 18:11:41', NULL),
(5, 3, 'Honda Civic 2.0 Si Mt', 'Tiene un kilometraje de 103.543 km y viene con un motor 2.0 el cual proporciona una potencia de 203 CV.', '2023-04-10 18:11:41', '2023-04-10 18:11:41', NULL),
(6, 3, 'Ferrari f40', 'Tiene un kilometraje de 23.000 km y viene con un motor V8 con cuatro válvulas por cilindro, este proporciona una potencia de 478 CV.', '2023-04-10 18:11:41', '2023-04-10 18:11:41', NULL),
(7, 4, 'Mclaren 720s', 'Es 0 km  motor V8 biturbo, que produce 720 CV.', '2023-04-10 18:11:41', '2023-04-10 18:11:41', NULL),
(8, 4, 'Toyota Yaris GR', '4.000 km, motor 1.6 Turbo listo para transferir.', '2023-04-10 18:11:41', '2023-04-10 18:11:41', NULL),
(9, 5, 'Alfa Romeo Giulia Quadrifoglio', 'La unidad cuenta con 14.000 km y un motor de 2.9 V6 con una potencia de 510cv', '2023-04-10 18:11:41', '2023-04-10 18:11:41', NULL),
(10, 5, 'Ford F-150 Raptor', '0 km con su motor 3.5l Bi-turbo y todo el confort que un usuario de Ford se merece', '2023-04-10 18:11:41', '2023-04-10 18:11:41', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `email` varchar(250) NOT NULL,
  `contrasena` varchar(250) NOT NULL,
  `foto_perfil` varchar(250) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `contrasena`, `foto_perfil`, `fecha_nacimiento`, `dni`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Alevivonecai@Gmail.com', '113355', 'fp1.jpg', '0000-00-00', 30897231, '2023-04-10 18:03:04', '2023-04-10 18:03:04', NULL),
(2, 'Cucco@Gmail.com', '779955', 'fp2.jpg', '0000-00-00', 43626147, '2023-04-10 18:03:04', '2023-04-10 18:03:04', NULL),
(3, 'Juani_morozumi@Gmail.com', '553311', 'fp3.jpg', '0000-00-00', 44459687, '2023-04-10 18:03:04', '2023-04-10 18:03:04', NULL),
(4, 'JoaquinGarcia7@Gmail.com', '557799', 'fp4.jpg', '0000-00-00', 44852753, '2023-04-10 18:03:04', '2023-04-10 18:03:04', NULL),
(5, 'Bauticanalla@dominio.com', '448866', 'fp5.jpg', '0000-00-00', 45321496, '2023-04-10 18:03:04', '2023-04-10 18:03:04', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producto_id` (`producto_id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
