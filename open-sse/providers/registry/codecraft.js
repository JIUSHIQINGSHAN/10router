// CodeCraft API (codecraftapi.com) — 开发者代码模型与智能体 API 聚合
// Base: https://codecraftapi.com/v1
export default {
  id: "codecraft",
  alias: "craft",
  aliases: ["codecraftapi"],
  display: {
    name: "CodeCraft API",
    icon: "terminal",
    color: "#F59E0B",
    textIcon: "CC",
    website: "https://codecraftapi.com",
    notice: {
      text: "CodeCraft API 面向代码与智能体的高性能中转服务。",
      apiKeyUrl: "https://codecraftapi.com",
    },
  },
  category: "apikey",
  authType: "apikey",
  authModes: ["apikey"],
  transport: {
    baseUrl: "https://codecraftapi.com/v1/chat/completions",
    validateUrl: "https://codecraftapi.com/v1/models",
    thinkingFormat: "openai",
  },
  serviceKinds: ["llm"],
  models: [
    { id: "qwen3.8-max", name: "Qwen 3.8 Max" },
    { id: "deepseek-v4-flash-0731", name: "DeepSeek V4 Flash 0731" },
    { id: "kimi-k3", name: "Kimi K3" },
    { id: "kimi-k2.6", name: "Kimi K2.6" },
    { id: "claude-3-5-sonnet-20241022", name: "Claude 3.5 Sonnet" },
    { id: "claude-3-7-sonnet-20250219", name: "Claude 3.7 Sonnet" },
    { id: "gpt-4o", name: "GPT-4o" },
  ],
};

