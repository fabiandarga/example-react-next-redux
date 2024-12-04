import { useAppSelector } from '@/store/hooks';
import Link from 'next/link';

const StudentsPage = () => {
  const students = useAppSelector((state) => state.students.students);
  
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
