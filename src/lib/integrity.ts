// Integrity constants — single source of truth for gating rules
// Mirrors preview.html LB_NO_RESULTS / EXCLUDED sets

/** Records with zero source_confirmed reported_results rows (derived from benchmarks.json:
 *  26 minus the 15 with results). Re-derive whenever reported_results changes. */
export const LB_NO_RESULTS = new Set(['R004', 'R008', 'R013', 'R017', 'R033', 'R035', 'R036', 'R037', 'R039', 'R040', 'R041']);

/** Excluded records — must NEVER appear in catalog or inventory listings */
export const EXCLUDED = new Set(['R032']);

/** Records whose verification_status is not 'verified' */
export const VERIFY_STATUSES = new Set(['VERIFY', 'value_unverified', '[VERIFY]']);

/** Rubric dimension labels (d1–d10) */
export const RUBRIC_LABELS: Record<string, string> = {
  d1_domain_authenticity: 'Domain Auth.',
  d2_task_validity: 'Task Validity',
  d3_modality_coverage: 'Modality Cov.',
  d4_annotation_quality: 'Annotation Q.',
  d5_evaluation_clarity: 'Eval. Clarity',
  d6_baseline_coverage: 'Baseline Cov.',
  d7_reproducibility: 'Reproducibility',
  d8_leakage_control: 'Leakage Ctrl',
  d9_human_baseline: 'Human Baseline',
  d10_practical_relevance: 'Practical Rel.',
};

export const RUBRIC_KEYS = Object.keys(RUBRIC_LABELS) as Array<keyof typeof RUBRIC_LABELS>;

/** Max score per rubric dimension */
export const RUBRIC_MAX = 2;

/** Modality display names */
export const MODALITY_LABELS: Record<string, string> = {
  text: 'Text',
  tables: 'Tables',
  images: 'Images',
  engineering_drawings: 'Eng. Drawings',
  cad_floor_plans: 'CAD / Floor Plans',
  bim_ifc_3d: 'BIM / IFC / 3D',
  point_cloud: 'Point Cloud',
  video_multi_image: 'Video / Multi-Image',
  simulation_plot: 'Simulation Plot',
  symbolic_layout: 'Symbolic Layout',
  tool_api_env: 'Tool / API Env.',
  physics_simulation_env: 'Physics Sim.',
};

export function isNoResults(id: string): boolean {
  return LB_NO_RESULTS.has(id);
}

export function isExcluded(id: string): boolean {
  return EXCLUDED.has(id);
}

export function hasVerifyTag(verificationStatus: string): boolean {
  return VERIFY_STATUSES.has(verificationStatus) ||
    verificationStatus.includes('[VERIFY]') ||
    verificationStatus === 'value_unverified';
}
