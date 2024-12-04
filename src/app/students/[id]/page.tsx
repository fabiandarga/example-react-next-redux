import Link from 'next/link';

type Params = Promise<{ id: string }>;

export default async function StudentDetailsPage({ params }: { params: Params }) {
  const students = [
    { id: 1, name: 'Peter', age: 22, email: 'peter@example.com' },
    { id: 2, name: 'Bob', age: 23, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 27, email: 'charlie@example.com' },
    { id: 4, name: 'Judy', age: 27, email: 'Judy@example.com' },
    { id: 5, name: 'Alice', age: 25, email: 'alice@example.com' },
  ];

  const id = parseInt((await params).id);
  const student = students.find((s) => s.id === id);

  return (
    <div className="p-8">
      <h1 className="text-lg mb-4">Student Details</h1>
      {student && (
        <>
        <strong>{student.name}</strong>: {student.age}
        <p>{student.email}</p>
        </>
      )}
      <span className="inline-block mt-6 text-amber-200 hover:text-amber-500">
        <Link href="/students">Back to Students</Link>
      </span>
    </div>
  );
};
