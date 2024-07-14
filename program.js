let currentSlide = 0;

const facultyContent = [
    {
        faculty: "Fakultas Ilmu Komputer",
        programs: {
            "Sistem Informasi": "Program Studi Sistem Informasi berfokus pada pengembangan sistem informasi yang efektif dan efisien untuk mendukung operasi bisnis dan organisasi.",
            "D3 Teknik Informatika": "Program Studi Teknik Informatika mengajarkan keterampilan teknis dalam pengembangan perangkat lunak, jaringan komputer, dan keamanan siber.",
            "D3 Manajemen Informatika": "Program Studi Manajemen Informatika mempersiapkan mahasiswa untuk mengelola proyek teknologi informasi dan mengembangkan solusi TI yang inovatif.",
            "Informatika" : "Program Studi Informatika, juga dikenal sebagai Ilmu Komputer, berfokus pada pengembangan perangkat lunak, algoritma, dan teori komputasi. Mahasiswa diajarkan untuk memahami cara kerja komputer dan jaringan, serta bagaimana menciptakan solusi perangkat lunak yang inovatif.",
            "Teknologi Informasi" : "Program Studi Teknologi Informasi fokus pada aplikasi praktis teknologi komputer untuk mengelola dan memproses informasi. Mahasiswa diajarkan bagaimana mengembangkan, mengimplementasikan, dan mengelola sistem informasi dalam organisasi.",
            "Teknik Komputer": "Program Studi Teknik Komputer menggabungkan elemen ilmu komputer dan teknik elektro untuk merancang dan mengembangkan perangkat keras serta perangkat lunak komputer. Mahasiswa diajarkan bagaimana mengintegrasikan dan mengoptimalkan sistem komputer."
        }
    },
    {
        faculty: "Fakultas Ekonomi dan Sosial",
        programs: {
            "Ekonomi": "Program Studi Ekonomi membahas teori dan kebijakan ekonomi serta aplikasinya dalam konteks global dan lokal.",
            "Ilmu Komunikasi": "Program Studi Manajemen menawarkan pembelajaran tentang pengelolaan organisasi, strategi bisnis, dan kepemimpinan.",
            "Akuntansi": "Program Studi Akuntansi mempersiapkan mahasiswa untuk karir di bidang akuntansi keuangan, audit, dan perpajakan.",
            "Hubungan Internasional": "Program Studi Hubungan Internasional fokus pada studi tentang interaksi antar negara, organisasi internasional, dan aktor non-negara dalam konteks politik, ekonomi, sosial, dan budaya. Mahasiswa diajarkan untuk memahami dinamika global dan mengembangkan keterampilan analisis kebijakan luar negeri dan diplomasi.",
            "Ilmu Internasional": "Program Studi Ilmu Internasional menggabungkan berbagai disiplin ilmu untuk memahami fenomena global. Ini mencakup studi tentang hubungan internasional, politik, ekonomi, budaya, dan isu-isu global lainnya. Mahasiswa diajarkan untuk mengembangkan wawasan multidisiplin dan analisis kritis terhadap isu-isu internasional.",
            "Kewirausahaan": "Program Studi Kewirausahaan fokus pada pengembangan keterampilan dan pengetahuan yang diperlukan untuk memulai, mengelola, dan mengembangkan bisnis. Mahasiswa diajarkan bagaimana mengidentifikasi peluang bisnis, merancang model bisnis, dan menerapkan strategi bisnis yang inovatif."
        }

    },
    {
        faculty: "Fakultas Sains & Teknologi",
        programs: {
            "Geografi": "Program Studi Geografi mempelajari hubungan antara manusia dan lingkungan, serta analisis ruang dan wilayah. Fokus utama adalah pada pemahaman tentang fenomena alam dan sosial di permukaan bumi dan bagaimana keduanya saling berinteraksi.",
            "Arsitektur": "Program Studi Arsitektur memfokuskan pada desain, perencanaan, dan konstruksi bangunan serta ruang yang fungsional, estetis, dan berkelanjutan. Mahasiswa diajarkan untuk memahami prinsip-prinsip desain arsitektur serta teknologi dan bahan bangunan.",
            "Perencanaan Wilayah dan Kota": "Program Studi Perencanaan Wilayah dan Kota fokus pada perencanaan, pengembangan, dan pengelolaan wilayah dan kota untuk menciptakan lingkungan yang layak huni, berkelanjutan, dan efisien. Mahasiswa diajarkan untuk merancang rencana tata ruang dan kebijakan publik yang mendukung pembangunan berkelanjutan."
        }
    },
    {
        faculty: "Pascasarjana",
        programs: {
            "Magister Informatika": "Program Magister Informatika (S2) adalah program lanjutan yang bertujuan untuk mengembangkan pengetahuan dan keterampilan mahasiswa dalam bidang informatika lebih mendalam. Program ini biasanya melibatkan penelitian dan proyek yang lebih kompleks dibandingkan dengan jenjang S1.",
            "Magister PJJ informatika": "Program Magister PJJ Informatika adalah program pendidikan pascasarjana yang diselenggarakan secara online atau jarak jauh. Program ini dirancang untuk mereka yang ingin melanjutkan studi tanpa harus meninggalkan pekerjaan atau lokasi tempat tinggal mereka.",
            "Doktoral Informatika": "Program Doktoral Informatika (S3) adalah jenjang pendidikan tertinggi di bidang informatika yang fokus pada penelitian asli dan pengembangan teori baru dalam bidang ini. Mahasiswa doktoral diharapkan dapat menghasilkan kontribusi signifikan melalui disertasi mereka."
        }
    }
];
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    updateContent();
}

function changeProgram(program) {
    const content = facultyContent[currentSlide];
    const programDetail = content.programs[program];
    document.getElementById('program-content').innerHTML = `<h4>${program}</h4><p>${programDetail}</p>`;
}

function updateContent() {
    const content = facultyContent[currentSlide];
    document.getElementById('content').innerHTML = `<h3>${content.faculty}</h3>${generateProgramList(content.programs)}`;
    changeProgram(Object.keys(content.programs)[0]);
}

function generateProgramList(programs) {
    return `<ul id="program-list">${Object.keys(programs).map(program => `<li onclick="changeProgram('${program}')">${program}</li>`).join('')}</ul>`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent(); 
});
document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector(".content");
    setTimeout(function() {
        content.classList.add("show");
    }, 100); // Memberikan sedikit jeda waktu untuk memastikan transisi terlihat
});
document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector(".");
    setTimeout(function() {
        content.classList.add("show");
    }, 100); // Memberikan sedikit jeda waktu untuk memastikan transisi terlihat
});
 
