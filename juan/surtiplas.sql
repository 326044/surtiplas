-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 11-12-2012 a las 00:07:05
-- Versión del servidor: 5.5.16
-- Versión de PHP: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `surtiplas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE IF NOT EXISTS `categoria` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(15) DEFAULT NULL,
  `descripcion` text,
  `codigo_producto` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `categoria`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE IF NOT EXISTS `clientes` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `cedula` varchar(10) NOT NULL,
  `razon_social` varchar(50) DEFAULT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `apellido` varchar(30) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `nombre_contacto` varchar(10) NOT NULL,
  `celular` varchar(20) DEFAULT NULL,
  `foto` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `maximo_credito` varchar(20) DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  `comentario` varchar(50) DEFAULT NULL,
  `documentos_de_Soporte` varchar(50) DEFAULT NULL,
  `responsable` varchar(20) DEFAULT NULL,
  `fecha` date NOT NULL,
  `codMunicipio` int(11) NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=130 ;

--
-- Volcar la base de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `cedula`, `razon_social`, `nombre`, `apellido`, `direccion`, `telefono`, `nombre_contacto`, `celular`, `foto`, `email`, `maximo_credito`, `estado`, `comentario`, `documentos_de_Soporte`, `responsable`, `fecha`, `codMunicipio`) VALUES
(1, '1088318256', 'Soto', 'Jonatan', 'Zapata', 'Samaria', '3219988', 'Laura', '3153163215', NULL, 'soto9406@hotmail.com', '10000000', NULL, NULL, NULL, NULL, '2012-11-23', 854),
(2, '1087145231', 'Suzuki ', 'Juan Pablo', 'Zapata', 'Samaria', '3219951', 'Luis', '3215647451', NULL, 'jusnPQ@hotmail.com', NULL, NULL, NULL, NULL, NULL, '2012-11-26', 4),
(123, '108831256', 'yutru', 'Yuliana', 'Trujillo', 'Molinos', '3219080', 'Jonatan', '3105416566', NULL, 'yutru@gmail.com', NULL, NULL, NULL, NULL, NULL, '2012-11-28', 854),
(124, 'null', 'CrisPeta', 'Cris', 'Peta', 'Frailes', '3215645', 'Juan', '3215648952', 'null', 'null', 'null', NULL, NULL, 'null', 'null', '2012-11-28', 854),
(125, 'null', 'DDR', 'Sandra', 'Cifuentes', 'El Poblado ', '3219080', 'Jonatan', '3152452', 'null', 'null', 'null', NULL, NULL, 'null', 'null', '2012-01-04', 854),
(126, 'null', 'Colgate', 'Monica', 'Ceballos', 'EL Jardin ', '3215251', 'Edwin', '321562515', 'null', 'null', 'null', NULL, NULL, 'null', 'null', '2012-06-03', 854),
(127, 'null', 'BB', 'Celeste', 'Moncada', 'Samaria', '3219100', 'Yesenia', '3153632514', 'null', 'null', 'null', NULL, NULL, 'null', 'null', '2012-12-03', 4),
(128, 'null', 'mostos jc', 'juan jarvey', 'castaño alvarez', 'cr5 n6-20', '3306643', 'null', '3006152458', 'null', 'juancho31768', 'null', NULL, NULL, 'null', 'null', '2012-12-06', 854),
(129, 'null', 'juanaguirre S.A', 'juan', 'aguirre', 'cr21 n15-50', '3306578', 'null', '3212274859', 'null', 'juanaguirre@hotmail.com', 'null', NULL, NULL, 'null', 'null', '2012-12-07', 854);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colores`
--

