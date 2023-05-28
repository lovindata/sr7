import { Path } from "./Utils";
import data from "./lightcones.json";

/**
 * Get light cone(s).
 *  - https://honkailab.com/honkai-star-rail-light-cones/ (light cones picture)
 */
export function getLightCones(nameUIDs: string[]) {
  if (!nameUIDs) return data as LightCone[];
  else return (data as LightCone[]).filter((_) => nameUIDs.includes(_.nameUID));
}

/**
 * Light Cone.
 */
interface LightCone {
  nameUID: string;
  path: Path;
  star: number;
  source: string;
  desc: string;
}