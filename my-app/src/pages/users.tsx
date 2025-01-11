import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Paper,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface User {
  id: number;
  name: string;
  email: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' },
    { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv' },
  ]);

  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleAddUser = () => {
    if (editingUser) {
      // Update user (do not overwrite id)
      setUsers(
        users.map((user) =>
          user.id === editingUser.id ? { ...user, ...newUser } : user
        )
      );
    } else {
      // Add new user with a unique id
      setUsers([...users, { id: users.length + 1, name: newUser.name, email: newUser.email }]);
    }
    setOpen(false);
    setNewUser({ name: '', email: '' });
    setEditingUser(null);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setNewUser({ name: user.name, email: user.email });
    setOpen(true);
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div>
          <IconButton color="primary" onClick={() => handleEditUser(params.row)}>
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
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add New User
      </Button>
      <Paper className="mt-4">
        <div style={{ height: 400, width: '100%' }}>
          {/* Removed pageSize to avoid pagination error */}
          <DataGrid rows={users} columns={columns} />
        </div>
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{editingUser ? 'Edit User' : 'Add New User'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <TextField
            label="Email"
            fullWidth
            margin="dense"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddUser} color="primary">
            {editingUser ? 'Update' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Users;
