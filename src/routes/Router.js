import React, { Children, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import CompanyProfile from '../pages/companyProfile';
import AppLayout from '../layouts/appLayout';
import Projects from '../pages/projects';
import CreateProject from '../pages/createProject';
export const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'company-profile',
        element: <CompanyProfile />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'createProject',
        element: <CreateProject />,
      },
    ],
  },
]);
