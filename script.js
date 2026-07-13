// ================================================================
//  DATOS DE LOS 8 COMPONENTES Y SUS SUBTEMAS (CON RUTAS A MARKDOWN)
// ================================================================
const componentesData = [
    {
        id: 0,
        nombre: '2. Protección Ambiental',
        icono: 'fa-leaf',
        color: '#34c1ecff',
        rgb: '52,193,236',
        subtemas: [
            { nombre: 'Ecología Sin Ecologistas Verdes', icono: 'fa-leaf', file: 'content/Componente 2. Protección Ambiental/Comp_de_Int_Sis_29_21_Ecologia_Sin_Ecologistas_Verdes.md' },
            { nombre: 'Conservación es la Palabra Clave', icono: 'fa-shield-halved', file: 'content/Componente 2. Protección Ambiental/Comp_de_Int_Sis_30_22_Conservacion_es_la_palabra_clave.md' },
            { nombre: 'Las Marchas No Devuelven la Vida', icono: 'fa-megaphone', file: 'content/Componente 2. Protección Ambiental/Comp_de_Int_Sis_31_23_Las_marchas_no_devuelven_la_vida.md' },
            { nombre: 'Tomar Distancia es Acción Benéfica', icono: 'fa-hand-holding-heart', file: 'content/Componente 2. Protección Ambiental/Comp_de_Int_Sis_32_24_Tomar_distancia_es_accion_benefica.md' },
            { nombre: 'Las Variables de Energías Renovables', icono: 'fa-solar-panel', file: 'content/Componente 2. Protección Ambiental/Comp_de_Int_Sis_33_25_Las_variables_de_Energias_Renovables.md' },
            { nombre: 'Deberes para Ganar Derechos', icono: 'fa-balance-scale', file: 'content/Componente 2. Protección Ambiental/Comp_de_Int_Sis_34_26_Deberes_para_ganar_derechos.md' },
            { nombre: 'El Encierro Divino', icono: 'fa-temple-hindu', file: 'content/Componente 2. Protección Ambiental/Comp_de_Int_Sis_35_27_El_Encierro_Divino_que_agradecemos_cada_dia.md' },
            { nombre: 'Dinamica de Conciencia Social', icono: 'fa-brain', file: 'content/Componente 2. Protección Ambiental/Comp_de_Int_Sis_36_28_Dinamica_de_Conciencia_Social.md' },
            { nombre: 'Derechos de las Mujeres', icono: 'fa-venus', file: 'content/Componente 2. Protección Ambiental/Comp_de_Int_Sis_37_29_Derechos_de_las_mujeres.md' }
        ]
    },
    {
        id: 1,
        nombre: '3. Inclusión Social',
        icono: 'fa-users',
        color: '#f0b4f0ff',
        rgb: '240,180,240',
        subtemas: [
            { nombre: 'Misión y Compromiso', icono: 'fa-bullseye', file: 'content/Componente 3. Inclusión Social/Comp_de_Int_Sis_39_31_Mision_y_Compromiso.md' },
            { nombre: 'Exclusión Social', icono: 'fa-user-slash', file: 'content/Componente 3. Inclusión Social/Comp_de_Int_Sis_40_32_Exclusion_social.md' },
            { nombre: 'Regionalismo Radical', icono: 'fa-flag', file: 'content/Componente 3. Inclusión Social/Comp_de_Int_Sis_41_33_Regionalismo_radical.md' },
            { nombre: 'El Papel de Maestros y Religiosos', icono: 'fa-graduation-cap', file: 'content/Componente 3. Inclusión Social/Comp_de_Int_Sis_42_34_El_papel_de_maestros_y_religiosos.md' },
            { nombre: 'División Social por Minorías', icono: 'fa-users-rays', file: 'content/Componente 3. Inclusión Social/Comp_de_Int_Sis_43_35_Division_social_por_minorias.md' },
            { nombre: 'Discurso de Odio', icono: 'fa-heart-crack', file: 'content/Componente 3. Inclusión Social/Comp_de_Int_Sis_44_36_Discurso_de_odio.md' },
            { nombre: 'El Primer Paso a la Hermandad', icono: 'fa-handshake', file: 'content/Componente 3. Inclusión Social/Comp_de_Int_Sis_45_37_El_primer_paso_a_la_Hermandad.md' }
        ]
    },
    {
        id: 2,
        nombre: '4. Hermandad Ancestral',
        icono: 'fa-hand-holding-heart',
        color: '#ee9984ff',
        rgb: '238,153,132',
        subtemas: [
            { nombre: 'Hermandad Ancestral', icono: 'fa-scroll', file: 'content/Componente 4. Hermandad Ancestral/Comp_de_Int_Sis_47_41_Hermandad_Ancestral.md' },
            { nombre: 'Turismo Relacionado a la Hermandad', icono: 'fa-umbrella-beach', file: 'content/Componente 4. Hermandad Ancestral/Comp_de_Int_Sis_48_42_Turismo_relacionado_a_la_hermandad.md' },
            { nombre: 'Viajar es una Escuela', icono: 'fa-route', file: 'content/Componente 4. Hermandad Ancestral/Comp_de_Int_Sis_49_43_Viajar_es_una_escuela.md' },
            { nombre: 'La Hermandad Religiosa', icono: 'fa-place-of-worship', file: 'content/Componente 4. Hermandad Ancestral/Comp_de_Int_Sis_50_44_La_hermandad_religiosa.md' },
            { nombre: 'Adoctrinamiento Estructural', icono: 'fa-book-journal-whills', file: 'content/Componente 4. Hermandad Ancestral/Comp_de_Int_Sis_51_45_Adoctrinamiento_estructural.md' },
            { nombre: 'Intercambio Cultural', icono: 'fa-comments', file: 'content/Componente 4. Hermandad Ancestral/Comp_de_Int_Sis_52_46_Intercambio_Cultural_de_Conocimientos_Adquiridos.md' },
            { nombre: 'La Verdadera Educación Superior', icono: 'fa-graduation-cap', file: 'content/Componente 4. Hermandad Ancestral/Comp_de_Int_Sis_53_47_La_Verdadera_Educacion_Superior.md' },
            { nombre: 'La Información de los Medios', icono: 'fa-newspaper', file: 'content/Componente 4. Hermandad Ancestral/Comp_de_Int_Sis_54_48_La_informacion_de_los_medios_publicos.md' },
            { nombre: 'Animales de Historias', icono: 'fa-dragon', file: 'content/Componente 4. Hermandad Ancestral/Comp_de_Int_Sis_55_49_Animales_de_historias.md' },
            { nombre: 'Empate de Odios y Resentimientos', icono: 'fa-hand-fist', file: 'content/Componente 4. Hermandad Ancestral/Comp_de_Int_Sis_56_410_Empate_de_odios_y_resentimientos.md' }
        ]
    },
    {
        id: 3,
        nombre: '5. Emprendimientos Sociales',
        icono: 'fa-handshake',
        color: '#a0cbccff',
        rgb: '160,203,204',
        subtemas: [
            { nombre: 'Educación Superior que Crea Empresas', icono: 'fa-building-columns', file: 'content/Componente 5. Emprendimientos Sociales/Comp_de_Int_Sis_58_51_Educacion_superior_que_crea_empresas.md' },
            { nombre: 'Red de Conocimiento', icono: 'fa-network-wired', file: 'content/Componente 5. Emprendimientos Sociales/Comp_de_Int_Sis_59_52_Red_de_conocimiento.md' },
            { nombre: 'Alimentación en las Regiones', icono: 'fa-apple-whole', file: 'content/Componente 5. Emprendimientos Sociales/Comp_de_Int_Sis_60_53_Alimentacion_en_las_regiones_y_prosperidad_global.md' },
            { nombre: 'Los Robots del Futuro', icono: 'fa-robot', file: 'content/Componente 5. Emprendimientos Sociales/Comp_de_Int_Sis_61_54_Los_robots_del_futuro.md' },
            { nombre: 'Emprendimiento Social', icono: 'fa-lightbulb', file: 'content/Componente 5. Emprendimientos Sociales/Comp_de_Int_Sis_62_55_Emprendimiento_social.md' },
            { nombre: 'Articulación del Comercio', icono: 'fa-scale-balanced', file: 'content/Componente 5. Emprendimientos Sociales/Comp_de_Int_Sis_63_56_Articulacion_del_comercio.md' },
            { nombre: 'Emprendimiento como Puente', icono: 'fa-bridge-water', file: 'content/Componente 5. Emprendimientos Sociales/Comp_de_Int_Sis_64_57_Emprendimiento_como_puente_que_une_sectores_sociales.md' },
            { nombre: 'Modelos Organizacionales', icono: 'fa-building', file: 'content/Componente 5. Emprendimientos Sociales/Comp_de_Int_Sis_65_58_Modelos_organizacionales_en_barrios_con_problematicas_sociales.md' },
            { nombre: 'La Voz de los Jóvenes', icono: 'fa-child-reaching', file: 'content/Componente 5. Emprendimientos Sociales/Comp_de_Int_Sis_66_59_La_voz_de_los_jovenes.md' }
        ]
    },
    {
        id: 4,
        nombre: '6. Agro Industria',
        icono: 'fa-seedling',
        color: '#3dc77bff',
        rgb: '61,199,123',
        subtemas: [
            { nombre: 'Componente Agro Industria', icono: 'fa-seedling', file: 'content/Componente 6. Agro Industria/Comp_de_Int_Sis_68_61_Componente_Agro_Industria.md' },
            { nombre: 'Determinación y Responsabilidad', icono: 'fa-check-double', file: 'content/Componente 6. Agro Industria/Comp_de_Int_Sis_69_62_Determinacion_y_responsabilidad.md' },
            { nombre: 'Quienes Dan Luz al Mundo', icono: 'fa-lightbulb', file: 'content/Componente 6. Agro Industria/Comp_de_Int_Sis_70_63_Quienes_dan_luz_al_mundo.md' },
            { nombre: 'Ideas Gigantes', icono: 'fa-brain', file: 'content/Componente 6. Agro Industria/Comp_de_Int_Sis_71_64_Ideas_gigantes_que_salgan_del_espiritu.md' },
            { nombre: 'Esquema de Pensamiento Circular', icono: 'fa-arrows-rotate', file: 'content/Componente 6. Agro Industria/Comp_de_Int_Sis_72_65_Esquema_de_pensamiento_circular.md' },
            { nombre: 'Cuidar el Bolsillo', icono: 'fa-wallet', file: 'content/Componente 6. Agro Industria/Comp_de_Int_Sis_73_66_Cuidar_el_bolsillo_de_las_personas.md' },
            { nombre: 'Brecha Académica', icono: 'fa-graduation-cap', file: 'content/Componente 6. Agro Industria/Comp_de_Int_Sis_74_67_Brecha_academica.md' },
            { nombre: 'Convergencia de Ecosistemas', icono: 'fa-tree', file: 'content/Componente 6. Agro Industria/Comp_de_Int_Sis_75_68_La_convergencia_de_ecosistemas_comerciales.md' },
            { nombre: 'Cosmética o Estudio', icono: 'fa-spa', file: 'content/Componente 6. Agro Industria/Comp_de_Int_Sis_76_69_Cosmetica_o_estudio_sobre_productos_derivados.md' },
            { nombre: 'Farmacéutica', icono: 'fa-pills', file: 'content/Componente 6. Agro Industria/Comp_de_Int_Sis_77_610_Farmaceutica_para_salvar_vidas_yo_propagar_malestares.md' },
            { nombre: 'La Mega Industria', icono: 'fa-industry', file: 'content/Componente 6. Agro Industria/Comp_de_Int_Sis_78_611_La_mega_industria_de_la_vida_y_la_muerte.md' }
        ]
    },
    {
        id: 5,
        nombre: '7. Hostal Gastronomía',
        icono: 'fa-utensils',
        color: '#ebdf9eff',
        rgb: '235,223,158',
        subtemas: [
            { nombre: 'Amor que Fluye e Influye', icono: 'fa-heart', file: 'content/Componente 7. Hostal Gastronomía/Comp_de_Int_Sis_80_71_Amor_que_fluye_e_influye.md' },
            { nombre: 'Información Nutricional', icono: 'fa-apple-whole', file: 'content/Componente 7. Hostal Gastronomía/Comp_de_Int_Sis_81_72_Informacion_nutricional.md' },
            { nombre: 'Reconocimiento Individual', icono: 'fa-user-tie', file: 'content/Componente 7. Hostal Gastronomía/Comp_de_Int_Sis_82_73_Reconocimiento_individual.md' },
            { nombre: 'Información Digital Sin Estafas', icono: 'fa-shield-halved', file: 'content/Componente 7. Hostal Gastronomía/Comp_de_Int_Sis_83_74_Informacion_digital_sin_estafas.md' },
            { nombre: 'Seguridad Vial y Logística', icono: 'fa-car', file: 'content/Componente 7. Hostal Gastronomía/Comp_de_Int_Sis_84_75_Seguridad_vial_y_logistica_de_turismo.md' },
            { nombre: 'Expediciones Turísticas', icono: 'fa-hiking', file: 'content/Componente 7. Hostal Gastronomía/Comp_de_Int_Sis_85_76_Expediciones_turisticas.md' },
            { nombre: 'Diagnóstico Sectorial', icono: 'fa-stethoscope', file: 'content/Componente 7. Hostal Gastronomía/Comp_de_Int_Sis_86_77_Diagnostico_sectorial.md' },
            { nombre: 'Planeta Museo', icono: 'fa-landmark', file: 'content/Componente 7. Hostal Gastronomía/Comp_de_Int_Sis_87_78_Planeta_Museo.md' },
            { nombre: 'Química Interna Balanceada', icono: 'fa-flask', file: 'content/Componente 7. Hostal Gastronomía/Comp_de_Int_Sis_88_79_Quimica_interna_balanceada.md' },
            { nombre: 'La Otra Especie Humana', icono: 'fa-user-secret', file: 'content/Componente 7. Hostal Gastronomía/Comp_de_Int_Sis_89_710_La_otra_especie_humana_fuera_de_control.md' }
        ]
    },
    {
        id: 6,
        nombre: '8. Territorio Ancestral',
        icono: 'fa-map-marked-alt',
        color: '#82a3fdff',
        rgb: '130,163,253',
        subtemas: [
            { nombre: 'Anticipo a la Presentación', icono: 'fa-file-lines', file: 'content/Componente 8. Territorio Ancestral/Comp_de_Int_Sis_01_Anticipo_a_la_presentacion.md' },
            { nombre: 'Presentación a la Simulación', icono: 'fa-slideshare', file: 'content/Componente 8. Territorio Ancestral/Comp_de_Int_Sis_02_Presentacion_a_la_simulacion_de_un_proyecto_basado_en_los_principios_de_los_Comp.md' },
            { nombre: 'Diez Preguntas', icono: 'fa-circle-question', file: 'content/Componente 8. Territorio Ancestral/Comp_de_Int_Sis_03_Diez_preguntas_que_surgieron_del_dialogo_con_la_comunidad_SIMULACION_DE_PAUTAS_P.md' },
            { nombre: 'Desarrollo del Plan Teleférico', icono: 'fa-cable-car', file: 'content/Componente 8. Territorio Ancestral/Comp_de_Int_Sis_04_Desarrollo_del_Plan_Teleferico_Territorio_Panche.md' },
            { nombre: 'Las Necesidades de la Población', icono: 'fa-users', file: 'content/Componente 8. Territorio Ancestral/Comp_de_Int_Sis_05_Las_necesidades_o_problematicas_de_la_poblacion.md' },
            { nombre: 'La Cultura como Intercambio', icono: 'fa-comments', file: 'content/Componente 8. Territorio Ancestral/Comp_de_Int_Sis_06_La_Cultura_como_Intercambio_de_Conocimientos.md' },
            { nombre: 'La Escuela de la Educación', icono: 'fa-school', file: 'content/Componente 8. Territorio Ancestral/Comp_de_Int_Sis_07_La_Escuela_de_la_Educacion.md' },
            { nombre: 'La Ambición Rompe el Saco', icono: 'fa-hand-holding-dollar', file: 'content/Componente 8. Territorio Ancestral/Comp_de_Int_Sis_08_La_Ambicion_Rompe_el_Saco.md' },
            { nombre: 'Los Componentes en el Orden', icono: 'fa-list-ol', file: 'content/Componente 8. Territorio Ancestral/Comp_de_Int_Sis_09_Los_Componentes_de_Integracion_Sistemica_en_el_Orden_Adecuado.md' },
            { nombre: 'Tratar las Carencias', icono: 'fa-heart-pulse', file: 'content/Componente 8. Territorio Ancestral/Comp_de_Int_Sis_10_Tratar_las_carencias_por_medio_de_los_Componentes.md' },
            { nombre: 'El Tramo y la Ubicación', icono: 'fa-location-dot', file: 'content/Componente 8. Territorio Ancestral/Comp_de_Int_Sis_11_El_Tramo_y_la_Ubicacion_Adecuada.md' },
            { nombre: 'En Relación al Turismo', icono: 'fa-umbrella-beach', file: 'content/Componente 8. Territorio Ancestral/Comp_de_Int_Sis_12_En_relacion_al_Turismo_Responsable.md' },
            { nombre: 'Lo que Garantiza la Articulación', icono: 'fa-link', file: 'content/Componente 8. Territorio Ancestral/Comp_de_Int_Sis_13_Lo_que_garantiza_la_Articulacion_Regional.md' },
            { nombre: 'Cierre del Ciclo', icono: 'fa-circle-xmark', file: 'content/Componente 8. Territorio Ancestral/Comp_de_Int_Sis_91_Cierre_del_ciclo_anterior_e_inicio_del_nuevo_Eon.md' }
        ]
    },
    {
        id: 7,
        nombre: '1. Cultura y Turismo',
        icono: 'fa-umbrella-beach',
        color: '#faf05eff',
        rgb: '250,240,94',
        subtemas: [
            { nombre: 'Interrelación Cultural', icono: 'fa-globe-americas', file: 'content/Componente 1. Cultura y Turismo/Comp_de_Int_Sis_15_11_Interrelacion_Cultural.md' },
            { nombre: 'Convergencia Histórica', icono: 'fa-hourglass-half', file: 'content/Componente 1. Cultura y Turismo/Comp_de_Int_Sis_16_12_Convergencia_Historica.md' },
            { nombre: 'Complementariedad Educacional', icono: 'fa-graduation-cap', file: 'content/Componente 1. Cultura y Turismo/Comp_de_Int_Sis_17_13_Complementariedad_Educacional.md' },
            { nombre: 'Post-Medievalismo', icono: 'fa-castle', file: 'content/Componente 1. Cultura y Turismo/Comp_de_Int_Sis_18_14_Post-Medievalismo.md' },
            { nombre: 'Herencia Problemática', icono: 'fa-book-journal-whills', file: 'content/Componente 1. Cultura y Turismo/Comp_de_Int_Sis_19_15_Herencia_Problematica.md' },
            { nombre: 'Requisitos de Derecho al Grado', icono: 'fa-graduation-cap', file: 'content/Componente 1. Cultura y Turismo/Comp_de_Int_Sis_20_16_Requisitos_de_derecho_al_grado.md' },
            { nombre: 'Ataque Psiquiátrico', icono: 'fa-brain', file: 'content/Componente 1. Cultura y Turismo/Comp_de_Int_Sis_21_17_Ataque_Psiquiatrico.md' },
            { nombre: 'Género y Drenaje Sexual', icono: 'fa-venus-mars', file: 'content/Componente 1. Cultura y Turismo/Comp_de_Int_Sis_22_18_Genero_y_Drenaje_Sexual.md' },
            { nombre: 'Los Muertos Vivientes', icono: 'fa-skull', file: 'content/Componente 1. Cultura y Turismo/Comp_de_Int_Sis_23_19_Los_Muertos_Vivientes.md' },
            { nombre: 'Medicina Holística', icono: 'fa-heart-pulse', file: 'content/Componente 1. Cultura y Turismo/Comp_de_Int_Sis_24_110_Medicina_Holista_y_Alimentacion_Preventiva.md' },
            { nombre: 'La Cultura de la Pobreza', icono: 'fa-hand-holding-heart', file: 'content/Componente 1. Cultura y Turismo/Comp_de_Int_Sis_25_111_La_Cultura_de_la_Pobreza.md' },
            { nombre: 'La Cárcel es un Lujo', icono: 'fa-lock', file: 'content/Componente 1. Cultura y Turismo/Comp_de_Int_Sis_26_112_La_Carcel_es_un_Lujo.md' },
            { nombre: 'Los Dioses Extranjeros', icono: 'fa-temple-hindu', file: 'content/Componente 1. Cultura y Turismo/Comp_de_Int_Sis_27_113_Los_Dioses_Extranjeros_y_Los_Dioses_Desterrados.md' }
        ]
    }
];

