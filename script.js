const cursos = [
  // 1er CICLO - Año 1
  { codigo: "EN1101", nombre: "INTRODUCCIÓN A LA ENFERMERÍA", creditos: 4, prerrequisitos: [], año: 1, ciclo: 1 },
  { codigo: "EN1102", nombre: "CIENCIAS BÁSICAS I", creditos: 4, prerrequisitos: [], año: 1, ciclo: 1 },
  { codigo: "EN1103", nombre: "SALUD PÚBLICA Y SOCIEDAD", creditos: 3, prerrequisitos: [], año: 1, ciclo: 1 },
  { codigo: "EN1104", nombre: "HABILIDADES COMUNICACIONALES", creditos: 2, prerrequisitos: [], año: 1, ciclo: 1 },

  // 2do CICLO - Año 1
  { codigo: "EN1201", nombre: "CUIDADOS BÁSICOS DE ENFERMERÍA", creditos: 4, prerrequisitos: ["EN1101"], año: 1, ciclo: 2 },
  { codigo: "EN1202", nombre: "CIENCIAS BÁSICAS II", creditos: 4, prerrequisitos: ["EN1102"], año: 1, ciclo: 2 },
  { codigo: "EN1203", nombre: "PROCESOS VITALES", creditos: 3, prerrequisitos: [], año: 1, ciclo: 2 },
  { codigo: "EN1204", nombre: "PSICOLOGÍA EN SALUD", creditos: 2, prerrequisitos: [], año: 1, ciclo: 2 },

  // 3er CICLO - Año 2
  { codigo: "EN2101", nombre: "FUNDAMENTOS DEL CUIDADO", creditos: 5, prerrequisitos: ["EN1201"], año: 2, ciclo: 3 },
  { codigo: "EN2102", nombre: "FISIOPATOLOGÍA", creditos: 3, prerrequisitos: ["EN1202"], año: 2, ciclo: 3 },
  { codigo: "EN2103", nombre: "FARMACOLOGÍA", creditos: 3, prerrequisitos: ["EN1202"], año: 2, ciclo: 3 },
  { codigo: "EN2104", nombre: "ÉTICA Y DEONTOLOGÍA", creditos: 2, prerrequisitos: [], año: 2, ciclo: 3 },

  // 4to CICLO - Año 2
  { codigo: "EN2201", nombre: "ENFERMERÍA DEL ADULTO I", creditos: 5, prerrequisitos: ["EN2101"], año: 2, ciclo: 4 },
  { codigo: "EN2202", nombre: "ENFERMERÍA COMUNITARIA I", creditos: 4, prerrequisitos: ["EN2101"], año: 2, ciclo: 4 },
  { codigo: "EN2203", nombre: "BIOESTADÍSTICA", creditos: 2, prerrequisitos: [], año: 2, ciclo: 4 },
  { codigo: "EN2204", nombre: "SOCIOLOGÍA DE LA SALUD", creditos: 2, prerrequisitos: [], año: 2, ciclo: 4 },

  // 5to CICLO - Año 3
  { codigo: "EN3101", nombre: "ENFERMERÍA DEL ADULTO II", creditos: 5, prerrequisitos: ["EN2201"], año: 3, ciclo: 5 },
  { codigo: "EN3102", nombre: "ENFERMERÍA COMUNITARIA II", creditos: 4, prerrequisitos: ["EN2202"], año: 3, ciclo: 5 },
  { codigo: "EN3103", nombre: "INVESTIGACIÓN EN SALUD I", creditos: 3, prerrequisitos: ["EN2203"], año: 3, ciclo: 5 },
  { codigo: "EN3104", nombre: "ADMINISTRACIÓN EN SALUD", creditos: 2, prerrequisitos: [], año: 3, ciclo: 5 },
  { codigo: "ELC01", nombre: "ELECTIVO I", creditos: 3, prerrequisitos: [], año: 3, ciclo: 5 },

  // 6to CICLO - Año 3
  { codigo: "EN3201", nombre: "ENFERMERÍA MATERNA", creditos: 5, prerrequisitos: ["EN3101"], año: 3, ciclo: 6 },
  { codigo: "EN3202", nombre: "ENFERMERÍA PEDIÁTRICA", creditos: 4, prerrequisitos: ["EN3101"], año: 3, ciclo: 6 },
  { codigo: "EN3203", nombre: "INVESTIGACIÓN EN SALUD II", creditos: 3, prerrequisitos: ["EN3103"], año: 3, ciclo: 6 },
  { codigo: "EN3204", nombre: "GERONTOLOGÍA", creditos: 3, prerrequisitos: [], año: 3, ciclo: 6 },

  // 7mo CICLO - Año 4
  { codigo: "EN4101", nombre: "CUIDADOS CRÍTICOS", creditos: 5, prerrequisitos: ["EN3201"], año: 4, ciclo: 7 },
  { codigo: "EN4102", nombre: "ENFERMERÍA PSIQUIÁTRICA", creditos: 4, prerrequisitos: ["EN3202"], año: 4, ciclo: 7 },
  { codigo: "EN4103", nombre: "GESTIÓN EN ENFERMERÍA", creditos: 3, prerrequisitos: ["EN3104"], año: 4, ciclo: 7 },
  { codigo: "EN4104", nombre: "SALUD OCUPACIONAL", creditos: 2, prerrequisitos: [], año: 4, ciclo: 7 },
  { codigo: "ELC02", nombre: "ELECTIVO II", creditos: 3, prerrequisitos: [], año: 4, ciclo: 7 },

  // 8vo CICLO - Año 4
  { codigo: "EN4201", nombre: "PRÁCTICAS PRE-PROFESIONALES I", creditos: 14, prerrequisitos: ["EN4101", "EN4102"], año: 4, ciclo: 8 },
  { codigo: "EN4202", nombre: "SEMINARIOS DE INTEGRACIÓN CLÍNICA I", creditos: 1, prerrequisitos: ["EN4101", "EN4102"], año: 4, ciclo: 8 },
  { codigo: "EN4203", nombre: "ÉTICA PROFESIONAL", creditos: 2, prerrequisitos: [], año: 4, ciclo: 8 },

  // 9no CICLO - Año 5
  { codigo: "EN7091", nombre: "PRÁCTICAS AVANZADAS I", creditos: 14, prerrequisitos: ["EN4201"], año: 5, ciclo: 9 },
  { codigo: "EN7092", nombre: "SEMINARIOS DE GESTIÓN CLÍNICA I", creditos: 1, prerrequisitos: ["EN4202"], año: 5, ciclo: 9 },
  { codigo: "EN7093", nombre: "PROYECTO DE INVESTIGACIÓN", creditos: 3, prerrequisitos: ["EN3203"], año: 5, ciclo: 9 },
  { codigo: "ELC03", nombre: "ELECTIVO III", creditos: 3, prerrequisitos: [], año: 5, ciclo: 9 },

  // 10mo CICLO - Año 5
  { codigo: "EN7101", nombre: "PRÁCTICAS PRE-PROFESIONALES II", creditos: 14, prerrequisitos: ["EN7091"], año: 5, ciclo: 10 },
  { codigo: "EN7102", nombre: "SEMINARIOS DE INTEGRACIÓN CLÍNICA II", creditos: 1, prerrequisitos: ["EN7092"], año: 5, ciclo: 10 },
  { codigo: "EN7103", nombre: "TRABAJO DE INVESTIGACIÓN", creditos: 3, prerrequisitos: ["EN7093"], año: 5, ciclo: 10 },

  // Cursos electivos generales (para selección en ELC01, ELC02 y ELC03)
  { codigo: "AC4E01", nombre: "EDUCACIÓN, DERECHOS Y AUTONOMÍA DE LAS PERSONAS CON DISCAPACIDAD", creditos: 2, prerrequisitos: [], año: 3, ciclo: 5 },
  { codigo: "LC5E01", nombre: "SALUD AMBIENTAL Y URBANA", creditos: 3, prerrequisitos: [], año: 3, ciclo: 5 },
  { codigo: "MH3E01", nombre: "DETERMINANTES SOCIALES DE SALUD Y CONDUCTAS DE SALUD", creditos: 3, prerrequisitos: [], año: 3, ciclo: 5 },
  { codigo: "MH3E02", nombre: "ANTROPOLOGÍA MÉDICA: CULTURA Y SALUD", creditos: 3, prerrequisitos: [], año: 3, ciclo: 5 },
  { codigo: "ND4E01", nombre: "LA DIETA OCCIDENTAL", creditos: 3, prerrequisitos: [], año: 3, ciclo: 5 },
  { codigo: "OD5E01", nombre: "MÉTODOS DE INVESTIGACIÓN PARA PROFESIONALES DE SALUD", creditos: 3, prerrequisitos: [], año: 3, ciclo: 5 },
  { codigo: "PS4E01", nombre: "MANEJO DEL ESTRÉS PARA EL BIENESTAR", creditos: 3, prerrequisitos: [], año: 3, ciclo: 5 },
  { codigo: "PS4E02", nombre: "FUNDAMENTOS DEL BIENESTAR", creditos: 3, prerrequisitos: [], año: 3, ciclo: 5 },
  { codigo: "TF5E01", nombre: "IMPACTO DE LA ACTIVIDAD FÍSICA EN LA SALUD Y EL BIENESTAR", creditos: 3, prerrequisitos: [], año: 3, ciclo: 5 }
];
// Función para agrupar cursos por año y ciclo
const cursosPorCiclo = {};
cursos.forEach(curso => {
  const key = `Año ${curso.año} - Ciclo ${curso.ciclo}`;
  if (!cursosPorCiclo[key]) cursosPorCiclo[key] = [];
  cursosPorCiclo[key].push(curso);
});

