const cursos = [
  // 1er CICLO - Año 1
  { codigo: "EN1101", nombre: "INTRODUCCIÓN A LA ENFERMERÍA", creditos: 3, prerrequisitos: [], año: 1, ciclo: 1 },
  { codigo: "EN1102", nombre: "ANATOMÍA Y FISIOLOGÍA I", creditos: 4, prerrequisitos: [], año: 1, ciclo: 1 },
  { codigo: "EN1103", nombre: "BIOQUÍMICA", creditos: 3, prerrequisitos: [], año: 1, ciclo: 1 },
  { codigo: "EN1104", nombre: "FUNDAMENTOS DE SALUD PÚBLICA", creditos: 3, prerrequisitos: [], año: 1, ciclo: 1 },

  // 2do CICLO - Año 1
  { codigo: "EN1201", nombre: "ANATOMÍA Y FISIOLOGÍA II", creditos: 4, prerrequisitos: ["EN1102"], año: 1, ciclo: 2 },
  { codigo: "EN1202", nombre: "MICROBIOLOGÍA Y PARASITOLOGÍA", creditos: 3, prerrequisitos: ["EN1103"], año: 1, ciclo: 2 },
  { codigo: "EN1203", nombre: "ENFERMERÍA COMUNITARIA I", creditos: 3, prerrequisitos: ["EN1101", "EN1104"], año: 1, ciclo: 2 },
  { codigo: "EN1204", nombre: "TÉCNICAS DE COMUNICACIÓN", creditos: 2, prerrequisitos: [], año: 1, ciclo: 2 },

  // 3er CICLO - Año 2
  { codigo: "EN2101", nombre: "FARMACOLOGÍA", creditos: 4, prerrequisitos: ["EN1201", "EN1202"], año: 2, ciclo: 3 },
  { codigo: "EN2102", nombre: "ENFERMERÍA MÉDICO QUIRÚRGICA I", creditos: 4, prerrequisitos: ["EN1201"], año: 2, ciclo: 3 },
  { codigo: "EN2103", nombre: "ENFERMERÍA COMUNITARIA II", creditos: 3, prerrequisitos: ["EN1203"], año: 2, ciclo: 3 },
  { codigo: "EN2104", nombre: "SALUD MENTAL", creditos: 3, prerrequisitos: ["EN1204"], año: 2, ciclo: 3 },

  // 4to CICLO - Año 2
  { codigo: "EN2201", nombre: "ENFERMERÍA MÉDICO QUIRÚRGICA II", creditos: 4, prerrequisitos: ["EN2102"], año: 2, ciclo: 4 },
  { codigo: "EN2202", nombre: "ENFERMERÍA MATERNO INFANTIL I", creditos: 4, prerrequisitos: ["EN2102"], año: 2, ciclo: 4 },
  { codigo: "EN2203", nombre: "BIOESTADÍSTICA", creditos: 3, prerrequisitos: ["EN2103"], año: 2, ciclo: 4 },

  // 5to CICLO - Año 3
  { codigo: "EN3101", nombre: "ENFERMERÍA MATERNO INFANTIL II", creditos: 4, prerrequisitos: ["EN2202"], año: 3, ciclo: 5 },
  { codigo: "EN3102", nombre: "ENFERMERÍA EN SALUD MENTAL", creditos: 4, prerrequisitos: ["EN2104"], año: 3, ciclo: 5 },
  { codigo: "EN3103", nombre: "GERONTOLOGÍA", creditos: 3, prerrequisitos: ["EN2201"], año: 3, ciclo: 5 },
  { codigo: "ELC01", nombre: "ELECTIVO I", creditos: 3, prerrequisitos: [], año: 3, ciclo: 5 },

  // 6to CICLO - Año 3
  { codigo: "EN3201", nombre: "ADMINISTRACIÓN EN ENFERMERÍA", creditos: 4, prerrequisitos: ["EN3101"], año: 3, ciclo: 6 },
  { codigo: "EN3202", nombre: "ÉTICA PROFESIONAL", creditos: 2, prerrequisitos: [], año: 3, ciclo: 6 },
  { codigo: "EN3203", nombre: "SEMINARIO DE INVESTIGACIÓN", creditos: 3, prerrequisitos: ["EN2203"], año: 3, ciclo: 6 },

  // 7mo CICLO - Año 4
  { codigo: "EN4101", nombre: "ATENCIÓN PRIMARIA EN SALUD", creditos: 4, prerrequisitos: ["EN3103"], año: 4, ciclo: 7 },
  { codigo: "EN4102", nombre: "PRÁCTICAS PRE-PROFESIONALES I", creditos: 8, prerrequisitos: ["EN3201"], año: 4, ciclo: 7 },
  { codigo: "EN4103", nombre: "SEMINARIOS DE INTEGRACIÓN CLÍNICA I", creditos: 1, prerrequisitos: ["EN3203"], año: 4, ciclo: 7 },

  // 8vo CICLO - Año 4
  { codigo: "EN4201", nombre: "GESTIÓN DE SERVICIOS DE SALUD", creditos: 3, prerrequisitos: ["EN3201"], año: 4, ciclo: 8 },
  { codigo: "EN4202", nombre: "SALUD OCUPACIONAL", creditos: 3, prerrequisitos: ["EN4101"], año: 4, ciclo: 8 },
  { codigo: "ELC02", nombre: "ELECTIVO II", creditos: 3, prerrequisitos: [], año: 4, ciclo: 8 },

  // 9no CICLO - Año 5
  { codigo: "EN7091", nombre: "INTERNADO HOSPITALARIO", creditos: 10, prerrequisitos: ["EN4102"], año: 5, ciclo: 9 },
  { codigo: "EN7092", nombre: "ÉTICA Y LEGISLACIÓN EN SALUD", creditos: 2, prerrequisitos: ["EN3202"], año: 5, ciclo: 9 },
  { codigo: "EN7093", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN", creditos: 3, prerrequisitos: ["EN3203"], año: 5, ciclo: 9 },

  // 10mo CICLO - Año 5
  { codigo: "EN7101", nombre: "PRÁCTICAS PRE-PROFESIONALES II", creditos: 14, prerrequisitos: ["EN7091"], año: 5, ciclo: 10 },
  { codigo: "EN7102", nombre: "SEMINARIOS DE INTEGRACIÓN CLÍNICA II", creditos: 1, prerrequisitos: ["EN7092"], año: 5, ciclo: 10 },
  { codigo: "EN7103", nombre: "TRABAJO DE INVESTIGACIÓN", creditos: 3, prerrequisitos: ["EN7093"], año: 5, ciclo: 10 }
];

const electivosDisponibles = [
  { codigo: "AC4E01", nombre: "EDUCACIÓN, DERECHOS Y AUTONOMÍA DE LAS PERSONAS CON DISCAPACIDAD", creditos: 2 },
  { codigo: "LC5E01", nombre: "SALUD AMBIENTAL Y URBANA", creditos: 3 },
  { codigo: "MH3E01", nombre: "DETERMINANTES SOCIALES DE SALUD Y CONDUCTAS DE SALUD", creditos: 3 },
  { codigo: "MH3E02", nombre: "ANTROPOLOGÍA MÉDICA: CULTURA Y SALUD", creditos: 3 },
  { codigo: "ND4E01", nombre: "LA DIETA OCCIDENTAL", creditos: 3 },
  { codigo: "OD5E01", nombre: "MÉTODOS DE INVESTIGACIÓN PARA PROFESIONALES DE SALUD", creditos: 3 },
  { codigo: "PS4E01", nombre: "MANEJO DEL ESTRÉS PARA EL BIENESTAR", creditos: 3 },
  { codigo: "PS4E02", nombre: "FUNDAMENTOS DEL BIENESTAR", creditos: 3 },
  { codigo: "TF5E01", nombre: "IMPACTO DE LA ACTIVIDAD FÍSICA EN LA SALUD Y EL BIENESTAR", creditos: 3 }
];
let electivosSeleccionados = JSON.parse(localStorage.getItem("electivosSeleccionados")) || {};

function guardarElectivos() {
  localStorage.setItem("electivosSeleccionados", JSON.stringify(electivosSeleccionados));
}

function crearSelectorElectivo(cursoBase) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("curso");

  const label = document.createElement("label");
  label.textContent = `${cursoBase.codigo} - ${cursoBase.nombre}`;
  label.style.display = "block";
  wrapper.appendChild(label);

  const select = document.createElement("select");
  const yaSeleccionados = Object.values(electivosSeleccionados);
  
  const opcionDefault = document.createElement("option");
  opcionDefault.value = "";
  opcionDefault.textContent = "Selecciona un curso electivo";
  opcionDefault.disabled = true;
  opcionDefault.selected = true;
  select.appendChild(opcionDefault);

  electivosDisponibles.forEach(electivo => {
    if (!yaSeleccionados.includes(electivo.codigo) || electivosSeleccionados[cursoBase.codigo] === electivo.codigo) {
      const option = document.createElement("option");
      option.value = electivo.codigo;
      option.textContent = `${electivo.codigo} - ${electivo.nombre} (${electivo.creditos} cr)`;
      if (electivosSeleccionados[cursoBase.codigo] === electivo.codigo) {
        option.selected = true;
      }
      select.appendChild(option);
    }
  });

  select.addEventListener("change", () => {
    electivosSeleccionados[cursoBase.codigo] = select.value;
    guardarElectivos();
    if (!cursosAprobados.includes(cursoBase.codigo)) {
      cursosAprobados.push(cursoBase.codigo);
    }
    guardarEstado();
    renderizarMalla();
    actualizarProgreso();
  });

  wrapper.appendChild(select);
  return wrapper;
}

