// Experiential Labs (api.experientiallabs.ai) — AI 研究与大模型实验网关
// Base: https://api.experientiallabs.ai/v1
export default {
  id: "experiential",
  alias: "xpl",
  aliases: ["experiential-labs"],
  display: {
    name: "Experiential Labs",
    icon: "science",
    color: "#8B5CF6",
    textIcon: "XL",
    website: "https://experientiallabs.ai",
    notice: {
      text: "Experiential Labs AI 模型聚合平台，支持前沿模型与思维链透传。",
      apiKeyUrl: "https://experientiallabs.ai",
    },
  },
  category: "apikey",
  authType: "apikey",
  authModes: ["apikey"],
  transport: {
    baseUrl: "https://api.experientiallabs.ai/v1/chat/completions",
    validateUrl: "https://api.experientiallabs.ai/v1/models",
    thinkingFormat: "openai",
  },
  serviceKinds: ["llm"],
  models: [
    { id: "gpt-5.6-luna", name: "GPT-5.6 Luna" },
    { id: "deepseek-v4.1-flash", name: "DeepSeek V4.1 Flash" },
    { id: "kimi-k3", name: "Kimi K3" },
    { id: "kimi-k2.6", name: "Kimi K2.6" },
    { id: "kimi-k2.7-code", name: "Kimi K2.7 Code" },
    { id: "kimi-latest", name: "Kimi Latest" },
    { id: "claude-3-5-sonnet-20241022", name: "Claude 3.5 Sonnet" },
    { id: "gpt-4o", name: "GPT-4o" },
  ],
};

