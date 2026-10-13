Hãy nâng cấp trực tiếp Personal Developer Portfolio hiện tại sau tuần 4. Đây là giai đoạn bổ sung hiệu ứng chuyển động, không phải thiết kế lại toàn bộ website.

Bạn là Senior Frontend Developer chuyên về CSS Animation và UI/UX. Hãy thực hiện đúng các yêu cầu sau, đồng thời bảo toàn Semantic HTML5, Flexbox/Grid, CSS Variables và Responsive Design đã hoàn thành.

## 1. Nguyên tắc chung

- Phân biệt transition (chuyển trạng thái) và animation/@keyframes (chuyển động theo chuỗi hoặc tự động).
- Ưu tiên hiệu ứng mượt, tinh tế, phục vụ trải nghiệm người dùng.
- Ưu tiên transform và opacity khi phù hợp để giảm nguy cơ giật lag.
- Không lạm dụng animation, không khiến người dùng khó đọc nội dung.
- Giữ nguyên hệ thống màu sắc, khoảng cách và typography bằng CSS Variables.
- Các hiệu ứng phải hoạt động trên Desktop và Mobile.
- Tôn trọng prefers-reduced-motion để giảm chuyển động cho người dùng có nhu cầu.
- Trước khi thêm thư viện, hãy kiểm tra dự án và tận dụng thư viện đã có nếu phù hợp.

## 2. Sáu hiệu ứng cần triển khai

### A. Floating Action Button – Nút liên hệ nổi

Tạo nút tròn “Liên hệ” cố định ở góc dưới bên phải màn hình.

Yêu cầu:
- Sử dụng position: fixed.
- Có pulse animation nhẹ bằng @keyframes để thu hút sự chú ý.
- Có hover transition mượt trên Desktop.
- Có kích thước dễ bấm trên Mobile và không che nội dung quan trọng.
- Khi bấm vào, cuộn tới section Contact hoặc mở hành động liên hệ phù hợp.
- Có aria-label hoặc nội dung dễ hiểu để hỗ trợ accessibility.

### B. Card Flip Effect – Thẻ giới thiệu lật mặt

Tạo một thẻ giới thiệu cá nhân hoặc thẻ nhân sự.

Mặt trước:
- Ảnh đại diện.
- Tên và vai trò.

Mặt sau:
- Mô tả ngắn.
- Liên kết GitHub và các mạng xã hội thực tế nếu đã có.

Yêu cầu kỹ thuật:
- Dùng transform-style: preserve-3d.
- Dùng backface-visibility: hidden.
- Dùng rotateY(180deg) khi hover để lật thẻ.
- Dùng transition: transform khoảng 0.6s hoặc giá trị phù hợp.
- Tránh hiện đồng thời nội dung hai mặt.
- Trên thiết bị cảm ứng không có hover, cung cấp cách xem mặt sau có thể thao tác bằng bàn phím hoặc nút điều khiển phù hợp.

### C. Typing Effect – Hiệu ứng máy đánh chữ

Trong Hero Section, tạo dòng giới thiệu:

“Tôi là một Web Developer”

Yêu cầu:
- Dùng @keyframes typing để tạo hiệu ứng chữ xuất hiện từ trái sang phải.
- Dùng @keyframes blink tạo con trỏ nhấp nháy.
- Sử dụng white-space: nowrap và overflow: hidden khi phù hợp.
- Ưu tiên giải pháp CSS thuần, không dùng JavaScript nếu không cần thiết.
- Không để dòng chữ gây tràn màn hình điện thoại; hãy xử lý cỡ chữ hoặc cách hiển thị phù hợp.
- Nếu vai trò của tôi chưa được xác nhận, cho phép thay đổi nội dung bằng placeholder.

### D. Parallax Background – Hiệu ứng chiều sâu

Tạo hiệu ứng nền có chiều sâu ở Hero Section hoặc một khu vực phù hợp.

Yêu cầu:
- Dùng hình nền minh họa phù hợp với chủ đề công nghệ.
- Chuyển động phải nhẹ nhàng, không gây phân tán.
- Ưu tiên CSS và giải pháp tiết kiệm hiệu năng.
- Nếu dùng background-attachment: fixed, phải kiểm tra trên thiết bị di động và có phương án thay thế khi không được hỗ trợ tốt.
- Không để nội dung chữ bị chìm vào nền.

### E. Modern Hamburger Menu – Menu biến đổi biểu tượng

Nâng cấp navigation đã có từ tuần 4.

