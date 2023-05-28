import Webp from "../../assets";
import { ReactComponent as ATK } from "../../assets/general/atk.svg";
import { ReactComponent as DEF } from "../../assets/general/def.svg";
import { ReactComponent as HP } from "../../assets/general/hp.svg";
import { ReactComponent as SPD } from "../../assets/general/spd.svg";
import { ReactComponent as Star } from "../../assets/general/star.svg";
import { ReactComponent as TAUNT } from "../../assets/general/taunt.svg";
import { Attribute, Character, Tier } from "../../data/Characters";
import { useEffect, useState } from "react";

/**
 * General tab.
 */
export default function General({ character }: { character: Character }) {
  // Tier color
  const [tierColor, setTierColor] = useState({ border: "border-slate-950", text: "text-slate-950" });
  useEffect(() => {
    switch (character.dynamic.tier) {
      case Tier["S+"]:
        setTierColor({ border: "border-amber-500", text: "text-amber-500" });
        break;
      case Tier["S"]:
        setTierColor({ border: "border-blue-500", text: "text-blue-500" });
        break;
      case Tier["A"]:
        setTierColor({ border: "border-blue-300", text: "text-blue-300" });
        break;
      case Tier["B"]:
        setTierColor({ border: "border-white-500", text: "text-white-500" });
        break;
      case Tier["C"]:
        setTierColor({ border: "border-red-300", text: "text-red-300" });
        break;
      case Tier["D"]:
        setTierColor({ border: "border-red-500", text: "text-red-500" });
        break;
    }
  }, []);

  // Attribute icon JSX
  const AttributeIcon = ({ typeUID, className }: { typeUID: Attribute; className?: string }) => {
    switch (typeUID) {
      case Attribute["HP"]:
        return <HP className={"fill-rose-500" + (className ? ` ${className}` : "")} />;
      case Attribute["ATK"]:
        return <ATK className={"fill-indigo-500" + (className ? ` ${className}` : "")} />;
      case Attribute["DEF"]:
        return <DEF className={"fill-sky-500" + (className ? ` ${className}` : "")} />;
      case Attribute["SPD"]:
        return <SPD className={"fill-emerald-500" + (className ? ` ${className}` : "")} />;
      case Attribute["TAUNT"]:
        return <TAUNT className={"fill-amber-500" + (className ? ` ${className}` : "")} />;
    }
  };

  // Render
  return (
    <div
      className={`relative justify-between space-y-8 rounded-xl bg-slate-950 bg-cover bg-right`}
      style={{
        backgroundImage: `url(/src/assets/characters/${character.nameUID
          .replaceAll(" ", "%20")
          .replaceAll("(", "%28")
          .replaceAll(")", "%29")}/wp.webp)`,
      }}
    >
      {/* E1 */}
      <div className="flex items-center space-x-4 py-4">
        {/* Photo */}
        <div className={`relative flex h-24 w-24 flex-col items-center rounded-md border-2 ${tierColor.border} shadow`}>
          <div className="absolute -top-4 flex">
            {Array.from({ length: character.static.star }, (_, idx) => (
              <Star key={idx} className="h-5 w-5 fill-yellow-500" />
            ))}
          </div>
          <Webp src={`./characters/${character.nameUID}/photo.webp`} className="p-1" />
          <div
            className={`absolute -bottom-4 rounded-md border-2 ${tierColor.border} bg-slate-950 px-2 text-sm font-bold ${tierColor.text} ring-4 ring-slate-950`}
          >
            {character.dynamic.tier}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-4xl font-bold">{character.nameUID}</p>
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <Webp src={`./elements/${character.static.element}.webp`} className="h-10 w-10" />
              <p className="text-xl font-bold">{character.static.element}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Webp src={`./paths/${character.static.path}.webp`} className="h-8 w-8" />
              <p className="text-xl font-bold">{character.static.path}</p>
            </div>
          </div>
        </div>
      </div>

      {/* E2 */}
      {/* TODO at the end when all sections are made */}

      {/* E3 */}
      <div className="w-2/3 rounded-md bg-indigo-950 shadow">
        <div className="space-y-2 p-4">
          <div className="flex items-center space-x-4">
            <span className="h-5 w-0.5 bg-blue-500" />
            <p className="text-lg font-bold">Playstyle</p>
          </div>
          <p className="text-sm italic">{character.dynamic.playstyle}</p>
        </div>
      </div>

      {/* E4 */}
      <div className="grid grid-flow-col justify-stretch divide-x-2 divide-slate-950 rounded-md bg-indigo-950 shadow">
        {character.static.attributes.map((attribute) => (
          <div key={attribute.typeUID} className="flex flex-col items-center py-6">
            <p className="text-3xl font-bold">{attribute.value}</p>
            <div className="flex items-center space-x-1">
              <AttributeIcon typeUID={attribute.typeUID} className="h-6 w-6" />
              <p className="text-xs uppercase">{attribute.typeUID}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}