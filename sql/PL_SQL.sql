-- PL/SQL

-- Declaración bloques de código, para la ejecución de sentencias y lógica
DECLARE
	mensaje varchar2(20):= 'Hola Clase BackEnd';
BEGIN
	dbms_output.put_line(mensaje);
END;

-- Delimiters
-- + suma
-- - resta
-- *  multiplicación
-- / división
-- % indicador de atributo
-- '' definición string
-- . selector de componetes
-- , separador de items
-- " identificador
-- = Operador de relación
-- ; Fin de setencia
-- := Operador de asignación
-- => Operador de asociación
-- || Operador de concatenación
-- ** Operador de exponente
-- << y >> Etiquetas (inicio y fin respectivamente)
-- /* y */ Comentarios en multi linea ( Inicio y fin respectivamente)
-- -- Comentario single line
-- .. Operador de rango
-- < , >, <= y >= Operadores relacionales
-- <>, '=, ~=, ^= Operador diferente que o no igual


-- Data Types

-- Categorias 
-- * Scalar (Number, Date, Boolean, etc)
-- * Large Object (LOB) Son objetos almacenados separados de los demás objetos, como lo son texto, imagenes, videos, y audios.
-- * Composite Son items que tiene items internos y que se pueden acceder individualmente, como lo son colleciones o registros.
-- * Reference Son apuntadores para otros datos.

-- SCALAR
-- * Numeric, valores numericos
--		1.PLS_INTEGER, enteros con signo de 32 bits
-- 		2. BINARY_INTEGER, enteros con signo de 32 bits
-- 		3. BINARY_FLOAT, precisión sencilla 
-- 		4. BINARY_DOUBLE, precisión doble 
-- 		5. NUMBER(prec, scale), son de punto fijo o flotante con un valor absoluto
-- 		6. DEC(prec, scale), ANSI tiene punto fijo y con una precisión máxima de 38 numeros decimales
-- 		7. DECIMAL(prec, scale), IBM tiene punto fijo y con una precisión máxima de 38 numeros decimales
-- 		8. NUMERIC(prec, scale), Punto flotante con precisión máxima de 38 numeros decimales
--		9. DOUBLE_PRECISION ANSI punto flotante con 126 numeros binarios de precisión (+- 38 numeros decimales)
-- 		10. FLOAT, ANSI e IBM punto flotante con 126 numeros binarios de precisión (+- 38 numeros decimales)
-- 		11. INT, ANSI entero con 38 numeros decimales precisión
-- 		12. INTEGER, ANSI e IBM entero con 38 numeros decimales precisión
-- 		13. SMALLINT, ANSI e IBM entero con 38 numeros decimales precisión
-- 		14. REAL, punto flotante con máxima precisión de 63 numeros binarios (+- 18 numeros decimales)
 
-- * Character, valores alfanuméricos que representan los strings
--		1. CHAR, longitud fija con 32767 bytes de long max
-- 		2. VARCHAR2 Longitud variable  con 32767 bytes de long max
-- 		3. RAW,  Longitud variable binaria   con 32767 bytes de long max y no puede ser interpretado por PL/SQL
-- 		4. NCHAR Longitud fija con caracteres nacionales  32767 bytes de long max
-- 		5. NVARCHAR Longitud variable con caracteres nacionales  32767 bytes de long max
-- 		6. LONG Longitud variable con caracteres nacionales  32760 bytes de long max
-- 		7. LONG RAW,  Longitud variable binaria   con 32760 bytes de long max y no puede ser interpretado por PL/SQL
-- 		8. ROWID, Representación física de indentificacdor de linea, o la dirección de una fila
--		9. UROWID, Representación física universal de indentificacdor de linea, o la dirección de una fila
 
-- * Boolean, valores lógicos.

-- * Datetime, son valores de fechas y horas
--		1. YEAR, cualquier entero no null (-4712 a 9999)
-- 		2. MONTH 01 a 12
-- 		3. DAY,  0 a 31 y está limitado por los valores de los meses y años 
-- 		4. HOUR, 00 a 23
-- 		5. MINUTE, 00 a 59
-- 		6. SECOND, 00 a 59.9 que el .9 es la preción de tiempo den segundos fraccionados
-- 		7. TIMEZONE_HOUR,  -12 a 14 acomodar el rango en horario de verano
-- 		8. TIMEZONE_MINUTE, 00 a 59
--		9. TIMEZONE_REGION, V$TIMEZONE_NAMES (zona horaria)
-- 		10. TIMEZONE_ABBR, V$TIMEZONE_NAMES (zona horaria)

 
-- Large Object (LOB)
-- BFILE, objetos binarios grandes para archivos fuera del sistema operativo
-- BLOB, objetos binarios grandes dentro de la base de datos
-- CLOB, bloques grandes de carteres en la base de datos
-- NCLOB, bloques grandes de NCHAR en la base de datos


