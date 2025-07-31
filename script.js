// script.js

const cursosAprobados = new Set(JSON.parse(localStorage.getItem("cursosAprobados") || "[]"));

const cursos = [
  // Año 1 - Ciclo 1
  { codigo: "AC4012", nombre: "INGLÉS I", creditos: 3, prerrequisitos: [], ciclo: 1 },
  { codigo: "EN7011", nombre: "PROCESOS BIOLÓGICOS", creditos: 6, prerrequisitos: [], ciclo: 1 },
  { codigo: "EN7012", nombre: "PRÁCTICAS DE ENFERMERÍA", creditos: 5, prerrequisitos: [], ciclo: 1 },
  { codigo: "AC4011", nombre: "DESARROLLO HUMANO Y SOCIAL", creditos: 4, prerrequisitos: [], ciclo: 1 },
  { codigo: "TF5012", nombre: "ESTRUCTURA Y FUNCIÓN DEL CUERPO HUMANO", creditos: 4, prerrequisitos: [], ciclo: 1 },
  
  // Año 1 - Ciclo 2
  { codigo: "EN7013", nombre: "CUIDADO BÁSICO", creditos: 6, prerrequisitos: ["EN7012"], ciclo: 2 },
  { codigo: "EN7014", nombre: "ÉTICA Y LEGISLACIÓN", creditos: 3, prerrequisitos: [], ciclo: 2 },
  { codigo: "TF5013", nombre: "PATOLOGÍA GENERAL", creditos: 4, prerrequisitos: ["TF5012"], ciclo: 2 },
  { codigo: "TF5014", nombre: "FARMACOLOGÍA GENERAL", creditos: 4, prerrequisitos: [], ciclo: 2 },
  { codigo: "AC4013", nombre: "REALIDAD NACIONAL", creditos: 2, prerrequisitos: [], ciclo: 2 },

  // Año 2 - Ciclo 3
  { codigo: "EN7015", nombre: "CUIDADO DEL ADULTO I", creditos: 5, prerrequisitos: ["EN7013"], ciclo: 3 },
  { codigo: "EN7016", nombre: "SALUD PÚBLICA", creditos: 3, prerrequisitos: [], ciclo: 3 },
  { codigo: "TF5015", nombre: "MICROBIOLOGÍA Y PARASITOLOGÍA", creditos: 3, prerrequisitos: [], ciclo: 3 },
  { codigo: "AC4014", nombre: "INGLÉS II", creditos: 3, prerrequisitos: ["AC4012"], ciclo: 3 },
  { codigo: "TF5016", nombre: "NUTRICIÓN Y DIETÉTICA", creditos: 2, prerrequisitos: [], ciclo: 3 },

  // Año 2 - Ciclo 4
  { codigo: "EN7017", nombre: "CUIDADO DEL ADULTO II", creditos: 5, prerrequisitos: ["EN7015"], ciclo: 4 },
  { codigo: "EN7018", nombre: "EPIDEMIOLOGÍA", creditos: 3, prerrequisitos: [], ciclo: 4 },
  { codigo: "TF5017", nombre: "BIOESTADÍSTICA", creditos: 2, prerrequisitos: [], ciclo: 4 },
  { codigo: "TF5018", nombre: "INMUNOLOGÍA", creditos: 2, prerrequisitos: [], ciclo: 4 },
  { codigo: "AC4015", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN", creditos: 2, prerrequisitos: [], ciclo: 4 },

  // Año 3 - Ciclo 5
  { codigo: "EN7019", nombre: "CUIDADO MATERNO PERINATAL", creditos: 6, prerrequisitos: ["EN7017"], ciclo: 5 },
  { codigo: "EN7020", nombre: "CUIDADO EN PEDIATRÍA", creditos: 5, prerrequisitos: ["EN7017"], ciclo: 5 },
  { codigo: "EN7021", nombre: "CUIDADO EN SALUD MENTAL", creditos: 4, prerrequisitos: [], ciclo: 5 },
  { codigo: "TF5019", nombre: "SALUD AMBIENTAL", creditos: 2, prerrequisitos: [], ciclo: 5 },
  { codigo: "AC4016", nombre: "INGLÉS III", creditos: 3, prerrequisitos: ["AC4014"], ciclo: 5 },

  // Año 3 - Ciclo 6
  { codigo: "EN7022", nombre: "GERONTOLOGÍA", creditos: 4, prerrequisitos: [], ciclo: 6 },
  { codigo: "EN7023", nombre: "PRÁCTICA EN SALUD FAMILIAR Y COMUNITARIA", creditos: 5, prerrequisitos: ["EN7016"], ciclo: 6 },
  { codigo: "EN7024", nombre: "GESTIÓN EN SALUD", creditos: 3, prerrequisitos: [], ciclo: 6 },
  { codigo: "TF5020", nombre: "EVALUACIÓN DE LA INVESTIGACIÓN", creditos: 3, prerrequisitos: ["AC4015"], ciclo: 6 },
  { codigo: "AC4017", nombre: "INGLÉS IV", creditos: 3, prerrequisitos: ["AC4016"], ciclo: 6 },

  // Año 4 - Ciclo 7
  { codigo: "EN7025", nombre: "PRÁCTICA EN PEDIATRÍA", creditos: 6, prerrequisitos: ["EN7020"], ciclo: 7 },
  { codigo: "EN7026", nombre: "PRÁCTICA EN SALUD MENTAL", creditos: 5, prerrequisitos: ["EN7021"], ciclo: 7 },
  { codigo: "EN7027", nombre: "PRÁCTICA MATERNO PERINATAL", creditos: 6, prerrequisitos: ["EN7019"], ciclo: 7 },

  // Año 4 - Ciclo 8
  { codigo: "EN7028", nombre: "PRÁCTICA EN ADULTO Y ADULTO MAYOR", creditos: 8, prerrequisitos: ["EN7017"], ciclo: 8 },
  { codigo: "EN7029", nombre: "PRÁCTICA EN SALUD FAMILIAR Y COMUNITARIA II", creditos: 5, prerrequisitos: ["EN7023"], ciclo: 8 },

  // Año 5 - Ciclo 9
  { codigo: "EN7030", nombre: "ÉTICA PROFESIONAL Y DEONTOLOGÍA", creditos: 2, prerrequisitos: ["EN7024"], ciclo: 9 },
  { codigo: "EN7031", nombre: "GERENCIA Y LIDERAZGO EN ENFERMERÍA", creditos: 3, prerrequisitos: ["EN7024"], ciclo: 9 },

  // Año 5 - Ciclo 10
  { codigo: "EN7032", nombre: "INTEGRACIÓN Y TITULACIÓN", creditos: 10, prerrequisitos: ["EN7025", "EN7026", "EN7027", "EN7028", "EN7029"], ciclo: 10 }
];

function prerrequisitosAprobados(curso) {
  const faltantes = curso.prerrequisitos.filter(pr => !cursosAprobados.has(pr));
  return {
    cumplidos: faltantes.length === 0,
    faltantes
  };
}

function toggleCursoAprobado(codigo) {
  if (cursosAprobados.has(codigo)) {
    cursosAprobados.delete(codigo);
  } else {
    cursosAprobados.add(codigo);
  }
  renderizarMalla();
  actualizarContadorCreditos();
  guardarProgreso();
}

function actualizarContadorCreditos() {
  const total = Array.from(cursosAprobados).reduce((sum, codigo) => {
    const curso = cursos.find(c => c.codigo === codigo);
    return sum + (curso ? curso.creditos : 0);
  }, 0);
  const contador = document.getElementById("contador-creditos");
  if (contador) {
    contador.textContent = `Créditos aprobados: ${total}`;
  }
}

function guardarProgreso() {
  localStorage.setItem("cursosAprobados", JSON.stringify(Array.from(cursosAprobados)));
}

function toggleModo() {
  document.body.classList.toggle("modo-oscuro");
}

function renderizarMalla() {
  const contenedor = document.getElementById("contenedor-malla");
  contenedor.innerHTML = "";

  const maxCiclo = Math.max(...cursos.map(c => c.ciclo));
  for (let ciclo = 1; ciclo <= maxCiclo; ciclo++) {
    const year = Math.ceil(ciclo / 2);
    if (ciclo % 2 === 1) {
      const titulo = document.createElement("h2");
      titulo.textContent = `Año ${year}`;
      contenedor.appendChild(titulo);
    }

    const divCiclo = document.createElement("div");
    divCiclo.classList.add("ciclo");
    divCiclo.innerHTML = `<h3>Ciclo ${ciclo}</h3>`;

    const cursosDelCiclo = cursos.filter(c => c.ciclo === ciclo);
    cursosDelCiclo.forEach(curso => {
      const divCurso = document.createElement("div");
      divCurso.classList.add("curso");
      divCurso.setAttribute("data-codigo", curso.codigo);

      const estadoPr = prerrequisitosAprobados(curso);

      if (!estadoPr.cumplidos) {
        divCurso.classList.add("bloqueado");
        divCurso.title = `Faltan: ${estadoPr.faltantes.join(", ")}`;
      } else {
        divCurso.classList.add("desbloqueado");
      }

      if (cursosAprobados.has(curso.codigo)) {
        divCurso.classList.add("aprobado");
      }

      divCurso.innerHTML = `
        <strong>${curso.codigo}</strong><br>
        ${curso.nombre}<br>
        Créditos: ${curso.creditos}
      `;

      divCurso.addEventListener("click", () => toggleCursoAprobado(curso.codigo));

      divCiclo.appendChild(divCurso);
    });

    contenedor.appendChild(divCiclo);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarMalla();
  actualizarContadorCreditos();

  const botonModo = document.getElementById("toggle-modo");
  if (botonModo) {
    botonModo.addEventListener("click", toggleModo);
  }
});
