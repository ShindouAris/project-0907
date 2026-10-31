/**
 * ==============================================================================
 * AURA MOTORS - QUẢN LÝ VÀ HIỂN THỊ DANH SÁCH SẢN PHẨM TỰ ĐỘNG
 * ==============================================================================
 * Mô tả: File script chứa dữ liệu mẫu và hàm JavaScript để tự động sinh giao diện
 * danh sách sản phẩm/dịch vụ bằng vòng lặp, thay vì viết HTML tĩnh cho từng xe.
 */

// ==========================================
// 1. DANH SÁCH DỮ LIỆU MẪU (SAMPLE DATA)
// ==========================================
/**
 * Mảng chứa danh sách các đối tượng xe/sản phẩm (Array of Objects).
 * Mỗi đối tượng đại diện cho một sản phẩm với đầy đủ thông số kỹ thuật và hình ảnh.
 */
const sampleCars = [
    {
        id: 1,
        name: "Phantom Grand Coupe",
        category: "sedan",
        tag: "Phiên bản giới hạn",
        tagClass: "",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Xe sedan thể thao Phantom Grand Coupe màu đen bóng bẩy",
        categoryBadge: "Sedan Vị Lai",
        rating: 4.9,
        reviewsCount: 48,
        description: "Sedan coupe đỉnh cao với nội thất bọc da Nappa cao cấp và hệ thống trợ lái tự động Level 3.",
        specs: [
            { icon: "power", text: "V8 Twin-Turbo 625hp" },
            { icon: "speed", text: "0-100: 3.2s" },
            { icon: "drive", text: "AWD Toàn Thời Gian" }
        ],
        price: "6.890.000.000 ₫",
        buttonText: "Nhận Báo Giá"
    },
    {
        id: 2,
        name: "Spectre GT Pure EV",
        category: "electric",
        tag: "Thuần Điện 800V",
        tagClass: "tag-electric",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Siêu xe điện thể thao Aura Spectre EV màu đen khí động học",
        categoryBadge: "Hypercar Điện",
        rating: 5.0,
        reviewsCount: 62,
        description: "Khai phá kỷ nguyên tốc độ không khí thải, sạc siêu nhanh 10-80% chỉ trong 18 phút.",
        specs: [
            { icon: "power", text: "Dual Motor 760hp" },
            { icon: "speed", text: "0-100: 2.7s" },
            { icon: "range", text: "Tầm xa 650 km" }
        ],
        price: "8.450.000.000 ₫",
        buttonText: "Nhận Báo Giá"
    },
    {
        id: 3,
        name: "Vanguard SUV Platinum",
        category: "suv",
        tag: "Bán chạy nhất",
        tagClass: "",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Xe SUV hạng sang địa hình Aura Cullinan Vanguard đẳng cấp",
        categoryBadge: "SUV Đầu Bảng",
        rating: 4.95,
        reviewsCount: 95,
        description: "Chinh phục mọi địa hình với hệ thống treo khí nén chủ động thích ứng và không gian hạng thương gia.",
        specs: [
            { icon: "power", text: "V6 Mild-Hybrid 450hp" },
            { icon: "speed", text: "0-100: 4.6s" },
            { icon: "suspension", text: "Treo Khí Nén 7 Chế Độ" }
        ],
        price: "7.290.000.000 ₫",
        buttonText: "Nhận Báo Giá"
    },
    {
        id: 4,
        name: "Chronos SuperSport",
        category: "sedan",
        tag: "Phiên bản Carbon",
        tagClass: "",
        image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Xe thể thao mui trần Chronos SuperSport",
        categoryBadge: "Gran Turismo",
        rating: 4.88,
        reviewsCount: 35,
        description: "Thân vỏ sợi carbon nguyên khối siêu nhẹ, mang lại xúc cảm lái chân thực chuẩn đường đua chuyên nghiệp.",
        specs: [
            { icon: "power", text: "V10 N/A 610hp" },
            { icon: "speed", text: "0-100: 3.1s" },
            { icon: "top-speed", text: "Top speed: 330 km/h" }
        ],
        price: "11.200.000.000 ₫",
        buttonText: "Nhận Báo Giá"
    },
    {
        id: 5,
        name: "Mayfair Royale Edition",
        category: "sedan",
        tag: "Chủ tịch & VIP",
        tagClass: "",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Xe siêu sang Mayfair Limousine dành cho yếu nhân",
        categoryBadge: "Ultra-Luxury Sedan",
        rating: 5.0,
        reviewsCount: 54,
        description: "Khoang thương gia chuẩn hoàng gia với tủ lạnh mini champagne, kính cách âm 2 lớp khử ồn chủ động.",
        specs: [
            { icon: "power", text: "V12 Bi-Turbo 630hp" },
            { icon: "speed", text: "0-100: 4.1s" },
            { icon: "comfort", text: "Ghế Massage Đá Nóng" }
        ],
        price: "14.650.000.000 ₫",
        buttonText: "Nhận Báo Giá"
    },
    {
        id: 6,
        name: "Apex Matrix Dynamic",
        category: "suv",
        tag: "All-Terrain Beast",
        tagClass: "",
        image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Xe SUV thể thao cao cấp Apex Matrix",
        categoryBadge: "Sport SUV",
        rating: 4.92,
        reviewsCount: 40,
        description: "Sức mạnh mãnh thú trong vóc dáng khí động học uyển chuyển, sẵn sàng bứt phá trên mọi cung đường khám phá.",
        specs: [
            { icon: "power", text: "V8 Turbo 550hp" },
            { icon: "speed", text: "0-100: 3.8s" },
            { icon: "trunk", text: "Khoang Chứa 820L" }
        ],
        price: "9.180.000.000 ₫",
        buttonText: "Nhận Báo Giá"
    }
];

