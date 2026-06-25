// YEAR_LOOKUP — model release dates, verbatim from CURATOR 0.3.8
// Source: DISCOVERER 0.12.0 / model_release_dates.md; corrections: VERIFIER 0.5.20 (F-051a/b)
// All dates "claimed [VERIFY]". DO NOT alter entries without a corresponding VERIFIER correction.

export interface YearEntry {
  release_year: number | null;
  release_month: number | null;
  /** confirmed | approximate | omit */
  plot_flag: 'confirmed' | 'approximate' | 'omit';
  confidence: 'high' | 'medium' | 'low' | 'none';
  source_url: string;
  note?: string;
}

export const YEAR_LOOKUP: Record<string, YearEntry> = {
  "ChatGPT-4o (2024-08-06)": {"release_year":2024,"release_month":8,"plot_flag":"confirmed","confidence":"high","source_url":"https://openai.com/index/introducing-structured-outputs-in-the-api/","note":"Snapshot gpt-4o-2024-08-06; date encoded in model string itself."},
  "Claude 3.5 Sonnet": {"release_year":2024,"release_month":6,"plot_flag":"confirmed","confidence":"high","source_url":"https://www.anthropic.com/news/claude-3-5-sonnet"},
  "Claude 3.7": {"release_year":2025,"release_month":2,"plot_flag":"confirmed","confidence":"high","source_url":"https://www.anthropic.com/news/claude-3-7-sonnet","note":"Full name: Claude 3.7 Sonnet. Released February 24 2025."},
  "Claude Opus 4.6": {"release_year":2026,"release_month":2,"plot_flag":"confirmed","confidence":"high","source_url":"https://www.anthropic.com/news/claude-opus-4-6","note":"Space-form; same product as Claude-Opus-4.6. Released Feb 5 2026."},
  "Claude Sonnet 4.6": {"release_year":2026,"release_month":2,"plot_flag":"confirmed","confidence":"high","source_url":"https://www.anthropic.com/news/claude-sonnet-4-6","note":"Released February 17 2026."},
  "Claude-4": {"release_year":2025,"release_month":5,"plot_flag":"confirmed","confidence":"high","source_url":"https://www.anthropic.com/news/claude-4","note":"Generation label (Opus 4 + Sonnet 4); not a single API model. May 22 2025."},
  "Claude-Opus-4.1": {"release_year":2025,"release_month":8,"plot_flag":"confirmed","confidence":"high","source_url":"https://www.anthropic.com/news/claude-opus-4-1","note":"Released August 5 2025. API: claude-opus-4-1-20250805."},
  "Claude-Opus-4.6": {"release_year":2026,"release_month":2,"plot_flag":"confirmed","confidence":"high","source_url":"https://www.anthropic.com/news/claude-opus-4-6","note":"Hyphen-form; same product as Claude Opus 4.6. Released Feb 5 2026."},
  "DeepSeek-3.1": {"release_year":2025,"release_month":8,"plot_flag":"confirmed","confidence":"high","source_url":"https://huggingface.co/deepseek-ai/DeepSeek-V3-1","note":"F-051a: maps to DeepSeek-V3.1. HF createdAt=2025-08-21."},
  "DeepSeek-VL2": {"release_year":2024,"release_month":12,"plot_flag":"confirmed","confidence":"high","source_url":"https://arxiv.org/abs/2412.10302","note":"arXiv 2412.10302 submitted Dec 13 2024."},
  "DeepSeek-v3 (685B)": {"release_year":2024,"release_month":12,"plot_flag":"confirmed","confidence":"high","source_url":"https://arxiv.org/abs/2412.19437","note":"arXiv 2412.19437 Dec 27 2024. 685B includes embedding params; active 671B/37B."},
  "Doubao-Seed-1.8": {"release_year":2026,"release_month":1,"plot_flag":"approximate","confidence":"low","source_url":"https://arxiv.org/abs/2603.19254","note":"API-only ByteDance. Month estimated Jan 2026 from earliest citing arXiv."},
  "Doubao-Seedream-4.5": {"release_year":2025,"release_month":9,"plot_flag":"confirmed","confidence":"medium","source_url":"https://arxiv.org/abs/2509.20427","note":"Tech report arXiv:2509.20427 Sep 24 2025."},
  "FLUX-2-Pro-Edit": {"release_year":null,"release_month":null,"plot_flag":"omit","confidence":"none","source_url":"https://docs.bfl.ml/","note":"No BFL product by this exact name. Paper-internal alias. VERIFIER to resolve."},
  "GLM-4.5V": {"release_year":2025,"release_month":8,"plot_flag":"confirmed","confidence":"high","source_url":"https://huggingface.co/zai-org/GLM-4.5V","note":"HF createdAt=2025-08-10."},
  "GLM-4.6V": {"release_year":2025,"release_month":12,"plot_flag":"confirmed","confidence":"high","source_url":"https://huggingface.co/zai-org/GLM-4.6V","note":"HF createdAt=2025-12-07."},
  "GPT-4V": {"release_year":2023,"release_month":11,"plot_flag":"confirmed","confidence":"high","source_url":"https://openai.com/index/new-models-and-developer-products-announced-at-devday/","note":"gpt-4-vision-preview public API launch Nov 6 2023."},
  "GPT-4V (5-shot)": {"release_year":2023,"release_month":11,"plot_flag":"confirmed","confidence":"high","source_url":"https://openai.com/index/new-models-and-developer-products-announced-at-devday/","note":"Prompting variant of GPT-4V. (5-shot) = evaluation protocol only."},
  "GPT-4V (zero-shot)": {"release_year":2023,"release_month":11,"plot_flag":"confirmed","confidence":"high","source_url":"https://openai.com/index/new-models-and-developer-products-announced-at-devday/","note":"Prompting variant of GPT-4V. (zero-shot) = evaluation protocol only."},
  "GPT-4o": {"release_year":2024,"release_month":5,"plot_flag":"confirmed","confidence":"high","source_url":"https://openai.com/index/hello-gpt-4o/","note":"Released May 13 2024."},
  "GPT-4o (5-shot)": {"release_year":2024,"release_month":5,"plot_flag":"confirmed","confidence":"high","source_url":"https://openai.com/index/hello-gpt-4o/","note":"Prompting variant of GPT-4o. (5-shot) = evaluation protocol only."},
  "GPT-5": {"release_year":2025,"release_month":8,"plot_flag":"confirmed","confidence":"high","source_url":"https://openai.com/index/introducing-gpt-5/","note":"Released August 7 2025."},
  "GPT-5-Mini": {"release_year":2025,"release_month":8,"plot_flag":"confirmed","confidence":"medium","source_url":"https://developers.openai.com/api/docs/changelog","note":"Released Aug 7 2025 alongside GPT-5. Official ID: gpt-5-mini."},
  "GPT-5.1-Chat": {"release_year":2025,"release_month":11,"plot_flag":"confirmed","confidence":"medium","source_url":"https://developers.openai.com/api/docs/changelog","note":"GPT-5.1 released Nov 13 2025. -Chat suffix is paper label, not official API name."},
  "GPT-5.2": {"release_year":2025,"release_month":12,"plot_flag":"confirmed","confidence":"high","source_url":"https://developers.openai.com/api/docs/changelog","note":"Released December 11 2025."},
  "GPT-5.2-Pro": {"release_year":2025,"release_month":12,"plot_flag":"confirmed","confidence":"medium","source_url":"https://developers.openai.com/api/docs/changelog","note":"Extended-reasoning tier of GPT-5.2; same release date Dec 2025. -Pro = capability tier."},
  "GPT-5.4": {"release_year":2026,"release_month":3,"plot_flag":"confirmed","confidence":"high","source_url":"https://developers.openai.com/api/docs/changelog","note":"Released March 5 2026."},
  "Gemini-2.0": {"release_year":2024,"release_month":12,"plot_flag":"confirmed","confidence":"high","source_url":"https://blog.google/innovation-and-ai/models-and-research/google-deepmind/google-gemini-ai-update-december-2024/","note":"Experimental Dec 11 2024; GA Jan 30 2025. Year-axis: use 2024 for first availability."},
  "Gemini-3-Flash": {"release_year":2025,"release_month":12,"plot_flag":"confirmed","confidence":"high","source_url":"https://blog.google/products-and-platforms/products/gemini/gemini-3-flash/","note":"Released December 17 2025."},
  "Gemini-3-Pro": {"release_year":2025,"release_month":11,"plot_flag":"confirmed","confidence":"high","source_url":"https://blog.google/products-and-platforms/products/gemini/gemini-3/","note":"Released November 18 2025. Deprecated March 9 2026."},
  "Gemini-3-Pro-Edit": {"release_year":null,"release_month":null,"plot_flag":"omit","confidence":"none","source_url":"https://deepmind.google/models/","note":"Adversarially verified absent: 0/3 sources found this name. Paper-internal alias."},
  "Gemini-3.1-Pro": {"release_year":2026,"release_month":2,"plot_flag":"confirmed","confidence":"high","source_url":"https://deepmind.google/models/model-cards/gemini-3-1-pro/","note":"Released Feb 19 2026 (Preview). API ID: gemini-3.1-pro-preview."},
  "Gemma-4-31B-it": {"release_year":2026,"release_month":4,"plot_flag":"confirmed","confidence":"high","source_url":"https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/","note":"Released April 2 2026. Apache 2.0. HF: google/gemma-4-31B-it."},
  "Grok-4": {"release_year":2026,"release_month":1,"plot_flag":"approximate","confidence":"low","source_url":"https://arxiv.org/abs/2601.16456","note":"No official xAI announcement found. Month estimated Jan 2026 from citing arXiv."},
  "Grounding DINO-B": {"release_year":2023,"release_month":3,"plot_flag":"confirmed","confidence":"high","source_url":"https://arxiv.org/abs/2303.05499","note":"arXiv 2303.05499 Mar 9 2023. -B = Base model. Paper at ECCV 2024; weights from 2023."},
  "InternVL3.5": {"release_year":2025,"release_month":8,"plot_flag":"confirmed","confidence":"high","source_url":"https://huggingface.co/OpenGVLab/InternVL3_5-14B","note":"HF createdAt=2025-08-25. Distinct from InternVL3 (Apr 2025)."},
  "Kimi-K2": {"release_year":2025,"release_month":7,"plot_flag":"confirmed","confidence":"high","source_url":"https://huggingface.co/moonshotai/Kimi-K2-Instruct","note":"HF Base: 2025-07-03; Instruct: 2025-07-11. 1T-param MoE from Moonshot AI."},
  "LLaVA v1.5 13B": {"release_year":2023,"release_month":10,"plot_flag":"confirmed","confidence":"high","source_url":"https://arxiv.org/abs/2310.03744","note":"arXiv 2310.03744 Oct 5 2023."},
  "LLaVA v1.5 13B (5-shot)": {"release_year":2023,"release_month":10,"plot_flag":"confirmed","confidence":"high","source_url":"https://arxiv.org/abs/2310.03744","note":"Prompting variant. (5-shot) = evaluation protocol only."},
  "LLaVA v1.5 13B (CoT)": {"release_year":2023,"release_month":10,"plot_flag":"confirmed","confidence":"high","source_url":"https://arxiv.org/abs/2310.03744","note":"Prompting variant. (CoT) = Chain-of-Thought protocol only."},
  "LLaVA v1.5 13B (zero-shot)": {"release_year":2023,"release_month":10,"plot_flag":"confirmed","confidence":"high","source_url":"https://arxiv.org/abs/2310.03744","note":"Prompting variant. (zero-shot) = evaluation protocol only."},
  "LLaVA v1.5 7B": {"release_year":2023,"release_month":10,"plot_flag":"confirmed","confidence":"high","source_url":"https://arxiv.org/abs/2310.03744","note":"arXiv 2310.03744 Oct 5 2023. Released with 13B."},
  "LLaVA v1.5 7B (zero-shot)": {"release_year":2023,"release_month":10,"plot_flag":"confirmed","confidence":"high","source_url":"https://arxiv.org/abs/2310.03744","note":"Prompting variant. (zero-shot) = evaluation protocol only."},
  "LLaVA v1.6 34B (1-shot)": {"release_year":2024,"release_month":1,"plot_flag":"confirmed","confidence":"high","source_url":"https://llava-vl.github.io/blog/2024-01-30-llava-next/","note":"LLaVA-NeXT (v1.6) blog Jan 30 2024. 34B uses Yi-34B backbone. (1-shot) = protocol."},
  "LLaVA-34B": {"release_year":2024,"release_month":1,"plot_flag":"confirmed","confidence":"high","source_url":"https://llava-vl.github.io/blog/2024-01-30-llava-next/","note":"LLaVA-NeXT-34B / LLaVA-1.6-34B. HF: llava-hf/llava-v1.6-34b-hf."},
  "Llama3 (70B-Instruct)": {"release_year":2024,"release_month":4,"plot_flag":"confirmed","confidence":"high","source_url":"https://ai.meta.com/blog/meta-llama-3/","note":"Meta AI blog April 18 2024."},
  "MiniGPT-4 v2 (zero-shot)": {"release_year":2023,"release_month":10,"plot_flag":"confirmed","confidence":"high","source_url":"https://arxiv.org/abs/2310.09478","note":"arXiv 2310.09478 Oct 14 2023. (zero-shot) = evaluation protocol only."},
  "Ministral-14B": {"release_year":2025,"release_month":12,"plot_flag":"confirmed","confidence":"high","source_url":"https://mistral.ai/news/mistral-3","note":"Official: Ministral-3-14B. Announced Dec 2 2025. HF: mistralai/Ministral-3-14B-Instruct-2512."},
  "OpenAI o1": {"release_year":2024,"release_month":9,"plot_flag":"confirmed","confidence":"high","source_url":"https://openai.com/index/introducing-openai-o1-preview/","note":"o1-preview Sep 12 2024; stable o1 Dec 17 2024. Sep 2024 = canonical public debut."},
  "Qwen-3": {"release_year":2025,"release_month":4,"plot_flag":"confirmed","confidence":"high","source_url":"https://qwenlm.github.io/blog/qwen3/","note":"Qwen3 blog April 29 2025."},
  "Qwen-Image-Edit-Plus": {"release_year":null,"release_month":null,"plot_flag":"omit","confidence":"none","source_url":"https://huggingface.co/Qwen/Qwen-Image-Edit-Plus","note":"HF page gated/private. No public blog. Likely API-only as of Jun 2026."},
  "Qwen2.5 (72B-Instruct)": {"release_year":2024,"release_month":9,"plot_flag":"confirmed","confidence":"high","source_url":"https://qwenlm.github.io/blog/qwen2.5/","note":"Qwen2.5 blog Sep 19 2024; HF initial commits Sep 16-18 2024."},
  "Qwen2.5-VL-32B": {"release_year":2025,"release_month":3,"plot_flag":"confirmed","confidence":"high","source_url":"https://qwenlm.github.io/blog/qwen2.5-vl-32b/","note":"Blog March 24 2025. Initial Qwen2.5-VL (Jan 2025) had only 3B/7B/72B; 32B added Mar 2025."},
  "Qwen2.5-VL-72B": {"release_year":2025,"release_month":1,"plot_flag":"confirmed","confidence":"high","source_url":"https://qwenlm.github.io/blog/qwen2.5-vl/","note":"Released January 26 2025."},
  "Qwen2.5-VL-7B": {"release_year":2025,"release_month":1,"plot_flag":"confirmed","confidence":"high","source_url":"https://qwenlm.github.io/blog/qwen2.5-vl/","note":"Released January 26 2025."},
  "Qwen3-VL-32B": {"release_year":2025,"release_month":10,"plot_flag":"confirmed","confidence":"high","source_url":"https://huggingface.co/Qwen/Qwen3-VL-32B-Instruct","note":"HF createdAt=2025-10-19."},
  "Qwen3-VL-32B-Thinking": {"release_year":2025,"release_month":10,"plot_flag":"confirmed","confidence":"high","source_url":"https://huggingface.co/Qwen/Qwen3-VL-32B-Thinking","note":"Released alongside Qwen3-VL-32B-Instruct ~Oct 19 2025."},
  "Qwen3-VL-8B": {"release_year":2025,"release_month":10,"plot_flag":"confirmed","confidence":"high","source_url":"https://huggingface.co/Qwen/Qwen3-VL-8B-Instruct","note":"HF createdAt=2025-10-11."},
  "Qwen3.5-27B": {"release_year":2026,"release_month":2,"plot_flag":"confirmed","confidence":"medium","source_url":"https://huggingface.co/Qwen/Qwen3.5-27B","note":"Model card month=Feb 2026; consistent with Qwen3.5-9B (HF commit Feb 27 2026)."},
  "Qwen3.5-397B-A17B": {"release_year":2026,"release_month":2,"plot_flag":"confirmed","confidence":"medium","source_url":"https://huggingface.co/Qwen/Qwen3.5-397B-A17B","note":"MoE 397B/17B-active. Model card month=Feb 2026."},
  "Qwen3.5-9B": {"release_year":2026,"release_month":2,"plot_flag":"confirmed","confidence":"high","source_url":"https://huggingface.co/Qwen/Qwen3.5-9B","note":"HF initial commit February 27 2026."},
  "Qwen3.5-Plus": {"release_year":null,"release_month":null,"plot_flag":"omit","confidence":"none","source_url":"https://huggingface.co/Qwen/Qwen3.5-Plus","note":"HF page gated/private. Likely API-only (DashScope), no open-weight release."},
  "Seed-1.6": {"release_year":2025,"release_month":10,"plot_flag":"approximate","confidence":"low","source_url":"https://arxiv.org/abs/2510.17932","note":"ByteDance Seed-1.6. Not on HF as open weights. Month estimated Oct 2025 from citing arXiv."},
  "Wan2.6-Image": {"release_year":null,"release_month":null,"plot_flag":"omit","confidence":"none","source_url":"https://huggingface.co/Wan-AI","note":"Not found. Wan-AI tops out at Wan2.2 (Nov 2025). Likely fictitious or unreleased."},
};

export type { YearEntry };
