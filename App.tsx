import React, { useState, useEffect } from 'react';
import { ROADMAP_DATA, PRICING_DATA, INSTRUCTORS, EXCLUSIVE_BENEFITS } from './constants';

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
    <div className="min-h-screen text-gray-100 selection:bg-primary selection:text-white bg-[#0F172A]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10 h-16 flex items-center justify-between px-4 lg:px-12">
        <div className="flex items-center gap-2">
          <span className="material-icons-round text-primary text-2xl lg:text-3xl">auto_awesome</span>
          <span className="font-bold text-lg lg:text-xl tracking-wider text-white uppercase whitespace-nowrap">AI MEDIA <span class="text-primary italic">Power</span></span>
        </div>
        <div className="hidden md:flex gap-4 lg:gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
          <a className="hover:text-white transition-colors whitespace-nowrap" href="#hero">Trang chủ</a>
          <a className="hover:text-white transition-colors whitespace-nowrap" href="#roadmap">Lộ trình</a>
          <a className="hover:text-white transition-colors whitespace-nowrap" href="#exclusive-benefits">Quyền lợi</a>
          <a className="hover:text-white transition-colors whitespace-nowrap" href="#pricing">Học phí</a>
        </div>
        <button className="bg-primary hover:bg-pink-600 text-white px-4 lg:px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-wider shadow-neon transition-all transform hover:scale-105 whitespace-nowrap">
          Đăng Ký Ngay
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 px-6 lg:px-12 overflow-hidden bg-hero-gradient" id="hero">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-float-delayed"></div>
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-pink-300 drop-shadow-lg uppercase tracking-tighter text-balance">
              AI MEDIA POWER - <br />
              <span className="text-white text-glow">Khai Phóng Sức Mạnh Sáng Tạo</span>
            </h1>
            <p className="text-base lg:text-lg text-gray-300 max-w-xl border-l-4 border-primary pl-6 leading-relaxed mx-auto lg:mx-0 text-balance font-medium">
              Dành cho Bạn và Doanh nghiệp muốn làm đồ họa & video: <br />
              <span className="font-black text-white italic">NHANH - ĐẸP - CHẤT</span> mà không cần chuyên môn sâu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button className="bg-neon-button text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-black shadow-neon hover:shadow-[0_0_40px_rgba(217,70,239,0.7)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 uppercase tracking-tighter text-sm lg:text-lg whitespace-nowrap">
                <span>ĐĂNG KÝ NHẬN ƯU ĐÃI</span>
                <span className="material-icons-round">bolt</span>
              </button>
              <button className="glass-panel text-gray-300 px-6 lg:px-8 py-4 lg:py-5 rounded-2xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                <span className="material-icons-round text-yellow-400">play_circle</span>
                <span>Khóa học thực chiến</span>
              </button>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] lg:h-[550px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-xl">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-48 sm:w-80 sm:h-60 lg:w-[480px] lg:h-[360px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-2xl z-20 animate-float border-2 border-white/30 flex items-center justify-center overflow-hidden group">
                <img alt="AI Media Power" className="w-full h-full object-cover opacity-80 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000" src="https://i.postimg.cc/PrKVC1t8/Thiet-ke-chua-co-ten-(13).png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="material-icons-round text-6xl lg:text-8xl text-white drop-shadow-lg z-30 animate-pulse">play_circle_filled</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Target Audience */}
      <section className="py-24 bg-background-dark relative overflow-hidden" id="target-audience">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tight text-glow text-balance">
                KHOÁ HỌC NÀY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 italic">DÀNH CHO AI?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {[
              { icon: 'apartment', color: 'text-blue-400', title: 'Doanh nghiệp', desc: 'Tối ưu hóa phòng Media, truyền thông chuyên nghiệp.' },
              { icon: 'laptop_mac', color: 'text-purple-400', title: 'Nhân viên VP', desc: 'Cần công cụ sáng tạo nội dung nhanh gọn cho công việc.' },
              { icon: 'palette', color: 'text-teal-400', title: 'Designer/ Media', desc: 'Nâng cấp quy trình sáng tạo, làm chủ các công cụ AI.' },
              { icon: 'school', color: 'text-orange-400', title: 'Giảng viên', desc: 'Làm bài giảng, slide, video giáo dục thu hút hấp dẫn.' },
              { icon: 'shopping_cart', color: 'text-red-400', title: 'KD Online', desc: 'Tự xây kênh, làm hình ảnh bán hàng tiết kiệm chi phí.' }
            ].map((aud, idx) => (
              <div key={idx} className="glass-panel p-6 lg:p-8 rounded-[2rem] text-center border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group flex flex-col items-center">
                <div className="mb-6 h-24 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <span className={`material-symbols-outlined text-5xl lg:text-6xl ${aud.color} drop-shadow-2xl`}>{aud.icon}</span>
                </div>
                <h3 className="text-white font-black text-base lg:text-lg mb-3 uppercase tracking-tighter leading-tight min-h-[3rem] flex items-center justify-center">{aud.title}</h3>
                <p className="text-gray-400 text-[10px] lg:text-xs font-medium leading-relaxed">{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-[#0a0f1d] relative overflow-hidden" id="roadmap">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-orange-accent font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">LỘ TRÌNH CHUYÊN SÂU</span>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none text-balance">
                MASTERING AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]">FOR MEDIA</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-base lg:text-lg font-medium italic text-balance">
                Từ người mới bắt đầu đến chuyên gia sáng tạo nội dung số với 12 bước chinh phục công nghệ AI đỉnh cao.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROADMAP_DATA.map((step) => (
              <div key={step.id} className={`relative glass-panel p-7 lg:p-8 rounded-3xl border-white/10 transition-all duration-300 group hover:-translate-y-2 hover:border-white/30 ${step.isSpecial ? 'bg-gradient-to-br from-orange-500/10 to-transparent border-orange-500/30' : ''} ${step.id === '12' ? 'bg-gradient-to-br from-orange-500 to-blue-600 !border-none !shadow-[0_0_30px_rgba(249,115,22,0.5)]' : ''}`}>
                <div className={`absolute -top-3 -left-3 w-9 h-9 rounded-full flex items-center justify-center font-black text-xs z-20 ${step.id === '12' ? 'bg-white text-orange-500 border-2 border-orange-500' : step.isSpecial ? 'bg-orange-accent text-white' : 'bg-[#1e293b] text-gray-400 border border-white/10'}`}>
                  {step.step}
                </div>
                <div className={`${step.id === '12' ? 'text-white' : step.isSpecial ? 'text-orange-accent' : 'text-blue-400'} mb-4`}>
                    <span className="material-symbols-outlined text-3xl lg:text-4xl">{step.icon}</span>
                </div>
                <h3 className={`text-lg lg:text-xl font-black mb-3 uppercase tracking-tighter leading-tight ${step.id === '12' ? 'text-white italic' : 'text-white'}`}>{step.title}</h3>
                <p className={`text-xs lg:text-sm leading-relaxed font-medium ${step.id === '12' ? 'text-white/90' : 'text-gray-400'}`}>{step.description}</p>
                {step.id === '12' && <span className="material-symbols-outlined absolute bottom-6 right-6 text-6xl text-white opacity-20">check_circle</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-background-dark relative" id="pricing">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <span className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase mb-6 inline-block">BẢNG GIÁ KHÓA HỌC</span>
            <h2 className="text-4xl lg:text-6xl font-black text-white mt-4 uppercase tracking-tighter text-balance leading-[1.1]">
                Master AI. <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 italic">Unleash Creativity.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PRICING_DATA.map((plan) => (
              <div key={plan.id} className="relative group flex flex-col h-full">
                {plan.isHot && (
                  <div className="absolute -inset-1 bg-gradient-to-br from-red-500 via-purple-600 to-blue-600 rounded-[2.8rem] blur-xl opacity-40 group-hover:opacity-100 transition-opacity"></div>
                )}
                <div className={`relative flex flex-col h-full rounded-[2.5rem] border-2 backdrop-blur-xl ${plan.isHot ? 'border-white/20 bg-[#141824] shadow-[0_0_30px_rgba(239,68,68,0.1)]' : 'border-white/5 glass-panel'} p-6 lg:p-10 transition-all duration-300 hover:border-white/30 flex-1`}>
                  
                  {plan.isHot && (
                    <div className="absolute top-4 right-8 flex items-center gap-1 z-20">
                      <div className="bg-red-accent/90 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">BEST VALUE</div>
                      <span className="material-icons-round text-red-accent text-xl animate-pulse">star</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-8">
                    <span className={`text-${plan.colorClass} font-black text-[10px] tracking-widest uppercase italic`}>
                      Lộ trình {plan.id === 'work' ? '1' : plan.id === 'media' ? '2' : 'Combo'}
                    </span>
                    <span className={`material-symbols-outlined text-${plan.colorClass} text-4xl`}>
                      {plan.id === 'work' ? 'work' : plan.id === 'media' ? 'movie' : ''}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-[1.75rem] font-black text-white mb-2 uppercase tracking-tighter leading-none italic break-words">
                    {plan.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] lg:text-[11px] font-bold mb-10 leading-relaxed uppercase opacity-80">
                    {plan.subtitle}
                  </p>

                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-gray-500 line-through text-base lg:text-lg font-bold">{plan.oldPrice}</span>
                      <span className={`bg-${plan.colorClass}/20 text-${plan.colorClass} text-[10px] font-black px-2 py-0.5 rounded-lg`}>{plan.discount}</span>
                    </div>
                    <div className="flex flex-wrap items-end gap-1 overflow-hidden">
                      <span className="text-4xl sm:text-3xl lg:text-5xl font-black text-white tracking-tighter leading-none whitespace-nowrap">
                        {plan.newPrice}
                      </span>
                      <span className="text-gray-500 text-[9px] font-black uppercase tracking-widest pb-1">/ NGƯỜI</span>
                    </div>
                  </div>

                  <ul className="space-y-6 mb-12 flex-grow">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-4 text-gray-300 font-medium">
                        <span className={`material-symbols-outlined text-${plan.colorClass} text-xl lg:text-2xl`}>check_circle</span>
                        <span className="text-xs lg:text-sm leading-tight text-balance">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-5 rounded-[1.8rem] font-black text-sm lg:text-base transition-all uppercase tracking-tighter shadow-xl ${plan.isHot ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'} whitespace-nowrap`}>
                    {plan.buttonLabel} {plan.id !== 'combo' && '→'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Benefits */}
      <section className="py-24 bg-background-dark relative overflow-hidden" id="exclusive-benefits">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tight text-glow text-balance">
                QUYỀN LỢI <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-600 italic">ĐỘC QUYỀN</span>
            </h2>
            <p className="text-orange-400 font-black tracking-widest mt-4 uppercase text-[10px] lg:text-xs">CHỈ CÓ TẠI AI MEDIA POWER</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              {EXCLUSIVE_BENEFITS.map((ben, idx) => (
                <div key={idx} className="glass-panel p-8 rounded-[2rem] border-white/10 hover:border-white/30 hover:bg-white/5 transition-all text-center flex flex-col items-center group">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 mb-6 flex items-center justify-center">
                    <span className={`material-symbols-outlined text-6xl lg:text-7xl ${ben.color} group-hover:scale-110 transition-transform`}>{ben.icon}</span>
                  </div>
                  <h3 className="text-white font-black text-lg lg:text-xl mb-3 uppercase tracking-tighter leading-tight">{ben.title}</h3>
                  <p className="text-gray-400 text-[10px] lg:text-xs font-medium leading-relaxed">{ben.desc}</p>
                </div>
              ))}
              <div className="sm:col-span-3 glass-panel p-8 lg:p-10 rounded-[2.5rem] border-white/10 flex flex-col sm:flex-row items-center gap-8 lg:gap-10 hover:bg-white/5 transition-all">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-[2rem] border border-white/10">
                    <span className="material-symbols-outlined text-6xl lg:text-7xl text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">business_center</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-3 uppercase tracking-tighter italic leading-none">Support Doanh nghiệp</h3>
                    <p className="text-gray-400 text-xs lg:text-sm font-medium">Hệ thống group hỗ trợ riêng biệt cho doanh nghiệp, giải quyết bài toán vận hành Media thực tế.</p>
                  </div>
              </div>
            </div>
            {/* Gold Card */}
            <div className="lg:col-span-4 glass-panel border-yellow-500/40 bg-gradient-to-br from-yellow-500/10 to-transparent p-10 rounded-[3rem] shadow-[0_0_30px_rgba(255,215,0,0.1)] flex flex-col items-center justify-center text-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.1),_transparent_70%)] animate-pulse"></div>
                <span className="material-symbols-outlined text-8xl lg:text-9xl text-yellow-400 drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] animate-float mb-8">verified_user</span>
                <h3 className="text-3xl lg:text-4xl font-black text-yellow-400 mb-4 uppercase italic leading-none">Bảo hành kiến thức</h3>
                <p className="text-gray-300 text-xs lg:text-sm font-medium leading-relaxed mb-6">Quên bài? Sót buổi? Học lại ngay khóa sau hoàn toàn miễn phí, hỗ trợ trọn đời.</p>
                <div className="bg-yellow-400/20 px-6 py-2 rounded-full border border-yellow-400/40">
                  <span className="text-yellow-400 font-black text-[10px] uppercase tracking-widest whitespace-nowrap">Cam kết làm được sản phẩm</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-32 bg-background-dark relative overflow-hidden" id="register">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-4 italic text-balance">
                ĐỪNG ĐỂ ĐỐI THỦ VƯỢT MẶT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-glow">BẠN BẰNG CÔNG NGHỆ!</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            {/* Column 1: Opening Date */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center mb-8">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/40 transition-all"></div>
                <div className="relative z-10 bg-white/5 border border-blue-500/40 w-full h-full rounded-[2.5rem] flex items-center justify-center shadow-neon overflow-hidden">
                  <span className="material-symbols-outlined text-6xl lg:text-7xl text-blue-400 drop-shadow-2xl">calendar_month</span>
                </div>
              </div>
              <h4 className="text-white font-black text-2xl lg:text-3xl mb-2 uppercase tracking-tighter italic leading-none whitespace-nowrap">Lịch khai giảng:</h4>
              <p className="text-gray-400 text-xl lg:text-2xl font-bold tracking-tight">Tháng này</p>
            </div>

            {/* Column 2: Form */}
            <div className="glass-panel p-10 lg:p-12 rounded-[3.5rem] border-white/20 relative backdrop-blur-3xl bg-white/5 shadow-glass hover:border-primary/50 transition-all">
              <form className="space-y-5">
                <input className="form-input h-14 lg:h-16 text-base lg:text-lg font-bold placeholder:text-gray-600" placeholder="Họ tên của bạn |" type="text" />
                <input className="form-input h-14 lg:h-16 text-base lg:text-lg font-bold placeholder:text-gray-600" placeholder="Số điện thoại |" type="tel" />
                <input className="form-input h-14 lg:h-16 text-base lg:text-lg font-bold placeholder:text-gray-600" placeholder="Địa chỉ Email |" type="email" />
                <button className="w-full bg-pink-button py-5 lg:py-6 rounded-3xl text-white font-black text-base lg:text-xl shadow-[0_0_40px_rgba(217,70,239,0.5)] hover:scale-[1.03] transition-all flex items-center justify-center gap-3 uppercase tracking-tighter whitespace-nowrap">
                  <span>👉 ĐĂNG KÝ GIỮ CHỖ</span>
                </button>
              </form>
            </div>

            {/* Column 3: Commitment */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center mb-8">
                <div className="absolute inset-0 bg-gray-400/10 blur-3xl rounded-full"></div>
                <div className="relative z-10 bg-white/5 border border-white/20 w-full h-full rounded-[2.5rem] flex items-center justify-center shadow-2xl">
                  <span className="material-symbols-outlined text-6xl lg:text-7xl text-gray-300 drop-shadow-2xl">verified_user</span>
                  <div className="absolute -top-3 -right-3 bg-green-500 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-white font-bold border-4 border-background-dark shadow-xl">
                    <span className="material-symbols-outlined text-xl lg:text-2xl font-black">check</span>
                  </div>
                </div>
              </div>
              <h4 className="text-white font-black text-2xl lg:text-3xl mb-2 uppercase tracking-tighter italic leading-none whitespace-nowrap">Cam kết vàng:</h4>
              <p className="text-gray-400 text-base lg:text-lg font-bold leading-tight text-balance">Hoàn tiền 100% nếu không <br /> làm được sản phẩm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-background-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-20 pb-20 border-b border-white/5">
             <div className="space-y-6 max-w-md">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="material-icons-round text-primary text-4xl lg:text-5xl">auto_awesome</span>
                  <span className="font-black text-3xl lg:text-4xl tracking-tighter text-white uppercase italic whitespace-nowrap">AI Media <span class="text-primary">Power</span></span>
                </div>
                <p className="text-gray-500 font-medium text-base lg:text-lg leading-relaxed text-balance">Hệ thống đào tạo AI thực chiến hàng đầu Việt Nam. Khai phóng tiềm năng sáng tạo không giới hạn.</p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-center lg:text-left">
                <div className="space-y-6">
                  <h5 className="text-white font-black uppercase tracking-widest text-[10px]">Liên hệ chúng tôi</h5>
                  <ul className="space-y-4 flex flex-col items-center lg:items-start">
                    <li className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                        <span className="material-symbols-outlined text-2xl">call</span>
                      </div>
                      <span className="text-white font-bold text-lg lg:text-xl tracking-tight whitespace-nowrap">09xx-xxx-xxx</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h5 className="text-white font-black uppercase tracking-widest text-[10px]">Kết nối xã hội</h5>
                  <div className="flex justify-center lg:justify-start gap-4">
                    {['FB', 'TT', 'YT', 'Zalo'].map((s) => (
                      <a key={s} href="#" className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl glass-panel flex items-center justify-center border-white/10 hover:bg-white/10 transition-all font-black text-[10px] text-white">
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
             </div>
          </div>
          <div className="text-center text-gray-700 text-[10px] font-black uppercase tracking-[0.5em]">
            © 2024 AI Media Power • All Rights Reserved
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] glass-panel border-t border-white/20 py-4 lg:py-5 px-6 lg:px-12 backdrop-blur-2xl">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 lg:gap-6">
          <div className="flex items-center gap-6 lg:gap-10">
            <div className="flex flex-col">
              <span className="text-[9px] lg:text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1 leading-none whitespace-nowrap">Kết thúc sau:</span>
              <div className="flex items-center gap-2 lg:gap-3">
                {[timeLeft.h, timeLeft.m, timeLeft.s].map((unit, i) => (
                  <React.Fragment key={i}>
                    <span className={`text-white font-black text-xl lg:text-2xl tabular-nums ${i === 2 ? 'text-red-500 animate-pulse' : ''}`}>{String(unit).padStart(2, '0')}</span>
                    {i < 2 && <span className="text-gray-600 font-black text-xl lg:text-2xl leading-none">:</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 lg:gap-8 w-full sm:w-auto">
            <div className="hidden sm:block text-right">
              <span className="text-[9px] lg:text-[10px] text-gray-400 block font-black uppercase tracking-widest mb-1 whitespace-nowrap">Combo Tiết Kiệm</span>
              <span className="text-red-500 font-black text-2xl lg:text-3xl tracking-tighter leading-none whitespace-nowrap">1,990,000đ</span>
            </div>
            <a className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-500 text-white px-8 lg:px-14 py-4 lg:py-5 rounded-full font-black text-base lg:text-lg tracking-tighter flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all transform hover:scale-105 uppercase whitespace-nowrap" href="#register">
              ĐĂNG KÝ NGAY
              <span className="material-icons-round text-xl lg:text-2xl">bolt</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;