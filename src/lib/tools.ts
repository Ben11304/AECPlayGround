// Vendored copy of CURATOR tool_records.jsonl (as JSON array) inside the project (src/data/tools.json).
// Re-sync from CURATOR outputs/tool_records.jsonl after each CURATOR tools update.
// Source: CURATOR 0.4.1 tool_records.jsonl (47 records T001–T047, schema v2.0, 18 clusters).

// @ts-ignore — JSON import assertion
import rawData from '../data/tools.json';

export interface AECTool {
  tool_id: string;
  name: string;
  category: string;
  category_cluster: string;
  aec_task: string[];
  ai_type: string;
  input_modality: string[];
  output_modality: string[];
  license: string;
  access: 'open-source' | 'commercial' | 'freemium';
  pricing_tier: string;
  resolvable_url: string;
  github_url: string | null;
  integration_ecosystem: string[];
  maturity: string;
  paper_doi: string | null;
  arxiv_id: string | null;
  api_available: string;
  benchmark_target: string;
  short_description: string;
  notes: string;
  provenance: string;
  verification_status: string;
  hardware_required: boolean;
}

export const tools: AECTool[] = rawData as AECTool[];

export function getToolById(id: string): AECTool | undefined {
  return tools.find((t) => t.tool_id.toLowerCase() === id.toLowerCase());
}

export function toToolSlug(id: string): string {
  return id.toLowerCase();
}

/** Unique cluster values across all tools (order preserved from data) */
export const clusters: string[] = [...new Set(tools.map((t) => t.category_cluster))];

/** Cluster → display color classes (Tailwind, dark-palette site) */
export function clusterColorCls(cluster: string): string {
  switch (cluster) {
    case 'BIM/IFC AI':                     return 'bg-teal-50 text-teal-700 border-teal-300';
    case 'Code/Compliance AI':             return 'bg-indigo-50 text-indigo-700 border-indigo-300';
    case 'Drawing/Takeoff AI':             return 'bg-violet-50 text-violet-700 border-violet-300';
    case 'Generative Design AI':           return 'bg-purple-50 text-purple-700 border-purple-300';
    case 'Construction Site Monitoring AI':return 'bg-orange-50 text-orange-700 border-orange-300';
    case 'PM/RAG Assistants':              return 'bg-emerald-50 text-emerald-700 border-emerald-300';
    case 'Structural AI':                  return 'bg-red-50 text-red-700 border-red-300';
    case 'Energy/Sustainability AI':       return 'bg-lime-50 text-lime-700 border-lime-300';
    case 'HVAC/MEP AI':                    return 'bg-cyan-50 text-cyan-700 border-cyan-300';
    case 'Scan-to-BIM/Reality-Capture AI': return 'bg-blue-50 text-blue-700 border-blue-300';
    case 'Digital Twin AI':                return 'bg-sky-50 text-sky-700 border-sky-300';
    case 'Drone/Aerial AI':                return 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-300';
    case 'Construction Robotics/Automation':return 'bg-amber-50 text-amber-700 border-amber-300';
    case 'Surveying/Geospatial AI':        return 'bg-green-50 text-green-700 border-green-300';
    case 'Geotechnical AI':                return 'bg-yellow-50 text-yellow-700 border-yellow-300';
    case 'Safety AI':                      return 'bg-rose-50 text-rose-700 border-rose-300';
    case 'FM/Operations AI':               return 'bg-zinc-50 text-zinc-700 border-zinc-300';
    case 'AEC Code-Gen Copilots':          return 'bg-pink-50 text-pink-700 border-pink-300';
    default:                               return 'bg-slate-100/60 text-slate-600 border-slate-300/60';
  }
}

/** Access badge: open-source → emerald, freemium → teal, commercial → slate */
export function accessCls(access: string): string {
  if (access === 'open-source') return 'bg-emerald-50 text-emerald-700 border border-emerald-300';
  if (access === 'freemium')    return 'bg-teal-50 text-teal-700 border border-teal-300';
  return 'bg-slate-100/60 text-slate-600 border border-slate-300/60';
}

/** Access label for display */
export function accessLabel(access: string): string {
  if (access === 'open-source') return 'Open-source';
  if (access === 'freemium')    return 'Freemium';
  return 'Commercial';
}

/** Maturity label → display text */
export function maturityLabel(maturity: string): string {
  switch (maturity) {
    case 'commercial-product':    return 'Commercial';
    case 'research-prototype':    return 'Research';
    case 'open-source-active':    return 'OSS Active';
    case 'enterprise-established':return 'Enterprise';
    default: return maturity;
  }
}

/** Maturity badge color */
export function maturityCls(maturity: string): string {
  switch (maturity) {
    case 'commercial-product':    return 'bg-sky-50 text-sky-700 border border-sky-300';
    case 'research-prototype':    return 'bg-amber-50 text-amber-700 border border-amber-300';
    case 'open-source-active':    return 'bg-emerald-50 text-emerald-700 border border-emerald-300';
    case 'enterprise-established':return 'bg-slate-300/60 text-slate-800 border border-slate-600/60';
    default: return 'bg-slate-100/60 text-slate-600 border border-slate-300/60';
  }
}
