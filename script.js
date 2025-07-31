const cursos = [
  // Año 1, Ciclo 1
  { codigo: "AC4012", nombre: "INGLÉS I", creditos: 3, prerrequisitos: [], año: 1, ciclo: 1 },
  { codigo: "EN7011", nombre: "PROCESOS BIOLÓGICOS", creditos: 6, prerrequisitos: [], año: 1, ciclo: 1 },
  { codigo: "EN7012", nombre: "PRÁCTICAS DE ENFERMERÍA", creditos: 5, prerrequisitos: [], año: 1, ciclo: 1 },
  { codigo: "AC4011", nombre: "DESARROLLO HUMANO Y SOCIAL", creditos: 4, prerrequisitos: [], año: 1, ciclo: 1 },
  { codigo: "TF5012", nombre: "ESTRUCTURA Y FUNCIÓN DEL CUERPO HUMANO", creditos: 4, prerrequisitos: [], año: 1, ciclo: 1 },
  // Año 1, Ciclo 2
  { codigo: "AC4021", nombre: "ESTILO DE VIDA, SALUD Y MEDIO AMBIENTE", creditos: 4, prerrequisitos: [], año: 1, ciclo: 2 },
  { codigo: "AC4022", nombre: "INGLÉS II", creditos: 2, prerrequisitos: ["AC4012"], año: 1, ciclo: 2 },
  { codigo: "EN7021", nombre: "SISTEMA MUSCULOESQUELÉTICO", creditos: 3, prerrequisitos: ["TF5012"], año: 1, ciclo: 2 },
  { codigo: "EN7022", nombre: "SISTEMA NERVIOSO Y ENDOCRINO", creditos: 5, prerrequisitos: ["TF5012"], año: 1, ciclo: 2 },
  { codigo: "EN7023", nombre: "PRÁCTICAS DE ENFERMERÍA II", creditos: 5, prerrequisitos: ["EN7012"], año: 1, ciclo: 2 },
  { codigo: "ND4021", nombre: "MECANISMO DE AGRESIÓN Y DEFENSA I", creditos: 4, prerrequisitos: ["EN7011"], año: 1, ciclo: 2 },
  // Año 2, Ciclo 3
  { codigo: "EN7031", nombre: "SISTEMA CARDIORESPIRATORIO", creditos: 5, prerrequisitos: [], año: 2, ciclo: 3 },
  { codigo: "EN7032", nombre: "SISTEMA TEGUMENTARIO", creditos: 3, prerrequisitos: [], año: 2, ciclo: 3 },
  { codigo: "EN7033", nombre: "PRÁCTICAS DE ENFERMERÍA III", creditos: 5, prerrequisitos: ["EN7023"], año: 2, ciclo: 3 },
  { codigo: "EN7034", nombre: "BASES DE LA TERAPÉUTICA FARMACOLÓGICA", creditos: 4, prerrequisitos: [], año: 2, ciclo: 3 },
  { codigo: "ND4032", nombre: "MECANISMOS DE AGRESIÓN Y DEFENSA II", creditos: 4, prerrequisitos: ["ND4021"], año: 2, ciclo: 3 },
  // Año 2, Ciclo 4
  { codigo: "AC4041", nombre: "SALUD PÚBLICA Y SISTEMAS DE SALUD", creditos: 5, prerrequisitos: ["AC4021"], año: 2, ciclo: 4 },
  { codigo: "EN7041", nombre: "SISTEMA URINARIO Y REPRODUCTIVO", creditos: 4, prerrequisitos: ["EN7031"], año: 2, ciclo: 4 },
  { codigo: "EN7042", nombre: "SISTEMA DIGESTIVO", creditos: 4, prerrequisitos: ["EN7032"], año: 2, ciclo: 4 },
  { codigo: "EN7043", nombre: "MECANISMO DE AGRESIÓN Y DEFENSA III", creditos: 4, prerrequisitos: ["ND4032"], año: 2, ciclo: 4 },
  { codigo: "EN7044", nombre: "PRÁCTICAS DE ENFERMERÍA IV", creditos: 5, prerrequisitos: ["EN7033"], año: 2, ciclo: 4 },
  // Año 3, Ciclo 5
  { codigo: "AC4051", nombre: "PREVENCIÓN Y PROMOCIÓN DE LA SALUD", creditos: 5, prerrequisitos: ["AC4041"], año: 3, ciclo: 5 },
  { codigo: "EN7051", nombre: "SALUD DEL NIÑO Y ADOLESCENTE", creditos: 7, prerrequisitos: ["EN7044"], año: 3, ciclo: 5 },
  { codigo: "EN7052", nombre: "SALUD DE LA MUJER Y NEONATO", creditos: 7, prerrequisitos: ["EN7044"], año: 3, ciclo: 5 },
  { codigo: "ELC01", nombre: "ELECTIVO I", creditos: 3, prerrequisitos: [], año: 3, ciclo: 5 },
  // Año 3, Ciclo 6
  { codigo: "AC4061", nombre: "CIENCIA Y DESCUBRIMIENTO", creditos: 6, prerrequisitos: [], año: 3, ciclo: 6 },
  { codigo: "EN7061", nombre: "GESTIÓN CLÍNICA Y HOSPITALARIA", creditos: 4, prerrequisitos: ["EN7051"], año: 3, ciclo: 6 },
  { codigo: "EN7062", nombre: "SALUD DEL ADULTO", creditos: 6, prerrequisitos: ["EN7052"], año: 3, ciclo: 6 },
  { codigo: "ELC02", nombre: "ELECTIVO II", creditos: 3, prerrequisitos: [], año: 3, ciclo: 6 },
  // Año 4, Ciclo 7
  { codigo: "EN7071", nombre: "SALUD DEL ADULTO MAYOR", creditos: 7, prerrequisitos: ["EN7062"], año: 4, ciclo: 7 },
  { codigo: "EN7072", nombre: "SALUD COMUNITARIA Y FAMILIAR", creditos: 5, prerrequisitos: ["EN7061"], año: 4, ciclo: 7 },
  { codigo: "AC4063", nombre: "TENDENCIAS GLOBALES EN SALUD", creditos: 3, prerrequisitos: [], año: 4, ciclo: 7 },
  { codigo: "ELC03", nombre: "ELECTIVO III", creditos: 3, prerrequisitos: [], año: 4, ciclo: 7 },
  // Año 4, Ciclo 8
  { codigo: "EN7082", nombre: "SALUD MENTAL", creditos: 4, prerrequisitos: ["EN7072"], año: 4, ciclo: 8 },
  { codigo: "EN7083", nombre: "CUIDADOS PALIATIVOS Y DEL FIN DE LA VIDA", creditos: 4, prerrequisitos: ["AC4051"], año: 4, ciclo: 8 },
  { codigo: "EN7084", nombre: "URGENCIAS Y EMERGENCIAS", creditos: 5, prerrequisitos: ["EN7071"], año: 4, ciclo: 8 },
  { codigo: "AC4064", nombre: "PROYECTOS DE INTERVENCIÓN EN SALUD", creditos: 3, prerrequisitos: [], año: 4, ciclo: 8 },
  // Año 5, Ciclo 9
  { codigo: "EN7091", nombre: "PRÁCTICAS PRE-PROFESIONALES I", creditos: 14, prerrequisitos: [
    "AC4011","AC4012","AC4021","AC4022","AC4041","AC4051","AC4061",
    "ELC01","ELC02","ELC03","EN7011","EN7012","EN7021","EN7022","EN7023",
    "EN7031","EN7032","EN7033","EN7041","EN7042","EN7043","EN7044",
    "EN7051","EN7052","EN7061","EN7062","EN7071","EN7072","EN7082","EN7083","EN7084",
    "ND4021","ND4032","TF5012"
  ], año: 5, ciclo: 9 },
  { codigo: "EN7092", nombre: "SEMINARIOS DE INTEGRACIÓN CLÍNICA I", creditos: 1,
    prerrequisitos: ["EN7082"], año: 5, ciclo: 9 },
  { codigo: "EN7093", nombre: "SEMINARIO DE INVESTIGACIÓN", creditos: 3,
    prerrequisitos: ["AC4061"], año: 5, ciclo: 9 },
  // Año 5, Ciclo 10
  { codigo: "EN7101", nombre: "PRÁCTICAS PRE-PROFESIONALES II", creditos: 14,
    prerrequisitos: ["EN7091"], año: 5, ciclo: 10 },
  { codigo: "EN7102", nombre: "SEMINARIOS DE INTEGRACIÓN CLÍNICA II", creditos: 1,
    prerrequisitos: ["EN7092"], año: 5, ciclo: 10 },
  { codigo: "EN7103", nombre: "TRABAJO DE INVESTIGACIÓN", creditos: 3,
    prerrequisitos: ["EN7093"], año: 5, ciclo: 10 }
];