CREATE TABLE IF NOT EXISTS `colores` (
  `cod_color` int(11) NOT NULL AUTO_INCREMENT,
  `color` varchar(11) NOT NULL,
  PRIMARY KEY (`cod_color`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Volcar la base de datos para la tabla `colores`
--

INSERT INTO `colores` (`cod_color`, `color`) VALUES
(2, 'negro'),
(3, 'rojo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coloresprod`
--

CREATE TABLE IF NOT EXISTS `coloresprod` (
  `id_coloresProd` int(11) NOT NULL AUTO_INCREMENT,
  `cod_color` int(11) NOT NULL,
  `codigo_producto` int(11) NOT NULL,
  PRIMARY KEY (`id_coloresProd`),
  KEY `codigo_producto` (`codigo_producto`),
  KEY `identificador` (`cod_color`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcar la base de datos para la tabla `coloresprod`
--

INSERT INTO `coloresprod` (`id_coloresProd`, `cod_color`, `codigo_producto`) VALUES
(1, 2, 1),
(2, 3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE IF NOT EXISTS `departamentos` (
  `cod_departamento` varchar(40) NOT NULL,
  `nombre_depto` varchar(40) NOT NULL,
  PRIMARY KEY (`cod_departamento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcar la base de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`cod_departamento`, `nombre_depto`) VALUES
('05', 'Antioquia'),
('08', 'Atlántico'),
('11', 'Bogotá D.C'),
('13', 'Bolívar'),
('15', 'Boyacá'),
('17', 'Caldas'),
('18', 'Caquetá'),
('19', 'Cauca'),
('20', 'Cesar'),
('23', 'Córdoba'),
('25', 'Cundinamarca'),
('27', 'Chocó'),
('41', 'Huila'),
('44', 'La Guajira'),
('47', 'Magdalena'),
('50', 'Meta'),
('52', 'Nariño'),
('54', 'Norte de Santander'),
('63', 'Quindío'),
('66', 'Risaralda'),
('68', 'Santander'),
('70', 'Sucre'),
('73', 'Tolima'),
('76', 'Valle del Cauca'),
('81', 'Arauca'),
('85', 'Casanare'),
('86', 'Putumayo'),
('88', 'San Andrés'),
('91', 'Amazonas'),
('94', 'Guainía'),
('95', 'Guaviare'),
('97', 'Vaupés'),
('99', 'Vichada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `devolucion`
--

CREATE TABLE IF NOT EXISTS `devolucion` (
  `cedula_cliente` varchar(10) DEFAULT NULL,
  `id_cliente` varchar(12) DEFAULT NULL,
  `nombre_cliente` varchar(10) NOT NULL,
  `codigo_producto` varchar(12) DEFAULT NULL,
  `nombre_producto` varchar(12) DEFAULT NULL,
  `nombre_vendedor` varchar(10) DEFAULT NULL,
  `causa_devolucion` text,
  `id_devolucion` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_devolucion`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcar la base de datos para la tabla `devolucion`
--

INSERT INTO `devolucion` (`cedula_cliente`, `id_cliente`, `nombre_cliente`, `codigo_producto`, `nombre_producto`, `nombre_vendedor`, `causa_devolucion`, `id_devolucion`) VALUES
('3148623085', '0021', 'Kelly Cast', '115', 'Mantel', 'Carlos', 'Desperfectos con el producto.', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lineaprod`
--

CREATE TABLE IF NOT EXISTS `lineaprod` (
  `id_lineaprod` int(11) NOT NULL AUTO_INCREMENT,
  `cod_linea` int(11) NOT NULL,
  `codigo_producto` int(11) NOT NULL,
  PRIMARY KEY (`id_lineaprod`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcar la base de datos para la tabla `lineaprod`
--

INSERT INTO `lineaprod` (`id_lineaprod`, `cod_linea`, `codigo_producto`) VALUES
(1, 1, 1),
(2, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `linea_produccion`
--

CREATE TABLE IF NOT EXISTS `linea_produccion` (
  `cod_linea` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_linea` varchar(25) NOT NULL,
  PRIMARY KEY (`cod_linea`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcar la base de datos para la tabla `linea_produccion`
--

INSERT INTO `linea_produccion` (`cod_linea`, `nombre_linea`) VALUES
(1, 'motociclista'),
(2, 'infantil');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `material`
--

CREATE TABLE IF NOT EXISTS `material` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `material` text NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcar la base de datos para la tabla `material`
--

INSERT INTO `material` (`codigo`, `material`) VALUES
(1, 'poliester PvC'),
(2, 'lindasoft 100');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materialprod`
--

CREATE TABLE IF NOT EXISTS `materialprod` (
  `id_materialProd` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` int(11) NOT NULL,
  `codigo_producto` int(11) NOT NULL,
  PRIMARY KEY (`id_materialProd`),
  KEY `codigo` (`codigo`),
  KEY `codigo_producto` (`codigo_producto`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcar la base de datos para la tabla `materialprod`
--

INSERT INTO `materialprod` (`id_materialProd`, `codigo`, `codigo_producto`) VALUES
(1, 1, 1),
(2, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipios`
--

CREATE TABLE IF NOT EXISTS `municipios` (
  `codMunicipio` int(11) NOT NULL AUTO_INCREMENT,
  `NombreMunicipio` varchar(40) NOT NULL,
  `nombre_depto` varchar(40) NOT NULL,
  `cod_departamento` varchar(40) NOT NULL,
  PRIMARY KEY (`codMunicipio`),
  KEY `cod_departamento` (`cod_departamento`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1077 ;

--
-- Volcar la base de datos para la tabla `municipios`
--

INSERT INTO `municipios` (`codMunicipio`, `NombreMunicipio`, `nombre_depto`, `cod_departamento`) VALUES
(1, 'Bogotá D.C', 'Bogotá D.C', '11'),
(2, 'Puerto Nariño', 'Amazonas', '91'),
(3, 'Leticia', 'Amazonas', '91'),
(4, 'Medellín', 'Antioquia', '05'),
(5, 'Abejorral', 'Antioquia', '05'),
(6, 'Abriaqui', 'Antioquia', '05'),
(7, 'Alejandría', 'Antioquia', '05'),
(8, 'Amagá', 'Antioquia', '05'),
(9, 'Amalfi', 'Antioquia', '05'),
(10, 'Andes', 'Antioquia', '05'),
(11, 'Angelópolis', 'Antioquia', '05'),
(12, 'Angostura', 'Antioquia', '05'),
(13, 'Anorí', 'Antioquia', '05'),
(14, 'Antioquia', 'Antioquia', '05'),
(15, 'Anzá', 'Antioquia', '05'),
(16, 'Apartadó', 'Antioquia', '05'),
(17, 'Arboletes', 'Antioquia', '05'),
(18, 'Argelia', 'Antioquia', '05'),
(19, 'Armenia', 'Antioquia', '05'),
(20, 'Barbosa', 'Antioquia', '05'),
(21, 'Belmira', 'Antioquia', '05'),
(22, 'Bello', 'Antioquia', '05'),
(23, 'Betania', 'Antioquia', '05'),
(24, 'Betulia', 'Antioquia', '05'),
(25, 'Bolívar', 'Antioquia', '05'),
(26, 'Briseño', 'Antioquia', '05'),
(27, 'Buriticá', 'Antioquia', '05'),
(28, 'Cáceres', 'Antioquia', '05'),
(29, 'Caicedo', 'Antioquia', '05'),
(30, 'Caldas', 'Antioquia', '05'),
(31, 'Campamento', 'Antioquia', '05'),
(32, 'Cañasgordas', 'Antioquia', '05'),
(33, 'Caracolí', 'Antioquia', '05'),
(34, 'Caramanta', 'Antioquia', '05'),
(35, 'Carepa', 'Antioquia', '05'),
(36, 'Carmen de Viboral', 'Antioquia', '05'),
(37, 'Carolina', 'Antioquia', '05'),
(38, 'Caucasia', 'Antioquia', '05'),
(39, 'Chigorodó', 'Antioquia', '05'),
(40, 'Cisneros', 'Antioquia', '05'),
(41, 'Cocorná', 'Antioquia', '05'),
(42, 'Concepción', 'Antioquia', '05'),
(43, 'Concordia', 'Antioquia', '05'),
(44, 'Copacabana', 'Antioquia', '05'),
(45, 'Dabeiba', 'Antioquia', '05'),
(46, 'Don Matías', 'Antioquia', '05'),
(47, 'Ebéjico', 'Antioquia', '05'),
(48, 'El Bagre', 'Antioquia', '05'),
(49, 'Entrerríos', 'Antioquia', '05'),
(50, 'Envigado', 'Antioquia', '05'),
(51, 'Fredonia', 'Antioquia', '05'),
(52, 'Frontino', 'Antioquia', '05'),
(53, 'Giraldo', 'Antioquia', '05'),
(54, 'Girardota', 'Antioquia', '05'),
(55, 'Gómez Plata', 'Antioquia', '05'),
(56, 'Granada', 'Antioquia', '05'),
(57, 'Guadalupe', 'Antioquia', '05'),
(58, 'Guarne', 'Antioquia', '05'),
(59, 'Guatapé', 'Antioquia', '05'),
(60, 'Heliconia', 'Antioquia', '05'),
(61, 'Hispania', 'Antioquia', '05'),
(62, 'Itagüí', 'Antioquia', '05'),
(63, 'Ituango', 'Antioquia', '05'),
(64, 'Jardín', 'Antioquia', '05'),
(65, 'Jericó', 'Antioquia', '05'),
(66, 'La Ceja', 'Antioquia', '05'),
(67, 'La Estrella', 'Antioquia', '05'),
(68, 'La Pintada', 'Antioquia', '05'),
(69, 'La Unión', 'Antioquia', '05'),
(70, 'Liborina', 'Antioquia', '05'),
(71, 'Maceo', 'Antioquia', '05'),
(72, 'Marinilla', 'Antioquia', '05'),
(73, 'Montebello', 'Antioquia', '05'),
(74, 'Murindó', 'Antioquia', '05'),
(75, 'Mutatá', 'Antioquia', '05'),
(76, 'Nariño', 'Antioquia', '05'),
(77, 'Necoclí', 'Antioquia', '05'),
(78, 'Nechí', 'Antioquia', '05'),
(79, 'Olaya', 'Antioquia', '05'),
(80, 'Peñol', 'Antioquia', '05'),
(81, 'Peque', 'Antioquia', '05'),
(82, 'Pueblorrico', 'Antioquia', '05'),
(83, 'Puerto Berrío', 'Antioquia', '05'),
(84, 'Puerto Nare', 'Antioquia', '05'),
(85, 'Puerto Triunfo', 'Antioquia', '05'),
(86, 'Remedios', 'Antioquia', '05'),
(87, 'Retiro', 'Antioquia', '05'),
(88, 'Rionegro', 'Antioquia', '05'),
(89, 'Sabanalarga', 'Antioquia', '05'),
(90, 'Sabaneta', 'Antioquia', '05'),
(91, 'Salgar', 'Antioquia', '05'),
(92, 'San Andrés', 'Antioquia', '05'),
(93, 'San Carlos', 'Antioquia', '05'),
(94, 'San francisco', 'Antioquia', '05'),
(95, 'San Jerónimo', 'Antioquia', '05'),
(96, 'San José de Montaña', 'Antioquia', '05'),
(97, 'San Juan de Urabá', 'Antioquia', '05'),
(98, 'San Luis', 'Antioquia', '05'),
(99, 'San Pedro', 'Antioquia', '05'),
(100, 'San Pedro de Urabá', 'Antioquia', '05'),
(101, 'San Rafael', 'Antioquia', '05'),
(102, 'San Roque', 'Antioquia', '05'),
(103, 'San Vicente', 'Antioquia', '05'),
(104, 'Santa Bárbara', 'Antioquia', '05'),
(105, 'Santa Rosa de Osos', 'Antioquia', '05'),
(106, 'Santo Domingo', 'Antioquia', '05'),
(107, 'Santuario', 'Antioquia', '05'),
(108, 'Segovia', 'Antioquia', '05'),
(109, 'Sonsón', 'Antioquia', '05'),
(110, 'Sopetrán', 'Antioquia', '05'),
(111, 'Támesis', 'Antioquia', '05'),
(112, 'Tarazá', 'Antioquia', '05'),
(113, 'Tarso', 'Antioquia', '05'),
(114, 'Titiribí', 'Antioquia', '05'),
(115, 'Toledo', 'Antioquia', '05'),
(116, 'Turbo', 'Antioquia', '05'),
(117, 'Uramita', 'Antioquia', '05'),
(118, 'Urrao', 'Antioquia', '05'),
(119, 'Valdivia', 'Antioquia', '05'),
(120, 'Valparaíso', 'Antioquia', '05'),
(121, 'Vegachí', 'Antioquia', '05'),
(122, 'Venecia', 'Antioquia', '05'),
(123, 'Vigía del Fuerte', 'Antioquia', '05'),
(124, 'Yalí', 'Antioquia', '05'),
(125, 'Yarumal', 'Antioquia', '05'),
(126, 'Yolombó', 'Antioquia', '05'),
(127, 'Yondó (Casabe)', 'Antioquia', '05'),
(128, 'Zaragoza', 'Antioquia', '05'),
(129, 'Arauca', 'Arauca', '81'),
(130, 'Arauquita', 'Arauca', '81'),
(131, 'Cravo Norte', 'Arauca', '81'),
(132, 'Fortul', 'Arauca', '81'),
(133, 'Puerto Rondón', 'Arauca', '81'),
(134, 'Fortul', 'Arauca', '81'),
(135, 'Puerto Rondón', 'Arauca', '81'),
(136, 'Saravena', 'Arauca', '81'),
(137, 'Tame', 'Arauca', '81'),
(138, 'Barranquilla', 'Atlantico', '08'),
(139, 'Baranoa', 'Atlantico', '08'),
(140, 'Campo de la Cruz', 'Atlantico', '08'),
(141, 'Candelaria', 'Atlantico', '08'),
(142, 'Galapa', 'Atlantico', '08'),
(143, 'Juan de Acosta', 'Atlantico', '08'),
(144, 'Luruaco', 'Atlantico', '08'),
(145, 'Malambo', 'Atlantico', '08'),
(146, 'Manatí', 'Atlantico', '08'),
(147, 'Palmar de Varela', 'Atlantico', '08'),
(148, 'Piojó', 'Atlantico', '08'),
(149, 'Polonuevo', 'Atlantico', '08'),
(150, 'Ponedera', 'Atlantico', '08'),
(151, 'Puerto Colombia', 'Atlantico', '08'),
(152, 'Repelón', 'Atlantico', '08'),
(153, 'Sabanagrande', 'Atlantico', '08'),
(154, 'Sabanalarga', 'Atlantico', '08'),
(155, 'Santa Lucía', 'Atlantico', '08'),
(156, 'Santo Tomás', 'Atlantico', '08'),
(157, 'Soledad', 'Atlantico', '08'),
(158, 'Suán', 'Atlantico', '08'),
(159, 'Tubará', 'Atlantico', '08'),
(160, 'Usiacurí', 'Atlantico', '08'),
(161, 'Cartagena', 'Bolívar', '13'),
(162, 'Achí', 'Bolívar', '13'),
(163, 'Altos del Rosario', 'Bolívar', '13'),
(164, 'Arenal', 'Bolívar', '13'),
(165, 'Arjona', 'Bolívar', '13'),
(166, 'Arroyohondo', 'Bolívar', '13'),
(167, 'Barranco de Loba', 'Bolívar', '13'),
(168, 'Calamar', 'Bolívar', '13'),
(169, 'Cantagallo', 'Bolívar', '13'),
(170, 'Cicuto', 'Bolívar', '13'),
(171, 'Córdoba', 'Bolívar', '13'),
(172, 'Clemencia', 'Bolívar', '13'),
(173, 'El Carmen de Bolívar', 'Bolívar', '13'),
(174, 'El Guamo', 'Bolívar', '13'),
(175, 'El Peñón', 'Bolívar', '13'),
(176, 'Hatillo de Loba', 'Bolívar', '13'),
(177, 'Magangue', 'Bolívar', '13'),
(178, 'Mahates', 'Bolívar', '13'),
(179, 'Margarita', 'Bolívar', '13'),
(180, 'María la Baja', 'Bolívar', '13'),
(181, 'Montecristo', 'Bolívar', '13'),
(182, 'Mompós', 'Bolívar', '13'),
(183, 'Morales', 'Bolívar', '13'),
(184, 'Pinillos', 'Bolívar', '13'),
(185, 'Regidor', 'Bolívar', '13'),
(186, 'Río Viejo', 'Bolívar', '13'),
(187, 'San Cristóbal', 'Bolívar', '13'),
(188, 'San Estanislao', 'Bolívar', '13'),
(189, 'San Fernando', 'Bolívar', '13'),
(190, 'San Jacinto', 'Bolívar', '13'),
(191, 'San Jacinto del Cauca', 'Bolívar', '13'),
(192, 'San Juan Nepomuceno', 'Bolívar', '13'),
(193, 'San Martín de Loba', 'Bolívar', '13'),
(194, 'San Pablo', 'Bolívar', '13'),
(195, 'Santa Catalina', 'Bolívar', '13'),
(196, 'Santa Rosa', 'Bolívar', '13'),
(197, 'Santa Rosa del Sur', 'Bolívar', '13'),
(198, 'Simití', 'Bolívar', '13'),
(199, 'Soplaviento', 'Bolívar', '13'),
(200, 'Talaigua Nuevo', 'Bolívar', '13'),
(201, 'Tiquisio (Puerto Rico)', 'Bolívar', '13'),
(202, 'Turbaco', 'Bolívar', '13'),
(203, 'Turbaná', 'Bolívar', '13'),
(204, 'Villanueva', 'Bolívar', '13'),
(205, 'Zambrano', 'Bolívar', '13'),
(206, 'Tunja', 'Boyacá', '15'),
(207, 'Almeida', 'Boyacá', '15'),
(208, 'Aquitania', 'Boyacá', '15'),
(209, 'Arcabuco', 'Boyacá', '15'),
(210, 'Belén', 'Boyacá', '15'),
(211, 'Berbeo', 'Boyacá', '15'),
(212, 'Beteitiva', 'Boyacá', '15'),
(213, 'Boavita', 'Boyacá', '15'),
(214, 'Boyacá', 'Boyacá', '15'),
(215, 'Briseño', 'Boyacá', '15'),
(216, 'Buenavista', 'Boyacá', '15'),
(217, 'Busbanzá', 'Boyacá', '15'),
(218, 'Caldas', 'Boyacá', '15'),
(219, 'Campohermoso', 'Boyacá', '15'),
(220, 'Cerinza', 'Boyacá', '15'),
(221, 'Chinavita', 'Boyacá', '15'),
(222, 'Chiquinquirá', 'Boyacá', '15'),
(223, 'Chiscas', 'Boyacá', '15'),
(224, 'Chita', 'Boyacá', '15'),
(225, 'Chitaranque', 'Boyacá', '15'),
(226, 'Chivatá', 'Boyacá', '15'),
(227, 'Ciénaga', 'Boyacá', '15'),
(228, 'Cómbita', 'Boyacá', '15'),
(229, 'Coper', 'Boyacá', '15'),
(230, 'Corrales', 'Boyacá', '15'),
(231, 'Covarachia', 'Boyacá', '15'),
(232, 'Cubar', 'Boyacá', '15'),
(233, 'Cucaita', 'Boyacá', '15'),
(234, 'Cuitiva', 'Boyacá', '15'),
(235, 'Chíquiza', 'Boyacá', '15'),
(236, 'Chivor', 'Boyacá', '15'),
(237, 'Duitama', 'Boyacá', '15'),
(238, 'El Cocuy', 'Boyacá', '15'),
(239, 'El Espino', 'Boyacá', '15'),
(240, 'Firavitoba', 'Boyacá', '15'),
(241, 'Floresta', 'Boyacá', '15'),
(242, 'Gachantivá', 'Boyacá', '15'),
(243, 'Gámeza', 'Boyacá', '15'),
(244, 'Garagoa', 'Boyacá', '15'),
(245, 'Guacamayas', 'Boyacá', '15'),
(246, 'Guateque', 'Boyacá', '15'),
(247, 'Guayatá', 'Boyacá', '15'),
(248, 'Guicán', 'Boyacá', '15'),
(249, 'Iza', 'Boyacá', '15'),
(250, 'Jenesano', 'Boyacá', '15'),
(251, 'Jericó', 'Boyacá', '15'),
(252, 'Labranzagrande', 'Boyacá', '15'),
(253, 'La Capilla', 'Boyacá', '15'),
(254, 'La Victoria', 'Boyacá', '15'),
(255, 'La Ubita', 'Boyacá', '15'),
(256, 'Villa de Leyva', 'Boyacá', '15'),
(257, 'Macanal', 'Boyacá', '15'),
(258, 'Maripí', 'Boyacá', '15'),
(259, 'Miraflores', 'Boyacá', '15'),
(260, 'Mongua', 'Boyacá', '15'),
(261, 'Monguí', 'Boyacá', '15'),
(262, 'Moniquirá', 'Boyacá', '15'),
(263, 'Motavita', 'Boyacá', '15'),
(264, 'Muzo', 'Boyacá', '15'),
(265, 'Nobsa', 'Boyacá', '15'),
(266, 'Nuevo Colón', 'Boyacá', '15'),
(267, 'Oicatá', 'Boyacá', '15'),
(268, 'Otanche', 'Boyacá', '15'),
(269, 'Pachavita', 'Boyacá', '15'),
(270, 'Páez', 'Boyacá', '15'),
(271, 'Paipa', 'Boyacá', '15'),
(272, 'Pajarito', 'Boyacá', '15'),
(273, 'Panqueba', 'Boyacá', '15'),
(274, 'Pauna', 'Boyacá', '15'),
(275, 'Paya', 'Boyacá', '15'),
(276, 'Paz de Río', 'Boyacá', '15'),
(277, 'Pesca', 'Boyacá', '15'),
(278, 'Pisva', 'Boyacá', '15'),
(279, 'Puerto Boyacá', 'Boyacá', '15'),
(280, 'Quípama', 'Boyacá', '15'),
(281, 'Ramiquirí', 'Boyacá', '15'),
(282, 'Ráquira', 'Boyacá', '15'),
(283, 'Rondón', 'Boyacá', '15'),
(284, 'Saboyá', 'Boyacá', '15'),
(285, 'Sáchica', 'Boyacá', '15'),
(286, 'Samacá', 'Boyacá', '15'),
(287, 'San Eduardo', 'Boyacá', '15'),
(288, 'San José de Pare', 'Boyacá', '15'),
(289, 'San Luis de Gaceno', 'Boyacá', '15'),
(290, 'San Mateo', 'Boyacá', '15'),
(291, 'San Miguel de Sema', 'Boyacá', '15'),
(292, 'San Pablo de Borbur', 'Boyacá', '15'),
(293, 'Santana', 'Boyacá', '15'),
(294, 'Santa María', 'Boyacá', '15'),
(295, 'Santa Rosa de Viterbo', 'Boyacá', '15'),
(296, 'Santa Sofía', 'Boyacá', '15'),
(297, 'Sativanorte', 'Boyacá', '15'),
(298, 'Sativasur', 'Boyacá', '15'),
(299, 'Siachoque', 'Boyacá', '15'),
(300, 'Soatá', 'Boyacá', '15'),
(301, 'Socotá', 'Boyacá', '15'),
(302, 'Socha', 'Boyacá', '15'),
(303, 'Sogamoso', 'Boyacá', '15'),
(304, 'Somondoco', 'Boyacá', '15'),
(305, 'Sora', 'Boyacá', '15'),
(306, 'Sotaquirá', 'Boyacá', '15'),
(307, 'Soracá', 'Boyacá', '15'),
(308, 'Susacón', 'Boyacá', '15'),
(309, 'Sutamarchán', 'Boyacá', '15'),
(310, 'Sutatenza', 'Boyacá', '15'),
(311, 'Tasco', 'Boyacá', '15'),
(312, 'Tenza', 'Boyacá', '15'),
(313, 'Tibaná', 'Boyacá', '15'),
(314, 'Tibasosa', 'Boyacá', '15'),
(315, 'Tinjacá', 'Boyacá', '15'),
(316, 'Tipacoque', 'Boyacá', '15'),
(317, 'Toca', 'Boyacá', '15'),
(318, 'Toguí', 'Boyacá', '15'),
(319, 'Tópaga', 'Boyacá', '15'),
(320, 'Tota', 'Boyacá', '15'),
(321, 'Tunungua', 'Boyacá', '15'),
(322, 'Turmequé', 'Boyacá', '15'),
(323, 'Tuta', 'Boyacá', '15'),
(324, 'Tutazá', 'Boyacá', '15'),
(325, 'Úmbita', 'Boyacá', '15'),
(326, 'Ventaquemada', 'Boyacá', '15'),
(327, 'Viracachá', 'Boyacá', '15'),
(328, 'Zetaquirá', 'Boyacá', '15'),
(329, 'Manizales', 'Caldas', '17'),
(330, 'Aguadas', 'Caldas', '17'),
(331, 'Anserma', 'Caldas', '17'),
(332, 'Aranzazu', 'Caldas', '17'),
(333, 'Belalcázar', 'Caldas', '17'),
(334, 'Chinchina', 'Caldas', '17'),
(335, 'Filadelfia', 'Caldas', '17'),
(336, 'La Dorada', 'Caldas', '17'),
(337, 'La Merced', 'Caldas', '17'),
(338, 'Manzanares', 'Caldas', '17'),
(339, 'Marmato', 'Caldas', '17'),
(340, 'Marquetalia', 'Caldas', '17'),
(341, 'Marulanda', 'Caldas', '17'),
(342, 'Neira', 'Caldas', '17'),
(343, 'Pácora', 'Caldas', '17'),
(344, 'Palestina', 'Caldas', '17'),
(345, 'Pensilvania', 'Caldas', '17'),
(346, 'Riosucio', 'Caldas', '17'),
(347, 'Risaralda', 'Caldas', '17'),
(348, 'Salamina', 'Caldas', '17'),
(349, 'Samaná', 'Caldas', '17'),
(350, 'San José', 'Caldas', '17'),
(351, 'Supía', 'Caldas', '17'),
(352, 'Victoria', 'Caldas', '17'),
(353, 'Villamaría', 'Caldas', '17'),
(354, 'Viterbo', 'Caldas', '17'),
(355, 'Florencia', 'Caquetá', '18'),
(356, 'Albania', 'Caquetá', '18'),
(357, 'Belén de los Andaquíes', 'Caquetá', '18'),
(358, 'Cartagena del Chairá', 'Caquetá', '18'),
(359, 'Curillo', 'Caquetá', '18'),
(360, 'El Doncello', 'Caquetá', '18'),
(361, 'El Paujil', 'Caquetá', '18'),
(362, 'La Montañita', 'Caquetá', '18'),
(363, 'Milán', 'Caquetá', '18'),
(364, 'Morelia', 'Caquetá', '18'),
(365, 'Puerto Rico', 'Caquetá', '18'),
(366, 'San José del Fragua', 'Caquetá', '18'),
(367, 'San Vicente del Caguán', 'Caquetá', '18'),
(368, 'Solano', 'Caquetá', '18'),
(369, 'Solita', 'Caquetá', '18'),
(370, 'Valparaíso', 'Caquetá', '18'),
(371, 'Yopal', 'Casanare', '85'),
(372, 'Aguazul', 'Casanare', '85'),
(373, 'Chameza', 'Casanare', '85'),
(374, 'Hato Corozal', 'Casanare', '85'),
(375, 'La Salina', 'Casanare', '85'),
(376, 'Maní', 'Casanare', '85'),
(377, 'Monterrey', 'Casanare', '85'),
(378, 'Nunchía', 'Casanare', '85'),
(379, 'Orocué', 'Casanare', '85'),
(380, 'Paz de Ariporo', 'Casanare', '85'),
(381, 'Pore', 'Casanare', '85'),
(382, 'Recetor', 'Casanare', '85'),
(383, 'Sabalarga', 'Casanare', '85'),
(384, 'Sácama', 'Casanare', '85'),
(385, 'San Luis de Palenque', 'Casanare', '85'),
(386, 'Támara', 'Casanare', '85'),
(387, 'Tauramena', 'Casanare', '85'),
(388, 'Trinidad', 'Casanare', '85'),
(389, 'Villanueva', 'Casanare', '85'),
(390, 'Popayán', 'Cauca', '19'),
(391, 'Almaguer', 'Cauca', '19'),
(392, 'Argelia', 'Cauca', '19'),
(393, 'Balboa', 'Cauca', '19'),
(394, 'Bolívar', 'Cauca', '19'),
(395, 'Buenos Aires', 'Cauca', '19'),
(396, 'Cajibío', 'Cauca', '19'),
(397, 'Caldono', 'Cauca', '19'),
(398, 'Caloto', 'Cauca', '19'),
(399, 'Corinto', 'Cauca', '19'),
(400, 'El Tambo', 'Cauca', '19'),
(401, 'Florencia', 'Cauca', '19'),
(402, 'Guapi', 'Cauca', '19'),
(403, 'Inzá', 'Cauca', '19'),
(404, 'Jambaló', 'Cauca', '19'),
(405, 'La Sierra', 'Cauca', '19'),
(406, 'La Vega', 'Cauca', '19'),
(407, 'López (Micay)', 'Cauca', '19'),
(408, 'Mercaderes', 'Cauca', '19'),
(409, 'Miranda', 'Cauca', '19'),
(410, 'Morales', 'Cauca', '19'),
(411, 'Padilla', 'Cauca', '19'),
(412, 'Páez (Belalcazar)', 'Cauca', '19'),
(413, 'Patía (El Bordo)', 'Cauca', '19'),
(414, 'Piamonte', 'Cauca', '19'),
(415, 'Piendamó', 'Cauca', '19'),
(416, 'Puerto Tejada', 'Cauca', '19'),
(417, 'Puracé (Coconuco)', 'Cauca', '19'),
(418, 'Rosas', 'Cauca', '19'),
(419, 'San Sebastián', 'Cauca', '19'),
(420, 'Santander de Quilichao', 'Cauca', '19'),
(421, 'Santa Rosa', 'Cauca', '19'),
(422, 'Silvia', 'Cauca', '19'),
(423, 'Sotará (Paispamba)', 'Cauca', '19'),
(424, 'Suárez', 'Cauca', '19'),
(425, 'Timbío', 'Cauca', '19'),
(426, 'Timbiquí', 'Cauca', '19'),
(427, 'Toribío', 'Cauca', '19'),
(428, 'Totoro', 'Cauca', '19'),
(429, 'Valledupar', 'Cesar', '20'),
(430, 'Aguachica', 'Cesar', '20'),
(431, 'Agustín Codazzi', 'Cesar', '20'),
(432, 'Astrea', 'Cesar', '20'),
(433, 'Becerril', 'Cesar', '20'),
(434, 'Bosconia', 'Cesar', '20'),
(435, 'Chimichagua', 'Cesar', '20'),
(436, 'Chiriguaná', 'Cesar', '20'),
(437, 'Curumaní', 'Cesar', '20'),
(438, 'El Copey', 'Cesar', '20'),
(439, 'El Paso', 'Cesar', '20'),
(440, 'Gamarra', 'Cesar', '20'),
(441, 'González', 'Cesar', '20'),
(442, 'La Gloria', 'Cesar', '20'),
(443, 'La Jagua de Ibirico', 'Cesar', '20'),
(444, 'Manaure Balcón Cesar', 'Cesar', '20'),
(445, 'Pailitas', 'Cesar', '20'),
(446, 'Pelaya', 'Cesar', '20'),
(447, 'Pueblo Bello', 'Cesar', '20'),
(448, 'Río de Oro', 'Cesar', '20'),
(449, 'La Paz (Robles)', 'Cesar', '20'),
(450, 'San Alberto', 'Cesar', '20'),
(451, 'San Diego', 'Cesar', '20'),
(452, 'San Martín', 'Cesar', '20'),
(453, 'Tamalameque', 'Cesar', '20'),
(454, 'Montería', 'Córdoba', '23'),
(455, 'Ayapel', 'Córdoba', '23'),
(456, 'Buenavista', 'Córdoba', '23'),
(457, 'Canalete', 'Córdoba', '23'),
(458, 'Cereté', 'Córdoba', '23'),
(459, 'Chima', 'Córdoba', '23'),
(460, 'Chinú', 'Córdoba', '23'),
(461, 'Ciénaga de Oro', 'Córdoba', '23'),
(462, 'Cotorra', 'Córdoba', '23'),
(463, 'La Apartada (Frontera)', 'Córdoba', '23'),
(464, 'Lorica', 'Córdoba', '23'),
(465, 'Los Córdobas', 'Córdoba', '23'),
(466, 'Momil', 'Córdoba', '23'),
(467, 'Montelíbano', 'Córdoba', '23'),
(468, 'Monitos', 'Córdoba', '23'),
(469, 'Planeta Rica', 'Córdoba', '23'),
(470, 'Pueblo Nuevo', 'Córdoba', '23'),
(471, 'Puerto Escondido', 'Córdoba', '23'),
(472, 'Puerto Libertador', 'Córdoba', '23'),
(473, 'Purísima', 'Córdoba', '23'),
(474, 'Sahagún', 'Córdoba', '23'),
(475, 'San Andrés Sotavento', 'Córdoba', '23'),
(476, 'San Antero', 'Córdoba', '23'),
(477, 'San Bernardo del Viento', 'Córdoba', '23'),
(478, 'San Carlos', 'Córdoba', '23'),
(479, 'San Pelayo', 'Córdoba', '23'),
(480, 'Tierralta', 'Córdoba', '23'),
(481, 'Valencia', 'Córdoba', '23'),
(482, 'Agua de Dios', 'Cundinamarca', '25'),
(483, 'Albán', 'Cundinamarca', '25'),
(484, 'Anapoima', 'Cundinamarca', '25'),
(485, 'Anolaima', 'Cundinamarca', '25'),
(486, 'Arbeláez', 'Cundinamarca', '25'),
(487, 'Beltrán', 'Cundinamarca', '25'),
(488, 'Bituima', 'Cundinamarca', '25'),
(489, 'Bojacá', 'Cundinamarca', '25'),
(490, 'Cabrera', 'Cundinamarca', '25'),
(491, 'Cachipay', 'Cundinamarca', '25'),
(492, 'Cajicá', 'Cundinamarca', '25'),
(493, 'Caparrapí', 'Cundinamarca', '25'),
(494, 'Cáqueza', 'Cundinamarca', '25'),
(495, 'Carmen de Carupa', 'Cundinamarca', '25'),
(496, 'Chaguaní', 'Cundinamarca', '25'),
(497, 'Chía', 'Cundinamarca', '25'),
(498, 'Chipaque', 'Cundinamarca', '25'),
(499, 'Choachí', 'Cundinamarca', '25'),
(500, 'Chocontá', 'Cundinamarca', '25'),
(501, 'Cogua', 'Cundinamarca', '25'),
(502, 'Cota', 'Cundinamarca', '25'),
(503, 'Cucunubá', 'Cundinamarca', '25'),
(504, 'El Colegio', 'Cundinamarca', '25'),
(505, 'El Peñón', 'Cundinamarca', '25'),
(506, 'El Rosal', 'Cundinamarca', '25'),
(507, 'Facatativá', 'Cundinamarca', '25'),
(508, 'Fómeque', 'Cundinamarca', '25'),
(509, 'Fosca', 'Cundinamarca', '25'),
(510, 'Funza', 'Cundinamarca', '25'),
(511, 'Fúquene', 'Cundinamarca', '25'),
(512, 'Fusagasugá', 'Cundinamarca', '25'),
(513, 'Gachalá', 'Cundinamarca', '25'),
(514, 'Gachancipá', 'Cundinamarca', '25'),
(515, 'Gachetá', 'Cundinamarca', '25'),
(516, 'Gama', 'Cundinamarca', '25'),
(517, 'Girardot', 'Cundinamarca', '25'),
(518, 'Granada', 'Cundinamarca', '25'),
(519, 'Guachetá', 'Cundinamarca', '25'),
(520, 'Guaduas', 'Cundinamarca', '25'),
(521, 'Guasca', 'Cundinamarca', '25'),
(522, 'Guataquí', 'Cundinamarca', '25'),
(523, 'Guatavita', 'Cundinamarca', '25'),
(524, 'Guayabal de Síquima', 'Cundinamarca', '25'),
(525, 'Guayabetal', 'Cundinamarca', '25'),
(526, 'Gutiérrez', 'Cundinamarca', '25'),
(527, 'Jerusalén', 'Cundinamarca', '25'),
(528, 'Junín', 'Cundinamarca', '25'),
(529, 'La Calera', 'Cundinamarca', '25'),
(530, 'La Mesa', 'Cundinamarca', '25'),
(531, 'La Palma', 'Cundinamarca', '25'),
(532, 'La Peña', 'Cundinamarca', '25'),
(533, 'La Vega', 'Cundinamarca', '25'),
(534, 'Lenguazaque', 'Cundinamarca', '25'),
(535, 'Machetá', 'Cundinamarca', '25'),
(536, 'Madrid', 'Cundinamarca', '25'),
(537, 'Manta', 'Cundinamarca', '25'),
(538, 'Medina', 'Cundinamarca', '25'),
(539, 'Mosquera', 'Cundinamarca', '25'),
(540, 'Nariño', 'Cundinamarca', '25'),
(541, 'Nemocón', 'Cundinamarca', '25'),
(542, 'Nilo', 'Cundinamarca', '25'),
(543, 'Nimaima', 'Cundinamarca', '25'),
(544, 'Nocaima', 'Cundinamarca', '25'),
(545, 'Venecia (Ospina Pérez)', 'Cundinamarca', '25'),
(546, 'Pacho', 'Cundinamarca', '25'),
(547, 'Paime', 'Cundinamarca', '25'),
(548, 'Pandi', 'Cundinamarca', '25'),
(549, 'Paratebueno', 'Cundinamarca', '25'),
(550, 'Pasca', 'Cundinamarca', '25'),
(551, 'Puerto Salgar', 'Cundinamarca', '25'),
(552, 'Pulí', 'Cundinamarca', '25'),
(553, 'Quebradanegra', 'Cundinamarca', '25'),
(554, 'Quetame', 'Cundinamarca', '25'),
(555, 'Quipile', 'Cundinamarca', '25'),
(556, 'Rafael', 'Cundinamarca', '25'),
(557, 'Ricaurte', 'Cundinamarca', '25'),
(558, 'San Antonio de Tequendama', 'Cundinamarca', '25'),
(559, 'San Bernardo', 'Cundinamarca', '25'),
(560, 'San Cayetano', 'Cundinamarca', '25'),
(561, 'San Francisco', 'Cundinamarca', '25'),
(562, 'San Juan de Rioseco', 'Cundinamarca', '25'),
(563, 'Sasaima', 'Cundinamarca', '25'),
(564, 'Sesquilé', 'Cundinamarca', '25'),
(565, 'Sibate', 'Cundinamarca', '25'),
(566, 'Silvania', 'Cundinamarca', '25'),
(567, 'Simijaca', 'Cundinamarca', '25'),
(568, 'Soacha', 'Cundinamarca', '25'),
(569, 'Sopó', 'Cundinamarca', '25'),
(570, 'Subachoque', 'Cundinamarca', '25'),
(571, 'Suesca', 'Cundinamarca', '25'),
(572, 'Supatá', 'Cundinamarca', '25'),
(573, 'Susa', 'Cundinamarca', '25'),
(574, 'Sutatausa', 'Cundinamarca', '25'),
(575, 'Tabio', 'Cundinamarca', '25'),
(576, 'Tausa', 'Cundinamarca', '25'),
(577, 'Tena', 'Cundinamarca', '25'),
(578, 'Tenjo', 'Cundinamarca', '25'),
(579, 'Tibacuy', 'Cundinamarca', '25'),
(580, 'Tibiritá', 'Cundinamarca', '25'),
(581, 'Tocaima', 'Cundinamarca', '25'),
(582, 'Tocancipá', 'Cundinamarca', '25'),
(583, 'Topaipí', 'Cundinamarca', '25'),
(584, 'Ubalá', 'Cundinamarca', '25'),
(585, 'Ubaque', 'Cundinamarca', '25'),
(586, 'Ubaté', 'Cundinamarca', '25'),
(587, 'Une', 'Cundinamarca', '25'),
(588, 'Útica', 'Cundinamarca', '25'),
(589, 'Vergara', 'Cundinamarca', '25'),
(590, 'Vianí', 'Cundinamarca', '25'),
(591, 'Villagómez', 'Cundinamarca', '25'),
(592, 'Villapinzón', 'Cundinamarca', '25'),
(593, 'Villeta', 'Cundinamarca', '25'),
(594, 'Viotá', 'Cundinamarca', '25'),
(595, 'Yacopí', 'Cundinamarca', '25'),
(596, 'Zipacón', 'Cundinamarca', '25'),
(597, 'Zipaquirá', 'Cundinamarca', '25'),
(598, 'Quibdó', 'Chocó', '27'),
(599, 'Acandí', 'Chocó', '27'),
(600, 'Alto Baudó (Pie de Pato)', 'Chocó', '27'),
(601, 'Atrato (Yuto)', 'Chocó', '27'),
(602, 'Bagadó', 'Chocó', '27'),
(603, 'Bahía Solano (Mútis)', 'Chocó', '27'),
(604, 'Bajo Baudó (Pizarro)', 'Chocó', '27'),
(605, 'Bojayá (Bellavista)', 'Chocó', '27'),
(606, 'Cantón de San Pablo', 'Chocó', '27'),
(607, 'Condoto', 'Chocó', '27'),
(608, 'El Carmen', 'Chocó', '27'),
(609, 'El Litoral de San Juan', 'Chocó', '27'),
(610, 'Itsmina', 'Chocó', '27'),
(611, 'Juradó', 'Chocó', '27'),
(612, 'Lloró', 'Chocó', '27'),
(613, 'Nóvita', 'Chocó', '27'),
(614, 'Nuquí', 'Chocó', '27'),
(615, 'Riosucio', 'Chocó', '27'),
(616, 'San José del Palmar', 'Chocó', '27'),
(617, 'Sipí', 'Chocó', '27'),
(618, 'Tadó', 'Chocó', '27'),
(619, 'Unguía', 'Chocó', '27'),
(620, 'Puerto Inírida', 'Guainía', '94'),
(621, 'San José del Guaviare', 'Guaviare', '95'),
(622, 'Calamar', 'Guaviare', '95'),
(623, 'El Retorno', 'Guaviare', '95'),
(624, 'Miraflores', 'Guaviare', '95'),
(625, 'Neiva', 'Huila', '41'),
(626, 'Acevedo', 'Huila', '41'),
(627, 'Agrado', 'Huila', '41'),
(628, 'Aipe', 'Huila', '41'),
(629, 'Algeciras', 'Huila', '41'),
(630, 'Altamira', 'Huila', '41'),
(631, 'Baraya', 'Huila', '41'),
(632, 'Campoalegre', 'Huila', '41'),
(633, 'Colombia', 'Huila', '41'),
(634, 'Elías', 'Huila', '41'),
(635, 'Garzón', 'Huila', '41'),
(636, 'Gigante', 'Huila', '41'),
(637, 'Guadalupe', 'Huila', '41'),
(638, 'Hobo', 'Huila', '41'),
(639, 'Iquira', 'Huila', '41'),
(640, 'Isnos', 'Huila', '41'),
(641, 'La Argentina', 'Huila', '41'),
(642, 'La Plata', 'Huila', '41'),
(643, 'Nátaga', 'Huila', '41'),
(644, 'Oporapa', 'Huila', '41'),
(645, 'Paicol', 'Huila', '41'),
(646, 'Palermo', 'Huila', '41'),
(647, 'Palestina', 'Huila', '41'),
(648, 'Pital', 'Huila', '41'),
(649, 'Pitalito', 'Huila', '41'),
(650, 'Rivera', 'Huila', '41'),
(651, 'Saladoblanco', 'Huila', '41'),
(652, 'San Agustín', 'Huila', '41'),
(653, 'Santa María', 'Huila', '41'),
(654, 'Suazá', 'Huila', '41'),
(655, 'Tarqui', 'Huila', '41'),
(656, 'Tesalia', 'Huila', '41'),
(657, 'Tello', 'Huila', '41'),
(658, 'Teruel', 'Huila', '41'),
(659, 'Timaná', 'Huila', '41'),
(660, 'Villavieja', 'Huila', '41'),
(661, 'Yaguará', 'Huila', '41'),
(662, 'Riohacha', 'La Guajira', '44'),
(663, 'Barrancas', 'La Guajira', '44'),
(664, 'Dibulla', 'La Guajira', '44'),
(665, 'Distracción', 'La Guajira', '44'),
(666, 'El Molino', 'La Guajira', '44'),
(667, 'Fonseca', 'La Guajira', '44'),
(668, 'Hatonuevo', 'La Guajira', '44'),
(669, 'Maicao', 'La Guajira', '44'),
(670, 'Manaure', 'La Guajira', '44'),
(671, 'San Juan del Cesar', 'La Guajira', '44'),
(672, 'Uribía', 'La Guajira', '44'),
(673, 'Urumita', 'La Guajira', '44'),
(674, 'Villanueva', 'La Guajira', '44'),
(675, 'Santa Marta', 'Magdalena', '47'),
(676, 'Aracataca', 'Magdalena', '47'),
(677, 'Ariguaní (El Difícil)', 'Magdalena', '47'),
(678, 'Cerro San Antonio', 'Magdalena', '47'),
(679, 'Chivolo', 'Magdalena', '47'),
(680, 'Ciénaga', 'Magdalena', '47'),
(681, 'El Banco', 'Magdalena', '47'),
(682, 'El Piñón', 'Magdalena', '47'),
(683, 'El Retén', 'Magdalena', '47'),
(684, 'Fundación', 'Magdalena', '47'),
(685, 'Guamal', 'Magdalena', '47'),
(686, 'Pedraza', 'Magdalena', '47'),
(687, 'Pijiño del Carmen', 'Magdalena', '47'),
(688, 'Pivijay', 'Magdalena', '47'),
(689, 'Plato', 'Magdalena', '47'),
(690, 'Publoviejo', 'Magdalena', '47'),
(691, 'Remolino', 'Magdalena', '47'),
(692, 'Salamina', 'Magdalena', '47'),
(693, 'San Sebastián de Buuenavista', 'Magdalena', '47'),
(694, 'San Zenón', 'Magdalena', '47'),
(695, 'Santa Ana', 'Magdalena', '47'),
(696, 'Sitionuevo', 'Magdalena', '47'),
(697, 'Tenerife', 'Magdalena', '47'),
(698, 'Villavicencio', 'Meta', '50'),
(699, 'Acacias', 'Meta', '50'),
(700, 'Barranca de Upía', 'Meta', '50'),
(701, 'Cabuyaro', 'Meta', '50'),
(702, 'Castilla la Nueva', 'Meta', '50'),
(703, 'Cubarral', 'Meta', '50'),
(704, 'Cumaral', 'Meta', '50'),
(705, 'El Calvario', 'Meta', '50'),
(706, 'El Castillo', 'Meta', '50'),
(707, 'El Dorado', 'Meta', '50'),
(708, 'Fuente de Oro', 'Meta', '50'),
(709, 'Granada', 'Meta', '50'),
(710, 'Guamal', 'Meta', '50'),
(711, 'Mapiripán', 'Meta', '50'),
(712, 'Mesetas', 'Meta', '50'),
(713, 'La Macarena', 'Meta', '50'),
(714, 'La Uribe', 'Meta', '50'),
(715, 'Lejanías', 'Meta', '50'),
(716, 'Puerto Concordia', 'Meta', '50'),
(717, 'Puerto Gaitán', 'Meta', '50'),
(718, 'Puerto López', 'Meta', '50'),
(719, 'Puerto Lleras', 'Meta', '50'),
(720, 'Puerto Rico', 'Meta', '50'),
(721, 'Restrepo', 'Meta', '50'),
(722, 'San Carlos de Guaroa', 'Meta', '50'),
(723, 'San Juan de Arama', 'Meta', '50'),
(724, 'San Juanito', 'Meta', '50'),
(725, 'San Martín', 'Meta', '50'),
(726, 'Vistahermosa', 'Meta', '50'),
(727, 'Pasto', 'Nariño', '52'),
(728, 'Albán (San José)', 'Nariño', '52'),
(729, 'Aldana', 'Nariño', '52'),
(730, 'Ancuyá', 'Nariño', '52'),
(731, 'Arboleda (Berruecos)', 'Nariño', '52'),
(732, 'Barbacoas', 'Nariño', '52'),
(733, 'Belén', 'Nariño', '52'),
(734, 'Buesaco', 'Nariño', '52'),
(735, 'Colón (Génova)', 'Nariño', '52'),
(736, 'Consacá', 'Nariño', '52'),
(737, 'Contadero', 'Nariño', '52'),
(738, 'Córdoba', 'Nariño', '52'),
(739, 'Cuaspud (Carlosama)', 'Nariño', '52'),
(740, 'Cumbal', 'Nariño', '52'),
(741, 'Cumbitará', 'Nariño', '52'),
(742, 'Chachagüi', 'Nariño', '52'),
(743, 'El Charco', 'Nariño', '52'),
(744, 'El Rosario', 'Nariño', '52'),
(745, 'El Tablón', 'Nariño', '52'),
(746, 'El Tambo', 'Nariño', '52'),
(747, 'Funes', 'Nariño', '52'),
(748, 'Guachucal', 'Nariño', '52'),
(749, 'Guaitarilla', 'Nariño', '52'),
(750, 'Gualmatán', 'Nariño', '52'),
(751, 'Iles', 'Nariño', '52'),
(752, 'Imúes', 'Nariño', '52'),
(753, 'Ipiales', 'Nariño', '52'),
(754, 'La Cruz', 'Nariño', '52'),
(755, 'La Florida', 'Nariño', '52'),
(756, 'La Llanada', 'Nariño', '52'),
(757, 'La Tola', 'Nariño', '52'),
(758, 'La Unión', 'Nariño', '52'),
(759, 'Leiva', 'Nariño', '52'),
(760, 'Linares', 'Nariño', '52'),
(761, 'Los Andes (Sotomayor)', 'Nariño', '52'),
(762, 'Magüí (Payán)', 'Nariño', '52'),
(763, 'Mallama (Piedrancha)', 'Nariño', '52'),
(764, 'Mosquera', 'Nariño', '52'),
(765, 'Olaya', 'Nariño', '52'),
(766, 'Ospina', 'Nariño', '52'),
(767, 'Francisco Pizarro', 'Nariño', '52'),
(768, 'Policarpa', 'Nariño', '52'),
(769, 'Potosí', 'Nariño', '52'),
(770, 'Providencia', 'Nariño', '52'),
(771, 'Puerres', 'Nariño', '52'),
(772, 'Pupiales', 'Nariño', '52'),
(773, 'Ricaurte', 'Nariño', '52'),
(774, 'Roberto Payán (San José)', 'Nariño', '52'),
(775, 'Samaniego', 'Nariño', '52'),
(776, 'Sandoná', 'Nariño', '52'),
(777, 'San Bernardo', 'Nariño', '52'),
(778, 'San Lorenzo', 'Nariño', '52'),
(779, 'San Pablo', 'Nariño', '52'),
(780, 'San Pedro de Cartago', 'Nariño', '52'),
(781, 'Santa Bárbara (Iscuandé)', 'Nariño', '52'),
(782, 'Santa Cruz (Guachávez)', 'Nariño', '52'),
(783, 'Sapuyés', 'Nariño', '52'),
(784, 'Taminango', 'Nariño', '52'),
(785, 'Tangua', 'Nariño', '52'),
(786, 'Tumaco', 'Nariño', '52'),
(787, 'Túquerres', 'Nariño', '52'),
(788, 'Yacuanquer', 'Nariño', '52'),
(789, 'Cúcuta', 'Norte de Santander', '54'),
(790, 'Abrego', 'Norte de Santander', '54'),
(791, 'Arboledas', 'Norte de Santander', '54'),
(792, 'Bochalema', 'Norte de Santander', '54'),
(793, 'Bucarasica', 'Norte de Santander', '54'),
(794, 'Cácota', 'Norte de Santander', '54'),
(795, 'Cáchira', 'Norte de Santander', '54'),
(796, 'Chinácota', 'Norte de Santander', '54'),
(797, 'Chitagá', 'Norte de Santander', '54'),
(798, 'Convención', 'Norte de Santander', '54'),
(799, 'Cucutilla', 'Norte de Santander', '54'),
(800, 'Durania', 'Norte de Santander', '54'),
(801, 'El Carmen', 'Norte de Santander', '54'),
(802, 'El Tarra', 'Norte de Santander', '54'),
(803, 'El Zulia', 'Norte de Santander', '54'),
(804, 'Gramalote', 'Norte de Santander', '54'),
(805, 'Hacarí', 'Norte de Santander', '54'),
(806, 'Herrán', 'Norte de Santander', '54'),
(807, 'Labateca', 'Norte de Santander', '54'),
(808, 'La Esperanza', 'Norte de Santander', '54'),
(809, 'La Playa', 'Norte de Santander', '54'),
(810, 'Los Patios', 'Norte de Santander', '54'),
(811, 'Lourdes', 'Norte de Santander', '54'),
(812, 'Mutiscua', 'Norte de Santander', '54'),
(813, 'Ocaña', 'Norte de Santander', '54'),
(814, 'Pamplona', 'Norte de Santander', '54'),
(815, 'Pamplonita', 'Norte de Santander', '54'),
(816, 'Puerto Santander', 'Norte de Santander', '54'),
(817, 'Ragonvalia', 'Norte de Santander', '54'),
(818, 'Salazar', 'Norte de Santander', '54'),
(819, 'San Calixto', 'Norte de Santander', '54'),
(820, 'San Cayetano', 'Norte de Santander', '54'),
(821, 'Santiago', 'Norte de Santander', '54'),
(822, 'Sardinata', 'Norte de Santander', '54'),
(823, 'Silos', 'Norte de Santander', '54'),
(824, 'Teorama', 'Norte de Santander', '54'),
(825, 'Tibú', 'Norte de Santander', '54'),
(826, 'Toledo', 'Norte de Santander', '54'),
(827, 'Villacaro', 'Norte de Santander', '54'),
(828, 'Villa del Rosario', 'Norte de Santander', '54'),
(829, 'Mocoa', 'Putumayo', '86'),
(830, 'Colón', 'Putumayo', '86'),
(831, 'Orito', 'Putumayo', '86'),
(832, 'Puerto Asís', 'Putumayo', '86'),
(833, 'Puerto Caicedo', 'Putumayo', '86'),
(834, 'Puerto Guzmán', 'Putumayo', '86'),
(835, 'Puerto Leguízamo', 'Putumayo', '86'),
(836, 'Sibundoy', 'Putumayo', '86'),
(837, 'San Francisco', 'Putumayo', '86'),
(838, 'San Miguel', 'Putumayo', '86'),
(839, 'Santiago', 'Putumayo', '86'),
(840, 'Villa Gamuez (La Hormiga)', 'Putumayo', '86'),
(841, 'Villa Garzón', 'Putumayo', '86'),
(842, 'Armenia', 'Quindío', '63'),
(843, 'Buenavista', 'Quindío', '63'),
(844, 'Calarcá', 'Quindío', '63'),
(845, 'Circasia', 'Quindío', '63'),
(846, 'Córdoba', 'Quindío', '63'),
(847, 'Filandia', 'Quindío', '63'),
(848, 'Génova', 'Quindío', '63'),
(849, 'La Tebaida', 'Quindío', '63'),
(850, 'Montenegro', 'Quindío', '63'),
(851, 'Pijao', 'Quindío', '63'),
(852, 'Quimbaya', 'Quindío', '63'),
(853, 'Salento', 'Quindío', '63'),
(854, 'Pereira', 'Risaralda', '66'),
(855, 'Apía', 'Risaralda', '66'),
(856, 'Balboa', 'Risaralda', '66'),
(857, 'Belén de Umbría', 'Risaralda', '66'),
(858, 'Dos Quebradas', 'Risaralda', '66'),
(859, 'Guática', 'Risaralda', '66'),
(860, 'La Celia', 'Risaralda', '66'),
(861, 'La Virginia', 'Risaralda', '66'),
(862, 'Marsella', 'Risaralda', '66'),
(863, 'Mistrató', 'Risaralda', '66'),
(864, 'Pueblo Rico', 'Risaralda', '66'),
(865, 'Quinchia', 'Risaralda', '66'),
(866, 'Santa Rosa de Cabal', 'Risaralda', '66'),
(867, 'Santuario', 'Risaralda', '66'),
(868, 'San Andrés', 'San Andrés', '88'),
(869, 'Providencia', 'San Andrés', '88'),
(870, 'Bucaramanga', 'Santander', '68'),
(871, 'Aguada', 'Santander', '68'),
(872, 'Albania', 'Santander', '68'),
(873, 'Aratoca', 'Santander', '68'),
(874, 'Barbosa', 'Santander', '68'),
(875, 'Barichara', 'Santander', '68'),
(876, 'Barrancabermeja', 'Santander', '68'),
(877, 'Betulia', 'Santander', '68'),
(878, 'Bolívar', 'Santander', '68'),
(879, 'Cabrera', 'Santander', '68'),
(880, 'California', 'Santander', '68'),
(881, 'Capitanejo', 'Santander', '68'),
(882, 'Carcasí', 'Santander', '68'),
(883, 'Cepitá', 'Santander', '68'),
(884, 'Cerrito', 'Santander', '68'),
(885, 'Charalá', 'Santander', '68'),
(886, 'Charta', 'Santander', '68'),
(887, 'Chima', 'Santander', '68'),
(888, 'Chipatá', 'Santander', '68'),
(889, 'Cimitarra', 'Santander', '68'),
(890, 'Concepción', 'Santander', '68'),
(891, 'Confines', 'Santander', '68'),
(892, 'Contratación', 'Santander', '68'),
(893, 'Coromoro', 'Santander', '68'),
(894, 'Curití', 'Santander', '68'),
(895, 'El Carmen', 'Santander', '68'),
(896, 'El Guacamayo', 'Santander', '68'),
(897, 'El Peñón', 'Santander', '68'),
(898, 'El Playón', 'Santander', '68'),
(899, 'Encino', 'Santander', '68'),
(900, 'Enciso', 'Santander', '68'),
(901, 'Florián', 'Santander', '68'),
(902, 'Floridablanca', 'Santander', '68'),
(903, 'Galán', 'Santander', '68'),
(904, 'Gámbita', 'Santander', '68'),
(905, 'Girón', 'Santander', '68'),
(906, 'Guaca', 'Santander', '68'),
(907, 'Guadalupe', 'Santander', '68'),
(908, 'Guapotá', 'Santander', '68'),
(909, 'Guavata', 'Santander', '68'),
(910, 'Guepsa', 'Santander', '68'),
(911, 'Hato', 'Santander', '68'),
(912, 'Jesús María', 'Santander', '68'),
(913, 'Jordán', 'Santander', '68'),
(914, 'La Belleza', 'Santander', '68'),
(915, 'Landázuri', 'Santander', '68'),
(916, 'La Paz', 'Santander', '68'),
(917, 'Lebrija', 'Santander', '68'),
(918, 'Los Santos', 'Santander', '68'),
(919, 'Macaravita', 'Santander', '68'),
(920, 'Málaga', 'Santander', '68'),
(921, 'Matanza', 'Santander', '68'),
(922, 'Mogotes', 'Santander', '68'),
(923, 'Molagavita', 'Santander', '68'),
(924, 'Ocamonte', 'Santander', '68'),
(925, 'Oiba', 'Santander', '68'),
(926, 'Onzága', 'Santander', '68'),
(927, 'Palmar', 'Santander', '68'),
(928, 'Palmas del Socorro', 'Santander', '68'),
(929, 'Páramo', 'Santander', '68'),
(930, 'Pie de Cuesta', 'Santander', '68'),
(931, 'Pinchote', 'Santander', '68'),
(932, 'Puente Nacional', 'Santander', '68'),
(933, 'Puerto Parra', 'Santander', '68'),
(934, 'Puerto Wilches', 'Santander', '68'),
(935, 'Rionegro', 'Santander', '68'),
(936, 'Sabana de Torres', 'Santander', '68'),
(937, 'San Andrés', 'Santander', '68'),
(938, 'San Benito', 'Santander', '68'),
(939, 'San Gil', 'Santander', '68'),
(940, 'San Joaquín', 'Santander', '68'),
(941, 'San José de Miranda', 'Santander', '68'),
(942, 'San Miguel', 'Santander', '68'),
(943, 'San Vicente de Chucurí', 'Santander', '68'),
(944, 'Santa Bárbara', 'Santander', '68'),
(945, 'Santa Helena del Opón', 'Santander', '68'),
(946, 'Simacota', 'Santander', '68'),
(947, 'Socorro', 'Santander', '68'),
(948, 'Suaita', 'Santander', '68'),
(949, 'Sucre', 'Santander', '68'),
(950, 'Suratá', 'Santander', '68'),
(951, 'Tona', 'Santander', '68'),
(952, 'Valle de San José', 'Santander', '68'),
(953, 'Vélez', 'Santander', '68'),
(954, 'Vetas', 'Santander', '68'),
(955, 'Villanueva', 'Santander', '68'),
(956, 'Zapatoca', 'Santander', '68'),
(957, 'Sincelejo', 'Sucre', '70'),
(958, 'Buenavista', 'Sucre', '70'),
(959, 'Caimito', 'Sucre', '70'),
(960, 'Coloso (Ricaurte)', 'Sucre', '70'),
(961, 'Corozal', 'Sucre', '70'),
(962, 'Chalán', 'Sucre', '70'),
(963, 'Galeras (Nueva Granada)', 'Sucre', '70'),
(964, 'Guarandá', 'Sucre', '70'),
(965, 'La Unión', 'Sucre', '70'),
(966, 'Los Palmitos', 'Sucre', '70'),
(967, 'Majagual', 'Sucre', '70'),
(968, 'Morroa', 'Sucre', '70'),
(969, 'Ovejas', 'Sucre', '70'),
(970, 'Palmito', 'Sucre', '70'),
(971, 'Sampués', 'Sucre', '70'),
(972, 'San Benito Abad', 'Sucre', '70'),
(973, 'San Juan de Betulia', 'Sucre', '70'),
(974, 'San Marcos', 'Sucre', '70'),
(975, 'San Onofre', 'Sucre', '70'),
(976, 'San Pedro', 'Sucre', '70'),
(977, 'Sincé', 'Sucre', '70'),
(978, 'Sucre', 'Sucre', '70'),
(979, 'Tolú', 'Sucre', '70'),
(980, 'Toluviejo', 'Sucre', '70'),
(981, 'Ibagué', 'Tolima', '73'),
(982, 'Alpujarra', 'Tolima', '73'),
(983, 'Alvarado', 'Tolima', '73'),
(984, 'Ambalema', 'Tolima', '73'),
(985, 'Anzóategui', 'Tolima', '73'),
(986, 'Armero (Guayabal)', 'Tolima', '73'),
(987, 'Ataco', 'Tolima', '73'),
(988, 'Cajamarca', 'Tolima', '73'),
(989, 'Carmen de Apicalá', 'Tolima', '73'),
(990, 'Casabianca', 'Tolima', '73'),
(991, 'Chaparral', 'Tolima', '73'),
(992, 'Coello', 'Tolima', '73'),
(993, 'Coyaima', 'Tolima', '73'),
(994, 'Cunday', 'Tolima', '73'),
(995, 'Dolores', 'Tolima', '73'),
(996, 'Espinal', 'Tolima', '73'),
(997, 'Falán', 'Tolima', '73'),
(998, 'Flandes', 'Tolima', '73'),
(999, 'Fresno', 'Tolima', '73'),
(1000, 'Guamo', 'Tolima', '73'),
(1001, 'Herveo', 'Tolima', '73'),
(1002, 'Honda', 'Tolima', '73'),
(1003, 'Icononzo', 'Tolima', '73'),
(1004, 'Lérida', 'Tolima', '73'),
(1005, 'Líbano', 'Tolima', '73'),
(1006, 'Mariquita', 'Tolima', '73'),
(1007, 'Melgar', 'Tolima', '73'),
(1008, 'Murillo', 'Tolima', '73'),
(1009, 'Natagaima', 'Tolima', '73'),
(1010, 'Ortega', 'Tolima', '73'),
(1011, 'Palocabildo', 'Tolima', '73'),
(1012, 'Piedras', 'Tolima', '73'),
(1013, 'Planadas', 'Tolima', '73'),
(1014, 'Prado', 'Tolima', '73'),
(1015, 'Purificación', 'Tolima', '73'),
(1016, 'Rioblanco', 'Tolima', '73'),
(1017, 'Roncesvalles', 'Tolima', '73'),
(1018, 'Rovira', 'Tolima', '73'),
(1019, 'Saldaña', 'Tolima', '73'),
(1020, 'San Antonio', 'Tolima', '73'),
(1021, 'San Luis', 'Tolima', '73'),
(1022, 'Santa Isabel', 'Tolima', '73'),
(1023, 'Suárez', 'Tolima', '73'),
(1024, 'Valle de San Juan', 'Tolima', '73'),
(1025, 'Venadillo', 'Tolima', '73'),
(1026, 'Villahermosa', 'Tolima', '73'),
(1027, 'Villarrica', 'Tolima', '73'),
(1028, 'Cali', 'Valle', '76'),
(1029, 'Alcalá', 'Valle', '76'),
(1030, 'Andalucía', 'Valle', '76'),
(1031, 'Ansermanuevo', 'Valle', '76'),
(1032, 'Argelia', 'Valle', '76'),
(1033, 'Bolívar', 'Valle', '76'),
(1034, 'Buenaventura', 'Valle', '76'),
(1035, 'Buga', 'Valle', '76'),
(1036, 'Bugalagrande', 'Valle', '76'),
(1037, 'Caicedonia', 'Valle', '76'),
(1038, 'Calima (Darién)', 'Valle', '76'),
(1039, 'Candelaria', 'Valle', '76'),
(1040, 'Cartago', 'Valle', '76'),
(1041, 'Dagua', 'Valle', '76'),
(1042, 'El Águila', 'Valle', '76'),
(1043, 'El Cairo', 'Valle', '76'),
(1044, 'El Cerrito', 'Valle', '76'),
(1045, 'El Dovio', 'Valle', '76'),
(1046, 'Florida', 'Valle', '76'),
(1047, 'Ginebra', 'Valle', '76'),
(1048, 'Guacarí', 'Valle', '76'),
(1049, 'Jamundí', 'Valle', '76'),
(1050, 'La Cumbre', 'Valle', '76'),
(1051, 'La Unión', 'Valle', '76'),
(1052, 'La Victoria', 'Valle', '76'),
(1053, 'Obando', 'Valle', '76'),
(1054, 'Palmira', 'Valle', '76'),
(1055, 'Pradera', 'Valle', '76'),
(1056, 'Restrepo', 'Valle', '76'),
(1057, 'Riofrío', 'Valle', '76'),
(1058, 'Roldanillo', 'Valle', '76'),
(1059, 'San Pedro', 'Valle', '76'),
(1060, 'Sevilla', 'Valle', '76'),
(1061, 'Toro', 'Valle', '76'),
(1062, 'Trujillo', 'Valle', '76'),
(1063, 'Tuluá', 'Valle', '76'),
(1064, 'Ulloa', 'Valle', '76'),
(1065, 'Versalles', 'Valle', '76'),
(1066, 'Vijes', 'Valle', '76'),
(1067, 'Yotoco', 'Valle', '76'),
(1068, 'Yumbo', 'Valle', '76'),
(1069, 'Zarzal', 'Valle', '76'),
(1070, 'Mitú', 'Vaupés', '97'),
(1071, 'Carurú', 'Vaupés', '97'),
(1072, 'Tatamá', 'Vaupés', '97'),
(1073, 'Puerto Carreño', 'Vichada', '99'),
(1074, 'La Primavera', 'Vichada', '99'),
(1075, 'Santa Rosalia', 'Vichada', '99'),
(1076, 'Cumaribo', 'Vichada', '99');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden_produccion`
--

CREATE TABLE IF NOT EXISTS `orden_produccion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pedido` varchar(12) NOT NULL,
  `fecha_creacion` date DEFAULT NULL,
  `fecha_terminacion` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `orden_produccion`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE IF NOT EXISTS `pagos` (
  `id_pago` int(11) NOT NULL AUTO_INCREMENT,
  `numero_de_factura` varchar(20) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `tipo_de_pago` varchar(20) DEFAULT NULL,
  `cantidad_de_pago` decimal(10,2) DEFAULT NULL,
  `forma_de_pago` varchar(10) DEFAULT NULL,
  `descripcion` text NOT NULL,
  PRIMARY KEY (`id_pago`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Volcar la base de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`id_pago`, `numero_de_factura`, `id_cliente`, `id_usuario`, `fecha`, `tipo_de_pago`, `cantidad_de_pago`, `forma_de_pago`, `descripcion`) VALUES
(1, '21221541', 2, 4, '2012-12-04', 'efectivo', '20000.00', 'mensual', 'aoaoaoaoao'),
(2, '231325', 1, 4, '2012-12-05', 'efectivo', '15000.00', 'quincenal', '=)'),
(3, '145874', 1, 4, '2012-12-05', 'efectivo', '50000.00', 'mensual', '=)'),
(4, '1254254', 1, 4, '2012-12-06', 'efectivo', '10000.00', 'semanal', ''),
(5, '123587', 2, 4, '2012-12-06', 'efectivo', '50000.00', 'mensual', ''),
(6, '254785', 1, 4, '2012-12-06', 'efectivo', '14000.00', 'mensual', 'd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE IF NOT EXISTS `pedidos` (
  `id_pedido` int(11) NOT NULL AUTO_INCREMENT,
  `valor_del_iva` decimal(10,2) DEFAULT NULL,
  `valor_total` decimal(10,2) DEFAULT NULL,
  `id_vendedor` varchar(12) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `id_cliente` varchar(12) NOT NULL,
  PRIMARY KEY (`id_pedido`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Volcar la base de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `valor_del_iva`, `valor_total`, `id_vendedor`, `fecha`, `hora`, `id_cliente`) VALUES
(1, '2500.00', '350000.00', '4', '2012-11-07', '10:00:00', '1'),
(2, '2500.00', '600000.00', '4', '2012-11-28', '02:00:00', '1'),
(3, '2500.00', '50000.00', '6', '2012-12-10', '11:00:00', '126');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidosprod`
--

CREATE TABLE IF NOT EXISTS `pedidosprod` (
  `id_pedidosProd` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_producto` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  PRIMARY KEY (`id_pedidosProd`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcar la base de datos para la tabla `pedidosprod`
--

INSERT INTO `pedidosprod` (`id_pedidosProd`, `codigo_producto`, `id_pedido`) VALUES
(1, 1, 1),
(2, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `codigo_producto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) DEFAULT NULL,
  `foto` varchar(50) DEFAULT NULL,
  `cantidad` decimal(10,2) DEFAULT NULL,
  `precio_costo` decimal(10,2) DEFAULT NULL,
  `precio_venta` decimal(10,2) DEFAULT NULL,
  `precio_descuento` decimal(10,2) DEFAULT NULL,
  `codigo_barras` varchar(20) NOT NULL,
  `cod_tipo_producto` int(11) NOT NULL,
  PRIMARY KEY (`codigo_producto`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcar la base de datos para la tabla `productos`
--

INSERT INTO `productos` (`codigo_producto`, `nombre`, `foto`, `cantidad`, `precio_costo`, `precio_venta`, `precio_descuento`, `codigo_barras`, `cod_tipo_producto`) VALUES
(1, 'vestido impermeable', NULL, '50.00', '40000.00', '60000.00', '50000.00', '785000452115', 1),
(2, 'delantal infantil', NULL, '150.00', '20000.00', '35000.00', '30000.00', '770258455455', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `quejas`
--

CREATE TABLE IF NOT EXISTS `quejas` (
  `id_queja` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `descripcion` text NOT NULL,
  PRIMARY KEY (`id_queja`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Volcar la base de datos para la tabla `quejas`
--

INSERT INTO `quejas` (`id_queja`, `fecha`, `id_cliente`, `id_usuario`, `descripcion`) VALUES
(1, '2012-11-21', 2, 4, 'el producto esta desteñido'),
(2, '2012-12-05', 1, 4, 'null'),
(3, '2012-12-05', 1, 4, 'productos desteñidos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tallas`
--

CREATE TABLE IF NOT EXISTS `tallas` (
  `cod_talla` int(11) NOT NULL AUTO_INCREMENT,
  `talla` text NOT NULL,
  PRIMARY KEY (`cod_talla`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcar la base de datos para la tabla `tallas`
--

INSERT INTO `tallas` (`cod_talla`, `talla`) VALUES
(1, 'M'),
(2, '1 a 3 años');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tallasprod`
--

CREATE TABLE IF NOT EXISTS `tallasprod` (
  `id_tallasProd` int(11) NOT NULL AUTO_INCREMENT,
  `cod_talla` int(11) NOT NULL,
  `codigo_producto` int(11) NOT NULL,
  PRIMARY KEY (`id_tallasProd`),
  KEY `codigo_producto` (`codigo_producto`),
  KEY `cod_talla` (`cod_talla`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcar la base de datos para la tabla `tallasprod`
--

INSERT INTO `tallasprod` (`id_tallasProd`, `cod_talla`, `codigo_producto`) VALUES
(1, 1, 1),
(2, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_producto`
--

CREATE TABLE IF NOT EXISTS `tipo_producto` (
  `cod_tipo_producto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_tipo_producto` varchar(25) NOT NULL,
  PRIMARY KEY (`cod_tipo_producto`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcar la base de datos para la tabla `tipo_producto`
--

INSERT INTO `tipo_producto` (`cod_tipo_producto`, `nombre_tipo_producto`) VALUES
(1, 'Abrigos'),
(2, 'Carpa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacion_geografica`
--

CREATE TABLE IF NOT EXISTS `ubicacion_geografica` (
  `id_ubicacion` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `lantitud` decimal(20,0) NOT NULL,
  `longitud` decimal(20,0) NOT NULL,
  `pais` varchar(20) NOT NULL,
  `departamento` varchar(20) NOT NULL,
  `ciudad` varchar(20) NOT NULL,
  PRIMARY KEY (`id_ubicacion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcar la base de datos para la tabla `ubicacion_geografica`
--

INSERT INTO `ubicacion_geografica` (`id_ubicacion`, `id_usuario`, `id_cliente`, `lantitud`, `longitud`, `pais`, `departamento`, `ciudad`) VALUES
(0, 1, 1, '-7625651', '523214', 'colombia', 'risaralda', 'dosquebradas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `apellidos_usuario` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `cedula_usuario` varchar(15) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `direccion_usuario` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `telefono_usuario` varchar(20) NOT NULL,
  `celular_usuario` varchar(20) DEFAULT NULL,
  `email_usuario` varchar(50) NOT NULL,
  `nickname_usuario` varchar(20) NOT NULL,
  `password_usuario` varchar(40) NOT NULL,
  `tipo_usuario` varchar(20) DEFAULT NULL,
  `foto_usuario` varchar(50) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `fecha_cumpleanos` date NOT NULL,
  `banco` int(11) NOT NULL,
  `tipo_cuenta_bancaria` int(11) NOT NULL,
  `numero_cuenta` varchar(30) NOT NULL,
  `otros_datos` text NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Volcar la base de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `apellidos_usuario`, `cedula_usuario`, `direccion_usuario`, `telefono_usuario`, `celular_usuario`, `email_usuario`, `nickname_usuario`, `password_usuario`, `tipo_usuario`, `foto_usuario`, `fecha`, `fecha_cumpleanos`, `banco`, `tipo_cuenta_bancaria`, `numero_cuenta`, `otros_datos`) VALUES
(1, 'Sandra Mil', 'Giraldo Tamayo', '252222222', 'Milan casa 17', '3423226', '3012742323', 'comercial@surtiplas.com', 'sandra', 'sandra', 'C', 's', '2012-10-01', '1988-10-18', 1, 0, '111-222-333-4444', 'Ahorro'),
(4, 'Pedro Andres', 'Perez Ossa', '868686868', 'call3', '23232', '3400000', 'pepe@gmail.com', 'crispeta', 'crispeta', 'V', 'foto_usuario', '2010-02-03', '1988-10-06', 1, 1, '22-222-222-6667', 'null'),
(5, 'Carlos Andres', 'Jaramillo', '9867024', 'milan casa 17', '3423226', '3006731512', 'cajaramillov@gmail.com', 'cajaramillov', 'c4rl05', 'V', 'foto_usuario', '2012-11-05', '1982-11-09', 1, 1, '123-344-3333', 'bien'),
(6, 'Libardo de Jesus', 'Perez Martinez', '343434', 'Santa Isabel casa 20', '232323', '3006749876', 'perez@lib', 'libperez', '1234', 'V', 'foto_usuario', '2012-11-13', '2012-05-28', 1, 1, '7676767', 'datos correctos'),
(7, 'vaquero', 'toro', '12554141', 'dfd2512', '3513', '56456', 'vaquerotoro@gmail.com', 'vaquero', '12345', 'V', 'foto_usuario', '2012-11-04', '2012-11-14', 4, 2, '123548215', '12335');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viaticos`
--

CREATE TABLE IF NOT EXISTS `viaticos` (
  `id_viaticos` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` varchar(12) NOT NULL,
  `valor` double NOT NULL,
  `concepto` varchar(30) NOT NULL,
  `fecha` date NOT NULL,
  `codMunicipio` int(11) NOT NULL,
  PRIMARY KEY (`id_viaticos`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Volcar la base de datos para la tabla `viaticos`
--

INSERT INTO `viaticos` (`id_viaticos`, `id_usuario`, `valor`, `concepto`, `fecha`, `codMunicipio`) VALUES
(1, '4', 70000, 'alimentacion', '2012-11-18', 1),
(2, '4', 4000, 'transporte', '2012-11-18', 4),
(3, '4', 15000, 'transporte', '2012-11-30', 858),
(4, '4', 7000, 'urbanos', '2012-11-30', 854),
(5, '4', 5000, 'transporte', '2012-11-14', 854),
(6, '4', 18000, 'alimentacion', '2012-11-14', 870),
(8, '4', 20000, 'hospedaje', '2012-12-07', 842),
(9, '4', 6000, 'transporte', '2012-12-20', 854),
(10, '4', 14521, 'urbanos', '2012-12-07', 727),
(11, '4', 25000, 'hospedaje', '2012-12-07', 858),
(12, '4', 8500, 'otros', '2012-12-07', 4),
(13, '4', 15000, 'transporte', '2012-12-10', 854);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visitas`
--

CREATE TABLE IF NOT EXISTS `visitas` (
  `id_visita` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `descripcion` text,
  PRIMARY KEY (`id_visita`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Volcar la base de datos para la tabla `visitas`
--

INSERT INTO `visitas` (`id_visita`, `fecha`, `id_cliente`, `id_usuario`, `descripcion`) VALUES
(1, '2012-12-04', 1, 4, '562'),
(2, '2012-12-04', 2, 4, '7563'),
(3, '2012-12-04', 1, 4, 'jojojojojo'),
(4, '2012-12-04', 2, 4, 'jajajajajajajaj'),
(5, '2012-12-04', 2, 4, 'jejejejejej');

--
-- Filtros para las tablas descargadas (dump)
--

--
-- Filtros para la tabla `coloresprod`
--
ALTER TABLE `coloresprod`
  ADD CONSTRAINT `coloresprod_ibfk_1` FOREIGN KEY (`codigo_producto`) REFERENCES `productos` (`codigo_producto`);

--
-- Filtros para la tabla `materialprod`
--
ALTER TABLE `materialprod`
  ADD CONSTRAINT `materialprod_ibfk_1` FOREIGN KEY (`codigo`) REFERENCES `material` (`codigo`),
  ADD CONSTRAINT `materialprod_ibfk_2` FOREIGN KEY (`codigo_producto`) REFERENCES `productos` (`codigo_producto`);

--
-- Filtros para la tabla `municipios`
--
ALTER TABLE `municipios`
  ADD CONSTRAINT `municipios_ibfk_1` FOREIGN KEY (`cod_departamento`) REFERENCES `departamentos` (`cod_departamento`);

--
-- Filtros para la tabla `tallasprod`
--
ALTER TABLE `tallasprod`
  ADD CONSTRAINT `tallasprod_ibfk_2` FOREIGN KEY (`codigo_producto`) REFERENCES `productos` (`codigo_producto`),
  ADD CONSTRAINT `tallasprod_ibfk_3` FOREIGN KEY (`cod_talla`) REFERENCES `tallas` (`cod_talla`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