// Modifica esta parte de renderizarMalla para insertar el selector:
function renderizarMalla() {
  const contenedor = document.getElementById("contenedorMalla");
  contenedor.innerHTML = "";

  for (let año = 1; año <= 5; año++) {
    const columna = document.createElement("div");
    columna.classList.add("columna");

    const titulo = document.createElement("h2");
    titulo.textContent = `Año ${año}`;
    columna.appendChild(titulo);

    for (let ciclo = (año - 1) * 2 + 1; ciclo <= año * 2; ciclo++) {
      const cursosDelCiclo = cursos.filter(c => c.ciclo === ciclo);
      cursosDelCiclo.forEach(curso => {
        let div;

        if (curso.codigo.startsWith("ELC")) {
          if (!estaDesbloqueado(curso)) return;

          div = crearSelectorElectivo(curso);
          if (electivosSeleccionados[curso.codigo]) {
            div.classList.add("aprobado");
          } else {
            div.classList.add("desbloqueado");
          }
        } else {
          div = document.createElement("div");
          div.classList.add("curso");
          div.textContent = `${curso.codigo} - ${curso.nombre} (${curso.creditos} cr)`;
          div.dataset.codigo = curso.codigo;

          if (cursosAprobados.includes(curso.codigo)) {
            div.classList.add("aprobado");
          } else if (estaDesbloqueado(curso)) {
            div.classList.add("desbloqueado");
          } else {
            div.classList.add("bloqueado");
          }

          div.addEventListener("click", () => {
            if (!estaDesbloqueado(curso)) return;
            if (cursosAprobados.includes(curso.codigo)) {
              cursosAprobados = cursosAprobados.filter(c => c !== curso.codigo);
            } else {
              cursosAprobados.push(curso.codigo);
            }
            guardarEstado();
            renderizarMalla();
            actualizarProgreso();
          });
        }

        columna.appendChild(div);
      });
    }

    contenedor.appendChild(columna);
  }
}

