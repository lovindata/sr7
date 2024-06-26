import Panel from "./Panel";
import { Character } from "@/data/characters";

/**
 * Comp tab.
 */
export default function Comp({ character }: { character: Character }) {
  // Get data
  const bestTeam = character.dynamic.comp.best.map(({ char, role }) => ({
    nameUID: char,
    role: role,
  }));
  const f2pTeam = character.dynamic.comp.f2p.map(({ char, role }) => ({
    nameUID: char,
    role: role,
  }));

  // Render
  return (
    <div className="divide-y-2 divide-slate-950 rounded-md bg-indigo-950">
      {/* E1 */}
      <div className="space-y-4 p-4">
        <div className="flex items-center space-x-4">
          <span className="h-5 w-0.5 bg-blue-500" />
          <h1 className="text-lg font-bold">Best team</h1>
        </div>
        <div className="flex justify-evenly space-x-4">
          {bestTeam.map(({ nameUID, role }) => (
            <Panel key={nameUID} nameUID={nameUID} role={role} />
          ))}
        </div>
      </div>

      {/* E2 */}
      <div className="space-y-4 p-4">
        <div className="flex items-center space-x-4">
          <span className="h-5 w-0.5 bg-blue-500" />
          <h1 className="text-lg font-bold">F2P team</h1>
        </div>
        <div className="flex justify-evenly space-x-4">
          {f2pTeam.map(({ nameUID, role }) => (
            <Panel key={nameUID} nameUID={nameUID} role={role} />
          ))}
        </div>
      </div>
    </div>
  );
}