// ================================================================
//  REFERENCIAS DOM
// ================================================================
const circleMap = document.getElementById('circleMap');
const circleMapWrapper = document.getElementById('circleMapWrapper');
const lightBeam = document.querySelector('.light-beam');
const svgEl = document.getElementById('svgConnectors');
const centerTitle = document.getElementById('centerTitle');
const modalElement = document.getElementById('componentModal');
const modalContent = document.getElementById('modalContent');
const modalAccentBar = document.getElementById('modalAccentBar');
const modalHeaderIcon = document.getElementById('modalHeaderIcon');
const modalTitle = document.getElementById('modalTitle');
const subtemasButtons = document.getElementById('subtemasButtons');

const contentModalElement = document.getElementById('contentModal');
const contentModalContent = document.getElementById('contentModalContent');
const contentModalAccentBar = document.getElementById('contentModalAccentBar');
const contentModalHeaderIcon = document.getElementById('contentModalHeaderIcon');
const contentModalTitle = document.getElementById('contentModalTitle');
const contentText = document.getElementById('contentText');

let modalInstance = new bootstrap.Modal(modalElement);
let contentModalInstance = new bootstrap.Modal(contentModalElement);
const allButtons = [];
const allLines = [];

// AbortError benigno: play() interrumpido por pause() (TTS del navegador, extensiones, etc.)
window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    if (reason?.name === 'AbortError') {
        const msg = String(reason.message || '');
        if (msg.includes('play()') || msg.includes('play request')) {
            event.preventDefault();
        }
    }
});

