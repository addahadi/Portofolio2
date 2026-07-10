import type { Project, ProjectCategory } from "@/types";

// ── One JSON file per project ────────────────────────────────────────────────
// To add a project: drop a new <slug>.json in this folder and import it below.
// To edit a project: change only its JSON file. Nothing else needs to be touched.
// The JSON shape must match the `Project` interface in types/index.ts.
import diaginfectAi from "./diaginfect-ai.json";
import apex from "./apex.json";
import devlevelup from "./devlevelup.json";
import municipalityMatters from "./municipality-matters.json";
import gdgEventsPlatform from "./gdg-events-platform.json";
import gdgImpactHub from "./gdg-impact-hub.json";
import intelligentEquipmentRefurbishment from "./intelligent-equipment-refurbishment.json";
import storyWebsite from "./story-website.json";
import cybernexusWebsite from "./cybernexus-website.json";

// Order here is the default/source order. Featured-first ordering for display
// is handled in the UI (ProjectsGrid / FeaturedProjects).
export const projects: Project[] = [
  diaginfectAi,
  apex,
  gdgEventsPlatform,
  municipalityMatters,
  gdgImpactHub,
  devlevelup,
  cybernexusWebsite,
  intelligentEquipmentRefurbishment,
  storyWebsite,
] as Project[];

export const projectCategories: readonly ProjectCategory[] = [
  "All",
  "Web App",
  "API",
  "AI/ML",
  "Tool",
  "Mobile",
];
