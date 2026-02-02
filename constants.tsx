
import { RoadmapItem, PricingPlan, Instructor } from './types';

export const ROADMAP_DATA: RoadmapItem[] = [
  { id: '1', step: '01', title: 'Tư duy AI Media', description: 'Thiết lập mindset và hiểu rõ bức tranh toàn cảnh về ứng dụng AI trong truyền thông hiện đại.', icon: 'psychology', isActive: true },
  { id: '2', step: '02', title: 'Bậc thầy Prompt', description: 'Kỹ thuật viết câu lệnh (Prompt Engineering) chuyên sâu để điều khiển ChatGPT & Claude.', icon: 'chat' },
  { id: '3', step: '03', title: 'Midjourney Basic', description: 'Làm quen với Midjourney. Tạo ra những bức ảnh nghệ thuật đầu tiên từ văn bản.', icon: 'image' },
  { id: '4', step: '04', title: 'Midjourney Pro', description: 'Kỹ thuật Parameters, Remix, Inpainting để kiểm soát chi tiết hình ảnh 100%.', icon: 'science' },
  { id: '5', step: '05', title: 'Photoshop AI Firefly', description: 'Kết hợp Generative Fill để mở rộng và chỉnh sửa hình ảnh siêu tốc.', icon: 'brush' },
  { id: '6', step: '06', title: 'AI Video (Runway/Pika)', description: 'Biến ảnh tĩnh thành video động, tạo thước phim Cinematic từ văn bản.', icon: 'movie' },
  { id: '7', step: '07', title: 'Đạo diễn Âm nhạc', description: 'Sáng tác nhạc nền, bài hát trọn vẹn bản quyền với Suno/Udio.', icon: 'music_note', isActive: true, isSpecial: true },
  { id: '8', step: '08', title: 'Phù thủy Giọng nói', description: 'Clone giọng nói, lồng tiếng đa ngôn ngữ tự nhiên với ElevenLabs.', icon: 'record_voice_over', isActive: true, isSpecial: true },
  { id: '9', step: '09', title: 'Virtual Avatars', description: 'Tạo MC ảo, người dẫn chương trình AI chuyên nghiệp với HeyGen.', icon: 'face' },
  { id: '10', step: '10', title: 'Stable Diffusion', description: 'Làm chủ công cụ mã nguồn mở mạnh mẽ nhất để tạo ảnh không giới hạn.', icon: 'edit_note' },
  { id: '11', step: '11', title: 'Quy trình tự động hóa', description: 'Xây dựng Workflow kết hợp các công cụ để sản xuất Content tự động.', icon: 'bolt' },
  { id: '12', step: '12', title: 'TỐT NGHIỆP', description: 'Dự án thực tế & Chứng nhận Chuyên gia AI Media toàn diện.', icon: 'check_circle', isActive: true, isSpecial: true },
];

