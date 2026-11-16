// CUN.AI (www.cun.ai) — 寸心 / 村AI 开发者接口分发平台
// Base: https://www.cun.ai/v1
export default {
  id: "cun",
  alias: "cun",
  aliases: ["cun-ai"],
  display: {
    name: "CUN.AI",
    icon: "cloud",
    color: "#0EA5E9",
    textIcon: "CUN",
    website: "https://www.cun.ai",
    notice: {
      text: "CUN.AI (寸心) OpenAI 兼容模型分发平台。",
      apiKeyUrl: "https://www.cun.ai",
    },
  },
  category: "apikey",
  authType: "apikey",
  authModes: ["apikey"],
  transport: {
    baseUrl: "https://www.cun.ai/v1/chat/completions",
    validateUrl: "https://www.cun.ai/v1/models",
    thinkingFormat: "openai",
  },
  serviceKinds: ["llm"],
  models: [
    { id: "claude-3-5-sonnet-20241022", name: "Claude 3.5 Sonnet" },
    { id: "claude-3-7-sonnet-20250219", name: "Claude 3.7 Sonnet" },
    { id: "claude-fable-5", name: "Claude Fable 5" },
    { id: "deepseek-chat", name: "DeepSeek V3" },
    { id: "deepseek-reasoner", name: "DeepSeek R1" },
    { id: "gpt-4o", name: "GPT-4o" },
    { id: "gpt-4o-mini", name: "GPT-4o mini" },
  ],
};

