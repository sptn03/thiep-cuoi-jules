# Hướng Dẫn Tùy Chỉnh và Triển Khai Thiệp Cưới

Chúc mừng bạn! Dưới đây là các bước để cá nhân hóa và đưa thiệp cưới online của bạn lên mạng miễn phí bằng GitHub Pages.

## Phần 1: Tùy Chỉnh Nội Dung

Bạn cần thay đổi các thông tin mẫu thành thông tin của riêng bạn.

### 1. Chỉnh Sửa Nội Dung Thiệp (`index.html`)

Mở tệp `index.html` và thay thế các nội dung trong ngoặc vuông `[...]` bằng thông tin thật:

-   **Tiêu đề trang:** Trong thẻ `<title>`, thay đổi "Cô Dâu & Chú Rể" thành tên của hai bạn.
-   **Tên Cô dâu & Chú rể:** Thay đổi `<h1>Cô Dâu & Chú Rể</h1>`.
-   **Thông tin gia đình:**
    -   `<h3>Tên Cô Dâu</h3>`
    -   `Con gái ông [Tên bố cô dâu] và bà [Tên mẹ cô dâu]`
    -   `<h3>Tên Chú Rể</h3>`
    -   `Con trai ông [Tên bố chú rể] và bà [Tên mẹ chú rể]`
-   **Câu chuyện tình yêu:** Thay thế đoạn `[Kể câu chuyện tình yêu của bạn ở đây]`.
-   **Thông tin hôn lễ:**
    -   Cập nhật **Thời gian** và **Địa điểm** cho cả Lễ Cưới và Tiệc Cưới.
    -   Để nhúng bản đồ, bạn có thể vào Google Maps, tìm địa điểm, chọn "Chia sẻ" -> "Nhúng bản đồ" và sao chép mã HTML vào vị trí của `<div class="map-placeholder">...</div>`.

### 2. Cập Nhật Ngày Cưới cho Đồng Hồ Đếm Ngược (`script.js`)

Mở tệp `script.js` và tìm dòng sau:
`const weddingDate = new Date(2025, 11, 28, 18, 0, 0).getTime();`

-   Thay đổi các số `(2025, 11, 28, 18, 0, 0)` thành `(Năm, Tháng - 1, Ngày, Giờ, Phút, Giây)`.
-   **Lưu ý quan trọng:** Tháng trong JavaScript được đếm từ 0 (Tháng 1 là 0, Tháng 2 là 1, ..., Tháng 12 là 11). Ví dụ, nếu đám cưới của bạn vào ngày 15 tháng 5 năm 2026, bạn sẽ viết là `new Date(2026, 4, 15, ...)`

### 3. Thay Thế Hình Ảnh (thư mục `images`)

Xóa các ảnh mẫu trong thư mục `images` và thêm ảnh của bạn vào. Đảm bảo tên tệp khớp với tên được sử dụng trong `index.html`:

-   `hero-bg.jpg`: Ảnh nền lớn ở đầu trang.
-   `bride.jpg`: Ảnh chân dung cô dâu.
-   `groom.jpg`: Ảnh chân dung chú rể.
-   `photo1.jpg`, `photo2.jpg`, ...: Các ảnh trong album cưới.

## Phần 2: Triển Khai Miễn Phí với GitHub Pages

Sau khi đã tùy chỉnh xong, hãy làm theo các bước sau để đưa trang web của bạn lên mạng.

### 1. Tạo Tài Khoản GitHub

Nếu bạn chưa có, hãy tạo một tài khoản miễn phí tại [github.com](https://github.com).

### 2. Tạo một Kho Chứa (Repository) Mới

-   Trên trang chủ GitHub của bạn, nhấp vào nút **"New"** (Mới) để tạo một kho chứa mới.
-   Đặt tên cho kho chứa của bạn (ví dụ: `thiep-cuoi-cua-toi`).
-   Chọn **"Public"** (Công khai).
-   Nhấp vào **"Create repository"** (Tạo kho chứa).

### 3. Tải các Tệp Lên Kho Chứa

-   Trong kho chứa bạn vừa tạo, nhấp vào **"Add file"** (Thêm tệp) -> **"Upload files"** (Tải tệp lên).
-   Kéo và thả tất cả các tệp của bạn (`index.html`, `style.css`, `script.js`) và toàn bộ thư mục `images` vào đây.
-   Nhấp vào **"Commit changes"** (Lưu thay đổi).

### 4. Kích Hoạt GitHub Pages

-   Trong kho chứa của bạn, đi tới tab **"Settings"** (Cài đặt).
-   Ở menu bên trái, chọn **"Pages"**.
-   Trong phần "Build and deployment", dưới mục "Source", chọn nhánh (branch) của bạn (thường là `main` hoặc `master`).
-   Nhấp **"Save"** (Lưu).

### 5. Truy Cập Trang Web Của Bạn!

-   Sau khi lưu, GitHub sẽ mất vài phút để triển khai trang web của bạn.
-   Trang sẽ được làm mới và hiển thị một liên kết màu xanh lá cây. Đó chính là địa chỉ trang web thiệp cưới của bạn! Nó sẽ có dạng: `https://<tên-người-dùng-github>.github.io/<tên-kho-chứa>/`

Chúc hai bạn có một trang web thiệp cưới thật đẹp và một đám cưới thật hạnh phúc!
