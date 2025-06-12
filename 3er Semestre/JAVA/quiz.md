# QUIZ JAVA

## Quiz de hoy: Miércoles 23 de abril del 2025

**1. Analiza el siguiente bloque de código:**

```
saludo = "Hola"
profesor = "Profe"
alert(saludo+profesor)
```
    

Nos da como resultado el mensaje de: `HolaProfe`.

**¿Por qué sale todo pegado? ¿Cómo arreglarías el código para obtener el resultado correcto?**

- [ ] a. Porque la función alert por defecto elimina los espacios cuando hacemos suma (concatenación) entre textos (Strings). La forma de resolverlo sería crear una variable donde guardemos el mensaje y luego sí enviar esa variable a la función alert.
	```
	mensaje = saludos + profesor
	alert(mensaje)
	```

- [x]  b. Porque en nuestro código nunca especificamos que deberíamos insertar un espacio entre la suma (concatenación) de ambas variables. La forma de resolverlo sería agregar el espacio manualmente.
	```
	alert(saludos +" "+ profesor)
	```

**2. Analiza el siguiente bloque de código:**

```
a = 10
b = 20
alert("La suma de 10 + 20 es: " + a + b)
```
    
Nos da como resultado el mensaje: `La suma de 10 + 20 es: 1020`.

**¿Por qué ocurre esto? ¿Cómo arreglarías el código para obtener el resultado correcto?**

- [x]  a. Porque primero estamos concatenando un texto (String) con un número y esta operación nos da como resultado otro texto con el número al final. Luego repetimos esta operación con el siguiente número y obtenemos el texto con los números al final. Para obtener el resultado correcto, debemos encapsular la suma de números entre paréntesis y luego sí concatenar este resultado con el texto del mensaje.
	```
	a = 10
	b = 20
	alert("La suma de 10 + 20 es: " + (a + b))
	```

- [ ]  b. Porque la función alert solo soporta textos (Strings), nunca números, siempre convierte todos nuestros números a texto y por eso la operación falla. Para obtener el resultado correcto debemos guardar el mensaje en una variable y luego sí, enviarla a la función alert que imprima en texto el mensaje con la operación exitosa.
	```
	a = 10
	b = 20
	mensaje = "La suma de 10 + 20 es: " + a + b
	alert(mensaje)
	```

 - [ ]  c. Porque los lenguajes de programación convierten a texto (String) todo lo que escribimos por fuera de las comillas, incluso cuando son números y operaciones matemáticas entre ellos. Para obtener el resultado correcto, debemos encapsular la operación de suma dentro de los Strings.
	```
	a = 10
	b = 20
	alert("La suma de 10 + 20 es: + a + b")
	```

**3. ¿Qué hace el siguiente bloque de código?**

`Math.random()`

 - [x]  a. Devuelve un número aleatorio entre 0 y 1
- [ ]  b. No devuelve nada porque lo estamos ejecutando mal. Debemos enviarle como argumento el rango de números entre los que puede sacar uno aleatorio: `Math.random(1,3)`
- [ ]  c. Devuelve un número aleatorio entre 10000 y 10000
- [ ]  d. Devuelve un número aleatorio entre infinito e infinito

## Quiz de hoy: Miércoles 14 de mayo del 2025

**1. Analizar la siguiente formula para obtener un número aleatorio en un rango del 1 al 3 y elige cuál es correcta:**

- [ ] a. 
	```
	Math.random()
	```
- [ ] b. 
	```
	 Math.floor(Math.random)
	 ```
- [ ] c. 
     ```
    function aleatorio(min, max){  
	    return Math.floor(Math.random())  
    }
    ```
- [x] d.  
	```
    let max = 3
    let min = 1
    function aleatorio(min, max){
	    return Math.floor( Math.random() * (max - min +1) + min)
    }
	```
- [ ] e. Ninguna de las respuestas
  
**2. Cuál es un código que se pueda utilizar para un botón Reiniciar en html:**  
- [x] a. 
	```
	<a href="JavaScript:document.location.reload();">Reiniciar</a>
	```
- [ ] b.
	```
	<script>boton>/script>
	```
- [ ] c. 
	```
	<button onclick="document.location.reload();">
			reset
	```
- [ ] d. 
	```
	<input type="button" value="Reiniciar" onclick="ducment.location.reload">
	```
- [ ] e. Todas las respuestas  
  
**3. Elige cuál es el uso correcto del utf-8 en html:**
- [ ] a. Acepta todo tipo de comillas simples.  
- [ ] b. Acepta tildes  
- [ ] c. Acepta acentos  
- [ ] d. Acepta caracteres especiales  
- [x] e. Todas las respuestas

