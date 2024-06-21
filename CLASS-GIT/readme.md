# Clases de git-bash
## CLASE 1 MIÉRCOLES 27 DE MARZO DEL 2024

#### Analizar cambios en los archivos de tu proyecto Git parte 1
Lo que vimos en la clase anterior:
Abrimos la terminal de Git Bash en Window o la terminal de Ubuntu, tambien la terminal de Mac, y comenzamos con los siguientes comandos y creación de directorios

**pwd** *Vemos la ruta de la carpeta en la que estamos*

**cd** *Es para navegar a una carpeta: change directory -> cambiar de directorio*

**cd /** *Nos llava al home, en la raíz del disco*

**cd ~** *La virgulilla significa que estamos en el lugar de los documentos o del usuario*

**ls** *Esto es listar los archivos, nos muestra todos los archivos en la raíz*

**ls -al** *El espacio -al significa que es un argumento especial para ver archivos ocultos*

**ls -l** *Muestra casi todos los archivos sin los que están ocultos*

**ls -a** *Muestra el grupo de archivos pero no en una lista*

*Usar la* **flecha hacía arriba** *nos muestra el último comando utilizado*

**clear** *o* **ctrl + l** *Limpia la consola 

**cd ..** *Nos devuelve a la carpeta anterior*

**cd U + tab** *Esto se usa para un autocompletado o para buscar una referencia*

**cd /D** *Cambiamos de disco en window*

**df -h** *Muestra todos los directorios en Ubuntu*

**cd /mnt/d** *Cambia de directorio usando WSL Ubuntu en window*



#### AHORA COMENZAMOS CON LA CREACIÓN DE CARPETAS

**cd ..**

**cd ..**

**cd /mnt/c**

**cd ~ #Vamos a la raíz**

**mkdir Tecnicatura** 
*Recordar que en window las mayúsculas no tienen relevancia, pero si en Linux*

**cd tecnicatura**

**mkdir Python**

**mkdir Java**

**mkdir JavaScript**

Revisar y ejecutar cada comando, hacerlo como practica
**Profesor Ariel Betancud**

---
---

## CLASE 2 MIÉRCOLES 3 DE ABRIL DEL 2024

#### Analizar cambios en los archivos de tu proyecto Git parte 2
Abrir git bash en Window o la terminal de Linux o de Mac: al abrir Git Bash hacerlo como administrador

**touch vacio.txt** *Crea un archivo con su extención:* *ESCRIBIR DENTRO*

**ctrl + s** *Guardamos lo que escribimos en el archivo*

**./** *Significa la carpeta actual*

**../** *Significa la carpeta anterior*

**cat vacio.txt** *Vemos el contenido del archivo*

**history** *Veremos la historia completa de los comandos que hemos utilizado*

**!72 + enter** *Veremos el comando que utilizamos en ese número*

**rm vacio.txt** *Borra el archivo seleccionado,* **¡¡¡¡CUIDADO!!!!**

**rm --help** *Muestra como funciona el comando*

#### CREAR UN REPOSITORIO DE GIT Y HAZ TU PRIMER COMMIT

**cd tecnicatura**

**mkdir class-git**

**cd class-git** *Entramos en la carpeta que necesitamos trabajar*

**git init* *Creamos un repositorio en la carpeta central, se crea el archivo .git*

**code .** *Abrimos VSC, el punto hace que se abra el archivo en el que estamos situados*

**ctrl + n** *Creamos un archivo nuevo y escribimos en el, como lo hicimos antes*

**ctrl + s** *Guardamos poniendo el nombre: historia.txt*

**git status** *Vemos el estado del proyecto en tiempo real, esta en el área de trabajo*

**git add historia.txt** *Enviamos el archivo al área de preparación*

**git status** *Para ver el estado de cambios*

**git rm --cached historia.txt** *Quitamos el archivo del área de preparación, cached significa que esta en memoria ram*

**git config** *Tedremos la lista de como funciona la configuración*

**git config --list** *Configuraciones por defecto, faltan cosas importantes*

**git config --list --show-origin** *Veremos donde están las configuraciones guardadas*

**git config --global user.name "Ariel Betancud"**

**git config --global user.email "betancudariel@gmail.com"** 
*El correo debe ser el mismo que usaremos en GitHub*

**git config --list** *Ahora veremos que ya están todos los datos completos*

**git add .** *Ingresamos todos los archivos al área de preparación (ram)*

**git commit -m "Mensaje importante del commit"** *El primer commit esta hecho*

**code .** *Hacemos cambios en el archivo y guardamos*

**git status** *Hay cambios para commitear*

**git add .**

**git commit -m "Mi segundo commit"**

**git log historia.txt** *Vemos toda la historia de este archivo, el número largo es el hash del commit*

Revisar y ejecutar cada comando, hacerlo como practica
**Profesor Ariel Betancud**

---
---
## CLASE 3 MIÉRCOLES 10 DE ABRIL DEL 2024

#### Analizar cambios en los archivos de tu proyecto Git parte 3
Ingresamos de la siguiente manera:

Abrir git bash en Window o la terminal de Linux o de Mac: al abrir Git Bash hacerlo como administrador, en terminal también o usar sudo para permisos especiales.

**cd tecnicatura** *Ingresamos al direcotorio donde están nuestras carpetas de trabajo*

**ls** *Vemos los archivos y directorios que ya tenemos*

**cd git** *No hay nada*

**cd ..** *Salimos*

**rm historia.txt** *Eliminamos el archivo que habíamos hecho, esto en git bash (window) esto es para practica*

**rm Git** *rm: cannot remove 'Git': Is a directory*

**rm --recursive -R Git** *By default, rm does not remove directories. Use the --recursive (-r or -R) arguments*

option to remove each listed directory, too, along with all of its contents. Esto es para practica

**rm --help** *Nos muestra lo que les puse arriba como documentación en Inglés.*

**mkdir class-git** *Creamos la carpeta o directorio para trabajar en Git local por ahora.*

**cd class-git** *Entramos para crear el README.md para este sector.*

**touch README.md** *Vamos a crear un archivo nuevo, md significa markdown y se pueden trabajar con editores de texto, este es un lenguaje que transforma el texto a html.****

**Enlace a la documentación en GitHub de [MARKDOWN](https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)**
Leemos la documentación para ir creando en README.md como lo enseña GitHub.

**code .** *Abrimos VSC para editar el archivo.*

Empezamos a cargar lo visto en las clases anteriores (Comandos) en el README y pasamos a commitear

**git status**

**git add .**

**git status**

**git commit -m "Cargamos el README dentro del directorio class-git"**

**git status**

**git log** *Para ver los dos commits hechos: Si tienes commiteada alguna clase anterior veras mas commits de los que yo tengo.*

**cd ..**

**cd ..**

Revisar y ejecutar cada comando, hacerlo como practica
**Profesor Ariel Betancud**

---
---

## CLASE 4 MIÉRCOLES 17 DE ABRIL DEL 2024

**Analizar cambios en los archivos de tu proyecto Git parte 4**

Ingresamos de la siguiente manera:
Abrir git bash en Window o la terminal de Linux o de Mac: al abrir Git Bash hacerlo como administrador, en terminal también o usar sudo para permisos especiales.

###### TAREA -> AGREGAR LOS COMENTARIOS EN LOS COMANDOS, PARA SABER QUE PASA CON CADA UNO.

**cd tecnicatura**

**cd class-git**

**ls**

**touch historia.txt**

**code .**

*Modificamos el archivo historia.txt colocando lo siguiente: Bienvenido mi nombre es Ariel (coloca tu nombre)*

**ctrl + s**

**git status**

**git add .**

**git status**

**git commit** *Sin agregar -m veremos que pasa*

*Agregar mensaje y salir con*  **Esc** *Presionamos Escape*

**:wq! + enter** *Y ya salimos si estamos en git bash con window*

**Esc + shift + z + z** *Salimos del mensaje para el commit, en linux, esto anda en algunas terminales*

*Agregamos otra línea de mensaje en historia.txt desde VSC:* **estoy estudiando programación**

**ctrl + s**

**git add .**

**git commit**

*Se abre un editor de código basado en línea de comandos, editor de texto como VSC llamado vim*

**Esc + i** *Para comenzar a escribir mensaje del commit, no suele ser necesario*

**ctrl + x** *Para salir en linux*

**s + enter ** *Para decir si al cambio y aceptar el nombre, ósea no cambiamos el nombre, la (s) es de si y la (y) es de yes, no olvidar enter en linux*

**git show** *Vemos todos los cambios en el último commit*

**git log historia.txt** *Vemos todos los commit*

**q ** *Para salir del registro de commits*

*Copiamos un hash mas antiguo y otro reciente, ingresamos el siguiente comando*

**git diff hash_commit_numerico hash_commit_numerico** 
*Comparamos diferentes commits y sus cambios, poner la versión mas vieja primero, luego la mas nueva**

**q** *Para salir*

**cd ..**

**cd ..**

La tarea de hoy, agregar esta clase al README.md con el lenguaje de markdown, como lo hicimos en la clase pasada, luego deben hacer el commit correspondiente al cambio agregado.

Revisar y ejecutar cada comando, hacerlo como practica
**Profesor Ariel Betancud**

---
---