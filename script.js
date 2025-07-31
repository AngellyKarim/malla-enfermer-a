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
  { codigo: "PS4E01", nombre: "MANEJO DEL ÉSTRES PARA EL BIENESTAR", creditos: 3 },
  { codigo: "PS4E02", nombre: "FUNDAMENTOS DEL BIENESTAR", creditos: 3 },
  { codigo: "TF5E01", nombre: "IMPACTO DE LA ACTIVIDAD FÍSICA EN LA SALUD Y EL BIENESTAR", creditos: 3 }
];

let cursosAprobados = JSON.parse(localStorage.getItem("cursosAprobados")) || {};
let modoOscuro = localStorage.getItem("modoOscuro") === "true";

const contenedorMalla = document.getElementById("contenedor-malla");
const creditosAprobadosSpan = document.getElementById("creditos-aprobados");
const creditosTotalesSpan = document.getElementById("creditos-totales");
const btnModoOscuro = document.getElementById("modo-oscuro-btn");

function calcularCreditosTotales() {
  return cursos
    .filter(curso => !curso.codigo.startsWith("ELC"))
    .reduce((sum, curso) => sum + curso.creditos, 0) + 3 * 3;
}

function calcularCreditosAprobados() {
  return Object.entries(cursosAprobados)
    .filter(([_, aprobado]) => aprobado)
    .map(([codigo]) => {
      let curso = cursos.find(c => c.codigo === codigo);
      if (!curso && codigo.startsWith("ELC")) {
        const electivoSeleccionado = cursosAprobados[codigo];
        curso = cursosElectivos.find(e => e.codigo === electivoSeleccionado);
      }
      return curso ? curso.creditos : 0;
    })
    .reduce((sum, cred) => sum + cred, 0);
}

function actualizarCreditos() {
  creditosAprobadosSpan.textContent = calcularCreditosAprobados();
  creditosTotalesSpan.textContent = calcularCreditosTotales();
}

function tienePrerrequisitosAprobados(curso) {
  return curso.prerrequisitos.every(prereq => cursosAprobados[prereq]);
}

function renderizarMalla() {
  contenedorMalla.innerHTML = "";
  const cursosPorAnioYCiclo = {};
  cursos.forEach(curso => {
    const key = `A${curso.anio}-C${curso.ciclo}`;
    if (!cursosPorAnioYCiclo[key]) cursosPorAnioYCiclo[key] = [];
    cursosPorAnioYCiclo[key].push(curso);
  });

  for (let anio = 1; anio <= 5; anio++) {
    const contenedorAnio = document.createElement("section");
    contenedorAnio.className = "anio";
    const tituloAnio = document.createElement("h2");
    tituloAnio.textContent = `Año ${anio}`;
    contenedorAnio.appendChild(tituloAnio);

    for (let ciclo = 1; ciclo <= 2; ciclo++) {
      const key = `A${anio}-C${(anio - 1) * 2 + ciclo}`;
      const cursosCiclo = cursosPorAnioYCiclo[key] || [];
      const contenedorCiclo = document.createElement("div");
      contenedorCiclo.className = "ciclo";
      const tituloCiclo = document.createElement("h3");
      tituloCiclo.textContent = `Ciclo ${(anio - 1) * 2 + ciclo}`;
      contenedorCiclo.appendChild(tituloCiclo);

      cursosCiclo.forEach(curso => {
        const template = document.getElementById("curso-template");
        const nodo = template.content.cloneNode(true);
        nodo.querySelector(".nombre-curso").textContent = curso.nombre;
        nodo.querySelector(".codigo-curso").textContent = curso.codigo;
        nodo.querySelector(".creditos-curso").textContent = `${curso.creditos} créditos`;

        const cursoDiv = nodo.querySelector(".curso");

        if (cursosAprobados[curso.codigo]) {
          cursoDiv.classList.add("aprobado");
        } else if (!tienePrerrequisitosAprobados(curso)) {
          cursoDiv.classList.add("bloqueado");
        }

        cursoDiv.addEventListener("click", () => {
          if (!tienePrerrequisitosAprobados(curso)) return;
          cursosAprobados[curso.codigo] = true;
          localStorage.setItem("cursosAprobados", JSON.stringify(cursosAprobados));
          actualizarCreditos();
          renderizarMalla();
        });

        contenedorCiclo.appendChild(nodo);
      });
      contenedorAnio.appendChild(contenedorCiclo);
    }
    contenedorMalla.appendChild(contenedorAnio);
  }
}

btnModoOscuro.addEventListener("click", () => {
  modoOscuro = !modoOscuro;
  localStorage.setItem("modoOscuro", modoOscuro);
  document.body.classList.toggle("oscuro", modoOscuro);
  btnModoOscuro.textContent = modoOscuro ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
});

document.body.classList.toggle("oscuro", modoOscuro);
btnModoOscuro.textContent = modoOscuro ? "☀️ Modo Claro" : "🌙 Modo Oscuro";

actualizarCreditos();
renderizarMalla();