export const PRICING_DATA: PricingPlan[] = [
  {
    id: 'work',
    title: 'MASTERING AI for WORK',
    subtitle: 'Cân mọi tác vụ công việc',
    oldPrice: '5.900.000đ',
    newPrice: '1.290.000đ',
    discount: '-78%',
    lessons: 10,
    weeks: 3,
    features: [
      'Giảng viên thực chiến từ tập đoàn lớn',
      '10 bài học mỗi 3 tuần',
      'Nội dung được cập nhật hàng tháng',
      'Cấp chứng nhận viên IHRAI'
    ],
    colorClass: 'teal-accent',
    buttonLabel: 'Đăng ký ngay →'
  },
  {
    id: 'media',
    title: 'MASTERING AI for MEDIA',
    subtitle: 'Sáng tạo & Truyền thông (Dành cho người không biết đồ họa)',
    oldPrice: '6.900.000đ',
    newPrice: '1.790.000đ',
    discount: '-74%',
    lessons: 12,
    weeks: 4,
    features: [
      'Giảng viên thực chiến từ tập đoàn lớn',
      '12 bài học mỗi 4 tuần',
      'Chuyên sâu Media & Sáng tạo nội dung',
      'Cấp chứng nhận viên IHRAI'
    ],
    colorClass: 'orange-accent',
    buttonLabel: 'Đăng ký ngay →'
  },
  {
    id: 'combo',
    title: 'MASTERING AI for WORK & MEDIA',
    subtitle: 'Chuyên gia AI toàn diện - Đỉnh cao sự nghiệp',
    oldPrice: '12.000.000đ',
    newPrice: '1.990.000đ',
    discount: '-83%',
    lessons: 22,
    weeks: 7,
    features: [
      'Toàn bộ quyền lợi của 2 lộ trình',
      '22 bài học chuyên sâu',
      'Nội dung cập nhật mới suốt 1 năm',
      'Ưu tiên hỗ trợ 1:1 từ đội ngũ'
    ],
    colorClass: 'red-accent',
    buttonLabel: 'HÃY ĐĂNG KÝ NGAY',
    isHot: true
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    name: 'Anh Tuấn',
    role: 'Chuyên gia / Giảng viên',
    quote: 'Kiến thức thực tế, áp dụng được ngay vào doanh nghiệp.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLkUa3f_7WsQ2mC_UZZdMwzPhfSIyB9D7gqcwdC38ngH_3va98HozNR-XX5FR1f6pqh8QGRzshw_fkTzP7XrrVSSyoIxnplNt1_QNbmGTANCFl6kgDrdXpFqvN_i_YEqwnrjn83kV2l1gECnrm1RCmxZ4wFkNw269M1GggsL89Cj_C1vxcLQfTgLtwJEv_ucmNfVjBfIxjAEJGDROdBnkzH-HTohAxnk9Tyao9eKeq7QMXrJ-JcdbtusjgrBIM362uX3Vko4rDPFA',
    gradient: 'from-orange-400 to-pink-500'
  },
  {
    name: 'Anh Huy',
    role: 'Chuyên gia / Giảng viên',
    quote: 'Biến AI thành trợ lý đắc lực nhất của bạn.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANG-6CsXq4enDfcrKg-JW7yAkZlQAOZU_NDc02gskzcLJeYpD27SFS6wVakBm7KKPlK6nx46YCU2AX_frXQ4wNQ747ayTQhDKhc_1BZ77mCnhg_bd65MzijUpHX2QcmtWmY7UDn2fKVCmLRqqJ4RPS7B-lKtPZo1lJqhw13FzwG6B0dJp6u6tsVqyHtlsW_Qt7QlDO7inbZ0Jv-JmyZdb2D7aXJZmSjNXdhwrx2lK-jf0gTwRyaINtjahC883lkwjaSxoB9hkWhX4',
    gradient: 'from-blue-400 to-purple-500'
  },
  {
    name: 'Anh Hưng',
    role: 'Chuyên gia / Giảng viên',
    quote: 'Tư duy làm chủ công cụ mới là cốt lõi.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyN5PR7qD0yVJDK-JeXBhKUP6TZMJLSJ0od7ONLYzkmD857OU6fERgVSh95NXymszjIAEAZO4ScTv8eduBuLkejJyKmKNlN-MrzxasoCu6BAVU6yzlKYS2Zh-e0cq5Ybq8Je4AfgO2POE4YlsBudivTdlWrFF6t4xDfuvBBaN64mWaRuB8C-EDsbxcZxi0iqVpoFOqIsLjwKGCJUswc0rj6v64qYV5bCfRvbdsaFKAWVf_l0vfDfGZS9fMAQdlHZNQcErtED8Upi0',
    gradient: 'from-green-400 to-teal-500'
  },
  {
    name: 'Anh Đạt',
    role: 'Chuyên gia / Giảng viên',
    quote: 'Sáng tạo không giới hạn cùng AI.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO9dYrpLLB6mcbaegwahMv3f2mxYkqS6oQVAKxS7DglHcOUZyDO9S8rHwFS4i1N3Bx82AbViK6lA1m421VM94Lx7OZ3h8-mJQJ55svWJoDKXUgbN5yMBN5ZnDGHRa4BIgkmlNFMeRiFvSX8NkszLGldMPOErW_a5Z8WYwTLICpD6Mls7etJ0WilxL3SFayzsGN0WARgUSHJJQbL05MQJsZNfUd0WEEyo_B0NLZAcoHnqx4ldNKtM9xs8vAJYzpdh3G23LUMlIu9WA',
    gradient: 'from-red-400 to-yellow-500'
  }
];
