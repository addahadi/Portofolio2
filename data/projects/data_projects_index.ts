import type { Project, ProjectCategory } from "@/types";

// ── One JSON file per project ────────────────────────────────────────────────
// To add a project: drop a new <slug>.json in this folder and import it below.
// To edit a project: change only its JSON file. Nothing else needs to be touched.
// The JSON shape must match the `Project` interface in types/index.ts.
import apex from "./apex.json";
import diaginfectAi from "./diaginfect-ai.json";
import quanticonstruct from "./quanticonstruct.json";
import devlearnPlatform from "./devlearn-platform.json";
import inventoryApi from "./inventory-api.json";

// Order here is the default/source order. Featured-first ordering for display
// is handled in the UI (ProjectsGrid / FeaturedProjects).
export const projects: Project[] = [
  apex,
  diaginfectAi,
  quanticonstruct,
  devlearnPlatform,
  inventoryApi,
] as Project[];

export const projectCategories: readonly ProjectCategory[] = [
  "All",
  "Web App",
  "API",
  "AI/ML",
  "Tool",
  "Mobile",
];
