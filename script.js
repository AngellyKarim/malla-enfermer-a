const courses = [
    { code: "AC4012", name: "INGLÉS I", credits: 3, prerequisites: [] },
    { code: "EN7011", name: "PROCESOS BIOLÓGICOS", credits: 6, prerequisites: [] },
    { code: "EN7012", name: "PRÁCTICAS DE ENFERMERÍA", credits: 5, prerequisites: [] },
    { code: "AC4011", name: "DESARROLLO HUMANO Y SOCIAL", credits: 4, prerequisites: [] },
    { code: "TF5012", name: "ESTRUCTURA Y FUNCIÓN DEL CUERPO HUMANO", credits: 4, prerequisites: [] },
    { code: "AC4021", name: "ESTILO DE VIDA, SALUD Y MEDIO AMBIENTE", credits: 4, prerequisites: [] },
    { code: "AC4022", name: "INGLÉS II", credits: 2, prerequisites: ["AC4012"] },
    { code: "EN7021", name: "SISTEMA MUSCULOESQUELÉTICO", credits: 3, prerequisites: ["TF5012"] },
    { code: "EN7022", name: "SISTEMA NERVIOSO Y ENDOCRINO", credits: 5, prerequisites: ["TF5012"] },
    { code: "EN7023", name: "PRÁCTICAS DE ENFERMERÍA II", credits: 5, prerequisites: ["EN7012"] },
    { code: "ND4021", name: "MECANISMO DE AGRESIÓN Y DEFENSA I", credits: 4, prerequisites: ["EN7011"] },
    { code: "EN7031", name: "SISTEMA CARDIORESPIRATORIO", credits: 5, prerequisites: [] },
    { code: "EN7032", name: "SISTEMA TEGUMENTARIO", credits: 3, prerequisites: [] },
    { code: "EN7033", name: "PRÁCTICAS DE ENFERMERÍA III", credits: 5, prerequisites: ["EN7023"] },
    { code: "EN7034", name: "BASES DE LA TERAPEÚTICA FARMACOLÓGICA", credits: 4, prerequisites: [] },
    { code: "ND4032", name: "MECANISMOS DE AGRESIÓN Y DEFENSA II", credits: 4, prerequisites: ["ND4021"] },
    { code: "AC4041", name: "SALUD PÚBLICA Y SISTEMAS DE SALUD", credits: 5, prerequisites: ["AC4021"] },
    { code: "EN7041", name: "SISTEMA URINARIO Y REPRODUCTIVO", credits: 4, prerequisites: ["EN7031"] },
    { code: "EN7042", name: "SISTEMA DIGESTIVO", credits: 4, prerequisites: ["EN7032"] },
    { code: "EN7043", name: "MECANISMO DE AGRESIÓN Y DEFENSA III", credits: 4, prerequisites: ["ND4032"] },
    { code: "EN7044", name: "PRÁCTICAS DE ENFERMERÍA IV", credits: 5, prerequisites: ["EN7033"] },
    { code: "AC4051", name: "PREVENCIÓN Y PROMOCIÓN DE LA SALUD", credits: 5, prerequisites: ["AC4041"] },
    { code: "EN7051", name: "SALUD DEL NIÑO Y ADOLESCENTE", credits: 7, prerequisites: ["EN7044"] },
    { code: "EN7052", name: "SALUD DE LA MUJER Y NEONATO", credits: 7, prerequisites: ["EN7044"] },
    { code: "ELC01", name: "ELECTIVO I", credits: 3, prerequisites: [] },
    { code: "AC4061", name: "CIENCIA Y DESCUBRIMIENTO", credits: 6, prerequisites: [] },
    { code: "EN7061", name: "GESTIÓN CLÍNICA Y HOSPITALARIA", credits: 4, prerequisites: ["EN7051"] },
    { code: "EN7062", name: "SALUD DEL ADULTO", credits: 0, prerequisites: ["EN7052"] },
    { code: "ELC02", name: "ELECTIVO II", credits: 3, prerequisites: [] },
    { code: "EN7071", name: "SALUD DEL ADULTO MAYOR", credits: 7, prerequisites: ["EN7062"] },
    { code: "EN7072", name: "SALUD COMUNITARIA Y FAMILIAR", credits: 5, prerequisites: ["EN7061"] },
    { code: "AC4063", name: "TENDENCIAS GLOBALES EN SALUD", credits: 3, prerequisites: [] },
    { code: "ELC03", name: "ELECTIVO III", credits: 3, prerequisites: [] },
    { code: "EN7082", name: "SALUD MENTAL", credits: 4, prerequisites: ["EN7072"] },
    { code: "EN7083", name: "CUIDADOS PALIATIVOS Y DEL FIN DE LA VIDA", credits: 4, prerequisites: ["AC4051"] },
    { code: "EN7084", name: "URGENCIAS Y EMERGENCIAS", credits: 5, prerequisites: ["EN7071"] },
    { code: "AC4064", name: "PROYECTOS DE INTERVENCIÓN EN SALUD", credits: 3, prerequisites: [] },
    { code: "EN7091", name: "PRÁCTICAS PRE-PROFESIONALES I", credits: 14, prerequisites: ["AC4011", "AC4012", "AC4021", "AC4022", "AC4041", "AC4051", "AC4061", "ELC01", "ELC02", "ELC03", "EN7011", "EN7012", "EN7021", "EN7022", "EN7023", "EN7031", "EN7032", "EN7033", "EN7041", "EN7042", "EN7043", "EN7044", "EN7051", "EN7052", "EN7061", "EN7062", "EN7071", "EN7072", "EN82", "EN83", "EN84", "ND4021", "ND4032", "TF5012"] },
    { code: "EN7092", name: "SEMINARIOS DE INTEGRACIÓN CLÍNICA I", credits: 1, prerequisites: ["EN7081"] },
    { code: "EN7093", name: "SEMINARIO DE INVESTIGACIÓN", credits: 3, prerequisites: ["AC4061"] },
    { code: "EN7101", name: "PRÁCTICAS PRE-PROFESIONALES II", credits: 14, prerequisites: ["EN7091"] },
    { code: "EN7102", name: "SEMINARIOS DE INTEGRACIÓN CLÍNICA II", credits: 1, prerequisites: ["EN7092"] },
    { code: "EN7103", name: "TRABAJO DE INVESTIGACIÓN", credits: 3, prerequisites: ["EN7093"] },
];

let approvedCourses = new Set();
let totalCredits = 0;

function renderCourses() {
    const coursesGrid = document.querySelector('.courses-grid');
    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        courseDiv.innerHTML = `
            <h3>${course.name}</h3>
            <p>Créditos: ${course.credits}</p>
            <button class="approve-button" data-code="${course.code}">Se aprueba el curso</button>
        `;
        coursesGrid.appendChild(courseDiv);
    });
}

function updateCredits() {
    const approvedCredits = Array.from(approvedCourses).reduce((sum, code) => {
        const course = courses.find(c => c.code === code);
        return sum + (course ? course.credits : 0);
    }, 0);
    document.getElementById('approved-credits').innerText = `Créditos Aprobados: ${approvedCredits}`;
    document.getElementById('total-credits').innerText = `Créditos Totales: ${totalCredits}`;
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('approve-button')) {
        const courseCode = event.target.getAttribute('data-code');
        const course = courses.find(c => c.code === courseCode);
        if (course) {
            approvedCourses.add(courseCode);
            totalCredits += course.credits;
            event.target.parentElement.classList.add('completed');
            updateCredits();
        }
    }
});

document.getElementById('toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

renderCourses();
updateCredits();
        
