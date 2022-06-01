-- Crear

-- crear una base de datos
-- CREATE SCHEMA familia;
CREATE DATABASE familia;

-- Seleccionar la base de datos
USE familia;

-- Al crear una tabla es necesario poner minimo una columna
-- No es necesario poner NOT NULL en llave primaria
-- Por defecto el valor asignado es NULL
-- Debemos especificar cual es la llave primaria
-- Para agregar valores unicos se utiliza UNIQUE

CREATE TABLE persona( 
	persona_id int AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    edad int NOT NULL,
    estado VARCHAR(255) DEFAULT "Desconocido",
    cumpleanios DATE,
    PRIMARY KEY(persona_id),
    CONSTRAINT email_unico UNIQUE(correo)
);

-- Insertar datos en una tabla
-- Tienen que ser en el orden indicado
-- No se necesita colocar el id porque es auto incrementable 
INSERT INTO persona(nombre, correo, edad, estado, cumpleanios) values 
("Jonathan",'jonathan@gmail.com',23,'Feliz','1998-12-14'),
('Yair','yair@gmail.com',24,'Triste','1998-05-31');

-- Error 1062: Dato unico repetido
-- INSERT INTO persona(nombre, correo, edad, estado, cumpleanios) values ('Pepe', 'yair@gmail.com', 34, 'Alegre', '1980-01-01');

-- Error 1364: No llenar un dato NOT NULL
-- INSERT INTO persona(correo, edad, estado, cumpleanios) values ('pepe@gmail.com',34,'Alegre','1980-01-01');

-- Ingresar datos que no son necesarios (No tiene el cumpleanios)
INSERT INTO persona(nombre, correo, edad, estado) values 
('Pepe', 'pepe@gmail.com', 34, 'Alegre');

-- Ingresar dato con valor por defecto (No tiene el estado)
INSERT INTO persona(nombre, correo, edad, cumpleanios) values
('Toño', 'ton@gmail.com', 40, '1970-10-10' );

INSERT INTO persona(nombre, correo, edad, cumpleanios) values
('Toño', 'ton1@gmail.com', 40, '1970-10-10' );

SELECT * FROM persona;


CREATE TABLE mascota (
	mascota_id int AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    edad int NOT NULL,
    fk1_persona int NOT NULL,
    PRIMARY KEY(mascota_id),
    FOREIGN KEY(fk1_persona) REFERENCES persona(persona_id) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

SELECT * FROM mascota;
SELECT * FROM persona;

INSERT INTO mascota (nombre, edad, fk1_persona) values 
('Leo',3,1);

INSERT INTO mascota (nombre, edad, fk1_persona) values
('Tobi',9,1);

INSERT INTO mascota (nombre, edad, fk1_persona) values
('Beni',12, 2),
('Patitas', 3, 4);

INSERT INTO mascota (nombre, edad, fk1_persona) values
('Solovino',2, 5);

