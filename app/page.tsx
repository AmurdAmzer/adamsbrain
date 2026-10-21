import Link from "next/link";

export default function Home() {

  return (
  <div>
    <header>
      AdamsBrain
    </header>

    <main>
      <h1>
        Algebra 1 practice
      </h1>

      <p>
        Practise linear equations, functions and quadratics for the January Regents.
      </p>
      <Link href="/login">Log in</Link>
    </main>
  </div>
  );
}