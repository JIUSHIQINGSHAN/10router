// AIHubMix (aihubmix.com) — 商业 OpenAI 兼容聚合网关
// Base: https://aihubmix.com/v1
export default {
  id: "aihubmix",
  alias: "ai-hm",
  aliases: ["aihub"],
  display: {
    name: "AIHubMix",
    icon: "hub",
    color: "#2563EB",
    textIcon: "AHM",
    website: "https://aihubmix.com",
    notice: {
      text: "AIHubMix 商业 API 聚合中转网关，全套标准 OpenAI 兼容接口。",
      apiKeyUrl: "https://aihubmix.com",
    },
  },
  category: "apikey",
  authType: "apikey",
  authModes: ["apikey"],
  transport: {
    baseUrl: "https://aihubmix.com/v1/chat/completions",
    validateUrl: "https://aihubmix.com/v1/models",
    thinkingFormat: "openai",
  },
  serviceKinds: ["llm"],
  models: [
    { id: "claude-3-5-sonnet-20241022", name: "Claude 3.5 Sonnet" },
    { id: "claude-3-7-sonnet-20250219", name: "Claude 3.7 Sonnet" },
    { id: "claude-opus-4.6", name: "Claude Opus 4.6" },
    { id: "claude-fable-5-2", name: "Claude Fable 5.2" },
    { id: "deepseek-chat", name: "DeepSeek V3" },
    { id: "deepseek-reasoner", name: "DeepSeek R1" },
    { id: "gpt-4o", name: "GPT-4o" },
    { id: "gpt-4o-mini", name: "GPT-4o mini" },
    { id: "gpt-6.1-terra", name: "GPT-6.1 Terra" },
    { id: "gemini-2.0-flash", name: "Gemini 2.0 Flash" },
    { id: "gemini-2.5-pro", name: "Gemini 2.5 Pro" },
    { id: "gemini-4-carbon", name: "Gemini 4 Carbon" },
    { id: "coding-kimi-k3-free", name: "Coding Kimi K3 (Free)" },
    { id: "coding-qwen4-max-preview", name: "Coding Qwen4 Max Preview" },
  ],
};

