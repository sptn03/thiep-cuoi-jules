// --- Đếm ngược ---
// Đặt ngày cưới của bạn ở đây (Năm, Tháng - 1, Ngày, Giờ, Phút, Giây)
const weddingDate = new Date(2027, 11, 28, 18, 0, 0).getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.innerHTML = `
            <div class="time-box"><span class="num">${days}</span><span class="label">Ngày</span></div>
            <div class="time-box"><span class="num">${hours}</span><span class="label">Giờ</span></div>
            <div class="time-box"><span class="num">${minutes}</span><span class="label">Phút</span></div>
            <div class="time-box"><span class="num">${seconds}</span><span class="label">Giây</span></div>
        `;
    }

    if (distance < 0) {
        clearInterval(countdown);
        if (countdownElement) {
            countdownElement.innerHTML = "<div class='time-box'>Chúc mừng hạnh phúc!</div>";
        }
    }
}, 1000);

// --- Hiệu ứng xuất hiện khi cuộn ---
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // Kích hoạt khi 10% phần tử hiển thị
});

sections.forEach(section => {
    observer.observe(section);
});
