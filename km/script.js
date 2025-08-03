document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua elemen pertanyaan FAQ yang ada di HTML
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(questionDiv => {
        // Tambahkan event listener untuk klik mouse
        questionDiv.addEventListener('click', () => {
            // Dapatkan elemen jawaban yang terkait
            const answerDiv = questionDiv.nextElementSibling;

            // Tutup semua item lain yang mungkin sedang terbuka
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== questionDiv && otherQuestion.classList.contains('active')) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.classList.remove('open');
                }
            });

            // Buka atau tutup item yang diklik
            questionDiv.classList.toggle('active');
            answerDiv.classList.toggle('open');
        });

        // Tambahkan event listener untuk aksesibilitas keyboard (tombol Enter atau Spasi)
        questionDiv.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Mencegah scroll halaman saat menekan spasi
                questionDiv.click(); // Simulasikan klik
            }
        });
    });
});