CREATE DATABASE PDIpia;
USE PDIpia;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP NOT NULL
        DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP NOT NULL
        DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,
    foto_perfil VARCHAR(255) DEFAULT NULL
);

CREATE TABLE trivias (
    id_trivia INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    puntaje_requerido TINYINT NOT NULL DEFAULT 5
);

CREATE TABLE tarjetas (
    id_tarjeta INT AUTO_INCREMENT PRIMARY KEY,
    id_trivia INT NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    imagen VARCHAR(255) NOT NULL,

    FOREIGN KEY (id_trivia)
        REFERENCES trivias(id_trivia)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

CREATE TABLE usuarios_tarjetas (
    id_usuario INT NOT NULL,
    id_tarjeta INT NOT NULL,
    fecha_obtenida TIMESTAMP NOT NULL
        DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id_usuario, id_tarjeta),

    FOREIGN KEY (id_usuario)
        REFERENCES usuarios(id_usuario)
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    FOREIGN KEY (id_tarjeta)
        REFERENCES tarjetas(id_tarjeta)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);


/* TRIVIAS */

INSERT INTO trivias (codigo, nombre)
VALUES
('acereros', 'Acereros de Monclova'),
('algodoneros', 'Algodoneros Unión Laguna'),
('charros', 'Charros de Jalisco'),
('dorados', 'Dorados de Chihuahua'),
('rieleros', 'Rieleros de Aguascalientes'),
('saraperos', 'Saraperos de Saltillo'),
('sultanes', 'Sultanes de Monterrey'),
('tecolotes', 'Tecolotes de los Dos Laredos'),
('toros', 'Toros de Tijuana'),
('caliente', 'Caliente de Durango');

/* TARJETAS */

INSERT INTO tarjetas (id_trivia, nombre, imagen)
VALUES
(1, 'Daniel Mengden', './images/cards/danielmengdencard.jpg'),
(2, 'Jesús Pirela', './images/cards/jesuspirelacard.jpg'),
(3, 'Juan Gamez', './images/cards/juangamezcard.png'),
(4, 'Manny Banuelos', './images/cards/mannybanueloscard.jpg'),
(5, 'Richard Rodriguez', './images/cards/richardrodriguezcard.jpg'),
(6, 'Jake Higginbotham', './images/cards/jakehigginbothamcard.jpg'),
(7, 'Ramiro Peña', './images/cards/ramiropenacard.jpg'),
(8, 'Ricardo Genovés', './images/cards/ricardogenovescard.jpg'),
(9, 'Harold Ramírez', './images/cards/haroldramirezcard.jpg'),
(10, 'Sócrates Brito', './images/cards/socratesbritocard.jpg');