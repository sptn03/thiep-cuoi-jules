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
const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .zoom-in, section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // Kích hoạt khi 10% phần tử hiển thị
});

animatedElements.forEach(el => {
    observer.observe(el);
});

// --- Hiệu ứng Floating Hearts ---
function createHeart() {
    const heartContainer = document.getElementById('floating-hearts');
    if (!heartContainer) return;

    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Random vị trí xuất hiện (trái -> phải)
    heart.style.left = Math.random() * 100 + "vw";

    // Random kích thước
    const size = Math.random() * 15 + 10; // 10px - 25px
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    // Cập nhật size cho pseudo-elements (cần dùng CSS variables hoặc set inline style thông minh hơn,
    // nhưng ở đây ta dùng scale animation để đơn giản hoá việc random kích thước hiển thị)
    // Thay vào đó, ta random animation duration để tốc độ bay khác nhau
    heart.style.animationDuration = Math.random() * 5 + 10 + "s"; // 10s - 15s

    // Random màu sắc nhẹ nhàng
    const colors = ['rgba(255, 182, 193, 0.4)', 'rgba(255, 228, 225, 0.4)', 'rgba(212, 175, 55, 0.2)'];
    heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    heartContainer.appendChild(heart);

    // Xóa tim sau khi bay xong để tránh tràn DOM
    setTimeout(() => {
        heart.remove();
    }, 15000);
}

setInterval(createHeart, 800); // Tạo tim mỗi 0.8 giây
