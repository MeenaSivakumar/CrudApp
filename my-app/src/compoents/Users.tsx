import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Paper, IconButton } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { setUsers, deleteUser } from '../redux/UsersSlice';

const Users = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const users = useSelector((state: any) => state.users); // Accessing users from Redux state

  useEffect(() => {
    // Fetch users from JSONPlaceholder API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch(setUsers(response.data)); // Dispatch users to Redux state
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [dispatch]);

  const handleDeleteUser = (id: number) => {
    dispatch(deleteUser(id)); // Dispatch delete action to Redux
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      renderCell: (params: any) => (
        <div>
          <IconButton color="primary">
            <EditIcon />
          </IconButton>
          <IconButton color="secondary" onClick={() => handleDeleteUser(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <Button variant="contained" color="primary" className="mb-4">
        Add New User
      </Button>
      <Paper className="mt-4">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={users}
                columns={columns}
                disableRowSelectionOnClick // Optional: Disable row selection on click
              />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Users;
