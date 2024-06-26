import EidolonPannel from "./EidolonPannel";
import Separator from "./Separator";
import SkillPannel from "./SkillPannel";
import TracePannel from "./TracePannel";
import { Character } from "@/data/characters";

/**
 * Skill, trace & eidolon priority tab.
 */
export default function SkillTraceEidolonPriority({ character }: { character: Character }) {
  return (
    <div className="divide-y-2 divide-slate-950 rounded-md bg-indigo-950">
      {/* Skill priority */}
      <div className="space-y-4 p-4">
        <div className="flex items-center space-x-4">
          <span className="h-5 w-0.5 bg-blue-500" />
          <h1 className="text-lg font-bold">Skill priority</h1>
        </div>
        <div className="flex items-center justify-center">
          {character.dynamic.skillPriority.flatMap((skill, idx) => {
            if (idx === character.dynamic.skillPriority.length - 1)
              return [<SkillPannel character={character} typeUID={skill} key={skill} />];
            else return [<SkillPannel character={character} typeUID={skill} key={skill} />, <Separator key={idx} />];
          })}
        </div>
      </div>

      {/* Trace priority */}
      <div className="space-y-4 p-4">
        <div className="flex items-center space-x-4">
          <span className="h-5 w-0.5 bg-blue-500" />
          <h1 className="text-lg font-bold">Trace priority</h1>
        </div>
        <div className="flex items-center justify-center">
          {character.dynamic.tracePriority.flatMap((trace, idx) => {
            if (idx === character.dynamic.tracePriority.length - 1)
              return [<TracePannel character={character} typeUID={trace} key={trace} />];
            else return [<TracePannel character={character} typeUID={trace} key={trace} />, <Separator key={idx} />];
          })}
        </div>
      </div>

      {/* Eidolon priority */}
      <div className="space-y-4 p-4">
        <div className="flex items-center space-x-4">
          <span className="h-5 w-0.5 bg-blue-500" />
          <h1 className="text-lg font-bold">Eidolon priority</h1>
        </div>
        <div className="flex items-center justify-center space-x-10">
          {character.static.eidolons.flatMap((eidolon) => {
            const priorityIdx = character.dynamic.eidolonPriority.indexOf(eidolon.typeUID);
            const priorityNumber = priorityIdx == -1 ? undefined : priorityIdx + 1;
            return (
              <EidolonPannel
                character={character}
                typeUID={eidolon.typeUID}
                key={eidolon.typeUID}
                priorityNumber={priorityNumber}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
