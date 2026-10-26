# GIẢI THÍCH LOGIC: CÁCH SỬ DỤNG `new Date().getHours()`

---

## 1. Cách lấy thời gian bằng `new Date().getHours()`

Để biết được thời gian thực của người dùng khi vừa truy cập website, nhóm sử dụng hai phương thức có sẵn trong JavaScript:

1. **`new Date()`**:
   * Khởi tạo một đối tượng thời gian lấy theo đồng hồ hệ thống (System Clock) trên máy tính hoặc điện thoại của người dùng.
2. **`.getHours()`**:
   * Trích xuất riêng **phần giờ** từ đối tượng `new Date()` vừa tạo.
   * **Giá trị trả về:** Một số nguyên trong phạm vi từ **`0` đến `23`** (theo hệ 24 giờ):
     * `0`: Nửa đêm (00:00).
     * `1` đến `11`: Buổi sáng (01:00 đến 11:00 AM).
     * `12`: 12 giờ trưa (12:00 PM).
     * `13` đến `23`: Buổi chiều và tối (01:00 PM đến 11:00 PM).

---

## 2. Cấu trúc logic phân loại thời gian trong ngày

Sau khi lấy được số giờ (`currentHour`), nhóm dùng cấu trúc điều kiện `if - else if - else` để phân chia thành 3 mốc:

```
[00:00 ---------- 04:59] -> [05:00 ---------- 11:59] -> [12:00 ---------- 17:59] -> [18:00 ---------- 23:59]
         Tối/Đêm                     Sáng                       Chiều                       Tối
```

* **Buổi sáng (`05:00 - 11:59`):** Điều kiện `currentHour >= 5 && currentHour < 12`  
  -> Thông báo: *"Chào buổi sáng!"* 🌅
* **Buổi chiều (`12:00 - 17:59`):** Điều kiện `currentHour >= 12 && currentHour < 18`  
  -> Thông báo: *"Chào buổi chiều!"* ☀️
* **Buổi tối & Đêm (`18:00 - 04:59`):** Trường hợp còn lại `else`  
  -> Thông báo: *"Chào buổi tối!"* 🌙

> **Lưu ý về điều kiện biên:** Dùng `< 12` thay vì `<= 11` vì hàm `.getHours()` chỉ lấy số nguyên. Đến lúc `11:59`, giá trị vẫn là `11`. Ngay khi chuyển sang `12:00`, giá trị thành `12` và tự động chuyển sang buổi chiều.

---

## 3. Đoạn mã JavaScript thực thi

```javascript
// 1. Lấy giờ hiện tại từ máy người dùng
const currentHour = new Date().getHours(); 

// 2. Kiểm tra điều kiện và đưa ra lời chào phù hợp
let greeting = "";

if (currentHour >= 5 && currentHour < 12) {
    greeting = "Chào buổi sáng!";
} else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Chào buổi chiều!";
} else {
    greeting = "Chào buổi tối!";
}

// 3. In kết quả ra màn hình hoặc console
console.log(greeting);
```

---

## 4. Tóm kết
Cách sử dụng `new Date().getHours()` giúp chức năng hoạt động hoàn toàn tự động, nhẹ, chính xác theo múi giờ địa phương của từng người dùng mà không cần gửi yêu cầu lên máy chủ.
