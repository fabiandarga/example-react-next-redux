import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from '../types/student';

interface StudentState {
students: Student[];
}

const initialState: StudentState = {
students: [
    { id: 1, name: 'Peter', age: 22, email: 'peter@example.com' },
    { id: 2, name: 'Bob', age: 23, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 27, email: 'charlie@example.com' },
    { id: 4, name: 'Judy', age: 27, email: 'Judy@example.com' },
    { id: 5, name: 'Alice', age: 25, email: 'alice@example.com' },
]
};

const studentSlice = createSlice({
name: 'students',
initialState,
reducers: {
    addStudent: (state, action: PayloadAction<Student>) => {
        state.students.push(action.payload);
    },

    removeStudent: (state, action: PayloadAction<number>) => {
        state.students = state.students.filter(student => student.id !== action.payload);
    },

    updateStudent: (state, action: PayloadAction<Student>) => {
        const index = state.students.findIndex(student => student.id === action.payload.id);
        if (index !== -1) {
            state.students[index] = action.payload;
        }
    },

    setStudents: (state, action: PayloadAction<Student[]>) => {
        state.students = action.payload;
    }
}
});

export const { addStudent, removeStudent, updateStudent, setStudents } = studentSlice.actions;
export default studentSlice.reducer;
