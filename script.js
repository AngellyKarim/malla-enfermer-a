const cursos = [
  { codigo: "AC4012", nombre: "INGLÉS I", creditos: 3, prerequisitos: [], ciclo: 1 },
  { codigo: "EN7011", nombre: "PROCESOS BIOLÓGICOS", creditos: 6, prerequisitos: [], ciclo: 1 },
  { codigo: "EN7012", nombre: "PRÁCTICAS DE ENFERMERÍA", creditos: 5, prerequisitos: [], ciclo: 1 },
  { codigo: "AC4011", nombre: "DESARROLLO HUMANO Y SOCIAL", creditos: 4, prerequisitos: [], ciclo: 1 },
  { codigo: "TF5012", nombre: "ESTRUCTURA Y FUNCIÓN DEL CUERPO HUMANO", creditos: 4, prerequisitos: [], ciclo: 1 },

  { codigo: "AC4021", nombre: "ESTILO DE VIDA, SALUD Y MEDIO AMBIENTE", creditos: 4, prerequisitos: [], ciclo: 2 },
  { codigo: "AC4022", nombre: "INGLÉS II", creditos: 2, prerequisitos: ["AC4012"], ciclo: 2 },
  { codigo: "EN7021", nombre: "SISTEMA MUSCULOESQUELÉTICO", creditos: 3, prerequisitos: ["TF5012"], ciclo: 2 },
  { codigo: "EN7022", nombre: "SISTEMA NERVIOSO Y ENDOCRINO", creditos: 5, prerequisitos: ["TF5012"], ciclo: 2 },
  { codigo: "EN7023", nombre: "PRÁCTICAS DE ENFERMERÍA II", creditos: 5, prerequisitos: ["EN7012"], ciclo: 2 },
  { codigo: "ND4021", nombre: "MECANISMO DE AGRESIÓN Y DEFENSA I", creditos: 4, prerequisitos: ["EN7011"], ciclo: 2 },

  { codigo: "EN7031", nombre: "SISTEMA CARDIORESPIRATORIO", creditos: 5, prerequisitos: [], ciclo: 3 },
  { codigo: "EN7032", nombre: "SISTEMA TEGUMENTARIO", creditos: 3, prerequisitos: [], ciclo: 3 },
  { codigo: "EN7033", nombre: "PRÁCTICAS DE ENFERMERÍA III", creditos: 5, prerequisitos: ["EN7023"], ciclo: 3 },
  { codigo: "EN7034", nombre: "BASES DE LA TERAPEÚTICA FARMACOLÓGICA", creditos: 4, prerequisitos: [], ciclo: 3 },
  { codigo: "ND4032", nombre: "MECANISMOS DE AGRESIÓN Y DEFENSA II", creditos: 4, prerequisitos: ["ND4021"], ciclo: 3 },

  { codigo: "AC4041", nombre: "SALUD PÚBLICA Y SISTEMAS DE SALUD", creditos: 5, prerequisitos: ["AC4021"], ciclo: 4 },
  { codigo: "EN7041", nombre: "SISTEMA URINARIO Y REPRODUCTIVO", creditos: 4, prerequisitos: ["EN7031"], ciclo: 4 },
  { codigo: "EN7042", nombre: "SISTEMA DIGESTIVO", creditos: 4, prerequisitos: ["EN7032"], ciclo: 4 },
  { codigo: "EN7043", nombre: "MECANISMO DE AGRESIÓN Y DEFENSA III", creditos: 4, prerequisitos: ["ND4032"], ciclo: 4 },
  { codigo: "EN7044", nombre: "PRÁCTICAS DE ENFERMERÍA IV", creditos: 5, prerequisitos: ["EN7033"], ciclo: 4 },
];

const aprobados = new Set();

function crearCursoHTML(curso) {
  const div = document.createElement("div");
  div.className = "curso";
  div.id = curso.codigo;

  const titulo = document.createElement("h4");
  titulo.innerText = `${curso.nombre} (${curso.codigo})`;

  const creditos = document.createElement("p");
  creditos.innerText = `Créditos: ${curso.creditos}`;

  const prereq = document.createElement("p");
  prereq.innerText = `Prerrequisitos: ${
    curso.prerequisitos.length ? curso.prerequisitos.join(", ") : "Ninguno"
  }`;

  const boton = document.createElement("button");
  boton.innerText = "Aprobar";
  boton.disabled = !requisitosCumplidos(curso);
  boton.onclick = () => {
    aprobarCurso(curso.codigo);
    boton.classList.add("aprobado");
    boton.disabled = true;
    actualizarDisponibles();
  };

  div.appendChild(titulo);
  div.appendChild(creditos);
  div.appendChild(prereq);
  div.appendChild(boton);

  return div;
}

function requisitosCumplidos(curso) {
  return curso.prerequisitos.every(cod => aprobados.has(cod));
}

function aprobarCurso(codigo) {
  aprobados.add(codigo);
}

function actualizarDisponibles() {
  cursos.forEach(curso => {
    const btn = document.querySelector(`#${curso.codigo} button`);
    if (!btn.classList.contains("aprobado") && requisitosCumplidos(curso)) {
      btn.disabled = false;
    }
  });
}

function renderMalla() {
  for (let i = 1; i <= 10; i++) {
    const contenedor = document.getElementById(`ciclo-${i}`);
    const cursosCiclo = cursos.filter(c => c.ciclo === i);
    cursosCiclo.forEach(curso => {
      const cursoHTML = crearCursoHTML(curso);
      contenedor.appendChild(cursoHTML);
    });
  }
}

document.addEventListener("DOMContentLoaded", renderMalla);
