// script.js

const cursos = [
  // Ejemplo (todos los cursos reales ya están integrados en tu versión completa):
  { codigo: "AC4012", nombre: "INGLÉS I", creditos: 3, ciclo: 1, requisitos: [] },
  { codigo: "EN7011", nombre: "PROCESOS BIOLÓGICOS", creditos: 6, ciclo: 1, requisitos: [] },
  // Continúa con todos los cursos...
];

let cursosAprobados = new Set();
let totalCreditos = 0;
const totalCreditosMaximos = cursos.reduce((sum, c) => sum + c.creditos, 0);

function crearCursoHTML(curso) {
  const div = document.createElement("div");
  div.classList.add("curso", "locked");
  div.id = curso.codigo;

  const nombre = document.createElement("strong");
  nombre.textContent = `${curso.codigo} - ${curso.nombre}`;
  div.appendChild(nombre);

  const creditos = document.createElement("div");
  creditos.textContent = `Créditos: ${curso.creditos}`;
  div.appendChild(creditos);

  const btn = document.createElement("button");
  btn.textContent = "Aprobar curso";
  btn.onclick = () => aprobarCurso(curso.codigo);
  div.appendChild(btn);

  return div;
}

function aprobarCurso(codigo) {
  if (cursosAprobados.has(codigo)) return;

  cursosAprobados.add(codigo);
  const curso = cursos.find(c => c.codigo === codigo);
  totalCreditos += curso.creditos;

  document.getElementById(codigo).classList.add("aprobado");
  document.getElementById(codigo).classList.remove("locked");
  actualizarProgreso();
  actualizarCursosDisponibles();
}

function actualizarCursosDisponibles() {
  cursos.forEach(curso => {
    const requisitosCumplidos = curso.requisitos.every(r => cursosAprobados.has(r));
    const elemento = document.getElementById(curso.codigo);
    if (requisitosCumplidos) {
      elemento.classList.remove("locked");
    } else {
      elemento.classList.add("locked");
    }
  });
}

function actualizarProgreso() {
  const progreso = document.getElementById("progreso");
  progreso.textContent = `Créditos aprobados: ${totalCreditos} / ${totalCreditosMaximos}`;
}

function renderizarMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const cicloDiv = document.createElement("div");
    cicloDiv.classList.add("ciclo");

    const titulo = document.createElement("h2");
    titulo.textContent = `Ciclo ${i}`;
    cicloDiv.appendChild(titulo);

    cursos
      .filter(c => c.ciclo === i)
      .forEach(curso => {
        const cursoDiv = crearCursoHTML(curso);
        cicloDiv.appendChild(cursoDiv);
      });

    container.appendChild(cicloDiv);
  }

  actualizarCursosDisponibles();
}

document.getElementById("busqueda").addEventListener("input", e => {
  const texto = e.target.value.toLowerCase();
  cursos.forEach(curso => {
    const div = document.getElementById(curso.codigo);
    const visible =
      curso.nombre.toLowerCase().includes(texto) ||
      curso.codigo.toLowerCase().includes(texto);
    div.style.display = visible ? "block" : "none";
  });
});

renderizarMalla();
