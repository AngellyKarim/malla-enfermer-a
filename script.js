const cursos = [
  // 1er Ciclo
  { codigo: "AC4012", nombre: "INGLÉS I", creditos: 3, prerrequisitos: [], ciclo: 1, anio: 1 },
  { codigo: "EN7011", nombre: "PROCESOS BIOLÓGICOS", creditos: 6, prerrequisitos: [], ciclo: 1, anio: 1 },
  { codigo: "EN7012", nombre: "PRÁCTICAS DE ENFERMERÍA", creditos: 5, prerrequisitos: [], ciclo: 1, anio: 1 },
  { codigo: "AC4011", nombre: "DESARROLLO HUMANO Y SOCIAL", creditos: 4, prerrequisitos: [], ciclo: 1, anio: 1 },
  { codigo: "TF5012", nombre: "ESTRUCTURA Y FUNCIÓN DEL CUERPO HUMANO", creditos: 4, prerrequisitos: [], ciclo: 1, anio: 1 },

  // 2do Ciclo
  { codigo: "AC4021", nombre: "ESTILO DE VIDA, SALUD Y MEDIO AMBIENTE", creditos: 4, prerrequisitos: [], ciclo: 2, anio: 1 },
  { codigo: "AC4022", nombre: "INGLÉS II", creditos: 2, prerrequisitos: ["AC4012"], ciclo: 2, anio: 1 },
  { codigo: "EN7021", nombre: "SISTEMA MUSCULOESQUELÉTICO", creditos: 3, prerrequisitos: ["TF5012"], ciclo: 2, anio: 1 },
  { codigo: "EN7022", nombre: "SISTEMA NERVIOSO Y ENDOCRINO", creditos: 5, prerrequisitos: ["TF5012"], ciclo: 2, anio: 1 },
  { codigo: "EN7023", nombre: "PRÁCTICAS DE ENFERMERÍA II", creditos: 5, prerrequisitos: ["EN7012"], ciclo: 2, anio: 1 },
  { codigo: "ND4021", nombre: "MECANISMO DE AGRESIÓN Y DEFENSA I", creditos: 4, prerrequisitos: ["EN7011"], ciclo: 2, anio: 1 },

  // 3er Ciclo
  { codigo: "EN7031", nombre: "SISTEMA CARDIORESPIRATORIO", creditos: 5, prerrequisitos: [], ciclo: 3, anio: 2 },
  { codigo: "EN7032", nombre: "SISTEMA TEGUMENTARIO", creditos: 3, prerrequisitos: [], ciclo: 3, anio: 2 },
  { codigo: "EN7033", nombre: "PRÁCTICAS DE ENFERMERÍA III", creditos: 5, prerrequisitos: ["EN7023"], ciclo: 3, anio: 2 },
  { codigo: "EN7034", nombre: "BASES DE LA TERAPEÚTICA FARMACOLÓGICA", creditos: 4, prerrequisitos: [], ciclo: 3, anio: 2 },
  { codigo: "ND4032", nombre: "MECANISMOS DE AGRESIÓN Y DEFENSA II", creditos: 4, prerrequisitos: ["ND4021"], ciclo: 3, anio: 2 },

  // 4to Ciclo
  { codigo: "AC4041", nombre: "SALUD PÚBLICA Y SISTEMAS DE SALUD", creditos: 5, prerrequisitos: ["AC4021"], ciclo: 4, anio: 2 },
  { codigo: "EN7041", nombre: "SISTEMA URINARIO Y REPRODUCTIVO", creditos: 4, prerrequisitos: ["EN7031"], ciclo: 4, anio: 2 },
  { codigo: "EN7042", nombre: "SISTEMA DIGESTIVO", creditos: 4, prerrequisitos: ["EN7032"], ciclo: 4, anio: 2 },
  { codigo: "EN7043", nombre: "MECANISMO DE AGRESIÓN Y DEFENSA III", creditos: 4, prerrequisitos: ["ND4032"], ciclo: 4, anio: 2 },
  { codigo: "EN7044", nombre: "PRÁCTICAS DE ENFERMERÍA IV", creditos: 5, prerrequisitos: ["EN7033"], ciclo: 4, anio: 2 },

  // 5to Ciclo
  { codigo: "AC4051", nombre: "PREVENCIÓN Y PROMOCIÓN DE LA SALUD", creditos: 5, prerrequisitos: ["AC4041"], ciclo: 5, anio: 3 },
  { codigo: "EN7051", nombre: "SALUD DEL NIÑO Y ADOLESCENTE", creditos: 7, prerrequisitos: ["EN7044"], ciclo: 5, anio: 3 },
  { codigo: "EN7052", nombre: "SALUD DE LA MUJER Y NEONATO", creditos: 7, prerrequisitos: ["EN7044"], ciclo: 5, anio: 3 },
  { codigo: "ELC01", nombre: "ELECTIVO I", creditos: 3, prerrequisitos: [], ciclo: 5, anio: 3 },

  // 6to Ciclo
  { codigo: "AC4061", nombre: "CIENCIA Y DESCUBRIMIENTO", creditos: 6, prerrequisitos: [], ciclo: 6, anio: 3 },
  { codigo: "EN7061", nombre: "GESTIÓN CLÍNICA Y HOSPITALARIA", creditos: 4, prerrequisitos: ["EN7051"], ciclo: 6, anio: 3 },
  { codigo: "EN7062", nombre: "SALUD DEL ADULTO", creditos: 6, prerrequisitos: ["EN7052"], ciclo: 6, anio: 3 },
  { codigo: "ELC02", nombre: "ELECTIVO II", creditos: 3, prerrequisitos: [], ciclo: 6, anio: 3 },

  // 7mo Ciclo
  { codigo: "EN7071", nombre: "SALUD DEL ADULTO MAYOR", creditos: 7, prerrequisitos: ["EN7062"], ciclo: 7, anio: 4 },
  { codigo: "EN7072", nombre: "SALUD COMUNITARIA Y FAMILIAR", creditos: 5, prerrequisitos: ["EN7061"], ciclo: 7, anio: 4 },
  { codigo: "AC4063", nombre: "TENDENCIAS GLOBALES EN SALUD", creditos: 3, prerrequisitos: [], ciclo: 7, anio: 4 },
  { codigo: "ELC03", nombre: "ELECTIVO III", creditos: 3, prerrequisitos: [], ciclo: 7, anio: 4 },

  // 8vo Ciclo
  { codigo: "EN7082", nombre: "SALUD MENTAL", creditos: 4, prerrequisitos: ["EN7072"], ciclo: 8, anio: 4 },
  { codigo: "EN7083", nombre: "CUIDADOS PALIATIVOS Y DEL FIN DE LA VIDA", creditos: 4, prerrequisitos: ["AC4051"], ciclo: 8, anio: 4 },
  { codigo: "EN7084", nombre: "URGENCIAS Y EMERGENCIAS", creditos: 5, prerrequisitos: ["EN7071"], ciclo: 8, anio: 4 },
  { codigo: "AC4064", nombre: "PROYECTOS DE INTERVENCIÓN EN SALUD", creditos: 3, prerrequisitos: [], ciclo: 8, anio: 4 },

  // 9no Ciclo
  { codigo: "EN7091", nombre: "PRÁCTICAS PRE-PROFESIONALES I", creditos: 14, prerrequisitos: ["AC4011","AC4012","AC4021","AC4022","AC4041","AC4051","AC4061","ELC01","ELC02","ELC03","EN7011","EN7012","EN7021","EN7022","EN7023","EN7031","EN7032","EN7033","EN7041","EN7042","EN7043","EN7044","EN7051","EN7052","EN7061","EN7062","EN7071","EN7072","EN7082","EN7083","EN7084","ND4021","ND4032","TF5012"], ciclo: 9, anio: 5 },
  { codigo: "EN7092", nombre: "SEMINARIOS DE INTEGRACIÓN CLÍNICA I", creditos: 1, prerrequisitos: ["EN7081"], ciclo: 9, anio: 5 },
  { codigo: "EN7093", nombre: "SEMINARIO DE INVESTIGACIÓN", creditos: 3, prerrequisitos: ["AC4061"], ciclo: 9, anio: 5 },

  // 10mo Ciclo
  { codigo: "EN7101", nombre: "PRÁCTICAS PRE-PROFESIONALES II", creditos: 14, prerrequisitos: ["EN7091"], ciclo: 10, anio: 5 },
  { codigo: "EN7102", nombre: "SEMINARIOS DE INTEGRACIÓN CLÍNICA II", creditos: 1, prerrequisitos: ["EN7092"], ciclo: 10, anio: 5 },
  { codigo: "EN7103", nombre: "TRABAJO DE INVESTIGACIÓN", creditos: 3, prerrequisitos: ["EN7093"], ciclo: 10, anio: 5 }
];