const contenedor = document.getElementById("contenedor-cursos");
const creditosSpan = document.getElementById("creditos");
const barraProgreso = document.getElementById("barraProgreso");
const btnModo = document.getElementById("toggleModo");
const btnVista = document.getElementById("toggleVista");

let modoOscuro = localStorage.getItem("modoOscuro") === "true";
let vistaPorCiclo = localStorage.getItem("vistaPorCiclo") === "true";
let cursosAprobados = new Set(JSON.parse(localStorage.getItem("cursosAprobados") || "[]"));

function guardarEstado() {
  localStorage.setItem("modoOscuro", modoOscuro);
  localStorage.setItem("vistaPorCiclo", vistaPorCiclo);
  localStorage.setItem("cursosAprobados", JSON.stringify([...cursosAprobados]));
}

function contarCreditos() {
  return cursos.filter(c => cursosAprobados.has(c.codigo)).reduce((sum, c) => sum + c.creditos, 0);
}

function prerrequisitosFaltantes(c) {
  return c.prerrequisitos.filter(pr => !cursosAprobados.has(pr));
}

function renderCursos() {
  contenedor.innerHTML = "";
  const grupos = {};
  cursos.forEach(c => {
    const clave = vistaPorCiclo ? `Ciclo ${c.ciclo}` : `Año ${c.año}`;
    grupos[clave] = grupos[clave] || [];
    grupos[clave].push(c);
  });
  Object.entries(grupos).forEach(([titulo, lista]) => {
    const divG = document.createElement("div");
    divG.className = "grupo";
    const h = document.createElement("h2");
    h.textContent = titulo;
    divG.appendChild(h);
    lista.forEach(c => {
      const falt = prerrequisitosFaltantes(c);
      const divC = document.createElement("div");
      divC.className = "curso";
      if (cursosAprobados.has(c.codigo)) divC.classList.add("aprobado");
      else if (falt.length) divC.classList.add("bloqueado");
      else divC.classList.add("desbloqueado");
      divC.innerHTML = `<strong>${c.codigo}</strong><br>${c.nombre}<br><small>${c.creditos} cr</small>`;
      if (falt.length) divC.title = `Faltan: ${falt.join(", ")}`;
      divC.addEventListener("click", () => toggleCurso(c));
      divG.appendChild(divC);
    });
    contenedor.appendChild(divG);
  });

  creditosSpan.textContent = `Créditos aprobados: ${contarCreditos()}`;
  const total = cursos.reduce((a,c)=>a+c.creditos,0);
  barraProgreso.style.width = `${(contarCreditos()/total)*100}%`;
  document.body.classList.toggle("oscuro", modoOscuro);
}

function toggleCurso(c) {
  const falt = prerrequisitosFaltantes(c);
  if (falt.length) return;
  cursosAprobados.has(c.codigo) ? cursosAprobados.delete(c.codigo) : cursosAprobados.add(c.codigo);
  guardarEstado();
  renderCursos();
}

btnModo.addEventListener("click", () => {
  modoOscuro = !modoOscuro;
  guardarEstado();
  renderCursos();
  btnModo.textContent = modoOscuro ? "Modo Claro" : "Modo Oscuro";
});

btnVista.addEventListener("click", () => {
  vistaPorCiclo = !vistaPorCiclo;
  guardarEstado();
  renderCursos();
  btnVista.textContent = vistaPorCiclo ? "Ver por Año" : "Ver por Ciclo";
});

renderCursos();
      
