-- LEER

-- muestra las bases de datos que tenemos
SHOW DATABASES;

-- seleccionar la base de datos a usar
USE sakila;

-- leer todos los datos de una tabla 
SELECT * FROM actor;
SELECT * FROM city;

-- leer partes de una tabla
SELECT city,city_id FROM city;


-- Limitar la cantidad de datos
SELECT * FROM actor LIMIT 10;

-- Ordenar los datos dependiendo de una columna de forma ascendente
SELECT * FROM city ORDER BY city ASC;

-- Ordenar los datos dependiendo de una columna de forma descendente
SELECT * FROM city ORDER BY country_id DESC;


/* 

Operadores de comparación

	Igual			=
	Distinto		!=
	Mayor 			>
    Menor			<
    Mayor o igual	>=
    Menor o igual	<=
    Como			LIKE
	No es como		NOT LIKE
*/


SELECT * FROM city WHERE city = 'CUMAN';
SELECT * FROM actor WHERE first_name = 'Penelope';

SELECT * FROM actor WHERE first_name != 'Penelope';

SELECT * FROM actor WHERE actor_id > 50;
SELECT * FROM actor WHERE actor_id < 100;
SELECT * FROM actor WHERE actor_id >= 50;
SELECT * FROM actor WHERE actor_id <= 100;


SELECT * FROM actor WHERE first_name LIKE 'Penelop';

-- Se utiliza para realizar busquedas
-- Comodines
-- Selecciona de la tabla todas las personas que terminen su first_name con "an" 
SELECT * FROM actor WHERE first_name LIKE '%an';

-- Seleccionar de la tabla todas las personas cuyo first_name enpiece con "an"
SELECT * FROM actor WHERE first_name LIKE "an%";

-- Seleccionar de la tabla todas las personas cuyo first_name contengan "n"
SELECT * FROM actor WHERE first_name LIKE "%n%";

-- Seleccionar un patron
SELECT * FROM actor WHERE first_name LIKE "%a__e%";

-- NOT LIKE
SELECT * FROM actor WHERE first_name NOT LIKE "%a__e%";


-- Uniendo todo
SELECT * FROM actor WHERE first_name LIKE "%nn%" ORDER BY last_name ASC LIMIT 5;


/* 

	Operadores logicos
	AND 		Debe cumplir ambas condiciones
    OR			Basta con que cumpla una de ellas

*/

SELECT * FROM actor where actor_id > 50 AND first_name LIKE "%n%";

SELECT * FROM actor where first_name LIKE "%n%" OR first_name LIKE "%m%";

