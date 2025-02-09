import ButtonAppStore from "@/components/button-app-store";
import Hero from "@/components/hero";
import Desktop from "@/components/desktop";
import { META } from "@/lib/meta";

export default function Index() {
  return (
    <>
      <section className="flex w-full flex-col items-center sm:pt-24">
        <Hero></Hero>
        <Desktop></Desktop>
        <section>
          <p className="mt-24 max-w-3xl text-justify font-mono text-2xl leading-relaxed font-semibold text-black sm:mt-48 sm:text-3xl">
            &nbsp; Monitor your Vercel deployments real-time on your Mac—no need
            to open the web app! With Deplog, all your deployment updates are
            just one click away, right from your Mac’s menu bar.
          </p>
          <br></br>
          <br></br>
          <p className="hidden max-w-3xl text-justify font-mono text-2xl leading-relaxed font-semibold text-black sm:block sm:text-3xl">
            &nbsp; Deplog simplifies deployment monitoring, saving you time and
            effort. Click, check, and carry on!
          </p>

          <div className="mt-16 flex justify-center">
            <ButtonAppStore />
          </div>
        </section>
        <footer className="mt-24 flex w-full flex-col items-center justify-center gap-12 sm:gap-4">
          <p className="font-serif text-4xl font-semibold text-stone-400 sm:text-3xl sm:text-black">
            Deplog
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href={META.links.appstore}
              target="_blank"
              className="text-lg font-semibold text-[#0b0b0b] hover:text-[#000000] sm:text-base"
            >
              App Store
            </a>
            <div className="hidden h-1 w-1 rounded-full bg-stone-300 sm:block"></div>
            <a
              href="mailto:y.emre.demirbulut@gmail.com"
              className="text-lg font-semibold text-[#0b0b0b] hover:text-[#000000] sm:text-base"
            >
              Contact
            </a>
            <div className="hidden h-1 w-1 rounded-full bg-stone-300 sm:block"></div>
            <a
              href={META.links.x}
              target="_blank"
              className="text-lg font-semibold text-[#0b0b0b] hover:text-[#000000] sm:text-base"
            >
              X (a.k.a Twitter)
            </a>
            <div className="hidden h-1 w-1 rounded-full bg-stone-300 sm:block"></div>
            <a
              href="/privacy"
              className="text-lg font-semibold text-[#0b0b0b] hover:text-[#000000] sm:text-base"
            >
              Privacy Policy
            </a>
          </div>
          <div>
            <p className="font-semibold text-stone-400">
              Crafted by Emre Demirbulut
            </p>
            <p className="text-center font-semibold text-stone-400">©2025</p>
          </div>
        </footer>
      </section>
    </>
  );
}
