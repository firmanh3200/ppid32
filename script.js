document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const settingsButton = document.getElementById('settings-button');
  const settingsMenu = document.getElementById('settings-menu');
  const toggleModeButton = document.getElementById('toggle-mode');
  const themeButtons = document.querySelectorAll('.theme-button');
  
  // Toggle settings menu
  settingsButton.addEventListener('click', function (e) {
    e.preventDefault();
    settingsMenu.style.display = settingsMenu.style.display === 'none' ? 'flex' : 'none';
  });

  // Dark mode toggle
  toggleModeButton.addEventListener('click', function (e) {
    e.preventDefault();
    body.classList.toggle('dark-mode');
  });

  // Theme selection
  themeButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const theme = this.dataset.theme;
      body.classList.remove('red-theme', 'green-theme', 'blue-theme', 'orange-theme', 'silver-theme');
      body.classList.add(`${theme}-theme`);
      settingsMenu.style.display = 'none'; // Close the menu after theme selection
    });
  });

  // Close the settings menu if clicked outside
  document.addEventListener('click', function (event) {
    if (!settingsButton.contains(event.target) && !settingsMenu.contains(event.target)) {
      settingsMenu.style.display = 'none';
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('imageSlider');
    const slides = slider.getElementsByClassName('slide');
    let slideIndex = 0;
    const slideInterval = 5000; // Waktu antara slide (dalam milidetik)
    let sliderInterval; // Variabel untuk menyimpan ID interval

    function showSlide(index) {
        if (index < 0) {
            slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            slideIndex = 0;
        }

        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    function nextSlide() {
        slideIndex++;
        showSlide(slideIndex);
    }

    // Inisialisasi interval
    sliderInterval = setInterval(nextSlide, slideInterval);

    // Optional: Pause on hover (for accessibility)
    slider.addEventListener('mouseenter', () => clearInterval(sliderInterval));
    slider.addEventListener('mouseleave', () => {
        sliderInterval = setInterval(nextSlide, slideInterval);
    });
});

  // Set default theme on load
  body.classList.add('orange-theme');
  
  // TTE
  const canvas = document.getElementById('signatureCanvas');
        const ctx = canvas.getContext('2d');
        let drawing = false;

        function getXY(canvas, event) {
            const rect = canvas.getBoundingClientRect();
            if (event.touches) {
                return {
                    x: event.touches[0].clientX - rect.left,
                    y: event.touches[0].clientY - rect.top
                };
            } else {
                return {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top
                };
            }
        }

        function startDrawing(event) {
            drawing = true;
            const { x, y } = getXY(canvas, event);
            ctx.beginPath();
            ctx.moveTo(x, y);
            event.preventDefault();
        }

        function stopDrawing() {
            drawing = false;
        }

        function draw(event) {
            if (!drawing) return;
            event.preventDefault();
            const { x, y } = getXY(canvas, event);

            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.strokeStyle = 'black';

            ctx.lineTo(x, y);
            ctx.stroke();
        }

        function clearCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        async function copySignature() {
            const dataURL = canvas.toDataURL('image/png');
            const message = document.getElementById('message');

            try {
                const blob = await (await fetch(dataURL)).blob();

                await navigator.clipboard.write([
                    new ClipboardItem({
                        "image/png": blob
                    })
                ]);

                message.textContent = "Silakan Paste ke Dokumen Anda";
                message.className = "text-success"; // Tambahkan kelas Bootstrap untuk warna hijau
            } catch (err) {
                console.error('Failed to copy: ', err);
                message.textContent = "Failed to copy signature (see console)";
                message.className = "text-danger"; // Tambahkan kelas Bootstrap untuk warna merah
            }
        }

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);
        canvas.addEventListener('mousemove', draw);

        canvas.addEventListener('touchstart', startDrawing);
        canvas.addEventListener('touchend', stopDrawing);
        canvas.addEventListener('touchcancel', stopDrawing);
        canvas.addEventListener('touchmove', draw);

        document.getElementById('clearBtn').addEventListener('click', clearCanvas);
        document.getElementById('copyBtn').addEventListener('click', copySignature);
});