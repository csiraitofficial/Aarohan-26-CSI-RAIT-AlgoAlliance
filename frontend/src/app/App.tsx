import { RouterProvider } from 'react-router';
import { router } from './routes';
<<<<<<< HEAD
import { AuthProvider } from '../context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
=======

function App() {
  return <RouterProvider router={router} />;
>>>>>>> db8c60f5a9e29b5834a92db9f1c317ff4a7b243b
}

export default App;
