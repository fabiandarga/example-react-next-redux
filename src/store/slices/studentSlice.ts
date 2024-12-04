import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from '../types/student';

interface StudentState {
students: Student[];
loading: boolean;
error: string | null;
}

const initialState: StudentState = {
students: [],
loading: false,
error: null,
};

const studentSlice = createSlice({
name: 'students',
initialState,
reducers: {
    addStudent: (state, action: PayloadAction<Student>) => {
    state.students.push(action.payload);
    },
    removeStudent: (state, action: PayloadAction<string>) => {
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
