import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import CompanyProfile from '../pages/companyProfile';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/company-profile',
    element: <CompanyProfile />,
  },
]);
