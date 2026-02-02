
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

export const EXCLUSIVE_BENEFITS = [
  { title: 'Học lại miễn phí', desc: 'Học đi học lại online trong 1 năm để cập nhật kiến thức mới.', icon: 'all_inclusive', color: 'text-blue-400' },
  { title: 'Xem lại Record', desc: 'Video quay lại từng buổi học, không lo mất bài hay bỏ lỡ.', icon: 'lock', color: 'text-purple-400' },
  { title: 'Hỗ trợ 1-1', desc: 'Qua Zalo/Telegram/Group kín 24/7 giải đáp mọi thắc mắc.', icon: 'forum', color: 'text-teal-400' },
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
    features: ['Giảng viên thực chiến', '10 bài học mỗi 3 tuần'],
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
    features: ['12 bài học mỗi 4 tuần', 'Chuyên sâu Media'],
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
    features: ['Quyền lợi của 2 lộ trình', 'Ưu tiên hỗ trợ 1:1'],
    colorClass: 'red-accent',
    buttonLabel: 'HÃY ĐĂNG KÝ NGAY',
    isHot: true
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    name: 'Tuân AI',
    role: 'Founder AI Master',
    quote: 'Kiến thức thực tế, áp dụng được ngay vào doanh nghiệp.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhajMyTIIp9MEHPnS1l-KFTGvwgyH1aAUfK5LmkEZoha3ypCkqqpi_x6-dQtsKrj4gMUgMwAOso2cPr6nT1HugKBHzHoOclrdloXGHg-WFOTlMui3tuhWBDu-yUHrZLp4k8xxVGTICWzzavCbOQEgRzAX4UEpf8C34RjP_X1jy01v-FydmQHtPatGnx8cX1ArLHUj2FjEP9UpZbPSzxWD2_ZZ2J73pOoGgCUv1lxJ31hQvx4RgcRxfYAAnt9qkVp69rEeJVFokyZ0',
    gradient: 'from-blue-500 to-purple-500',
    specialty: 'AI ART'
  },
  {
    name: 'Huy Editor',
    role: 'Head of Media',
    quote: 'Biến AI thành trợ lý đắc lực nhất của bạn.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY5zIHHlItoIZ4zXdZESH3OFJ_AnxTalPC1EaLshsnUN6fRMa7BlUOAf_AwTmHM7z-OVW7g7FoYgtOg-R7uHzrtl1JDfnmShrSmQ6zcQ16FRW2MPT91TxdJyJo8R_yWYuNal9pmYCo-8ydwlTwEVwQtX5RqUYfGtwdSSCdxEFagAYeVLLE2vXZtFPvGgs0Tir04DFyxYB061uWZ981IqVFFMSaSZ5AwafhKEbzcnRzugY4v3vQlKm4MNPbMuRj_wKq45wYbxIfQXM',
    gradient: 'from-orange-500 to-red-500',
    specialty: 'VIDEO'
  },
  {
    name: 'Hưng Sound',
    role: 'Music Producer',
    quote: 'Tư duy làm chủ công cụ mới là cốt lõi.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRPfzDe37E4qkTNelvkQxmvBAYMj9D48zHbZR2oxxd7uFXXlMjNI7mE7Gj-UGT_6mbQGCjyShsbtN__aRn9adDrI1dsDY5N-fGAvRQiypZ9-rvf7OBcifRZi7TAQhMBWQfOPtNXiz8ZS73mdsV3s-cOHXeOdoEX620lzs8ySXjsKEwSUCJoVSrG_kxYP3xUJutjeZAofCH-gukHjBWUw44jvq7_Y5lL4fTxFt-JcTVJPfuaVCBwvf0PmrxQm3zZLwvvNM_s1l-Pm8',
    gradient: 'from-green-400 to-emerald-600',
    specialty: 'MUSIC'
  },
  {
    name: 'Đạt Dev',
    role: 'Automation Expert',
    quote: 'Sáng tạo không giới hạn cùng AI.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALC5qHgfO0zppKrgLIJgKyUkqcFXyIvBbNftQNnjAxE8uYwV2ndfRKI58MpC3qpet5QUqV5AfxoN7dlE3hFy5YjP9GHf9guuQ3r_3KdVJvsL1cH-qC7KwRfhMJv_DOkvY2hcR8xGitFsFeXIEyb3RTNQX0y2knSnuC39l5q7LdNz5cwrl2_7KUbJjiy2eeu7M6vJOobeMz6SlKS_TXFuOqAasAQA4UW6GjoiZlac8i1kHtwLJMxlJyKlMNULZgwbqQe7PuAmRobOQ',
    gradient: 'from-purple-500 to-pink-500',
    specialty: 'AUTO'
  }
];

export const STUDENT_SUCCESS_GALLERY = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBwmzHKWEX60R58IbtiupPnI8Rp-hLRkXlozAwFdLN_XVOULqRQm8971b_oNS1g1zAroVIEFAJnXvkkVPCk2u9pY9YeBMk22yKEdg8kBMvu3u7kxD6HcdwA8KV1GDhW6mwUgNp0zFQkfG51SYZeirbI8a6bUfrmMAe41iDx7oe0hQ-3AyaYNQfNwv_MMJi3knLbVx1ZJOHyy_1COHwE15EFSOLCjYzXI8geAEp-9CsvpQb3iYqdvzHd3GF5wL6F0yjrsG1oV6CH3kc',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAoijEMeqC6tAX0VSiB2pKp3yFOgWXVFCty-5GyOAiapX5OhxNwYj_ltH1OSXmCGelxfV7JskMBr1NUX9dL8Y0Eyq_BJQxbZEIcvwkNCTnyUCGwMKQHZXHL4w5N7RxEDHj26All8ldx__lcyv-YVe6Uvzecri0nJ4IOjG8B3izHocfwfruuXDSKrXSKH_PPrL94hBkr2Hf5ty-yJ9DpNmIMbZ7NmpWeyBlxmkPrzmKc670w5ZTZCFpzTM_fYaJpbSQZAmeLU5zQ_rg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC4g8ypT4V7r2Kusy9Fx1-oD7UNJDkSHygjz0vA2nNHOcF5Ki-bpSFyXDV0jTShvOevzj4QYi8Yg_mC7pkfOyZw4hvDQwKIUDvr_QBtWuNR99Gu7_tJhXsd3W1Rs-HYWyu6jy0hwyJI3pha4oQsSv6nEqQXNzsRwqs6VT6Em-XA7p1qAFxj8tpskJPpYlSO4XmfcLzR0cIaVLDa0yzjFE1oZrr2Y-9Gk8S7Lal01SrAwBLRCdKlKqesyEE8stlP_C4N_rTI06N9mCU',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC2F6jzwS2OyNDOXK7reQTYqZERMbaerFedxzDKMK9Mf4wTRYy1aHxmBimBxd5qDwEGYqkcGIj3-cLHcwgYuIaMROP_j2rQuNPXTzM6-dZpAWqbhlWCsYzZBBRIUgudroYMDQvi7Jg2GpUnzaJkZGML2epbt8uADdp-emg0Y9n_Z-63sDxWOlcoh_ILa1yJMNXohL2MepPUj1w_x4-qDWU7kC4tNMHryyGiymiEPYHAc30zxFjXxSr9wR46DTEM4BqL_rYDot3YQnI'
];