Yêu cầu:
- Desktop: menu ngang và có hover transition.
- Mobile: ẩn menu ngang, hiển thị nút Hamburger.
- Khi bấm nút, menu trượt ra từ cạnh bên hoặc mở theo bố cục phù hợp.
- Biểu tượng Hamburger biến đổi thành dấu X khi menu mở.
- Không làm menu chồng lấn bất hợp lý lên nội dung.
- Có trạng thái mở/đóng rõ ràng và aria-expanded.
- Hỗ trợ thao tác bàn phím.
- Có thể dùng CSS Checkbox Hack hoặc JavaScript tối thiểu nếu cần; không sử dụng framework lớn chỉ để tạo menu.

### F. Skill Bar Animation – Thanh kỹ năng tự chạy

Trong Skills Section, tạo thanh tiến trình minh họa mức độ kỹ năng.

Yêu cầu:
- Có nhãn kỹ năng và giá trị phần trăm.
- Tạo phần nền và thanh màu hiển thị tiến trình.
- Dùng @keyframes fillBar để thanh chạy từ 0 đến độ rộng mục tiêu.
- Dùng animation-fill-mode: forwards để giữ kết quả sau khi chạy.
- Chuyển động khoảng 2 giây hoặc giá trị phù hợp.
- Bảo đảm thanh có nhãn dễ hiểu và không chỉ dựa vào màu sắc để truyền đạt thông tin.
- Các phần trăm chỉ là dữ liệu minh họa nếu tôi chưa cung cấp trình độ thật; hãy giúp tôi thay đổi dễ dàng.

## 3. Scroll Reveal bằng thư viện AOS

Tích hợp AOS hoặc một giải pháp thư viện hiệu ứng tương đương phù hợp với dự án hiện tại.

Yêu cầu:
- Nạp CSS và JavaScript của thư viện đúng cách.
- Khởi tạo thư viện đúng thời điểm.
- Áp dụng hiệu ứng xuất hiện khi cuộn trang cho ít nhất 5 thành phần khác nhau, ví dụ: About, các Skill Cards, Project Cards, Education và Contact.
- Sử dụng data-aos-duration và data-aos-delay để các thành phần xuất hiện theo nhịp hợp lý, không đồng loạt.
- Hiệu ứng phải chạy khi cuộn đến khu vực tương ứng.
- Không khiến nội dung bị ẩn vĩnh viễn nếu thư viện không tải được.
- Kiểm tra Console và Network nếu thư viện không hoạt động.
- Hạn chế animation quá dài hoặc lặp lại gây khó chịu.

Nếu dùng CDN, hãy ghi rõ thư viện được thêm ở đâu và cách kiểm tra khi mất kết nối Internet.

## 4. Tổ chức code và tương thích

- Không viết lại các section đã có.
- Giữ nguyên Semantic HTML5 và các CSS Variables ở :root.
- Đặt CSS animation trong file CSS phù hợp, không tạo nhiều đoạn CSS trùng lặp.
- JavaScript chỉ bổ sung khi cần cho menu hoặc tích hợp thư viện.
- Không tạo nhiều event listener trùng nhau.
- Không sử dụng thư viện không cần thiết.
- Kiểm tra xung đột giữa các thuộc tính transform của hiệu ứng Card Flip, hover và animation.
- Đảm bảo nút liên hệ không che menu, footer hoặc nội dung trên điện thoại.
- Tôn trọng prefers-reduced-motion.

## 5. Quy trình thực hiện

1. Kiểm tra code hiện tại và xác định các file cần chỉnh sửa.
2. Liệt kê các hiệu ứng sẽ thêm và vị trí xuất hiện.
3. Thực hiện từng hiệu ứng, kiểm tra rồi mới chuyển sang hiệu ứng tiếp theo.
4. Kiểm tra menu trên Desktop và Mobile.
5. Kiểm tra animation và scroll reveal.
6. Kiểm tra Console, lỗi CSS và liên kết ảnh.
7. Sửa lỗi nhưng không phá vỡ các yêu cầu của tuần 1–4.

Không báo cáo một hiệu ứng đã hoàn thành nếu chưa có cách kiểm tra hoặc bằng chứng nó hoạt động.

## 6. Tiêu chí hoàn thành

- Có đủ 6 hiệu ứng trong danh sách.
- Có hiệu ứng Hover, Keyframes và Scroll Reveal.
- Có tích hợp thư viện AOS hoặc giải pháp tương đương.
- AOS áp dụng cho ít nhất 5 thành phần.
- Website vẫn Responsive và giữ nguyên Design System.
- Hiệu ứng mượt, không gây giật lag hoặc cản trở thao tác.
- Code dễ hiểu, dễ sửa và không có lỗi rõ ràng.

Cuối cùng, cập nhật prompt_log.md với các prompt quan trọng, những thay đổi đã thực hiện và các lỗi đã sửa. Hãy giải thích ngắn gọn sự khác nhau giữa transition, @keyframes và AOS để tôi có thể trình bày với giảng viên.