document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        // Primer Año
        { code: 'AC4012', name: 'INGLÉS I', credits: 3, cycle: 1, prereqs: [] },
        { code: 'EN7011', name: 'PROCESOS BIOLÓGICOS', credits: 6, cycle: 1, prereqs: [] },
        { code: 'EN7012', name: 'PRÁCTICAS DE ENFERMERÍA', credits: 5, cycle: 1, prereqs: [] },
        { code: 'AC4011', name: 'DESARROLLO HUMANO Y SOCIAL', credits: 4, cycle: 1, prereqs: [] },
        { code: 'TF5012', name: 'ESTRUCTURA Y FUNCIÓN DEL CUERPO HUMANO', credits: 4, cycle: 1, prereqs: [] },
        // Segundo Año
        { code: 'AC4021', name: 'ESTILO DE VIDA, SALUD Y MEDIO AMBIENTE', credits: 4, cycle: 2, prereqs: [] },
        { code: 'AC4022', name: 'INGLÉS II', credits: 2, cycle: 2, prereqs: ['AC4012'] },
        { code: 'EN7021', name: 'SISTEMA MUSCULOESQUELÉTICO', credits: 3, cycle: 2, prereqs: ['TF5012'] },
        { code: 'EN7022', name: 'SISTEMA NERVIOSO Y ENDOCRINO', credits: 5, cycle: 2, prereqs: ['TF5012'] },
        { code: 'EN7023', name: 'PRÁCTICAS DE ENFERMERÍA II', credits: 5, cycle: 2, prereqs: ['EN7012'] },
        { code: 'ND4021', name: 'MECANISMO DE AGRESIÓN Y DEFENSA I', credits: 4, cycle: 2, prereqs: ['EN7011'] },
        // Tercer Año
        { code: 'EN7031', name: 'SISTEMA CARDIORESPIRATORIO', credits: 5, cycle: 3, prereqs: [] },
        { code: 'EN7032', name: 'SISTEMA TEGUMENTARIO', credits: 3, cycle: 3, prereqs: [] },
        { code: 'EN7033', name: 'PRÁCTICAS DE ENFERMERÍA III', credits: 5, cycle: 3, prereqs: ['EN7023'] },
        { code: 'EN7034', name: 'BASES DE LA TERAPEÚTICA FARMACOLÓGICA', credits: 4, cycle: 3, prereqs: [] },
        { code: 'ND4032', name: 'MECANISMOS DE AGRESIÓN Y DEFENSA II', credits: 4, cycle: 3, prereqs: ['ND4021'] },
        // Cuarto Año
        { code: 'AC4041', name: 'SALUD PÚBLICA Y SISTEMAS DE SALUD', credits: 5, cycle: 4, prereqs: ['AC4021'] },
        { code: 'EN7041', name: 'SISTEMA URINARIO Y REPRODUCTIVO', credits: 4, cycle: 4, prereqs: ['EN7031'] },
        { code: 'EN7042', name: 'SISTEMA DIGESTIVO', credits: 4, cycle: 4, prereqs: ['EN7032'] },
        { code: 'EN7043', name: 'MECANISMO DE AGRESIÓN Y DEFENSA III', credits: 4, cycle: 4, prereqs: ['ND4032'] },
        { code: 'EN7044', name: 'PRÁCTICAS DE ENFERMERÍA IV', credits: 5, cycle: 4, prereqs: ['EN7033'] },
        // Quinto Año
        { code: 'AC4051', name: 'PREVENCIÓN Y PROMOCIÓN DE LA SALUD', credits: 5, cycle: 5, prereqs: ['AC4041'] },
        { code: 'EN7051', name: 'SALUD DEL NIÑO Y ADOLESCENTE', credits: 7, cycle: 5, prereqs: ['EN7044'] },
        { code: 'EN7052', name: 'SALUD DE LA MUJER Y NEONATO', credits: 7, cycle: 5, prereqs: ['EN7044'] },
        { code: 'ELC01', name: 'ELECTIVO I', credits: 3, cycle: 5, prereqs: [] },
        // Sexto Año
        { code: 'AC4061', name: 'CIENCIA Y DESCUBRIMIENTO', credits: 6, cycle: 6, prereqs: [] },
        { code: 'EN7061', name: 'GESTIÓN CLÍNICA Y HOSPITALARIA', credits: 4, cycle: 6, prereqs: ['EN7051'] },
        { code: 'EN7062', name: 'SALUD DEL ADULTO', credits: 4, cycle: 6, prereqs: ['EN7052'] },
        { code: 'ELC02', name: 'ELECTIVO II', credits: 3, cycle: 6, prereqs: [] },
        // Séptimo Año
        { code: 'EN7071', name: 'SALUD DEL ADULTO MAYOR', credits: 7, cycle: 7, prereqs: ['EN7062'] },
        { code: 'EN7072', name: 'SALUD COMUNITARIA Y FAMILIAR', credits: 5, cycle: 7, prereqs: ['EN7061'] },
        { code: 'AC4063', name: 'TENDENCIAS GLOBALES EN SALUD', credits: 3, cycle: 7, prereqs: [] },
        { code: 'ELC03', name: 'ELECTIVO III', credits: 3, cycle: 7, prereqs: [] },
        // Octavo Año
        { code: 'EN7082', name: 'SALUD MENTAL', credits: 4, cycle: 8, prereqs: ['EN7072'] },
        { code: 'EN7083', name: 'CUIDADOS PALIATIVOS Y DEL FIN DE LA VIDA', credits: 4, cycle: 8, prereqs: ['AC4051'] },
        { code: 'EN7084', name: 'URGENCIAS Y EMERGENCIAS', credits: 5, cycle: 8, prereqs: ['EN7071'] },
        { code: 'AC4064', name: 'PROYECTOS DE INTERVENCIÓN EN SALUD', credits: 3, cycle: 8, prereqs: [] },
        // Noveno Año
        { code: 'EN7091', name: 'PRÁCTICAS PRE-PROFESIONALES I', credits: 14, cycle: 9, prereqs: ['AC4011', 'AC4012', 'AC4021', 'AC4022', 'AC4041', 'AC4051', 'AC4061', 'ELC01', 'ELC02', 'ELC03', 'EN7011', 'EN7012', 'EN7021', 'EN7022', 'EN7023', 'EN7031', 'EN7032', 'EN7033', 'EN7041', 'EN7042', 'EN7043', 'EN7044', 'EN7051', 'EN7052', 'EN7061', 'EN7062', 'EN7071', 'EN7072', 'EN7082', 'EN7083', 'EN7084', 'ND4021', 'ND4032', 'TF5012'] },
        { code: 'EN7092', name: 'SEMINARIOS DE INTEGRACIÓN CLÍNICA I', credits: 1, cycle: 9, prereqs: ['EN7082'] }, // Hay una errata en el prompt, se asume EN7082 en lugar de EN7081
        { code: 'EN7093', name: 'SEMINARIO DE INVESTIGACIÓN', credits: 3, cycle: 9, prereqs: ['AC4061'] },
        // Décimo Año
        { code: 'EN7101', name: 'PRÁCTICAS PRE-PROFESIONALES II', credits: 14, cycle: 10, prereqs: ['EN7091'] },
        { code: 'EN7102', name: 'SEMINARIOS DE INTEGRACIÓN CLÍNICA II', credits: 1, cycle: 10, prereqs: ['EN7092'] },
        { code: 'EN7103', name: 'TRABAJO DE INVESTIGACIÓN', credits: 3, cycle: 10, prereqs: ['EN7093'] },
    ];

    const electivesData = [
        { code: 'AC4E01', name: 'EDUCACIÓN, DERECHOS Y AUTONOMÍA DE LAS PERSONAS CON DISCAPACIDAD', credits: 2, prereqs: [] },
        { code: 'LC5E01', name: 'SALUD AMBIENTAL Y URBANA', credits: 3, prereqs: [] },
        { code: 'MH3E01', name: 'DETERMINANTES SOCIALES DE SALUD Y CONDUCTAS DE SALUD', credits: 3, prereqs: [] },
        { code: 'MH3E02', name: 'ANTROPOLOGÍA MÉDICA: CULTURA Y SALUD', credits: 3, prereqs: [] },
        { code: 'ND4E01', name: 'LA DIETA OCCIDENTAL', credits: 3, prereqs: [] },
        { code: 'OD5E01', name: 'MÉTODOS DE INVESTIGACIÓN PARA PROFESIONALES DE SALUD', credits: 3, prereqs: [] },
        { code: 'PS4E01', name: 'MANEJO DEL ÉSTRES PARA EL BIENESTAR', credits: 3, prereqs: [] },
        { code: 'PS4E02', name: 'FUNDAMENTOS DEL BIENESTAR', credits: 3, prereqs: [] },
        { code: 'TF5E01', name: 'IMPACTO DE LA ACTIVIDAD FÍSICA EN LA SALUD Y EL BIENESTAR', credits: 3, prereqs: [] }
    ];

    let approvedCourses = JSON.parse(localStorage.getItem('approvedCourses')) || {};
    let selectedElectives = JSON.parse(localStorage.getItem('selectedElectives')) || [];
    const modeToggleBtn = document.getElementById('mode-toggle');

    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0) + (selectedElectives.length * 3); // 3 creditos por electivo
    const totalElectiveCredits = 3 * 3; // 3 electivos de 3 creditos cada uno.

    document.getElementById('total-credits').textContent = totalCredits + totalElectiveCredits;

    function renderCourses() {
        // Limpiar contenedores
        document.querySelectorAll('.course-container').forEach(container => container.innerHTML = '');

        // Renderizar cursos de la malla
        courses.forEach(course => {
            const container = document.querySelector(`.cycle:nth-child(${course.cycle % 2 === 0 ? 2 : 1}) .course-container`);
            const isApproved = approvedCourses[course.code];
            const arePrereqsMet = course.prereqs.every(prereq => approvedCourses[prereq]);
            const isLocked = !arePrereqsMet && !isApproved;

            const courseDiv = document.createElement('div');
            courseDiv.className = `course ${isApproved ? 'approved' : ''} ${isLocked ? 'locked' : 'unlocked'}`;
            courseDiv.dataset.code = course.code;

            const prereqsText = course.prereqs.length > 0 ? `<p><strong>Requisitos:</strong> ${course.prereqs.join(', ')}</p>` : '';

            courseDiv.innerHTML = `
                <div class="course-info">
                    <h4>${course.code} - ${course.name}</h4>
                    <p><strong>Créditos:</strong> ${course.credits}</p>
                    ${prereqsText}
                </div>
                <button class="${isLocked ? 'locked' : ''}">${isApproved ? 'Desaprobar' : 'Aprobar'}</button>
            `;

            courseDiv.querySelector('button').addEventListener('click', () => {
                if (isApproved) {
                    toggleCourseApproval(course.code, false);
                } else if (!isLocked) {
                    toggleCourseApproval(course.code, true);
                }
            });

            container.appendChild(courseDiv);
        });

        // Renderizar electivos seleccionados
        const electiveContainer = document.querySelector('.elective-container');
        selectedElectives.forEach(electiveCode => {
            const elective = electivesData.find(e => e.code === electiveCode);
            if (!elective) return;
            const isApproved = approvedCourses[elective.code];

            const electiveDiv = document.createElement('div');
            electiveDiv.className = `course elective-course ${isApproved ? 'approved' : 'unlocked'}`;
            electiveDiv.dataset.code = elective.code;
            
            electiveDiv.innerHTML = `
                <div class="course-info">
                    <h4>${elective.code} - ${elective.name}</h4>
                    <p><strong>Créditos:</strong> ${elective.credits}</p>
                </div>
                <button>${isApproved ? 'Desaprobar' : 'Aprobar'}</button>
            `;

            electiveDiv.querySelector('button').addEventListener('click', () => {
                toggleCourseApproval(elective.code, !isApproved);
            });

            electiveContainer.appendChild(electiveDiv);
        });

        updateCreditCounter();
    }

    function toggleCourseApproval(courseCode, approve) {
        if (approve) {
            approvedCourses[courseCode] = true;
        } else {
            delete approvedCourses[courseCode];
        }
        localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
        renderCourses();
    }

    function updateCreditCounter() {
        let approvedCredits = 0;
        courses.concat(electivesData).forEach(course => {
            if (approvedCourses[course.code]) {
                approvedCredits += course.credits;
            }
        });

        document.getElementById('approved-credits').textContent = approvedCredits;
    }

    // Llenar el dropdown de electivos
    const electiveSelector = document.getElementById('elective-selector');
    electivesData.forEach(elective => {
        if (!selectedElectives.includes(elective.code)) {
            const option = document.createElement('option');
            option.value = elective.code;
            option.textContent = `${elective.code} - ${elective.name} (${elective.credits} créditos)`;
            electiveSelector.appendChild(option);
        }
    });

    electiveSelector.addEventListener('change', (e) => {
        const selectedCode = e.target.value;
        if (selectedCode && !selectedElectives.includes(selectedCode)) {
            if (selectedElectives.length < 3) {
                selectedElectives.push(selectedCode);
                localStorage.setItem('selectedElectives', JSON.stringify(selectedElectives));
                renderCourses();
                // Limpiar el selector para que no aparezca el electivo ya seleccionado
                const option = electiveSelector.querySelector(`option[value="${selectedCode}"]`);
                if(option) option.remove();
                electiveSelector.value = '';
            } else {
                alert('Ya has seleccionado el máximo de 3 cursos electivos.');
                electiveSelector.value = '';
            }
        }
    });

    // Manejar el modo oscuro/claro
    const currentMode = localStorage.getItem('theme') || 'light-mode';
    document.body.className = currentMode;
    modeToggleBtn.textContent = currentMode === 'light-mode' ? 'Modo Oscuro' : 'Modo Claro';

    modeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const newMode = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', newMode);
        modeToggleBtn.textContent = newMode === 'light-mode' ? 'Modo Oscuro' : 'Modo Claro';
    });

    renderCourses();
});
                                  
