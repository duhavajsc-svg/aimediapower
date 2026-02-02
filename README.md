# AI Media Power Landing Page (Static Masterpiece)

Trang giới thiệu khóa học AI Media Power phiên bản tĩnh 100% (Zero Build Step).

## Quy tắc thiết kế (Design Preserved)
- **YES**: Giữ nguyên HTML markup.
- **YES**: Giữ nguyên Tailwind classes & animations.
- **YES**: Giữ nguyên bảng giá & roadmap.
- **Fix**: Sử dụng `clamp()` cho giá tiền để đảm bảo không rớt chữ trên màn hình nhỏ.

## Triển khai lên Vercel
1. Import repository này vào Vercel.
2. **Framework Preset**: Chọn `Other` (Mặc định sẽ nhận diện `index.html`).
3. **Build & Output Settings**: Để trống (No build step).
4. **Environment Variables**: Thêm `API_KEY` (Gemini API Key).
5. Nhấn **Deploy**.