function pausarMediaEn(contenedor) {
    if (!contenedor) return;
    contenedor.querySelectorAll('audio, video').forEach((media) => {
        media.pause();
    });
}

function enlazarMediaSegura(contenedor) {
    if (!contenedor) return;
    contenedor.querySelectorAll('audio, video').forEach((media) => {
        media.removeAttribute('autoplay');
        media.autoplay = false;
        const playOriginal = media.play.bind(media);
        media.play = function () {
            const intento = playOriginal();
            if (intento && typeof intento.catch === 'function') {
                intento.catch((err) => {
                    if (err.name !== 'AbortError') {
                        console.warn('Reproducción de media:', err);
                    }
                });
            }
            return intento;
        };
    });
}

function establecerContenidoModal(html) {
    pausarMediaEn(contentText);
    contentText.innerHTML = html;
    enlazarMediaSegura(contentText);
}

// ================================================================
//  GENERAR BOTONES Y LÍNEAS CONECTORAS
// ================================================================
const NUM = componentesData.length;
const RADIUS = 42; // % del contenedor

componentesData.forEach((item, index) => {
    const angle = (index / NUM) * 360 - 90;
    const rad = (angle * Math.PI) / 180;
    const x = 50 + RADIUS * Math.cos(rad);
    const y = 50 + RADIUS * Math.sin(rad);

    // — Línea conectora SVG —
    const lineStartX = 50 + 14 * Math.cos(rad);
    const lineStartY = 50 + 14 * Math.sin(rad);
    const lineEndX = 50 + (RADIUS - 8.5) * Math.cos(rad);
    const lineEndY = 50 + (RADIUS - 8.5) * Math.sin(rad);

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', lineStartX);
    line.setAttribute('y1', lineStartY);
    line.setAttribute('x2', lineEndX);
    line.setAttribute('y2', lineEndY);
    line.classList.add('connector-line', 'entering');
    line.style.animationDelay = `${0.8 + index * 0.1}s`;
    svgEl.appendChild(line);
    allLines.push(line);

    // — Botón de componente —
    const btn = document.createElement('button');
    btn.className = 'comp-btn entering';
    btn.style.left = x + '%';
    btn.style.top = y + '%';
    btn.style.setProperty('--btn-color', item.color);
    btn.style.setProperty('--btn-rgb', item.rgb);
    btn.style.animationDelay = `${1.4 + index * 0.1}s`;
    btn.setAttribute('aria-label', item.nombre);
    btn.innerHTML = `<i class="fas ${item.icono}"></i><span>${item.nombre}</span>`;
    btn.addEventListener('click', () => abrirModal(item.id));

    // Limpiar clase de entrada al terminar la animación
    btn.addEventListener('animationend', function handler() {
        btn.classList.remove('entering');
        btn.removeEventListener('animationend', handler);
    });

    circleMap.appendChild(btn);
    allButtons.push(btn);
});

