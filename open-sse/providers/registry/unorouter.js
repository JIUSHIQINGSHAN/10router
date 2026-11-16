// UnoRouter (api.unorouter.com) — OpenAI 兼容多模型路由网关
// Base: https://api.unorouter.com/v1
export default {
  id: "unorouter",
  alias: "unorouter",
  display: {
    name: "UnoRouter",
    icon: "router",
    color: "#4F46E5",
    textIcon: "UR",
    website: "https://unorouter.com",
    notice: {
      text: "UnoRouter AI API 路由与中转加速网关。",
      apiKeyUrl: "https://unorouter.com",
    },
  },
  category: "apikey",
  authType: "apikey",
  authModes: ["apikey"],
  transport: {
    baseUrl: "https://api.unorouter.com/v1/chat/completions",
    validateUrl: "https://api.unorouter.com/v1/models",
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
    { id: "gemini-2.0-flash", name: "Gemini 2.0 Flash" },
  ],
};

