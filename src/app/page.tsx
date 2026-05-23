import Navbar from "@/components/layout/navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="flex min-h-[80vh] items-center justify-center px-4">
        <div className="max-w-3xl text-center">

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            La plateforme e-commerce
            <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
              {" "}IA{" "}
            </span>
            nouvelle génération
          </h1>

          <p className="mb-8 text-lg text-zinc-400">
            Vente intelligente, recommandations IA,
            expérience premium et automatisation complète.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button className="rounded-full bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500">
              Commencer
            </button>

            <button className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-white transition hover:bg-zinc-900">
              Tester l’IA
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}