const towers = {
  A: document.getElementById("A"),
  B: document.getElementById("B"),
  C: document.getElementById("C")
};

let disks = [];
let numberOfDisks = 3; // Valor predeterminado

const numDisksInput = document.getElementById("numDisks");
const numDisksValueOutput = document.getElementById("numDisksValue"); // Nuevo elemento para el valor


function createDisk(size) { // Cambiamos 'className' a 'size' para ser más descriptivos
  const div = document.createElement("div");
  div.className = `disk disk${size}`; // Usamos el tamaño para la clase CSS
  return div;
}

function setup() {
  // Obtener la cantidad de discos del input
  numberOfDisks = parseInt(numDisksInput.value);
  numDisksValueOutput.value = numberOfDisks; // Actualizar el valor mostrado
  if (isNaN(numberOfDisks) || numberOfDisks < 3) { // Validar que sea un número válido
    numberOfDisks = 3; // Revertir al valor predeterminado si es inválido
    numDisksInput.value = 3;
  }

  disks = []; // Vaciar el array de discos
  for (let i = numberOfDisks; i >= 1; i--) { // Crear discos dinámicamente
    disks.push(createDisk(i));
  }

  Object.values(towers).forEach(tower => tower.innerHTML = ""); // Limpiar torres
  disks.forEach(disk => towers.A.appendChild(disk)); // Añadir discos a la torre A
}

async function moveDisk(from, to) {
  return new Promise(resolve => {
    setTimeout(() => {
      const disk = towers[from].lastElementChild;
      if (disk) {
        // Asegúrate de que el disco conserve su clase de tamaño para el estilo
        const sizeClass = Array.from(disk.classList).find(cls => cls.startsWith('disk'));
        disk.classList.remove(sizeClass);
        void disk.offsetWidth; // Forzar reflow del DOM
        disk.classList.add(sizeClass);
        towers[to].appendChild(disk);
      }
      resolve();
    }, 600);
  });
}

async function hanoi(n, from, to, aux) {
  if (n === 1) {
    await moveDisk(from, to);
  } else {
    await hanoi(n - 1, from, aux, to);
    await moveDisk(from, to);
    await hanoi(n - 1, aux, to, from);
  }
}

async function startHanoi() {
  setup(); // Llama a setup para configurar los discos según el input
  await hanoi(numberOfDisks, "A", "C", "B"); // Usa numberOfDisks
}

function reset() {
  setup(); // Reinicia la configuración
}

document.addEventListener('DOMContentLoaded', () => {
    setup();
    numDisksInput.addEventListener('input', setup); // Usar 'input' en lugar de 'change' para actualización en tiempo real
});