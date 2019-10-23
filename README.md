## Aplicacion De Consola Para Tareas Por Hacer
## ------------------Parametros---------------
1. descripcion (-d): es un string y es el titulo de la tarea a realizar
2. completado (-c): es un boolean y indica si la tarea ya esta realizada

## ------------------Comandos-----------------
1. crear: crea una nueva tarea para realizar recibe el titulo  de la tarea.
2. listar: muestra todas las tareas esten o no esten completadas.
3. actualizar: actualiza el estado de una tarea, este recibe el titulo de la tarea, y el valor del completado (true o false).
4. Borrar: Borra una determinada tarea, esta recibe la descripcion

## ------------------Ejemplos------------------
1. node app crear -d "pasear al perro"
2. node app listar
3. node app actualizar -d "pasear al perro" -c true
4. node app borrar -d "pasear al perro"

## -----------------Notas-----------------------
Los datos deben ser persistentes en un archivo .json de ahi se deben escribir y leer las tareas.
Recordar Instalar Los Paquetes de node "npm install"