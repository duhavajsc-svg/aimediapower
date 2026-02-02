import React, { useState } from 'react';
import { generateContentIdeas } from '../services/geminiService';

const IdeaGenerator: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [ideas, setIdeas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche) return;
    setLoading(true);
    try {
      const result = await generateContentIdeas(niche);
      setIdeas(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-panel p-10 lg:p-14 rounded-[3rem] border border-primary/20 max-w-5xl mx-auto shadow-[0_0_50px_rgba(217,70,239,0.1)] relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] pointer-events-none group-hover:bg-primary/10 transition-all"></div>
      
      <div className="flex flex-col items-center text-center mb-12 relative z-10">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30 mb-6 shadow-neon animate-pulse-glow">
          <span className="material-icons-round text-primary text-4xl">auto_fix_high</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-white uppercase italic tracking-tight leading-none mb-4">Sáng tạo Ý tưởng với Gemini AI</h2>
        <p className="text-gray-400 max-w-2xl text-lg font-medium">Trải nghiệm sức mạnh của AI ngay lập tức. Nhập chủ đề của bạn để nhận gợi ý content "triệu view" được tối ưu hóa bởi trí tuệ nhân tạo.</p>
      </div>
      
      <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row gap-5 mb-14 relative z-10">
        <input 
          type="text" 
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          placeholder="Ví dụ: Mỹ phẩm sạch, Đồ ăn vặt, Bất động sản..."
          className="form-input flex-grow text-lg py-5 px-8 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10"
        />
        <button 
          disabled={loading}
          type="submit"
          className="bg-primary hover:bg-pink-600 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-neon disabled:opacity-50 flex items-center justify-center gap-3 text-lg uppercase tracking-wider"
        >
          {loading ? (
            <span className="material-icons-round animate-spin text-2xl">sync</span>
          ) : (
            <>
              <span>Gợi ý ngay</span>
              <span className="material-icons-round">rocket_launch</span>
            </>
          )}
        </button>
      </form>

      {ideas.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {ideas.map((idea, idx) => (
            <div key={idx} className="glass-panel bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-primary/40 transition-all hover:-translate-y-2 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20 group-hover:bg-primary/20">
                <span className="text-primary font-black">{idx + 1}</span>
              </div>
              <h4 className="text-white font-black text-xl mb-3 tracking-tight">{idea.title}</h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed font-medium">{idea.content}</p>
              <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 flex items-start gap-2">
                <span className="material-icons-round text-blue-400 text-lg">lightbulb</span>
                <span className="text-xs text-blue-200 font-bold leading-tight">AI Tip: {idea.aiTip}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IdeaGenerator;