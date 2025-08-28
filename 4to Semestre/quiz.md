#  QUIZ de programación IV
## Quiz de hoy: Miércoles 20 de agosto del 2025

**1. Tienes varios labels que le indican al usuario qué está seleccionando con diferentes inputs de tipo radio. Pero al darle click a los labels, sus inputs correspondientes NO se seleccionan. ¿Cómo solucionarías este problema?**

- [ ] a. Asignando el mismo valor en el atributo id de los inputs y el atributo id de sus labels correspondientes.
- [x] b. Asignando el mismo valor en el atributo id de los inputs y el atributo for de sus labels correspondientes.
- [ ] c. Este comportamiento No se puede solucionar. Solo algunos navegadores (ej. Google Chrome) vinculan automáticamente a los labels con sus inputs, pero otros NO lo soportan (ej. Opera)

**2. ¿Qué etiqueta de HTML le permite a los usuarios escribir lo que ellos quieran?**

- [ ] a. text
- [ ] b. Ninguna. Toda etiqueta HTML y su contenido debe ser escrito por un programador, nunca por los usuarios.
- [ ] c. prompt
- [x] d. input
- [ ] e. user-custom

**3. ¿Qué significa maquetar una página web?**

- [ ] a. Es cuando agregamos JavaScript el frontend de una página web.
- [x] b. Escribir su estructura en HTML y CSS
- [ ] c. Es cuando conectamos el backend a una pagina web.
- [ ] d. Es un sinónimo de programar

**4. Tienes el siguiente  [código HTML](https://campus.frsr.utn.edu.ar/moodle/mod/page/view.php?id=62509 "CÓDIGO HTML"):**

`<button id="lanzar-ataque">¡Lanzar ataque!</button>`

**Necesitas ejecutar una alerta cada vez que los usuarios le den click a este botón.**
**¿Cómo lo harías?**

- [ ] a.  
```
let botonLanzarAtaque = document.getElementById('lanzar-ataque')
botonLanzarAtaque.click = alert('Mensaje de la alerta')
```

- [x] b. 
```
let botonLanzarAtaque = document.getElementById('lanzar-ataque')
function enviarAlerta(){
	alert('Mensaje de la alerta')
}
botonLanzarAtaque.addEventListener('click', enviarAlerta())
```

- [ ] c. 
```
let botonLanzarAtaque = document.getElementById('lanzar-ataque')
botonLanzarAtaque.addEventListener('click', alert('Mensaje de la alerta'))
```
- [ ] d.

`let botonLanzarAtaque.click.addEventListener = alert('Mensaje de la alerta')`

## Quiz de hoy: Miércoles 27 de agosto del 2025

**1. Tienes el siguiente  [código HTML](https://campus.frsr.utn.edu.ar/moodle/mod/page/view.php?id=62509 "CÓDIGO HTML"):**
```
<button id="boton-punio">Punio</button>
<button id="boton-patada">Patada</button>
<button id="boton-barrida">Barrida</button>
```
**¿Cómo cambiamos el color del texto únicamente del botón de Punio?** 

- [x] a. `#boton-punio { color: red;}`
- [ ] b. `#boton-punio { background-color: red; }`
- [ ] c. `.boton-punio { color: red; }`
- [ ] d. `.boton-punio { background-color: red; }`

**2.Tenemos un elemento `<p>` con un width de 100px, un height de 100px y un padding de 20px.¿Qué propiedad y valor de CSS podemos añadirle a nuestro`<p>`para que el padding NO modifique el tamaño de 100px de ancho y 100px de alto de este elemento**
- [ ] a. `box-sizing: content-box;`
- [ ] b. `border-radius: 20px;`
- [ ] c. `margin: 20px;`
- [x] d. `box-sizing: border-box;`
- [ ] e. ninguna de las respuestas

**3. Quieres sobrescribir todo el contenido HTML de un elemento sectionMensajes por un nuevo texto almacenado en la variable notificación. ¿Cómo lo harías?**
- [ ] a. `sectionMensajes.appendChild(notificacion)`
- [x] b. `sectionMensajes.innerHTML = notificacion`
- [ ] c. Ninguna de las respuestas

**4. ¿Qué propiedad y valor de CSS podemos utilizar para esconder secciones de HTML?**
- [ ] a. `box-visibility: block;`
- [ ] b. `display: block;`
- [ ] c. `box-sizing: content-box;`
- [x] d. `display: none;`
- [ ] e. `box-visibility: none;`
