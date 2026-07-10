import Link from "next/link";
import BackgroundFlags from "../components/BackgroundFlags";
 
export default function Home() {

  return (
     
    <main className="relative min-h-screen overflow-hidden bg-gray-100 ">
     <BackgroundFlags />

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
  {/* Your title */}
  {/* Buttons */}
<div className="
 relative
  w-[550px]
  rounded-3xl
  border border-white/30
  bg-white
  backdrop-blur-xl
  shadow-[0_0_100px_rgba(0,0,0,0.4)]
  p-12
  text-center
  pointer-events-auto
">
  {/* Decorative Glow */}
  <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-blue-400/30 blur-3xl"></div>
  <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-cyan-300/30 blur-3xl"></div>

  <h1 className="text-3xl pr-2 font-extrabold text-blue-700 tracking-wide mb-6">
    🌍 Guess The Flag
  </h1>

  <p className="text-xl text-gray-700 mb-10">
    Test your geography knowledge 
  </p>

  <div className="flex flex-col gap-5 pl-28">

    <Link
      href="/game"
      className="
      w-60
      
        rounded-xl
        bg-blue-600
        px-8
        py-4
        text-xl
        font-bold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:bg-blue-700
        curser-pointer
      "
    >
      ▶ Start Game
    </Link>

    <Link
      href="https://www.worldatlas.com/countries"
      target="_blank"
      className="
      w-60
        rounded-xl
        border
        border-gray-300
        bg-white/60
        px-8
        py-4
        text-lg
        font-semibold
        transition-all
        duration-300
        hover:bg-white
         hover:-translate-y-1
          hover:scale-105
        hover:shadow-lg
        curser-pointer
      "
    >
      📚 Learn First
    </Link>

  </div>
</div>
</div>
</main>
  );
}