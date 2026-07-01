// Single source of truth for benchmark card/hero thumbnails.
// Imported by both components/BenchmarkCard.astro (grid) and pages/benchmarks/[id].astro (hero).
//
// ONLY openly-redistributable images (CC-BY-4.0 / MIT / Apache-2.0).
// EXCLUDED by license policy (VERIFIER 0.5.30 F-061, 2026-06-22; user decision 2026-07-01):
//   - R011 (CC-BY-NC-SA, NOT CC-BY-4.0 as previously labeled) — no redistribution right.
//   - R017 (arXiv non-exclusive license, NOT CC-BY) — no redistribution right.
//   - R031 (CC-BY-SA 4.0, ShareAlike clause) — dropped per user decision 2026-07-01.
// R011 may be re-added if DISCOVERER confirms an OpenReview camera-ready is genuinely CC-BY.
// DO NOT add NC/SA/ND or arXiv-only-distrib records here without VERIFIER confirmation.

export interface Thumbnail {
  src: string;
  license: string;
  creditShort: string;
  creditUrl: string;
}

// Base path (env-driven via astro.config `base`). Empty for root-host (Zenodo/local);
// '/AECPlayGround' for GitHub Pages. import.meta.env.BASE_URL is '/' when base is undefined.
const BASE: string = (import.meta as any).env?.BASE_URL?.replace(/\/$/, '') ?? '';

const THUMBNAILS: Record<string, Thumbnail> = {
  'R001': { src: '/thumbnails/r001.jpg', license: 'CC BY 4.0',  creditShort: 'arXiv:2510.16559',          creditUrl: 'https://arxiv.org/abs/2510.16559' },
  'R003': { src: '/thumbnails/r003.png', license: 'MIT',        creditShort: 'GitHub/drags99/bridge-eqa', creditUrl: 'https://github.com/drags99/bridge-eqa' },
  'R005': { src: '/thumbnails/r005.png', license: 'MIT',        creditShort: 'HF/DrafterBench',           creditUrl: 'https://huggingface.co/datasets/Eason666/DrafterBench' },
  'R006': { src: '/thumbnails/r006.png', license: 'Apache 2.0', creditShort: 'GitHub/nomic-ai',           creditUrl: 'https://github.com/nomic-ai/aec-bench' },
  'R023': { src: '/thumbnails/r023.png', license: 'Apache 2.0', creditShort: 'GitHub/huhuman/VL-Con',     creditUrl: 'https://github.com/huhuman/VL-Con' },
};

/** Returns the thumbnail metadata for a benchmark source_record_id, or null if none.
 *  `src` is prefixed with the build base so it resolves under GitHub Pages base. */
export function getThumbnail(sourceRecordId: string): Thumbnail | null {
  const t = THUMBNAILS[sourceRecordId];
  return t ? { ...t, src: `${BASE}${t.src}` } : null;
}
