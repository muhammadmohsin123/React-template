import { Router } from './routes/Router';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
function App() {
  return <RouterProvider router={Router} />;
}

export default App;
