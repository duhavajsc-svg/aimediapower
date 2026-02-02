# AI Media Power Landing Page (Static Masterpiece)

Trang giới thiệu khóa học AI Media Power phiên bản tĩnh (static), tối ưu hóa tuyệt đối cho tốc độ tải và khả năng hiển thị trên mọi thiết bị.

## Đặc điểm nổi bật
- **Single-file Architecture**: Toàn bộ mã nguồn nằm gọn trong `index.html`. Không build step, không dependency phức tạp.
- **Ultra-Fast**: Tải trang tức thì nhờ sử dụng Tailwind CSS CDN và tối ưu hóa tài nguyên.
- **Glassmorphism UI**: Thiết kế hiện đại với hiệu ứng kính mờ và gradient nghệ thuật.
- **Responsive**: Hiển thị hoàn hảo trên Desktop, Tablet và Mobile.
- **No Dependencies**: Không cần Node.js, Vite hay React. Chỉ cần mở file là chạy.

## Cấu trúc thư mục
- `/index.html`: File duy nhất chứa toàn bộ code.
- `/README.md`: Hướng dẫn này.
- `/metadata.json`: Cấu hình meta cho ứng dụng.

## Hướng dẫn triển khai lên Vercel
1. Đẩy mã nguồn lên repository GitHub của bạn.
2. Truy cập [vercel.com](https://vercel.com) và chọn **Add New Project**.
3. Import repository từ GitHub.
4. Tại mục **Framework Preset**, chọn **Other**.
5. Đảm bảo **Build Command** và **Output Directory** để trống.
6. Nhấn **Deploy**.

## Chỉnh sửa & Phát triển
Bạn có thể chỉnh sửa trực tiếp nội dung trong file `index.html`. Sử dụng công nghệ:
- **Tailwind CSS**: Chỉnh sửa class ngay trong HTML.
- **Material Icons**: Thay đổi icon bằng cách thay đổi text trong thẻ span.
- **Vanilla JS**: Chỉnh sửa logic đếm ngược hoặc scroll ở cuối file.
