
import { GoogleGenAI, Type } from "@google/genai";

export const generateContentIdeas = async (niche: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Hãy gợi ý cho tôi 3 ý tưởng video ngắn (TikTok/Reels) độc đáo cho lĩnh vực "${niche}". Bao gồm tiêu đề, tóm tắt nội dung và một mẹo thực hiện với AI. Trả về kết quả bằng tiếng Việt theo định dạng JSON chuyên nghiệp.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            content: { type: Type.STRING },
            aiTip: { type: Type.STRING }
          },
          required: ["title", "content", "aiTip"]
        }
      }
    }
  });

  try {
    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    return [];
  }
};
