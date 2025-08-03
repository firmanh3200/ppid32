document.addEventListener('DOMContentLoaded', () => {
    const faqData = {
        "Umum": [
            {
                question: "Apa itu Pelayanan Statistik Terpadu (PST) BPS Provinsi Jawa Barat?",
                answer: "Pelayanan Statistik Terpadu (PST) adalah unit pelayanan di BPS Provinsi Jawa Barat yang menyediakan data dan informasi statistik, konsultasi, serta rekomendasi teknis statistik kepada masyarakat, peneliti, mahasiswa, instansi pemerintah, dan swasta. Tujuannya untuk memudahkan akses terhadap data yang akurat dan relevan."
            },
            {
                question: "Bagaimana cara mengakses data statistik yang diterbitkan BPS Jawa Barat?",
                answer: "Data statistik dapat diakses melalui website resmi BPS Provinsi Jawa Barat (jabar.bps.go.id) pada menu 'Publikasi' atau 'Statistik Indikator'. Selain itu, Anda bisa datang langsung ke kantor PST BPS Provinsi Jawa Barat, atau mengajukan permintaan data melalui email/telepon."
            },
            {
                question: "Apakah ada biaya untuk mendapatkan data atau konsultasi di PST?",
                answer: "Sebagian besar data statistik dasar yang diterbitkan BPS dapat diakses secara gratis. Untuk permintaan data spesifik yang membutuhkan pengolahan lebih lanjut atau produk non-publikasi, mungkin dikenakan biaya sesuai ketentuan yang berlaku. Konsultasi statistik umumnya tidak dikenakan biaya."
            },
            {
                question: "Bolehkah saya meminta data yang sangat spesifik atau mikro data?",
                answer: "Permintaan mikro data atau data sangat spesifik dapat diajukan. Namun, persetujuan akan bergantung pada kebijakan kerahasiaan data dan ketersediaan data tersebut. Prosesnya mungkin membutuhkan pengajuan resmi dan penandatanganan pakta kerahasiaan."
            },
            {
                question: "Bagaimana cara mengajukan permohonan rekomendasi teknis statistik?",
                answer: "Permohonan rekomendasi teknis statistik dapat diajukan secara tertulis kepada Kepala BPS Provinsi Jawa Barat atau melalui portal layanan online jika tersedia. Dokumen yang diperlukan biasanya meliputi proposal penelitian/survei dan metodologi yang akan digunakan."
            },
            {
                question: "Berapa lama waktu yang dibutuhkan untuk mendapatkan data/layanan?",
                answer: "Waktu yang dibutuhkan bervariasi tergantung jenis layanan. Data publikasi umumnya langsung tersedia. Permintaan data spesifik bisa memakan waktu beberapa hari kerja, sementara rekomendasi teknis atau pengolahan data khusus bisa lebih lama, disesuaikan dengan tingkat kerumitan dan antrean layanan."
            },
            {
                question: "Apakah BPS Jawa Barat menyediakan pelatihan atau bimbingan teknis statistik?",
                answer: "Ya, BPS Provinsi Jawa Barat seringkali menyelenggarakan pelatihan atau bimbingan teknis terkait metodologi survei, pengolahan data, dan interpretasi statistik untuk instansi pemerintah atau masyarakat umum. Informasi jadwal dapat dilihat di website atau diumumkan melalui kanal resmi BPS."
            },
            {
                question: "Apa saja jam operasional PST BPS Provinsi Jawa Barat?",
                answer: "Jam operasional PST umumnya mengikuti jam kerja kantor pemerintah, yaitu Senin sampai Jumat, pukul 08.00 - 16.00 WIB, kecuali hari libur nasional. Disarankan untuk menghubungi terlebih dahulu jika ada kebutuhan khusus atau janji temu."
            },
            {
                question: "Bagaimana jika data yang saya cari tidak tersedia?",
                answer: "Jika data yang Anda cari tidak tersedia, petugas PST akan membantu mencarikan alternatif atau mengarahkan Anda ke sumber data lain yang relevan jika memungkinkan. BPS juga dapat memberikan informasi mengenai potensi ketersediaan data di masa mendatang."
            },
            {
                question: "Dimana saya bisa memberikan masukan atau keluhan terkait pelayanan PST?",
                answer: "Anda dapat memberikan masukan atau keluhan melalui kotak saran yang tersedia di kantor PST, email resmi BPS Provinsi Jawa Barat, telepon, atau melalui kanal pengaduan online yang mungkin disediakan oleh BPS."
            }
        ],
        "Perpustakaan": [
            {
                question: "Bagaimana cara meminjam buku di perpustakaan BPS?",
                answer: "Perpustakaan BPS Provinsi Jawa Barat menyediakan koleksi publikasi statistik. Pengunjung dapat membaca di tempat atau meminjam dengan mendaftar sebagai anggota dan mengikuti prosedur peminjaman yang berlaku."
            },
            {
                question: "Apakah koleksi perpustakaan BPS terbuka untuk umum?",
                answer: "Ya, perpustakaan BPS terbuka untuk umum. Siapapun dapat datang dan memanfaatkan koleksi publikasi statistik yang tersedia untuk keperluan penelitian, studi, atau informasi."
            },
            {
                question: "Apakah ada layanan fotokopi atau scan di perpustakaan?",
                answer: "Layanan fotokopi atau scan publikasi di perpustakaan mungkin terbatas atau tidak tersedia. Disarankan untuk mencatat informasi atau membawa perangkat sendiri untuk mendigitalisasi sebagian kecil konten, sesuai dengan kebijakan penggunaan koleksi."
            },
            {
                question: "Bisakah saya mengakses jurnal atau publikasi online BPS dari perpustakaan?",
                answer: "Pengunjung dapat mengakses publikasi online BPS melalui komputer yang disediakan di perpustakaan, atau menggunakan perangkat pribadi dengan akses internet yang mungkin tersedia."
            },
            {
                question: "Apakah perpustakaan BPS memiliki koleksi data historis atau arsip?",
                answer: "Perpustakaan memiliki koleksi publikasi historis BPS. Untuk data arsip yang sangat lama atau spesifik, mungkin perlu koordinasi dengan unit kearsipan BPS."
            }
        ],
        "Konsultasi": [
            {
                question: "Bagaimana cara mengajukan konsultasi statistik?",
                answer: "Anda dapat mengajukan konsultasi statistik secara langsung di kantor PST, melalui telepon, atau email. Disarankan untuk membuat janji terlebih dahulu dan menyiapkan detail topik yang ingin dikonsultasikan."
            },
            {
                question: "Topik apa saja yang bisa dikonsultasikan?",
                answer: "Topik konsultasi bisa meliputi metodologi survei, desain kuesioner, analisis data, interpretasi hasil statistik, penggunaan data BPS, dan topik lain terkait statistika resmi."
            },
            {
                question: "Siapa yang melayani konsultasi statistik?",
                answer: "Konsultasi dilayani oleh statistisi atau ahli statistik dari BPS Provinsi Jawa Barat yang memiliki kompetensi di bidang terkait."
            },
            {
                question: "Apakah ada batasan waktu untuk konsultasi?",
                answer: "Waktu konsultasi akan disesuaikan dengan ketersediaan petugas dan kompleksitas topik. Untuk konsultasi yang membutuhkan waktu lama, mungkin perlu beberapa sesi."
            },
            {
                question: "Apakah hasil konsultasi bisa saya jadikan referensi resmi?",
                answer: "Hasil konsultasi bersifat bimbingan dan rekomendasi teknis. Untuk referensi resmi atau pengesahan, mungkin diperlukan prosedur formal lain seperti rekomendasi teknis tertulis."
            }
        ],
        "Rekomendasi": [
            {
                question: "Apa itu rekomendasi teknis statistik?",
                answer: "Rekomendasi teknis statistik adalah surat rekomendasi dari BPS yang menyatakan persetujuan atau saran terkait metodologi, survei, atau kegiatan statistik yang akan dilakukan oleh pihak lain, untuk memastikan kesesuaian dengan standar statistik."
            },
            {
                question: "Kapan saya memerlukan rekomendasi teknis statistik?",
                answer: "Anda mungkin memerlukan rekomendasi teknis ketika akan melakukan survei, penelitian yang melibatkan pengumpulan data statistik skala besar, atau pengembangan sistem informasi statistik yang datanya akan digunakan secara publik."
            },
            {
                question: "Dokumen apa saja yang diperlukan untuk mengajukan rekomendasi?",
                answer: "Dokumen yang umumnya diperlukan meliputi proposal penelitian/survei, kerangka acuan kerja, metodologi yang akan digunakan, kuesioner (jika ada), dan rencana analisis data."
            },
            {
                question: "Berapa lama proses penerbitan rekomendasi teknis?",
                answer: "Proses penerbitan rekomendasi teknis bervariasi tergantung kompleksitas permohonan dan kelengkapan dokumen. Umumnya membutuhkan beberapa hari kerja setelah semua dokumen lengkap dan evaluasi selesai."
            },
            {
                question: "Apakah rekomendasi teknis dari BPS bersifat wajib?",
                answer: "Untuk beberapa jenis kegiatan atau instansi, rekomendasi teknis dari BPS dapat menjadi persyaratan wajib. Hal ini untuk memastikan kualitas dan kredibilitas data yang dihasilkan."
            }
        ],
        "Produk Berbayar": [
            {
                question: "Apa saja produk berbayar yang tersedia di BPS?",
                answer: "Produk berbayar umumnya adalah data yang membutuhkan pengolahan khusus, survei atas permintaan, atau data yang belum dipublikasikan secara umum dan memerlukan sumber daya tambahan dari BPS untuk disiapkan."
            },
            {
                question: "Bagaimana cara mengetahui daftar harga produk berbayar?",
                answer: "Informasi mengenai daftar harga dan jenis produk berbayar dapat ditanyakan langsung kepada petugas PST atau melalui kontak resmi BPS Provinsi Jawa Barat. Harga ditentukan berdasarkan kompleksitas dan volume data."
            },
            {
                question: "Apakah semua permintaan data spesifik dikenakan biaya?",
                answer: "Tidak semua. Data yang membutuhkan pengolahan minor atau tersedia dalam basis data yang sudah ada umumnya tidak dikenakan biaya. Biaya dikenakan untuk permintaan yang membutuhkan analisis, pengolahan ulang, atau pengumpulan data baru."
            },
            {
                question: "Metode pembayaran apa yang diterima untuk produk berbayar?",
                answer: "Metode pembayaran umumnya mengikuti prosedur keuangan pemerintah, seperti transfer bank atau setoran tunai ke rekening resmi BPS. Detail akan diinformasikan saat proses pengajuan."
            },
            {
                question: "Apakah ada diskon untuk mahasiswa atau lembaga nirlaba?",
                answer: "Kebijakan diskon atau keringanan biaya untuk mahasiswa atau lembaga nirlaba akan disesuaikan dengan ketentuan yang berlaku. Disarankan untuk menanyakan hal ini saat mengajukan permohonan."
            }
        ]
    };

    const faqList = document.getElementById('faq-list');
    const tabButtons = document.querySelectorAll('.tab-button');

    function renderFaqs(category) {
        faqList.innerHTML = ''; // Clear current FAQs

        const currentFaqs = faqData[category];

        if (!currentFaqs || currentFaqs.length === 0) {
            faqList.innerHTML = '<p>Tidak ada pertanyaan untuk kategori ini.</p>';
            return;
        }

        currentFaqs.forEach((item) => {
            const faqItemDiv = document.createElement('div');
            faqItemDiv.classList.add('faq-item');

            const questionDiv = document.createElement('div');
            questionDiv.classList.add('faq-question');
            questionDiv.setAttribute('tabindex', '0'); // Make it focusable for accessibility

            const questionText = document.createElement('span');
            questionText.textContent = item.question;
            questionDiv.appendChild(questionText);

            const iconSpan = document.createElement('span');
            iconSpan.classList.add('icon');
            iconSpan.innerHTML = '&#9660;'; // Down arrow character
            questionDiv.appendChild(iconSpan);

            const answerDiv = document.createElement('div');
            answerDiv.classList.add('faq-answer');
            const answerPara = document.createElement('p');
            answerPara.textContent = item.answer;
            answerDiv.appendChild(answerPara);

            faqItemDiv.appendChild(questionDiv);
            faqItemDiv.appendChild(answerDiv);
            faqList.appendChild(faqItemDiv);

            questionDiv.addEventListener('click', () => {
                // Close other open answers in the current category
                faqList.querySelectorAll('.faq-question.active').forEach(activeQuestion => {
                    if (activeQuestion !== questionDiv) {
                        activeQuestion.classList.remove('active');
                        activeQuestion.nextElementSibling.classList.remove('open');
                    }
                });

                questionDiv.classList.toggle('active');
                answerDiv.classList.toggle('open');
            });

            // Add keyboard accessibility
            questionDiv.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault(); // Prevent default scroll for space key
                    questionDiv.click();
                }
            });
        });
    }

    // Add event listeners for tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            button.classList.add('active');

            // Render FAQs for the selected category
            const category = button.dataset.category;
            renderFaqs(category);
        });
    });

    // Initial render for the default active tab (Umum)
    renderFaqs('Umum');
});