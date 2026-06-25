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
    case 'BIM/IFC AI':                     return 'bg-teal-900/50 text-teal-300 border-teal-800/60';
    case 'Code/Compliance AI':             return 'bg-indigo-900/50 text-indigo-300 border-indigo-800/60';
    case 'Drawing/Takeoff AI':             return 'bg-violet-900/50 text-violet-300 border-violet-800/60';
    case 'Generative Design AI':           return 'bg-purple-900/50 text-purple-300 border-purple-800/60';
    case 'Construction Site Monitoring AI':return 'bg-orange-900/50 text-orange-300 border-orange-800/60';
    case 'PM/RAG Assistants':              return 'bg-emerald-900/50 text-emerald-300 border-emerald-800/60';
    case 'Structural AI':                  return 'bg-red-900/50 text-red-300 border-red-800/60';
    case 'Energy/Sustainability AI':       return 'bg-lime-900/50 text-lime-300 border-lime-800/60';
    case 'HVAC/MEP AI':                    return 'bg-cyan-900/50 text-cyan-300 border-cyan-800/60';
    case 'Scan-to-BIM/Reality-Capture AI': return 'bg-blue-900/50 text-blue-300 border-blue-800/60';
    case 'Digital Twin AI':                return 'bg-sky-900/50 text-sky-300 border-sky-800/60';
    case 'Drone/Aerial AI':                return 'bg-fuchsia-900/50 text-fuchsia-300 border-fuchsia-800/60';
    case 'Construction Robotics/Automation':return 'bg-amber-900/50 text-amber-300 border-amber-800/60';
    case 'Surveying/Geospatial AI':        return 'bg-green-900/50 text-green-300 border-green-800/60';
    case 'Geotechnical AI':                return 'bg-yellow-900/50 text-yellow-300 border-yellow-800/60';
    case 'Safety AI':                      return 'bg-rose-900/50 text-rose-300 border-rose-800/60';
    case 'FM/Operations AI':               return 'bg-zinc-800/60 text-zinc-300 border-zinc-700/60';
    case 'AEC Code-Gen Copilots':          return 'bg-pink-900/50 text-pink-300 border-pink-800/60';
    default:                               return 'bg-slate-800/60 text-slate-400 border-slate-700/60';
  }
}

/** Access badge: open-source → emerald, freemium → teal, commercial → slate */
export function accessCls(access: string): string {
  if (access === 'open-source') return 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60';
  if (access === 'freemium')    return 'bg-teal-950/60 text-teal-300 border border-teal-800/60';
  return 'bg-slate-800/60 text-slate-400 border border-slate-700/60';
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
    case 'commercial-product':    return 'bg-sky-900/50 text-sky-300 border border-sky-800/60';
    case 'research-prototype':    return 'bg-amber-900/50 text-amber-300 border border-amber-800/60';
    case 'open-source-active':    return 'bg-emerald-900/50 text-emerald-300 border border-emerald-800/60';
    case 'enterprise-established':return 'bg-slate-700/60 text-slate-200 border border-slate-600/60';
    default: return 'bg-slate-800/60 text-slate-400 border border-slate-700/60';
  }
}
