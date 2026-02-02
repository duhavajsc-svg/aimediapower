
import React, { useState, useEffect } from 'react';
import { ROADMAP_DATA, PRICING_DATA, INSTRUCTORS } from './constants';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 5, m: 42, s: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            if (h > 0) h--;
          }
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10 h-16 flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2">
          <span className="material-icons-round text-primary text-3xl">auto_awesome</span>
          <span className="font-bold text-xl tracking-wider text-white">AI MEDIA <span className="text-primary">POWER</span></span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          <a className="hover:text-white transition-colors" href="#hero">Trang chủ</a>
          <a className="hover:text-white transition-colors" href="#problems">Giải pháp</a>
          <a className="hover:text-white transition-colors" href="#course-content">Nội dung</a>
          <a className="hover:text-white transition-colors" href="#roadmap">Lộ trình</a>
          <a className="hover:text-white transition-colors" href="#pricing">Học phí</a>
        </div>
        <button className="bg-primary hover:bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-neon transition-all transform hover:scale-105">
          Đăng Ký Ngay
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 overflow-hidden bg-hero-gradient" id="hero">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-float-delayed"></div>
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-pink-300 drop-shadow-lg">
              AI MEDIA POWER - <br />
              <span className="text-white text-glow">KHAI PHÓNG SỨC MẠNH SÁNG TẠO</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl border-l-4 border-primary pl-4">
              Dành cho Bạn và Doanh nghiệp muốn làm đồ họa & video: <br />
              <span className="font-bold text-white">NHANH - ĐẸP - CHẤT</span> mà không cần chuyên môn sâu.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-200">
                <span className="bg-blue-500/20 text-blue-400 rounded-full p-1 material-icons-round text-sm border border-blue-500/50">check</span>
                Chấm dứt cảnh chờ đợi thiết kế mệt mỏi.
              </li>
              <li className="flex items-center gap-3 text-gray-200">
                <span className="bg-blue-500/20 text-blue-400 rounded-full p-1 material-icons-round text-sm border border-blue-500/50">check</span>
                Tự tay sản xuất Media chuẩn thương mại với chi phí 0đ.
              </li>
              <li className="flex items-center gap-3 text-gray-200">
                <span className="bg-blue-500/20 text-blue-400 rounded-full p-1 material-icons-round text-sm border border-blue-500/50">check</span>
                X3 hiệu suất công việc nhờ quy trình AI thực chiến.
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-neon-button text-white px-8 py-4 rounded-xl font-bold shadow-neon hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <span>ĐĂNG KÝ NHẬN ƯU ĐÃI NGAY</span>
                <span className="material-icons-round">arrow_forward</span>
              </button>
              <button className="glass-panel text-gray-300 px-6 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <span className="material-icons-round text-yellow-400">play_circle</span>
                <span>Khóa học thực chiến</span>
              </button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-48 lg:w-96 lg:h-72 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl z-20 animate-float border-2 border-white/30 flex items-center justify-center overflow-hidden">
                <img alt="Abstract fluid art" className="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq2YdXOIRljKGEI0eh4mBsucM1tFTEKhyOG7E1y5T7TmYGDjiHP7UkMYbnjMLuNKShzDA95II5QicPLJW8a8s-6yShefvHB5XfDyWOveIxtsviks5yxFUCaVQ3o4r5f_S0vPxvDlSz2rWStsrFO5_7sp7xgYMjI4OAqb4IMAKt7rodvyymKSmmZR298h-w7cNhYkB9zTvT5MGksBbya6RldF2VKzXeXw5ruYedtVeO1s0KVmOdPhAqsqY9wPevH8nD8byE_pj1gKI" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="material-icons-round text-6xl text-white drop-shadow-lg z-30">play_circle_filled</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problems/Solutions Section */}
      <section className="py-20 bg-background-dark relative" id="problems">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 text-white uppercase tracking-tight">
            Giải Pháp Từ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">AI Media Power</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-0 lg:gap-8 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="bg-[#161b2e] p-8 lg:p-12 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent"></div>
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2 uppercase tracking-tighter">
                <span className="material-icons-round">warning</span>
                VẤN ĐỀ BẠN ĐANG GẶP PHẢI?
              </h3>
              <div className="space-y-6">
                {[
                  { icon: 'sentiment_very_dissatisfied', title: 'Bế tắc ý tưởng', desc: 'Muốn làm content nhưng đầu óc trống rỗng, không biết bắt đầu từ đâu.' },
                  { icon: 'hourglass_empty', title: 'Mệt mỏi chờ đợi', desc: 'Phụ thuộc hoàn toàn vào phòng Media/Thiết kế, tiến độ bị chậm trễ.' },
                  { icon: 'money_off', title: 'Chi phí vận hành cao', desc: 'Tốn quá nhiều tiền thuê ngoài hoặc nuôi nhân sự nhưng hiệu quả chưa tới.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="bg-red-500/10 p-3 rounded-lg text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <span className="material-icons-round text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 lg:p-12 space-y-8 relative border-l border-white/10 backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent to-blue-500"></div>
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2 uppercase tracking-tighter">
                <span className="material-icons-round">auto_awesome</span>
                SỨC MẠNH CỦA AI
              </h3>
              <div className="space-y-6 relative z-10">
                {[
                  { icon: 'rocket_launch', color: 'bg-blue-500', text: 'Biến ý tưởng thành sản phẩm chỉ trong vài phút.' },
                  { icon: 'track_changes', color: 'bg-purple-500', text: 'Chủ động 100% công việc, lấy AI làm trung tâm thực thi.' },
                  { icon: 'trending_up', color: 'bg-pink-500', text: 'Mở rộng biên lợi nhuận nhờ tối giảm chi phí sản xuất.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:border-blue-400 transition-colors">
                    <div className={`${item.color} p-2 rounded-full text-white shadow-neon`}>
                      <span className="material-icons-round text-xl">{item.icon}</span>
                    </div>
                    <p className="text-gray-200 text-sm font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Grid */}
      <section className="py-20 bg-[#0F172A]" id="course-content">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-2xl text-blue-400 font-bold mb-2 uppercase tracking-widest">Từ zero đến hero</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-white">BẠN SẼ TỰ TAY LÀM ĐƯỢC NHỮNG GÌ?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'A', title: 'ẢNH QUẢNG BÁ', desc: 'Sản phẩm & Banner thương mại cực chất', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwmzHKWEX60R58IbtiupPnI8Rp-hLRkXlozAwFdLN_XVOULqRQm8971b_oNS1g1zAroVIEFAJnXvkkVPCk2u9pY9YeBMk22yKEdg8kBMvu3u7kxD6HcdwA8KV1GDhW6mwUgNp0zFQkfG51SYZeirbI8a6bUfrmMAe41iDx7oe0hQ-3AyaYNQfNwv_MMJi3knLbVx1ZJOHyy_1COHwE15EFSOLCjYzXI8geAEp-9CsvpQb3iYqdvzHd3GF5wL6F0yjrsG1oV6CH3kc' },
              { id: 'B', title: 'INFOGRAPHIC', desc: '& Nhận diện thương hiệu số', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoijEMeqC6tAX0VSiB2pKp3yFOgWXVFCty-5GyOAiapX5OhxNwYj_ltH1OSXmCGelxfV7JskMBr1NUX9dL8Y0Eyq_BJQxbZEIcvwkNCTnyUCGwMKQHZXHL4w5N7RxEDHj26All8ldx__lcyv-YVe6Uvzecri0nJ4IOjG8B3izHocfwfruuXDSKrXSKH_PPrL94hBkr2Hf5ty-yJ9DpNmIMbZ7NmpWeyBlxmkPrzmKc670w5ZTZCFpzTM_fYaJpbSQZAmeLU5zQ_rg' },
              { id: 'HOT', title: 'VIDEO STORYTELLING', desc: '& Hoạt hình 3D sống động', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2F6jzwS2OyNDOXK7reQTYqZERMbaerFedxzDKMK9Mf4wTRYy1aHxmBimBxd5qDwEGYqkcGIj3-cLHcwgYuIaMROP_j2rQuNPXTzM6-dZpAWqbhlWCsYzZBBRIUgudroYMDQvi7Jg2GpUnzaJkZGML2epbt8uADdp-emg0Y9n_Z-63sDxWOlcoh_ILa1yJMNXohL2MepPUj1w_x4-qDWU7kC4tNMHryyGiymiEPYHAc30zxFjXxSr9wR46DTEM4BqL_rYDot3YQnI', featured: true },
              { id: 'D', title: 'SÁNG TÁC NHẠC', desc: '& Giọng đọc AI cảm xúc', icon: 'music_note' },
              { id: 'E', title: 'BẮT TREND LỄ HỘI', desc: 'Tạo nội dung theo mùa', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4g8ypT4V7r2Kusy9Fx1-oD7UNJDkSHygjz0vA2nNHOcF5Ki-bpSFyXDV0jTShvOevzj4QYi8Yg_mC7pkfOyZw4hvDQwKIUDvr_QBtWuNR99Gu7_tJhXsd3W1Rs-HYWyu6jy0hwyJI3pha4oQsSv6nEqQXNzsRwqs6VT6Em-XA7p1qAFxj8tpskJPpYlSO4XmfcLzR0cIaVLDa0yzjFE1oZrr2Y-9Gk8S7Lal01SrAwBLRCdKlKqesyEE8stlP_C4N_rTI06N9mCU' }
            ].map((item, idx) => (
              <div key={idx} className={`group relative glass-panel rounded-2xl p-1 overflow-hidden hover:scale-[1.02] transition-transform duration-300 ${item.featured ? 'lg:row-span-2 border-primary/50 shadow-neon' : ''}`}>
                <div className="bg-black/40 rounded-xl overflow-hidden h-48 lg:h-full lg:min-h-[200px] relative">
                  {item.img ? (
                    <img alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={item.img} />
                  ) : (
                    <div className="w-full h-full bg-slate-900 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-20"></div>
                      <span className="material-icons-round text-4xl text-white animate-pulse">{item.icon}</span>
                    </div>
                  )}
                  <div className={`absolute top-2 left-2 px-2 py-1 rounded text-[10px] font-bold ${item.id === 'HOT' ? 'bg-primary' : 'bg-black/60 border border-white/20'}`}>
                    {item.id}
                  </div>
                </div>
                <div className="p-5 relative z-10">
                  <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-background-dark relative" id="target-audience">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tight text-glow">
              KHOÁ HỌC NÀY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">DÀNH CHO AI?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: 'apartment', color: 'text-blue-400', glow: 'rgba(59,130,246,0.5)', title: 'Doanh nghiệp', desc: 'Tối ưu hóa quy trình Media chuyên nghiệp.' },
              { icon: 'work', color: 'text-purple-400', glow: 'rgba(168,85,247,0.5)', title: 'Dân văn phòng', desc: 'Sáng tạo nội dung tức thì phục vụ công việc.' },
              { icon: 'palette', color: 'text-teal-400', glow: 'rgba(20,184,166,0.5)', title: 'Designer/Media', desc: 'Nâng cấp quy trình sáng tạo kỷ nguyên AI.' },
              { icon: 'school', color: 'text-orange-400', glow: 'rgba(249,115,22,0.5)', title: 'Giảng viên', desc: 'Làm bài giảng, video giáo dục thu hút.' },
              { icon: 'shopping_cart', color: 'text-red-400', glow: 'rgba(239,68,68,0.5)', title: 'KD Online', desc: 'Tự xây kênh, làm hình ảnh bán hàng tiết kiệm.' }
            ].map((audience, idx) => (
              <div key={idx} className="audience-card group">
                <div className="mb-6 h-32 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <span className={`material-symbols-outlined text-6xl ${audience.color}`} style={{ filter: `drop-shadow(0 0 15px ${audience.glow})` }}>
                    {audience.icon}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{audience.title}</h3>
                <p className="text-gray-400 text-xs">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-[#0a0f1d]" id="roadmap">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-orange-accent font-bold tracking-widest text-xs uppercase mb-3 block">LỘ TRÌNH 2</span>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              MASTERING AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">FOR MEDIA</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {ROADMAP_DATA.map((step) => (
              <div key={step.id} className={`roadmap-grid-card group ${step.isSpecial ? 'highlight-card' : ''} ${step.title === 'TỐT NGHIỆP' ? 'graduation-card' : ''}`}>
                <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs z-20 ${step.isActive ? 'bg-orange-accent shadow-orange-glow' : 'bg-slate-800 border border-white/20'}`}>
                  {step.step}
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <span className={`material-symbols-outlined text-3xl ${step.isSpecial ? 'text-orange-accent' : 'text-blue-400'}`}>
                    {step.icon}
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-12 uppercase tracking-wide">Đội ngũ giảng viên thực chiến</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTRUCTORS.map((ins, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                <div className={`w-24 h-24 mx-auto mb-4 rounded-full p-1 bg-gradient-to-r ${ins.gradient}`}>
                  <img alt={ins.name} className="w-full h-full rounded-full object-cover border-2 border-white" src={ins.image} />
                </div>
                <h4 className="text-gray-900 font-bold text-lg">{ins.name}</h4>
                <p className="text-gray-500 text-[10px] uppercase mb-3">{ins.role}</p>
                <p className="text-gray-600 text-xs italic">"{ins.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 bg-[#0a0f1d] relative" id="pricing">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 inline-block">CHOOSE YOUR PATH</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mt-2">Master AI. <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400">Unleash Creativity.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {PRICING_DATA.map((plan) => (
              <div key={plan.id} className="relative group h-full">
                {plan.isHot && (
                  <div className="absolute -inset-[3px] bg-gradient-to-br from-red-500 via-purple-600 to-blue-600 rounded-[2.5rem] blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}
                <div className={`relative ${plan.isHot ? 'bg-background-dark/90 backdrop-blur-xl border-white/20 shadow-red-glow' : 'glass-panel border-white/5'} rounded-[2rem] p-8 flex flex-col h-full hover:border-${plan.colorClass}/50 transition-all duration-300`}>
                  {plan.isHot && <div className="absolute top-4 right-4 bg-red-accent text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">HOT</div>}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-${plan.colorClass} font-bold text-sm tracking-wider uppercase`}>{plan.id}</span>
                    <span className={`material-symbols-outlined text-${plan.colorClass} bg-${plan.colorClass}/10 p-2 rounded-xl`}>
                      {plan.id === 'work' ? 'work' : plan.id === 'media' ? 'movie' : 'star'}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-2 leading-tight uppercase">{plan.title}</h3>
                  <p className="text-gray-400 text-xs mb-8">{plan.subtitle}</p>
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-500 line-through text-lg">{plan.oldPrice}</span>
                      <span className={`bg-${plan.colorClass}/10 text-${plan.colorClass} text-[10px] px-2 py-0.5 rounded font-bold`}>{plan.discount}</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl lg:text-5xl font-black text-white">{plan.newPrice}</span>
                      <span className="text-gray-400 text-xs">/ 1 người</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className={`material-symbols-outlined text-${plan.colorClass} text-lg mt-0.5`}>check_circle</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.isHot ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white' : 'bg-white/5 border border-white/10 text-white hover:bg-' + plan.colorClass}`}>
                    {plan.buttonLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Sticky CTA */}
      <footer className="pt-24 pb-12 bg-background-dark border-t border-white/10 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="material-icons-round text-primary text-2xl">auto_awesome</span>
              <span className="font-bold text-lg tracking-wider text-white">AI MEDIA POWER</span>
            </div>
            <p className="text-gray-500 text-sm">Hệ sinh thái đào tạo AI thực chiến hàng đầu Việt Nam.</p>
          </div>
          <div className="space-y-4">
            <h5 className="text-white font-bold uppercase text-sm">Liên hệ</h5>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-primary text-xl">call</span>
                <span>Hotline: 0987-xxx-xxx</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-600 text-xs py-8 border-t border-white/5">
          © 2023 AI Media Power. All rights reserved.
        </div>
      </footer>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] glass-panel border-t border-white/20 py-4 px-6 md:px-12 backdrop-blur-2xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Ưu đãi kết thúc sau:</span>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <span className="text-white font-black text-xl leading-none">{String(timeLeft.h).padStart(2, '0')}</span>
                </div>
                <span className="text-gray-500 font-bold">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-white font-black text-xl leading-none">{String(timeLeft.m).padStart(2, '0')}</span>
                </div>
                <span className="text-gray-500 font-bold">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-red-500 font-black text-xl leading-none animate-pulse">{String(timeLeft.s).padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="hidden sm:block text-right">
              <span className="text-[10px] text-gray-400 block font-bold uppercase">Combo Tiết Kiệm</span>
              <span className="text-red-500 font-black text-lg">1,990,000đ</span>
            </div>
            <a className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-500 text-white px-10 py-3 rounded-full font-black text-sm tracking-widest flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105" href="#pricing">
              HÃY ĐĂNG KÝ NGAY
              <span className="material-symbols-outlined text-lg">bolt</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