// Limpiar clase de entrada del título
centerTitle.addEventListener('animationend', function handler() {
    centerTitle.classList.remove('entering');
    centerTitle.removeEventListener('animationend', handler);
});

// ================================================================
//  BRILLO CIRCULAR SECUENCIAL
// ================================================================
let glowIdx = -1;
const GLOW_INTERVAL = 900; // ms por componente

function advanceGlow() {
    // Quitar glow del anterior
    if (glowIdx >= 0 && allButtons[glowIdx] && allLines[glowIdx]) {
        allButtons[glowIdx].classList.remove('glowing');
        allLines[glowIdx].classList.remove('glowing');
    }
    // Avanzar
    glowIdx = (glowIdx + 1) % NUM;
    // Aplicar glow al actual
    if (allButtons[glowIdx] && allLines[glowIdx]) {
        allButtons[glowIdx].classList.add('glowing');
        allLines[glowIdx].classList.add('glowing');
    }
}

// Iniciar brillo después de que aparezcan los botones
setTimeout(() => {
    advanceGlow();
    setInterval(advanceGlow, GLOW_INTERVAL);
}, 2800);

// ================================================================
//  LÓGICA DEL MODAL
// ================================================================
let subtemaFetchController = null;

function prepararContentModal(sub, comp) {
    contentModalContent.style.setProperty('--modal-accent', comp.color);
    contentModalAccentBar.style.background = comp.color;
    contentModalHeaderIcon.style.background = comp.color;
    contentModalHeaderIcon.innerHTML = `<i class="fas ${sub.icono}"></i>`;
    contentModalTitle.textContent = sub.nombre;
}

