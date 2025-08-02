const ciclosData = {
    'Ciclo 1': [
        { codigo: 'AC4012', nombre: 'INGLÉS I', creditos: 3, prerequisitos: 'Ninguno' },
        { codigo: 'EN7011', nombre: 'PROCESOS BIOLÓGICOS', creditos: 6, prerequisitos: 'Ninguno' },
        { codigo: 'EN7012', nombre: 'PRÁCTICAS DE ENFERMERÍA', creditos: 5, prerequisitos: 'Ninguno' },
        { codigo: 'AC4011', nombre: 'DESARROLLO HUMANO Y SOCIAL', creditos: 4, prerequisitos: 'Ninguno' },
        { codigo: 'TF5012', nombre: 'ESTRUCTURA Y FUNCIÓN DEL CUERPO HUMANO', creditos: 4, prerequisitos: 'Ninguno' }
    ],
    'Ciclo 2': [
        { codigo: 'AC4021', nombre: 'ESTILO DE VIDA, SALUD Y MEDIO AMBIENTE', creditos: 4, prerequisitos: 'Ninguno' },
        { codigo: 'AC4022', nombre: 'INGLÉS II', creditos: 2, prerequisitos: 'AC4012' },
        { codigo: 'EN7021', nombre: 'SISTEMA MUSCULOESQUELÉTICO', creditos: 3, prerequisitos: 'TF5012' },
        { codigo: 'EN7022', nombre: 'SISTEMA NERVIOSO Y ENDOCRINO', creditos: 5, prerequisitos: 'TF5012' },
        { codigo: 'EN7023', nombre: 'PRÁCTICAS DE ENFERMERÍA II', creditos: 5, prerequisitos: 'EN7012' },
        { codigo: 'ND4021', nombre: 'MECANISMO DE AGRESIÓN Y DEFENSA I', creditos: 4, prerequisitos: 'EN7011' }
    ],
    'Ciclo 3': [
        { codigo: 'EN7031', nombre: 'SISTEMA CARDIORESPIRATORIO', creditos: 5, prerequisitos: 'Ninguno' },
        { codigo: 'EN7032', nombre: 'SISTEMA TEGUMENTARIO', creditos: 3, prerequisitos: 'Ninguno' },
        { codigo: 'EN7033', nombre: 'PRÁCTICAS DE ENFERMERÍA III', creditos: 5, prerequisitos: 'EN7023' },
        { codigo: 'EN7034', nombre: 'BASES DE LA TERAPEÚTICA FARMACOLÓGICA', creditos: 4, prerequisitos: 'Ninguno' },
        { codigo: 'ND4032', nombre: 'MECANISMOS DE AGRESIÓN Y DEFENSA II', creditos: 4, prerequisitos: 'ND4021' }
    ],
    'Ciclo 4': [
        { codigo: 'AC4041', nombre: 'SALUD PÚBLICA Y SISTEMAS DE SALUD', creditos: 5, prerequisitos: 'AC4021' },
        { codigo: 'EN7041', nombre: 'SISTEMA URINARIO Y REPRODUCTIVO', creditos: 4, prerequisitos: 'EN7031' },
        { codigo: 'EN7042', nombre: 'SISTEMA DIGESTIVO', creditos: 4, prerequisitos: 'EN7032' },
        { codigo: 'EN7043', nombre: 'MECANISMO DE AGRESIÓN Y DEFENSA III', creditos: 4, prerequisitos: 'ND4032' },
        { codigo: 'EN7044', nombre: 'PRÁCTICAS DE ENFERMERÍA IV', creditos: 5, prerequisitos: 'EN7033' }
    ],
    'Ciclo 5': [
        { codigo: 'AC4051', nombre: 'PREVENCIÓN Y PROMOCIÓN DE LA SALUD', creditos: 5, prerequisitos: 'AC4041' },
        { codigo: 'EN7051', nombre: 'SALUD DEL NIÑO Y ADOLESCENTE', creditos: 7, prerequisitos: 'EN7044' },
        { codigo: 'EN7052', nombre: 'SALUD DE LA MUJER Y NEONATO', creditos: 7, prerequisitos: 'EN7044' },
        { codigo: 'ELC01', nombre: 'ELECTIVO I', creditos: 3, prerequisitos: 'Ninguno' }
    ],
    'Ciclo 6': [
        { codigo: 'AC4061', nombre: 'CIENCIA Y DESCUBRIMIENTO', creditos: 6, prerequisitos: 'Ninguno' },
        { codigo: 'EN7061', nombre: 'GESTIÓN CLÍNICA Y HOSPITALARIA', creditos: 4, prerequisitos: 'EN7051' },
        { codigo: 'EN7062', nombre: 'SALUD DEL ADULTO', creditos: 1, prerequisitos: 'EN7052' }, // El crédito estaba vacío, lo he puesto en 1
        { codigo: 'ELC02', nombre: 'ELECTIVO II', creditos: 3, prerequisitos: 'Ninguno' }
    ],
    'Ciclo 7': [
        { codigo: 'EN7071', nombre: 'SALUD DEL ADULTO MAYOR', creditos: 7, prerequisitos: 'EN7062' },
        { codigo: 'EN7072', nombre: 'SALUD COMUNITARIA Y FAMILIAR', creditos: 5, prerequisitos: 'EN7061' },
        { codigo: 'AC4063', nombre: 'TENDENCIAS GLOBALES EN SALUD', creditos: 3, prerequisitos: 'Ninguno' },
        { codigo: 'ELC03', nombre: 'ELECTIVO III', creditos: 3, prerequisitos: 'Ninguno' }
    ],
    'Ciclo 8': [
        { codigo: 'EN7082', nombre: 'SALUD MENTAL', creditos: 4, prerequisitos: 'EN7072' },
        { codigo: 'EN7083', nombre: 'CUIDADOS PALIATIVOS Y DEL FIN DE LA VIDA', creditos: 4, prerequisitos: 'AC4051' },
        { codigo: 'EN7084', nombre: 'URGENCIAS Y EMERGENCIAS', creditos: 5, prerequisitos: 'EN7071' },
        { codigo: 'AC4064', nombre: 'PROYECTOS DE INTERVENCIÓN EN SALUD', creditos: 3, prerequisitos: 'Ninguno' }
    ],
    'Ciclo 9': [
        { codigo: 'EN7091', nombre: 'PRÁCTICAS PRE-PROFESIONALES I', creditos: 14, prerequisitos: 'Varios (ver listado)' },
        { codigo: 'EN7092', nombre: 'SEMINARIOS DE INTEGRACIÓN CLÍNICA I', creditos: 1, prerequisitos: 'EN7081' },
        { codigo: 'EN7093', nombre: 'SEMINARIO DE INVESTIGACIÓN', creditos: 3, prerequisitos: 'AC4061' }
    ],
    'Ciclo 10': [
        { codigo: 'EN7101', nombre: 'PRÁCTICAS PRE-PROFESIONALES II', creditos: 14, prerequisitos: 'EN7091' },
        { codigo: 'EN7102', nombre: 'SEMINARIOS DE INTEGRACIÓN CLÍNICA II', creditos: 1, prerequisitos: 'EN7092' },
        { codigo: 'EN7103', nombre: 'TRABAJO DE INVESTIGACIÓN', creditos: 3, prerequisitos: 'EN7093' }
    ]
};