// Obtener cursos aprobados del localStorage
let cursosAprobados = JSON.parse(localStorage.getItem("cursosAprobados")) || [];
let electivosSeleccionados = JSON.parse(localStorage.getItem("electivosSeleccionados")) || {};

// Función para renderizar la malla curricular
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-malla");
  contenedor.innerHTML = "";

  Object.keys(cursosPorCiclo).forEach(grupo => {
    const wrapper = document.createElement("div");
    wrapper.className = "ciclo-bloque";
    const titulo = document.createElement("h3");
    titulo.textContent = grupo;
    wrapper.appendChild(titulo);

    cursosPorCiclo[grupo].forEach(curso => {
      const cursoDiv = document.createElement("div");
      cursoDiv.className = "curso";
      cursoDiv.dataset.codigo = curso.codigo;
      if (cursosAprobados.includes(curso.codigo)) cursoDiv.classList.add("aprobado");

      const nombre = document.createElement("span");
      nombre.textContent = `${curso.codigo} - ${curso.nombre}`;
      cursoDiv.appendChild(nombre);

      // Si es un curso electivo
      if (curso.codigo.startsWith("ELC")) {
        const select = document.createElement("select");
        select.innerHTML = `<option value="">Selecciona un electivo</option>`;
        cursos.filter(c => c.codigo.startsWith("AC") || c.codigo.startsWith("LC") || c.codigo.startsWith("MH") || c.codigo.startsWith("ND") || c.codigo.startsWith("OD") || c.codigo.startsWith("PS") || c.codigo.startsWith("TF"))
          .forEach(opcion => {
            const option = document.createElement("option");
            option.value = opcion.codigo;
            option.textContent = `${opcion.codigo} - ${opcion.nombre}`;
            if (electivosSeleccionados[curso.codigo] === opcion.codigo) option.selected = true;
            select.appendChild(option);
          });

        select.addEventListener("change", () => {
          electivosSeleccionados[curso.codigo] = select.value;
          localStorage.setItem("electivosSeleccionados", JSON.stringify(electivosSeleccionados));
        });

        cursoDiv.appendChild(select);
      }

      cursoDiv.addEventListener("click", () => {
        if (!puedeAprobarCurso(curso)) {
          alert("Primero debes aprobar todos los prerrequisitos");
          return;
        }

        cursoDiv.classList.toggle("aprobado");
        const index = cursosAprobados.indexOf(curso.codigo);
        if (index >= 0) cursosAprobados.splice(index, 1);
        else cursosAprobados.push(curso.codigo);

        localStorage.setItem("cursosAprobados", JSON.stringify(cursosAprobados));
        actualizarCreditos();
      });

      wrapper.appendChild(cursoDiv);
    });

    contenedor.appendChild(wrapper);
  });

  actualizarCreditos();
});

function puedeAprobarCurso(curso) {
  return curso.prerrequisitos.every(pre => cursosAprobados.includes(pre));
}

function actualizarCreditos() {
  let total = 0;
  cursos.forEach(curso => {
    if (cursosAprobados.includes(curso.codigo)) {
      total += curso.creditos;
    }
  });
  document.getElementById("contador-creditos").textContent = `Créditos aprobados: ${total}`;
}

// Botón para resetear progreso
document.getElementById("resetear-progreso").addEventListener("click", () => {
  if (confirm("¿Estás seguro de que deseas borrar tu progreso?")) {
    localStorage.removeItem("cursosAprobados");
    localStorage.removeItem("electivosSeleccionados");
    location.reload();
  }
});
