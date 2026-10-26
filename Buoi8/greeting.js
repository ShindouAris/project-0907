/**
 * ==============================================================================
 * DỰ ÁN: CHỨC NĂNG CHÀO MỪNG TỰ ĐỘNG THEO THỜI GIAN THỰC (REAL-TIME GREETING)
 * NGÔN NGỮ: JavaScript thuần (Vanilla JS - ES6+)
 * MÔ TẢ: Lấy giờ hệ thống từ thiết bị người dùng và hiển thị lời chào tương ứng.
 * ==============================================================================
 */

/**
 * BƯỚC 1: XÂY DỰNG HÀM XỬ LÝ LOGIC (PURE FUNCTION)
 * Phân tích: Hàm này nhận vào một đối tượng Date (mặc định là thời gian hiện tại)
 * và trả về thông tin lời chào tương ứng. Việc viết hàm độc lập giúp dễ kiểm thử.
 *
 * @param {Date} date - Đối tượng Date đại diện cho thời điểm cần kiểm tra
 * @returns {Object} Đối tượng chứa tiêu đề lời chào, lời chúc phụ và biểu tượng icon
 */
function getGreetingData(date = new Date()) {
    // 1. Lấy giờ hiện tại bằng phương thức getHours()
    // getHours() trả về số nguyên từ 0 đến 23 theo giờ địa phương (local time)
    const currentHour = date.getHours();

    // 2. Cấu trúc rẽ nhánh (if - else if - else) để phân định các buổi trong ngày:

    // MỐC 1: Buổi sáng (Từ 05:00 đến 11:59)
    // currentHour >= 5 và < 12 (vì 11:59 thì getHours() vẫn là 11)
    if (currentHour >= 5 && currentHour < 12) {
        return {
            greeting: "Chào buổi sáng!",
            message: "Chúc bạn một ngày mới ngập tràn năng lượng và làm việc hiệu quả!",
            icon: "🌅",
            period: "morning"
        };
    }

    // MỐC 2: Buổi chiều (Từ 12:00 đến 17:59)
    // currentHour >= 12 và < 18 (tương đương 12h trưa đến 5h59 chiều)
    else if (currentHour >= 12 && currentHour < 18) {
        return {
            greeting: "Chào buổi chiều!",
            message: "Chúc bạn một buổi chiều làm việc và học tập thật tập trung, sáng tạo!",
            icon: "☀️",
            period: "afternoon"
        };
    }

    // MỐC 3: Buổi tối & Đêm (Từ 18:00 đến 04:59 sáng hôm sau)
    // Bao gồm các giá trị: 18, 19, 20, 21, 22, 23 và 0, 1, 2, 3, 4
    else {
        return {
            greeting: "Chào buổi tối!",
            message: "Chúc bạn có những giây phút thư giãn thoải mái và ấm áp bên người thân!",
            icon: "🌙",
            period: "evening"
        };
    }
}

/**
 * BƯỚC 2: HÀM HIỂN THỊ THÔNG BÁO DẠNG TOAST BÊN PHẢI MÀN HÌNH
 * - Vị trí: Đặt ở góc phải (top: 92px, right: 24px), nằm dưới header cao 76px, không bị đè
 * - Tự động đồng bộ giao diện Sáng/Tối (Dark/Light Mode) theo biến CSS của trang web
 * - Hiển thị thời gian thực và tự động trượt ra mềm mại
 *
 * @param {string} title - Tiêu đề thông báo (Lời chào)
 * @param {string} content - Lời chúc chi tiết
 * @param {string} icon - Biểu tượng cảm xúc
 * @param {Date} date - Đối tượng Date thời gian thực
 */
function displayGreetingToast(title, content, icon, date = new Date()) {
    // 1. Định dạng chuỗi thời gian thực (Giờ:Phút:Giây)
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;

    // 2. Tạo phần tử Toast
    const toast = document.createElement("aside");
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.className = "greeting-toast-notification";

    // 3. Cấu trúc HTML bên trong Toast
    toast.innerHTML = `
        <div class="toast-icon-wrap">${icon}</div>
        <div style="display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 0;">
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                <strong style="font-size: 0.95rem; font-weight: 700; color: inherit;">${title}</strong>
                <span class="toast-time-pill">
                    🕒 ${timeString}
                </span>
            </div>
            <span class="toast-content">${content}</span>
        </div>
        <button type="button" class="toast-close-btn" aria-label="Đóng thông báo">×</button>
    `;

    // 4. Thêm vào cây DOM
    document.body.appendChild(toast);

    // 5. Kích hoạt hiệu ứng xuất hiện trượt từ bên phải vào
    requestAnimationFrame(() => {
        toast.classList.add("is-visible");
    });

    // 6. Hàm đóng thông báo mềm mại
    const closeToast = () => {
        toast.classList.remove("is-visible");
        setTimeout(() => toast.remove(), 400);
    };

    // Bắt sự kiện khi người dùng bấm nút đóng
    const closeBtn = toast.querySelector(".toast-close-btn");
    if (closeBtn) {
        closeBtn.addEventListener("click", closeToast);
    }

    // Tự động đóng sau 5.5 giây
    setTimeout(closeToast, 5500);
}

/**
 * BƯỚC 3: ĐIỀU KHIỂN VÒNG ĐỜI VÀ GẮN LÊN GIAO DIỆN
 * Sử dụng sự kiện 'DOMContentLoaded': Đảm bảo toàn bộ thẻ HTML đã sẵn sàng
 * mà không cần phải chờ đợi các tệp hình ảnh/video lớn tải xong như 'window.onload'.
 */
if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        // 1. Lấy mốc thời gian thực hiện tại
        const now = new Date();
        const { greeting, message, icon } = getGreetingData(now);

        // =========================================================================
        // CÁCH 1: TƯƠNG TÁC DOM (Cập nhật văn bản vào thẻ HTML cụ thể)
        // =========================================================================
        // Tìm kiếm thẻ HTML hiển thị trên giao diện (ví dụ ID: 'welcome-greeting' hoặc 'greetingText')
        const greetingTextElement = document.getElementById("welcome-greeting") || document.getElementById("greetingText");
        const greetingSubElement = document.getElementById("welcome-subtext");

        if (greetingTextElement) {
            // Dùng .textContent thay cho .innerHTML để đảm bảo an toàn tuyệt đối chống tấn công XSS
            greetingTextElement.textContent = `${icon} ${greeting}`;

            if (greetingSubElement) {
                greetingSubElement.textContent = message;
            }
        }
        // =========================================================================
        // CÁCH 2: HIỂN THỊ DẠNG TOAST / ALERT (Fallback nếu chưa có thẻ trong HTML)
        // =========================================================================
        else {
            // Hiển thị thông báo Toast đẹp mắt, hiển thị thêm thời gian thực và tránh đè header
            displayGreetingToast(greeting, message, icon, now);

            // Tùy chọn hộp thoại pop-up cơ bản:
            // alert(`${icon} ${greeting}\nBây giờ là: ${now.toLocaleTimeString()}\n${message}`);
        }
    });
}

// Hỗ trợ xuất hàm cho môi trường Node.js (Unit Testing)
if (typeof module !== "undefined" && module.exports) {
    module.exports = { getGreetingData };
}
