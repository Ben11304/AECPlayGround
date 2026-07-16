import type { Benchmark } from './types';
import { isExcluded } from './integrity';

// Vendored copy of canonical catalog/benchmarks.json inside the project (src/data/).
// Re-sync this file from outputs/catalog/benchmarks.json after each CURATOR data update.
// @ts-ignore — JSON import assertion
import rawData from '../data/benchmarks.json';

const allData = rawData as Benchmark[];

/** All 55 included benchmarks (R032 excluded per VERIFIER 0.5.23 F-054; R057 excluded EX7 2026-07-16) */
export const benchmarks: Benchmark[] = allData.filter(
  (b) => !isExcluded(b.source_record_id)
);

/** Look up a single benchmark by source_record_id (e.g. 'R001') */
export function getBenchmarkById(id: string): Benchmark | undefined {
  return benchmarks.find((b) => b.source_record_id === id.toUpperCase());
}

/** URL-safe slug from source_record_id: 'R001' → 'r001' */
export function toSlug(id: string): string {
  return id.toLowerCase();
}

/** source_record_id from slug: 'r001' → 'R001' */
export function fromSlug(slug: string): string {
  return slug.toUpperCase();
}

/** Active modality keys for a benchmark */
export function activeModalities(b: Benchmark): string[] {
  const m = b.modality;
  return Object.entries(m)
    .filter(([k, v]) => k !== 'notes' && v === true)
    .map(([k]) => k);
}

/** Domain chips (split multi-domain string by ';') */
export function domainChips(b: Benchmark): string[] {
  return b.capability.domain
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Group reported_results by model */
export function groupResultsByModel(b: Benchmark): Map<string, typeof b.reported_results> {
  const map = new Map<string, typeof b.reported_results>();
  for (const r of b.reported_results) {
    const existing = map.get(r.model_string) ?? [];
    existing.push(r);
    map.set(r.model_string, existing);
  }
  return map;
}

/** Rubric dimension values as ordered array for radar chart */
export function rubricValues(b: Benchmark): number[] {
  const r = b.rubric;
  return [
    r.d1_domain_authenticity,
    r.d2_task_validity,
    r.d3_modality_coverage,
    r.d4_annotation_quality,
    r.d5_evaluation_clarity,
    r.d6_baseline_coverage,
    r.d7_reproducibility,
    r.d8_leakage_control,
    r.d9_human_baseline,
    r.d10_practical_relevance,
  ];
}

export { allData };