## Quiz de hoy: Miércoles 28 de mayo del 2025

**1.Selecciona cuál de las opciones es una etiqueta estática que NO cambia en HTML:**

- [ ] a. 
	```
		<title>Tu Gran sitio Web</title>
	</head>
	<body>
		<h1>Ideas web</h1>
		<section id="seleccionar-producto">
			<h2>Elige tus productos</h2>
	```
- [ ] b. 
	```
	<section id="seleccionar-comprar">
		<h2>Ir a pagar</h2>
		<p>Tu compra tiene <span>3</span> productos</p>
	```
- [x] c. Todas las respuestas
- [ ] d. Ninguna de las respuestas
- [ ] e. Esto planteado NO sucede nunca en HTML

**2. ¿Qué debemos recordar cuando creamos un botón en HTML para asociarlo en JS a la hora de utilizar este botón?**

- [ ] a. La línea de código donde esta creado el botón en HTML
- [ ] b. Todas las respuestas
- [x] c. El id que ponemos en HTML, para luego en Js utilizar el mismo nombre
- [ ] d. Ninguna de las respuestas
- [ ] e. No hay nada que recordar, solo hay que empezar a trabajar con JS y listo

**3. ¿Dónde debemos ubicar el script que referencia el archivo Js?**

- [ ] a. Va al comienzo del body
- [ ] b. Se abre una etiqueta script y se pone todo allí
- [ ] c. NO hace falta poner un script para tal archivo
- [ ] d. Todas las respuestas
- [x] e. La respuesta No esta en las opciones: Si es así escribe tu respuesta...

>respuesta: generalmente se coloca dentro de una etiqueta script al final del body. 

## Quiz de hoy: Miércoles 4 de junio del 2025

**1. ¿Cuál es el significado de la palabra checked?**
- [ ] a. Su significado es chequeado
- [ ] b. Su significado NO es importante
- [ ] c. Ninguna de las respuestas
- [x] d. Su significado es seleccionado
- [ ] e. No se sabe porque viene del inglés

**2. En el juego de La leyenda de Aang: El Avatar ¿Para que utilizamos la función de `innerHTML`?**
- [ ] a. La utilizamos para mostrar resultados numéricos
- [ ] b. La utilizamos para mostrar objetos de Python
- [ ] c. Es una propiedad de Java
- [x] d. La utilizamos en Js para mostrar un String
- [ ] e. Todas las respuestas

**3. ¿Esta recomendado dentro de las buenas prácticas introducir `document.getElementById('katara').checked` dentro de una estructura if else y que sea la condición que gatille una elección?**
- [ ] a. Si totalmente recomendable
- [ ] b. Es una buena opción
- [ ] c. Todas las respuestas
- [x] d. Como buenas prácticas se recomienda crear variables a las que se le asigne este código y que NO vayan a ningún condicional de esta forma.
- [ ] e. Como buenas prácticas se aconseja que siempre se debe aprovechar líneas de código y esto hace que eso resulte.

## Quiz de hoy: Miércoles 11 de junio del 2025

**1. ¿Cuántas veces se puede utilizar la función de nuestro juego aleatorio()?**
- [ ] a. Se puede utilizar solo 2 o 3 veces No más.
- [ ] b. Se puede utilizar con algunos límites
- [x] c. Se puede utilizar siempre, las veces necesarias.
- [ ] d. Se puede crear y utilizar solo una vez.
- [ ] e. Ninguna de las respuestas.

**2. Cuando necesitamos probar nuestro código, ¿Cómo podemos ir viendo o haciendo prueba error?**

- [ ] a. Dentro de las buenas prácticas sería bueno abrir el navegador y trabajar desde la consola.
- [x] b. Dentro de las buenas prácticas utilizar el Quokka en VSC
- [ ] c. Dentro de las buenas prácticas revisando el código paso a paso y línea por línea
- [ ] d. Dentro de las buenas prácticas se utiliza un ojo clínico y muy analítico
- [ ] e. Ninguna de las respuestas.

  

**3. Las variables creadas en las funciones tienen la capacidad de ser utilizadas en todo el código libremente:**

- [ ] a. Totalmente, es algo que todo programador debería saber.
- [x] b. De ninguna manera, esto es una locura, ya que las únicas variables que pueden hacer esto son las globales.
- [ ] c. Este tema es muy amplio ya que en algunas ocasiones puede suceder algo parecido
- [ ] d. Todas las respuestas.
- [ ] e. Ninguna de las respuestas