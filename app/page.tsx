import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-[720px] px-4 py-16">
      <h1 className="text-2xl font-bold">Algebra 1 practice</h1>

      <p className="mt-4 text-muted">
        Practise linear equations, functions and quadratics for the January Regents.
      </p>

      <Link
        href="/login"
        className="mt-8 inline-flex min-h-11 items-center rounded-lg bg-brand px-6 font-semibold text-white hover:bg-brand-hover active:bg-brand-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        Log in
      </Link>
    </main>
  );
}