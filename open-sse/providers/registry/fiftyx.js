// 50X AI (ai.50x.energy) — GPU-accelerated DeepSeek inference
// Base: https://api.ai.50x.energy/v1
export default {
  id: "fiftyx",
  alias: "50x",
  aliases: ["50xai", "fiftyx-ai"],
  display: {
    name: "50X AI",
    icon: "zap",
    color: "#10B981",
    textIcon: "50X",
    website: "https://ai.50x.energy",
    notice: {
      text: "50X AI — high-throughput, low-latency DeepSeek inference platform.",
      apiKeyUrl: "https://ai.50x.energy/keys",
    },
  },
  category: "apikey",
  authType: "apikey",
  authModes: ["apikey"],
  transport: {
    baseUrl: "https://api.ai.50x.energy/v1/chat/completions",
    validateUrl: "https://api.ai.50x.energy/v1/models",
    thinkingFormat: "deepseek",
  },
  serviceKinds: ["llm"],
  models: [
    { id: "deepseek-ai/DeepSeek-V4.1-Flash-1017", name: "DeepSeek V4.1 Flash 1017" },
    { id: "deepseek-ai/DeepSeek-V4.1-Flash", name: "DeepSeek V4.1 Flash" },
  ],
};

