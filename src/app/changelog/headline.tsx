"use client";

export default function ChangelogHeadline() {
  return (
    <>
      <div className="text-5xl font-bold tracking-tight text-black sm:text-8xl">
        <div className="relative z-30 -mb-3 -rotate-6 font-[Schoolbell] text-3xl text-red-500 sm:text-6xl">
          Change
        </div>
        <div className="font-[Bricolage_Grotesque]">
          <span className="relative inline-block">
            <span className="relative z-10">Dep</span>
            <span className="absolute inset-0" aria-hidden="true">
              <svg
                className="absolute inset-0 z-10 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                stroke="currentColor"
                fill="none"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d={`M5,${35} Q30,${30} 50,${35} T95,${35}`}
                  className="text-red-500"
                />
                <path
                  d={`M5,${53.5} Q25,${60.5} 50,${58.5} T95,${53.5}`}
                  className="text-red-500"
                />
                <path
                  d={`M5,${75} Q40,${80} 50,${75} T95,${75}`}
                  className="text-red-500"
                />
              </svg>
            </span>
          </span>
          log
        </div>
      </div>
    </>
  );
}