// ==========================================
// 2. HÀM PHỤ TRỢ (HELPER FUNCTIONS)
// ==========================================

/**
 * Hàm trả về chuỗi mã SVG tương ứng với từng loại thông số kỹ thuật (spec icon)
 * @param {string} iconType - Mã định danh loại biểu tượng (power, speed, drive, range, v.v.)
 * @returns {string} Chuỗi HTML chứa thẻ <svg>
 */
function getSpecIconSvg(iconType) {
    switch (iconType) {
        case "power":
            return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>`;
        case "speed":
            return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>`;
        case "drive":
            return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
            </svg>`;
        case "range":
            return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" />
            </svg>`;
        case "suspension":
            return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
            </svg>`;
        case "top-speed":
            return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>`;
        case "comfort":
            return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>`;
        case "trunk":
            return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
            </svg>`;
        default:
            return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
            </svg>`;
    }
}

/**
 * Hàm sinh chuỗi HTML cho một thẻ sản phẩm đơn lẻ từ đối tượng sản phẩm
 * @param {Object} item - Đối tượng chứa thông tin của một xe/sản phẩm
 * @returns {string} Chuỗi HTML biểu diễn thẻ <article class="car-card">
 */
function createProductCardHTML(item) {
    // 1. Tạo nhãn tag (nếu có)
    const tagHtml = item.tag
        ? `<span class="car-tag ${item.tagClass || ''}">${item.tag}</span>`
        : "";

    // 2. Dùng vòng lặp map để sinh danh sách các chỉ số thông số kỹ thuật (specs)
    const specsHtml = (item.specs || []).map(spec => `
        <li class="spec-pill">
            ${getSpecIconSvg(spec.icon)}
            <span>${spec.text}</span>
        </li>
    `).join("");

    // 3. Ghép nối thành mã HTML hoàn chỉnh cho thẻ sản phẩm bằng Template Literal
    return `
        <article class="car-card" data-category="${item.category || 'all'}">
            <figure class="car-figure">
                ${tagHtml}
                <img src="${item.image}"
                    alt="${item.imageAlt || item.name}"
                    loading="lazy"
                    class="car-img">
                <figcaption class="sr-only">Hình ảnh xe ${item.name}</figcaption>
            </figure>

            <div class="car-info">
                <div class="car-category-row">
                    <span class="car-cat-badge">${item.categoryBadge || 'Xe Sang'}</span>
                    <div class="car-rating" aria-label="Đánh giá ${item.rating} trên 5 sao">
                        <span class="star-icon">★</span> ${item.rating} (${item.reviewsCount} đánh giá)
                    </div>
                </div>

                <h3 class="car-name">${item.name}</h3>
                <p class="car-desc">${item.description}</p>

                <ul class="car-specs" aria-label="Thông số kỹ thuật">
                    ${specsHtml}
                </ul>

                <footer class="car-footer">
                    <div class="car-price-box">
                        <span class="price-label">Giá niêm yết từ</span>
                        <strong class="car-price">${item.price}</strong>
                    </div>
                    <a href="#contact" class="btn btn-sm btn-gold-card"
                        aria-label="Đăng ký nhận báo giá ${item.name}">${item.buttonText || 'Nhận Báo Giá'}</a>
                </footer>
            </div>
        </article>
    `;
}

// ==========================================
// 3. HÀM CHÍNH XỬ LÝ HIỂN THỊ DANH SÁCH (RENDER)
// ==========================================

/**
 * Hàm xử lý việc hiển thị danh sách sản phẩm/dịch vụ ra giao diện web.
 * Sử dụng vòng lặp duyệt qua danh sách dữ liệu đầu vào và chèn mã HTML vào phần tử chứa (container).
 * 
 * @param {Array<Object>} products - Danh sách mảng các đối tượng dữ liệu sản phẩm
 * @param {string|HTMLElement} containerSelector - Bộ chọn CSS hoặc phần tử DOM của khung chứa
 */
function renderProducts(products, containerSelector = "#carsGrid") {
    // Bước 1: Tìm phần tử khung chứa trên DOM
    const container = typeof containerSelector === "string"
        ? document.querySelector(containerSelector)
        : containerSelector;

    // Kiểm tra xem container có tồn tại không
    if (!container) {
        console.error(`[renderProducts] Không tìm thấy phần tử hiển thị với bộ chọn: "${containerSelector}"`);
        return;
    }

    // Bước 2: Kiểm tra dữ liệu đầu vào
    if (!Array.isArray(products) || products.length === 0) {
        container.innerHTML = `
            <div class="no-products-message" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted, #888);">
                <p>Hiện chưa có sản phẩm hoặc dịch vụ nào để hiển thị.</p>
            </div>
        `;
        return;
    }

    // Bước 3: Dùng vòng lặp forEach để duyệt qua từng sản phẩm và tự động sinh HTML
    let accumulatedHtml = "";
    products.forEach((product) => {
        accumulatedHtml += createProductCardHTML(product);
    });

    // Bước 4: Đổ toàn bộ mã HTML vừa sinh vào giao diện thông qua container.innerHTML
    container.innerHTML = accumulatedHtml;

    // Bước 5: Cập nhật thư viện hiệu ứng AOS (nếu có kích hoạt trên trang)
    if (typeof AOS !== "undefined" && typeof AOS.refresh === "function") {
        AOS.refresh();
    }
}

// ==========================================
// 4. KHỞI CHẠY KHI TẢI TRANG
// ==========================================

/**
 * Tự động gọi hàm hiển thị danh sách sản phẩm khi tài liệu HTML đã sẵn sàng.
 */
function initProductCatalog() {
    renderProducts(sampleCars, "#carsGrid");
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProductCatalog);
} else {
    // Tài liệu đã tải xong (ví dụ khi script chạy defer hoặc nạp động)
    initProductCatalog();
}

// Gắn hàm và dữ liệu vào phạm vi toàn cục (window) để tiện kiểm tra hoặc tái sử dụng từ Console
window.renderProducts = renderProducts;
window.sampleCars = sampleCars;

