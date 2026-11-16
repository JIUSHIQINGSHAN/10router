// docode (docode.cc) — 编程与开发者专线模型中转平台
// Base: https://docode.cc/v1
export default {
  id: "docode",
  alias: "doc",
  display: {
    name: "docode",
    icon: "code",
    color: "#10B981",
    textIcon: "DOC",
    website: "https://docode.cc",
    notice: {
      text: "docode AI 代码助手与大模型 API 专线服务。",
      apiKeyUrl: "https://docode.cc",
    },
  },
  category: "apikey",
  authType: "apikey",
  authModes: ["apikey"],
  transport: {
    baseUrl: "https://docode.cc/v1/chat/completions",
    validateUrl: "https://docode.cc/v1/models",
    thinkingFormat: "openai",
  },
  serviceKinds: ["llm"],
  models: [
    { id: "claude-3-5-sonnet-20241022", name: "Claude 3.5 Sonnet" },
    { id: "claude-3-7-sonnet-20250219", name: "Claude 3.7 Sonnet" },
    { id: "deepseek-chat", name: "DeepSeek V3" },
    { id: "deepseek-reasoner", name: "DeepSeek R1" },
    { id: "gpt-4o", name: "GPT-4o" },
    { id: "gpt-4o-mini", name: "GPT-4o mini" },
  ],
};

