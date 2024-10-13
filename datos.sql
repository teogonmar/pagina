CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(255)
);


/*
->CREATE TABLE es el comando SQL utilizado para crear una nueva tabla en la base de datos.
  usuarios es el nombre de la tabla que se está creando.

->Los paréntesis encierran la definición de las columnas y las restricciones de la tabla.

id INT AUTO_INCREMENT PRIMARY KEY
   -> id es el nombre de la columna.
   -> INT es el tipo de dato de la columna y
     se utiliza para almacenar números enteros.
   -> AUTO_INCREMENT indica que el valor de id se incrementará automáticamente con cada nuevo registro.
     Es importante para generar un identificador único para cada fila sin tener que hacerlo manualmente.
   -> PRIMARY KEY define la columna id como la clave primaria de la tabla.
     Sirve para identificar de manera única cada registro en la tabla.
     No puede tener valor NULL

nombre VARCHAR(50)
   -> nombre es el nombre de la columna asignado.
   -> VARCHAR(50) es el tipo de dato de la columna. 
   -> VARCHAR significa Variable Character y se utiliza para almacenar cadenas de texto de longitud variable.
      El número 50 indica la longitud máxima de la cadena.

password VARCHAR(255)
   -> VARCHAR(255) se utiliza para almacenar contraseñas en formato hash. 
   -> VARCHAR(255) es utilizado para almacenar hashes de contraseñas generados por
      funciones como password_hash() de PHP, que suelen tener una longitud fija de
      60 caracteres para bcrypt, pero se usa 255 para cubrir otros algoritmos de hash si así lo requiere.
*/