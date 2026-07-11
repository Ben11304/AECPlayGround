// Mirror of benchmarks.json structure — do NOT alter fields; source of truth is CURATOR

export interface BibliographicInfo {
  paper_title: string;
  authors: string;
  year: number | null;
  venue: string;
  doi: string | null;
  arxiv_id: string | null;
  repo_url: string | null;
  dataset_url: string | null;
  version_accessed: string;
}

export interface DomainInfo {
  aec_subdomain: string;
  lifecycle_stage: string;
  intended_user: string;
}

export interface TaskInfo {
  task_type: string;
  task_complexity: string;
  output_type: string;
}

export interface ModalityInfo {
  text: boolean;
  tables: boolean;
  images: boolean;
  engineering_drawings: boolean;
  cad_floor_plans: boolean;
  bim_ifc_3d: boolean;
  point_cloud: boolean;
  video_multi_image: boolean;
  simulation_plot: boolean;
  symbolic_layout: boolean;
  tool_api_env: boolean;
  physics_simulation_env: boolean;
  notes: string;
}

export interface DatasetProperties {
  n_samples: string;
  n_tasks_categories: string;
  data_source: string;
  annotation_method: string;
  expert_validation: string;
  license: string;
  accessibility: string;
  train_test_split: string;
  leakage_risk: string;
}

export interface EvaluationInfo {
  metrics: string;
  baseline_models: string;
  prompting_method: string;
  zero_few_shot: string;
  rag_tool_use: string;
  human_eval_method: string;
  llm_as_judge_method: string;
  robustness_tests: string;
  cost_latency_reporting: string;
}

export interface CapabilityInfo {
  domain: string;
  task_spans: string;
  modality_spans: string;
  evaluation_spans: string;
  capability_spans: string;
  scheme?: 'v1' | 'v2';
  profession?: string[];
  profession_label?: string | null;
  profession_provenance?: 'verified' | 'proposal_unverified' | 'missing';
  building_system?: string[];
  building_system_label?: string | null;
  building_system_provenance?: 'verified' | 'proposal_unverified' | 'missing';
  profession_note?: string;
}

export interface Rubric {
  d1_domain_authenticity: number;
  d2_task_validity: number;
  d3_modality_coverage: number;
  d4_annotation_quality: number;
  d5_evaluation_clarity: number;
  d6_baseline_coverage: number;
  d7_reproducibility: number;
  d8_leakage_control: number;
  d9_human_baseline: number;
  d10_practical_relevance: number;
  total: number;
}

export interface ReportedResult {
  model_string: string;
  metric_name: string;
  value: string;
  source_location: string;
  provenance_flag: 'source_confirmed' | 'claimed [VERIFY]' | 'value_unverified [VERIFY]';
}

export interface Example {
  id: string;
  text?: string;
  modality?: string;
  task_type?: string;
  instruction?: string;
  [key: string]: unknown;
}

export type VerificationStatus = 'verified' | 'value_unverified' | 'VERIFY' | string;
export type ProvenanceStatus = 'claimed' | 'verified' | string;

export interface Benchmark {
  name: string;
  identifier: string;
  verification_status: VerificationStatus;
  tier: 1 | 2 | 3;
  source_record_id: string;
  provenance: ProvenanceStatus;
  bibliographic: BibliographicInfo;
  domain_use_case: DomainInfo;
  task: TaskInfo;
  modality: ModalityInfo;
  dataset_properties: DatasetProperties;
  evaluation: EvaluationInfo;
  capability: CapabilityInfo;
  rubric: Rubric;
  reported_results: ReportedResult[];
  examples?: Example[];
}
