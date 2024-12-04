import Link from 'next/link';

export default function Home() {
  const students = [
    { id: 1, name: 'Peter', age: 22, email: 'peter@example.com' },
    { id: 2, name: 'Bob', age: 23, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 27, email: 'charlie@example.com' },
    { id: 4, name: 'Judy', age: 27, email: 'Judy@example.com' },
    { id: 5, name: 'Alice', age: 25, email: 'alice@example.com' },

  ];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link href="/students">Liste der Studenten</Link>
      </main>
    </div>
  );
}
