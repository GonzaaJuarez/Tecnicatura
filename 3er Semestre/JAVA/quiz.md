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