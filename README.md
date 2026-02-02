
# AI Media Power Landing Page (Static Masterpiece)

Trang giới thiệu khóa học AI Media Power phiên bản tĩnh (static), tối ưu hóa tuyệt đối cho tốc độ tải và khả năng hiển thị.

## Đặc điểm nổi bật
- **Zero Build Step**: Chỉ HTML/CSS/JS thuần, mở file là chạy.
- **Fixed UI**: Bố cục bảng giá được fix triệt để lỗi tràn chữ và rớt khung.
- **Dynamic AI**: Tích hợp Gemini 2.5 Flash thông qua Vanilla JS Module.
- **Ultra Responsive**: Sử dụng `clamp()` font-size cho các tiêu đề quan trọng.

## Hướng dẫn triển khai lên Vercel
1. Đẩy mã nguồn (index.html, README.md, metadata.json) lên repository GitHub.
2. Truy cập [vercel.com](https://vercel.com) và chọn **Add New Project**.
3. Import repository từ GitHub.
4. Tại mục **Framework Preset**, chọn **Other**.
5. Đảm bảo các trường **Build Command** và **Output Directory** để trống.
6. Vào **Environment Variables**, thêm `API_KEY` (Key của bạn từ Google AI Studio).
7. Nhấn **Deploy**.
