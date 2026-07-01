// Single source of truth for benchmark card/hero thumbnails.
// Imported by both components/BenchmarkCard.astro (grid) and pages/benchmarks/[id].astro (hero).
//
// TWO usage classes:
//   - 'open-license'  : openly-redistributable (CC-BY-4.0 / MIT / Apache-2.0). 5 records.
//   - 'fair-use'      : paper Figure 1 shown for identification under fair use
//                       (BOSS D46 Path B, user-authorized 2026-07-01; batch-2 +3 2026-07-01). 10 records.
//                       Copyright belongs to the original authors; each card carries attribution;
//                       a site-wide disclaimer is rendered in the footer + About page.
// EXCLUDED (VERIFIER 0.5.30 F-061; user decision 2026-07-01): R011 (CC-BY-NC-SA).
// NOTE: R031 (BIM-Edit, arXiv:2606.20146) was excluded at 0.7.38 under its CC-BY-SA
// open-license basis, then re-added at 0.7.41 as a fair-use Fig.1 (same image, fair-use framing).

export interface Thumbnail {
  src: string;
  usage: 'open-license' | 'fair-use';
  license: string;       // open: 'CC BY 4.0' etc; fair-use: 'Fair use'
  creditShort: string;
  creditUrl: string;
  caption: string;       // pre-built display caption (card + hero attribution)
}

// Base path (env-driven via astro.config `base`). Empty for root-host (Zenodo/local);
// '/AECPlayGround' for GitHub Pages. import.meta.env.BASE_URL is '/' when base is undefined.
const BASE: string = (import.meta as any).env?.BASE_URL?.replace(/\/$/, '') ?? '';

const THUMBNAILS: Record<string, Thumbnail> = {
  // --- 5 openly-licensed ---
  'R001': { src: '/thumbnails/r001.jpg', usage: 'open-license', license: 'CC BY 4.0',  creditShort: 'arXiv:2510.16559',          creditUrl: 'https://arxiv.org/abs/2510.16559',          caption: 'CC BY 4.0 · arXiv:2510.16559' },
  'R003': { src: '/thumbnails/r003.png', usage: 'open-license', license: 'MIT',        creditShort: 'GitHub/drags99/bridge-eqa', creditUrl: 'https://github.com/drags99/bridge-eqa',     caption: 'MIT · GitHub/drags99/bridge-eqa' },
  'R005': { src: '/thumbnails/r005.png', usage: 'open-license', license: 'MIT',        creditShort: 'HF/DrafterBench',           creditUrl: 'https://huggingface.co/datasets/Eason666/DrafterBench', caption: 'MIT · HF/DrafterBench' },
  'R006': { src: '/thumbnails/r006.png', usage: 'open-license', license: 'Apache 2.0', creditShort: 'GitHub/nomic-ai',           creditUrl: 'https://github.com/nomic-ai/aec-bench',     caption: 'Apache 2.0 · GitHub/nomic-ai' },
  'R023': { src: '/thumbnails/r023.png', usage: 'open-license', license: 'Apache 2.0', creditShort: 'GitHub/huhuman/VL-Con',     creditUrl: 'https://github.com/huhuman/VL-Con',         caption: 'Apache 2.0 · GitHub/huhuman/VL-Con' },
  // --- 7 fair-use (paper Fig.1, shown for identification; copyright with original authors) ---
  'R007': { src: '/thumbnails/r007.png', usage: 'fair-use', license: 'Fair use', creditShort: 'arXiv:2509.18776',    creditUrl: 'https://arxiv.org/abs/2509.18776',    caption: 'Fig.1 — AEC-Bench (arXiv:2509.18776), used under fair use.' },
  'R010': { src: '/thumbnails/r010.png', usage: 'fair-use', license: 'Fair use', creditShort: 'arXiv:2605.20837',    creditUrl: 'https://arxiv.org/abs/2605.20837',    caption: 'Fig.1 — ArchSIBench (arXiv:2605.20837), used under fair use.' },
  'R012': { src: '/thumbnails/r012.png', usage: 'fair-use', license: 'Fair use', creditShort: 'DOI 10.1115/1.4071865', creditUrl: 'https://doi.org/10.1115/1.4071865', caption: 'Fig.1 — VizArQA (DOI 10.1115/1.4071865), used under fair use.' },
  'R017': { src: '/thumbnails/r017.png', usage: 'fair-use', license: 'Fair use', creditShort: 'arXiv:2505.22959',    creditUrl: 'https://arxiv.org/abs/2505.22959',    caption: 'Fig.1 — HSE-Bench (arXiv:2505.22959), used under fair use.' },
  'R019': { src: '/thumbnails/r019.png', usage: 'fair-use', license: 'Fair use', creditShort: 'arXiv:2508.11011',    creditUrl: 'https://arxiv.org/abs/2508.11011',    caption: 'Fig.1 — ConstructionSite-10k (arXiv:2508.11011), used under fair use.' },
  'R036': { src: '/thumbnails/r036.png', usage: 'fair-use', license: 'Fair use', creditShort: 'arXiv:2605.22079',    creditUrl: 'https://arxiv.org/abs/2605.22079',    caption: 'Fig.1 — Ishigaki-IDS-Bench (arXiv:2605.22079), used under fair use.' },
  'R040': { src: '/thumbnails/r040.png', usage: 'fair-use', license: 'Fair use', creditShort: 'arXiv:2603.24866',    creditUrl: 'https://arxiv.org/abs/2603.24866',    caption: 'Fig.1 — DreamHouse (arXiv:2603.24866), used under fair use.' },
  // --- batch-2 fair-use (+3, 2026-07-01) ---
  'R002': { src: '/thumbnails/r002.png', usage: 'fair-use', license: 'Fair use', creditShort: 'arXiv:2601.04819',    creditUrl: 'https://arxiv.org/abs/2601.04819',    caption: 'Fig.1 — AECV-Bench (arXiv:2601.04819), used under fair use.' },
  'R031': { src: '/thumbnails/r031.png', usage: 'fair-use', license: 'Fair use', creditShort: 'arXiv:2606.20146',    creditUrl: 'https://arxiv.org/abs/2606.20146',    caption: 'Fig.1 — BIM-Edit (arXiv:2606.20146), used under fair use.' },
  'R037': { src: '/thumbnails/r037.png', usage: 'fair-use', license: 'Fair use', creditShort: 'arXiv:2509.25229',    creditUrl: 'https://arxiv.org/abs/2509.25229',    caption: 'Fig.1 — Blueprint-Bench (arXiv:2509.25229), used under fair use.' },
};

/** Returns the thumbnail metadata for a benchmark source_record_id, or null if none.
 *  `src` is prefixed with the build base so it resolves under GitHub Pages base. */
export function getThumbnail(sourceRecordId: string): Thumbnail | null {
  const t = THUMBNAILS[sourceRecordId];
  return t ? { ...t, src: `${BASE}${t.src}` } : null;
}

/** Count of thumbnails by usage class (for About/README copy). */
export const THUMBNAIL_COUNTS = {
  open: Object.values(THUMBNAILS).filter((t) => t.usage === 'open-license').length,
  fairUse: Object.values(THUMBNAILS).filter((t) => t.usage === 'fair-use').length,
  total: Object.keys(THUMBNAILS).length,
};
