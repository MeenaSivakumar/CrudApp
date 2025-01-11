import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setUsers: (state: { users: any; }, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deleteUser: (state: { users: any[]; }, action: PayloadAction<number>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

export const { setUsers, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
