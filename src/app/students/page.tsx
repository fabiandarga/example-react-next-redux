import Link from 'next/link';

const StudentsPage = () => {
  const students = [
    { id: 1, name: 'Peter', age: 22, email: 'peter@example.com' },
    { id: 2, name: 'Bob', age: 23, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 27, email: 'charlie@example.com' },
    { id: 4, name: 'Judy', age: 27, email: 'Judy@example.com' },
    { id: 5, name: 'Alice', age: 25, email: 'alice@example.com' },
  ];
  return (
    <ul className="m-8">
    {students.map((student) => (
      <li key={student.id} className="mb-2">
        <strong>{student.name}</strong>: {student.age}
        <span className="mx-3 text-amber-200 hover:text-amber-500">
          <Link href={`/students/${student.id}`}>Show Details</Link>
        </span>
      </li>
    ))}
    </ul>
  );
};

export default StudentsPage;
