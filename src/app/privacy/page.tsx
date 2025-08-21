export default function Privacy() {
  return (
    <>
      <section className="flex w-full flex-col items-center sm:pt-24">
        <section>
          <h1 className="font-[Bricolage_Grotesque] text-5xl leading-[1.05] font-bold tracking-tight sm:text-8xl sm:leading-none">
            Privacy policy
          </h1>
          <p className="mt-12 max-w-3xl font-mono text-xl leading-relaxed font-semibold text-black sm:mt-24 sm:text-2xl">
            Your privacy matters. Deplog does not collect, store, or share any
            personal data or usage information. Everything you do stays on your
            Mac.
          </p>
          <br></br>
          <br></br>
          <p className="mt-4 max-w-3xl font-mono text-xl leading-relaxed font-semibold text-black sm:text-2xl">
            If you have any questions about this policy, please feel free to{" "}
            <a href="mailto:y.emre.demirbulut@gmail.com" className="underline">
              reach out to me
            </a>
            .
          </p>
        </section>
      </section>
    </>
  );
}