const cursosElectivos = [
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
const totalCreditos = cursos.reduce((sum, curso) => sum + (curso.codigo.startsWith('ELC') ? 0 : curso.creditos), 0);
document.getElementById("creditos-totales").textContent = totalCreditos;

const cursosAprobados = new Set(JSON.parse(localStorage.getItem("cursosAprobados")) || []);
const electivosSeleccionados = JSON.parse(localStorage.getItem("electivosSeleccionados")) || {};

function guardarProgreso() {
  localStorage.setItem("cursosAprobados", JSON.stringify([...cursosAprobados]));
  localStorage.setItem("electivosSeleccionados", JSON.stringify(electivosSeleccionados));
}

function calcularCreditosAprobados() {
  return cursos.reduce((sum, curso) => {
    if (cursosAprobados.has(curso.codigo) && !curso.codigo.startsWith("ELC")) {
      return sum + curso.creditos;
    }
    return sum;
  }, 0);
}

function actualizarCreditos() {
  document.getElementById("creditos-aprobados").textContent = calcularCreditosAprobados();
}

function prerrequisitosAprobados(prerrequisitos) {
  return prerrequisitos.every(pr => cursosAprobados.has(pr));
}

function crearCursoElemento(curso) {
  const template = curso.codigo.startsWith("ELC")
    ? document.getElementById("electivo-template")
    : document.getElementById("curso-template");
  const cursoEl = template.content.cloneNode(true);
  const nombre = cursoEl.querySelector(".nombre-curso");
  const codigo = cursoEl.querySelector(".codigo-curso");
  const creditos = cursoEl.querySelector(".creditos-curso");
  const btn = cursoEl.querySelector(".btn-aprobar");
  const select = cursoEl.querySelector(".selector-electivo");

  if (curso.codigo.startsWith("ELC")) {
    select.name = curso.codigo;
    cursosElectivos.forEach(elec => {
      const opt = document.createElement("option");
      opt.value = elec.codigo;
      opt.textContent = `${elec.nombre} (${elec.creditos} créditos)`;
      select.appendChild(opt);
    });
    select.value = electivosSeleccionados[curso.codigo] || "";
    select.addEventListener("change", () => {
      electivosSeleccionados[curso.codigo] = select.value;
      guardarProgreso();
    });
  } else {
    nombre.textContent = curso.nombre;
    codigo.textContent = curso.codigo;
    creditos.textContent = `${curso.creditos} créditos`;
    if (cursosAprobados.has(curso.codigo)) {
      btn.disabled = true;
      btn.textContent = "Aprobado";
      cursoEl.querySelector(".curso").classList.add("aprobado");
    }
    btn.addEventListener("click", () => {
      cursosAprobados.add(curso.codigo);
      guardarProgreso();
      renderizarMalla();
    });
  }

  return cursoEl;
}
function renderizarMalla() {
  const contenedor = document.getElementById('contenedor-malla');
  contenedor.innerHTML = '';

  const cursosPorCiclo = {};

  cursos.forEach(curso => {
    if (!cursosPorCiclo[curso.ciclo]) {
      cursosPorCiclo[curso.ciclo] = [];
    }
    cursosPorCiclo[curso.ciclo].push(curso);
  });

  for (let ciclo = 1; ciclo <= 10; ciclo++) {
    const contenedorCiclo = document.createElement('div');
    contenedorCiclo.classList.add('ciclo');
    contenedorCiclo.innerHTML = `<h2>Ciclo ${ciclo}</h2>`;

    if (cursosPorCiclo[ciclo]) {
      cursosPorCiclo[ciclo].forEach(curso => {
        if (curso.codigo.startsWith('ELC')) {
          const template = document.getElementById('electivo-template');
          const cursoElement = template.content.cloneNode(true);
          const select = cursoElement.querySelector('select');
          electivos.forEach(e => {
            const option = document.createElement('option');
            option.value = e.codigo;
            option.textContent = `${e.nombre} (${e.codigo})`;
            select.appendChild(option);
          });
          select.dataset.codigo = curso.codigo;
          select.addEventListener('change', (e) => {
            const elegido = e.target.value;
            if (elegido) {
              estadoElectivos[curso.codigo] = elegido;
              guardarProgreso();
              renderizarMalla();
            }
          });
          if (estadoElectivos[curso.codigo]) {
            select.value = estadoElectivos[curso.codigo];
            const elegidoCurso = electivos.find(e => e.codigo === select.value);
            if (elegidoCurso) {
              const info = cursoElement.querySelector('.nombre-curso');
              info.textContent = elegidoCurso.nombre;
              select.style.display = 'none';
            }
          }
          contenedorCiclo.appendChild(cursoElement);
        } else {
          const template = document.getElementById('curso-template');
          const cursoElement = template.content.cloneNode(true);
          const nombre = cursoElement.querySelector('.nombre-curso');
          const codigo = cursoElement.querySelector('.codigo-curso');
          const creditos = cursoElement.querySelector('.creditos-curso');
          const boton = cursoElement.querySelector('.btn-aprobar');

          nombre.textContent = curso.nombre;
          codigo.textContent = curso.codigo;
          creditos.textContent = `${curso.creditos} créditos`;

          if (cursosAprobados.has(curso.codigo)) {
            cursoElement.querySelector('.curso').classList.add('aprobado');
            boton.textContent = 'Aprobado';
            boton.disabled = true;
          } else {
            const prerrequisitosCompletos = curso.prerrequisitos.every(req => cursosAprobados.has(req));
            if (!prerrequisitosCompletos) {
              boton.disabled = true;
              boton.textContent = 'Bloqueado';
            } else {
              boton.addEventListener('click', () => {
                cursosAprobados.add(curso.codigo);
                guardarProgreso();
                renderizarMalla();
              });
            }
          }

          contenedorCiclo.appendChild(cursoElement);
        }
      });
    }

    contenedor.appendChild(contenedorCiclo);
  }

  actualizarCreditos();
  actualizarModo();
}
function guardarProgreso() {
  localStorage.setItem('cursosAprobados', JSON.stringify(Array.from(cursosAprobados)));
  localStorage.setItem('estadoElectivos', JSON.stringify(estadoElectivos));
}

function cargarProgreso() {
  const guardado = localStorage.getItem('cursosAprobados');
  if (guardado) {
    cursosAprobados = new Set(JSON.parse(guardado));
  }
  const electivosGuardados = localStorage.getItem('estadoElectivos');
  if (electivosGuardados) {
    Object.assign(estadoElectivos, JSON.parse(electivosGuardados));
  }
}

function actualizarCreditos() {
  let total = 0;
  cursos.forEach(curso => {
    if (cursosAprobados.has(curso.codigo)) {
      total += curso.creditos;
    }
  });
  Object.entries(estadoElectivos).forEach(([codigo, elegido]) => {
    const curso = electivos.find(e => e.codigo === elegido);
    if (curso) total += curso.creditos;
  });
  document.getElementById('contador-creditos').textContent = `Créditos aprobados: ${total}`;
}

function actualizarModo() {
  const body = document.body;
  const boton = document.getElementById('btn-modo');
  const modoOscuro = localStorage.getItem('modoOscuro') === 'true';
  body.classList.toggle('oscuro', modoOscuro);
  boton.textContent = modoOscuro ? 'Modo claro' : 'Modo oscuro';
}

document.getElementById('btn-modo').addEventListener('click', () => {
  const body = document.body;
  body.classList.toggle('oscuro');
  const nuevoModo = body.classList.contains('oscuro');
  localStorage.setItem('modoOscuro', nuevoModo);
  actualizarModo();
});

document.getElementById('btn-reiniciar').addEventListener('click', () => {
  if (confirm('¿Seguro que deseas reiniciar tu progreso?')) {
    cursosAprobados.clear();
    Object.keys(estadoElectivos).forEach(k => delete estadoElectivos[k]);
    localStorage.removeItem('cursosAprobados');
    localStorage.removeItem('estadoElectivos');
    renderizarMalla();
  }
});

cargarProgreso();
renderizarMalla();
