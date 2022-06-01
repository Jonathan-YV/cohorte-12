-- ACTUALIZAR

-- Agregar una columna
ALTER TABLE mascota ADD COLUMN especie VARCHAR(255) NOT NULL;

-- Agregar una columna en una posicion especifica 
ALTER TABLE mascota ADD COLUMN cumpleanios DATE AFTER edad;

-- Modificar las caracteristicas de una columna
ALTER TABLE mascotita MODIFY especie VARCHAR(255);

-- No podemos cambiar el nombre de una columna
ALTER TABLE mascota CHANGE COLUMN edad edadP int NOT NULL;

-- Renombrar la tabla
ALTER TABLE mascota RENAME mascotita;

SELECT * FROM mascotita;
SELECT * FROM persona;


-- Actualizar datos de una fila

-- Error 1175: No podemos actualizar si no seleccionamos la llave primaria
UPDATE mascotita SET especie = "Gato" WHERE nombre="Leo";

-- Forma correcta
UPDATE mascotita SET especie = "Gato" WHERE mascota_id = 1;

UPDATE mascotita SET especie = "Perro", edadP = 10 WHERE mascota_id = 2;


UPDATE persona SET persona_id = 3 WHERE persona_id = 4;
UPDATE persona SET persona_id = 4 WHERE persona_id = 5;

