import Discord from "@/assets/socials/discord.svg";
import Facebook from "@/assets/socials/facebook.svg";
import Hoyolab from "@/assets/socials/hoyolab.svg";
import Instagram from "@/assets/socials/instagram.svg";
import Reddit from "@/assets/socials/reddit.svg";
import Tiktok from "@/assets/socials/tiktok.svg";
import Twitter from "@/assets/socials/twitter.svg";
import Youtube from "@/assets/socials/youtube.svg";
import Image from "next/image";
import Link from "next/link";

/**
 * Footer.
 */
export default function Footer() {
  return (
    <footer className="mx-4 flex items-center justify-between border-t-[1px] border-indigo-300 border-opacity-50 px-4 py-6">
      <Link href={"/"} className="text-sm font-bold text-indigo-300">
        © 2023 - SR7.NL
      </Link>
      <div className="flex items-center justify-between space-x-5">
        <a
          href="https://www.hoyolab.com/circles/6/39/official"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl p-1.5 transition-all duration-300 ease-in-out hover:rounded-md hover:bg-indigo-300 hover:shadow"
        >
          <Hoyolab className="h-6 w-6 fill-indigo-300 transition-all duration-300 ease-in-out group-hover:fill-slate-950" />
        </a>
        <a
          href="https://www.reddit.com/r/HonkaiStarRail/"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl p-1.5 transition-all duration-300 ease-in-out hover:rounded-md hover:bg-indigo-300 hover:shadow"
        >
          <Reddit className="h-6 w-6 fill-indigo-300 transition-all duration-300 ease-in-out group-hover:fill-slate-950" />
        </a>
        <a
          href="https://www.instagram.com/honkaistarrail/"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl p-1.5 transition-all duration-300 ease-in-out hover:rounded-md hover:bg-indigo-300 hover:shadow"
        >
          <Instagram className="h-6 w-6 fill-indigo-300 transition-all duration-300 ease-in-out group-hover:fill-slate-950" />
        </a>
        <a
          href="https://www.facebook.com/HonkaiStarRail/"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl p-1.5 transition-all duration-300 ease-in-out hover:rounded-md hover:bg-indigo-300 hover:shadow"
        >
          <Facebook className="h-6 w-6 fill-indigo-300 transition-all duration-300 ease-in-out group-hover:fill-slate-950" />
        </a>
        <a
          href="https://hsr.hoyoverse.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 ease-in-out hover:scale-110 hover:shadow"
        >
          <Image src={"/assets/general/official.webp"} alt="StarRail" height={60} width={60} className="rounded-md" />
        </a>
        <a
          href="https://discord.com/invite/honkaistarrail"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl p-1.5 transition-all duration-300 ease-in-out hover:rounded-md hover:bg-indigo-300 hover:shadow"
        >
          <Discord className="h-6 w-6 fill-indigo-300 transition-all duration-300 ease-in-out group-hover:fill-slate-950" />
        </a>
        <a
          href="https://www.youtube.com/@honkaistarrail"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl p-1.5 transition-all duration-300 ease-in-out hover:rounded-md hover:bg-indigo-300 hover:shadow"
        >
          <Youtube className="h-6 w-6 fill-indigo-300 transition-all duration-300 ease-in-out group-hover:fill-slate-950" />
        </a>
        <a
          href="https://twitter.com/honkaistarrail"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl p-1.5 transition-all duration-300 ease-in-out hover:rounded-md hover:bg-indigo-300 hover:shadow"
        >
          <Twitter className="h-6 w-6 fill-indigo-300 transition-all duration-300 ease-in-out group-hover:fill-slate-950" />
        </a>
        <a
          href="https://www.tiktok.com/discover/honkai-impact-star-rail"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl p-1.5 transition-all duration-300 ease-in-out hover:rounded-md hover:bg-indigo-300 hover:shadow"
        >
          <Tiktok className="h-6 w-6 fill-indigo-300 transition-all duration-300 ease-in-out group-hover:fill-slate-950" />
        </a>
      </div>
      <div className="flex space-x-4">
        <Link href={"/"} className="text-xs font-thin text-indigo-300">
          Credits {/* TODO Page */}
        </Link>
        <Link href={"/"} className="text-xs font-thin text-indigo-300">
          Contact {/* TODO Page */}
        </Link>
        <Link href={"/"} className="text-xs font-thin text-indigo-300">
          Policy {/* TODO Page */}
        </Link>
      </div>
    </footer>
  );
}
