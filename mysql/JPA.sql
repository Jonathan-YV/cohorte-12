create database generation;
drop DATABASE generation;
use generation;

create table cohorte(
	id_cohorte int AUTO_INCREMENT,
    numero_cohorte int not null,
    ciudad varchar(255) not null,
    primary key(id)
);

create table alumno(
	id_alumno int AUTO_INCREMENT,
    nombre varchar(255) not null,
    edad int not null,
    correo varchar(255) not null unique,
    cohorte_id int not null,
    primary key(id_alumno),
	FOREIGN KEY(cohorte_id) REFERENCES cohorte(id_cohorte)
    ON DELETE CASCADE
);

create table instructor(
	id_instructor int AUTO_INCREMENT,
    nombre_instructor varchar(255) not null,
    supervisor varchar(255) not null,
    puesto varchar(255) not null,
    cohorte_id int not null,
    PRIMARY KEY(id),
    FOREIGN KEY(cohorte_id) REFERENCES cohorte(id_cohorte)
    ON DELETE CASCADE
);

INSERT INTO cohorte(numero_cohorte, ciudad) values 
(12,"CDMX");

INSERT INTO alumno(nombre, edad, correo, cohorte_id) values 
("Pepito", 28, "pepito@gmail.com",1),
("Mau", 25, "mau@gmail.com",1);

INSERT INTO instructor(nombre, supervisor, puesto, cohorte_id) values
("Jonathan","Marina", "Desarrollador Java Full Stack", 1);

SELECT * FROM cohorte;
SELECT * FROM alumno;
SELECT * FROM instructor;

DELETE FROM cohorte Where id_cohorte=2;


SELECT id_instructor as id, 
instructor.nombre as nombreInstructor, 
alumno.nombre as nombreAlumno FROM instructor inner join alumno on instructor.cohorte_id = alumno.cohorte_id;


