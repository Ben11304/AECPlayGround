// Single source of truth for benchmark card/hero thumbnails.
// Imported by both components/BenchmarkCard.astro (grid) and pages/benchmarks/[id].astro (hero).
//
// TWO usage classes:
//   - 'open-license'  : openly-redistributable (CC-BY-4.0 / MIT / Apache-2.0 / CC0). 6 records.
//   - 'fair-use'      : paper figure shown for identification under fair use
//                       (BOSS D46 Path B, user-authorized 2026-07-01; batch-2 +3 2026-07-01;
//                       batch-3 +17, 2026-07-15, real figures from RESEARCHER's pre-extracted
//                       PDF figures, manually picked+cropped, no image generated). 27 records.
//                       Copyright belongs to the original authors; each card carries attribution;
//                       a site-wide disclaimer is rendered in the footer + About page.
// EXCLUDED (VERIFIER 0.5.30 F-061; user decision 2026-07-01): R011 (CC-BY-NC-SA).
// NOTE: R031 (BIM-Edit, arXiv:2606.20146) was excluded at 0.7.38 under its CC-BY-SA
// open-license basis, then re-added at 0.7.41 as a fair-use Fig.1 (same image, fair-use framing).
// batch-3 (2026-07-15): of 20 records with RESEARCHER pre-extracted figures (R011 excluded by
// policy above, not reviewed), 18 got a genuine content figure (not always Fig.1 -- R009/R045/R057/
// R059's nearest/first candidate turned out to be a license badge or copyright page, not benchmark
// content, so a later real figure was used instead). R056 and R063 had extracted figures but none
// were usable (2 tiny inline icons; a lone out-of-context Appendix code screenshot with an API-key
// snippet) -- left with no thumbnail, disclosed in CRAFTER's manifest, not force-added.

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
  'R052': { src: '/thumbnails/r052.jpg', usage: 'open-license', license: 'CC0-1.0',    creditShort: 'GitHub/mgupta70/PIDQA',     creditUrl: 'https://github.com/mgupta70/PIDQA',         caption: 'CC0-1.0 (data) · GitHub/mgupta70/PIDQA' },
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
  // --- batch-3 fair-use (+17, 2026-07-15; real pre-extracted paper figures, manually picked+cropped) ---
  'R008': { src: '/thumbnails/r008.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'DOI 10.1038/s41598-025-98236-0', creditUrl: 'https://doi.org/10.1038/s41598-025-98236-0', caption: 'Fig.1 — Arch-Eval (DOI 10.1038/s41598-025-98236-0), used under fair use.' },
  'R009': { src: '/thumbnails/r009.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'arXiv:2504.08779', creditUrl: 'https://arxiv.org/abs/2504.08779', caption: 'Fig.6 — CMExamSet (arXiv:2504.08779), used under fair use.' },
  'R013': { src: '/thumbnails/r013.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'DOI 10.1016/j.cacaie.2026.100126', creditUrl: 'https://doi.org/10.1016/j.cacaie.2026.100126', caption: 'Fig.1 — PE Civil Bench (DOI 10.1016/j.cacaie.2026.100126), used under fair use.' },
  'R016': { src: '/thumbnails/r016.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'arXiv:2603.20148', creditUrl: 'https://arxiv.org/abs/2603.20148', caption: 'Fig.1 — DefectBench (arXiv:2603.20148), used under fair use.' },
  'R030': { src: '/thumbnails/r030.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'arXiv:2508.16081', creditUrl: 'https://arxiv.org/abs/2508.16081', caption: 'Fig.1 — CEQuest (arXiv:2508.16081), used under fair use.' },
  'R035': { src: '/thumbnails/r035.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'arXiv:2602.20812', creditUrl: 'https://arxiv.org/abs/2602.20812', caption: 'Fig.2 — Qwen-BIM Benchmark (arXiv:2602.20812), used under fair use.' },
  'R039': { src: '/thumbnails/r039.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'arXiv:2602.16926', creditUrl: 'https://arxiv.org/abs/2602.16926', caption: 'Fig.2 — BEMEval-Doc2Schema (arXiv:2602.16926), used under fair use.' },
  'R041': { src: '/thumbnails/r041.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'IEEE Xplore doc 11372767', creditUrl: 'https://ieeexplore.ieee.org/document/11372767', caption: 'Fig.1 — ConstructionWorker-VLM (IEEE Access, doc 11372767), used under fair use.' },
  'R043': { src: '/thumbnails/r043.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'DOI 10.1016/j.enbenv.2024.03.010', creditUrl: 'https://doi.org/10.1016/j.enbenv.2024.03.010', caption: 'Fig.2 — ASHRAE-HVAC-Designer (DOI 10.1016/j.enbenv.2024.03.010), used under fair use.' },
  'R044': { src: '/thumbnails/r044.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'DOI 10.1038/s41598-025-16118-x', creditUrl: 'https://doi.org/10.1038/s41598-025-16118-x', caption: 'Fig.1 — Korean-MEP (EEM+EACRM) (DOI 10.1038/s41598-025-16118-x), used under fair use.' },
  'R045': { src: '/thumbnails/r045.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'DOI 10.3390/geotechnics4020026', creditUrl: 'https://doi.org/10.3390/geotechnics4020026', caption: 'Fig.5 — Geotech-391 (DOI 10.3390/geotechnics4020026), used under fair use.' },
  'R057': { src: '/thumbnails/r057.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'SNU repository hdl 10371/221090', creditUrl: 'https://hdl.handle.net/10371/221090', caption: 'Fig.3-5 — KoCEM (SNU MS thesis, hdl 10371/221090), used under fair use.' },
  'R058': { src: '/thumbnails/r058.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'DOI 10.1016/j.jspr.2025.102619', creditUrl: 'https://doi.org/10.1016/j.jspr.2025.102619', caption: 'Fig.1 — RGSVLM / Granary-sweeping benchmark (DOI 10.1016/j.jspr.2025.102619), used under fair use.' },
  'R059': { src: '/thumbnails/r059.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'DOI 10.1016/j.tust.2026.107897', creditUrl: 'https://doi.org/10.1016/j.tust.2026.107897', caption: 'Fig.1 — ShieldGPT (DOI 10.1016/j.tust.2026.107897), used under fair use.' },
  'R060': { src: '/thumbnails/r060.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'DOI 10.1016/j.autcon.2026.106997', creditUrl: 'https://doi.org/10.1016/j.autcon.2026.106997', caption: 'Fig.1 — UndergrBench (DOI 10.1016/j.autcon.2026.106997), used under fair use.' },
  'R061': { src: '/thumbnails/r061.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'DOI 10.1016/j.asoc.2025.113939', creditUrl: 'https://doi.org/10.1016/j.asoc.2025.113939', caption: 'Fig.1 — PowerGPT / PowerBENCH (DOI 10.1016/j.asoc.2025.113939), used under fair use.' },
  'R062': { src: '/thumbnails/r062.jpg', usage: 'fair-use', license: 'Fair use', creditShort: 'DOI 10.1016/j.jrmge.2025.12.038', creditUrl: 'https://doi.org/10.1016/j.jrmge.2025.12.038', caption: 'Fig.1 — Geo-RE / Geo-QA (DOI 10.1016/j.jrmge.2025.12.038), used under fair use.' },
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
