export default function Privacy() {
  return (
    <>
      <section className="flex w-full flex-col items-center sm:pt-24">
        <section>
          <h1 className="font-[Bricolage_Grotesque] text-5xl leading-[1.05] font-bold tracking-tight sm:text-8xl sm:leading-none">
            Privacy policy
          </h1>
          <p className="mt-12 max-w-3xl font-mono text-xl leading-relaxed font-semibold text-black sm:mt-24 sm:text-2xl">
            No data or personal information is collected by Deplog.
          </p>
          <br></br>
          <br></br>
          <h2 className="font-[Bricolage_Grotesque] text-2xl leading-[1.05] font-bold tracking-tight sm:text-3xl sm:text-4xl sm:leading-none">
            Have questions?
          </h2>
          <p className="mt-4 max-w-3xl font-mono text-xl leading-relaxed font-semibold text-black sm:text-2xl">
            If you have any questions or suggestions regarding this privacy
            policy, do not hesitate to{" "}
            <a href="mailto:y.emre.demirbulut@gmail.com" className="underline">
              contact me
            </a>
            .
          </p>
        </section>
      </section>
    </>
  );
}