function abrirContentModalCuandoCorresponda(callback) {
    if (modalElement.classList.contains('show')) {
        modalElement.addEventListener('hidden.bs.modal', callback, { once: true });
        modalInstance.hide();
    } else {
        callback();
    }
}

// Función para cargar y abrir el modal de contenido
async function openContentModal(sub, comp) {
    if (subtemaFetchController) {
        subtemaFetchController.abort();
    }
    subtemaFetchController = new AbortController();
    const { signal } = subtemaFetchController;

    prepararContentModal(sub, comp);
    establecerContenidoModal(`
        <div class="loading-state">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Cargando contenido...</p>
        </div>
    `);

    abrirContentModalCuandoCorresponda(() => {
        contentModalInstance.show();
    });

    const encodedFilePath = encodeURI(sub.file);

    try {
        const response = await fetch(encodedFilePath, { signal });
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo (${response.status} ${response.statusText})`);
        }
        const markdownText = await response.text();
        if (signal.aborted) return;

        const htmlContent = marked.parse(markdownText);
        establecerContenidoModal(htmlContent);

        const contentModalBody = document.getElementById('contentModalBody');
        if (contentModalBody) contentModalBody.scrollTop = 0;
    } catch (error) {
        if (error.name === 'AbortError') return;

        console.error('Error loading subtema:', error);
        establecerContenidoModal(`
            <div class="error-state">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Error al cargar el contenido: ${error.message}</p>
                <p>Por favor, verifica que el archivo exista en la ruta:</p>
                <code>${sub.file}</code>
                <p style="font-size: 0.9rem; color: #999;">(Consola del navegador tiene detalles técnicos)</p>
            </div>
        `);
    }
}

let activeComponentId = null;

function abrirModal(id) {
    activeComponentId = id;
    const comp = componentesData[id];

    // Aplicar color del componente al modal
    modalContent.style.setProperty('--modal-accent', comp.color);
    modalAccentBar.style.background = comp.color;
    modalHeaderIcon.style.background = comp.color;
    modalHeaderIcon.innerHTML = `<i class="fas ${comp.icono}"></i>`;
    modalTitle.textContent = comp.nombre;

    // Generar botones de subtemas
    subtemasButtons.innerHTML = '';
    comp.subtemas.forEach((sub, idx) => {
        const btn = document.createElement('button');
        btn.className = 'subtema-btn';
        btn.innerHTML = `<i class="fas ${sub.icono}"></i>${sub.nombre}`;
        btn.addEventListener('click', () => {
            // Abrir el modal de contenido
            openContentModal(sub, comp);
        });
        subtemasButtons.appendChild(btn);
    });

    modalInstance.show();
}

// ================================================================
//  CONTROL DE PAUSA DE ANIMACIONES Y FOCO DEL MODAL (ACCESIBILIDAD)
// ================================================================
let isAnimationPaused = false;

function actualizarPausaAnimaciones() {
    const compOpen = modalElement.classList.contains('show') || document.querySelector('#componentModal.show') !== null;
    const contentOpen = contentModalElement.classList.contains('show') || document.querySelector('#contentModal.show') !== null;

    if (compOpen || contentOpen) {
        isAnimationPaused = true;
        circleMap.classList.add('animations-paused');
    } else {
        isAnimationPaused = false;
        circleMap.classList.remove('animations-paused');
    }
}

// Restaurar foco al botón de la rueda para evitar advertencias de accesibilidad (aria-hidden)
function devolverFocoRueda() {
    if (activeComponentId !== null && allButtons[activeComponentId]) {
        allButtons[activeComponentId].focus();
    }
}

// Bootstrap modal event listeners
modalElement.addEventListener('shown.bs.modal', actualizarPausaAnimaciones);
modalElement.addEventListener('hidden.bs.modal', actualizarPausaAnimaciones);
modalElement.addEventListener('hide.bs.modal', () => {
    // Solo restaurar foco a la rueda si no se está abriendo el modal de contenido inmediatamente
    setTimeout(() => {
        const contentOpen = contentModalElement.classList.contains('show') || contentModalElement.classList.contains('showing');
        if (!contentOpen) {
            devolverFocoRueda();
        }
    }, 50);
});

contentModalElement.addEventListener('shown.bs.modal', () => {
    actualizarPausaAnimaciones();
    // Poner el foco en el cuerpo del modal para permitir desplazamiento inmediato con teclado y gestos touch
    const bodyEl = document.getElementById('contentModalBody');
    if (bodyEl) {
        bodyEl.focus();
    }
});
contentModalElement.addEventListener('hidden.bs.modal', actualizarPausaAnimaciones);
contentModalElement.addEventListener('hide.bs.modal', () => {
    pausarMediaEn(contentText);
    window.speechSynthesis?.cancel();
    devolverFocoRueda();
});

// ================================================================
//  EFECTO PARALLAX CON EL MOUSE (solo dispositivos con puntero fino)
// ================================================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

if (hasFinePointer) {
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 12;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 12;
    });
}

function updateParallax() {
    if (hasFinePointer && !isAnimationPaused && !prefersReducedMotion) {
        currentX += (mouseX - currentX) * 0.06;
        currentY += (mouseY - currentY) * 0.06;
        circleMapWrapper.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    }
    requestAnimationFrame(updateParallax);
}
updateParallax();

// Reiniciar animación del haz al volver a primer plano (Safari/iOS pausa en background)
function reiniciarAnimacionHaz() {
    if (!lightBeam) return;
    lightBeam.style.animation = 'none';
    void lightBeam.offsetWidth;
    lightBeam.style.animation = '';
}

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        reiniciarAnimacionHaz();
    }
});
window.addEventListener('pageshow', (e) => {
    if (e.persisted) reiniciarAnimacionHaz();
});

// ================================================================
//  FONDO DE PARTÍCULAS (CANVAS)
// ================================================================
(function initParticles() {
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const COUNT = 60;
    const MAX_DIST = 140;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.25;
            this.vy = (Math.random() - 0.5) * 0.25;
            this.radius = Math.max(0.5, Math.random() * 2 + 0.8);
            this.baseAlpha = Math.random() * 0.2 + 0.08;
            this.alpha = this.baseAlpha;
            this.pulseSpeed = Math.random() * 0.01 + 0.005;
            this.pulseOffset = Math.random() * Math.PI * 2;
        }
        update(time) {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
            // Pulso sutil de opacidad
            this.alpha = this.baseAlpha + Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.05;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(180, 200, 230, ${Math.max(0, this.alpha)})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < COUNT; i++) {
        particles.push(new Particle());
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST) {
                    const alpha = 0.08 * (1 - dist / MAX_DIST);
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(140, 170, 210, ${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    let time = 0;
    function animate() {
        ctx.clearRect(0, 0, width, height);
        time++;

        if (!isAnimationPaused) {
            // Animación normal activa
            particles.forEach(p => {
                p.update(time);
                p.draw();
            });
            drawConnections();
        } else {
            // Renderizado estático de bajo impacto CPU/GPU cuando el modal está abierto
            particles.forEach(p => {
                p.draw();
            });
            drawConnections();
        }

        requestAnimationFrame(animate);
    }

    animate();
})();

// ================================================================
//  LÓGICA DEL INFOTICKER ROTATIVO SUPERIOR
// ================================================================
const tickerPhrases = [
    { text: "Bienvenido a los Componentes de Integración Sistémica", icon: "fa-circle-info" },
    { text: "Haz clic sobre cualquier botón para elegir un tema", icon: "fa-hand-pointer" },
    { text: "Haz clic en un tema para acceder al texto", icon: "fa-book-open" },
    { text: "Recuerda que tu aporte nos ayuda a mejorar", icon: "fa-hand-holding-heart" },
    { text: "Escríbenos al correo: <a class=\"ticker-link\" href=\"https://maat444.github.io/compendiocircular8/\" target=\"_blank\" rel=\"noopener noreferrer\">compendiocircular8@gmail.com</a>", icon: "fa-envelope" },
    { text: "¿Qué tema vas a elegir hoy?", icon: "fa-circle-question" },
    { text: "Todos los derechos reservados", icon: "fa-scale-balanced" }
];

let currentTickerIndex = 0;
const infoTickerContent = document.getElementById('infoTickerContent');

function rotateTicker() {
    if (!infoTickerContent) return;

    // 1. Agregar clase de salida hacia arriba
    infoTickerContent.classList.remove('slide-in-bottom');
    infoTickerContent.classList.add('slide-out-up');

    // 2. Esperar a que la animación termine, cambiar contenido y deslizar desde abajo
    setTimeout(() => {
        currentTickerIndex = (currentTickerIndex + 1) % tickerPhrases.length;
        const currentData = tickerPhrases[currentTickerIndex];

        // Actualizar el icono y el texto
        infoTickerContent.innerHTML = `
            <i class="fas ${currentData.icon} ticker-icon"></i>
            <span class="ticker-text">${currentData.text}</span>
        `;

        // Quitar salida y poner entrada desde abajo
        infoTickerContent.classList.remove('slide-out-up');
        infoTickerContent.classList.add('slide-in-bottom');
    }, 500); // 500ms coincide con la duración de slide-out-up
}

// Iniciar ciclo de rotación cada 4.5 segundos
if (infoTickerContent) {
    setInterval(rotateTicker, 4500);
}

