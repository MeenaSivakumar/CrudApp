import { Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-bold">Welcome to the App</h1>
      <p>Use the navigation bar to view and manage posts or users.</p>
      <div className="space-x-4">
        <Link href="/users" passHref>
          <Button variant="contained" color="primary">
            Go to Users
          </Button>
        </Link>
        <Link href="/posts" passHref>
          <Button variant="outlined" color="secondary">
            Go to Posts
          </Button>
        </Link>
      </div>
    </div>
  );
}
