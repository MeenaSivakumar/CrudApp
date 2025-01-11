import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          App
        </Typography>
        <Link href="/" passHref>
          <Button color="inherit">Home</Button>
        </Link>
        <Link href="/users" passHref>
          <Button color="inherit">Users</Button>
        </Link>
        <Link href="/posts" passHref>
          <Button color="inherit">Posts</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