DECLARE
	num1 INTEGER;
	num2 REAL;
	num3 DOUBLE PRECISION;
BEGIN 
	NULL;
END;

-- SUBTYPE

-- SUBTYPE CHARACTER is CHAR;
-- SUBTYPE ENTERO is NUMBER(38, 0);
DECLARE
	SUBTYPE nombre IS CHAR(20);
	SUBTYPE mensaje IS VARCHAR2(100);
	remitente nombre;
	saludo mensaje;
BEGIN 
	remitente := 'Carlos ';
	saludo := 'Este es el curso de backEnd';
	dbms_output.put_line('Hola ' || remitente || saludo);
END;

-- DECLARACIÓN DE VARIABLES

DECLARE
	a integer := 10;
	b integer := 20;
	c integer;
	d REAL;
BEGIN 
	c := a + b;
	dbms_output.put_line('Valor de C: '||c);
	d := 70.0/3.0;
	dbms_output.put_line('Valor de D: '||d);
END;

-- VARIABLE SCOPE 
-- Variables locales: que son las declaradas dentro de un bloque y no son accesibles por otros bloques
-- Variables globales: que son declaradas fuera de todo el bloque

DECLARE
	-- Variables Gloables
	a integer := 10;
	b integer := 20;
BEGIN 
	dbms_output.put_line('Variable global a: '||a);
	dbms_output.put_line('Variable global b: '||b);
	DECLARE
		--Variables Locales
		a NUMBER := 90;
		b NUMBER := 80;
	BEGIN
		dbms_output.put_line('Variable local a: '||a);
		dbms_output.put_line('Variable local b: '||b);
	END;
END;


-- SQL Assgination into PL/SQL Varaibles

CREATE TABLE backEnd(
	id INT NOT NULL,
	nombre varchar (20) NOT NULL,
	edad int NOT NULL,
	PRIMARY KEY (id)
);


INSERT INTO backEnd (id, nombre, edad) VALUES (1, 'carlos', '30');
INSERT INTO backEnd (id, nombre, edad) VALUES (2, 'alveiro', '18');
INSERT INTO backEnd (id, nombre, edad) VALUES (3, 'rodrigo', '45');
INSERT INTO backEnd (id, nombre, edad) VALUES (4, 'erika', '25');


SELECT * FROM backEnd;

DECLARE
	c_id backEnd.id%type:=4;
	c_nombre backEnd.nombre%TYPE;
	c_edad backEnd.edad%TYPE;
BEGIN
	SELECT  nombre, edad INTO c_nombre, c_edad
	FROM backEnd
	WHERE id=c_id;
	dbms_output.put_line('Nombre '||c_nombre || ' Edad '|| c_edad);	
END;


-- CONSTANTES
DECLARE
	-- declaración de constantes
	pi constant NUMBER:=3.141592;
	--otras declaraciones
	r NUMBER(5, 2);
	d NUMBER(5, 2);
	c  NUMBER(7, 2);
	a  NUMBER(10, 2);

BEGIN 
	r := 11.5;
	d := r * 2;
	c := 2.0 * pi * r;
	a := pi * r ** 2;
	dbms_output.put_line('radio: '||r);
	dbms_output.put_line('diametro: '||d);
	dbms_output.put_line('circunferencia: '||c);
	dbms_output.put_line('area: '||a);
END;

-- Ciclos y condiciones

DECLARE 
	i NUMBER(1);
	j NUMBER(1);
BEGIN
	<< outer_loop >>
	FOR i IN 1..3 LOOP
		<< inner_loop >>
		FOR j IN 1..3 LOOP
			IF j=1 THEN 
				dbms_output.put_line('i es : '||i || ' y j es :'|| j);
			ELSE
				dbms_output.put_line('j NO ES 1');
			END IF;
		END LOOP inner_loop;
	END LOOP outer_loop;
END;


-- VARRAY


DECLARE
	CURSOR c_backend IS 
	SELECT nombre FROM backEnd;
	TYPE c_list IS varray (4) OF backEnd.nombre%TYPE;
	name_list c_list := c_list();
	counter int :=0;
BEGIN
	FOR name IN c_backend LOOP
		counter := counter + 1;
		name_list.extend;
		name_list(counter) := name.nombre;
		dbms_output.put_line(name_list(counter));
	end LOOP;
		
END;