const yearsData = {
    '2023': ['Ciclo 1', 'Ciclo 2'],
    '2024': ['Ciclo 3', 'Ciclo 4'],
    '2025': ['Ciclo 5', 'Ciclo 6'],
    '2026': ['Ciclo 7', 'Ciclo 8'],
    '2027': ['Ciclo 9', 'Ciclo 10']
};

document.getElementById('showYears').addEventListener('click', () => {
    const dataView = document.getElementById('dataView');
    dataView.innerHTML = '';
    
    // Vista horizontal de años
    const yearsHeader = document.createElement('div');
    yearsHeader.classList.add('list-header');
    Object.keys(yearsData).forEach(year => {
        const yearTitle = document.createElement('h4');
        yearTitle.textContent = year;
        yearsHeader.appendChild(yearTitle);
    });
    dataView.appendChild(yearsHeader);

    // Vista vertical de ciclos por año
    const coursesList = document.createElement('div');
    coursesList.classList.add('courses-list');
    Object.keys(yearsData).forEach(year => {
        const yearContainer = document.createElement('div');
        yearContainer.innerHTML = `<h3>${year}</h3>`;
        yearsData[year].forEach(cycleName => {
            yearContainer.innerHTML += `<h4>${cycleName}</h4>`;
            const cycleCourses = ciclosData[cycleName] || [];
            cycleCourses.forEach(curso => {
                yearContainer.innerHTML += `<p><strong>${curso.codigo}</strong>: ${curso.nombre}<br>Créditos: ${curso.creditos}<br>Pre-requisitos: ${curso.prerequisitos}</p>`;
            });
        });
        coursesList.appendChild(yearContainer);
    });
    dataView.appendChild(coursesList);

    dataView.classList.remove('cycles-active');
    dataView.classList.add('years-active');
});

document.getElementById('showCycles').addEventListener('click', () => {
    const dataView = document.getElementById('dataView');
    dataView.innerHTML = '';

    // Vista horizontal de ciclos
    const cyclesHeader = document.createElement('div');
    cyclesHeader.classList.add('list-header');
    Object.keys(ciclosData).forEach(ciclo => {
        const cycleTitle = document.createElement('h4');
        cycleTitle.textContent = ciclo;
        cyclesHeader.appendChild(cycleTitle);
    });
    dataView.appendChild(cyclesHeader);

    // Vista vertical de cursos por ciclo
    const coursesList = document.createElement('div');
    coursesList.classList.add('courses-list');
    Object.keys(ciclosData).forEach(ciclo => {
        const cycleContainer = document.createElement('div');
        cycleContainer.innerHTML = `<h3>${ciclo}</h3>`;
        const cycleCourses = ciclosData[ciclo] || [];
        cycleCourses.forEach(curso => {
            cycleContainer.innerHTML += `<p><strong>${curso.codigo}</strong>: ${curso.nombre}<br>Créditos: ${curso.creditos}<br>Pre-requisitos: ${curso.prerequisitos}</p>`;
        });
        coursesList.appendChild(cycleContainer);
    });
    dataView.appendChild(coursesList);
    
    dataView.classList.remove('years-active');
    dataView.classList.add('cycles-active');
});
