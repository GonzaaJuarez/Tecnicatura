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

## CLASE 5 MIÉRCOLES 24 DE ABRIL DEL 2024

**¿Qué es el staging?**

Tienes una carpeta donde están los archivos de tu proyecto o un directorio y allí tenemos el archivo historia.txt, cuando entramos por consola a ese archivo y creamos el git init, se crea un área en memoria ram que se llama staging, y el otro es el repositorio esta es la carpeta .git donde estarán todos los cambios al final del proyecto.  

Entonces tenemos el área de trabajo, cuando colocamos git add historia.txt pasamos al staging o área de preparación, que hay que recordar que esto es en la memoria ram y luego con git commit -m "Mensaje" pasa al repositorio en la rama master, allí se genera un nombre llenos de letras y números, es el hash, el nombre del commit.

![Clase5](https://github.com/GonzaaJuarez/Tecnicatura/blob/main/CLASS-GIT/IMAGE/Clase5.png?raw=true)  

**¿Qué es Gitflow?**
*Gitflow es un modelo alternativo de creación de ramas en Git en el que se utilizan ramas de función y varias ramas principales. Fue Vincent Driessen en nvie quien lo publicó por primera vez y quien lo popularizó.*

**¿Qué es branch (rama) y cómo funciona un merge en git?**
Tenemos una rama llamada master y es donde están los cambios de nuestros archivos, con cada commit creamos una nueva versión  
  
Vamos a crear una rama experimental para otras versiones que suele llamarse **development**, al encontrar bug, se crea otra rama que suele llamarse **hotfix** para hacer reparaciones, siempre que ya tengamos resultados favorables, es donde decidimos hacer un merge, es unir los resultados de las ramas a la rama master.  

La principal característica de las ramas principales es que solo existe una de cada tipo**. El objetivo es que no se instancien y que no reciban código de forma directa a través de commit, siempre tienen que recibir código a través de ramas de tipo **Feature**, **Release** y **Hotfix**, siempre a través de ramas auxiliares.

Es un riesgo recibir código directamente en la **rama Master**, porque puede generar defectos en el repositorio en las subidas a producción, que no contemplemos o que no preveamos, por lo que **siempre es mejor integrar código en otras ramas antes de integrar con las ramas Master y Develop**

Esta es una metodología estricta pero que da lugar a diferentes interpretaciones o diferentes formas de llevarla en cada equipo, por lo que en algunos casos, algún experto puede permitirse no seguir esa norma, pero son casos muy específicos y siempre de personas de confianza.

En las ramas auxiliares tenemos **la rama Feature**, **la rama Release** y **la Rama Hotfix**, que puede instanciarse todas las veces que se consideren necesarias:

-   **La rama Feature**, *para nuevas características, nuevos requisitos o nuevas historias de usuario.*
-   **La rama Release**, *para estandarizar o cortar una serie de código que ha estado desarrollándose en la rama Develop, se saca una rama de este tipo, se mergea y ahí se depura.*
-   **La rama Hotfix**, *que habitualmente se utiliza para código para depurar el código que venga de producción, por haberse detectado un defecto crítico en producción que deba resolverse, al que se le va a hacer una Release puntual para corregirlo.*

Estas ramas tienen un principio y un fin, ya que son ramas que se mergean con las ramas Master y Develop y desaparecen.

Podemos tener tantas ramas como queramos, tantos repositorios como queramos, lo más importante es saber cuando hacemos un merge, porque es posible que hayan archivos que rompan otros archivos, a esto se lo llama conflicto o bug.

Hoy a sido un poco de teoría, repaso de todo lo que les dió la profe Naty.
**Profesor Ariel Betancud**

---
---

## CLASE 6 MIÉRCOLES 8 DE MAYO DEL 2024

#### Volver en el tiempo en nuestro repositorio utilizando reset y checkout parte 6**

Ingresamos de la siguiente manera:
Abrir git bash en Window o la terminal de Linux o de Mac: al abrir Git Bash hacerlo como administrador, en terminal también o usar sudo para permisos especiales.

###### TAREA -> AGREGAR LOS COMENTARIOS EN LOS COMANDOS, PARA SABER QUE PASA CON CADA UNO.

**cd tecnicatura**

**cd class-git**

**ls**

**code .**

**git log** *Vemos los commit hechos hasta ahora*

Copiar el hash *El número largo que tiene el commit*

**git reset hash-nombre-commit** *Este nos permite volver a una versión anterior, hay 2 tipos de reset: el duro y el suave*

**git status**

**git add .**

**git commit -m "Agregamos datos de estudios en historia.txt"**

**git config --list** *Veremos la configuración que ya hemos hecho con en nombre y email*

**git reset hash-nombre-commit --hard** *Es el duro, todo vuelve a su estado anterior, es el más usado, desaparece todo*

**git reset hash-nombre-commit --soft** *Este es el suave, lo que tengamos en staging segirá allí*

**crear un archivo portafolio.html introducir el código**

**touch portafolio.html**

**html : 5** *Con esto se carga el código básico de html y modificamos*

**ctrl + s** *Guardamos*

Clic derecho en VSC **Open with Live Server** para ver en el navegador

**git status**

**ls**

**ls -al**

**git add .**

**git status**

**git commit -m "Agregamos el html para nuestro portafolio"**

**creamos CSS** *Este es un archivo de estilos, para esto creamos una nueva carpeta llamada css*

**mkdir css**

**ls**

**cd css**

**touch style.css** *creamos un archivo dentro: estilos.css le cargamos el código.*

**ctrl + s** *abrimos en el navegador y todo esta allí, pero todo esto supuestamente en git no existe.*

**git status** *tenemos cosas en el área de trabajo, en staging distintas*

**git diff + enter** *y nos muestra los cambios en memoria ram y en disco*

**git add .** *Agregamos todo al staging*

**git status** *Ya esta todo en memoria ram, a git solo le importan los archivos, guarda las carpetas como rutas y automaticamente las crea*

**git commit -m "Creamos el css para darle algo de estilo a nuestro portafolio"**

**git log** *vemos lo nuevo que hemos hecho sin lo que borramos con el reset fuerte*

**hacer cambios en historia.txt** *Cambiamos la última línea y*

**ctrl + s**

**git diff**

**git commit -am "cambio en la última línea del historia.txt"**

**git log**

**q** *Esto para salir*

**git log --stat** *veremos los cambios especificos que hicimos en cuales archivos por medio del commit y veremos los cambios en bits*

**q** *salimos de la línea de commits, ahora queremos ver como era originalmente el archivo, osea la primera versión, copiamos el nombre del primer commit*

**git checkout hash-nombre-commit historia.txt** *Veremos el archivo en su estado original*

**git status** *Nos sugiere hacer un commit, si lo hacemos borramos todo lo que hicimos antes, debemos seguir con el siguiente commando*

**git checkout master historia.txt** *Volvemos a la versión master del archivo historia.txt, esto es muy peligroso*

**git checkout hash-nombre-commit historia.txt** *Volvemos a hacer esto y cambiamos cosas del archivo*

**git commit -am "Reemplazo de una versión por otra de la historia"**

**git log** *Veremos los cambios sin tocar ningun otro archivo, esta es la forma de volver a una versión hacía atrás y llevarla a la cabeza de la master*

**cd ..**

**cd ..**

La tarea de hoy, agregar esta clase al README.md con el lenguaje de markdown, como lo hicimos en la clase pasada, luego deben hacer el commit correspondiente al cambio agregado.

Revisar y ejecutar cada comando, hacerlo como practica
**Profesor Ariel Betancud**

---
---
