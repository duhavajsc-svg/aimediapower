
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
    <div className="glass-panel p-8 rounded-3xl border border-primary/20 max-w-4xl mx-auto my-20">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-icons-round text-primary text-3xl">auto_fix_high</span>
        <h2 className="text-2xl font-bold text-white uppercase italic">Sáng tạo Ý tưởng với Gemini AI</h2>
      </div>
      <p className="text-gray-400 mb-8">Trải nghiệm sức mạnh của AI ngay lập tức. Nhập chủ đề của bạn để nhận gợi ý content "triệu view".</p>
      
      <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row gap-4 mb-8">
        <input 
          type="text" 
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          placeholder="Ví dụ: Mỹ phẩm sạch, Đồ ăn vặt, Bất động sản..."
          className="form-input flex-grow"
        />
        <button 
          disabled={loading}
          type="submit"
          className="bg-primary hover:bg-pink-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-neon disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <span className="material-icons-round animate-spin">sync</span>
          ) : (
            <>
              <span>Gợi ý ngay</span>
              <span className="material-icons-round text-sm">rocket</span>
            </>
          )}
        </button>
      </form>

      {ideas.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ideas.map((idea, idx) => (
            <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-primary/40 transition-all">
              <h4 className="text-primary font-bold mb-2">{idea.title}</h4>
              <p className="text-gray-300 text-xs mb-4">{idea.content}</p>
              <div className="text-[10px] text-teal-accent flex items-start gap-1">
                <span className="material-icons-round text-sm">lightbulb</span>
                <span>AI Tip: {idea.aiTip}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IdeaGenerator;
